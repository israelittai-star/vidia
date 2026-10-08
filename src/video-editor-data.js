// Auto-generated data for the video editor (extracted to keep the main file under the size limit).
// These strings are interpolated into the editor's HTML and evaluated inside the iframe.

export const EFFECTS_JS = `
function buildParticles(container, opts){
  container.innerHTML='';
  for(let i=0;i<opts.count;i++){
    const s=document.createElement('span');
    s.className='fx-particle'; s.textContent=opts.char;
    const size=opts.size[0]+Math.random()*(opts.size[1]-opts.size[0]);
    s.style.fontSize=size+'px';
    s.style.left=(Math.random()*100)+'%';
    const dur=opts.dur[0]+Math.random()*(opts.dur[1]-opts.dur[0]);
    s.style.animationDuration=dur+'s';
    s.style.animationDelay=(Math.random()*dur)+'s';
    if(opts.dir==='twinkle'){ s.style.top=(Math.random()*100)+'%'; s.style.animationName='fxTwinkle'; }
    else { s.style.animationName=opts.dir==='rise'?'fxRise':'fxFall'; }
    if(opts.color) s.style.color=opts.color;
    if(opts.colorList) s.style.color=opts.colorList[Math.floor(Math.random()*opts.colorList.length)];
    container.appendChild(s);
  }
}
window.__EFFECTS=[
    { id:'brighten', he:'בהיר', en:'Brighten',       filter:i=>\`brightness(\${1+i/100*0.9})\` },
    { id:'darken',   he:'כהה',        en:'Darken',        filter:i=>\`brightness(\${1-i/100*0.6})\` },
    { id:'contrast', he:'ניגודיות',   en:'Contrast',      filter:i=>\`contrast(\${1+i/100*1.3})\` },
    { id:'saturate', he:'רוויה',      en:'Saturate',      filter:i=>\`saturate(\${1+i/100*2.2})\` },
    { id:'desaturate', he:'דה-רוויה', en:'Desaturate',    filter:i=>\`saturate(\${1-i/100*0.9})\` },
    { id:'bw',       he:'שחור-לבן',   en:'B&W',           filter:i=>\`grayscale(\${i/100})\` },
    { id:'sepia',    he:'ספיה',       en:'Sepia',         filter:i=>\`sepia(\${i/100})\` },
    { id:'blur',     he:'טשטוש',      en:'Blur',          filter:i=>\`blur(\${i/100*6}px)\` },
    { id:'invert',   he:'היפוך צבעים',en:'Invert',        filter:i=>\`invert(\${i/100})\` },
    { id:'hue',      he:'גוון',       en:'Hue Shift',      filter:i=>\`hue-rotate(\${i/100*180}deg)\` },
    { id:'warm',     he:'חם',         en:'Warm',          filter:i=>\`sepia(\${i/100*0.5}) saturate(\${1+i/100*0.7})\` },
    { id:'cold',     he:'קר',         en:'Cold',          filter:i=>\`hue-rotate(\${i/100*180}deg) saturate(\${1+i/100*0.4})\` },
    { id:'vintage',  he:'רטרו',       en:'Vintage',       filter:i=>\`sepia(\${i/100*0.5}) contrast(\${1+i/100*0.3}) saturate(\${1+i/100*0.5})\` },
    { id:'cinema',   he:'קולנועי',    en:'Cinematic',     filter:i=>\`contrast(\${1+i/100*0.4}) saturate(\${1-i/100*0.2}) brightness(\${1-i/100*0.1})\` },
    { id:'neon',     he:'ניאון',      en:'Neon',          filter:i=>\`saturate(\${1+i/100*3}) hue-rotate(\${i/100*40}deg) brightness(\${1+i/100*0.2})\` },
    { id:'night',    he:'לילה',       en:'Night',         filter:i=>\`brightness(\${1-i/100*0.5}) hue-rotate(\${i/100*200}deg) saturate(\${1+i/100*0.3})\` },
    { id:'dreamy',   he:'חלומי',      en:'Dreamy',        filter:i=>\`blur(\${i/100*2}px) brightness(\${1+i/100*0.3}) saturate(\${1-i/100*0.1})\` },
    { id:'pastel',   he:'פסטל',       en:'Pastel',        filter:i=>\`contrast(\${1-i/100*0.3}) saturate(\${1-i/100*0.3}) brightness(\${1+i/100*0.15})\` },
    { id:'dramaBW',  he:'ד"ש דרמטי',  en:'Dramatic B&W',  filter:i=>\`grayscale(1) contrast(\${1+i/100*0.8})\` },
    { id:'dramatic', he:'דרמטי',      en:'Dramatic',      filter:i=>\`contrast(\${1+i/100*0.6}) brightness(\${1-i/100*0.2}) saturate(\${1+i/100*0.3})\` },
    { id:'crossproc',he:'קרוס פרוסס', en:'Cross Process', filter:i=>\`contrast(\${1+i/100*0.5}) saturate(\${1+i/100*1.5}) hue-rotate(\${i/100*15}deg)\` },
    { id:'bleach',   he:'הלבנה',      en:'Bleach Bypass', filter:i=>\`grayscale(\${i/100*0.5}) contrast(\${1+i/100*0.6}) brightness(\${1+i/100*0.15})\` },
    { id:'noir',     he:'נואר',       en:'Noir',          filter:i=>\`grayscale(1) contrast(\${1+i/100*1}) brightness(\${1-i/100*0.15})\` },
    { id:'sunny',    he:'שמשי',       en:'Sunny',         filter:i=>\`brightness(\${1+i/100*0.3}) saturate(\${1+i/100*0.5}) sepia(\${i/100*0.15})\` },
    { id:'moody',    he:'מלנכולי',    en:'Moody',         filter:i=>\`contrast(\${1+i/100*0.5}) saturate(\${1-i/100*0.4}) brightness(\${1-i/100*0.25})\` },
    { id:'infrared', he:'אינפרה-אדום',en:'Infrared',      filter:i=>\`hue-rotate(\${i/100*300}deg) saturate(\${1+i/100*2}) invert(\${i/100*0.3})\` },
    { id:'tealorange',he:'כחול-כתום', en:'Teal & Orange', filter:i=>\`contrast(\${1+i/100*0.3}) saturate(\${1+i/100*0.6}) hue-rotate(\${i/100*10}deg)\` },
    { id:'golden',   he:'מוזהב',      en:'Golden Hour',   filter:i=>\`sepia(\${i/100*0.4}) saturate(\${1+i/100*0.6}) brightness(\${1+i/100*0.15}) hue-rotate(\${i/100*-10}deg)\` },
    { id:'coolblue', he:'כחול קר',    en:'Cool Blue',     filter:i=>\`hue-rotate(\${i/100*200}deg) saturate(\${1+i/100*0.4}) brightness(\${1+i/100*0.05})\` },
    { id:'lomo',     he:'לומו',       en:'Lomo',          filter:i=>\`contrast(\${1+i/100*0.7}) saturate(\${1+i/100*1.2}) brightness(\${1-i/100*0.1})\` },
    { id:'polaroid', he:'פולארויד',   en:'Polaroid',      filter:i=>\`sepia(\${i/100*0.3}) contrast(\${1-i/100*0.15}) brightness(\${1+i/100*0.1}) saturate(\${1+i/100*0.2})\` },
    { id:'silver',   he:'כסף',        en:'Silver',        filter:i=>\`grayscale(\${i/100*0.6}) contrast(\${1+i/100*0.3}) brightness(\${1+i/100*0.05})\` },
    { id:'rose',     he:'ורוד',       en:'Rose',          filter:i=>\`sepia(\${i/100*0.4}) hue-rotate(\${i/100*300}deg) saturate(\${1+i/100*0.5})\` },
    { id:'matrix',   he:'מטריקס',     en:'Matrix',        filter:i=>\`hue-rotate(\${i/100*90}deg) saturate(\${1+i/100*1.5}) contrast(\${1+i/100*0.4})\` },
    { id:'fade',     he:'דעיכה',      en:'Faded',         filter:i=>\`contrast(\${1-i/100*0.25}) brightness(\${1+i/100*0.12}) saturate(\${1-i/100*0.3})\` },
    { id:'crush',    he:'שחור כבד',   en:'Crushed Blacks',filter:i=>\`contrast(\${1+i/100*0.9}) brightness(\${1-i/100*0.2})\` },
    { id:'bloom',    he:'בלום',       en:'Bloom',         filter:i=>\`brightness(\${1+i/100*0.4}) contrast(\${1-i/100*0.2}) saturate(\${1+i/100*0.4})\` },
    { id:'vibrant', he:'ויויברנטי', en:'Vibrant', filter:i=>\`saturate(\${1+i/100*1.5}) contrast(\${1+i/100*0.2})\` },
    { id:'candy', he:'ממתק', en:'Candy', filter:i=>\`saturate(\${1+i/100*1.8}) hue-rotate(\${i/100*30}deg) brightness(\${1+i/100*0.1})\` },
    { id:'summer', he:'קיץ', en:'Summer', filter:i=>\`sepia(\${i/100*0.3}) saturate(\${1+i/100*0.8}) brightness(\${1+i/100*0.1})\` },
    { id:'winter', he:'חורף', en:'Winter', filter:i=>\`hue-rotate(\${i/100*180}deg) saturate(\${1+i/100*0.3}) brightness(\${1+i/100*0.1})\` },
    { id:'autumn', he:'סתיו', en:'Autumn', filter:i=>\`sepia(\${i/100*0.5}) saturate(\${1+i/100*0.6}) hue-rotate(\${i/100*-15}deg)\` },
    { id:'spring', he:'אביב', en:'Spring', filter:i=>\`saturate(\${1+i/100*0.8}) brightness(\${1+i/100*0.12}) hue-rotate(\${i/100*20}deg)\` },
    { id:'beach', he:'חוף', en:'Beach', filter:i=>\`sepia(\${i/100*0.2}) saturate(\${1+i/100*0.7}) brightness(\${1+i/100*0.15}) hue-rotate(\${i/100*-10}deg)\` },
    { id:'sunset2', he:'שקיעה', en:'Sunset', filter:i=>\`sepia(\${i/100*0.4}) hue-rotate(\${i/100*-20}deg) saturate(\${1+i/100*0.8}) brightness(\${1+i/100*0.05})\` },
    { id:'sunrise', he:'זריחה', en:'Sunrise', filter:i=>\`sepia(\${i/100*0.3}) saturate(\${1+i/100*0.5}) brightness(\${1+i/100*0.2}) hue-rotate(\${i/100*-15}deg)\` },
    { id:'dusk', he:'דמדומים', en:'Dusk', filter:i=>\`contrast(\${1+i/100*0.3}) saturate(\${1-i/100*0.2}) brightness(\${1-i/100*0.15}) hue-rotate(\${i/100*20}deg)\` },
    { id:'fog', he:'ערפל', en:'Fog', filter:i=>\`blur(\${i/100*1.5}px) brightness(\${1+i/100*0.1}) saturate(\${1-i/100*0.2})\` },
    { id:'copper', he:'נחושת', en:'Copper', filter:i=>\`sepia(\${i/100*0.5}) saturate(\${1+i/100*0.4}) hue-rotate(\${i/100*-10}deg) brightness(\${1+i/100*0.1})\` },
    { id:'bronze', he:'ברונזה', en:'Bronze', filter:i=>\`sepia(\${i/100*0.6}) contrast(\${1+i/100*0.3}) saturate(\${1+i/100*0.3})\` },
    { id:'platinum', he:'פלטינה', en:'Platinum', filter:i=>\`grayscale(\${i/100*0.3}) brightness(\${1+i/100*0.2}) contrast(\${1-i/100*0.1})\` },
    { id:'chrome', he:'כרום', en:'Chrome', filter:i=>\`grayscale(\${i/100*0.4}) contrast(\${1+i/100*0.5}) brightness(\${1+i/100*0.1})\` },
    { id:'xray', he:'רנטגן', en:'X-Ray', filter:i=>\`invert(\${i/100*0.8}) grayscale(1) contrast(\${1+i/100*0.5})\` },
    { id:'posterize', he:'פוסטר', en:'Posterize', filter:i=>\`contrast(\${1+i/100*1.2}) saturate(\${1+i/100*0.8})\` },
    { id:'highcontrast', he:'ניגודיות גבוהה', en:'High Contrast', filter:i=>\`contrast(\${1+i/100*1}) saturate(\${1+i/100*0.3})\` },
    { id:'soft2', he:'רך', en:'Soft', filter:i=>\`blur(\${i/100*1}px) brightness(\${1+i/100*0.1}) contrast(\${1-i/100*0.2})\` },
    { id:'crisp', he:'חד', en:'Crisp', filter:i=>\`contrast(\${1+i/100*0.5}) saturate(\${1+i/100*0.3}) brightness(\${1+i/100*0.05})\` },
    { id:'monoBlue', he:'מונו כחול', en:'Mono Blue', filter:i=>\`grayscale(1) sepia(1) hue-rotate(\${i/100*180}deg) brightness(\${1+i/100*0.1})\` },
    { id:'monoRed', he:'מונו אדום', en:'Mono Red', filter:i=>\`grayscale(1) sepia(1) hue-rotate(\${i/100*-30}deg) saturate(\${1+i/100*0.8})\` },
    { id:'monoGreen', he:'מונו ירוק', en:'Mono Green', filter:i=>\`grayscale(1) sepia(1) hue-rotate(\${i/100*90}deg) saturate(\${1+i/100*0.8})\` },
    { id:'acid', he:'אסיד', en:'Acid', filter:i=>\`hue-rotate(\${i/100*120}deg) saturate(\${1+i/100*2}) contrast(\${1+i/100*0.4}) invert(\${i/100*0.1})\` },
    { id:'retro80', he:'רטרו 80', en:'Retro 80', filter:i=>\`sepia(\${i/100*0.4}) saturate(\${1+i/100*1}) hue-rotate(\${i/100*30}deg) contrast(\${1+i/100*0.3})\` },
];
`;

