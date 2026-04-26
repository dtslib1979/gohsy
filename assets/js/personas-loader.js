// assets/js/personas-loader.js
// fetch data/personas.json → window.GOHSY_PERSONAS 노출
(async () => {
  try {
    const r = await fetch('data/personas.json');
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    window.GOHSY_PERSONAS = await r.json();
    console.log('[GOHSY] personas loaded:', window.GOHSY_PERSONAS.personas.length, 'personas');
  } catch (e) {
    console.warn('[GOHSY] personas load failed:', e.message);
    window.GOHSY_PERSONAS = null;
  }
})();
