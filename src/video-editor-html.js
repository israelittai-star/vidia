import { EFFECTS_JS, OVERLAYS_JS, FONT_OPTIONS, EXTRA_CSS, FX_OVERLAY_CSS } from '@/video-editor-data.js';
import { EDITOR_CSS, INSPECTOR_CSS } from '@/video-editor-css.js';
import { MEDIA_INSPECTOR_JS } from '@/components/editor/media-inspector.js';
import { KEYBOARD_SHORTCUTS_JS } from '@/components/editor/keyboard-shortcuts.js';
import { EFFECT_EXPANSION_JS } from '@/components/editor/effect-expansion.js';
import { EFFECT_TRENDS_JS } from '@/components/editor/effect-trends.js';
import { TIMELINE_EFFECTS_JS } from '@/components/editor/timeline-effects.js';
import { EDITOR_TIMELINE_JS } from '@/components/editor/editor-timeline.js';
import { PROJECT_PERSISTENCE_JS } from '@/components/editor/project-persistence.js';
const html = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="UTF-8">
<title>עורך וידיאו</title>
<style>
${EDITOR_CSS}
${INSPECTOR_CSS}
${FX_OVERLAY_CSS}

</style>
<style>
${EXTRA_CSS}
</style>
</head>
<body>
<div class="app">
  <div class="topbar">
    <button class="icon-btn brand" id="settingsBtn" title="הגדרות">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" stroke-width="1.6"/>
        <path d="M19.4 13.5c.04-.33.06-.66.06-1s-.02-.67-.06-1l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.5 7.5 0 00-1.73-1l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54c-.63.25-1.22.59-1.73 1l-2.39-.96a.5.5 0 00-.6.22L2.65 9.28a.5.5 0 00.12.64L4.8 11.5c-.04.33-.06.66-.06 1s.02.67.06 1l-2.03 1.58a.5.5 0 00-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.51.41 1.1.75 1.73 1l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.63-.25 1.22-.59 1.73-1l2.39.96c.21.09.47 0 .6-.22l1.92-3.32a.5.5 0 00-.12-.64L19.4 13.5z" stroke="currentColor" stroke-width="1.3"/>
      </svg>
    </button>
    <div class="popover left" id="settingsPopover">
      <div class="popover-title"><span data-i18n="settingsTitle">הגדרות</span></div>
      <div class="settings-row">
        <label class="sp-label" data-i18n="fpsLabel">קצב פריימים (FPS)</label>
        <div class="seg-group" id="fpsGroup">
          <button class="seg-btn active" data-fps="30">30</button>
          <button class="seg-btn" data-fps="60">60</button>
        </div>
        <div class="settings-hint" data-i18n="fpsHint">משפיע על ייצוא הסרטון בעתיד</div>
      </div>
      <div class="settings-row">
        <label class="sp-label" data-i18n="qualityLabel">איכות גרפית (רזולוציה)</label>
        <div class="seg-group" id="qualityGroup">
          <button class="seg-btn" data-quality="720p">720p</button>
          <button class="seg-btn active" data-quality="1080p">1080p</button>
          <button class="seg-btn" data-quality="2k">2K</button>
          <button class="seg-btn" data-quality="4k">4K</button>
        </div>
        <div class="seg-group" id="quality1080Sub" style="display:none; margin-top:6px;">
          <button class="seg-btn" data-quality="1080p" data-i18n="q1080Reg">1080p רגיל</button>
          <button class="seg-btn" data-quality="ultra1080p" data-i18n="q1080Ultra">1080p אולטרה</button>
        </div>
        <div class="settings-hint" data-i18n="fpsHint">משפיע על ייצוא הסרטון בעתיד</div>
      </div>
      <div class="settings-row">
        <label class="sp-label" data-i18n="languageLabel">שפה</label>
        <div class="seg-group" id="langGroup">
          <button class="seg-btn active" data-lang="he">עברית</button>
          <button class="seg-btn" data-lang="en">English</button>
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <input class="project-name" id="projectName" value="פרויקט ללא שם" maxlength="60">
    <div class="divider"></div>

    <button class="btn primary" id="addVideoBtn"><span data-i18n="addVideo">+ הוסף סרטון</span></button>
    <input type="file" id="fileInput" accept="video/*" multiple>

    <button class="btn" id="addTextBtn"><span data-i18n="addText">+ הוסף טקסט</span></button>

    <button class="btn" id="stickerBtn"><span data-i18n="stickers">+ סטיקר</span></button>
    <div class="popover wide" id="stickerPopover" style="right:0;">
      <div class="popover-title"><span data-i18n="stickers">סטיקרים</span></div>
      <div class="sticker-grid" id="stickerGrid"></div>
    </div>

    <button class="btn" id="fxBtn" title="הגדרות לסרטון"><span data-i18n="clipSettings">⚙ הגדרות לסרטון</span></button>

    <div style="position:relative;">
      <button class="btn" id="wandBtn" title="אפקטים">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 20L15 9M15 9l1.5-1.5M15 9L13.5 7.5M19 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM6 3l.7 1.3L8 5l-1.3.7L6 7l-.7-1.3L4 5l1.3-.7L6 3z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span data-i18n="timelineEffects">אפקטים</span>
      </button>
      <div class="popover wide" id="wandPopover">
        <div class="popover-title"><span data-i18n="timelineEffects">אפקטים</span></div>
        <div class="seg-group" id="wandCatTabs" style="margin-bottom:10px;">
          <button class="seg-btn active" data-cat="color" data-i18n="catColor">צבע וזוהר</button>
          <button class="seg-btn" data-cat="transition" data-i18n="catTransition">מעברים</button>
          <button class="seg-btn" data-cat="shake" data-i18n="catShake">רעידות</button>
          <button class="seg-btn" data-cat="overlay" data-i18n="catOverlay">שכבות</button>
        </div>
        <div class="fx-grid" id="wandGrid"></div>
      </div>
    </div>

    <button class="btn primary" id="saveProjBtn" title="יצוא">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
      <span data-i18n="export">יצוא</span>
    </button>
    <button class="btn" id="loadProjBtn" title="טען פרויקט"><span data-i18n="load">📂 טען</span></button>
    <input type="file" id="loadProjInput" accept="application/json" style="display:none;">
    <div class="spacer"></div>

    <div style="position:relative;">
      <button class="icon-btn brand" id="cropIconBtn" title="חיתוך מדיה" style="display:none;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="13" height="10" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="19" cy="18" r="3.2" stroke="currentColor" stroke-width="1.5"/>
          <path d="M19 14.3v1M19 20.7v1M22.7 18h-1M16.3 18h-1M21.2 15.8l-.7.7M17.5 19.5l-.7.7M21.2 20.2l-.7-.7M17.5 16.5l-.7-.7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="popover" id="cropPopover">
        <div class="popover-title"><span data-i18n="cropTitle">חיתוך מדיה</span></div>
        <div class="preset-list" id="cropPresetList">
          <button class="preset-item" data-crop="full"><span data-i18n="cropFull">ללא חיתוך</span></button>
          <button class="preset-item" data-crop="square"><span data-i18n="cropSquare">ריבוע 1:1</span></button>
          <button class="preset-item" data-crop="portrait"><span data-i18n="cropPortrait">לאורך 9:16</span></button>
          <button class="preset-item" data-crop="landscape"><span data-i18n="cropLandscape">לרוחב 16:9</span></button>
        </div>
        <button class="apply-btn" id="cropCustomBtn" data-i18n="cropCustom">התאמה אישית (גרירה)</button>
      </div>
    </div>

    <div style="position:relative;">
      <button class="icon-btn brand" id="ratioIconBtn" title="גודל תצוגה">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="14" height="11" rx="1.5" stroke="currentColor" stroke-width="1.6"/>
          <path d="M14.5 13.5L20 8l1.6 1.6-5.5 5.5-2.4.7.3-2.3z" fill="currentColor"/>
        </svg>
      </button>
      <div class="popover right" id="ratioPopover">
        <div class="popover-title"><span data-i18n="ratioTitle">יחס תצוגה</span></div>
        <div class="preset-list" id="presetList">
          <button class="preset-item active" data-ratio="orig"><span class="preset-swatch" style="width:15px;height:11px;"></span><span data-i18n="original">מקורי</span></button>
          <button class="preset-item" data-ratio="16-9"><span class="preset-swatch" style="width:16px;height:9px;"></span><span data-i18n="wide">רחב (16:9)</span></button>
          <button class="preset-item" data-ratio="9-16"><span class="preset-swatch" style="width:9px;height:16px;"></span><span data-i18n="story">סטורי / ריל (9:16)</span></button>
          <button class="preset-item" data-ratio="1-1"><span class="preset-swatch" style="width:13px;height:13px;"></span><span data-i18n="square">ריבוע (1:1)</span></button>
          <button class="preset-item" data-ratio="4-5"><span class="preset-swatch" style="width:11px;height:13.75px;"></span><span data-i18n="post">פוסט (4:5)</span></button>
        </div>
        <div class="custom-box">
          <div class="popover-title" style="margin-bottom:6px;"><span data-i18n="customSize">מידות מותאמות אישית</span></div>
          <div class="custom-row">
            <input type="number" id="customW" data-i18n-placeholder="width" placeholder="רוחב" min="10">
            <span>×</span>
            <input type="number" id="customH" data-i18n-placeholder="height" placeholder="גובה" min="10">
          </div>
          <button class="apply-btn" id="applyCustom" data-i18n="applyCustom">החל מידות מותאמות</button>
        </div>
      </div>
    </div>
  </div>

  <div class="stage-row">
    <div class="stage" id="stage">
      <div class="frame" id="frame">
        <div class="empty-state" id="emptyState">
          <div class="big" data-i18n="emptyBig">אין סרטון טעון</div>
          <div data-i18n="emptyHint">גרור סרטון לכאן או לחץ על "הוסף סרטון" למעלה כדי להתחיל</div>
        </div>
        <div id="videosLayer"></div>
        <div id="fxOverlayLayer"></div>
        <div class="crop-layer" id="cropLayer">
          <div class="crop-rect" id="cropRect">
            <div class="crop-handle nw" data-corner="nw"></div>
            <div class="crop-handle ne" data-corner="ne"></div>
            <div class="crop-handle sw" data-corner="sw"></div>
            <div class="crop-handle se" data-corner="se"></div>
          </div>
          <div class="crop-toolbar">
            <button id="cropDoneBtn" data-i18n="cropDone">✓ סיום חיתוך</button>
            <button id="cropResetBtn" data-i18n="cropReset">איפוס</button>
          </div>
          <div class="crop-hint" data-i18n="cropHint">גרור את המסגרת כדי לחתוך את הווידיאו</div>
        </div>
        <div id="textsLayer"></div>
        <div class="play-overlay" id="playOverlay" style="display:none">
          <button class="play-btn" id="playBtn">▶</button>
          <div class="time-display" id="timeDisplay">00:00 / 00:00</div>
        </div>
      </div>
    </div>

    <div class="style-panel" id="stylePanel">
      <div class="style-panel-inner">
        <div class="sp-title">
          <span data-i18n="textStyleTitle">עיצוב טקסט</span>
          <button class="sp-close" id="spClose">✕</button>
        </div>

        <div class="sp-group">
          <label class="sp-label" data-i18n="content">תוכן</label>
          <textarea class="sp-textarea" id="txtContent"></textarea>
        </div>

        <div class="sp-group">
          <label class="sp-label" data-i18n="textColor">צבע טקסט</label>
          <div class="color-swatches" id="colorSwatches"></div>
          <input type="color" class="color-input" id="txtColor" value="#ffffff">
        </div>

        <div class="sp-group">
          <div class="sp-row">
            <div>
              <label class="sp-label" data-i18n="font">גופן</label>
              <select class="sp-select" id="txtFont">