export const OVERLAYS_JS = `
window.__OVERLAY_EFFECTS=[
    { id:'sparkles', cat:'color', he:'נצנצים', en:'Sparkles', build:(c)=>buildParticles(c,{count:18,char:'✨',size:[10,18],dir:'rise',dur:[3,5]}) },
    { id:'confetti', cat:'color', he:'קונפטי', en:'Confetti', build:(c)=>buildParticles(c,{count:22,char:'▪',size:[6,10],dir:'fall',dur:[2.5,4],colorList:['#ff5a36','#3ba1ff','#ffd23f','#31d17c','#c77dff']}) },
    { id:'snow',     cat:'color', he:'שלג',    en:'Snow',     build:(c)=>buildParticles(c,{count:26,char:'●',size:[4,9],dir:'fall',dur:[4,7],color:'#fff'}) },
    { id:'rain',     cat:'color', he:'גשם',    en:'Rain',     build:(c)=>buildParticles(c,{count:24,char:'│',size:[10,16],dir:'fall',dur:[0.8,1.4],color:'rgba(180,220,255,0.7)'}) },
    { id:'hearts',   cat:'color', he:'לבבות',  en:'Hearts',   build:(c)=>buildParticles(c,{count:14,char:'❤',size:[12,20],dir:'rise',dur:[3.5,5.5],color:'#ff5a80'}) },
    { id:'bubbles',  cat:'color', he:'בועות',  en:'Bubbles',  build:(c)=>buildParticles(c,{count:16,char:'○',size:[8,16],dir:'rise',dur:[4,6],color:'rgba(255,255,255,0.6)'}) },
    { id:'lightleak',cat:'color', he:'הבהוב אור', en:'Light Leak', build:(c)=>{ c.innerHTML='<div class="fx-lightleak"></div>'; } },
    { id:'grain',    cat:'color', he:'גרעיניות פילם', en:'Film Grain', build:(c)=>{ c.innerHTML='<div class="fx-grain"></div>'; } },
    { id:'stars',    cat:'color', he:'כוכבים', en:'Stars',      build:(c)=>buildParticles(c,{count:20,char:'✦',size:[8,14],dir:'twinkle',dur:[1.2,2.5],color:'#ffd23f'}) },
    { id:'petals',   cat:'color', he:'עלי כותרת', en:'Petals',  build:(c)=>buildParticles(c,{count:16,char:'❀',size:[10,16],dir:'fall',dur:[4,6],color:'#ff9ecb'}) },
    { id:'balloons', cat:'color', he:'בלונים', en:'Balloons',   build:(c)=>buildParticles(c,{count:10,char:'🎈',size:[16,24],dir:'rise',dur:[5,8]}) },
    { id:'fireflies',cat:'color', he:'גחליליות', en:'Fireflies',build:(c)=>buildParticles(c,{count:14,char:'•',size:[6,10],dir:'rise',dur:[4,7],color:'#c8ff6a'}) },
    { id:'smoke',    cat:'color', he:'עשן',    en:'Smoke',     build:(c)=>buildParticles(c,{count:8,char:'●',size:[40,70],dir:'rise',dur:[5,8],color:'rgba(255,255,255,0.10)'}) },
    { id:'embers',   cat:'color', he:'ניצוצות אש', en:'Embers', build:(c)=>buildParticles(c,{count:20,char:'✦',size:[3,7],dir:'rise',dur:[1.5,2.5],color:'#ff8a3d'}) },
    { id:'rainbow',  cat:'color', he:'קשת בענן', en:'Rainbow', build:(c)=>{ c.innerHTML='<div class="fx-rainbow"></div>'; } },
    { id:'colorpulse',cat:'color', he:'פעימת צבע', en:'Color Pulse', build:(c)=>{ c.innerHTML='<div class="fx-colorpulse"></div>'; } },
    { id:'money',    cat:'color', he:'כסף נופל', en:'Money Rain', build:(c)=>buildParticles(c,{count:18,char:'💵',size:[16,24],dir:'fall',dur:[2.5,4]}) },
    { id:'feathers', cat:'color', he:'נוצות', en:'Feathers', build:(c)=>buildParticles(c,{count:14,char:'🪶',size:[14,22],dir:'fall',dur:[4,6]}) },
    { id:'fadeblack',cat:'transition', he:'עמעום לשחור', en:'Fade to Black', build:(c,dur)=>{ c.innerHTML=\`<div class="fx-fade-black" style="animation-duration:\${dur}s"></div>\`; } },
    { id:'flashwhite',cat:'transition', he:'הבזק לבן', en:'Flash', build:(c,dur)=>{ c.innerHTML=\`<div class="fx-flash-white" style="animation-duration:\${dur}s"></div>\`; } },
    { id:'wipeleft', cat:'transition', he:'מעבר גלילה', en:'Wipe', build:(c,dur)=>{ c.innerHTML=\`<div class="fx-wipe" style="animation-duration:\${dur}s"></div>\`; } },
    { id:'shake',    cat:'shake', target:'frame', he:'רעידה', en:'Shake' },
    { id:'jitter',   cat:'shake', target:'frame', he:'רטט', en:'Jitter' },
    { id:'punchzoom',cat:'shake', target:'frame', he:'זום פועם', en:'Punch Zoom' },
    { id:'glitch',   cat:'shake', target:'frame', he:'גליץ\\'', en:'Glitch' },
    { id:'heartbeat',cat:'shake', target:'frame', he:'פעימת לב', en:'Heartbeat' },
    { id:'zoompulse',cat:'shake', target:'frame', he:'זום פועם איטי', en:'Zoom Pulse' },
    { id:'swing',    cat:'shake', target:'frame', he:'נדנוד', en:'Swing' },
    { id:'vignette', cat:'overlay', he:'וינייט', en:'Vignette', build:(c)=>{ c.innerHTML='<div class="fx-vignette"></div>'; } },
    { id:'scanlines',cat:'overlay', he:'קווי סריקה', en:'Scanlines', build:(c)=>{ c.innerHTML='<div class="fx-scanlines"></div>'; } },
    { id:'vhs',      cat:'overlay', he:'VHS', en:'VHS', build:(c)=>{ c.innerHTML='<div class="fx-vhs"></div>'; } },
    { id:'bokeh',    cat:'overlay', he:'בוקה', en:'Bokeh', build:(c)=>{ const w=document.createElement('div'); w.className='fx-bokeh'; for(let i=0;i<10;i++){ const s=document.createElement('span'); const sz=20+Math.random()*60; s.style.width=sz+'px'; s.style.height=sz+'px'; s.style.left=(Math.random()*100)+'%'; s.style.top=(Math.random()*100)+'%'; s.style.animationDelay=(Math.random()*6)+'s'; w.appendChild(s);} c.innerHTML=''; c.appendChild(w); } },
    { id:'lensflare',cat:'overlay', he:'זוהר עדשה', en:'Lens Flare', build:(c)=>{ c.innerHTML='<div class="fx-lensflare"></div>'; } },
    { id:'spotlight', cat:'color', he:'ספוטלייט', en:'Spotlight', build:(c)=>{c.innerHTML='<div class="fx-spotlight"></div>';} },
    { id:'warmglow', cat:'color', he:'זוהר חם', en:'Warm Glow', build:(c)=>{c.innerHTML='<div class="fx-warmglow"></div>';} },
    { id:'coolglow', cat:'color', he:'זוהר קר', en:'Cool Glow', build:(c)=>{c.innerHTML='<div class="fx-coolglow"></div>';} },
    { id:'pinkhaze', cat:'color', he:'ערפל ורוד', en:'Pink Haze', build:(c)=>{c.innerHTML='<div class="fx-pinkhaze"></div>';} },
    { id:'purplehaze', cat:'color', he:'ערפל סגול', en:'Purple Haze', build:(c)=>{c.innerHTML='<div class="fx-purplehaze"></div>';} },
    { id:'tealhaze', cat:'color', he:'ערפל טורקיז', en:'Teal Haze', build:(c)=>{c.innerHTML='<div class="fx-tealhaze"></div>';} },
    { id:'goldenglow', cat:'color', he:'זוהר מוזהב', en:'Golden Glow', build:(c)=>{c.innerHTML='<div class="fx-goldenglow"></div>';} },
    { id:'neongrid', cat:'color', he:'רשת ניאון', en:'Neon Grid', build:(c)=>{c.innerHTML='<div class="fx-neongrid"></div>';} },
    { id:'gradbottom', cat:'color', he:'ברק תחתון', en:'Bottom Gradient', build:(c)=>{c.innerHTML='<div class="fx-gradbottom"></div>';} },
    { id:'topbar', cat:'color', he:'ברק עליון', en:'Top Gradient', build:(c)=>{c.innerHTML='<div class="fx-topbar"></div>';} },
    { id:'sunflare', cat:'color', he:'זוהר שמש', en:'Sun Flare', build:(c)=>{c.innerHTML='<div class="fx-sunflare"></div>';} },
    { id:'moonlight', cat:'color', he:'אור ירח', en:'Moonlight', build:(c)=>{c.innerHTML='<div class="fx-moonlight"></div>';} },
    { id:'fireglow', cat:'color', he:'זוהר אש', en:'Fire Glow', build:(c)=>{c.innerHTML='<div class="fx-fireglow"></div>';} },
    { id:'iceglow', cat:'color', he:'זוהר קרח', en:'Ice Glow', build:(c)=>{c.innerHTML='<div class="fx-iceglow"></div>';} },
    { id:'dreamblur', cat:'color', he:'חלום מטושטש', en:'Dream Blur', build:(c)=>{c.innerHTML='<div class="fx-dreamblur"></div>';} },
    { id:'rosegold', cat:'color', he:'זהב ורוד', en:'Rose Gold', build:(c)=>{c.innerHTML='<div class="fx-rosegold"></div>';} },
    { id:'butterflies', cat:'color', he:'פרפרים', en:'Butterflies', build:(c)=>buildParticles(c,{count:14,char:'🦋',size:[16,26],dir:'rise',dur:[4,6]}) },
    { id:'musicnotes', cat:'color', he:'תווים', en:'Music Notes', build:(c)=>buildParticles(c,{count:16,char:'🎵',size:[14,22],dir:'rise',dur:[3,5]}) },
    { id:'diamonds', cat:'color', he:'יהלומים', en:'Diamonds', build:(c)=>buildParticles(c,{count:14,char:'💎',size:[14,22],dir:'fall',dur:[3,5]}) },
    { id:'leaves', cat:'color', he:'עלים', en:'Leaves', build:(c)=>buildParticles(c,{count:18,char:'🍂',size:[14,22],dir:'fall',dur:[4,6]}) },
    { id:'sakura', cat:'color', he:'פרחי סאקורה', en:'Sakura', build:(c)=>buildParticles(c,{count:18,char:'🌸',size:[12,18],dir:'fall',dur:[4,7],color:'#ff9ecb'}) },
    { id:'bees', cat:'color', he:'דבורים', en:'Bees', build:(c)=>buildParticles(c,{count:12,char:'🐝',size:[14,20],dir:'rise',dur:[3,5]}) },
    { id:'soap', cat:'color', he:'בועות סבון', en:'Soap Bubbles', build:(c)=>buildParticles(c,{count:16,char:'🫧',size:[14,22],dir:'rise',dur:[4,6]}) },
    { id:'clouds', cat:'color', he:'עננים', en:'Clouds', build:(c)=>buildParticles(c,{count:8,char:'☁️',size:[26,40],dir:'fall',dur:[6,9]}) },
    { id:'lightning', cat:'color', he:'ברקים', en:'Lightning', build:(c)=>buildParticles(c,{count:10,char:'⚡',size:[16,24],dir:'twinkle',dur:[0.8,1.6]}) },
    { id:'bats', cat:'color', he:'עטלפים', en:'Bats', build:(c)=>buildParticles(c,{count:12,char:'🦇',size:[16,24],dir:'fall',dur:[3,5]}) },
    { id:'ghosts', cat:'color', he:'רוחות', en:'Ghosts', build:(c)=>buildParticles(c,{count:10,char:'👻',size:[18,26],dir:'rise',dur:[3,5]}) },
    { id:'pumpkins', cat:'color', he:'דלועים', en:'Pumpkins', build:(c)=>buildParticles(c,{count:10,char:'🎃',size:[18,26],dir:'twinkle',dur:[1.5,3]}) },
    { id:'gifts', cat:'color', he:'מתנות', en:'Gifts', build:(c)=>buildParticles(c,{count:12,char:'🎁',size:[16,24],dir:'fall',dur:[3,5]}) },
    { id:'roses', cat:'color', he:'ורדים', en:'Roses', build:(c)=>buildParticles(c,{count:14,char:'🌹',size:[14,22],dir:'fall',dur:[3,5]}) },
    { id:'clovers', cat:'color', he:'תלתנים', en:'Clovers', build:(c)=>buildParticles(c,{count:14,char:'🍀',size:[14,20],dir:'twinkle',dur:[1.2,2.5]}) },
    { id:'rockets', cat:'color', he:'טילים', en:'Rockets', build:(c)=>buildParticles(c,{count:8,char:'🚀',size:[20,28],dir:'rise',dur:[4,6]}) },
    { id:'fadewhiteslow', cat:'transition', he:'דהייה לבנה', en:'White Fade', build:(c,dur)=>{c.innerHTML='<div class="fx-fade-white-slow" style="animation-duration:'+(dur||1.5)+'s"></div>';} },
    { id:'wiperight', cat:'transition', he:'גלילה ימינה', en:'Wipe Right', build:(c,dur)=>{c.innerHTML='<div class="fx-wipe-right" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'wipeup', cat:'transition', he:'גלילה למעלה', en:'Wipe Up', build:(c,dur)=>{c.innerHTML='<div class="fx-wipe-up" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'wipedown', cat:'transition', he:'גלילה למטה', en:'Wipe Down', build:(c,dur)=>{c.innerHTML='<div class="fx-wipe-down" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'circleopen', cat:'transition', he:'מעגל נפתח', en:'Circle Open', build:(c,dur)=>{c.innerHTML='<div class="fx-circle-open" style="animation-duration:'+(dur||1.2)+'s"></div>';} },
    { id:'circleclose', cat:'transition', he:'מעגל נסגר', en:'Circle Close', build:(c,dur)=>{c.innerHTML='<div class="fx-circle-close" style="animation-duration:'+(dur||1.2)+'s"></div>';} },
    { id:'blinds', cat:'transition', he:'תריסים', en:'Blinds', build:(c,dur)=>{c.innerHTML='<div class="fx-blinds" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'dooropen', cat:'transition', he:'דלתות נפתחות', en:'Door Open', build:(c)=>{c.innerHTML='<div class="fx-door-l"></div><div class="fx-door-r"></div>';} },
    { id:'curtainup', cat:'transition', he:'וילון עולה', en:'Curtain Up', build:(c,dur)=>{c.innerHTML='<div class="fx-curtain" style="animation-duration:'+(dur||1.2)+'s"></div>';} },
    { id:'slidecover', cat:'transition', he:'כיסוי החלקה', en:'Slide Cover', build:(c,dur)=>{c.innerHTML='<div class="fx-slide-cover" style="animation-duration:'+(dur||1.1)+'s"></div>';} },
    { id:'zoomblack', cat:'transition', he:'זום שחור', en:'Zoom Black', build:(c,dur)=>{c.innerHTML='<div class="fx-zoom-black" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'rotateblack', cat:'transition', he:'סיבוב שחור', en:'Rotate Black', build:(c,dur)=>{c.innerHTML='<div class="fx-rotate-black" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'flashcolor', cat:'transition', he:'הבזק צבעוני', en:'Color Flash', build:(c,dur)=>{c.innerHTML='<div class="fx-flash-color" style="animation-duration:'+(dur||1)+'s"></div>';} },
    { id:'fadecolor', cat:'transition', he:'דהייה צבעונית', en:'Color Fade', build:(c,dur)=>{c.innerHTML='<div class="fx-fade-color" style="animation-duration:'+(dur||1.5)+'s"></div>';} },
    { id:'iris', cat:'transition', he:'איריס', en:'Iris', build:(c,dur)=>{c.innerHTML='<div class="fx-iris" style="animation-duration:'+(dur||1.3)+'s"></div>';} },
    { id:'glitchtrans', cat:'transition', he:'גליץ מעבר', en:'Glitch Transition', build:(c,dur)=>{c.innerHTML='<div class="fx-glitch-trans" style="animation-duration:'+(dur||0.8)+'s"></div>';} },
    { id:'vignettemild', cat:'overlay', he:'וינייט רך', en:'Soft Vignette', build:(c)=>{c.innerHTML='<div class="fx-vignette-soft"></div>';} },
    { id:'vignetteheavy', cat:'overlay', he:'וינייט חזק', en:'Heavy Vignette', build:(c)=>{c.innerHTML='<div class="fx-vignette-heavy"></div>';} },
    { id:'scratch', cat:'overlay', he:'שריטות פילם', en:'Film Scratches', build:(c)=>{c.innerHTML='<div class="fx-scratch"></div>';} },
    { id:'dust', cat:'overlay', he:'אבק', en:'Dust', build:(c)=>{c.innerHTML='<div class="fx-dust"></div>';} },
    { id:'chromatic', cat:'overlay', he:'אברציה כרומטית', en:'Chromatic Aberration', build:(c)=>{c.innerHTML='<div class="fx-chromatic"></div>';} },
    { id:'bloomglow', cat:'overlay', he:'בלום זוהר', en:'Bloom Glow', build:(c)=>{c.innerHTML='<div class="fx-bloom-glow"></div>';} },
    { id:'oldfilm', cat:'overlay', he:'סרט ישן', en:'Old Film', build:(c)=>{c.innerHTML='<div class="fx-oldfilm"></div>';} },
    { id:'softfocus', cat:'overlay', he:'פוקוס רך', en:'Soft Focus', build:(c)=>{c.innerHTML='<div class="fx-softfocus"></div>';} },
    { id:'doubleexp', cat:'overlay', he:'חשיפה כפולה', en:'Double Exposure', build:(c)=>{c.innerHTML='<div class="fx-doubleexp"></div>';} },
    { id:'prism', cat:'overlay', he:'פריזמה', en:'Prism', build:(c)=>{c.innerHTML='<div class="fx-prism"></div>';} },
    { id:'godrays', cat:'overlay', he:'קרני אור', en:'God Rays', build:(c)=>{c.innerHTML='<div class="fx-godrays"></div>';} },
    { id:'crt', cat:'overlay', he:'מסך CRT', en:'CRT', build:(c)=>{c.innerHTML='<div class="fx-crt"></div>';} },
    { id:'thermal', cat:'overlay', he:'תרמי', en:'Thermal', build:(c)=>{c.innerHTML='<div class="fx-thermal"></div>';} },
    { id:'nightvis', cat:'overlay', he:'ראיית לילה', en:'Night Vision', build:(c)=>{c.innerHTML='<div class="fx-nightvis"></div>';} },
    { id:'sepiaov', cat:'overlay', he:'ספיה', en:'Sepia Overlay', build:(c)=>{c.innerHTML='<div class="fx-sepia-ov"></div>';} },
    { id:'duotone', cat:'overlay', he:'דו-טון', en:'Duotone', build:(c)=>{c.innerHTML='<div class="fx-duotone"></div>';} },
    { id:'fireworks', cat:'color', he:'זיקוקים', en:'Fireworks', build:(c)=>buildParticles(c,{count:24,char:'🎆',size:[14,26],dir:'twinkle',dur:[1,2.5]}) },
    { id:'sparkleburst', cat:'color', he:'פיצוץ נצנצים', en:'Sparkle Burst', build:(c)=>buildParticles(c,{count:26,char:'✨',size:[8,18],dir:'twinkle',dur:[1,2]}) },
    { id:'starburst', cat:'color', he:'התפרצות כוכבים', en:'Star Burst', build:(c)=>buildParticles(c,{count:24,char:'⭐',size:[10,18],dir:'twinkle',dur:[1.2,2.5]}) },
    { id:'heartburst', cat:'color', he:'התפרצות לבבות', en:'Heart Burst', build:(c)=>buildParticles(c,{count:22,char:'💕',size:[12,20],dir:'twinkle',dur:[1,2]}) },
    { id:'cashfall', cat:'color', he:'כסף נופל', en:'Cash Rain', build:(c)=>buildParticles(c,{count:18,char:'💸',size:[16,24],dir:'fall',dur:[2.5,4]}) },
    { id:'fire', cat:'color', he:'אש', en:'Fire', build:(c)=>buildParticles(c,{count:20,char:'🔥',size:[16,26],dir:'rise',dur:[1.5,2.5]}) },
    { id:'skull', cat:'color', he:'גולגולות', en:'Skulls', build:(c)=>buildParticles(c,{count:14,char:'💀',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'hundred', cat:'color', he:'100', en:'100', build:(c)=>buildParticles(c,{count:16,char:'💯',size:[16,26],dir:'twinkle',dur:[1.2,2.5]}) },
    { id:'flex', cat:'color', he:'שריר', en:'Flex', build:(c)=>buildParticles(c,{count:14,char:'💪',size:[18,28],dir:'rise',dur:[3,5]}) },
    { id:'crown', cat:'color', he:'כתרים', en:'Crowns', build:(c)=>buildParticles(c,{count:14,char:'👑',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'snake', cat:'color', he:'נחשים', en:'Snakes', build:(c)=>buildParticles(c,{count:12,char:'🐍',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'dragon', cat:'color', he:'דרקונים', en:'Dragons', build:(c)=>buildParticles(c,{count:10,char:'🐲',size:[20,30],dir:'rise',dur:[4,6]}) },
    { id:'unicorn2', cat:'color', he:'חדי-קרן', en:'Unicorns', build:(c)=>buildParticles(c,{count:12,char:'🦄',size:[18,28],dir:'rise',dur:[4,6]}) },
    { id:'rainbow3', cat:'color', he:'קשת ריקוד', en:'Rainbow Dance', build:(c)=>buildParticles(c,{count:16,char:'🌈',size:[16,26],dir:'twinkle',dur:[1.5,3]}) },
    { id:'cake', cat:'color', he:'עוגות', en:'Cakes', build:(c)=>buildParticles(c,{count:12,char:'🎂',size:[18,28],dir:'fall',dur:[3,5]}) },
    { id:'party', cat:'color', he:'מסיבה', en:'Party', build:(c)=>buildParticles(c,{count:18,char:'🎉',size:[14,24],dir:'fall',dur:[2.5,4]}) },
    { id:'champagne', cat:'color', he:'שמפניה', en:'Champagne', build:(c)=>buildParticles(c,{count:14,char:'🍾',size:[18,28],dir:'rise',dur:[3,5]}) },
    { id:'pizza', cat:'color', he:'פיצות', en:'Pizza', build:(c)=>buildParticles(c,{count:12,char:'🍕',size:[18,28],dir:'fall',dur:[3,5]}) },
    { id:'donut', cat:'color', he:'דונאטים', en:'Donuts', build:(c)=>buildParticles(c,{count:14,char:'🍩',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'taco', cat:'color', he:'טאקו', en:'Tacos', build:(c)=>buildParticles(c,{count:12,char:'🌮',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'watermelon', cat:'color', he:'אבטיחים', en:'Watermelon', build:(c)=>buildParticles(c,{count:14,char:'🍉',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'avocado', cat:'color', he:'אבוקדו', en:'Avocado', build:(c)=>buildParticles(c,{count:12,char:'🥑',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'butterfly3', cat:'color', he:'פרפרים זוהר', en:'Glow Butterflies', build:(c)=>buildParticles(c,{count:16,char:'🦋',size:[16,26],dir:'rise',dur:[4,6]}) },
    { id:'dolphin', cat:'color', he:'דולפינים', en:'Dolphins', build:(c)=>buildParticles(c,{count:10,char:'🐬',size:[20,30],dir:'rise',dur:[4,6]}) },
    { id:'penguin', cat:'color', he:'פינגווינים', en:'Penguins', build:(c)=>buildParticles(c,{count:12,char:'🐧',size:[18,28],dir:'fall',dur:[3,5]}) },
    { id:'panda', cat:'color', he:'פנדות', en:'Pandas', build:(c)=>buildParticles(c,{count:12,char:'🐼',size:[18,28],dir:'twinkle',dur:[1.5,3]}) },
    { id:'fox', cat:'color', he:'שועלים', en:'Foxes', build:(c)=>buildParticles(c,{count:12,char:'🦊',size:[18,28],dir:'rise',dur:[3,5]}) },
    { id:'alien2', cat:'color', he:'חייזרים', en:'Aliens', build:(c)=>buildParticles(c,{count:12,char:'👽',size:[18,28],dir:'rise',dur:[3,5]}) },
    { id:'robot2', cat:'color', he:'רובוטים', en:'Robots', build:(c)=>buildParticles(c,{count:12,char:'🤖',size:[18,28],dir:'fall',dur:[3,5]}) },
    { id:'rocket3', cat:'color', he:'טילים זוהר', en:'Glow Rockets', build:(c)=>buildParticles(c,{count:10,char:'🚀',size:[20,30],dir:'rise',dur:[4,6]}) },
    { id:'shootingstar', cat:'color', he:'כוכבים נופלים', en:'Shooting Stars', build:(c)=>buildParticles(c,{count:14,char:'🌠',size:[14,24],dir:'twinkle',dur:[1,2]}) },
    { id:'snowflake2', cat:'color', he:'פתיתי שלג', en:'Snowflakes', build:(c)=>buildParticles(c,{count:26,char:'❄️',size:[10,18],dir:'fall',dur:[4,7],color:'#fff'}) },
    { id:'sun2', cat:'color', he:'שמשות', en:'Suns', build:(c)=>buildParticles(c,{count:12,char:'☀️',size:[18,28],dir:'twinkle',dur:[1.5,3]}) },
    { id:'moon2', cat:'color', he:'ירחים', en:'Moons', build:(c)=>buildParticles(c,{count:12,char:'🌙',size:[18,28],dir:'twinkle',dur:[1.5,3]}) },
    { id:'clover2', cat:'color', he:'תלתנים זוהר', en:'Glow Clovers', build:(c)=>buildParticles(c,{count:16,char:'🍀',size:[14,22],dir:'twinkle',dur:[1.2,2.5]}) },
    { id:'gem', cat:'color', he:'אבנים יקרות', en:'Gems', build:(c)=>buildParticles(c,{count:14,char:'💎',size:[14,24],dir:'fall',dur:[3,5]}) },
    { id:'ring', cat:'color', he:'טבעות', en:'Rings', build:(c)=>buildParticles(c,{count:12,char:'💍',size:[16,26],dir:'fall',dur:[3,5]}) },
    { id:'trophy', cat:'color', he:'גביעים', en:'Trophies', build:(c)=>buildParticles(c,{count:10,char:'🏆',size:[18,28],dir:'twinkle',dur:[1.5,3]}) },
    { id:'medal', cat:'color', he:'מדליות', en:'Medals', build:(c)=>buildParticles(c,{count:12,char:'🎖️',size:[16,26],dir:'twinkle',dur:[1.5,3]}) },
    { id:'fireworks2', cat:'color', he:'זיקוקי זוהר', en:'Glow Fireworks', build:(c)=>buildParticles(c,{count:22,char:'🎇',size:[14,26],dir:'twinkle',dur:[1,2.5]}) },
];
`;

