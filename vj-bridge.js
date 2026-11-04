/*
  vj-bridge.js: connects a VJ page to the VJ menu in index.html.

  Put this line in the <head> of every VJ page (the path is relative to the VJ's own folder):
    <script src="../vj-bridge.js"></script>

  While the page runs inside index.html, a right-click, or a long press on a touch screen,
  asks index.html to open its VJ menu. index.html can inject this file by itself on a web
  server, but a page opened straight from disk (file://) only gets it through that line.
  Opened on its own, outside index.html, the page is left untouched.
*/
(() => {
  'use strict';
  if (window.parent === window || window.__vjBridge) return;
  window.__vjBridge = true;

  const openMenu = () => window.parent.postMessage({ vjBridge: 'menu' }, '*');
  const closest = (node, selector) => (node instanceof Element ? node.closest(selector) : null);
  // Text fields keep the browser's own menu (paste, select all…).
  const EDITABLE = 'input, textarea, select, [contenteditable]:not([contenteditable="false"])';
  // Holding a control (a slider, a seek bar, a button) is part of using it, so it doesn't open the menu.
  const CONTROL = `${EDITABLE}, button, a[href], label, summary, [role="button"], [role="slider"]`;

  // A long press shouldn't start selecting text or pop up the iOS callout (text fields keep both).
  const style = document.createElement('style');
  style.textContent =
    'html{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}' +
    'input,textarea,[contenteditable]{-webkit-touch-callout:default;-webkit-user-select:text;user-select:text}';
  (document.head || document.documentElement).append(style);

  // ---------- long press (touch, pen) ----------
  const HOLD_MS = 550; // about the browser's own long-press delay
  const SLOP = 12;     // px a finger may drift and still count as holding still
  let lastType = 'mouse';
  let hold = null;      // the touch being held still: { id, type, x, y, target, timer }
  let heldId = null;    // the touch whose long press opened the menu; the VJ sees none of its remaining events
  let swallowUntil = 0; // nor the touchend / click the browser sends when that finger lifts
  let relaying = false; // true while our own pointercancel is on its way to the VJ

  const cancelHold = () => { if (hold) { clearTimeout(hold.timer); hold = null; } };
  function fireHold() {
    const { id, type, target } = hold;
    cancelHold();
    heldId = id;
    // Tell the VJ this touch is over, the way the browser does when it takes over a gesture,
    // so nothing in it stays "pressed" while the menu is open.
    relaying = true;
    try {
      target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: true, pointerId: id, pointerType: type, isPrimary: true }));
    } finally {
      relaying = false;
    }
    openMenu();
  }

  addEventListener('pointerdown', (e) => {
    lastType = e.pointerType;
    cancelHold();
    heldId = null;
    if (e.pointerType === 'mouse' || !e.isPrimary || closest(e.target, CONTROL)) return;
    hold = { id: e.pointerId, type: e.pointerType, x: e.clientX, y: e.clientY, target: e.target, timer: setTimeout(fireHold, HOLD_MS) };
  }, true);

  addEventListener('pointermove', (e) => {
    if (e.pointerId === heldId) { e.stopImmediatePropagation(); return; }
    if (hold && e.pointerId === hold.id && Math.hypot(e.clientX - hold.x, e.clientY - hold.y) > SLOP) cancelHold();
  }, true);

  const lift = (e) => {
    if (hold && e.pointerId === hold.id) cancelHold();
    else if (!relaying && e.pointerId === heldId) {
      heldId = null;
      e.stopImmediatePropagation();
      swallowUntil = performance.now() + 700;
    }
  };
  addEventListener('pointerup', lift, true);
  addEventListener('pointercancel', lift, true);
  addEventListener('touchend', (e) => { if (performance.now() < swallowUntil) e.preventDefault(); }, { capture: true, passive: false });
  addEventListener('click', (e) => {
    if (performance.now() < swallowUntil) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);

  // ---------- right-click ----------
  addEventListener('contextmenu', (e) => {
    // Android fires this for a long press too; there, controls keep the browser's behaviour.
    if (closest(e.target, lastType === 'mouse' ? EDITABLE : CONTROL)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (hold) fireHold();
    else openMenu();
  }, true);

  // The right button belongs to the menu: the VJ never sees it as a press or a click.
  for (const type of ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'auxclick']) {
    addEventListener(type, (e) => {
      if (e.button === 2 && !closest(e.target, EDITABLE)) e.stopImmediatePropagation();
    }, true);
  }
})();
