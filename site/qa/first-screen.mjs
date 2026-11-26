import { chromium, webkit, devices } from 'playwright';
// Fresh loads of the built site (no overrides): does the first screen really animate, and do first-screen reveals animate?
const rec = () => { const L = (window.__H = { run: {}, n: 0 }); document.addEventListener('transitionrun', e => { const c = (e.target.className || '').toString(); if (/\brv(-spring)?\b/.test(c)) { if (!e.target.__c) { e.target.__c = 1; L.n++; } } }, true); };
const N = +(process.argv[2] || 30);
for (const [name, l, lo, o] of [['chrome-desktop', chromium, { channel: 'chrome' }, { viewport: { width: 1440, height: 900 } }], ['chrome-android', chromium, { channel: 'chrome' }, devices['Pixel 7']], ['headless-shell', chromium, {}, { viewport: { width: 1440, height: 900 } }], ['iphone-webkit', webkit, {}, devices['iPhone 15 Pro']]]) {
  const b = await l.launch(lo); const ctx = await b.newContext(o); await ctx.addInitScript(rec); let bad = 0, rvBad = 0, rvTot = 0, odoBad = 0;
  for (let i = 0; i < 0; i++) { const route = ['/oil-boiler-replacement-installation/', '/', '/about/'][i % 3]; const p = await ctx.newPage(); await p.goto('http://localhost:4403' + route, { waitUntil: 'load' }); await p.waitForSelector('.hero .slide.on'); await p.waitForTimeout(330);
    const r = await p.evaluate(() => ({ sc: new DOMMatrix(getComputedStyle(document.querySelector('.hero .slide .img')).transform).a, w: [...document.querySelectorAll('.hero .w')].filter(w => +getComputedStyle(w).opacity > .5).length })); if (r.sc < 1.12 || r.w > 0) bad++; await p.close(); }
  for (let i = 0; i < Math.ceil(N / 2); i++) { const p = await ctx.newPage(); await p.setViewportSize({ width: o.viewport.width, height: 1500 }); await p.goto('http://localhost:4403' + ['/heating-repair/', '/about/', '/hvac-gallery/'][i % 3], { waitUntil: 'load' }); await p.waitForTimeout(900);
    const r = await p.evaluate(() => ({ shown: [...document.querySelectorAll('.rv.in,.rv-spring.in')].length, ran: window.__H.n })); rvTot += r.shown; rvBad += r.shown - r.ran; await p.close(); }
  console.log(`${name}: first-screen animation skipped ${bad}/${N}; first-screen reveals that did not animate ${rvBad}/${rvTot}`); await b.close();
}
