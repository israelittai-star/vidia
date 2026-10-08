export const PROJECT_PERSISTENCE_JS = String.raw`
  const saveProjBtn=document.getElementById('saveProjBtn'),loadProjBtn=document.getElementById('loadProjBtn'),loadProjInput=document.getElementById('loadProjInput');
  function blobToB64(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result.split(',')[1]);r.onerror=()=>reject(r.error);r.readAsDataURL(blob);});}
  function b64ToBlob(b64,type){const bin=atob(b64),bytes=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);return new Blob([bytes],{type:type||'video/mp4'});}
  async function serializeProject(){
    const clipData=[],sources=new Map();
    for(const c of clips){
      if(!sources.has(c.url)){
        const response=await fetch(c.url);if(!response.ok)throw new Error(currentLang==='he'?'לא ניתן לקרוא את המדיה':'Cannot read media');
        const blob=await response.blob();sources.set(c.url,{blobB64:await blobToB64(blob),type:blob.type||'video/mp4'});
      }
      const {id,videoEl,url,...data}=c;clipData.push({...data,...sources.get(c.url)});
    }
    const overlays=[...texts,...stickers].map(t=>{const {id,el,innerEl,...data}=t;return data;});
    const fx=fxOverlays.map(({type,start,end,scale})=>({type,start,end,scale}));
    return {version:1,name:projectName.value,lang:currentLang,fps:projectFps,quality:projectQuality,ratioKey:currentRatioKey,ratioValue:RATIOS[currentRatioKey],pxPerSec,clips:clipData,overlays,fx};
  }
  saveProjBtn.addEventListener('click',async()=>{
    const original=saveProjBtn.innerHTML;saveProjBtn.disabled=true;saveProjBtn.textContent='⏳';
    try{
      const data=await serializeProject(),blob=new Blob([JSON.stringify(data)],{type:'application/json'}),url=URL.createObjectURL(blob);
      const a=document.createElement('a');a.href=url;a.download=(projectName.value||'project')+'.clipstudio.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    }catch(error){showToast((currentLang==='he'?'הייצוא נכשל: ':'Export failed: ')+error.message);}
    finally{saveProjBtn.disabled=false;saveProjBtn.innerHTML=original;const label=saveProjBtn.querySelector('[data-i18n]');if(label){label.dataset.i18n='export';label.textContent=I18N[currentLang].export;}saveProjBtn.title=I18N[currentLang].export;}
  });
  loadProjBtn.addEventListener('click',()=>loadProjInput.click());
  loadProjInput.addEventListener('change',async e=>{
    const file=e.target.files?.[0];loadProjInput.value='';if(!file)return;
    try{await loadProject(JSON.parse(await file.text()));}catch(error){showToast((currentLang==='he'?'הטעינה נכשלה: ':'Load failed: ')+error.message);}
  });
  async function loadProject(data){
    if(!data || !Array.isArray(data.clips) || !Array.isArray(data.overlays||[]) || !Array.isArray(data.fx||[]))throw new Error(currentLang==='he'?'קובץ פרויקט לא תקין':'Invalid project file');
    const media=data.clips.map(cd=>{if(typeof cd.blobB64!=='string')throw new Error(currentLang==='he'?'חסרה מדיה בפרויקט':'Project media is missing');return {cd,blob:b64ToBlob(cd.blobB64,cd.type)};});
    isPlaying=false;videoIsPausedManually=true;playBtn.textContent='▶';
    const urls=new Set(clips.map(c=>c.url));if(clipboardItem?.kind==='clip')urls.add(clipboardItem.data.url);clipboardItem=null;
    clips.forEach(c=>{c.videoEl.pause();c.videoEl.remove();});urls.forEach(url=>URL.revokeObjectURL(url));
    clips=[];[...texts,...stickers].forEach(t=>t.el.remove());texts=[];stickers=[];fxOverlays.forEach(f=>f.el.remove());fxOverlays=[];activeClipIndex=-1;clearSelection();
    emptyState.style.display='flex';playOverlay.style.display='none';
    if(['he','en'].includes(data.lang))applyLanguage(data.lang);
    projectFps=[30,60].includes(data.fps)?data.fps:30;fpsGroup.querySelectorAll('.seg-btn').forEach(b=>b.classList.toggle('active',Number(b.dataset.fps)===projectFps));
    projectQuality=['720p','1080p','ultra1080p','2k','4k'].includes(data.quality)?data.quality:'1080p';quality1080Sub.style.display=projectQuality.includes('1080p')?'flex':'none';syncQualityActive();
    if(data.ratioKey==='custom'&&Number.isFinite(data.ratioValue)&&data.ratioValue>0)RATIOS.custom=data.ratioValue;
    currentRatioKey=Object.hasOwn(RATIOS,data.ratioKey)?data.ratioKey:'orig';presetList.querySelectorAll('.preset-item').forEach(b=>b.classList.toggle('active',b.dataset.ratio===currentRatioKey));
    pxPerSec=Math.max(20,Math.min(300,Number(data.pxPerSec)||80));zoomSlider.value=pxPerSec;projectName.value=data.name||I18N[currentLang].untitled;
    const ready=[];
    media.forEach(({cd,blob})=>{
      const url=URL.createObjectURL(blob),videoEl=document.createElement('video');
      videoEl.playsInline=true;videoEl.preload='auto';videoEl.controls=false;videoEl.disablePictureInPicture=true;
      videoEl.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;display:none;background:#000;';videosLayer.appendChild(videoEl);
      const {blobB64,type,id:oldId,...stored}=cd;
      const clip={effectType:'none',intensity:60,easing:'linear',keyframes:[],crop:{x:0,y:0,w:100,h:100},volume:100,muted:false,fadeIn:0,fadeOut:0,playbackRate:1,audioNorm:false,...stored,id:'c'+(uid++),url,videoEl};clips.push(clip);
      ready.push(new Promise((resolve,reject)=>{
        videoEl.addEventListener('loadedmetadata',()=>{clip.duration=videoEl.duration;clip.trimStart=Math.max(0,Math.min(cd.trimStart||0,clip.duration));clip.trimEnd=Math.min(clip.duration,cd.trimEnd||clip.duration);if(clip.trimEnd<=clip.trimStart)clip.trimStart=0;resolve();},{once:true});
        videoEl.addEventListener('error',()=>reject(new Error(currentLang==='he'?'המדיה אינה נתמכת':'Unsupported media')),{once:true});
      }));
      videoEl.addEventListener('timeupdate',()=>{if(clips[activeClipIndex]!==clip)return;applyClipFilter(clip);updateAudioFades();if(isPlaying&&videoEl.currentTime>=clip.trimEnd-0.02)advanceClip();else updatePlayheadAndTexts();});
      videoEl.src=url;
    });
    (data.overlays||[]).forEach(od=>{
      const el=document.createElement('div');el.className='text-overlay';const innerEl=document.createElement('span');innerEl.className='text-inner';el.appendChild(innerEl);textsLayer.appendChild(el);
      const tx={content:'',color:'#ffffff',font:"'Segoe UI', Arial, sans-serif",size:32,bold:false,italic:false,align:'center',shadow:false,outline:false,outlineColor:'#000000',glow:false,glowColor:'#3ba1ff',glowIntensity:60,bg:false,bgColor:'#000000',bgRadius:6,letterSpacing:0,opacity:100,anim:'none',exitAnim:'none',loop:'none',x:50,y:50,start:0,end:3,keyframes:[],...od,id:(od.isSticker?'s':'t')+(uid++),el,innerEl};
      (tx.isSticker?stickers:texts).push(tx);styleTextEl(tx);makeTextDraggable(tx);
    });
    (data.fx||[]).forEach(fd=>{
      const def=OVERLAY_EFFECTS.find(f=>f.id===fd.type);if(!def)return;
      const el=document.createElement('div');el.className='fx-overlay-instance';fxOverlayLayer.appendChild(el);
      const item={...fd,id:'fx'+(uid++),scale:fd.scale??100,el};fxOverlays.push(item);if(def.build)def.build(el,item.end-item.start);
    });
    await Promise.all(ready);
    if(clips.length){emptyState.style.display='none';playOverlay.style.display='flex';seekTo(0);selectClip(clips[0]);}
    renderTimeline();updateTrimInfo();applyRatio();updatePlayheadAndTexts();
  }
`;