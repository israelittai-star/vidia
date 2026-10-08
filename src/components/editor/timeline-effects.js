export const TIMELINE_EFFECTS_JS = String.raw`
  let frameMotion=null, frameMotionId=null;
  function syncTimelineEffects(t){
    let activeFrameItem=null;
    fxOverlays.forEach(item=>{
      const visible=t>=item.start && t<item.end;
      const def=OVERLAY_EFFECTS.find(f=>f.id===item.type);
      if(def?.target==='frame'){
        item.el.style.display='none';if(visible)activeFrameItem=item;
      } else {
        item.el.style.display=visible?'block':'none';
        if(visible){
          item.el.style.transform='scale('+(item.scale/100)+')';
          item.el.getAnimations({subtree:true}).forEach(a=>{a.pause();a.currentTime=(t-item.start)*1000;});
        }
      }
    });
    const id=activeFrameItem?.id||null;
    if(frameMotionId!==id){
      if(frameMotion)frameMotion.cancel();frameMotion=null;
      FRAME_FX_CLASSES.forEach(c=>frame.classList.remove(c));frameMotionId=id;
      if(activeFrameItem){
        const def=OVERLAY_EFFECTS.find(f=>f.id===activeFrameItem.type);
        if(def.motion)frameMotion=frame.animate(def.motion,{duration:def.motionDuration,iterations:Infinity,easing:'ease-in-out'});
        else frame.classList.add('fx-frame-'+activeFrameItem.type);
      }
    }
    if(activeFrameItem){
      const elapsed=(t-activeFrameItem.start)*1000;
      frame.getAnimations().forEach(a=>{a.pause();a.currentTime=elapsed;});
    }
  }
  function rebuildFxAnimation(item){
    const def=OVERLAY_EFFECTS.find(f=>f.id===item.type);
    item.el.getAnimations({subtree:true}).forEach(a=>a.cancel());item.el.innerHTML='';
    if(def?.build)def.build(item.el,item.end-item.start);
  }
  function playbackTick(){
    if(isPlaying){
      const clip=clips[activeClipIndex];
      if(clip){applyClipFilter(clip);updateAudioFades();updatePlayheadAndTexts();}
    }
    requestAnimationFrame(playbackTick);
  }
  requestAnimationFrame(playbackTick);
`;