${FONT_OPTIONS}
              </select>
            </div>
            <div>
              <label class="sp-label"><span data-i18n="size">גודל:</span> <span class="range-val" id="fontSizeVal">32</span></label>
              <input type="range" class="sp-range" id="txtSize" min="12" max="160" value="32">
            </div>
          </div>
        </div>

        <div class="sp-group">
          <label class="sp-label" data-i18n="style">סגנון</label>
          <div class="toggle-group">
            <button class="toggle-btn" id="toggleBold" data-i18n="bold">B עבה</button>
            <button class="toggle-btn" id="toggleItalic" data-i18n="italic">I נטוי</button>
          </div>
        </div>

        <div class="sp-group">
          <label class="sp-label" data-i18n="align">יישור</label>
          <div class="toggle-group">
            <button class="toggle-btn active" data-align="center" data-i18n="center">מרכז</button>
            <button class="toggle-btn" data-align="right" data-i18n="right">ימין</button>
            <button class="toggle-btn" data-align="left" data-i18n="left">שמאל</button>
          </div>
        </div>

        <div class="sp-group">
          <div class="sp-check-row">
            <label data-i18n="shadow">צל</label>
            <label class="switch"><input type="checkbox" id="chkShadow"><span class="slider-toggle"></span></label>
          </div>
          <div class="sp-check-row">
            <label data-i18n="outline">קו מתאר (Outline)</label>
            <label class="switch"><input type="checkbox" id="chkOutline"><span class="slider-toggle"></span></label>
          </div>
          <input type="color" class="color-input" id="outlineColor" value="#000000" style="margin-bottom:10px;">
          <div class="sp-check-row">
            <label data-i18n="glow">זוהר (Glow)</label>
            <label class="switch"><input type="checkbox" id="chkGlow"><span class="slider-toggle"></span></label>
          </div>
          <input type="color" class="color-input" id="glowColor" value="#3ba1ff" style="margin-bottom:8px;">
          <input type="range" class="sp-range" id="glowIntensity" min="0" max="100" value="60" style="margin-bottom:10px;">
          <div class="sp-check-row">
            <label data-i18n="bgBehindText">רקע מאחורי הטקסט</label>
            <label class="switch"><input type="checkbox" id="chkBg"><span class="slider-toggle"></span></label>
          </div>
          <input type="color" class="color-input" id="bgColor" value="#000000" style="margin-bottom:8px;">
          <label class="sp-label"><span data-i18n="cornerRadius">עיגול פינות רקע</span></label>
          <input type="range" class="sp-range" id="bgRadius" min="0" max="50" value="6">
        </div>

        <div class="sp-group">
          <label class="sp-label"><span data-i18n="letterSpacing">ריווח אותיות</span>: <span class="range-val" id="letterSpacingVal">0px</span></label>
          <input type="range" class="sp-range" id="txtLetterSpacing" min="0" max="20" value="0">
        </div>

        <div class="sp-group">
          <label class="sp-label"><span data-i18n="opacity">שקיפות:</span> <span class="range-val" id="opacityVal">100%</span></label>
          <input type="range" class="sp-range" id="txtOpacity" min="10" max="100" value="100">
        </div>

        <div class="sp-group" style="border:1px solid rgba(255,90,54,0.3); border-radius:8px; padding:12px;">
          <label class="sp-label" style="color:var(--accent); font-weight:600; margin-bottom:10px;">אנימציית טקסט</label>

          <label class="sp-label" data-i18n="entryEffect">אפקט כניסה</label>
          <select class="sp-select" id="txtAnim" style="margin-bottom:12px;">
            <option value="none" data-i18n="none">ללא</option>
            <option value="fade" data-i18n="fadeIn">דהייה פנימה</option>
            <option value="slide" data-i18n="slideUp">החלקה מלמטה</option>
            <option value="slideLeft" data-i18n="slideLeft">החלקה מימין</option>
            <option value="slideRight" data-i18n="slideRight">החלקה משמאל</option>
            <option value="pop" data-i18n="popIn">קפיצה (Pop)</option>
            <option value="bounce" data-i18n="bounce">קפיצה גמישה</option>
            <option value="rotate" data-i18n="rotate">סיבוב פנימה</option>
            <option value="zoomIn" data-i18n="zoomIn">זום פנימה</option>
            <option value="blurIn" data-i18n="blurIn">טשטוש פנימה</option>
            <option value="flipIn" data-i18n="flipIn">היפוך פנימה</option>
            <option value="elastic" data-i18n="elastic">אלסטי</option>
            <option value="typewriter" data-i18n="typewriter">מכונת כתיבה</option>
            <option value="dropIn" data-i18n="dropIn">נפילה</option>
            <option value="rollIn" data-i18n="rollIn">גלגול</option>
            <option value="skewIn" data-i18n="skewIn">הטיה</option>
            <option value="flipX" data-i18n="flipX">היפוך X</option>
            <option value="flipY" data-i18n="flipY">היפוך Y</option>
            <option value="scaleUp" data-i18n="scaleUp">גדילה</option>
            <option value="zoomBlur" data-i18n="zoomBlur">זום מטושטש</option>
            <option value="slideUpBig" data-i18n="slideUpBig">עלייה גדולה</option>
          </select>

          <label class="sp-label" data-i18n="exitEffect">אפקט יציאה</label>
          <select class="sp-select" id="txtExitAnim" style="margin-bottom:12px;">
            <option value="none" data-i18n="none">ללא</option>
            <option value="fadeOut" data-i18n="fadeOutOpt">דהייה החוצה</option>
            <option value="slideDown" data-i18n="slideDownOpt">החלקה למטה</option>
            <option value="slideLeftOut" data-i18n="slideLeftOut">החלקה שמאלה</option>
            <option value="slideRightOut" data-i18n="slideRightOut">החלקה ימינה</option>
            <option value="popOut" data-i18n="popOutOpt">כיווץ (Pop Out)</option>
            <option value="zoomOut" data-i18n="zoomOutOpt">התרחקות (Zoom Out)</option>
            <option value="blurOut" data-i18n="blurOut">טשטוש החוצה</option>
            <option value="flipOut" data-i18n="flipOut">היפוך החוצה</option>
            <option value="shrinkOut" data-i18n="shrinkOut">כיווץ קטן</option>
            <option value="spinOut" data-i18n="spinOut">סיבוב החוצה</option>
            <option value="dropOut" data-i18n="dropOut">נפילה החוצה</option>
            <option value="rollOut" data-i18n="rollOut">גלגול החוצה</option>
            <option value="skewOut" data-i18n="skewOut">הטיה החוצה</option>
            <option value="flipXOut" data-i18n="flipXOut">היפוך X החוצה</option>
            <option value="flipYOut" data-i18n="flipYOut">היפוך Y החוצה</option>
            <option value="scaleDown" data-i18n="scaleDown">כיווץ</option>
            <option value="zoomBlurOut" data-i18n="zoomBlurOut">זום מטושטש החוצה</option>
            <option value="slideUpOut" data-i18n="slideUpOut">עלייה החוצה</option>
          </select>

          <label class="sp-label" data-i18n="loopEffect">אפקט לופ (חוזר כל עוד הטקסט מוצג)</label>
          <select class="sp-select" id="txtLoop">
            <option value="none" data-i18n="none">ללא</option>
            <option value="pulse" data-i18n="pulseOpt">פעימה (Pulse)</option>
            <option value="wiggle" data-i18n="wiggleOpt">נענוע (Wiggle)</option>
            <option value="float" data-i18n="floatOpt">ריחוף (Float)</option>
            <option value="glow" data-i18n="glowOpt">זוהר פועם</option>
            <option value="shake" data-i18n="shakeLoop">רעד</option>
            <option value="swing" data-i18n="swingLoop">נדנוד</option>
            <option value="jello" data-i18n="jelloLoop">ג'לו</option>
            <option value="heartbeat" data-i18n="heartbeatLoop">פעימת לב</option>
            <option value="rainbow" data-i18n="rainbowLoop">קשת צבעים</option>
            <option value="bounce2" data-i18n="bounceLoop">קפיצה</option>
            <option value="typewriter" data-i18n="typewriterLoop">מכונת כתיבה</option>
            <option value="tilt" data-i18n="tilt">נטייה</option>
            <option value="breathe" data-i18n="breathe">נשימה</option>
            <option value="wobble" data-i18n="wobble">התנדנדות</option>
            <option value="blink" data-i18n="blink">מצמוץ</option>
            <option value="colorShift" data-i18n="colorShift">שינוי צבע</option>
            <option value="rotateLoop" data-i18n="rotateLoop">סיבוב מתמשך</option>
            <option value="pulse2" data-i18n="pulse2">פעימה מהירה</option>
            <option value="glow2" data-i18n="glow2">זוהר פועם</option>
          </select>
        </div>

        <div class="sp-group">
          <label class="sp-label" data-i18n="keyframesLabel">Keyframes (מיקום/גודל/שקיפות משתנים בזמן)</label>
          <div class="kf-row">
            <button class="kf-btn" id="addKeyframeBtn" title="הוסף keyframe">◆</button>
            <span class="settings-hint" data-i18n="kfHint">לוחצים ברגע מסוים בציר הזמן, מזיזים/משנים את הטקסט, ואז לוחצים כאן כדי לשמור מצב</span>
          </div>
          <div class="kf-list" id="kfList"></div>
        </div>

        <button class="btn" id="deleteTextBtn" style="width:100%; justify-content:center; color:#ff8a70; border-color:#5a2c22;" data-i18n="deleteText">מחק טקסט</button>
      </div>
    </div>

    <div class="media-panel" id="mediaPanel">
      <div class="media-shell">
        <div class="media-content" id="mediaContent"></div>
        <nav class="media-rail" id="mediaRail">
          <button class="media-tab active" data-mtab="fx" type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            <span data-i18n="effects">אפקטים</span>
          </button>
          <button class="media-tab" data-mtab="audio" type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10v4h4l5 4V6l-5 4H4zm12-1a5 5 0 010 6m2-9a9 9 0 010 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span data-i18n="audio">אודיו</span>
          </button>
          <button class="media-tab" data-mtab="speed" type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h3l2-7 4 14 2-7h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span data-i18n="speedLabel">מהירות</span>
          </button>
          <button class="media-tab" data-mtab="crop" type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5h14v14H5zM9 5v4H5m10 10v-4h4" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
            <span data-i18n="cropTitle">חיתוך</span>
          </button>
          <button class="media-tab" data-mtab="transform" type="button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v18M3 12h18M6 6l12 12m0-12L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
            <span data-i18n="transform">מיקום</span>
          </button>
        </nav>
      </div>
    </div>
  </div>

  <div class="timeline-wrap">
    <div class="timeline-header">
      <div class="timeline-label" data-i18n="timelineLabel">ציר זמן</div>
      <div class="timeline-right">
        <div class="trim-info"><span data-i18n="totalDuration">משך כולל:</span> <b id="trimInfoVal">00:00</b></div>
        <div class="zoom-controls">
          <button class="zoom-btn" id="zoomOut">－</button>
          <input type="range" class="sp-range" id="zoomSlider" min="20" max="300" value="80" style="width:90px; padding:0;">
          <button class="zoom-btn" id="zoomIn">＋</button>
        </div>
        <div class="tool-box">
          <button class="icon-btn tool active" id="toolSelect" data-i18n-title="toolSelect" title="בחירה (עכבר)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
          </button>
          <button class="icon-btn tool" id="toolCut" data-i18n-title="toolCut" title="חיתוך (Ctrl+B)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.6" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="18" r="2.6" stroke="currentColor" stroke-width="1.6"/><line x1="20" y1="4" x2="8.5" y2="15.5" stroke="currentColor" stroke-width="1.6"/><line x1="14.5" y1="14.5" x2="20" y2="20" stroke="currentColor" stroke-width="1.6"/><line x1="8.5" y1="8.5" x2="12" y2="12" stroke="currentColor" stroke-width="1.6"/></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="fx-select-bar" id="fxSelectBar">
      <span id="fxSelectName"></span>
      <span data-i18n="effectSize">גודל:</span>
      <input type="range" id="fxScaleSlider" min="50" max="200" value="100">
      <span id="fxScaleVal">100%</span>
      <button id="fxDeleteBtn" data-i18n="deleteText">מחק</button>
    </div>
    <div class="timeline-scroll" id="timelineScroll">
      <div class="timeline-inner" id="timelineInner">
        <div class="ruler" id="ruler"></div>
        <div class="track video-track" id="videoTrack">
          <div class="track-empty-note" id="videoEmptyNote" data-i18n="videoEmptyNote">הוסף סרטון כדי להתחיל לערוך</div>
        </div>
        <div class="track text-track" id="textTrack"></div>
        <div class="track fx-track" id="fxTrackEl"></div>
        <div class="playhead" id="playhead" style="left:0; display:none;"></div>
      </div>
    </div>
  </div>

