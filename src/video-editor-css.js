export const EDITOR_CSS = `
  :root{
    --bg:#000; --panel:#0d0d0d; --panel-2:#141414; --panel-3:#1b1b1b; --line:#262626;
    --text:#e8e8e8; --text-dim:#8a8a8a; --accent:#ff5a36; --accent-2:#3ba1ff;
    --track-h:56px; --text-track-h:38px;
  }
  *{box-sizing:border-box;}
  html,body{ margin:0; padding:0; height:100%; background:var(--bg); color:var(--text);
    font-family:'Segoe UI',system-ui,-apple-system,Arial,sans-serif; overflow:hidden; }
  button, input, select, textarea{ font-family:inherit; }
  input[type=range]{ accent-color: var(--accent); }
  .app{ display:flex; flex-direction:column; height:100vh; width:100vw; }

  .topbar{ display:flex; align-items:center; gap:12px; padding:10px 16px; background:var(--panel);
    border-bottom:1px solid var(--line); box-shadow:0 1px 0 rgba(255,90,54,0.28); flex-shrink:0; position:relative; z-index:20; flex-wrap:wrap; }
  .project-name{ background:transparent; border:1px solid transparent; color:var(--text); font-size:14px;
    font-weight:600; padding:6px 8px; border-radius:4px; min-width:80px; max-width:220px; }
  .project-name:hover{ border-color:var(--line); }
  .project-name:focus{ outline:none; border-color:var(--accent); background:var(--panel-2); }
  .divider{ width:1px; height:22px; background:var(--line); }
  .btn{ background:var(--panel-2); border:1px solid rgba(255,90,54,0.35); color:var(--text); padding:8px 14px;
    border-radius:6px; font-size:12.5px; cursor:pointer; display:flex; align-items:center; gap:6px; white-space:nowrap; }
  .btn:hover{ border-color:#3a3a3a; background:var(--panel-3); }
  .btn.primary{ background:var(--accent); border-color:var(--accent); color:#fff; font-weight:600; }
  .btn.primary:hover{ background:#ff7452; }
  input[type=file]{ display:none; }
  .icon-btn{ background:var(--panel-2); border:1px solid rgba(255,90,54,0.35); color:var(--text); width:34px; height:34px;
    border-radius:6px; cursor:pointer; display:flex; align-items:center; justify-content:center; }
  .icon-btn:hover{ border-color:var(--accent); color:var(--accent); background:var(--panel-3); }
  .icon-btn.brand{ border-color:var(--accent); color:var(--accent); }
  .icon-btn.brand:hover{ background:rgba(255,90,54,0.12); }
  .spacer{ margin-right:auto; }

  .popover{ position:absolute; top:52px; background:var(--panel-2); border:1px solid rgba(255,90,54,0.35);
    border-radius:10px; box-shadow:0 12px 32px rgba(0,0,0,0.5); padding:12px; width:230px; z-index:50; display:none; max-height:80vh; overflow-y:auto; }
  .popover.open{ display:block; }
  .popover.wide{ width:300px; }
  .popover.left{ left:0; right:auto; }
  .popover.right{ right:0; left:auto; }
  .popover-title{ font-size:11.5px; color:var(--text-dim); margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; }
  .preset-list{ display:flex; flex-direction:column; gap:4px; margin-bottom:12px; }
  .preset-item{ display:flex; align-items:center; gap:10px; background:transparent; border:1px solid transparent;
    color:var(--text); padding:7px 8px; border-radius:6px; cursor:pointer; font-size:12.5px; text-align:right; width:100%; }
  .preset-item:hover{ background:var(--panel-3); }
  .preset-item.active{ border-color:var(--accent); background:rgba(255,90,54,0.1); }
  .preset-swatch{ display:inline-block; border:1.5px solid currentColor; opacity:0.8; flex-shrink:0; }
  .custom-box{ border-top:1px solid var(--line); padding-top:10px; }
  .custom-row{ display:flex; align-items:center; gap:8px; margin-bottom:8px; }
  .custom-row input[type=number]{ width:100%; background:var(--panel); border:1px solid var(--line); color:var(--text);
    border-radius:4px; padding:6px 8px; font-size:12.5px; }
  .custom-row span{ color:var(--text-dim); font-size:12px; }
  .apply-btn{ width:100%; background:var(--accent); border:none; color:#fff; padding:7px; border-radius:6px;
    font-size:12.5px; cursor:pointer; font-weight:600; }
  .ghost-btn{ width:100%; background:transparent; border:1px solid var(--line); color:var(--text-dim); padding:7px;
    border-radius:6px; font-size:12px; cursor:pointer; margin-top:6px; }
  .ghost-btn:hover{ color:var(--text); border-color:#3a3a3a; }

  .fx-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:6px; margin-bottom:10px; max-height:260px; overflow-y:auto; }
  .fx-item{ background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:8px 4px; cursor:pointer;
    text-align:center; color:var(--text-dim); font-size:10.5px; }
  .fx-item .fx-swatch{ width:100%; height:26px; border-radius:5px; margin-bottom:5px; background:var(--panel-3); }
  .media-rail{ overflow-y:auto; }
  .media-content .fx-grid{ grid-template-columns:repeat(2,minmax(0,1fr)); }
  .media-content .sp-label{ margin-top:10px; }
  .clip-block, .text-block, .fx-block, .handle, .ruler, .text-overlay, .crop-rect{ touch-action:none; }
  .fx-item:hover{ border-color:#3a3a3a; color:var(--text); }
  .fx-item.active{ border-color:var(--accent); color:var(--text); background:rgba(255,90,54,0.08); }
  .fx-no-clip{ color:var(--text-dim); font-size:12px; text-align:center; padding:14px 0; }
  .kf-row{ display:flex; align-items:center; gap:8px; margin-top:8px; }
  .kf-btn{ width:30px; height:30px; border-radius:6px; background:var(--panel); border:1px solid var(--accent);
    color:var(--accent); cursor:pointer; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .kf-btn:hover{ background:rgba(255,90,54,0.15); }

  .settings-row{ margin-bottom:16px; }
  .settings-row:last-child{ margin-bottom:0; }
  .seg-group{ display:flex; gap:6px; flex-wrap:wrap; }
  .seg-btn{ flex:1; background:var(--panel); border:1px solid rgba(255,90,54,0.35); color:var(--text-dim); padding:8px;
    border-radius:6px; font-size:12.5px; cursor:pointer; min-width:40px; }
  .seg-btn.active{ border-color:var(--accent); color:var(--text); background:rgba(255,90,54,0.1); }
  .settings-hint{ font-size:10.5px; color:var(--text-dim); margin-top:6px; }

  .stage-row{ flex:1; display:flex; min-height:0; direction:rtl; }
  .stage{ min-width:0; }
  .style-panel, .media-content{ direction:rtl; }
  html[dir=ltr] .style-panel, html[dir=ltr] .media-content{ direction:ltr; }
  .stage{ flex:1; display:flex; align-items:center; justify-content:center; background:#000; position:relative;
    min-height:0; padding:24px; transition:background .15s; }
  .stage.drag-over{ outline:2px dashed var(--accent); outline-offset:-10px; background:rgba(255,90,54,0.05); }
  .frame{ background:#000; border:1px solid var(--line); box-shadow:0 0 0 1px #000, 0 12px 40px rgba(0,0,0,0.6);
    position:relative; overflow:hidden; max-width:100%; max-height:100%; }
  .frame video{ width:100%; height:100%; object-fit:contain; position:absolute; top:0; left:0; background:#000; }
  .empty-state{ color:var(--text-dim); text-align:center; font-size:13.5px; line-height:1.8; padding:40px; pointer-events:none; }
  .empty-state .big{ font-size:15px; color:var(--text); margin-bottom:6px; font-weight:600; }

  .text-overlay{ position:absolute; transform:translate(-50%,-50%); cursor:move; white-space:pre-wrap;
    max-width:90%; text-align:center; user-select:none; display:none; }
  .text-overlay.anim-fade{ animation:fadeIn .5s ease; }
  .text-overlay.anim-slide{ animation:slideUp .5s ease; }
  .text-overlay.anim-slideLeft{ animation:slideLeftIn .5s ease; }
  .text-overlay.anim-slideRight{ animation:slideRightIn .5s ease; }
  .text-overlay.anim-pop{ animation:popIn .4s cubic-bezier(.2,1.4,.4,1); }
  .text-overlay.anim-bounce{ animation:bounceIn .6s cubic-bezier(.34,1.56,.64,1); }
  .text-overlay.anim-rotate{ animation:rotateIn .5s ease; }
  .text-overlay.anim-zoomIn{ animation:zoomIn .5s ease; }
  .text-overlay.anim-blurIn{ animation:blurIn .6s ease; }
  .text-overlay.anim-flipIn{ animation:flipIn .6s ease; }
  .text-overlay.anim-elastic{ animation:elasticIn .8s cubic-bezier(.68,-.55,.27,1.55); }
  .text-overlay.anim-typewriter{ animation:fadeIn .3s ease; }
  .text-overlay.exit-fadeOut{ animation:fadeOut .4s ease forwards; }
  .text-overlay.exit-slideDown{ animation:slideDownOut .4s ease forwards; }
  .text-overlay.exit-slideLeftOut{ animation:slideLeftOut .4s ease forwards; }
  .text-overlay.exit-slideRightOut{ animation:slideRightOut .4s ease forwards; }
  .text-overlay.exit-popOut{ animation:popOut .35s ease forwards; }
  .text-overlay.exit-zoomOut{ animation:zoomOutFade .4s ease forwards; }
  .text-overlay.exit-blurOut{ animation:blurOut .4s ease forwards; }
  .text-overlay.exit-flipOut{ animation:flipOut .5s ease forwards; }
  .text-overlay.exit-shrinkOut{ animation:shrinkOut .4s ease forwards; }
  .text-overlay.exit-spinOut{ animation:spinOut .5s ease forwards; }
  @keyframes fadeIn{ from{opacity:0;} to{opacity:1;} }
  @keyframes slideUp{ from{opacity:0; transform:translate(-50%,0%);} to{opacity:1; transform:translate(-50%,-50%);} }
  @keyframes slideLeftIn{ from{opacity:0; transform:translate(20%,-50%);} to{opacity:1; transform:translate(-50%,-50%);} }
  @keyframes slideRightIn{ from{opacity:0; transform:translate(-120%,-50%);} to{opacity:1; transform:translate(-50%,-50%);} }
  @keyframes popIn{ from{opacity:0; transform:translate(-50%,-50%) scale(.6);} to{opacity:1; transform:translate(-50%,-50%) scale(1);} }
  @keyframes bounceIn{ 0%{opacity:0; transform:translate(-50%,-50%) scale(.3);} 50%{opacity:1; transform:translate(-50%,-50%) scale(1.1);} 70%{transform:translate(-50%,-50%) scale(.9);} 100%{transform:translate(-50%,-50%) scale(1);} }
  @keyframes rotateIn{ from{opacity:0; transform:translate(-50%,-50%) rotate(-15deg) scale(.8);} to{opacity:1; transform:translate(-50%,-50%) rotate(0) scale(1);} }
  @keyframes zoomIn{ from{opacity:0; transform:translate(-50%,-50%) scale(2.2);} to{opacity:1; transform:translate(-50%,-50%) scale(1);} }
  @keyframes blurIn{ from{opacity:0; filter:blur(14px);} to{opacity:1; filter:blur(0);} }
  @keyframes flipIn{ from{opacity:0; transform:translate(-50%,-50%) rotateY(90deg);} to{opacity:1; transform:translate(-50%,-50%) rotateY(0);} }
  @keyframes elasticIn{ 0%{opacity:0; transform:translate(-50%,-50%) scale(0);} 60%{opacity:1; transform:translate(-50%,-50%) scale(1.2);} 80%{transform:translate(-50%,-50%) scale(.85);} 100%{transform:translate(-50%,-50%) scale(1);} }
  @keyframes fadeOut{ from{opacity:1;} to{opacity:0;} }
  @keyframes slideDownOut{ from{opacity:1; transform:translate(-50%,-50%);} to{opacity:0; transform:translate(-50%,30%);} }
  @keyframes slideLeftOut{ from{opacity:1; transform:translate(-50%,-50%);} to{opacity:0; transform:translate(-120%,-50%);} }
  @keyframes slideRightOut{ from{opacity:1; transform:translate(-50%,-50%);} to{opacity:0; transform:translate(20%,-50%);} }
  @keyframes popOut{ from{opacity:1; transform:translate(-50%,-50%) scale(1);} to{opacity:0; transform:translate(-50%,-50%) scale(.4);} }
  @keyframes zoomOutFade{ from{opacity:1; transform:translate(-50%,-50%) scale(1);} to{opacity:0; transform:translate(-50%,-50%) scale(1.7);} }
  @keyframes blurOut{ from{opacity:1; filter:blur(0);} to{opacity:0; filter:blur(14px);} }
  @keyframes flipOut{ from{opacity:1; transform:translate(-50%,-50%) rotateY(0);} to{opacity:0; transform:translate(-50%,-50%) rotateY(90deg);} }
  @keyframes shrinkOut{ from{opacity:1; transform:translate(-50%,-50%) scale(1);} to{opacity:0; transform:translate(-50%,-50%) scale(.1);} }
  @keyframes spinOut{ from{opacity:1; transform:translate(-50%,-50%) rotate(0) scale(1);} to{opacity:0; transform:translate(-50%,-50%) rotate(360deg) scale(.3);} }

  .text-inner{ display:inline-block; }
  .text-inner.loop-pulse{ animation:pulseLoop 1.4s ease-in-out infinite; }
  .text-inner.loop-wiggle{ animation:wiggleLoop 1.2s ease-in-out infinite; }
  .text-inner.loop-float{ animation:floatLoop 2s ease-in-out infinite; }
  .text-inner.loop-glow{ animation:glowPulseLoop 1.5s ease-in-out infinite; }
  .text-inner.loop-shake{ animation:shakeLoop .5s ease-in-out infinite; }
  .text-inner.loop-swing{ animation:swingLoop 1.5s ease-in-out infinite; }
  .text-inner.loop-jello{ animation:jelloLoop 1s ease-in-out infinite; }
  .text-inner.loop-heartbeat{ animation:heartbeatLoop 1.2s ease-in-out infinite; }
  .text-inner.loop-rainbow{ animation:rainbowLoop 3s linear infinite; }
  .text-inner.loop-bounce2{ animation:bounceLoop 1.1s ease-in-out infinite; }
  .text-inner.loop-typewriter{ overflow:hidden; border-right:2px solid currentColor; white-space:nowrap; animation:typewriterLoop 2s steps(30,end) infinite, blinkCaret .7s step-end infinite; }
  @keyframes pulseLoop{ 0%,100%{ transform:scale(1);} 50%{ transform:scale(1.09);} }
  @keyframes wiggleLoop{ 0%,100%{ transform:rotate(0deg);} 25%{ transform:rotate(-4deg);} 75%{ transform:rotate(4deg);} }
  @keyframes floatLoop{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-8px);} }
  @keyframes glowPulseLoop{ 0%,100%{ filter:brightness(1);} 50%{ filter:brightness(1.6);} }
  @keyframes shakeLoop{ 0%,100%{ transform:translateX(0);} 20%{ transform:translateX(-3px);} 40%{ transform:translateX(3px);} 60%{ transform:translateX(-2px);} 80%{ transform:translateX(2px);} }
  @keyframes swingLoop{ 0%,100%{ transform:rotate(0deg);} 25%{ transform:rotate(6deg);} 75%{ transform:rotate(-6deg);} }
  @keyframes jelloLoop{ 0%,100%{ transform:skewX(0);} 30%{ transform:skewX(-12deg);} 40%{ transform:skewX(9deg);} 50%{ transform:skewX(-6deg);} 60%{ transform:skewX(3deg);} }
  @keyframes heartbeatLoop{ 0%,100%{ transform:scale(1);} 15%{ transform:scale(1.18);} 30%{ transform:scale(1);} 45%{ transform:scale(1.12);} 60%{ transform:scale(1);} }
  @keyframes rainbowLoop{ 0%{ color:#ff5a36;} 16%{ color:#ffd23f;} 33%{ color:#31d17c;} 50%{ color:#3ba1ff;} 66%{ color:#c77dff;} 83%{ color:#ff6fae;} 100%{ color:#ff5a36;} }
  @keyframes bounceLoop{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-12px);} }
  @keyframes typewriterLoop{ 0%{ width:0;} 50%{ width:100%;} 100%{ width:100%;} }
  @keyframes blinkCaret{ 50%{ border-color:transparent;} }

  .fx-track{ height:var(--text-track-h); }
  .fx-block{ position:absolute; top:3px; bottom:3px; background:linear-gradient(180deg,rgba(199,125,255,0.35),rgba(199,125,255,0.15));
    border:1px solid #c77dff; border-radius:5px; overflow:hidden; display:flex; align-items:center; z-index:2; cursor:move; }
  .fx-block.selected{ border-color:var(--accent); box-shadow:0 0 0 1px var(--accent); }
  .fx-block .clip-label{ color:#efdcff; }

  .fx-select-bar{ display:none; align-items:center; gap:10px; background:var(--panel-2); border:1px solid var(--line);
    border-radius:6px; padding:6px 10px; margin-bottom:8px; font-size:12px; flex-wrap:wrap; }
  .fx-select-bar span{ color:var(--text-dim); }
  .fx-select-bar input[type=range]{ width:120px; }
  .fx-select-bar button{ background:none; border:1px solid #5a2c22; color:#ff8a70; border-radius:4px; padding:3px 8px; cursor:pointer; font-size:11px; }

  .fx-overlay-instance{ position:absolute; inset:0; overflow:hidden; pointer-events:none; transform-origin:center center; display:none; }
  .fx-particle{ position:absolute; top:100%; display:inline-block; animation-iteration-count:infinite; animation-timing-function:linear; will-change:transform,opacity; }
  @keyframes fxRise{ 0%{ transform:translateY(0); opacity:0; } 10%{opacity:1;} 90%{opacity:1;} 100%{ transform:translateY(-620px); opacity:0; } }
  @keyframes fxFall{ 0%{ transform:translateY(-40px); opacity:0; } 10%{opacity:1;} 90%{opacity:1;} 100%{ transform:translateY(640px); opacity:0; } }
  @keyframes fxTwinkle{ 0%,100%{ opacity:0.15; transform:scale(.6); } 50%{ opacity:1; transform:scale(1.15); } }
  .fx-lightleak{ position:absolute; inset:-20%; background:radial-gradient(circle at 20% 20%, rgba(255,180,90,0.45), transparent 60%); mix-blend-mode:screen; animation:fxLeakMove 6s ease-in-out infinite; }
  @keyframes fxLeakMove{ 0%,100%{ transform:translate(0,0) scale(1);} 50%{ transform:translate(15%,10%) scale(1.2);} }
  .fx-grain{ position:absolute; inset:0; opacity:0.22; background:repeating-conic-gradient(rgba(255,255,255,0.06) 0deg 1deg, rgba(0,0,0,0.06) 1deg 2deg); mix-blend-mode:overlay; animation:fxGrainFlicker .15s steps(2) infinite; }
  @keyframes fxGrainFlicker{ 0%{opacity:.15;} 50%{opacity:.3;} 100%{opacity:.2;} }
  .fx-rainbow{ position:absolute; inset:-50%; background:linear-gradient(120deg, #ff5a36, #ffd23f, #31d17c, #3ba1ff, #c77dff, #ff5a36); opacity:0.28; mix-blend-mode:overlay; animation:fxRainbowMove 5s linear infinite; }
  @keyframes fxRainbowMove{ 0%{ transform:translateX(-10%) rotate(0deg);} 100%{ transform:translateX(10%) rotate(2deg);} }
  .fx-colorpulse{ position:absolute; inset:0; background:radial-gradient(circle at 50% 50%, rgba(199,125,255,0.35), transparent 65%); mix-blend-mode:screen; animation:fxColorPulse 2s ease-in-out infinite; }
  @keyframes fxColorPulse{ 0%,100%{ opacity:0.3; transform:scale(1);} 50%{ opacity:0.7; transform:scale(1.15);} }
  .fx-fade-black{ position:absolute; inset:0; background:#000; opacity:0; animation-name:fxFadeInOut; animation-timing-function:linear; animation-fill-mode:forwards; }
  @keyframes fxFadeInOut{ 0%{opacity:0;} 50%{opacity:1;} 100%{opacity:0;} }
  .fx-flash-white{ position:absolute; inset:0; background:#fff; opacity:0; animation-name:fxFlash; animation-timing-function:ease-out; animation-fill-mode:forwards; }
  @keyframes fxFlash{ 0%{opacity:0;} 8%{opacity:1;} 30%{opacity:0;} 100%{opacity:0;} }
  .fx-wipe{ position:absolute; inset:0; background:#000; animation-name:fxWipeLeft; animation-timing-function:linear; animation-fill-mode:forwards; }
  @keyframes fxWipeLeft{ 0%{ clip-path:inset(0 0 0 0);} 100%{ clip-path:inset(0 100% 0 0);} }
  .fx-vignette{ position:absolute; inset:0; background:radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%); }
  .fx-scanlines{ position:absolute; inset:0; background:repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 2px, transparent 3px); mix-blend-mode:multiply; }
  .fx-vhs{ position:absolute; inset:0; background:repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, transparent 2px, rgba(0,0,0,0.05) 3px, transparent 5px); mix-blend-mode:overlay; animation:fxVhsShift .3s steps(3) infinite; }
  @keyframes fxVhsShift{ 0%{transform:translateX(0);} 50%{transform:translateX(2px);} 100%{transform:translateX(-2px);} }
  .fx-bokeh{ position:absolute; inset:0; }
  .fx-bokeh span{ position:absolute; border-radius:50%; background:radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%); animation:fxBokehFloat 6s ease-in-out infinite; }
  @keyframes fxBokehFloat{ 0%,100%{ transform:translateY(0) scale(1); opacity:.5;} 50%{ transform:translateY(-30px) scale(1.2); opacity:.9;} }
  .fx-lensflare{ position:absolute; top:10%; left:10%; width:80px; height:80px; background:radial-gradient(circle, rgba(255,255,200,0.8), transparent 60%); mix-blend-mode:screen; animation:fxFlareDrift 7s ease-in-out infinite; }
  @keyframes fxFlareDrift{ 0%,100%{ transform:translate(0,0);} 50%{ transform:translate(40px,20px);} }
  @keyframes shakeFrame{ 0%,100%{transform:translate(0,0);} 10%{transform:translate(-6px,3px);} 20%{transform:translate(5px,-4px);} 30%{transform:translate(-4px,5px);} 40%{transform:translate(6px,2px);} 50%{transform:translate(-5px,-3px);} 60%{transform:translate(4px,4px);} 70%{transform:translate(-3px,-5px);} 80%{transform:translate(5px,3px);} 90%{transform:translate(-4px,2px);} }
  .frame.fx-frame-shake{ animation:shakeFrame 0.4s linear infinite; }
  @keyframes jitterFrame{ 0%,100%{transform:translate(0,0);} 25%{transform:translate(-2px,1px);} 50%{transform:translate(2px,-1px);} 75%{transform:translate(-1px,2px);} }
  .frame.fx-frame-jitter{ animation:jitterFrame 0.12s linear infinite; }
  @keyframes punchZoomFrame{ 0%,100%{transform:scale(1);} 50%{transform:scale(1.06);} }
  .frame.fx-frame-punchzoom{ animation:punchZoomFrame 0.5s ease-in-out infinite; }
  @keyframes glitchFrame{ 0%,100%{transform:translate(0,0); filter:hue-rotate(0deg);} 20%{transform:translate(-3px,0); filter:hue-rotate(30deg);} 40%{transform:translate(3px,0); filter:hue-rotate(-20deg);} 60%{transform:translate(-2px,1px); filter:hue-rotate(15deg);} 80%{transform:translate(2px,-1px); filter:hue-rotate(-10deg);} }
  .frame.fx-frame-glitch{ animation:glitchFrame 0.3s steps(2) infinite; }
  @keyframes heartbeatFrame{ 0%,100%{transform:scale(1);} 15%{transform:scale(1.04);} 30%{transform:scale(1);} 45%{transform:scale(1.03);} }
  .frame.fx-frame-heartbeat{ animation:heartbeatFrame 1.1s ease-in-out infinite; }
  @keyframes zoomPulseFrame{ 0%,100%{transform:scale(1);} 50%{transform:scale(1.08);} }
  .frame.fx-frame-zoompulse{ animation:zoomPulseFrame 1.5s ease-in-out infinite; }
  @keyframes swingFrame{ 0%,100%{transform:rotate(0);} 25%{transform:rotate(1.5deg);} 75%{transform:rotate(-1.5deg);} }
  .frame.fx-frame-swing{ animation:swingFrame 2s ease-in-out infinite; transform-origin:center center; }

  .play-overlay{ position:absolute; bottom:14px; left:50%; transform:translateX(-50%); display:flex; align-items:center;
    gap:10px; background:rgba(13,13,13,0.85); border:1px solid var(--line); border-radius:24px; padding:6px 14px;
    backdrop-filter:blur(4px); z-index:10; }
  .play-btn{ background:none; border:none; color:var(--text); cursor:pointer; font-size:15px; width:26px; height:26px;
    display:flex; align-items:center; justify-content:center; }
  .time-display{ font-size:12px; color:var(--text-dim); font-variant-numeric:tabular-nums; min-width:98px; text-align:center; }

  .style-panel{ width:0; overflow:hidden; flex-shrink:0; background:var(--panel); border-right:1px solid var(--line);
    transition:width .18s ease; }
  .style-panel.open{ width:290px; overflow-y:auto; }
  .style-panel-inner{ width:290px; padding:16px; }
  .sp-title{ font-size:13px; font-weight:600; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center; }
  .sp-close{ background:none; border:none; color:var(--text-dim); cursor:pointer; font-size:14px; }
  .sp-group{ margin-bottom:16px; }
  .sp-label{ font-size:11px; color:var(--text-dim); margin-bottom:6px; display:block; }
  .sp-textarea{ width:100%; background:var(--panel-2); border:1px solid var(--line); color:var(--text); border-radius:6px;
    padding:8px; font-size:13px; resize:vertical; min-height:50px; }
  .sp-row{ display:flex; gap:8px; }
  .sp-row > *{ flex:1; }
  .color-swatches{ display:flex; flex-wrap:wrap; gap:6px; margin-bottom:6px; }
  .color-swatch{ width:22px; height:22px; border-radius:50%; cursor:pointer; border:2px solid transparent; }
  .color-swatch.active{ border-color:var(--accent); box-shadow:0 0 0 2px rgba(255,90,54,0.35); }
  .color-input{ width:100%; height:30px; background:var(--panel-2); border:1px solid var(--line); border-radius:6px;
    cursor:pointer; padding:0; }
  .color-input::-webkit-color-swatch-wrapper{ padding:5px; }
  .color-input::-webkit-color-swatch{ border:1px solid var(--line); border-radius:4px; }
  .color-input::-moz-color-swatch{ border:1px solid var(--line); border-radius:4px; }
  .sp-select, .sp-range{ width:100%; background:var(--panel-2); border:1px solid rgba(255,90,54,0.35); color:var(--text);
    border-radius:6px; padding:7px; font-size:12.5px; }
  .toggle-group{ display:flex; gap:6px; }
  .toggle-btn{ flex:1; background:var(--panel-2); border:1px solid rgba(255,90,54,0.35); color:var(--text-dim); padding:7px;
    border-radius:6px; font-size:12.5px; cursor:pointer; }
  .toggle-btn.active{ background:rgba(255,90,54,0.22); border-color:var(--accent); color:var(--text); }
  .sp-check-row{ display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
  .sp-check-row label{ font-size:12.5px; color:var(--text); }
  .switch{ position:relative; width:36px; height:20px; }
  .switch input{ opacity:0; width:0; height:0; }
  .slider-toggle{ position:absolute; cursor:pointer; inset:0; background:var(--panel-3); border:1px solid var(--line);
    border-radius:20px; transition:.15s; }
  .slider-toggle::before{ content:''; position:absolute; width:14px; height:14px; left:3px; top:2px; background:var(--text-dim);
    border-radius:50%; transition:.15s; }
  .switch input:checked + .slider-toggle{ background:rgba(255,90,54,0.3); border-color:var(--accent); }
  .switch input:checked + .slider-toggle::before{ transform:translateX(16px); background:var(--accent); }
  .range-val{ font-size:11px; color:var(--text-dim); float:left; }
  .kf-list{ display:flex; flex-wrap:wrap; gap:5px; margin-top:8px; }
  .kf-chip{ font-size:10.5px; background:var(--panel-2); border:1px solid var(--accent-2); color:var(--accent-2);
    padding:3px 7px; border-radius:10px; cursor:pointer; display:flex; align-items:center; gap:5px; }
  .kf-chip button{ background:none; border:none; color:var(--accent-2); cursor:pointer; font-size:10px; padding:0; }
  .audio-box{ border:1px solid rgba(59,161,255,0.3); border-radius:8px; padding:12px; margin-bottom:14px; }
  .audio-box .sp-label{ color:var(--accent-2); font-weight:600; }
  .sticker-grid{ display:grid; grid-template-columns:repeat(6,1fr); gap:6px; max-height:200px; overflow-y:auto; }
  .sticker-item{ background:var(--panel); border:1px solid var(--line); border-radius:6px; font-size:22px; padding:6px; cursor:pointer; text-align:center; }
  .sticker-item:hover{ border-color:var(--accent); background:var(--panel-3); }

  .timeline-wrap{ flex-shrink:0; background:var(--panel); border-top:1px solid var(--line); padding:10px 16px 14px; }
  .timeline-header{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
  .timeline-label{ font-size:11.5px; color:var(--text-dim); }
  .timeline-right{ display:flex; align-items:center; gap:12px; }
  .trim-info{ font-size:11.5px; color:var(--text-dim); font-variant-numeric:tabular-nums; }
  .trim-info b{ color:var(--accent); font-weight:600; }
  .zoom-controls{ display:flex; align-items:center; gap:6px; }
  .zoom-btn{ background:var(--panel-2); border:1px solid rgba(255,90,54,0.35); color:var(--text); width:22px; height:22px;
    border-radius:4px; cursor:pointer; font-size:13px; display:flex; align-items:center; justify-content:center; }
  .zoom-btn:hover{ background:var(--panel-3); border-color:var(--accent); color:var(--accent); }
  .timeline-scroll{ direction:ltr; touch-action:pan-x; overflow-x:auto; overflow-y:hidden; border:1px solid var(--line); border-radius:6px;
    background:var(--panel-2); position:relative; box-shadow:inset 0 1px 0 rgba(255,90,54,0.15); }
  .timeline-inner{ position:relative; min-width:100%; }
  .ruler{ height:18px; position:relative; border-bottom:1px solid var(--line); cursor:ew-resize; }
  .ruler span{ position:absolute; top:2px; font-size:9.5px; color:rgba(255,255,255,0.32); transform:translateX(50%); }
  .track{ position:relative; height:var(--track-h); border-bottom:1px solid #1c1c1c; }
  .track.text-track{ height:var(--text-track-h); }
  .track-empty-note{ position:absolute; inset:0; display:flex; align-items:center; padding-right:10px; color:var(--text-dim); font-size:12px; }
  .clip-block{ position:absolute; top:3px; bottom:3px; background:linear-gradient(180deg,#2b2b2b,#1a1a1a); border:1px solid rgba(255,90,54,0.4);
    border-radius:5px; overflow:hidden; display:flex; align-items:center; z-index:2; }
  .clip-block.selected{ border-color:var(--accent); box-shadow:0 0 0 1px var(--accent); }
  .clip-label{ font-size:11px; color:#ddd; padding:0 8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; pointer-events:none; }
  .clip-del{ position:absolute; top:2px; left:2px; width:16px; height:16px; border-radius:3px; background:rgba(0,0,0,0.55);
    color:#ddd; border:none; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; z-index:3; }
  .clip-del:hover{ background:#a33; }
  .clip-kf-btn{ position:absolute; top:2px; right:2px; width:16px; height:16px; border-radius:3px; background:rgba(0,0,0,0.55);
    color:var(--accent-2); border:none; font-size:9px; cursor:pointer; display:flex; align-items:center; justify-content:center; z-index:3; }
  .clip-kf-btn:hover{ background:var(--accent-2); color:#000; }
  .kf-diamond{ position:absolute; bottom:3px; width:8px; height:8px; background:var(--accent-2); transform:translateX(50%) rotate(45deg);
    z-index:3; border:1px solid #fff2; }
  .text-block{ position:absolute; top:3px; bottom:3px; background:linear-gradient(180deg,rgba(59,161,255,0.35),rgba(59,161,255,0.15));
    border:1px solid var(--accent-2); border-radius:5px; overflow:hidden; display:flex; align-items:center; z-index:2; cursor:move; }
  .text-block.selected{ border-color:var(--accent); box-shadow:0 0 0 1px var(--accent); }
  .text-block .clip-label{ color:#dff0ff; }
  .handle{ position:absolute; top:0; bottom:0; width:8px; cursor:ew-resize; z-index:4; background:rgba(255,255,255,0.18); }
  .handle.start{ left:0; border-radius:5px 0 0 5px; }
  .handle.end{ right:0; border-radius:0 5px 5px 0; }
  .handle:hover{ background:rgba(255,255,255,0.35); }
  .playhead{ position:absolute; top:0; bottom:0; width:2px; background:#fff; z-index:6; pointer-events:none; }
  .playhead::before{ content:''; position:absolute; top:0; left:50%; transform:translateX(-50%); width:10px; height:10px;
    background:var(--accent); border-radius:2px; }

  .crop-layer{ position:absolute; inset:0; z-index:8; display:none; }
  .crop-rect{ position:absolute; border:2px solid var(--accent); box-shadow:0 0 0 9999px rgba(0,0,0,0.55); cursor:move; }
  .crop-handle{ position:absolute; width:14px; height:14px; background:var(--accent); border:2px solid #fff; border-radius:3px; z-index:2; }
  .crop-handle.nw{ top:-8px; left:-8px; cursor:nwse-resize; }
  .crop-handle.ne{ top:-8px; right:-8px; cursor:nesw-resize; }
  .crop-handle.sw{ bottom:-8px; left:-8px; cursor:nesw-resize; }
  .crop-handle.se{ bottom:-8px; right:-8px; cursor:nwse-resize; }
  .crop-toolbar{ position:absolute; top:10px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:9; }
  .crop-toolbar button{ background:rgba(13,13,13,0.9); border:1px solid var(--accent); color:#fff; padding:6px 14px;
    border-radius:16px; font-size:12px; cursor:pointer; white-space:nowrap; }
  .crop-toolbar button:hover{ background:var(--accent); }
  .crop-hint{ position:absolute; bottom:10px; left:50%; transform:translateX(-50%); background:rgba(13,13,13,0.85);
    color:var(--text-dim); font-size:11px; padding:5px 12px; border-radius:12px; z-index:9; white-space:nowrap; }
  * { scrollbar-width: thin; scrollbar-color: var(--accent) var(--panel-2); }
  html{ scrollbar-width: thin; scrollbar-color: var(--accent) var(--panel-2); }
  .style-panel, .fx-grid, .timeline-scroll, .popover{ scrollbar-width: thin; scrollbar-color: var(--accent) var(--panel-2); }
  ::-webkit-scrollbar{ width:6px; height:6px; }
  ::-webkit-scrollbar-track{ background:var(--panel-2); }
  ::-webkit-scrollbar-thumb{ background:var(--accent); border-radius:5px; }
  ::-webkit-scrollbar-thumb:hover{ background:#ff7452; }

  .confirm-modal{position:fixed;inset:0;background:rgba(0,0,0,0.6);display:none;align-items:center;justify-content:center;z-index:9999;}
  .confirm-modal.open{display:flex;}
  .confirm-box{background:var(--panel-2);border:1px solid var(--accent);border-radius:12px;padding:22px 26px;min-width:260px;box-shadow:0 16px 40px rgba(0,0,0,0.6);text-align:center;}
  .confirm-text{color:var(--text);font-size:15px;margin-bottom:18px;}
  .confirm-actions{display:flex;gap:10px;justify-content:center;}
  .confirm-yes{background:var(--accent);border:none;color:#fff;padding:9px 18px;border-radius:8px;font-size:13px;cursor:pointer;font-weight:600;}
  .confirm-no{background:var(--panel-3);border:1px solid var(--line);color:var(--text);padding:9px 18px;border-radius:8px;font-size:13px;cursor:pointer;}
`;