export const FONT_OPTIONS = `                <option value="'Segoe UI', Arial, sans-serif">Segoe UI</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="'Times New Roman', serif">Times New Roman</option>
                <option value="'Courier New', monospace">Courier New</option>
                <option value="Impact, sans-serif">Impact</option>
                <option value="Verdana, sans-serif">Verdana</option>
                <option value="'Comic Sans MS', sans-serif">Comic Sans MS</option>
                <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                <option value="'Palatino Linotype', serif">Palatino</option>
                <option value="'Bebas Neue', sans-serif">Bebas Neue</option>
                <option value="'Pacifico', cursive">Pacifico</option>
                <option value="'Lobster', cursive">Lobster</option>
                <option value="'Anton', sans-serif">Anton</option>
                <option value="'Oswald', sans-serif">Oswald</option>
                <option value="'Permanent Marker', cursive">Permanent Marker</option>
                <option value="'Bungee', sans-serif">Bungee</option>
                <option value="'Caveat', cursive">Caveat</option>
                <option value="'Dancing Script', cursive">Dancing Script</option>
                <option value="'Righteous', sans-serif">Righteous</option>
                <option value="'Press Start 2P', cursive">Press Start 2P</option>
                <option value="'Montserrat', sans-serif">Montserrat</option>
                <option value="'Poppins', sans-serif">Poppins</option>
                <option value="'Roboto', sans-serif">Roboto</option>
                <option value="'Playfair Display', serif">Playfair Display</option>
                <option value="'Source Code Pro', monospace">Source Code Pro</option>
                <option value="'Abril Fatface', serif">Abril Fatface</option>
                <option value="'Comfortaa', cursive">Comfortaa</option>
                <option value="'Fredoka', sans-serif">Fredoka</option>
                <option value="'Satisfy', cursive">Satisfy</option>
                <option value="'Luckiest Guy', cursive">Luckiest Guy</option>
                <option value="'Shadows Into Light', cursive">Shadows Into Light</option>
                <option value="'Indie Flower', cursive">Indie Flower</option>
                <option value="'Architects Daughter', cursive">Architects Daughter</option>
                <option value="'Sacramento', cursive">Sacramento</option>
                <option value="'Kaushan Script', cursive">Kaushan Script</option>
                <option value="'Yellowtail', cursive">Yellowtail</option>
                <option value="'Allura', cursive">Allura</option>
                <option value="'Great Vibes', cursive">Great Vibes</option>
                <option value="'Tangerine', cursive">Tangerine</option>
                <option value="'Parisienne', cursive">Parisienne</option>
                <option value="'Cookie', cursive">Cookie</option>
                <option value="'Black Ops One', sans-serif">Black Ops One</option>
                <option value="'Russo One', sans-serif">Russo One</option>
                <option value="'Teko', sans-serif">Teko</option>
                <option value="'Passion One', sans-serif">Passion One</option>
                <option value="'Archivo Black', sans-serif">Archivo Black</option>
                <option value="'Alfa Slab One', serif">Alfa Slab One</option>
                <option value="'Creepster', cursive">Creepster</option>
                <option value="'Monoton', cursive">Monoton</option>
                <option value="'Orbitron', sans-serif">Orbitron</option>
                <option value="'Rubik Glitch', sans-serif">Rubik Glitch</option>
                <option value="'Modak', cursive">Modak</option>
                <option value="'Cormorant Garamond', serif">Cormorant Garamond</option>`;

