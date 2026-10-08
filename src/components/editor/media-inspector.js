// Runs in the editor iframe's existing scope, sharing its selection and playback state.
export const MEDIA_INSPECTOR_JS = String.raw`
  function selectClip(clip){
    if(!clip) return;
    if(cropMode) exitCropMode();
    selectedKind='clip'; selectedClipId=clip.id;
    selectedTextId=null; selectedStickerId=null; selectedFxId=null;
    [...texts,...stickers].forEach(t=>t.el.classList.remove('selected'));
    stylePanel.classList.remove('open'); fxSelectBar.style.display='none';
    if(document.activeElement && document.activeElement.matches('input,textarea,select')) document.activeElement.blur();
    window.focus(); updateCropButtonVisibility(); renderTimeline();
    if(mediaOpen) renderMediaInspector();
  }
  function closeMediaInspector(){
    mediaOpen=false; mediaPanel.classList.remove('open');
    if(cropMode) exitCropMode();
    requestAnimationFrame(applyRatio);
  }
  function openMediaInspector(tab){
    closeAllPopovers();
    if(tab) mediaTab=tab;
    const clip=clips.find(c=>c.id===selectedClipId) || clips[activeClipIndex];
    if(clip) selectClip(clip);
    stylePanel.classList.remove('open'); mediaOpen=true; mediaPanel.classList.add('open');
    renderMediaInspector(); requestAnimationFrame(applyRatio);
  }
  mediaRail.addEventListener('click',e=>{
    const b=e.target.closest('[data-mtab]'); if(!b) return;
    if(cropMode) exitCropMode();
    mediaTab=b.dataset.mtab; renderMediaInspector();
  });
  function renderMediaInspector(){
    if(!mediaOpen) return;
    const clip=clips.find(c=>c.id===selectedClipId);
    mediaRail.querySelectorAll('[data-mtab]').forEach(b=>{
      b.classList.toggle('active',b.dataset.mtab===mediaTab);
      b.setAttribute('aria-selected',String(b.dataset.mtab===mediaTab));
    });
    mediaContent.innerHTML='<div class="media-head"><span class="mh-name"></span><button class="mh-close" type="button" aria-label="Close">×</button></div><div id="mediaBody"></div>';
    mediaContent.querySelector('.mh-name').textContent=clip ? clip.name : I18N[currentLang].clipSettings;
    mediaContent.querySelector('.mh-close').addEventListener('click',closeMediaInspector);
    const body=document.getElementById('mediaBody');
    if(!clip){ body.innerHTML='<div class="media-empty">'+I18N[currentLang].noClipForFx+'</div>'; return; }
    if(mediaTab==='fx') renderFxPanel(body,clip);
    if(mediaTab==='audio') renderAudioPanel(body,clip);
    if(mediaTab==='speed') renderSpeedPanel(body,clip);
    if(mediaTab==='crop') renderCropPanel(body,clip);
    if(mediaTab==='transform') renderTransformPanel(body,clip);
    const del=document.createElement('button'); del.className='media-del'; del.textContent=I18N[currentLang].deleteText;
    del.addEventListener('click',()=>confirmDelete(()=>deleteClip(clip.id))); mediaContent.appendChild(del);
  }
  function renderFxPanel(body,clip){
    clip.effectType=clip.effectType||'none'; clip.intensity=clip.intensity??60;
    clip.easing=clip.easing||'linear'; clip.keyframes=clip.keyframes||[];
    body.innerHTML='<div class="fx-grid"></div><label class="sp-label">'+I18N[currentLang].intensity+' <span id="fxIntensityVal">'+clip.intensity+'%</span></label><input class="sp-range" id="fxIntensity" type="range" min="0" max="100" value="'+clip.intensity+'"><div class="kf-row"><button class="kf-btn" id="fxAddKf">◆</button><span class="settings-hint">'+I18N[currentLang].fxKfHint+'</span></div><div class="kf-list" id="fxKfList"></div><label class="sp-label">'+I18N[currentLang].easingLabel+'</label><select class="sp-select" id="fxEasing"></select><button class="ghost-btn" id="fxReset">'+I18N[currentLang].resetEffect+'</button>';
    const grid=body.querySelector('.fx-grid');
    [{id:'none',he:'ללא',en:'None'},...EFFECTS].forEach(fx=>{
      const b=document.createElement('button'); b.type='button'; b.className='fx-item'+(clip.effectType===fx.id?' active':'');
      const sw=document.createElement('div'); sw.className='fx-swatch';
      b.append(sw,document.createTextNode(fxName(fx))); grid.appendChild(b);
      b.addEventListener('click',()=>{ clip.effectType=fx.id; applyClipFilter(clip); renderMediaInspector(); renderTimeline(); });
    });
    const intensity=body.querySelector('#fxIntensity'); intensity.disabled=clip.effectType==='none';
    intensity.addEventListener('input',()=>{ clip.intensity=Number(intensity.value); body.querySelector('#fxIntensityVal').textContent=clip.intensity+'%'; applyClipFilter(clip); });
    const easing=body.querySelector('#fxEasing');
    Object.keys(EASINGS).forEach(k=>{ const o=new Option(EASING_LABELS[k][currentLang],k); o.selected=k===clip.easing; easing.add(o); });
    easing.addEventListener('change',()=>{clip.easing=easing.value;applyClipFilter(clip);});
    body.querySelector('#fxReset').addEventListener('click',()=>{clip.effectType='none';clip.keyframes=[];applyClipFilter(clip);renderMediaInspector();renderTimeline();});
    body.querySelector('#fxAddKf').addEventListener('click',()=>{
      const time=Math.max(clip.trimStart,Math.min(clip.trimEnd,clip.videoEl.currentTime));
      const existing=clip.keyframes.find(k=>Math.abs(k.time-time)<0.05);
      if(existing) existing.value=clip.intensity; else clip.keyframes.push({time,value:clip.intensity});
      clip.keyframes.sort((a,b)=>a.time-b.time);renderMediaInspector();renderTimeline();
    });
    clip.keyframes.forEach((k,idx)=>{
      const chip=document.createElement('div');chip.className='kf-chip';
      chip.append(document.createTextNode(fmtTime((k.time-clip.trimStart)/(clip.playbackRate||1))+' · '+Math.round(k.value)+'% '));
      const del=document.createElement('button');del.textContent='×';chip.appendChild(del);
      del.addEventListener('click',()=>{clip.keyframes.splice(idx,1);renderMediaInspector();renderTimeline();});
      body.querySelector('#fxKfList').appendChild(chip);
    });
  }
  function applyClipFilter(clip){
    if(!clip || !clip.videoEl) return;
    const fx=EFFECTS.find(f=>f.id===clip.effectType);
    let intensity=clip.intensity??60;
    if(clip.keyframes?.length) intensity=interp(clip.keyframes,clip.videoEl.currentTime,'value',clip.easing);
    clip.videoEl.style.filter=fx ? fx.filter(intensity) : 'none';
  }
  function renderAudioPanel(body,clip){
    const L=I18N[currentLang];
    body.innerHTML='<div class="audio-box"><label class="sp-label">'+L.volumeLabel+' <span id="audVolVal">'+clip.volume+'%</span></label><input class="sp-range" type="range" id="audVol" min="0" max="100" value="'+Math.min(100,clip.volume??100)+'"><div class="sp-check-row"><label>'+L.muteLabel+'</label><label class="switch"><input type="checkbox" id="audMute"><span class="slider-toggle"></span></label></div><div class="sp-check-row"><label>'+L.audioNorm+'</label><label class="switch"><input type="checkbox" id="audNorm"><span class="slider-toggle"></span></label></div></div>';
    ['fadeIn','fadeOut'].forEach(field=>{
      const label=document.createElement('label');label.className='sp-label';label.textContent=L[field+'Label'];
      const value=document.createElement('span');value.className='range-val';value.textContent=(clip[field]||0)+'s';
      const input=document.createElement('input');input.type='range';input.className='sp-range';input.min=0;input.max=Math.min(5,clipDuration(clip));input.step=0.1;input.value=clip[field]||0;
      input.addEventListener('input',()=>{clip[field]=Number(input.value);value.textContent=input.value+'s';updateAudioFades();});
      body.append(label,input,value);
    });
    const vol=body.querySelector('#audVol');
    vol.addEventListener('input',()=>{clip.volume=Number(vol.value);body.querySelector('#audVolVal').textContent=clip.volume+'%';applyAudioToClip(clip);updateAudioFades();});
    [['audMute','muted'],['audNorm','audioNorm']].forEach(([id,field])=>{
      const input=body.querySelector('#'+id);input.checked=!!clip[field];
      input.addEventListener('change',()=>{clip[field]=input.checked;applyAudioToClip(clip);renderTimeline();});
    });
  }
  function renderSpeedPanel(body,clip){
    body.innerHTML='<label class="sp-label">'+I18N[currentLang].speedLabel+'</label><div class="seg-group"></div>';
    [0.25,0.5,0.75,1,1.25,1.5,2,3,4].forEach(rate=>{
      const b=document.createElement('button');b.className='seg-btn'+((clip.playbackRate||1)===rate?' active':'');b.textContent=rate+'×';
      b.addEventListener('click',()=>{clip.playbackRate=rate;applyAudioToClip(clip);renderMediaInspector();renderTimeline();updateTrimInfo();});
      body.querySelector('.seg-group').appendChild(b);
    });
  }
  function renderCropPanel(body,clip){
    const L=I18N[currentLang];
    [['full','cropFull',null],['square','cropSquare',1],['portrait','cropPortrait',9/16],['landscape','cropLandscape',16/9]].forEach(([key,label,ratio])=>{
      const b=document.createElement('button');b.className='ghost-btn';b.textContent=L[label];
      b.addEventListener('click',()=>{clip.crop=ratio ? centerCropForRatio(ratio) : {x:0,y:0,w:100,h:100};applyCropToVideo(clip);if(cropMode)updateCropRectFromClip(clip);});body.appendChild(b);
    });
    const custom=document.createElement('button');custom.className='apply-btn';custom.textContent=L.cropCustom;
    custom.addEventListener('click',()=>{seekTo(clipStartTime(clip));enterCropMode();});body.appendChild(custom);
  }
  function applyClipTransform(clip){
    const tr=clip.transform||{x:0,y:0,scale:100,rotation:0};
    clip.videoEl.style.transform='translate('+tr.x+'%,'+tr.y+'%) rotate('+tr.rotation+'deg) scale('+(tr.scale/100)+')';
  }
  function renderTransformPanel(body,clip){
    clip.transform=clip.transform||{x:0,y:0,scale:100,rotation:0};
    [['x','X',-100,100],['y','Y',-100,100],['scale',I18N[currentLang].size,10,300],['rotation',currentLang==='he'?'סיבוב':'Rotation',-180,180]].forEach(([field,name,min,max])=>{
      const label=document.createElement('label');label.className='sp-label';label.textContent=name;
      const value=document.createElement('span');value.className='range-val';value.textContent=clip.transform[field]+(field==='rotation'?'°':'%');label.appendChild(value);
      const input=document.createElement('input');input.className='sp-range';input.type='range';input.min=min;input.max=max;input.value=clip.transform[field];
      input.addEventListener('input',()=>{clip.transform[field]=Number(input.value);value.textContent=input.value+(field==='rotation'?'°':'%');applyClipTransform(clip);});body.append(label,input);
    });
    const reset=document.createElement('button');reset.className='ghost-btn';reset.textContent=I18N[currentLang].cropReset;
    reset.addEventListener('click',()=>{clip.transform={x:0,y:0,scale:100,rotation:0};applyClipTransform(clip);renderMediaInspector();});body.appendChild(reset);
  }
  function applyAudioToClip(clip){
    if(!clip?.videoEl) return;
    const v=clip.muted ? 0 : ((clip.volume??100)/100)*(clip.audioNorm?1.3:1);
    clip.videoEl.volume=Math.max(0,Math.min(1,v));clip.videoEl.muted=!!clip.muted;clip.videoEl.playbackRate=clip.playbackRate||1;
  }
  function updateAudioFades(){
    const clip=clips[activeClipIndex];if(!clip?.videoEl) return;
    const local=(clip.videoEl.currentTime-clip.trimStart)/(clip.playbackRate||1),dur=clipDuration(clip);
    let v=clip.muted?0:Math.min(1,((clip.volume??100)/100)*(clip.audioNorm?1.3:1));
    if(clip.fadeIn>0) v*=Math.min(1,Math.max(0,local/clip.fadeIn));
    if(clip.fadeOut>0) v*=Math.min(1,Math.max(0,(dur-local)/clip.fadeOut));
    clip.videoEl.volume=Math.max(0,Math.min(1,v));
  }
`;