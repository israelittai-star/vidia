// 21 additional effects for each timeline-effects category and 21 clip filters.
export const EFFECT_EXPANSION_JS = String.raw`
(function(){
  const colors=[
    ['aurora','אורורה','Aurora','linear-gradient(120deg,#05ffa344,transparent,#a65cff44)'],
    ['oceanlight','אור אוקיינוס','Ocean Light','radial-gradient(ellipse at 20% 80%,#00bfff55,transparent 65%)'],
    ['amberhalo','הילה ענברית','Amber Halo','radial-gradient(circle,transparent 25%,#ffa60044 50%,transparent 70%)'],
    ['rubybeam','קרן אודם','Ruby Beam','linear-gradient(35deg,transparent 35%,#ff174455 50%,transparent 65%)'],
    ['emeraldmist','ערפל אמרלד','Emerald Mist','radial-gradient(ellipse at 80% 20%,#00df8855,transparent 70%)'],
    ['violetring','טבעת סגולה','Violet Ring','radial-gradient(circle,transparent 40%,#b760ff66 43%,transparent 47%)'],
    ['silverglimmer','ברק כסוף','Silver Glimmer','linear-gradient(110deg,transparent 40%,#ffffff55 50%,transparent 60%)'],
    ['sunsweep','שטיפת שמש','Sun Sweep','conic-gradient(from 20deg at 0% 100%,transparent,#ffcb6244,transparent)'],
    ['laserribbon','סרט לייזר','Laser Ribbon','repeating-linear-gradient(140deg,transparent 0 12%,#ff4fe033 13% 15%,transparent 16% 25%)'],
    ['electricarcs','קשתות חשמל','Electric Arcs','repeating-radial-gradient(ellipse at 50% 120%,transparent 0 8%,#7de8ff55 9% 10%,transparent 11% 16%)'],
    ['honeylight','אור דבש','Honey Light','radial-gradient(circle at 10% 10%,#ffd74077,transparent 55%)'],
    ['midnightglow','זוהר חצות','Midnight Glow','linear-gradient(0deg,#354bff55,transparent 70%)'],
    ['pearlshine','ברק פנינה','Pearl Shine','radial-gradient(ellipse at 50% 10%,#fffbe855,transparent 80%)'],
    ['coralwash','שטיפת אלמוג','Coral Wash','linear-gradient(135deg,#ff856644,transparent,#ffd3b533)'],
    ['cyanhalo','הילה טורקיז','Cyan Halo','radial-gradient(ellipse,transparent 20%,#00ffff44 60%,transparent 85%)'],
    ['magnetaglow','זוהר מגנטה','Magenta Glow','radial-gradient(circle at 0% 50%,#ff00cc66,transparent 60%)'],
    ['candleflicker','הבהוב נר','Candle Flicker','radial-gradient(ellipse at 50% 100%,#ffb34766,transparent 65%)'],
    ['mintbloom','פריחת מנטה','Mint Bloom','radial-gradient(circle at 65% 35%,#9cffe244,transparent 65%)'],
    ['rainbowhalo','הילה קשתית','Rainbow Halo','conic-gradient(#ff525233,#ffe85233,#53ff8b33,#529aff33,#c452ff33,#ff525233)'],
    ['goldrays','קרני זהב','Golden Rays','repeating-conic-gradient(from 15deg at 50% 0%,transparent 0deg 12deg,#ffd86b33 13deg 20deg)'],
    ['frostlight','אור כפור','Frost Light','linear-gradient(180deg,#e2f7ff55,transparent 40%,#b6ddff33)']
  ];
  colors.forEach(([id,he,en,background],i)=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'color',build:c=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;inset:-10%;mix-blend-mode:screen;background:'+background;c.appendChild(el);
    el.animate([{opacity:0.25,transform:'translate(-3%,-2%) scale(1)'},{opacity:0.8,transform:'translate(3%,2%) scale(1.08)'},{opacity:0.25,transform:'translate(-3%,-2%) scale(1)'}],{duration:1800+i*130,iterations:Infinity,easing:'ease-in-out'});
  }}));
  const transitions=[
    ['diagonalwipe','ניגוב אלכסוני','Diagonal Wipe','polygon(0 0,0 0,0 0)','polygon(0 0,100% 0,100% 100%,0 100%)'],
    ['diamondiris','איריס יהלום','Diamond Iris','polygon(50% 50%,50% 50%,50% 50%,50% 50%)','polygon(50% -50%,150% 50%,50% 150%,-50% 50%)'],
    ['horizontalshutter','תריס אופקי','Horizontal Shutter','inset(50% 0)','inset(0)'],
    ['verticalshutter','תריס אנכי','Vertical Shutter','inset(0 50%)','inset(0)'],
    ['topleftwipe','ניגוב פינה עליונה','Top Corner Wipe','circle(0% at 0% 0%)','circle(150% at 0% 0%)'],
    ['bottomrightwipe','ניגוב פינה תחתונה','Bottom Corner Wipe','circle(0% at 100% 100%)','circle(150% at 100% 100%)'],
    ['ellipsegate','שער אליפטי','Ellipse Gate','ellipse(0% 50% at 50% 50%)','ellipse(100% 100% at 50% 50%)'],
    ['trianglewipe','ניגוב משולש','Triangle Wipe','polygon(50% 0,50% 0,50% 0)','polygon(50% -100%,200% 100%,-100% 100%)'],
    ['hexagongate','שער משושה','Hexagon Gate','circle(0%)','polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)'],
    ['slantdoor','דלת נטויה','Slanted Door','polygon(0 0,0 0,0 100%,0 100%)','polygon(0 0,120% 0,100% 100%,0 100%)'],
    ['softblackfade','דהייה שחורה רכה','Soft Black Fade',null,null,'#000'],
    ['amberflash','הבזק ענבר','Amber Flash',null,null,'#ffb742'],
    ['blueflash','הבזק תכלת','Blue Flash',null,null,'#81d4ff'],
    ['roseflash','הבזק ורוד','Rose Flash',null,null,'#ff8bac'],
    ['doubleflash','הבזק כפול','Double Flash',null,null,'#fff'],
    ['zoomiris','איריס זום','Zoom Iris','circle(0% at 50% 50%)','circle(90% at 50% 50%)'],
    ['letterboxclose','סגירת קולנוע','Letterbox Close','inset(50% 0)','inset(0)'],
    ['sidecurtain','וילון צדדי','Side Curtain','inset(0 100% 0 0)','inset(0)'],
    ['bottomcurtain','וילון תחתון','Bottom Curtain','inset(100% 0 0 0)','inset(0)'],
    ['crossgate','שער צלב','Cross Gate','polygon(45% 45%,55% 45%,55% 55%,45% 55%)','polygon(-50% -50%,150% -50%,150% 150%,-50% 150%)'],
    ['stepwipe','ניגוב מדורג','Stepped Wipe','inset(0 100% 0 0)','inset(0)']
  ];
  transitions.forEach(([id,he,en,from,to,color])=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'transition',build:(c,dur)=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;inset:0;background:'+(color||'#000');c.appendChild(el);
    const frames=from?[{clipPath:from,opacity:0},{clipPath:to,opacity:1,offset:0.5},{clipPath:from,opacity:0}]:id==='doubleflash'?[{opacity:0},{opacity:1,offset:0.1},{opacity:0,offset:0.3},{opacity:1,offset:0.5},{opacity:0}]:[{opacity:0},{opacity:1,offset:0.5},{opacity:0}];
    el.animate(frames,{duration:(dur||1)*1000,fill:'both',easing:id==='stepwipe'?'steps(8)':'ease-in-out'});
  }}));
  const motions=[
    ['horizontalshake','רעידה אופקית','Horizontal Shake',['translateX(0)','translateX(-12px)','translateX(12px)','translateX(0)'],250],
    ['verticalshake','רעידה אנכית','Vertical Shake',['translateY(0)','translateY(-10px)','translateY(10px)','translateY(0)'],300],
    ['diagonalshake','רעידה אלכסונית','Diagonal Shake',['translate(0,0)','translate(-8px,8px)','translate(8px,-8px)','translate(0,0)'],350],
    ['microshake','רעידה עדינה','Micro Shake',['translate(0,0)','translate(1px,-1px)','translate(-1px,1px)','translate(0,0)'],90],
    ['earthquake','רעידת אדמה','Earthquake',['translate(0,0) rotate(0)','translate(-14px,8px) rotate(-1deg)','translate(14px,-8px) rotate(1deg)','translate(0,0) rotate(0)'],450],
    ['camerabounce','קפיצת מצלמה','Camera Bounce',['translateY(0)','translateY(-14px)','translateY(3px)','translateY(0)'],650],
    ['handheld','מצלמה ביד','Handheld',['translate(0,0) rotate(0)','translate(-3px,4px) rotate(-.4deg)','translate(4px,-2px) rotate(.5deg)','translate(0,0) rotate(0)'],1600],
    ['driftleft','סחיפה שמאלה','Left Drift',['translateX(0)','translateX(-18px)','translateX(0)'],2100],
    ['driftright','סחיפה ימינה','Right Drift',['translateX(0)','translateX(18px)','translateX(0)'],2100],
    ['slowfloat','ריחוף איטי','Slow Float',['translateY(0)','translateY(-12px)','translateY(0)'],3200],
    ['rockclockwise','נדנוד ימני','Clockwise Rock',['rotate(0)','rotate(2deg)','rotate(0)'],1500],
    ['rockcounter','נדנוד שמאלי','Counter Rock',['rotate(0)','rotate(-2deg)','rotate(0)'],1500],
    ['tiltpulse','פעימת הטיה','Tilt Pulse',['skewX(0)','skewX(2deg)','skewX(-2deg)','skewX(0)'],1000],
    ['elasticzoom','זום אלסטי','Elastic Zoom',['scale(1)','scale(1.12)','scale(1.03)','scale(1)'],900],
    ['breathingzoom','זום נשימה','Breathing Zoom',['scale(1)','scale(1.05)','scale(1)'],4000],
    ['stutterzoom','זום מקוטע','Stutter Zoom',['scale(1)','scale(1.03)','scale(1.09)','scale(1)'],400],
    ['orbitshake','רעידה מעגלית','Orbit Shake',['translate(0,-6px)','translate(6px,0)','translate(0,6px)','translate(-6px,0)','translate(0,-6px)'],900],
    ['whippan','הצלפת מצלמה','Whip Pan',['translateX(0)','translateX(-25px)','translateX(25px)','translateX(0)'],550],
    ['impactkick','מכת מצלמה','Impact Kick',['scale(1) rotate(0)','scale(1.08) rotate(1deg)','scale(1) rotate(0)'],350],
    ['rollingwave','גל מתגלגל','Rolling Wave',['translate(0,0) rotate(0)','translate(4px,-6px) rotate(1deg)','translate(-4px,6px) rotate(-1deg)','translate(0,0) rotate(0)'],1800],
    ['pendulum','מטוטלת','Pendulum',['rotate(-2deg)','rotate(2deg)','rotate(-2deg)'],2400]
  ];
  motions.forEach(([id,he,en,frames,duration])=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'shake',target:'frame',motion:frames.map(transform=>({transform})),motionDuration:duration}));
  const overlays=[
    ['letterbox','פסי קולנוע','Letterbox','linear-gradient(#000 0 9%,transparent 9% 91%,#000 91%)'],
    ['pillarbox','פסי צד','Pillarbox','linear-gradient(90deg,#000 0 9%,transparent 9% 91%,#000 91%)'],
    ['safegrid','רשת שלישים','Thirds Grid','linear-gradient(90deg,transparent 33%,#ffffff44 33% 33.3%,transparent 33.3% 66.6%,#ffffff44 66.6% 66.9%,transparent 66.9%),linear-gradient(transparent 33%,#ffffff44 33% 33.3%,transparent 33.3% 66.6%,#ffffff44 66.6% 66.9%,transparent 66.9%)'],
    ['halftone','רשת הדפסה','Halftone','radial-gradient(#0006 1px,transparent 2px)'],
    ['linen','מרקם בד','Linen','repeating-linear-gradient(0deg,#ffffff0d 0 1px,transparent 1px 4px),repeating-linear-gradient(90deg,#0002 0 1px,transparent 1px 5px)'],
    ['papergrain','מרקם נייר','Paper Grain','repeating-conic-gradient(#ffeaca12 0deg 10deg,transparent 10deg 20deg)'],
    ['rainwindow','חלון גשם','Rain Window','repeating-linear-gradient(100deg,transparent 0 18px,#bce7ff33 19px 20px,transparent 21px 45px)'],
    ['frostedges','קצוות קפואים','Frost Edges','radial-gradient(ellipse,transparent 40%,#d9f6ff77 100%)'],
    ['burnedges','קצוות שרופים','Burnt Edges','radial-gradient(ellipse,transparent 50%,#6d210e88 85%,#000b 100%)'],
    ['filmperforation','חורי פילם','Film Perforation','repeating-linear-gradient(0deg,#000 0 12px,transparent 12px 20px)'],
    ['dottedscreen','מסך נקודות','Dotted Screen','radial-gradient(#fff3 1px,transparent 1.5px)'],
    ['diagonalmesh','רשת אלכסונית','Diagonal Mesh','repeating-linear-gradient(45deg,transparent 0 12px,#ffffff22 12px 13px),repeating-linear-gradient(-45deg,transparent 0 12px,#ffffff22 12px 13px)'],
    ['speedlines','קווי מהירות','Speed Lines','repeating-conic-gradient(from 0deg,transparent 0deg 12deg,#ffffff33 13deg 14deg)'],
    ['ovalmatte','מסכה אובלית','Oval Matte','radial-gradient(ellipse,transparent 50%,#000c 75%)'],
    ['cornerfade','דהיית פינות','Corner Fade','linear-gradient(135deg,#000a,transparent 30% 70%,#000a)'],
    ['pixelmesh','רשת פיקסלים','Pixel Mesh','repeating-conic-gradient(#0002 0% 25%,transparent 0% 50%)'],
    ['analogbands','פסים אנלוגיים','Analog Bands','repeating-linear-gradient(0deg,transparent 0 40px,#fff2 41px 44px,transparent 45px 80px)'],
    ['warmmatte','מסכה חמה','Warm Matte','linear-gradient(0deg,#8e491d33,#efcf8533)'],
    ['coolmatte','מסכה קרה','Cool Matte','linear-gradient(0deg,#1d498e33,#85cfef33)'],
    ['tunnelshade','צל מנהרה','Tunnel Shade','radial-gradient(circle at 50% 50%,transparent 20%,#0009 75%)'],
    ['glassedgetint','קצוות זכוכית','Glass Edge Tint','linear-gradient(90deg,#ffffff55,transparent 5% 95%,#ffffff55)']
  ];
  overlays.forEach(([id,he,en,background])=>window.__OVERLAY_EFFECTS.push({id,he,en,cat:'overlay',build:c=>{
    const el=document.createElement('div');el.style.cssText='position:absolute;inset:0;pointer-events:none;background:'+background;
    if(['halftone','dottedscreen','pixelmesh'].includes(id))el.style.backgroundSize='6px 6px';
    if(id==='filmperforation'){el.style.width='4%';el.style.boxShadow='inset 0 0 0 3px #000';const right=el.cloneNode(true);right.style.left='96%';c.appendChild(right);}
    c.appendChild(el);
  }}));
  const filters=[
    ['velvet','קטיפה','Velvet',1.15,0.75,0.9,0,0],['porcelain','חרסינה','Porcelain',0.9,0.7,1.18,0.05,0],
    ['espresso','אספרסו','Espresso',1.3,0.65,0.82,0.4,-10],['sandstone','אבן חול','Sandstone',1.1,0.6,1.1,0.45,0],
    ['deepsea','ים עמוק','Deep Sea',1.3,1.4,0.8,0.1,170],['lavender','לבנדר','Lavender',0.9,1.2,1.1,0.3,250],
    ['cherry','דובדבן','Cherry',1.2,1.6,0.95,0.25,310],['sage','מרווה','Sage',0.95,0.75,1.05,0.35,70],
    ['film1960','פילם 1960','Film 1960',1.2,0.5,1.05,0.6,-15],['film1990','פילם 1990','Film 1990',1.1,1.3,1.03,0.18,10],
    ['steel','פלדה','Steel',1.45,0.4,0.95,0,0],['moonlit','מואר ירח','Moonlit',1.15,0.6,0.75,0.1,180],
    ['highkey','מפתח בהיר','High Key',0.85,0.9,1.35,0,0],['lowkey','מפתח כהה','Low Key',1.5,0.8,0.65,0,0],
    ['sunbleached','צריבת שמש','Sun Bleached',0.8,0.65,1.2,0.2,-10],['richgold','זהב עשיר','Rich Gold',1.25,1.4,1.08,0.5,-15],
    ['mintfilm','פילם מנטה','Mint Film',0.9,1.25,1.1,0.25,85],['violetfilm','פילם סגול','Violet Film',1.2,1.45,0.95,0.3,255],
    ['softnoir','נואר רך','Soft Noir',1.12,0,1.02,0,0],['hardnoir','נואר חד','Hard Noir',1.8,0,0.8,0,0],
    ['clearair','אוויר צלול','Clear Air',1.18,1.12,1.12,0,0]
  ];
  filters.forEach(([id,he,en,contrast,saturation,brightness,sepia,hue])=>window.__EFFECTS.push({id,he,en,filter:i=>{
    const f=i/100;return 'contrast('+(1+(contrast-1)*f)+') saturate('+(1+(saturation-1)*f)+') brightness('+(1+(brightness-1)*f)+') sepia('+(sepia*f)+') hue-rotate('+(hue*f)+'deg)';
  }}));
})();
`;