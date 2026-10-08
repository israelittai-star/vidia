export const EDITOR_TIMELINE_JS = String.raw`
  function clearSelection(){
    if(cropMode) exitCropMode();
    selectedKind=null;selectedClipId=null;selectedTextId=null;selectedStickerId=null;selectedFxId=null;
    [...texts,...stickers].forEach(t=>t.el.classList.remove('selected'));
    stylePanel.classList.remove('open');fxSelectBar.style.display='none';closeMediaInspector();updateCropButtonVisibility();renderTimeline();
  }
  function beginTimelineDrag(event,move,end){
    event.preventDefault();event.stopPropagation();
    let lastX=event.clientX;
    const onMove=e=>{const dx=(e.clientX-lastX)/pxPerSec;lastX=e.clientX;move(dx,e);};
    const onUp=e=>{window.removeEventListener('pointermove',onMove);window.removeEventListener('pointerup',onUp);window.removeEventListener('pointercancel',onUp);if(end)end(e);};
    window.addEventListener('pointermove',onMove);window.addEventListener('pointerup',onUp);window.addEventListener('pointercancel',onUp);
  }
  function addTimelineHandles(block,item,kind){
    ['start','end'].forEach(which=>{
      const handle=document.createElement('div');handle.className='handle '+which;block.appendChild(handle);
      handle.addEventListener('pointerdown',e=>{
        if(kind==='clip')selectClip(item);else if(kind==='fx')selectFxOverlay(item.id);else if(item.isSticker)selectSticker(item.id);else selectText(item.id);
        beginTimelineDrag(e,dx=>{
          if(kind==='clip'){
            const delta=dx*(item.playbackRate||1);
            if(which==='start')item.trimStart=Math.max(0,Math.min(item.trimStart+delta,item.trimEnd-0.1));
            else item.trimEnd=Math.min(item.duration,Math.max(item.trimEnd+delta,item.trimStart+0.1));
            if(clips[activeClipIndex]===item && (item.videoEl.currentTime<item.trimStart||item.videoEl.currentTime>item.trimEnd))item.videoEl.currentTime=item.trimStart;
            updateTrimInfo();
          } else if(which==='start')item.start=Math.max(0,Math.min(item.start+dx,item.end-0.2));
          else item.end=Math.max(item.start+0.2,item.end+dx);
          renderTimeline();
        },()=>{if(kind==='fx')rebuildFxAnimation(item);if(mediaOpen)renderMediaInspector();updatePlayheadAndTexts();});
      });
    });
  }
  function renderTimeline(){
    const all=[...texts,...stickers];
    const total=Math.max(totalDuration(),...all.map(t=>t.end),...fxOverlays.map(f=>f.end),1);
    timelineInner.style.width=Math.max(total*pxPerSec,timelineScroll.clientWidth)+'px';
    frame.classList.toggle('media-selected',selectedKind==='clip'&&selectedClipId===clips[activeClipIndex]?.id);
    ruler.innerHTML='';
    const step=pxPerSec<40?10:pxPerSec<90?5:pxPerSec<160?2:1;
    for(let s=0;s<=total;s+=step){const tick=document.createElement('span');tick.style.left=s*pxPerSec+'px';tick.textContent=fmtTime(s);ruler.appendChild(tick);}
    videoTrack.querySelectorAll('.clip-block').forEach(n=>n.remove());videoEmptyNote.style.display=clips.length?'none':'flex';
    clips.forEach(clip=>{
      const block=document.createElement('div');block.className='clip-block'+(selectedKind==='clip'&&clip.id===selectedClipId?' selected':'');
      block.style.left=clipStartTime(clip)*pxPerSec+'px';block.style.width=Math.max(clipDuration(clip)*pxPerSec,4)+'px';
      const fx=EFFECTS.find(f=>f.id===clip.effectType),label=document.createElement('div');label.className='clip-label';
      label.textContent=clip.name+(fx?' · '+fxName(fx):'')+(clip.muted?' 🔇':'')+(clip.playbackRate!==1?' '+clip.playbackRate+'×':'');block.appendChild(label);
      const del=document.createElement('button');del.className='clip-del';del.title=I18N[currentLang].deleteText;
      del.innerHTML='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 6h18M8 6V4h8v2M5 6v14h14V6M10 10v7M14 10v7"/></svg>';
      del.addEventListener('click',e=>{e.stopPropagation();confirmDelete(()=>deleteClip(clip.id));});block.appendChild(del);
      const kf=document.createElement('button');kf.className='clip-kf-btn';kf.textContent='◆';kf.title=I18N[currentLang].addClipKf;
      kf.addEventListener('click',e=>{e.stopPropagation();selectClip(clip);seekTo(clipStartTime(clip));openMediaInspector('fx');});block.appendChild(kf);
      (clip.keyframes||[]).filter(k=>k.time>=clip.trimStart&&k.time<=clip.trimEnd).forEach(k=>{
        const d=document.createElement('div');d.className='kf-diamond';d.style.left=(k.time-clip.trimStart)/(clip.playbackRate||1)*pxPerSec+'px';block.appendChild(d);
      });
      addTimelineHandles(block,clip,'clip');
      block.addEventListener('pointerdown',e=>{
        if(e.target.closest('button,.handle'))return;
        const startX=e.clientX,active=clips[activeClipIndex];let moved=false;
        selectClip(clip);
        beginTimelineDrag(e,(_dx,ev)=>{if(Math.abs(ev.clientX-startX)>5)moved=true;},ev=>{
          const time=Math.max(0,(ev.clientX-timelineInner.getBoundingClientRect().left)/pxPerSec);
          if(!moved){seekTo(Math.max(clipStartTime(clip),Math.min(time,clipStartTime(clip)+clipDuration(clip)-0.001)));renderTimeline();return;}
          const others=clips.filter(c=>c!==clip);let at=others.length,t=0;
          for(let i=0;i<others.length;i++){if(time<t+clipDuration(others[i])/2){at=i;break;}t+=clipDuration(others[i]);}
          others.splice(at,0,clip);clips=others;activeClipIndex=Math.max(0,clips.indexOf(active));renderTimeline();updateTrimInfo();
        });
      });videoTrack.appendChild(block);
    });
    textTrack.querySelectorAll('.text-block').forEach(n=>n.remove());
    all.forEach(tx=>{
      const block=document.createElement('div');block.className='text-block'+(tx.id===selectedTextId||tx.id===selectedStickerId?' selected':'');
      block.style.left=tx.start*pxPerSec+'px';block.style.width=Math.max((tx.end-tx.start)*pxPerSec,4)+'px';
      const label=document.createElement('div');label.className='clip-label';label.textContent=(tx.isSticker?'🎨 ':'')+tx.content;block.appendChild(label);
      (tx.keyframes||[]).forEach(k=>{const d=document.createElement('div');d.className='kf-diamond';d.style.left=(k.time-tx.start)*pxPerSec+'px';block.appendChild(d);});
      addTimelineHandles(block,tx,'text');
      block.addEventListener('pointerdown',e=>{
        if(e.target.closest('.handle'))return;if(tx.isSticker)selectSticker(tx.id);else selectText(tx.id);
        beginTimelineDrag(e,dx=>{const old=tx.start;tx.start=Math.max(0,tx.start+dx);const shift=tx.start-old;tx.end+=shift;tx.keyframes=(tx.keyframes||[]).map(k=>({...k,time:k.time+shift}));renderTimeline();});
      });textTrack.appendChild(block);
    });
    fxTrackEl.querySelectorAll('.fx-block').forEach(n=>n.remove());
    fxOverlays.forEach(item=>{
      const block=document.createElement('div');block.className='fx-block'+(item.id===selectedFxId?' selected':'');
      block.style.left=item.start*pxPerSec+'px';block.style.width=Math.max((item.end-item.start)*pxPerSec,4)+'px';
      const def=OVERLAY_EFFECTS.find(f=>f.id===item.type),label=document.createElement('div');label.className='clip-label';label.textContent=def?overlayName(def):item.type;block.appendChild(label);
      addTimelineHandles(block,item,'fx');
      block.addEventListener('pointerdown',e=>{
        if(e.target.closest('.handle'))return;selectFxOverlay(item.id);
        beginTimelineDrag(e,dx=>{const dur=item.end-item.start;item.start=Math.max(0,item.start+dx);item.end=item.start+dur;renderTimeline();});
      });fxTrackEl.appendChild(block);
    });
    updatePlayheadAndTexts();
  }
  ruler.addEventListener('pointerdown',e=>{
    const seek=ev=>seekTo((ev.clientX-timelineInner.getBoundingClientRect().left)/pxPerSec);seek(e);
    beginTimelineDrag(e,(_dx,ev)=>seek(ev));
  });
  videosLayer.addEventListener('pointerdown',()=>selectClip(clips[activeClipIndex]));
  let confirmCallback=null,confirmPreviousFocus=null;
  const confirmModal=document.getElementById('confirmModal'),confirmYesBtn=document.getElementById('confirmYes'),confirmNoBtn=document.getElementById('confirmNo');
  function confirmDelete(cb){confirmPreviousFocus=document.activeElement;confirmCallback=cb;confirmModal.classList.add('open');confirmYesBtn.focus();}
  function closeConfirmation(confirmed){
    confirmModal.classList.remove('open');const cb=confirmCallback;confirmCallback=null;
    if(confirmed&&cb)cb();if(confirmPreviousFocus?.isConnected)confirmPreviousFocus.focus();else window.focus();
  }
  confirmYesBtn.addEventListener('click',()=>closeConfirmation(true));confirmNoBtn.addEventListener('click',()=>closeConfirmation(false));
  confirmModal.addEventListener('click',e=>{if(e.target===confirmModal)closeConfirmation(false);});
  function deleteSelected(){
    if(selectedKind==='clip'&&selectedClipId){deleteClip(selectedClipId);return;}
    const item=selectedRecord();if(!item)return;item.el.remove();
    if(selectedKind==='fx')fxOverlays=fxOverlays.filter(t=>t.id!==item.id);
    else {texts=texts.filter(t=>t.id!==item.id);stickers=stickers.filter(t=>t.id!==item.id);}
    clearSelection();updatePlayheadAndTexts();
  }
  function splitSelected(){
    const item=selectedRecord();if(!item){showToast(I18N[currentLang].cutHint);return;}
    const t=currentMasterTime();
    if(selectedKind==='clip'){
      const split=item.trimStart+(t-clipStartTime(item))*(item.playbackRate||1);
      if(split<=item.trimStart+0.05||split>=item.trimEnd-0.05)return;
      const videoEl=document.createElement('video');videoEl.src=item.url;videoEl.playsInline=true;videoEl.preload='auto';videoEl.controls=false;videoEl.disablePictureInPicture=true;
      videoEl.style.cssText=item.videoEl.style.cssText;videoEl.style.display='none';videosLayer.appendChild(videoEl);
      const right={...item,id:'c'+(uid++),videoEl,trimStart:split,crop:{...item.crop},transform:item.transform?{...item.transform}:undefined,keyframes:(item.keyframes||[]).map(k=>({...k}))};
      item.trimEnd=split;clips.splice(clips.indexOf(item)+1,0,right);
      videoEl.addEventListener('loadedmetadata',()=>{videoEl.currentTime=split;applyClipFilter(right);applyCropToVideo(right);applyClipTransform(right);applyAudioToClip(right);});
      videoEl.addEventListener('timeupdate',()=>{if(clips[activeClipIndex]!==right)return;applyClipFilter(right);updateAudioFades();if(isPlaying&&videoEl.currentTime>=right.trimEnd-0.02)advanceClip();else updatePlayheadAndTexts();});
      seekTo(Math.max(0,t-0.001));
    } else {
      if(t<=item.start+0.05||t>=item.end-0.05)return;
      const el=document.createElement('div'),right={...item,id:(selectedKind==='fx'?'fx':item.isSticker?'s':'t')+(uid++),el,start:t};
      if(selectedKind==='fx'){
        el.className='fx-overlay-instance';fxOverlayLayer.appendChild(el);fxOverlays.push(right);item.end=t;rebuildFxAnimation(item);rebuildFxAnimation(right);
      } else {
        el.className='text-overlay';const innerEl=document.createElement('span');innerEl.className='text-inner';el.appendChild(innerEl);textsLayer.appendChild(el);right.innerEl=innerEl;
        right.keyframes=(item.keyframes||[]).map(k=>({...k}));item.end=t;(item.isSticker?stickers:texts).push(right);styleTextEl(right);makeTextDraggable(right);
      }
    }
    renderTimeline();updateTrimInfo();if(mediaOpen)renderMediaInspector();
  }
  timelineInner.addEventListener('pointerdown',e=>{
    if(e.target.closest('.clip-block,.text-block,.fx-block,.ruler'))return;
    let moved=false,totalDx=0;const startScroll=timelineScroll.scrollLeft;
    beginTimelineDrag(e,(dx)=>{totalDx+=dx*pxPerSec;if(Math.abs(totalDx)>4)moved=true;timelineScroll.scrollLeft=startScroll-totalDx;},ev=>{
      if(!moved){clearSelection();seekTo((ev.clientX-timelineInner.getBoundingClientRect().left)/pxPerSec);}
    });
  });
  timelineScroll.addEventListener('wheel',e=>{
    if(e.ctrlKey){e.preventDefault();pxPerSec=Math.max(20,Math.min(300,pxPerSec-e.deltaY*0.3));zoomSlider.value=pxPerSec;renderTimeline();}
    else if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();timelineScroll.scrollLeft+=e.deltaY;}
  },{passive:false});
  zoomSlider.addEventListener('input',e=>{pxPerSec=Number(e.target.value);renderTimeline();});
  zoomIn.addEventListener('click',()=>{pxPerSec=Math.min(300,pxPerSec+20);zoomSlider.value=pxPerSec;renderTimeline();});
  zoomOut.addEventListener('click',()=>{pxPerSec=Math.max(20,pxPerSec-20);zoomSlider.value=pxPerSec;renderTimeline();});
`;