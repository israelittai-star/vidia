// 22+ trending effects for each timeline category and 22 trending pro color filters.
// Mirrors the registration pattern in effect-expansion.js (runs in the editor iframe scope).
export const EFFECT_TRENDS_JS = String.raw`
(function(){
  // ---------- COLOR & GLOW (22) ----------
  const colors=[
    ['anamorphic','ברק אנמורפי','Anamorphic Flare','linear-gradient(90deg,transparent 30%,#cfe9ff88 49%,#ffffffcc 50%,#cfe9ff88 51%,transparent 70%)'],
    ['lightsweep','שטיפת אור','Light Sweep','linear-gradient(110deg,transparent 40%,#ffffff99 50%,transparent 60%)'],
    ['holographic','הולוגרפי','Holographic','linear-gradient(120deg,#ff5ad133,#3ba1ff33,#c77dff33,#ffd23f33,#31d17c33)'],
    ['vaporwave','ואפורוייב','Vaporwave','linear-gradient(180deg,#ff5acb44,transparent 40%,#3ba1ff44)'],
    ['synthgrid','סינת'גריד','Synthwave Grid','repeating-linear-gradient(90deg,#ff2d9555 0 1px,transparent 1px 26px),repeating-linear-gradient(0deg,#00eaff55 0 1px,transparent 1px 26px)'],
    ['cyberpunk','סייברפאנק','Cyberpunk','radial-gradient(ellipse at 80% 20%,#ff00aa44,transparent 60%),radial-gradient(ellipse at 20% 80%,#00fff744,transparent 60%)'],
    ['halation','הילה קולנועית','Halation','radial-gradient(ellipse,transparent 55%,#ff7a0055 80%,#ff3d0088 100%)'],
    ['dreambloom','פריחת חלום','Dream Bloom','radial-gradient(circle at 50% 50%,#ffffff33,transparent 70%)'],
    ['prismshaft','קרן פריזמה','Prism Shaft','linear-gradient(45deg,#ff004455,transparent 15%,#00ff8855,transparent 35%,#0088ff55,transparent 55%)'],
    ['lensorb','עדשת אור','Lens Orb','radial-gradient(circle at 50% 50%,#ffffff66,transparent 28%)'],
    ['tealorangemix','כחול-כתום LUT','Teal Orange LUT','linear-gradient(180deg,#ff8a3d22,transparent 50%,#1ad1ff22)'],
    ['pastelwash','שטיפת פסטל','Pastel Wash','linear-gradient(135deg,#ffd1f055,#d1e0ff55)'],
    ['leakmove','זליגת אור נעה','Moving Light Leak','linear-gradient(115deg,transparent 30%,#ff9a3d66 45%,#ffd23f55 55%,transparent 70%)'],
    ['starglow','זוהר כוכב','Star Glow','radial-gradient(circle at 30% 30%,#fff8c055,transparent 40%),radial-gradient(circle at 70% 65%,#fff0a855,transparent 40%)'],
    ['glowring','טבעת זוהר','Glow Ring','radial-gradient(circle,transparent 42%,#ffffff44 46%,transparent 50%)'],
    ['neonpink','ניאון ורוד','Neon Pink','radial-gradient(circle at 50% 50%,transparent 55%,#ff2d9555 85%)'],
    ['neoncyan','ניאון טורקיז','Neon Cyan','radial-gradient(circle at 50% 50%,transparent 55%,#00eaff55 85%)'],
    ['neonpurple','ניאון סגול','Neon Purple','radial-gradient(circle at 50% 50%,transparent 55%,#a64bff55 85%)'],
    ['retrosunset','שקיעה רטרו','Retro Sunset','linear-gradient(180deg,#ff7a3d55,transparent 45%,#a64bff33)'],
    ['iridescent','איריסנטי','Iridescent','linear-gradient(120deg,#ff5ad133,#3ba1ff33,#31d17c33,#ffd23f33,#ff5ad133)'],
    ['sunraybeam','קרן שמש','Sun Ray Beam','conic-gradient(from 180deg at 50% -10%,transparent,#fff3c944,transparent 25deg)'],
    ['glowaura','הילת זוהר','Glow Aura','radial-gradient(circle at 50% 60%,#ff5a3633,transparent 60%),radial-gradient(circle at 50% 40%,#3ba1ff22,transparent 60%)']
  ];
  colors.forEach(([id,he,en,background],i)=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'color',build:c=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;inset:-10%;mix-blend-mode:screen;background:'+background;c.appendChild(el);
    if(['lightsweep','leakmove','lensorb','starglow','glowring','sunraybeam'].includes(id)){
      el.animate([{transform:'translateX(-30%)',opacity:0},{transform:'translateX(30%)',opacity:1,offset:0.5},{transform:'translateX(30%)',opacity:0}],{duration:(1.6+i*0.15)*1000,iterations:Infinity,easing:'ease-in-out'});
    } else {
      el.animate([{opacity:0.3,transform:'scale(1)'},{opacity:0.8,transform:'scale(1.06)'},{opacity:0.3,transform:'scale(1)'}],{duration:1800+i*120,iterations:Infinity,easing:'ease-in-out'});
    }
  }}));

  // ---------- TRANSITIONS (22) ----------
  const transitions=[
    ['whipblur','הצלפת טשטוש','Whip Pan Blur','blur(0)','blur(14px)',null],
    ['speedzoom','זום מהיר','Speed Zoom','scale(1)','scale(1.4)',null],
    ['rgbsplit','פיצול RGB','RGB Split','translateX(0)','translateX(18px)',null],
    ['pixeldissolve','פיקסל דיסולב','Pixel Dissolve','blur(0) contrast(1)','blur(6px) contrast(1.4)',null],
    ['morphzoom','מורף זום','Morph Zoom','scale(1)','scale(1.6)',null],
    ['spinsnap','סיבוב הצלפה','Spin Snap','rotate(0)','rotate(180deg)',null],
    ['elasticsnap','הצלפה אלסטית','Elastic Snap','scale(0.6)','scale(1.1)',null],
    ['flashburn','שריפת הבזק','Flash Burn','brightness(1)','brightness(2.5) sepia(1)',null],
    ['checkerwipe','ניגוב שחמט','Checker Wipe','inset(0 100% 0 0)','inset(0)',null],
    ['crosszoom','זום מוצלב','Cross Zoom','scale(1) blur(0)','scale(1.5) blur(8px)',null],
    ['colorburn','שריפת צבע','Color Burn','hue-rotate(0)','hue-rotate(180deg)',null],
    ['invertflash','הבזק היפוך','Invert Flash','invert(0)','invert(1)',null],
    ['slidebounce','החלקה קופצת','Slide Bounce','translateX(100%)','translateX(0)',null],
    ['datamosh','דאטאמוש','Datamosh','translateY(0) hue-rotate(0)','translateY(10px) hue-rotate(40deg)',null],
    ['blurcut','חיתוך טשטוש','Blur Cut','blur(0)','blur(20px)',null],
    ['zoomwhip','הצלפת זום','Zoom Whip','scale(1) translateX(0)','scale(1.3) translateX(40px)',null],
    ['rotatesnap','הצלפת סיבוב','Rotate Snap','rotate(0) scale(1)','rotate(-12deg) scale(1.1)',null],
    ['expanddiamond','יהלום מתרחב','Expand Diamond','polygon(50% 50%,50% 50%,50% 50%,50% 50%)','polygon(50% -50%,150% 50%,50% 150%,-50% 50%)',null],
    ['shrinkdiamond','יהלום מתכווץ','Shrink Diamond','polygon(50% -150%,250% 50%,50% 250%,-150% 50%)','polygon(50% 50%,50% 50%,50% 50%,50% 50%)',null],
    ['wipebouncy','ניגוב קופץ','Bouncy Wipe','inset(0 100% 0 0)','inset(0)',null],
    ['glitchrgb','גליץ RGB','Glitch RGB','translateX(0)','translateX(12px)',null],
    ['speedramp','רמפת מהירות','Speed Ramp','scale(1) blur(0)','scale(1.2) blur(4px)',null]
  ];
  transitions.forEach(([id,he,en,from,to,color])=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'transition',build:(c,dur)=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;inset:0;'+(color?'background:'+color:'');c.appendChild(el);
    const isFilter=from.includes('blur')||from.includes('scale')||from.includes('rotate')||from.includes('translate')||from.includes('invert')||from.includes('hue')||from.includes('sepia')||from.includes('brightness')||from.includes('contrast');
    const frames=isFilter
      ?[{transform:from.replace(/^[a-z]+\(([^)]+)\).*/,''),filter:from,opacity:0},{transform:to,filter:to,opacity:1,offset:0.5},{transform:from,filter:from,opacity:0}]
      : [{clipPath:from,opacity:0},{clipPath:to,opacity:1,offset:0.5},{clipPath:from,opacity:0}];
    el.animate(frames,{duration:(dur||1)*1000,fill:'both',easing:id==='wipebouncy'?'cubic-bezier(.2,1.5,.4,1)':id==='checkerwipe'?'steps(6)':'ease-in-out'});
  }}));

  // ---------- SHAKE / MOTION (22) ----------
  const motions=[
    ['beatdrop','נפילת ביט','Beat Drop',['scale(1)','scale(1.18)','scale(1.02)','scale(1)'],300],
    ['snapzoom','זום הצלפה','Snap Zoom',['scale(1)','scale(1.22)','scale(1)'],280],
    ['recoil','מכה לאחור','Recoil',['translateX(0)','translateX(22px)','translateX(-6px)','translateX(0)'],320],
    ['freezeframe','פריים קפוא','Freeze Zoom',['scale(1.06)','scale(1.06)','scale(1.1)','scale(1.06)'],1200],
    ['glitchshake','רעד גליץ','Glitch Shake',['translateX(0)','translateX(8px)','translateX(-7px) translateY(4px)','translateX(0)'],120],
    ['wobblejelly','רטט ג\'לי','Wobble Jelly',['scale(1,1)','scale(1.06,.94)','scale(.94,1.06)','scale(1,1)'],600],
    ['vibrate','רטט מהיר','Vibrate',['translate(0,0)','translate(2px,-2px)','translate(-2px,2px)','translate(0,0)'],60],
    ['dollyzoom','דולי זום','Dolly Zoom',['scale(1)','scale(1.1)','scale(1)'],2000],
    ['cameraroll','גלגול מצלמה','Camera Roll',['rotate(0)','rotate(3deg)','rotate(0)'],1800],
    ['stepjump','קפיצת מדרגה','Step Jump',['translateY(0)','translateY(-6px)','translateY(0)','translateY(-4px)','translateY(0)'],700],
    ['bounceshake','רעד קופץ','Bounce Shake',['translateY(0)','translateY(-10px)','translateY(2px)','translateY(0)'],500],
    ['zoomshake','רעד זום','Zoom Shake',['scale(1) translate(0,0)','scale(1.04) translate(3px,-3px)','scale(1) translate(0,0)'],400],
    ['whipblurshake','הצלפה מטושטשת','Whip Blur Shake',['translateX(0) blur(0)','translateX(-20px) blur(3px)','translateX(20px) blur(3px)','translateX(0) blur(0)'],450],
    ['driftup','סחיפה מעלה','Drift Up',['translateY(0)','translateY(-14px)','translateY(0)'],2600],
    ['driftdown','סחיפה מטה','Drift Down',['translateY(0)','translateY(14px)','translateY(0)'],2600],
    ['pulsezoomfast','פעימה מהירה','Fast Pulse',['scale(1)','scale(1.07)','scale(1)'],250],
    ['tiltslow','הטיה איטית','Slow Tilt',['skewX(0)','skewX(1.5deg)','skewX(0)'],3000],
    ['rockgentle','נדנוד עדין','Gentle Rock',['rotate(-1deg)','rotate(1deg)','rotate(-1deg)'],3000],
    ['sway','נדנוד צידי','Sway',['translateX(0)','translateX(8px)','translateX(0)','translateX(-8px)','translateX(0)'],3200],
    ['bob','ציפה קלה','Bob',['translateY(0)','translateY(-5px)','translateY(0)'],2000],
    ['rumble','רעם','Rumble',['translate(0,0)','translate(-2px,2px)','translate(2px,-1px)','translate(0,0)'],100],
    ['shake3d','רעד תלת-ממדי','3D Shake',['rotateX(0) rotateY(0)','rotateX(2deg) rotateY(-2deg)','rotateX(-1deg) rotateY(1deg)','rotateX(0) rotateY(0)'],800]
  ];
  motions.forEach(([id,he,en,frames,duration])=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'shake',target:'frame',motion:frames.map(transform=>({transform})),motionDuration:duration}));

  // ---------- OVERLAY (22) ----------
  const overlays=[
    ['filmburn','שריפת פילם','Film Burn','radial-gradient(circle at 50% 100%,#ff450088,transparent 60%)'],
    ['leakmoving','זליגת אור נעה','Moving Light Leak','linear-gradient(115deg,transparent 35%,#ffae6b66 50%,transparent 65%)'],
    ['anamorphicstreak','פס אנמורפי','Anamorphic Streak','linear-gradient(90deg,transparent 45%,#ffffff77 49%,#ffffff88 50%,#ffffff77 51%,transparent 55%)'],
    ['lensdust','אבק עדשה','Lens Dust','radial-gradient(circle at 22% 30%,#fff6 0 .5px,transparent 1.5px),radial-gradient(circle at 70% 55%,#fff4 0 .5px,transparent 1.5px),radial-gradient(circle at 45% 80%,#fff3 0 .4px,transparent 1.5px)'],
    ['heavychromatic','אברציה כבדה','Heavy Chromatic','linear-gradient(90deg,#ff000033,transparent 4px),linear-gradient(270deg,#00ffff33,transparent 4px)'],
    ['rgbsplitov','פיצול RGB שכבה','RGB Split Overlay','linear-gradient(90deg,#ff000022,transparent 6px),linear-gradient(270deg,#0000ff22,transparent 6px)'],
    ['crtcurvature','עקמומיות CRT','CRT Curvature','radial-gradient(circle,transparent 70%,#000a 100%)'],
    ['pixelate','פיקסלים','Pixelate','repeating-conic-gradient(#0001 0% 25%,transparent 0% 50%)'],
    ['mosaictiles','פסיפס','Mosaic Tiles','repeating-linear-gradient(90deg,#0001 0 6px,transparent 6px 12px),repeating-linear-gradient(0deg,#0001 0 6px,transparent 6px 12px)'],
    ['edgesketch','שרטוט קצוות','Edge Sketch','repeating-linear-gradient(45deg,#0002 0 1px,transparent 1px 3px)'],
    ['comicink','דיו קומיקס','Comic Ink','repeating-linear-gradient(0deg,#0003 0 2px,transparent 2px 8px)'],
    ['glitchblocks','בלוקי גליץ','Glitch Blocks','repeating-linear-gradient(0deg,transparent 0 30px,#ff004455 30px 34px,transparent 34px 70px)'],
    ['datamoshov','דאטאמוש שכבה','Datamosh Overlay','repeating-linear-gradient(0deg,transparent 0 18px,#00eaff44 18px 20px,transparent 20px 40px)'],
    ['staticnoise','רעש סטטי','Static Noise','repeating-conic-gradient(#fff2 0% 5%,#0002 5% 10%)'],
    ['hologramlines','קווי הולוגרמה','Hologram Lines','repeating-linear-gradient(0deg,transparent 0 3px,#00ffe533 3px 4px)'],
    ['interference','הפרעה טלוויזיה','Interference','repeating-linear-gradient(0deg,transparent 0 40px,#ffffff22 40px 42px,transparent 42px 80px)'],
    ['motionblurov','טשטוש תנועה','Motion Blur Overlay','linear-gradient(90deg,transparent,#ffffff22,transparent)'],
    ['bokehhearts','בוקה לבבות','Bokeh Hearts','radial-gradient(circle at 20% 30%,#ff5a8044 0 6px,transparent 7px),radial-gradient(circle at 75% 60%,#ff5a8044 0 8px,transparent 9px)'],
    ['bokehstars','בוקה כוכבים','Bokeh Stars','radial-gradient(circle at 30% 25%,#ffd23f44 0 5px,transparent 6px),radial-gradient(circle at 70% 70%,#ffd23f44 0 7px,transparent 8px)'],
    ['neonedge','קצוות ניאון','Neon Edge Glow','radial-gradient(ellipse,transparent 70%,#ff2d9555 92%,#ff2d9599 100%)'],
    ['scanlineroll','קו סריקה נע','Rolling Scanline','linear-gradient(0deg,transparent,#ffffff33,transparent)'],
    ['vhstracking','מעקב VHS','VHS Tracking','repeating-linear-gradient(0deg,transparent 0 20px,#ffffff15 20px 22px,transparent 22px 60px)']
  ];
  overlays.forEach(([id,he,en,background])=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'overlay',build:c=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;inset:0;pointer-events:none;mix-blend-mode:screen;background:'+background;
    if(['pixelate','mosaictiles','staticnoise','dottedscreen'].includes(id))el.style.backgroundSize='8px 8px';
    c.appendChild(el);
    if(['leakmoving','scanlineroll','interference','vhstracking','glitchblocks','motionblurov'].includes(id)){
      el.animate([{transform:'translateY(-100%)'},{transform:'translateY(100%)'}],{duration:(2+Math.random()*2)*1000,iterations:Infinity,easing:'linear'});
    }
  }}));

  // ---------- PRO COLOR FILTERS (22) ----------
  const filters=[
    ['cybergrade','צבע סייבר','Cyber Grade',1.2,1.6,1.05,0.1,200],
    ['vaporgrade','ואפור גרייד','Vapor Grade',1.05,1.7,1.08,0.25,300],
    ['synthwavegrade','סינת'גרייד','Synthwave Grade',1.15,1.5,0.98,0.2,280],
    ['tealorangeboost','כחול-כתום מוגבר','Teal Orange Boost',1.25,1.5,1.02,0.15,15],
    ['moodyblue','כחול מלנכולי','Moody Blue',1.3,1.1,0.85,0.1,200],
    ['cinematicdark','קולנועי כהה','Cinematic Dark',1.4,0.9,0.82,0.15,200],
    ['pasteldream','חלום פסטל','Pastel Dream',0.85,0.7,1.15,0.2,250],
    ['orangefilter','מסנן כתום','Orange Filter',1.1,1.3,1.05,0.5,-15],
    ['tealfilter','מסנן כחול','Teal Filter',1.1,1.3,0.98,0.4,180],
    ['magentafilter','מסנן מגנטה','Magenta Filter',1.1,1.4,1.02,0.3,320],
    ['limefilter','מסנן ליים','Lime Filter',1.05,1.3,1.05,0.25,80],
    ['denim','דנים','Denim Blue',1.2,1,0.92,0.2,200],
    ['forest','יער','Forest',1.25,1.1,0.88,0.15,90],
    ['desert','מדבר','Desert',1.1,1.2,1.08,0.45,-10],
    ['oceanblue','אוקיינוס','Ocean',1.15,1.25,0.95,0.2,190],
    ['sunsetfire','שקיעת אש','Sunset Fire',1.15,1.4,1.02,0.5,-20],
    ['midnight','חצות','Midnight',1.35,0.85,0.78,0.15,220],
    ['candypop','ממתק פופ','Candy Pop',1,1.6,1.1,0.1,330],
    ['neongrade','ניאון גרייד','Neon Grade',1.1,2,1.12,0.05,270],
    ['noirstark','נואר חד','Stark Noir',1.9,0,0.85,0,0],
    ['filmgrade','גרייד פילם','Film Grade',1.2,0.85,1.05,0.35,-5],
    ['vintagefade','רטרו דהוי','Vintage Fade',0.9,0.7,1.1,0.3,15]
  ];
  filters.forEach(([id,he,en,contrast,saturation,brightness,sepia,hue])=>window.__EFFECTS.push({id,he,en,filter:i=>{
    const f=i/100;return 'contrast('+(1+(contrast-1)*f)+') saturate('+(1+(saturation-1)*f)+') brightness('+(1+(brightness-1)*f)+') sepia('+(sepia*f)+') hue-rotate('+(hue*f)+'deg)';
  }}));
})();
`;