export const EXTRA_CSS = `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&family=Lobster&family=Anton&family=Oswald:wght@400;700&family=Permanent+Marker&family=Bungee&family=Caveat:wght@400;700&family=Dancing+Script:wght@600;700&family=Righteous&family=Press+Start+2P&family=Montserrat:wght@400;700;900&family=Poppins:wght@400;700;900&family=Roboto:wght@400;700;900&family=Playfair+Display:wght@700;900&family=Source+Code+Pro:wght@400;700&family=Abril+Fatface&family=Comfortaa:wght@400;700&family=Fredoka:wght@400;700&family=Satisfy&family=Luckiest+Guy&family=Shadows+Into+Light&family=Indie+Flower&family=Architects+Daughter&family=Sacramento&family=Kaushan+Script&family=Yellowtail&family=Allura&family=Great+Vibes&family=Tangerine&family=Parisienne&family=Cookie&family=Black+Ops+One&family=Russo+One&family=Teko:wght@400;700&family=Passion+One:wght@400;700&family=Archivo+Black&family=Alfa+Slab+One&family=Creepster&family=Monoton&family=Orbitron:wght@400;700;900&family=Rubik+Glitch&family=Modak&family=Cormorant+Garamond:wght@700&display=swap');
  .text-overlay.anim-dropIn{ animation:dropIn .6s cubic-bezier(.2,1.4,.4,1); }
  @keyframes dropIn{ 0%{opacity:0; transform:translate(-50%,-180%) scale(.8);} 60%{opacity:1; transform:translate(-50%,-40%) scale(1.05);} 100%{opacity:1; transform:translate(-50%,-50%) scale(1);} }
  .text-overlay.anim-rollIn{ animation:rollIn .6s ease; }
  @keyframes rollIn{ 0%{opacity:0; transform:translate(-50%,-50%) translateX(-120%) rotate(-360deg);} 100%{opacity:1; transform:translate(-50%,-50%) translateX(0) rotate(0);} }
  .text-overlay.anim-skewIn{ animation:skewIn .5s ease; }
  @keyframes skewIn{ 0%{opacity:0; transform:translate(-50%,-50%) skewX(40deg) translateX(-60px);} 100%{opacity:1; transform:translate(-50%,-50%) skewX(0) translateX(0);} }
  .text-overlay.anim-flipX{ animation:flipX .6s ease; }
  @keyframes flipX{ 0%{opacity:0; transform:translate(-50%,-50%) rotateX(90deg);} 100%{opacity:1; transform:translate(-50%,-50%) rotateX(0);} }
  .text-overlay.anim-flipY{ animation:flipY .6s ease; }
  @keyframes flipY{ 0%{opacity:0; transform:translate(-50%,-50%) rotateY(-90deg);} 100%{opacity:1; transform:translate(-50%,-50%) rotateY(0);} }
  .text-overlay.anim-scaleUp{ animation:scaleUp .5s cubic-bezier(.2,1.4,.4,1); }
  @keyframes scaleUp{ 0%{opacity:0; transform:translate(-50%,-50%) scale(.2);} 100%{opacity:1; transform:translate(-50%,-50%) scale(1);} }
  .text-overlay.anim-zoomBlur{ animation:zoomBlur .6s ease; }
  @keyframes zoomBlur{ 0%{opacity:0; transform:translate(-50%,-50%) scale(2.4); filter:blur(12px);} 100%{opacity:1; transform:translate(-50%,-50%) scale(1); filter:blur(0);} }
  .text-overlay.anim-slideUpBig{ animation:slideUpBig .6s ease; }
  @keyframes slideUpBig{ 0%{opacity:0; transform:translate(-50%,120%);} 100%{opacity:1; transform:translate(-50%,-50%);} }
  .text-overlay.exit-dropOut{ animation:dropOut .5s ease forwards; }
  @keyframes dropOut{ from{opacity:1; transform:translate(-50%,-50%);} to{opacity:0; transform:translate(-50%,160%);} }
  .text-overlay.exit-rollOut{ animation:rollOut .5s ease forwards; }
  @keyframes rollOut{ from{opacity:1; transform:translate(-50%,-50%) translateX(0) rotate(0);} to{opacity:0; transform:translate(-50%,-50%) translateX(120%) rotate(360deg);} }
  .text-overlay.exit-skewOut{ animation:skewOut .5s ease forwards; }
  @keyframes skewOut{ from{opacity:1; transform:translate(-50%,-50%) skewX(0) translateX(0);} to{opacity:0; transform:translate(-50%,-50%) skewX(40deg) translateX(60px);} }
  .text-overlay.exit-flipXOut{ animation:flipXOut .5s ease forwards; }
  @keyframes flipXOut{ from{opacity:1; transform:translate(-50%,-50%) rotateX(0);} to{opacity:0; transform:translate(-50%,-50%) rotateX(90deg);} }
  .text-overlay.exit-flipYOut{ animation:flipYOut .5s ease forwards; }
  @keyframes flipYOut{ from{opacity:1; transform:translate(-50%,-50%) rotateY(0);} to{opacity:0; transform:translate(-50%,-50%) rotateY(-90deg);} }
  .text-overlay.exit-scaleDown{ animation:scaleDown .4s ease forwards; }
  @keyframes scaleDown{ from{opacity:1; transform:translate(-50%,-50%) scale(1);} to{opacity:0; transform:translate(-50%,-50%) scale(.1);} }
  .text-overlay.exit-zoomBlurOut{ animation:zoomBlurOut .5s ease forwards; }
  @keyframes zoomBlurOut{ from{opacity:1; transform:translate(-50%,-50%) scale(1); filter:blur(0);} to{opacity:0; transform:translate(-50%,-50%) scale(2.4); filter:blur(12px);} }
  .text-overlay.exit-slideUpOut{ animation:slideUpOut .5s ease forwards; }
  @keyframes slideUpOut{ from{opacity:1; transform:translate(-50%,-50%);} to{opacity:0; transform:translate(-50%,-180%);} }
  .text-inner.loop-tilt{ animation:tiltLoop 2.5s ease-in-out infinite; }
  @keyframes tiltLoop{ 0%,100%{ transform:rotate(-6deg);} 50%{ transform:rotate(6deg);} }
  .text-inner.loop-breathe{ animation:breatheLoop 3s ease-in-out infinite; }
  @keyframes breatheLoop{ 0%,100%{ transform:scale(1); opacity:1;} 50%{ transform:scale(1.12); opacity:.85;} }
  .text-inner.loop-wobble{ animation:wobbleLoop 1.5s ease-in-out infinite; }
  @keyframes wobbleLoop{ 0%,100%{ transform:translateX(0) rotate(0);} 25%{ transform:translateX(-6px) rotate(-3deg);} 75%{ transform:translateX(6px) rotate(3deg);} }
  .text-inner.loop-blink{ animation:blinkLoop 1s steps(2) infinite; }
  @keyframes blinkLoop{ 0%,49%{ opacity:1;} 50%,100%{ opacity:0;} }
  .text-inner.loop-colorShift{ animation:colorShiftLoop 4s linear infinite; }
  @keyframes colorShiftLoop{ 0%{ filter:hue-rotate(0deg);} 100%{ filter:hue-rotate(360deg);} }
  .text-inner.loop-rotateLoop{ animation:rotateLoop 3s linear infinite; }
  @keyframes rotateLoop{ from{ transform:rotate(0);} to{ transform:rotate(360deg);} }
  .text-inner.loop-pulse2{ animation:pulse2Loop 1s ease-in-out infinite; }
  @keyframes pulse2Loop{ 0%,100%{ transform:scale(1);} 50%{ transform:scale(1.15);} }
  .text-inner.loop-glow2{ animation:glow2Loop 1.8s ease-in-out infinite; }
  @keyframes glow2Loop{ 0%,100%{ text-shadow:0 0 4px currentColor;} 50%{ text-shadow:0 0 18px currentColor, 0 0 30px currentColor;} }`;

