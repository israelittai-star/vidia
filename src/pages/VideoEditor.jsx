import React, { useEffect, useRef } from 'react';
import html from '@/video-editor-html.js';

export default function VideoEditor() {
  const editorRef = useRef(null);
  useEffect(() => {
    const forwardShortcut = (event) => {
      const active = document.activeElement;
      if (active?.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(active?.tagName)) return;
      const isCommand = (event.ctrlKey || event.metaKey) && ['KeyC', 'KeyV', 'KeyD', 'KeyB'].includes(event.code);
      if (!isCommand && !['Delete', 'Backspace', 'Escape', 'Space', 'KeyB'].includes(event.code)) return;
      const target = editorRef.current?.contentWindow;
      if (!target) return;
      const forwarded = new target.KeyboardEvent('keydown', { key: event.key, code: event.code, ctrlKey: event.ctrlKey, metaKey: event.metaKey, altKey: event.altKey, shiftKey: event.shiftKey, repeat: event.repeat, cancelable: true });
      if (!target.dispatchEvent(forwarded)) event.preventDefault();
    };
    window.addEventListener('keydown', forwardShortcut);
    return () => window.removeEventListener('keydown', forwardShortcut);
  }, []);
  return (
    <div className="w-screen h-screen bg-black">
      <iframe
        ref={editorRef}
        onLoad={() => editorRef.current?.contentWindow?.focus()}
        title="עורך וידיאו"
        srcDoc={html}
        className="w-full h-full border-0"
        allow="autoplay; fullscreen; encrypted-media"
      />
    </div>
  );
}