</div>
<div class="confirm-modal" id="confirmModal">
  <div class="confirm-box">
    <div class="confirm-text" data-i18n="confirmDeleteText">האם למחוק את הפריט הנבחר?</div>
    <div class="confirm-actions">
      <button class="confirm-yes" id="confirmYes" data-i18n="confirmYes">כן, מחק</button>
      <button class="confirm-no" id="confirmNo" data-i18n="confirmNo">בטל</button>
    </div>
  </div>
</div>
<div class="editor-toast" id="editorToast"></div>
<script>
${EFFECTS_JS}${OVERLAYS_JS}${EFFECT_EXPANSION_JS}${EFFECT_TRENDS_JS}
</script>
<script>(function(){
  // ---------------- i18n ----------------
  const I18N = {
    he:{
      settingsTitle:'הגדרות', fpsLabel:'קצב פריימים (FPS)', fpsHint:'משפיע על ייצוא הסרטון בעתיד', languageLabel:'שפה',
      addVideo:'+ הוסף סרטון', addText:'+ הוסף טקסט', stickers:'+ סטיקר', audio:'🔊 אודיו', audioForClip:'אפקטי אודיו לקליפ',
      effects:'✨ אפקטים לסרטון', effectsForClip:'אפקטים לקליפ הנוכחי',
      ratioTitle:'יחס תצוגה', original:'מקורי', wide:'רחב (16:9)', story:'סטורי / ריל (9:16)', square:'ריבוע (1:1)', post:'פוסט (4:5)',
      customSize:'מידות מותאמות אישית', width:'רוחב', height:'גובה', applyCustom:'החל מידות מותאמות',
      emptyBig:'אין סרטון טעון', emptyHint:'גרור סרטון לכאן או לחץ על "הוסף סרטון" למעלה כדי להתחיל',
      textStyleTitle:'עיצוב טקסט', content:'תוכן', textColor:'צבע טקסט', font:'גופן', size:'גודל:',
      style:'סגנון', bold:'B עבה', italic:'I נטוי', align:'יישור', center:'מרכז', right:'ימין', left:'שמאל',
      shadow:'צל', outline:'קו מתאר (Outline)', bgBehindText:'רקע מאחורי הטקסט', opacity:'שקיפות:',
      entryEffect:'אפקט כניסה', none:'ללא', fadeIn:'דהייה פנימה', slideUp:'החלקה מלמטה', slideLeft:'החלקה מימין', slideRight:'החלקה משמאל',
      popIn:'קפיצה (Pop)', zoomIn:'זום פנימה', blurIn:'טשטוש פנימה', flipIn:'היפוך פנימה', elastic:'אלסטי', typewriter:'מכונת כתיבה',
      keyframesLabel:'Keyframes (מיקום/גודל/שקיפות משתנים בזמן)',
      kfHint:'לוחצים ברגע מסוים בציר הזמן, מזיזים/משנים את הטקסט, ואז לוחצים כאן כדי לשמור מצב',
      deleteText:'מחק', timelineLabel:'ציר זמן', totalDuration:'משך כולל:', videoEmptyNote:'הוסף סרטון כדי להתחיל לערוך',
      resetEffect:'אפס אפקט', noClipForFx:'הוסף והפעל סרטון כדי להחיל אפקטים', noClipForAudio:'הוסף ובחר סרטון כדי לערוך אודיו',
      intensity:'עוצמה:',
      fxKfHint:'שומר את עוצמת האפקט ברגע הנוכחי בציר הזמן', untitled:'פרויקט ללא שם',
      glow:'זוהר (Glow)', letterSpacing:'ריווח אותיות', cornerRadius:'עיגול פינות רקע',
      bounce:'קפיצה גמישה', rotate:'סיבוב פנימה', qualityLabel:'איכות גרפית (רזולוציה)',
      timelineEffects:'אפקטים', effectSize:'גודל:', exitEffect:'אפקט יציאה', loopEffect:'אפקט לופ (חוזר כל עוד הטקסט מוצג)',
      fadeOutOpt:'דהייה החוצה', slideDownOpt:'החלקה למטה', slideLeftOut:'החלקה שמאלה', slideRightOut:'החלקה ימינה',
      popOutOpt:'כיווץ (Pop Out)', zoomOutOpt:'התרחקות (Zoom Out)', blurOut:'טשטוש החוצה', flipOut:'היפוך החוצה', shrinkOut:'כיווץ קטן', spinOut:'סיבוב החוצה',
      pulseOpt:'פעימה (Pulse)', wiggleOpt:'נענוע (Wiggle)', floatOpt:'ריחוף (Float)', glowOpt:'זוהר פועם',
      shakeLoop:'רעד', swingLoop:'נדנוד', jelloLoop:'ג\\'לו', heartbeatLoop:'פעימת לב', rainbowLoop:'קשת צבעים', bounceLoop:'קפיצה', typewriterLoop:'מכונת כתיבה',
      cropDone:'✓ סיום חיתוך', cropReset:'איפוס', cropHint:'גרור את המסגרת כדי לחתוך את הווידיאו',
      cropTitle:'חיתוך מדיה', cropFull:'ללא חיתוך', cropSquare:'ריבוע 1:1', cropPortrait:'לאורך 9:16',
      cropLandscape:'לרוחב 16:9', cropCustom:'התאמה אישית (גרירה)',
      catColor:'צבע וזוהר', catTransition:'מעברים', catShake:'רעידות', catOverlay:'שכבות',
      easingLabel:'מעבר בין נקודות (Easing)', addClipKf:'הוסף keyframe בזמן הנוכחי',
      volumeLabel:'עוצמת שמע', muteLabel:'השתק', fadeInLabel:'פייד אין (שניות)', fadeOutLabel:'פייד אאוט (שניות)',
      speedLabel:'מהירות ניגון', audioHint:'מופעל בזמן ניגון בלבד', audioNorm:'נרמול עוצמה', save:'💾 שמור', load:'📂 טען', confirmDeleteText:'האם למחוק את הפריט הנבחר?', confirmYes:'כן, מחק', confirmNo:'בטל',
      dropIn:'נפילה', rollIn:'גלגול', skewIn:'הטיה', flipX:'היפוך X', flipY:'היפוך Y', scaleUp:'גדילה', zoomBlur:'זום מטושטש', slideUpBig:'עלייה גדולה',
      dropOut:'נפילה החוצה', rollOut:'גלגול החוצה', skewOut:'הטיה החוצה', flipXOut:'היפוך X החוצה', flipYOut:'היפוך Y החוצה', scaleDown:'כיווץ', zoomBlurOut:'זום מטושטש החוצה', slideUpOut:'עלייה החוצה',
      tilt:'נטייה', breathe:'נשימה', wobble:'התנדנדות', blink:'מצמוץ', colorShift:'שינוי צבע', rotateLoop:'סיבוב מתמשך', pulse2:'פעימה מהירה', glow2:'זוהר פועם',
      clipSettings:'הגדרות לסרטון', transform:'מיקום', export:'יצוא', q1080Reg:'1080p רגיל', q1080Ultra:'1080p אולטרה', toolSelect:'בחירה (עכבר)', toolCut:'חיתוך (Ctrl+B)', cutHint:'בחר קטע בציר הזמן לפני החיתוך'
    },
    en:{
      settingsTitle:'Settings', fpsLabel:'Frame rate (FPS)', fpsHint:'Affects future video export', languageLabel:'Language',
      addVideo:'+ Add Video', addText:'+ Add Text', stickers:'+ Sticker', audio:'🔊 Audio', audioForClip:'Audio effects for clip',
      effects:'✨ Video Effects', effectsForClip:'Effects for current clip',
      ratioTitle:'Display ratio', original:'Original', wide:'Wide (16:9)', story:'Story / Reel (9:16)', square:'Square (1:1)', post:'Post (4:5)',
      customSize:'Custom size', width:'Width', height:'Height', applyCustom:'Apply custom size',
      emptyBig:'No video loaded', emptyHint:'Drag a video here or click "Add Video" above to start',
      textStyleTitle:'Text style', content:'Content', textColor:'Text color', font:'Font', size:'Size:',
      style:'Style', bold:'B Bold', italic:'I Italic', align:'Alignment', center:'Center', right:'Right', left:'Left',
      shadow:'Shadow', outline:'Outline', bgBehindText:'Background behind text', opacity:'Opacity:',
      entryEffect:'Entry effect', none:'None', fadeIn:'Fade in', slideUp:'Slide up', slideLeft:'Slide from right', slideRight:'Slide from left',
      popIn:'Pop', zoomIn:'Zoom in', blurIn:'Blur in', flipIn:'Flip in', elastic:'Elastic', typewriter:'Typewriter',
      keyframesLabel:'Keyframes (position/size/opacity over time)',
      kfHint:'Move to a point in time, adjust the text, then click here to save a state',
      deleteText:'Delete', timelineLabel:'Timeline', totalDuration:'Total duration:', videoEmptyNote:'Add a video to start editing',
      resetEffect:'Reset effect', noClipForFx:'Add and select a video to apply effects', noClipForAudio:'Add and select a video to edit audio',
      intensity:'Intensity:',
      fxKfHint:'Saves the effect intensity at the current time', untitled:'Untitled Project',
      glow:'Glow', letterSpacing:'Letter spacing', cornerRadius:'Background corner radius',
      bounce:'Bounce', rotate:'Rotate in', qualityLabel:'Graphics quality (resolution)',
      timelineEffects:'Effects', effectSize:'Size:', exitEffect:'Exit effect', loopEffect:'Loop effect (repeats while text is shown)',
      fadeOutOpt:'Fade out', slideDownOpt:'Slide down', slideLeftOut:'Slide left', slideRightOut:'Slide right',
      popOutOpt:'Pop out', zoomOutOpt:'Zoom out', blurOut:'Blur out', flipOut:'Flip out', shrinkOut:'Shrink', spinOut:'Spin out',
      pulseOpt:'Pulse', wiggleOpt:'Wiggle', floatOpt:'Float', glowOpt:'Glow pulse',
      shakeLoop:'Shake', swingLoop:'Swing', jelloLoop:'Jello', heartbeatLoop:'Heartbeat', rainbowLoop:'Rainbow', bounceLoop:'Bounce', typewriterLoop:'Typewriter',
      cropDone:'✓ Done cropping', cropReset:'Reset', cropHint:'Drag the frame to crop the video',
      cropTitle:'Crop media', cropFull:'No crop', cropSquare:'Square 1:1', cropPortrait:'Portrait 9:16',
      cropLandscape:'Landscape 16:9', cropCustom:'Custom (drag)',
      catColor:'Color & Glow', catTransition:'Transitions', catShake:'Shakes', catOverlay:'Overlays',
      easingLabel:'Easing between keyframes', addClipKf:'Add keyframe at current time',
      volumeLabel:'Volume', muteLabel:'Mute', fadeInLabel:'Fade in (sec)', fadeOutLabel:'Fade out (sec)',
      speedLabel:'Playback speed', audioHint:'Applies during playback only', audioNorm:'Normalize volume', save:'💾 Save', load:'📂 Load', confirmDeleteText:'Delete the selected item?', confirmYes:'Yes, delete', confirmNo:'Cancel',
      dropIn:'Drop in', rollIn:'Roll in', skewIn:'Skew in', flipX:'Flip X', flipY:'Flip Y', scaleUp:'Scale up', zoomBlur:'Zoom blur', slideUpBig:'Slide up big',
      dropOut:'Drop out', rollOut:'Roll out', skewOut:'Skew out', flipXOut:'Flip X out', flipYOut:'Flip Y out', scaleDown:'Scale down', zoomBlurOut:'Zoom blur out', slideUpOut:'Slide up out',
      tilt:'Tilt', breathe:'Breathe', wobble:'Wobble', blink:'Blink', colorShift:'Color shift', rotateLoop:'Spin', pulse2:'Fast pulse', glow2:'Glow pulse',
      clipSettings:'Clip settings', transform:'Position', export:'Export', q1080Reg:'1080p Regular', q1080Ultra:'1080p Ultra', toolSelect:'Select (pointer)', toolCut:'Cut (Ctrl+B)', cutHint:'Select a clip on the timeline before cutting'
    }
  };
  let currentLang = 'he';
  function applyLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang==='he') ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if(I18N[lang][k]!==undefined) el.textContent = I18N[lang][k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const k = el.getAttribute('data-i18n-placeholder');
      if(I18N[lang][k]!==undefined) el.placeholder = I18N[lang][k];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      const k = el.getAttribute('data-i18n-title');
      if(I18N[lang][k]!==undefined) el.title = I18N[lang][k];
    });
    if(!projectName.value.trim() || projectName.value===I18N.he.untitled || projectName.value===I18N.en.untitled){
      projectName.value = I18N[lang].untitled;
    }
    document.getElementById('langGroup').querySelectorAll('.seg-btn').forEach(b=> b.classList.toggle('active', b.dataset.lang===lang));
    if(mediaOpen) renderMediaInspector();

    renderTimeline();
  }

  // ---------------- effect definitions (bilingual) ----------------
  const EFFECTS = window.__EFFECTS;
  function fxName(fx){ return currentLang==='he' ? fx.he : fx.en; }

  const OVERLAY_EFFECTS = window.__OVERLAY_EFFECTS;
  function overlayName(fx){ return currentLang==='he' ? fx.he : fx.en; }
  const FRAME_FX_CLASSES = OVERLAY_EFFECTS.filter(f=>f.target==='frame').map(f=>'fx-frame-'+f.id);
  function buildParticles(container, opts){
    container.innerHTML='';
    for(let i=0;i<opts.count;i++){
      const s = document.createElement('span');
      s.className='fx-particle';
      s.textContent = opts.char;
      const size = opts.size[0] + Math.random()*(opts.size[1]-opts.size[0]);
      s.style.fontSize = size+'px';
      s.style.left = (Math.random()*100)+'%';
      const dur = opts.dur[0] + Math.random()*(opts.dur[1]-opts.dur[0]);
      s.style.animationDuration = dur+'s';
      s.style.animationDelay = (Math.random()*dur)+'s';
      if(opts.dir==='twinkle'){
        s.style.top = (Math.random()*100)+'%';
        s.style.animationName = 'fxTwinkle';
      } else {
        s.style.animationName = opts.dir==='rise' ? 'fxRise' : 'fxFall';
      }
      if(opts.color) s.style.color = opts.color;
      if(opts.colorList) s.style.color = opts.colorList[Math.floor(Math.random()*opts.colorList.length)];
      container.appendChild(s);
    }
  }

  // ---------------- state ----------------
  let clips = [];
  let texts = [];
  let stickers = [];
  let pxPerSec = 80;
  let selectedTextId = null;
  let activeClipIndex = -1;
  let uid = 1;
  let projectFps = 30;
  let projectQuality = '1080p';
  let fxOverlays = [];
  let selectedFxId = null;
  let selectedKind = null;
  let selectedClipId = null;
  let selectedStickerId = null;
  let cropMode = false;
  let mediaOpen = false;
  let mediaTab = 'fx';

  const STICKERS = ['😀','😍','😂','😎','🥳','😭','😡','👍','👏','🙏','💯','🔥','✨','🎉','❤️','💔','⭐','🌟','⚡','🌈','☀️','🌙','🍕','🍔','🍟','🍿','🍦','🍓','🎈','🎁','🏆','⚽','🏀','🎮','🎵','🎶','💀','👻','🤖','👽','🐶','🐱','🦄','🌸','🌺','🍀','🦋','🐝','🐢','🚀','✈️','🚗','💎','👑','🎯','🧨','💣','💦','🌊','❄️','☁️'];

  const SWATCHES = ['#ffffff','#000000','#ff5a36','#ffd23f','#3ba1ff','#31d17c','#c77dff','#ff6fae','#ffa93b','#8a8a8a'];

  const fileInput = document.getElementById('fileInput');
  const addVideoBtn = document.getElementById('addVideoBtn');
  const stage = document.getElementById('stage');
  const frame = document.getElementById('frame');
  const emptyState = document.getElementById('emptyState');
  const videosLayer = document.getElementById('videosLayer');
  const textsLayer = document.getElementById('textsLayer');
  const playOverlay = document.getElementById('playOverlay');
  const playBtn = document.getElementById('playBtn');
  const timeDisplay = document.getElementById('timeDisplay');
  const projectName = document.getElementById('projectName');

  const settingsBtn = document.getElementById('settingsBtn');
  const settingsPopover = document.getElementById('settingsPopover');
  const fpsGroup = document.getElementById('fpsGroup');
  const qualityGroup = document.getElementById('qualityGroup');
  const langGroup = document.getElementById('langGroup');

  const ratioIconBtn = document.getElementById('ratioIconBtn');
  const ratioPopover = document.getElementById('ratioPopover');
  const cropIconBtn = document.getElementById('cropIconBtn');
  const cropPopover = document.getElementById('cropPopover');
  const cropPresetList = document.getElementById('cropPresetList');
  const cropCustomBtn = document.getElementById('cropCustomBtn');
  const presetList = document.getElementById('presetList');
  const customW = document.getElementById('customW');
  const customH = document.getElementById('customH');
  const applyCustom = document.getElementById('applyCustom');

  const fxBtn = document.getElementById('fxBtn');
  const mediaPanel = document.getElementById('mediaPanel');
  const mediaContent = document.getElementById('mediaContent');
  const mediaRail = document.getElementById('mediaRail');

  const stickerBtn = document.getElementById('stickerBtn');
  const stickerPopover = document.getElementById('stickerPopover');
  const stickerGrid = document.getElementById('stickerGrid');

  const wandBtn = document.getElementById('wandBtn');
  const wandPopover = document.getElementById('wandPopover');
  const wandGrid = document.getElementById('wandGrid');
  const fxOverlayLayer = document.getElementById('fxOverlayLayer');
  const cropLayer = document.getElementById('cropLayer');
  const cropRect = document.getElementById('cropRect');
  const cropDoneBtn = document.getElementById('cropDoneBtn');
  const cropResetBtn = document.getElementById('cropResetBtn');
  const fxTrackEl = document.getElementById('fxTrackEl');
  const fxSelectBar = document.getElementById('fxSelectBar');
  const fxSelectName = document.getElementById('fxSelectName');
  const fxScaleSlider = document.getElementById('fxScaleSlider');
  const fxScaleVal = document.getElementById('fxScaleVal');
  const fxDeleteBtn = document.getElementById('fxDeleteBtn');

  const addTextBtn = document.getElementById('addTextBtn');
  const stylePanel = document.getElementById('stylePanel');
  const spClose = document.getElementById('spClose');

  const timelineScroll = document.getElementById('timelineScroll');
  const timelineInner = document.getElementById('timelineInner');
  const ruler = document.getElementById('ruler');
  const videoTrack = document.getElementById('videoTrack');
  const textTrack = document.getElementById('textTrack');
  const videoEmptyNote = document.getElementById('videoEmptyNote');
  const playhead = document.getElementById('playhead');
  const trimInfoVal = document.getElementById('trimInfoVal');
  const zoomSlider = document.getElementById('zoomSlider');
  const zoomIn = document.getElementById('zoomIn');
  const zoomOut = document.getElementById('zoomOut');

  let RATIOS = { 'orig': null, '16-9': 16/9, '9-16': 9/16, '1-1': 1/1, '4-5': 4/5 };
  let currentRatioKey = 'orig';

  function fmtTime(t){
    if(!isFinite(t) || t<0) t = 0;
    const m = Math.floor(t/60).toString().padStart(2,'0');
    const s = Math.floor(t%60).toString().padStart(2,'0');
    return m+':'+s;
  }
  function lerp(a,b,f){ return a+(b-a)*f; }
  const EASINGS = {
    linear:     t=>t,
    easeIn:     t=>t*t,
    easeOut:    t=>t*(2-t),
    easeInOut:  t=> t<0.5 ? 2*t*t : -1+(4-2*t)*t,
    cubicIn:    t=>t*t*t,
    cubicOut:   t=>{ const p=t-1; return p*p*p+1; },
    cubicInOut: t=> t<0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2,
    quadIn:     t=>t*t,
    quadOut:    t=>1-(1-t)*(1-t),
    bounceOut:  t=>{ const n1=7.5625, d1=2.75; if(t<1/d1) return n1*t*t; if(t<2/d1){ t-=1.5/d1; return n1*t*t+0.75; } if(t<2.5/d1){ t-=2.25/d1; return n1*t*t+0.9375; } t-=2.625/d1; return n1*t*t+0.984375; },
    elasticOut: t=>{ if(t===0||t===1) return t; const c4=(2*Math.PI)/3; return Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c4)+1; }
  };
  function interp(kfs, t, field, easingKey){
    if(!kfs || !kfs.length) return null;
    if(t<=kfs[0].time) return kfs[0][field];
    if(t>=kfs[kfs.length-1].time) return kfs[kfs.length-1][field];
    const easeFn = EASINGS[easingKey] || EASINGS.linear;
    for(let i=0;i<kfs.length-1;i++){
      if(t>=kfs[i].time && t<=kfs[i+1].time){
        const span = (kfs[i+1].time-kfs[i].time)||1;
        const f = Math.min(1, Math.max(0, (t-kfs[i].time)/span));
        return lerp(kfs[i][field], kfs[i+1][field], easeFn(f));
      }
    }
    return kfs[kfs.length-1][field];
  }
  const EASING_LABELS = {
    linear:{he:'ליניארי (קבוע)', en:'Linear'},
    easeIn:{he:'האטה בכניסה (Ease In)', en:'Ease In'},
    easeOut:{he:'האטה ביציאה (Ease Out)', en:'Ease Out'},
    easeInOut:{he:'האטה בשני הצדדים (Ease In-Out)', en:'Ease In-Out'},
    cubicIn:{he:'קובי בכניסה (Cubic In)', en:'Cubic In'},
    cubicOut:{he:'קובי ביציאה (Cubic Out)', en:'Cubic Out'},
    cubicInOut:{he:'קובי בשני הצדדים (Cubic In-Out)', en:'Cubic In-Out'},
    quadIn:{he:'ריבועי בכניסה (Quad In)', en:'Quad In'},
    quadOut:{he:'ריבועי ביציאה (Quad Out)', en:'Quad Out'},
    bounceOut:{he:'קפיצה (Bounce)', en:'Bounce'},
    elasticOut:{he:'אלסטי (Elastic)', en:'Elastic'}
  };
  function clipDuration(c){ return Math.max(0,c.trimEnd-c.trimStart)/(c.playbackRate||1); }
  function totalDuration(){ return clips.reduce((sum,c)=>sum+clipDuration(c),0); }
  function clipStartTime(clip){
    let t=0;
    for(const c of clips){ if(c.id===clip.id) return t; t += clipDuration(c); }
    return t;
  }

  // ---------------- settings popover ----------------
  function closeAllPopovers(except){
    [ratioPopover, settingsPopover, wandPopover, cropPopover, stickerPopover].forEach(p=>{ if(p && p!==except) p.classList.remove('open'); });
  }
  function positionPopover(btn, pop){
    const r = btn.getBoundingClientRect();
    pop.style.position = 'fixed';
    pop.style.top = (r.bottom+8)+'px';
    pop.style.right = 'auto';
    requestAnimationFrame(()=>{
      const pw = pop.offsetWidth || 230;
      let left = Math.min(Math.max(r.left, 8), window.innerWidth - pw - 8);
      pop.style.left = left+'px';
    });
  }
  function openPopover(btn, pop){
    closeAllPopovers(pop);
    pop.classList.add('open');
    positionPopover(btn, pop);
  }
  function togglePopover(btn, pop){
    if(pop.classList.contains('open')){ pop.classList.remove('open'); return; }
    openPopover(btn, pop);
  }
  settingsBtn.addEventListener('click',(e)=>{ e.stopPropagation(); togglePopover(settingsBtn, settingsPopover); });
  fpsGroup.addEventListener('click',(e)=>{
    const b = e.target.closest('.seg-btn'); if(!b) return;
    projectFps = parseInt(b.dataset.fps);
    fpsGroup.querySelectorAll('.seg-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
  });
  langGroup.addEventListener('click',(e)=>{
    const b = e.target.closest('.seg-btn'); if(!b) return;
    applyLanguage(b.dataset.lang);
  });
  const quality1080Sub = document.getElementById('quality1080Sub');
  const editorToast = document.getElementById('editorToast'); let toastTimer=null;
  function showToast(msg){ editorToast.textContent=msg; editorToast.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>editorToast.classList.remove('show'),1800); }
  function syncQualityActive(){
    qualityGroup.querySelectorAll('.seg-btn').forEach(x=>x.classList.toggle('active', x.dataset.quality===projectQuality || (projectQuality==='ultra1080p' && x.dataset.quality==='1080p')));
    quality1080Sub.querySelectorAll('.seg-btn').forEach(x=>x.classList.toggle('active', x.dataset.quality===projectQuality));
  }
  qualityGroup.addEventListener('click',(e)=>{
    const b = e.target.closest('.seg-btn'); if(!b) return;
    if(b.dataset.quality==='1080p'){
      quality1080Sub.style.display = (quality1080Sub.style.display==='flex') ? 'none' : 'flex';
      projectQuality='1080p'; syncQualityActive(); return;
    }
    quality1080Sub.style.display='none';
    projectQuality = b.dataset.quality;
    qualityGroup.querySelectorAll('.seg-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
  });
  quality1080Sub.addEventListener('click',(e)=>{
    const b = e.target.closest('.seg-btn'); if(!b) return;
    projectQuality = b.dataset.quality;
    syncQualityActive();
  });
  document.getElementById('toolSelect').addEventListener('click',()=>{ document.getElementById('toolSelect').classList.add('active'); document.getElementById('toolCut').classList.remove('active'); });
  document.getElementById('toolCut').addEventListener('click',()=>{ document.getElementById('toolCut').classList.add('active'); document.getElementById('toolSelect').classList.remove('active'); splitSelected(); });

  // ---------------- frame ratio ----------------
  function applyRatio(){
    const st = frame.parentElement;
    const maxW = Math.max(1,st.clientWidth - 48);
    const maxH = Math.max(1,st.clientHeight - 48);
    const r = RATIOS[currentRatioKey];
    if(currentRatioKey === 'orig'){
      const first = clips[0];
      let ar = 16/9;
      if(first && first.videoEl.videoWidth) ar = first.videoEl.videoWidth/first.videoEl.videoHeight;
      let w = maxW, h = w/ar;
      if(h>maxH){ h=maxH; w=h*ar; }
      frame.style.width = w+'px'; frame.style.height = h+'px';
      return;
    }
    let w = maxW, h = w / r;
    if(h > maxH){ h = maxH; w = h * r; }
    frame.style.width = w + 'px'; frame.style.height = h + 'px';
  }
  window.addEventListener('resize', applyRatio);

  ratioIconBtn.addEventListener('click', (e)=>{ e.stopPropagation(); togglePopover(ratioIconBtn, ratioPopover); });
  fxBtn.addEventListener('click', (e)=>{ e.stopPropagation(); openMediaInspector(); });
  stickerBtn.addEventListener('click', (e)=>{ e.stopPropagation(); togglePopover(stickerBtn, stickerPopover); renderStickerGrid(); });
  document.addEventListener('click', (e)=>{
    if(!ratioPopover.contains(e.target) && e.target!==ratioIconBtn) ratioPopover.classList.remove('open');
    if(!settingsPopover.contains(e.target) && e.target!==settingsBtn && !settingsBtn.contains(e.target)) settingsPopover.classList.remove('open');
    if(wandPopover && !wandPopover.contains(e.target) && e.target!==wandBtn && !wandBtn.contains(e.target)) wandPopover.classList.remove('open');
    if(cropPopover && !cropPopover.contains(e.target) && e.target!==cropIconBtn && !cropIconBtn.contains(e.target)) cropPopover.classList.remove('open');
    if(stickerPopover && !stickerPopover.contains(e.target) && e.target!==stickerBtn && !stickerBtn.contains(e.target)) stickerPopover.classList.remove('open');
  });
  presetList.addEventListener('click', (e)=>{
    const item = e.target.closest('.preset-item'); if(!item) return;
    presetList.querySelectorAll('.preset-item').forEach(b=>b.classList.remove('active'));
    item.classList.add('active');
    currentRatioKey = item.dataset.ratio;
    applyRatio();
    ratioPopover.classList.remove('open');
  });
  applyCustom.addEventListener('click', ()=>{
    const w = parseFloat(customW.value), h = parseFloat(customH.value);
    if(!Number.isFinite(w)||!Number.isFinite(h)||w<10||h<10) return;
    RATIOS['custom'] = w/h;
    currentRatioKey = 'custom';
    presetList.querySelectorAll('.preset-item').forEach(b=>b.classList.remove('active'));
    applyRatio();
    ratioPopover.classList.remove('open');
  });

  ${MEDIA_INSPECTOR_JS}

  // ---------------- stickers ----------------
  function renderStickerGrid(){
    stickerGrid.innerHTML='';
    STICKERS.forEach(emoji=>{
      const item = document.createElement('div'); item.className='sticker-item'; item.textContent=emoji;
      item.addEventListener('click', ()=>{ addSticker(emoji); stickerPopover.classList.remove('open'); });
      stickerGrid.appendChild(item);
    });
  }
  function addSticker(emoji){
    const id = 's'+(uid++);
    const start = Math.min(currentMasterTime(), Math.max(0,totalDuration()-0.1));
    const dur = clips.length? Math.min(3, totalDuration()-start) : 3;
    const el = document.createElement('div');
    el.className = 'text-overlay';
    el.style.fontSize = '60px';
    const inner = document.createElement('span');
    inner.className = 'text-inner';
    inner.textContent = emoji;
    el.appendChild(inner);
    textsLayer.appendChild(el);
    const sk = {
      id, isSticker:true, content:emoji, color:'#ffffff', font:"'Segoe UI', Arial, sans-serif",
      size:60, bold:false, italic:false, align:'center',
      shadow:false, outline:false, outlineColor:'#000000', glow:false, glowColor:'#3ba1ff', glowIntensity:60,
      bg:false, bgColor:'#000000', bgRadius:6, letterSpacing:0,
      opacity:100, anim:'pop', exitAnim:'none', loop:'none',
      x:50, y:50, start: start, end: start+ (dur>0?dur:3), el, innerEl: inner, keyframes:[]
    };
    stickers.push(sk);
    styleTextEl(sk);
    makeTextDraggable(sk);
    renderTimeline();
    selectSticker(id);
    updatePlayheadAndTexts();
  }
  function selectSticker(id){ selectText(id); }

  // ---------------- timeline effect overlays (wand) ----------------
  wandBtn.addEventListener('click',(e)=>{ e.stopPropagation(); togglePopover(wandBtn, wandPopover); renderWandGrid(); });
  let wandCategory = 'color';
  document.getElementById('wandCatTabs').addEventListener('click',(e)=>{
    const b = e.target.closest('.seg-btn'); if(!b) return;
    wandCategory = b.dataset.cat;
    document.getElementById('wandCatTabs').querySelectorAll('.seg-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderWandGrid();
  });
  function renderWandGrid(){
    wandGrid.innerHTML='';
    OVERLAY_EFFECTS.filter(fx=>fx.cat===wandCategory).forEach(fx=>{
      const item = document.createElement('div');
      item.className='fx-item';
      const swatch = 'background:var(--panel-3);';
      item.innerHTML = \`<div class="fx-swatch" style="\${swatch}"></div>\${overlayName(fx)}\`;
      item.addEventListener('click', ()=>{ addFxOverlay(fx.id); wandPopover.classList.remove('open'); });
      wandGrid.appendChild(item);
    });
  }
  function addFxOverlay(type){
    const id = 'fx'+(uid++);
    const start = Math.min(currentMasterTime(), Math.max(0,totalDuration()-0.1));
    const dur = clips.length? Math.min(4, Math.max(0.5,totalDuration()-start)) : 4;
    const el = document.createElement('div');
    el.className='fx-overlay-instance';
    fxOverlayLayer.appendChild(el);
    const def = OVERLAY_EFFECTS.find(f=>f.id===type);
    if(def && def.target!=='frame' && def.build) def.build(el, dur);
    const item = { id, type, start, end:start+dur, scale:100, el };
    fxOverlays.push(item);
    renderTimeline();
    selectFxOverlay(id);
    updatePlayheadAndTexts();
  }
  function selectFxOverlay(id){
    closeMediaInspector();
    selectedFxId = id;
    if(id){ selectedKind='fx'; selectedClipId=null; selectedTextId=null; selectedStickerId=null; [...texts,...stickers].forEach(t=>t.el.classList.remove('selected')); stylePanel.classList.remove('open'); }
    else if(selectedKind==='fx'){ selectedKind=null; }
    updateCropButtonVisibility();
    const item = fxOverlays.find(f=>f.id===id);
    renderTimeline();
    if(!item){ fxSelectBar.style.display='none'; return; }
    fxSelectBar.style.display='flex';
    const def = OVERLAY_EFFECTS.find(f=>f.id===item.type);
    fxSelectName.textContent = def ? overlayName(def) : item.type;
    fxScaleSlider.value = item.scale;
    fxScaleVal.textContent = item.scale+'%';
  }
  fxScaleSlider.addEventListener('input',(e)=>{
    const item = fxOverlays.find(f=>f.id===selectedFxId); if(!item) return;
    item.scale = parseInt(e.target.value);
    fxScaleVal.textContent = item.scale+'%';
    item.el.style.transform = 'scale('+(item.scale/100)+')';
  });
  fxDeleteBtn.addEventListener('click',()=>{if(selectedFxId)confirmDelete(deleteSelected);});
  function dragFxHandle(item, which){
    function move(e){
      const dx = e.movementX / pxPerSec;
      const total = Math.max(totalDuration(), item.end);
      if(which==='start') item.start = Math.max(0, Math.min(item.start+dx, item.end-0.2));
      else item.end = Math.min(Math.max(total,item.end), Math.max(item.end+dx, item.start+0.2));
      renderTimeline();
    }
    function up(){ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); }
    window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
  }
  function dragFxBlock(item){
    function move(e){
      const dx = e.movementX / pxPerSec;
      const dur = item.end-item.start;
      let ns = Math.max(0, item.start+dx);
      item.start = ns; item.end = ns+dur;
      renderTimeline();
    }
    function up(){ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); }
    window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
  }

  // ---------------- add video clips ----------------
  addVideoBtn.addEventListener('click', ()=> fileInput.click());
  fileInput.addEventListener('change', (e)=>{
    const files = Array.from(e.target.files || []);
    files.forEach(addClip);
    fileInput.value = '';
  });

  function addClip(file){
    if(!file || !file.type.startsWith('video/')) return;
    const id = 'c'+(uid++);
    const url = URL.createObjectURL(file);
    const videoEl = document.createElement('video');
    videoEl.src = url;
    videoEl.playsInline = true;
    videoEl.preload = 'metadata';
    videoEl.controls = false;
    videoEl.disablePictureInPicture = true;
    videoEl.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;display:none;background:#000;';
    videosLayer.appendChild(videoEl);

    const clip = { id, name:file.name, url, videoEl, duration:0, trimStart:0, trimEnd:0, effectType:'none', intensity:60, easing:'linear', keyframes:[], crop:{x:0,y:0,w:100,h:100},
      volume:100, muted:false, fadeIn:0, fadeOut:0, playbackRate:1, audioNorm:false };
    clips.push(clip);
    videoEl.addEventListener('loadedmetadata', ()=>{
      clip.duration = videoEl.duration; clip.trimEnd = videoEl.duration;
      const isFirst = clips.indexOf(clip)===0;
      emptyState.style.display = 'none';
      playOverlay.style.display = 'flex';
      videoEmptyNote.style.display = 'none';
      if(isFirst){ videoEl.style.display='block'; activeClipIndex=0; applyAudioToClip(clip); selectClip(clip); }
      applyRatio();
      renderTimeline();
      updateTrimInfo();
      seekTo(currentMasterTime());
    });

    videoEl.addEventListener('timeupdate', ()=>{
      if(clips[activeClipIndex] !== clip) return;
      applyClipFilter(clip);
      updateAudioFades();
      if(isPlaying && videoEl.currentTime >= clip.trimEnd - 0.02) advanceClip();
      else updatePlayheadAndTexts();
    });
  }

  function advanceClip(){
    const cur = clips[activeClipIndex];
    if(cur) cur.videoEl.pause();
    if(activeClipIndex < clips.length-1){
      activeClipIndex++;
      const next = clips[activeClipIndex];
      clips.forEach(c=> c.videoEl.style.display='none');
      next.videoEl.style.display='block';
      next.videoEl.currentTime = next.trimStart;
      applyClipFilter(next);
      applyCropToVideo(next);
      applyClipTransform(next);
      applyAudioToClip(next);
      frame.classList.toggle('media-selected',selectedKind==='clip'&&selectedClipId===next.id);
      if(!videoIsPausedManually){ next.videoEl.play(); }
      updatePlayheadAndTexts();
    } else {
      isPlaying=false; videoIsPausedManually=true; playBtn.textContent='▶';
      updatePlayheadAndTexts();
    }
  }

  function currentMasterTime(){
    const c = clips[activeClipIndex];
    if(!c) return 0;
    return clipStartTime(c) + Math.max(0,Math.min(c.trimEnd-c.trimStart,c.videoEl.currentTime-c.trimStart))/(c.playbackRate||1);
  }

  function deleteClip(id){
    const idx=clips.findIndex(c=>c.id===id);if(idx<0)return;
    const clip=clips[idx];
    isPlaying=false;videoIsPausedManually=true;playBtn.textContent='▶';
    clips.forEach(c=>c.videoEl.pause());
    if(cropMode)exitCropMode();
    clip.videoEl.remove();clips.splice(idx,1);
    if(!clips.some(c=>c.url===clip.url)&&clipboardItem?.data.url!==clip.url)URL.revokeObjectURL(clip.url);
    if(selectedClipId===id){selectedClipId=null;selectedKind=null;}
    if(!clips.length){activeClipIndex=-1;emptyState.style.display='flex';playOverlay.style.display='none';}
    else seekTo(Math.min(clipStartTime(clips[Math.min(idx,clips.length-1)]),totalDuration()));
    renderTimeline();updateTrimInfo();updateCropButtonVisibility();if(mediaOpen)renderMediaInspector();applyRatio();
  }

  // ---------------- media crop tool ----------------
  function applyCropToVideo(clip){
    const c = clip.crop || {x:0,y:0,w:100,h:100};
    const top = c.y, left = c.x, right = 100-(c.x+c.w), bottom = 100-(c.y+c.h);
    clip.videoEl.style.clipPath = \`inset(\${top}% \${right}% \${bottom}% \${left}%)\`;
  }
  function updateCropRectFromClip(clip){
    const c = clip.crop;
    cropRect.style.left = c.x+'%'; cropRect.style.top = c.y+'%';
    cropRect.style.width = c.w+'%'; cropRect.style.height = c.h+'%';
  }
  function enterCropMode(){
    const clip = selectedClipForCrop(); if(!clip) return;
    if(!clip.crop) clip.crop = {x:0,y:0,w:100,h:100};
    cropMode = true;
    cropLayer.style.display = 'block';
    updateCropRectFromClip(clip);
  }
  function exitCropMode(){
    cropMode = false;
    cropLayer.style.display = 'none';
    const clip = selectedClipForCrop();
    if(clip) applyCropToVideo(clip);
  }
  function centerCropForRatio(targetRatio){
    const fw = frame.clientWidth || 16, fh = frame.clientHeight || 9;
    const frameRatio = fw/fh;
    let w,h,x,y;
    if(targetRatio < frameRatio){ h=100; w=(targetRatio/frameRatio)*100; x=(100-w)/2; y=0; }
    else { w=100; h=(frameRatio/targetRatio)*100; x=0; y=(100-h)/2; }
    return {x,y,w,h};
  }
  function selectedClipForCrop(){
    return selectedKind==='clip' ? clips.find(c=>c.id===selectedClipId) : undefined;
  }
  function updateCropButtonVisibility(){
    cropIconBtn.style.display = (selectedKind==='clip' && selectedClipId) ? 'flex' : 'none';
  }
  cropIconBtn.addEventListener('click', (e)=>{ e.stopPropagation(); togglePopover(cropIconBtn, cropPopover); });
  cropPresetList.addEventListener('click', (e)=>{
    const item = e.target.closest('.preset-item'); if(!item) return;
    const clip = selectedClipForCrop(); if(!clip) return;
    const key = item.dataset.crop;
    if(key==='full') clip.crop = {x:0,y:0,w:100,h:100};
    else {
      const ratioMap = {square:1, portrait:9/16, landscape:16/9};
      clip.crop = centerCropForRatio(ratioMap[key]);
    }
    applyCropToVideo(clip);
    cropPopover.classList.remove('open');
  });
  cropCustomBtn.addEventListener('click', ()=>{
    cropPopover.classList.remove('open');
    enterCropMode();
  });
  cropDoneBtn.addEventListener('click', exitCropMode);
  cropResetBtn.addEventListener('click', ()=>{
    const clip = selectedClipForCrop(); if(!clip) return;
    clip.crop = {x:0,y:0,w:100,h:100};
    updateCropRectFromClip(clip);
  });
  cropRect.addEventListener('pointerdown',(e)=>{
    if(e.target.classList.contains('crop-handle')) return;
    e.stopPropagation();
    const clip = selectedClipForCrop(); if(!clip) return;
    const startX=e.clientX, startY=e.clientY;
    const orig = {...clip.crop};
    function move(ev){
      const r = frame.getBoundingClientRect();
      const dxPct = ((ev.clientX-startX)/r.width)*100;
      const dyPct = ((ev.clientY-startY)/r.height)*100;
      clip.crop.x = Math.min(Math.max(orig.x+dxPct,0), 100-orig.w);
      clip.crop.y = Math.min(Math.max(orig.y+dyPct,0), 100-orig.h);
      updateCropRectFromClip(clip);
    }
    function up(){ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); }
    window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
  });
  cropRect.querySelectorAll('.crop-handle').forEach(handle=>{
    handle.addEventListener('pointerdown',(e)=>{
      e.stopPropagation();
      const clip = selectedClipForCrop(); if(!clip) return;
      const corner = handle.dataset.corner;
      const startX=e.clientX, startY=e.clientY;
      const orig = {...clip.crop};
      function move(ev){
        const r = frame.getBoundingClientRect();
        const dxPct = ((ev.clientX-startX)/r.width)*100;
        const dyPct = ((ev.clientY-startY)/r.height)*100;
        let {x,y,w,h} = orig;
        if(corner==='se'){ w=Math.min(Math.max(orig.w+dxPct,10),100-x); h=Math.min(Math.max(orig.h+dyPct,10),100-y); }
        else if(corner==='nw'){
          const nx=Math.min(Math.max(orig.x+dxPct,0), orig.x+orig.w-10);
          const ny=Math.min(Math.max(orig.y+dyPct,0), orig.y+orig.h-10);
          w=orig.w+(orig.x-nx); h=orig.h+(orig.y-ny); x=nx; y=ny;
        } else if(corner==='ne'){
          const ny=Math.min(Math.max(orig.y+dyPct,0), orig.y+orig.h-10);
          w=Math.min(Math.max(orig.w+dxPct,10),100-x); h=orig.h+(orig.y-ny); y=ny;
        } else if(corner==='sw'){
          const nx=Math.min(Math.max(orig.x+dxPct,0), orig.x+orig.w-10);
          w=orig.w+(orig.x-nx); x=nx; h=Math.min(Math.max(orig.h+dyPct,10),100-y);
        }
        clip.crop = {x,y,w,h};
        updateCropRectFromClip(clip);
      }
      function up(){ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); }
      window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
    });
  });

  // ---------------- drag & drop media ----------------
  ['dragenter','dragover'].forEach(evt=>{
    window.addEventListener(evt, (e)=>{ e.preventDefault(); e.stopPropagation(); if(e.dataTransfer) e.dataTransfer.dropEffect='copy'; }, false);
  });
  window.addEventListener('drop', (e)=>{ e.preventDefault(); e.stopPropagation(); }, false);

  stage.addEventListener('dragenter', ()=> stage.classList.add('drag-over'));
  stage.addEventListener('dragover', ()=> stage.classList.add('drag-over'));
  stage.addEventListener('dragleave', (e)=>{ if(e.target===stage || !stage.contains(e.relatedTarget)) stage.classList.remove('drag-over'); });
  stage.addEventListener('drop', (e)=>{
    stage.classList.remove('drag-over');
    const files = Array.from((e.dataTransfer && e.dataTransfer.files) || []);
    files.forEach(addClip);
  });

  // ---------------- playback ----------------
  let isPlaying = false;
  let videoIsPausedManually = true;

  playBtn.addEventListener('click', ()=>{
    if(clips.length===0) return;
    if(isPlaying){
      isPlaying=false; videoIsPausedManually=true;
      const c = clips[activeClipIndex]; if(c) c.videoEl.pause();
      playBtn.textContent='▶';
    } else {
      if(currentMasterTime() >= totalDuration()-0.05) seekTo(0);
      isPlaying=true; videoIsPausedManually=false;
      const c = clips[activeClipIndex];
      if(c){ applyClipFilter(c); applyAudioToClip(c); c.videoEl.play(); }
      playBtn.textContent='❚❚';
    }
  });

  function seekTo(t){
    t = Math.max(0, Math.min(totalDuration(), t));
    let acc = 0, target = null, local = 0;
    for(let i=0;i<clips.length;i++){
      const len = clipDuration(clips[i]);
      if(t <= acc+len || i===clips.length-1){ target = i; local = t-acc; break; }
      acc += len;
    }
    if(target===null) return;
    activeClipIndex = target;
    clips.forEach((c,i)=>{c.videoEl.style.display=i===activeClipIndex?'block':'none';if(i!==activeClipIndex)c.videoEl.pause();});
    const c = clips[activeClipIndex];
    c.videoEl.currentTime = Math.min(c.trimEnd,c.trimStart+Math.max(0,local)*(c.playbackRate||1));
    applyClipFilter(c);
    applyCropToVideo(c);
    applyClipTransform(c);
    applyAudioToClip(c);
    if(isPlaying)c.videoEl.play();
    frame.classList.toggle('media-selected',selectedKind==='clip'&&selectedClipId===c.id);
    updatePlayheadAndTexts();
  }

  function updatePlayheadAndTexts(){
    const t = currentMasterTime();
    const total = totalDuration();
    playhead.style.left = (t*pxPerSec)+'px';
    playhead.style.display = clips.length? 'block':'none';
    timeDisplay.textContent = fmtTime(t)+' / '+fmtTime(total);

    const all = [...texts, ...stickers];
    all.forEach(tx=>{
      const el = tx.el, inner = tx.innerEl;
      const visible = t >= tx.start && t <= tx.end;
      if(visible){
        inner.className = 'text-inner' + (tx.loop && tx.loop!=='none' ? ' loop-'+tx.loop : '');
        if(el.dataset.state !== 'visible'){
          el.style.display='block';
          el.classList.remove('exiting','exit-fadeOut','exit-slideDown','exit-slideLeftOut','exit-slideRightOut','exit-popOut','exit-zoomOut','exit-blurOut','exit-flipOut','exit-shrinkOut','exit-spinOut','exit-dropOut','exit-rollOut','exit-skewOut','exit-flipXOut','exit-flipYOut','exit-scaleDown','exit-zoomBlurOut','exit-slideUpOut','anim-fade','anim-slide','anim-slideLeft','anim-slideRight','anim-pop','anim-bounce','anim-rotate','anim-zoomIn','anim-blurIn','anim-flipIn','anim-elastic','anim-typewriter','anim-dropIn','anim-rollIn','anim-skewIn','anim-flipX','anim-flipY','anim-scaleUp','anim-zoomBlur','anim-slideUpBig');
          if(isPlaying && tx.anim && tx.anim!=='none'){
            void el.offsetWidth;
            el.classList.add('anim-'+tx.anim);
          }
          el.dataset.state='visible';
        }
        if(tx.keyframes && tx.keyframes.length>=2){
          el.style.left = interp(tx.keyframes,t,'x')+'%';
          el.style.top = interp(tx.keyframes,t,'y')+'%';
          inner.style.fontSize = interp(tx.keyframes,t,'size')+'px';
          el.style.opacity = interp(tx.keyframes,t,'opacity')/100;
        } else {
          el.style.left = tx.x+'%'; el.style.top = tx.y+'%';
          inner.style.fontSize = tx.size+'px'; el.style.opacity = tx.opacity/100;
        }
      } else {
        if(!isPlaying){el.style.display='none';el.dataset.state='hidden';return;}
        if(el.dataset.state==='visible'){
          if(isPlaying && tx.exitAnim && tx.exitAnim!=='none'){
            el.dataset.state='exiting';
            el.classList.add('exit-'+tx.exitAnim);
            setTimeout(()=>{
              if(el.dataset.state==='exiting'){ el.style.display='none'; el.classList.remove('exit-'+tx.exitAnim); el.dataset.state='hidden'; }
            }, 500);
          } else {
            el.style.display='none'; el.dataset.state='hidden';
          }
        }
      }
    });

    syncTimelineEffects(t);
  }

  // ---------------- text overlays ----------------
  addTextBtn.addEventListener('click', ()=>{
    const id = 't'+(uid++);
    const start = Math.min(currentMasterTime(), Math.max(0,totalDuration()-0.1));
    const dur = clips.length? Math.min(3, totalDuration()-start) : 3;
    const el = document.createElement('div');
    el.className = 'text-overlay';
    const inner = document.createElement('span');
    inner.className = 'text-inner';
    el.appendChild(inner);
    textsLayer.appendChild(el);

    const tx = {
      id, content: currentLang==='he' ? 'טקסט חדש' : 'New Text', color:'#ffffff', font:"'Segoe UI', Arial, sans-serif",
      size:32, bold:false, italic:false, align:'center',
      shadow:true, outline:false, outlineColor:'#000000', glow:false, glowColor:'#3ba1ff', glowIntensity:60,
      bg:false, bgColor:'#000000', bgRadius:6, letterSpacing:0,
      opacity:100, anim:'fade', exitAnim:'none', loop:'none',
      x:50, y:50, start: start, end: start+ (dur>0?dur:3), el, innerEl: inner, keyframes:[]
    };
    texts.push(tx);
    styleTextEl(tx);
    makeTextDraggable(tx);
    renderTimeline();
    selectText(id);
    updatePlayheadAndTexts();
  });

  function styleTextEl(tx){
    const el = tx.el, inner = tx.innerEl;
    inner.textContent = tx.content;
    el.style.left = tx.x+'%'; el.style.top = tx.y+'%';
    inner.style.color = tx.color; inner.style.fontFamily = tx.font; inner.style.fontSize = tx.size+'px';
    inner.style.fontWeight = tx.bold ? '700':'400'; inner.style.fontStyle = tx.italic ? 'italic':'normal';
    inner.style.textAlign = tx.align; el.style.opacity = (tx.opacity/100);
    inner.style.letterSpacing = (tx.letterSpacing||0)+'px';
    const shadows = [];
    if(tx.glow){
      const gi = (tx.glowIntensity||0)/100;
      const gc = tx.glowColor;
      shadows.push(\`0 0 \${3+gi*5}px \${gc}\`, \`0 0 \${8+gi*14}px \${gc}\`, \`0 0 \${16+gi*24}px \${gc}\`);
      if(tx.shadow) shadows.push('0 2px 6px rgba(0,0,0,0.6)');
    } else if(tx.shadow){
      shadows.push('0 2px 10px rgba(0,0,0,0.8)', '0 0 2px rgba(0,0,0,0.9)');
    }
    inner.style.textShadow = shadows.length ? shadows.join(', ') : 'none';
    inner.style.webkitTextStroke = tx.outline ? \`1.5px \${tx.outlineColor||'#000000'}\` : '0px transparent';
    inner.style.background = tx.bg ? (tx.bgColor+'cc') : 'transparent';
    inner.style.borderRadius = tx.bg ? (tx.bgRadius!==undefined?tx.bgRadius:6)+'px' : '0';
    inner.style.padding = '2px 8px';
    el.classList.toggle('selected', tx.id===selectedTextId || tx.id===selectedStickerId);
  }

  function makeTextDraggable(tx){
    tx.el.addEventListener('pointerdown', (e)=>{
      e.stopPropagation();
      if(tx.isSticker) selectSticker(tx.id); else selectText(tx.id);
      const rect = frame.getBoundingClientRect();
      function move(ev){
        let x = ((ev.clientX-rect.left)/rect.width)*100;
        let y = ((ev.clientY-rect.top)/rect.height)*100;
        x = Math.max(2,Math.min(98,x)); y = Math.max(2,Math.min(98,y));
        tx.x=x; tx.y=y; tx.el.style.left=x+'%'; tx.el.style.top=y+'%';
      }
      function up(){ window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); }
      window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
    });
  }

  function selectText(id){
    const item=texts.find(t=>t.id===id)||stickers.find(t=>t.id===id);
    closeMediaInspector();
    selectedTextId = item&&!item.isSticker ? id : null;
    selectedStickerId = item?.isSticker ? id : null;
    if(item){ selectedKind=item.isSticker?'sticker':'text'; selectedClipId=null; selectedFxId=null; fxSelectBar.style.display='none'; }
    else { selectedKind=null; }
    updateCropButtonVisibility();
    [...texts,...stickers].forEach(t=> t.el.classList.toggle('selected', t.id===id));
    renderTimeline();
    const tx = item;
    if(!tx){ stylePanel.classList.remove('open'); requestAnimationFrame(applyRatio); return; }
    stylePanel.classList.add('open');
    document.getElementById('txtContent').value = tx.content;
    document.getElementById('txtColor').value = tx.color;
    document.getElementById('txtFont').value = tx.font;
    document.getElementById('txtSize').value = tx.size;
    document.getElementById('fontSizeVal').textContent = tx.size;
    document.getElementById('toggleBold').classList.toggle('active', tx.bold);
    document.getElementById('toggleItalic').classList.toggle('active', tx.italic);
    document.querySelectorAll('[data-align]').forEach(b=> b.classList.toggle('active', b.dataset.align===tx.align));
    document.getElementById('chkShadow').checked = tx.shadow;
    document.getElementById('chkOutline').checked = tx.outline;
    document.getElementById('outlineColor').value = tx.outlineColor||'#000000';
    document.getElementById('chkGlow').checked = tx.glow||false;
    document.getElementById('glowColor').value = tx.glowColor||'#3ba1ff';
    document.getElementById('glowIntensity').value = tx.glowIntensity!==undefined?tx.glowIntensity:60;
    document.getElementById('chkBg').checked = tx.bg;
    document.getElementById('bgColor').value = tx.bgColor;
    document.getElementById('bgRadius').value = tx.bgRadius!==undefined?tx.bgRadius:6;
    document.getElementById('txtLetterSpacing').value = tx.letterSpacing||0;
    document.getElementById('letterSpacingVal').textContent = (tx.letterSpacing||0)+'px';
    document.getElementById('txtOpacity').value = tx.opacity;
    document.getElementById('opacityVal').textContent = tx.opacity+'%';
    document.getElementById('txtAnim').value = tx.anim;
    document.getElementById('txtExitAnim').value = tx.exitAnim || 'none';
    document.getElementById('txtLoop').value = tx.loop || 'none';
    buildSwatches(tx);
    renderKfList(tx);
    requestAnimationFrame(applyRatio);
  }

  function buildSwatches(tx){
    const wrap = document.getElementById('colorSwatches'); wrap.innerHTML='';
    SWATCHES.forEach(c=>{
      const s = document.createElement('div');
      s.className = 'color-swatch'+(tx.color===c?' active':'');
      s.style.background = c;
      s.style.boxShadow = c==='#ffffff' ? 'inset 0 0 0 1px #444' : 'none';
      s.addEventListener('click', ()=>{ updateSelected({color:c}); buildSwatches(tx); document.getElementById('txtColor').value=c; });
      wrap.appendChild(s);
    });
  }

  function renderKfList(tx){
    const wrap = document.getElementById('kfList'); if(!wrap) return; wrap.innerHTML='';
    tx.keyframes.forEach((k,idx)=>{
      const chip = document.createElement('div'); chip.className='kf-chip';
      chip.innerHTML = \`\${fmtTime(k.time)} <button>✕</button>\`;
      chip.querySelector('button').addEventListener('click',(e)=>{ e.stopPropagation(); tx.keyframes.splice(idx,1); renderKfList(tx); renderTimeline(); });
      wrap.appendChild(chip);
    });
  }

  document.getElementById('addKeyframeBtn').addEventListener('click', ()=>{
    const tx = getSelectedText(); if(!tx) return;
    const t = Math.max(tx.start, Math.min(tx.end, currentMasterTime()));
    const existing = tx.keyframes.find(k=>Math.abs(k.time-t)<0.05);
    const snapshot = { time:t, x:tx.x, y:tx.y, size:tx.size, opacity:tx.opacity };
    if(existing) Object.assign(existing, snapshot); else tx.keyframes.push(snapshot);
    tx.keyframes.sort((a,b)=>a.time-b.time);
    renderKfList(tx); renderTimeline(); updatePlayheadAndTexts();
  });

  function getSelectedText(){ return texts.find(t=>t.id===selectedTextId) || stickers.find(t=>t.id===selectedStickerId); }
  function updateSelected(props){ const tx = getSelectedText(); if(!tx) return; Object.assign(tx, props); styleTextEl(tx); renderTimeline(); }

  document.getElementById('txtContent').addEventListener('input', (e)=> updateSelected({content:e.target.value}));
  document.getElementById('txtColor').addEventListener('input', (e)=>{ updateSelected({color:e.target.value}); const tx=getSelectedText(); if(tx) buildSwatches(tx); });
  document.getElementById('txtFont').addEventListener('change', (e)=> updateSelected({font:e.target.value}));
  document.getElementById('txtSize').addEventListener('input', (e)=>{ document.getElementById('fontSizeVal').textContent=e.target.value; updateSelected({size:parseInt(e.target.value)}); });
  document.getElementById('toggleBold').addEventListener('click', (e)=>{ const tx=getSelectedText(); if(!tx)return; updateSelected({bold:!tx.bold}); e.target.classList.toggle('active', tx.bold); });
  document.getElementById('toggleItalic').addEventListener('click', (e)=>{ const tx=getSelectedText(); if(!tx)return; updateSelected({italic:!tx.italic}); e.target.classList.toggle('active', tx.italic); });
  document.querySelectorAll('[data-align]').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('[data-align]').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); updateSelected({align:b.dataset.align});
    });
  });
  document.getElementById('chkShadow').addEventListener('change', (e)=> updateSelected({shadow:e.target.checked}));
  document.getElementById('chkOutline').addEventListener('change', (e)=> updateSelected({outline:e.target.checked}));
  document.getElementById('outlineColor').addEventListener('input', (e)=> updateSelected({outlineColor:e.target.value}));
  document.getElementById('chkGlow').addEventListener('change', (e)=> updateSelected({glow:e.target.checked}));
  document.getElementById('glowColor').addEventListener('input', (e)=> updateSelected({glowColor:e.target.value}));
  document.getElementById('glowIntensity').addEventListener('input', (e)=> updateSelected({glowIntensity:parseInt(e.target.value)}));
  document.getElementById('chkBg').addEventListener('change', (e)=> updateSelected({bg:e.target.checked}));
  document.getElementById('bgColor').addEventListener('input', (e)=> updateSelected({bgColor:e.target.value}));
  document.getElementById('bgRadius').addEventListener('input', (e)=> updateSelected({bgRadius:parseInt(e.target.value)}));
  document.getElementById('txtLetterSpacing').addEventListener('input', (e)=>{ document.getElementById('letterSpacingVal').textContent=e.target.value+'px'; updateSelected({letterSpacing:parseInt(e.target.value)}); });
  document.getElementById('txtOpacity').addEventListener('input', (e)=>{ document.getElementById('opacityVal').textContent=e.target.value+'%'; updateSelected({opacity:parseInt(e.target.value)}); });
  document.getElementById('txtAnim').addEventListener('change', (e)=> updateSelected({anim:e.target.value}));
  document.getElementById('txtExitAnim').addEventListener('change', (e)=> updateSelected({exitAnim:e.target.value}));
  document.getElementById('txtLoop').addEventListener('change', (e)=> updateSelected({loop:e.target.value}));
  document.getElementById('deleteTextBtn').addEventListener('click',()=>{if(getSelectedText())confirmDelete(deleteSelected);});
  spClose.addEventListener('click',clearSelection);

  projectName.addEventListener('blur', ()=>{ if(!projectName.value.trim()) projectName.value = I18N[currentLang].untitled; });
  projectName.addEventListener('keydown', (e)=>{ if(e.key==='Enter') projectName.blur(); });

  function updateTrimInfo(){ trimInfoVal.textContent = fmtTime(totalDuration()); }

  ${EDITOR_TIMELINE_JS}
  ${KEYBOARD_SHORTCUTS_JS}
  ${TIMELINE_EFFECTS_JS}

  ${PROJECT_PERSISTENCE_JS}

  renderTimeline();
  updateTrimInfo();
  applyLanguage('he');
})();</script>
</body>
</html>`;
export default html;