export const FX_OVERLAY_CSS = `
  .fx-spotlight{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.22), transparent 45%);}
  .fx-warmglow{position:absolute;inset:0;background:radial-gradient(circle at 70% 30%, rgba(255,180,80,0.35), transparent 60%);mix-blend-mode:screen;}
  .fx-coolglow{position:absolute;inset:0;background:radial-gradient(circle at 30% 70%, rgba(80,180,255,0.35), transparent 60%);mix-blend-mode:screen;}
  .fx-pinkhaze{position:absolute;inset:0;background:linear-gradient(180deg, rgba(255,105,180,0.28), transparent 70%);mix-blend-mode:screen;}
  .fx-purplehaze{position:absolute;inset:0;background:linear-gradient(180deg, rgba(150,80,255,0.28), transparent 70%);mix-blend-mode:screen;}
  .fx-tealhaze{position:absolute;inset:0;background:linear-gradient(180deg, rgba(80,220,200,0.28), transparent 70%);mix-blend-mode:screen;}
  .fx-goldenglow{position:absolute;inset:0;background:radial-gradient(circle at 50% 100%, rgba(255,200,80,0.32), transparent 60%);mix-blend-mode:screen;}
  .fx-neongrid{position:absolute;inset:0;background:repeating-linear-gradient(90deg, rgba(0,255,200,0.12) 0 1px, transparent 1px 38px), repeating-linear-gradient(0deg, rgba(0,255,200,0.12) 0 1px, transparent 1px 38px);mix-blend-mode:screen;}
  .fx-gradbottom{position:absolute;inset:0;background:linear-gradient(0deg, rgba(255,90,54,0.35), transparent 42%);mix-blend-mode:screen;}
  .fx-topbar{position:absolute;inset:0;background:linear-gradient(180deg, rgba(59,161,255,0.35), transparent 42%);mix-blend-mode:screen;}
  .fx-sunflare{position:absolute;top:-12%;left:50%;transform:translateX(-50%);width:130%;height:60%;background:radial-gradient(ellipse at 50% 0%, rgba(255,240,180,0.5), transparent 60%);mix-blend-mode:screen;}
  .fx-moonlight{position:absolute;inset:0;background:radial-gradient(circle at 80% 20%, rgba(200,220,255,0.3), transparent 50%);mix-blend-mode:screen;}
  .fx-fireglow{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%, rgba(255,120,30,0.4), transparent 55%);mix-blend-mode:screen;animation:fxFlicker 0.3s steps(2) infinite;}
  @keyframes fxFlicker{0%,100%{opacity:0.7;}50%{opacity:1;}}
  .fx-iceglow{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%, rgba(150,220,255,0.25), transparent 60%);mix-blend-mode:screen;}
  .fx-dreamblur{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 70%);mix-blend-mode:overlay;}
  .fx-rosegold{position:absolute;inset:0;background:linear-gradient(135deg, rgba(255,150,130,0.3), rgba(255,200,170,0.2));mix-blend-mode:screen;}
  .fx-fade-white-slow{position:absolute;inset:0;background:#fff;opacity:0;animation:fxFadeInOut 1.5s linear forwards;}
  .fx-wipe-right{position:absolute;inset:0;background:#000;animation:fxWipeRight 1s linear forwards;}
  @keyframes fxWipeRight{0%{clip-path:inset(0 100% 0 0);}100%{clip-path:inset(0 0 0 0);}}
  .fx-wipe-up{position:absolute;inset:0;background:#000;animation:fxWipeUp 1s linear forwards;}
  @keyframes fxWipeUp{0%{clip-path:inset(100% 0 0 0);}100%{clip-path:inset(0 0 0 0);}}
  .fx-wipe-down{position:absolute;inset:0;background:#000;animation:fxWipeDown 1s linear forwards;}
  @keyframes fxWipeDown{0%{clip-path:inset(0 0 100% 0);}100%{clip-path:inset(0 0 0 0);}}
  .fx-circle-open{position:absolute;inset:0;background:#000;animation:fxCircleOpen 1.2s ease-in forwards;}
  @keyframes fxCircleOpen{0%{clip-path:circle(0% at 50% 50%);}100%{clip-path:circle(80% at 50% 50%);}}
  .fx-circle-close{position:absolute;inset:0;background:#000;animation:fxCircleClose 1.2s ease-in forwards;}
  @keyframes fxCircleClose{0%{clip-path:circle(80% at 50% 50%);}100%{clip-path:circle(0% at 50% 50%);}}
  .fx-blinds{position:absolute;inset:0;background:repeating-linear-gradient(90deg,#000 0 8%, transparent 8% 16%);animation:fxBlindsShow 1s ease forwards;}
  @keyframes fxBlindsShow{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}
  .fx-door-l,.fx-door-r{position:absolute;top:0;bottom:0;width:50%;background:#000;}
  .fx-door-l{left:0;animation:fxDoorL 1s ease forwards;}
  .fx-door-r{right:0;animation:fxDoorR 1s ease forwards;}
  @keyframes fxDoorL{0%{transform:translateX(0);}50%{transform:translateX(-100%);}100%{transform:translateX(-100%);}}
  @keyframes fxDoorR{0%{transform:translateX(0);}50%{transform:translateX(100%);}100%{transform:translateX(100%);}}
  .fx-curtain{position:absolute;inset:0;background:#000;transform-origin:top;animation:fxCurtainUp 1.2s ease forwards;}
  @keyframes fxCurtainUp{0%{transform:scaleY(1);}50%{transform:scaleY(1);}100%{transform:scaleY(0);}}
  .fx-slide-cover{position:absolute;inset:0;background:#000;animation:fxSlideCover 1.1s ease forwards;}
  @keyframes fxSlideCover{0%{transform:translateX(-100%);}50%{transform:translateX(0);}100%{transform:translateX(100%);}}
  .fx-zoom-black{position:absolute;inset:0;background:#000;animation:fxZoomBlack 1s ease forwards;}
  @keyframes fxZoomBlack{0%{transform:scale(0);opacity:0;}50%{transform:scale(1);opacity:1;}100%{transform:scale(2);opacity:0;}}
  .fx-rotate-black{position:absolute;inset:0;background:#000;animation:fxRotateBlack 1s ease forwards;}
  @keyframes fxRotateBlack{0%{transform:rotate(0) scale(0.5);opacity:0;}50%{transform:rotate(180deg) scale(1);opacity:1;}100%{transform:rotate(360deg) scale(1.5);opacity:0;}}
  .fx-flash-color{position:absolute;inset:0;background:#3ba1ff;opacity:0;animation:fxFlash 1s ease forwards;}
  .fx-fade-color{position:absolute;inset:0;background:#ff5a36;opacity:0;animation:fxFadeInOut 1.5s linear forwards;}
  .fx-iris{position:absolute;inset:0;background:#000;animation:fxIris 1.3s ease forwards;}
  @keyframes fxIris{0%{clip-path:circle(80% at 50% 50%);}49%{clip-path:circle(0% at 50% 50%);}50%{clip-path:circle(0% at 50% 50%);}100%{clip-path:circle(80% at 50% 50%);}}
  .fx-glitch-trans{position:absolute;inset:0;background:#000;animation:fxGlitchTrans 0.8s steps(4) forwards;}
  @keyframes fxGlitchTrans{0%{clip-path:inset(0 0 0 0);transform:translateX(0);}25%{clip-path:inset(20% 0 40% 0);transform:translateX(-8px);}50%{clip-path:inset(60% 0 10% 0);transform:translateX(8px);}75%{clip-path:inset(10% 0 70% 0);transform:translateX(-4px);}100%{clip-path:inset(0 0 0 0);transform:translateX(0);opacity:0;}}
  .fx-vignette-soft{position:absolute;inset:0;background:radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.45) 100%);}
  .fx-vignette-heavy{position:absolute;inset:0;background:radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.85) 100%);}
  .fx-scratch{position:absolute;inset:0;background:repeating-linear-gradient(75deg, transparent 0 40px, rgba(255,255,255,0.15) 40px 41px, transparent 41px 120px);mix-blend-mode:overlay;animation:fxScratch 0.4s steps(3) infinite;}
  @keyframes fxScratch{0%{transform:translateY(0);}100%{transform:translateY(-20px);}}
  .fx-dust{position:absolute;inset:0;background:radial-gradient(circle at 30% 40%, rgba(255,255,255,0.18) 0 1px, transparent 2px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.12) 0 1px, transparent 2px), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.15) 0 1px, transparent 2px);mix-blend-mode:screen;}
  .fx-chromatic{position:absolute;inset:0;background:linear-gradient(90deg, rgba(255,0,0,0.08), transparent 5px), linear-gradient(270deg, rgba(0,255,255,0.08), transparent 5px);mix-blend-mode:screen;animation:fxChromatic 2s ease-in-out infinite;}
  @keyframes fxChromatic{0%,100%{transform:translateX(0);}50%{transform:translateX(3px);}}
  .fx-bloom-glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 55%);mix-blend-mode:screen;}
  .fx-oldfilm{position:absolute;inset:0;background:repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0 2px, transparent 2px 4px);mix-blend-mode:multiply;}
  .fx-softfocus{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 60%);mix-blend-mode:overlay;}
  .fx-doubleexp{position:absolute;inset:0;background:linear-gradient(135deg, rgba(255,200,150,0.2), rgba(150,200,255,0.2));mix-blend-mode:screen;}
  .fx-prism{position:absolute;inset:0;background:linear-gradient(45deg, rgba(255,0,0,0.12), rgba(255,255,0,0.12), rgba(0,255,0,0.12), rgba(0,255,255,0.12), rgba(255,0,255,0.12));mix-blend-mode:screen;animation:fxPrism 4s linear infinite;}
  @keyframes fxPrism{0%{filter:hue-rotate(0deg);}100%{filter:hue-rotate(360deg);}}
  .fx-godrays{position:absolute;inset:0;background:conic-gradient(from 200deg at 50% 0%, transparent 0deg, rgba(255,240,200,0.18) 8deg, transparent 16deg, rgba(255,240,200,0.12) 24deg, transparent 40deg, rgba(255,240,200,0.15) 50deg, transparent 70deg);mix-blend-mode:screen;}
  .fx-crt{position:absolute;inset:0;background:repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0 1px, transparent 2px 3px);mix-blend-mode:multiply;animation:fxCrt 0.1s steps(2) infinite;}
  @keyframes fxCrt{0%{opacity:0.6;}100%{opacity:0.8;}}
  .fx-thermal{position:absolute;inset:0;background:linear-gradient(0deg, rgba(0,0,255,0.2), rgba(255,0,0,0.2));mix-blend-mode:color;}
  .fx-nightvis{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%, rgba(0,255,0,0.25), transparent 70%);mix-blend-mode:screen;}
  .fx-sepia-ov{position:absolute;inset:0;background:rgba(255,220,150,0.18);mix-blend-mode:multiply;}
  .fx-duotone{position:absolute;inset:0;background:linear-gradient(135deg, rgba(59,161,255,0.25), rgba(255,90,54,0.25));mix-blend-mode:color;}
  .color-input{ -webkit-appearance:none; appearance:none; width:100%; height:34px; background:var(--panel); border:1px solid var(--line); border-radius:6px; cursor:pointer; padding:3px; }
  .color-input::-webkit-swatch-wrapper{ padding:0; }
  .color-input::-webkit-swatch{ border:1px solid var(--line); border-radius:4px; height:26px; }
  .color-input::-moz-color-swatch{ border:1px solid var(--line); border-radius:4px; }
  .tool-box{ display:flex; gap:4px; padding:3px; background:var(--panel-2); border:1px solid var(--line); border-radius:8px; }
  .icon-btn.tool{ width:30px; height:30px; border-radius:6px; border-color:transparent; color:var(--text-dim); }
  .icon-btn.tool:hover{ color:var(--text); background:var(--panel-3); }
  .icon-btn.tool.active{ border-color:var(--accent); color:var(--accent); background:rgba(255,90,54,0.12); }
  #saveProjBtn.primary{ box-shadow:0 2px 10px rgba(255,90,54,0.35); }
  #saveProjBtn.primary:hover{ filter:brightness(1.08); }
  .clip-del svg{ width:11px; height:11px; }
  .clip-del{ width:18px; height:18px; }
  .editor-toast{ position:fixed; top:14px; left:50%; transform:translateX(-50%) translateY(-18px); background:var(--panel-2); border:1px solid var(--accent); color:var(--text); padding:9px 16px; border-radius:8px; font-size:12.5px; z-index:99999; opacity:0; pointer-events:none; transition:.25s; box-shadow:0 8px 24px rgba(0,0,0,0.5); }
  .editor-toast.show{ opacity:1; transform:translateX(-50%) translateY(0); }
  .confirm-box{ border-radius:14px; }
  .confirm-yes{ border-radius:9px; }`;