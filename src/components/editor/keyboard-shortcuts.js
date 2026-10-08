export const KEYBOARD_SHORTCUTS_JS = String.raw`
  let clipboardItem=null;
  function selectedRecord(){
    if(selectedKind==='clip') return clips.find(c=>c.id===selectedClipId);
    if(selectedKind==='fx') return fxOverlays.find(c=>c.id===selectedFxId);
    return getSelectedText();
  }
  function copySelected(){
    const item=selectedRecord();if(!item) return;
    const data={};Object.keys(item).forEach(k=>{if(!['id','el','innerEl','videoEl'].includes(k))data[k]=item[k];});
    clipboardItem={kind:selectedKind,data:JSON.parse(JSON.stringify(data))};
    showToast(currentLang==='he'?'הפריט הועתק — Ctrl+V להדבקה':'Item copied — Ctrl+V to paste');
  }
  function pasteSelected(){
    if(!clipboardItem) return;
    const {kind}=clipboardItem, data=JSON.parse(JSON.stringify(clipboardItem.data));
    if(kind==='clip'){
      const videoEl=document.createElement('video');videoEl.src=data.url;videoEl.playsInline=true;videoEl.preload='auto';videoEl.controls=false;videoEl.disablePictureInPicture=true;
      videoEl.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;display:none;background:#000;';
      videosLayer.appendChild(videoEl);
      const clip={...data,id:'c'+(uid++),videoEl};
      const index=clips.findIndex(c=>c.id===selectedClipId);clips.splice(index>=0?index+1:clips.length,0,clip);
      videoEl.addEventListener('loadedmetadata',()=>{clip.duration=videoEl.duration;seekTo(clipStartTime(clip));selectClip(clip);emptyState.style.display='none';playOverlay.style.display='flex';updateTrimInfo();});
      videoEl.addEventListener('timeupdate',()=>{if(clips[activeClipIndex]!==clip)return;applyClipFilter(clip);updateAudioFades();if(isPlaying&&videoEl.currentTime>=clip.trimEnd-0.02)advanceClip();else updatePlayheadAndTexts();});
      applyClipFilter(clip);applyCropToVideo(clip);applyClipTransform(clip);applyAudioToClip(clip);selectClip(clip);
    } else {
      const start=currentMasterTime(), offset=start-data.start;
      data.start=start;data.end+=offset;
      if(data.keyframes)data.keyframes=data.keyframes.map(k=>({...k,time:k.time+offset}));
      if(kind==='fx'){
        const el=document.createElement('div');el.className='fx-overlay-instance';fxOverlayLayer.appendChild(el);
        const def=OVERLAY_EFFECTS.find(f=>f.id===data.type);if(def?.build)def.build(el,data.end-data.start);
        const item={...data,id:'fx'+(uid++),el};fxOverlays.push(item);selectFxOverlay(item.id);
      } else {
        const el=document.createElement('div');el.className='text-overlay';const innerEl=document.createElement('span');innerEl.className='text-inner';el.appendChild(innerEl);textsLayer.appendChild(el);
        const item={...data,id:(kind==='sticker'?'s':'t')+(uid++),el,innerEl};
        (kind==='sticker'?stickers:texts).push(item);styleTextEl(item);makeTextDraggable(item);
        if(kind==='sticker')selectSticker(item.id);else selectText(item.id);
      }
    }
    renderTimeline();updateTrimInfo();updatePlayheadAndTexts();
  }
  window.addEventListener('keydown',e=>{
    const el=document.activeElement;
    const editable=el?.isContentEditable || el?.tagName==='TEXTAREA' || el?.tagName==='SELECT' || (el?.tagName==='INPUT' && !['range','checkbox','color','button','radio'].includes(el.type));
    if(confirmModal.classList.contains('open')){
      if(e.key==='Escape'){e.preventDefault();confirmNoBtn.click();}
      if(e.key==='Enter'&&!e.repeat){e.preventDefault();confirmYesBtn.click();}
      return;
    }
    if(editable || e.altKey || e.repeat) return;
    const command=e.ctrlKey||e.metaKey;
    const letter=e.code || ('Key'+String(e.key).toUpperCase());
    if(command && letter==='KeyC' && selectedRecord()){e.preventDefault();copySelected();return;}
    if(command && letter==='KeyV' && clipboardItem){e.preventDefault();pasteSelected();return;}
    if(command && letter==='KeyD' && selectedRecord()){e.preventDefault();copySelected();pasteSelected();return;}
    if(e.key==='Delete'||e.key==='Backspace'){
      if(selectedRecord()){e.preventDefault();confirmDelete(deleteSelected);}return;
    }
    if(e.code==='Space'||e.key===' '){e.preventDefault();playBtn.click();return;}
    if(letter==='KeyB'){e.preventDefault();splitSelected();return;}
    if(e.key==='Escape'){
      closeAllPopovers();closeMediaInspector();selectedKind=null;selectedClipId=null;selectedTextId=null;selectedStickerId=null;selectedFxId=null;
      [...texts,...stickers].forEach(t=>t.el.classList.remove('selected'));stylePanel.classList.remove('open');fxSelectBar.style.display='none';updateCropButtonVisibility();renderTimeline();
    }
  });
`;