export const INSPECTOR_CSS = `
  /* orange selection borders only when selected */
  .text-overlay.selected{ outline:1.5px dashed var(--accent); outline-offset:4px; }
  .frame.media-selected{ border-color:var(--accent); }
  .clip-block{ border-color:#2e2e2e; }
  .text-block{ border-color:#2e2e2e; }
  .fx-block{ border-color:#3a3a3a; }

  /* left media inspector panel (orange/black, CapCut style) */
  .media-panel{ width:0; overflow:hidden; flex-shrink:0; background:var(--panel); border-left:1px solid var(--line);
    transition:width .18s ease; display:flex; }
  .media-panel.open{ width:320px; }
  .media-shell{ width:320px; display:flex; min-height:0; }
  .media-rail{ width:58px; flex:none; display:flex; flex-direction:column; gap:6px; padding:10px 6px;
    border-right:1px solid var(--line); background:#0b0b0b; }
  .media-tab{ box-sizing:border-box; width:46px; min-height:56px; padding:8px 2px; border:1px solid transparent;
    border-radius:9px; background:transparent; color:var(--text-dim); display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:5px; font:600 10px/1.15 system-ui; cursor:pointer;
    transition:background .18s,color .18s,transform .18s,box-shadow .18s; }
  .media-tab svg{ width:17px; height:17px; }
  .media-tab:hover{ background:#1f1f24; color:#fff; }
  .media-tab:active{ transform:scale(.96); }
  .media-tab.active{ color:var(--accent); background:rgba(255,90,54,0.14); border-color:#5a2c22;
    box-shadow:inset -2px 0 var(--accent); }
  .media-content{ min-width:0; flex:1; overflow-y:auto; padding:14px 12px; display:flex; flex-direction:column; gap:15px; }
  .media-head{ display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:4px; }
  .media-head .mh-name{ font-size:12.5px; font-weight:600; color:var(--text); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .media-head .mh-close{ background:none; border:none; color:var(--text-dim); cursor:pointer; font-size:15px; }
  .media-empty{ color:var(--text-dim); font-size:12.5px; line-height:1.7; text-align:center; padding:30px 8px; }
  .media-del{ width:100%; padding:9px 10px; border:1px solid #63392f; border-radius:8px; background:#281a18;
    color:#ff9a83; font:600 12px system-ui; cursor:pointer; transition:background .16s,color .16s,box-shadow .16s; }
  .media-del:hover{ background:#3b211e; color:#ffc0ae; box-shadow:0 0 14px rgba(255,115,85,0.1); }
  .media-del:active{ background:#4a2822; }
`;