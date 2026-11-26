// Phone-vs-desktop motion parity: every scroll effect is measured the same way on desktop Chrome, WebKit iPhone and Chrome Android,
// with the same slow scroll, and the numbers are compared. Run: node parity.mjs  (BASE=http://localhost:4403)
import { chromium, webkit, devices } from 'playwright';
import fs from 'node:fs';
const BASE = process.env.BASE || 'http://localhost:4403';
const routes = ['/', '/hvac-services-repair/', '/heating-repair/', '/gas-furnace-replacement-installation/', '/oil-boiler-replacement-installation/', '/heat-pump-equipment-installation-replacement/', '/mini-split-installation/', '/air-conditioning/', '/hot-water-tank-replacement/', '/hvac-maintenance/', '/about/', '/contact/', '/free-hvac-consultation/', '/hvac-gallery/', '/online-payments/'];
const profiles = [
  ['desktop-chrome-1440', chromium, { viewport: { width: 1440, height: 900 } }],
  ['iphone-webkit', webkit, devices['iPhone 15 Pro']],
  ['android-chrome', chromium, devices['Pixel 7']],
];

// Runs before the site's own script: logs when each reveal fires, where the element was, and whether it really animated.
const recorder = () => {
  const L = (window.__L = { rev: [], runs: {}, t0: 0 });
  const tag = el => el.dataset.q;
  document.addEventListener('transitionrun', e => { const q = e.target.dataset && e.target.dataset.q; if (q) (L.runs[q] = L.runs[q] || []).push(e.propertyName); }, true);
  document.addEventListener('DOMContentLoaded', () => {
    const mark = (sel, pre) => document.querySelectorAll(sel).forEach((el, i) => { if (!el.dataset.q) el.dataset.q = pre + i; });
    mark('.rv,.rv-spring', 'r'); mark('.ind', 'ind'); mark('.ind .tw', 'tw'); mark('.pager-wrap', 'pg'); mark('.islide .bgi', 'bgi');
    const hs = document.querySelector('.hero .slide');
    if (hs) { const samp = () => { const m = new DOMMatrix(getComputedStyle(hs.querySelector('.img')).transform); const ws = [...hs.querySelectorAll('.w')].map(w => +getComputedStyle(w).opacity); const o = sel => { const e = hs.querySelector(sel); return e ? +(+getComputedStyle(e).opacity).toFixed(2) : null; };
        return { scale: +m.a.toFixed(3), words: ws.length, wordsShown: ws.filter(v => v > .98).length, wordsPartial: ws.filter(v => v > .02 && v < .98).length, rate: o('.rate'), desc: o('.desc'), cta: o('.cta') }; };
      const hm = new MutationObserver(() => { if (!hs.classList.contains('on') || L.hero) return; L.hero = { at: Math.round(performance.now()) }; [[300, 't03'], [1700, 't17'], [4000, 't40'], [9000, 't90']].forEach(([ms, k]) => setTimeout(() => { L.hero[k] = samp(); }, ms)); });
      hm.observe(hs, { attributes: true, attributeFilter: ['class'] }); }
    const mo = new MutationObserver(ms => ms.forEach(m => {
      const el = m.target; if (!/^r\d/.test(el.dataset.q || '') || !el.classList.contains('in') || el.__seen) return; el.__seen = 1;
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      const rec = { q: el.dataset.q, cls: el.className.replace(/\s*\bin\b/, '').trim().slice(0, 30), topFrac: +(r.top / innerHeight).toFixed(2), y: Math.round(scrollY), dur: cs.transitionDuration, delay: cs.transitionDelay, mid: null };
      L.rev.push(rec);
      setTimeout(() => { const c = getComputedStyle(el); rec.mid = +(+c.opacity).toFixed(2); rec.midT = c.transform; }, 250 + (parseFloat(cs.transitionDelay) || 0) * 1000);
    }));
    document.querySelectorAll('.rv,.rv-spring').forEach(el => mo.observe(el, { attributes: true, attributeFilter: ['class'] }));
  });
};

const slowScroll = async (p, to, step = 110, wait = 90) => {
  let y = await p.evaluate(() => scrollY); const dir = to > y ? 1 : -1;
  while ((to - y) * dir > 0) { y += dir * step; if ((to - y) * dir < 0) y = to; await p.evaluate(v => scrollTo(0, v), y); await p.waitForTimeout(wait); }
};
const topOf = (p, sel) => p.evaluate(s => { const e = document.querySelector(s); return e ? e.getBoundingClientRect().top + scrollY : null; }, sel);

const out = {};
await Promise.all(profiles.map(async ([name, launcher, opts]) => {
  const b = await launcher.launch(); const ctx = await b.newContext(opts); await ctx.addInitScript(recorder);
  const R = (out[name] = { routes: {} });
  for (const route of routes) {
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto(BASE + route, { waitUntil: 'load' });
    const r = (R.routes[route] = {});
    // ---- hero: zoom and word-by-word reveal, sampled in the page at exact offsets from the moment the slide turns on
    if (await p.$('.hero .slide')) { await p.waitForFunction(() => window.__L.hero && window.__L.hero.t90, null, { timeout: 30000 }); r.hero = await p.evaluate(() => window.__L.hero); }
    const H = await p.evaluate(() => document.documentElement.scrollHeight), vh = await p.evaluate(() => innerHeight);
    const before = await p.evaluate(() => [...document.querySelectorAll('.rv,.rv-spring')].filter(e => e.getBoundingClientRect().top > innerHeight && !e.classList.contains('in') && +getComputedStyle(e).opacity === 0).length);
    const below = await p.evaluate(() => [...document.querySelectorAll('.rv,.rv-spring')].filter(e => e.getBoundingClientRect().top > innerHeight).length);
    r.hiddenBelowFold = `${before}/${below}`;
    // ---- dock at the top
    r.dockTop = await p.evaluate(() => { const d = document.querySelector('.dock'); return d ? d.classList.contains('show') : null; });
    // ---- slow scroll to the end
    await slowScroll(p, H - vh, 110, 60);
    await p.waitForTimeout(1800);
    const L = await p.evaluate(() => window.__L);
    const total = await p.evaluate(() => document.querySelectorAll('.rv,.rv-spring').length);
    const rv = L.rev;
    r.reveals = { total, fired: rv.length, early: rv.filter(x => x.topFrac > 1.001).length, animated: rv.filter(x => x.mid !== null && x.mid > 0.02 && x.mid < 0.999).length,
      ranBoth: rv.filter(x => (L.runs[x.q] || []).includes('opacity') && (L.runs[x.q] || []).includes('transform')).length,
      durs: [...new Set(rv.map(x => x.dur + ' / ' + x.delay))], topFracMax: Math.max(0, ...rv.map(x => x.topFrac)), topFracMin: Math.min(9, ...rv.map(x => x.topFrac)),
      stillHidden: await p.evaluate(() => [...document.querySelectorAll('.rv,.rv-spring')].filter(e => +getComputedStyle(e).opacity < 0.99).length) };
    r.dockEnd = await p.evaluate(() => { const d = document.querySelector('.dock'); return d ? d.classList.contains('show') : null; });
    // ---- reverse scroll: reveals stay, dock comes back in the middle and goes at the top
    await slowScroll(p, Math.round(H * 0.45), 220, 60); await p.waitForTimeout(700);
    r.dockMid = await p.evaluate(() => { const d = document.querySelector('.dock'); return d ? { show: d.classList.contains('show'), op: +getComputedStyle(d).opacity, over: !!document.querySelector('[data-nodock]') && [...document.querySelectorAll('[data-nodock]')].some(e => { const b = e.getBoundingClientRect(); return b.top < innerHeight * 0.6 && b.bottom > 0; }) } : null; });
    r.afterReverseHidden = await p.evaluate(() => [...document.querySelectorAll('.rv,.rv-spring')].filter(e => +getComputedStyle(e).opacity < 0.99).length);
    // ---- odometers
    r.odo = await p.evaluate(() => [...document.querySelectorAll('.odo')].map(o => { const cols = [...o.querySelectorAll('.col div')]; return { v: o.dataset.v, cols: cols.length, rolled: cols.filter(c => new DOMMatrix(getComputedStyle(c).transform).f < -10).length, dur: cols[0] ? getComputedStyle(cols[0]).transitionDuration : '' }; }));
    // ---- carousel
    if (await p.$('.ind')) {
      const t = await topOf(p, '.ind'); await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(200);
      const pre = await p.evaluate(() => { const i = document.querySelector('.ind'); return { in: i.classList.contains('in') }; });
      await slowScroll(p, Math.round(t - vh * 0.15), 260, 40); await p.waitForTimeout(2200);
      const c0 = await p.evaluate(() => { const i = document.querySelector('.ind'), b = i.querySelector('.islide.on .bgi'), tw = i.querySelector('.tw'), pg = i.querySelector('.pager-wrap'), L = window.__L;
        return { in: i.classList.contains('in'), in2: i.classList.contains('in2'), slides: i.querySelectorAll('.islide').length, cur: i.querySelector('.cur').textContent, bgScale: +new DOMMatrix(getComputedStyle(b).transform).a.toFixed(2), bgOp: +getComputedStyle(b).opacity,
          bgDur: getComputedStyle(b).transitionDuration, twOp: tw ? +getComputedStyle(tw).opacity : null, twDur: tw ? getComputedStyle(tw).transitionDuration : null, pgOp: pg ? +getComputedStyle(pg).opacity : null, bgRuns: (L.runs.bgi0 || []).join(','), twRuns: (L.runs.tw0 || []).join(','),
          blurLayers: i.querySelectorAll('.pblur div').length, blurOn: [...i.querySelectorAll('.pblur div')].filter(d => (getComputedStyle(d).backdropFilter || getComputedStyle(d).webkitBackdropFilter || '').includes('blur')).length,
          slideFade: getComputedStyle(i.querySelector('.islide')).transitionDuration }; });
      await p.waitForTimeout(5400);
      const cur1 = await p.evaluate(() => document.querySelector('.ind .cur').textContent);
      await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(6200);
      const cur2 = await p.evaluate(() => document.querySelector('.ind .cur').textContent);
      // arrows
      await p.evaluate(v => scrollTo(0, v), Math.round(t - vh * 0.15)); await p.waitForTimeout(300);
      const nx = await p.evaluate(() => { const i = document.querySelector('.ind'), a = i.querySelector('.cur').textContent; i.querySelector('.next').click(); return [a, i.querySelector('.cur').textContent]; });
      r.carousel = { preIn: pre.in, ...c0, autoplayAdvanced: cur1 !== c0.cur, pausedOffScreen: cur2 === cur1, nextWorks: nx[0] !== nx[1] };
    }
    // ---- accordion with crossfading photo
    if (await p.$('.acc[data-ph]')) {
      const t = await topOf(p, '.acc[data-ph]'); await p.evaluate(v => scrollTo(0, v), Math.round(t - 120)); await p.waitForTimeout(900);
      const btn = p.locator('.acc[data-ph] .row button').nth(1);
      const h0 = await p.evaluate(() => document.querySelectorAll('.acc[data-ph] .row')[1].querySelector('.body').getBoundingClientRect().height);
      if (opts.hasTouch) await btn.tap(); else await btn.click();
      await p.waitForTimeout(280);
      const mid = await p.evaluate(() => { const a = document.querySelector('.acc[data-ph]'), ph = document.getElementById(a.dataset.ph); return { h: a.querySelectorAll('.row')[1].querySelector('.body').getBoundingClientRect().height, phOp: [...ph.children].map(c => +(+getComputedStyle(c).opacity).toFixed(2)) }; });
      await p.waitForTimeout(900);
      const end = await p.evaluate(() => { const a = document.querySelector('.acc[data-ph]'), ph = document.getElementById(a.dataset.ph); return { h: a.querySelectorAll('.row')[1].querySelector('.body').getBoundingClientRect().height, on: [...a.querySelectorAll('.row')].map(x => +x.classList.contains('on')).join(''), phOn: [...ph.children].map(c => +c.classList.contains('on')).join(''), phDur: getComputedStyle(ph.children[0]).transitionDuration, bodyDur: getComputedStyle(a.querySelector('.body')).transitionDuration, phVisible: (() => { const b = ph.getBoundingClientRect(); return b.top < innerHeight && b.bottom > 0; })() }; });
      r.accordion = { h0: Math.round(h0), hMid: Math.round(mid.h), hEnd: Math.round(end.h), animatedOpen: mid.h > h0 + 2 && mid.h < end.h - 2, photoMid: mid.phOp.join(' '), ...end };
    }
    // ---- rotating asterisk
    if (await p.$('.ast')) {
      const t = await topOf(p, '.ast'); await p.evaluate(v => scrollTo(0, v), Math.round(t - vh / 2)); await p.waitForTimeout(500);
      const a1 = await p.evaluate(() => document.querySelector('.ast').style.transform); await p.waitForTimeout(1000);
      const a2 = await p.evaluate(() => document.querySelector('.ast').style.transform);
      await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(500);
      const b1 = await p.evaluate(() => document.querySelector('.ast').style.transform); await p.waitForTimeout(600);
      const b2 = await p.evaluate(() => document.querySelector('.ast').style.transform);
      const d = (parseFloat(a2.slice(7)) - parseFloat(a1.slice(7)) + 360) % 360;
      r.asterisk = { degPerSec: Math.round(d), stopsOffScreen: b1 === b2 };
    }
    r.errors = errs.length;
    await p.close();
  }
  // ---- slow connection: the script arrives 1.5 s late. Nothing on the first screen may flash visible and then hide.
  { const p = await ctx.newPage(); await p.route('**/js/site.js', async rt => { await new Promise(r => setTimeout(r, 1500)); rt.continue(); });
    await p.goto(BASE + '/contact/', { waitUntil: 'commit' }); await p.waitForSelector('.rv,.rv-spring', { state: 'attached' }); await p.waitForTimeout(700);
    const early = await p.evaluate(() => [...document.querySelectorAll('.rv,.rv-spring')].map(e => +getComputedStyle(e).opacity));
    await p.waitForTimeout(3600);
    const late = await p.evaluate(() => [...document.querySelectorAll('.rv,.rv-spring')].filter(e => e.getBoundingClientRect().top < innerHeight - 60).map(e => +getComputedStyle(e).opacity));
    R.slowLoad = { firstScreenItems: early.length, /* all reveal items on the page; none may be visible before the script arrives */ shownBeforeScript: early.filter(v => v > 0.01).length, shownAfter: late.filter(v => v > 0.99).length + '/' + late.length }; await p.close(); }
  // ---- real touch flings (Chrome only: finger gestures through the browser's own input pipeline), fast down then back up
  if (name.startsWith('android')) { const p = await ctx.newPage(); await p.goto(BASE + '/', { waitUntil: 'load' }); await p.waitForTimeout(1500);
    const cdp = await ctx.newCDPSession(p); const H = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let i = 0; i < Math.ceil(H / 1500) + 2; i++) await cdp.send('Input.synthesizeScrollGesture', { x: 200, y: 600, yDistance: -1500, speed: 6000, gestureSourceType: 'touch' });
    await p.waitForTimeout(1900);
    const down = await p.evaluate(() => ({ y: Math.round(scrollY), max: document.documentElement.scrollHeight - innerHeight, hidden: [...document.querySelectorAll('.rv,.rv-spring')].filter(e => +getComputedStyle(e).opacity < 0.99).length, early: window.__L.rev.filter(x => x.topFrac > 1.001).length, fired: window.__L.rev.length }));
    for (let i = 0; i < Math.ceil(H / 1500) + 2; i++) await cdp.send('Input.synthesizeScrollGesture', { x: 200, y: 300, yDistance: 1500, speed: 6000, gestureSourceType: 'touch' });
    await p.waitForTimeout(900);
    const up = await p.evaluate(() => ({ y: Math.round(scrollY), hidden: [...document.querySelectorAll('.rv,.rv-spring')].filter(e => +getComputedStyle(e).opacity < 0.99).length, dock: document.querySelector('.dock').classList.contains('show') }));
    R.touchFling = { down, up }; await p.close(); }
  await b.close();
  // ---- no script at all: the page is simply shown
  { const b2 = await launcher.launch(); const c2 = await b2.newContext({ ...opts, javaScriptEnabled: false }); const p = await c2.newPage(); await p.goto(BASE + '/', { waitUntil: 'load' });
    R.noScript = await p.evaluate(() => 0).catch(() => null); // evaluate is unavailable without JS in some engines; use locators below
    const op = async sel => { const h = await p.$(sel); return h ? +(await h.evaluate(e => getComputedStyle(e).opacity).catch(() => -1)) : null; };
    R.noScript = { slide: await op('.hero .slide'), desc: await op('.hero .desc'), cta: await op('.hero .cta'), firstReveal: await op('.rv'), carouselImg: await op('.islide .bgi') }; await b2.close(); }
}));
fs.writeFileSync(new URL('./parity.json', import.meta.url), JSON.stringify(out, null, 1));

// ---- compare
const D = profiles[0][0], Ms = profiles.slice(1).map(x => x[0]); let bad = 0;
const say = (ok, m) => { if (!ok) bad++; console.log((ok ? 'SAME ' : 'DIFF ') + m); };
for (const route of routes) for (const M of Ms) {
  const d = out[D].routes[route], m = out[M].routes[route], tagp = `${M} ${route}`;
  if (d.hero) { const f = h => `zoom ${h.t03.scale > 1.1 ? 'starts in' : 'NO START'}→${h.t40.scale > 1.001 && h.t40.scale < 1.15 ? 'moving' : 'NOT MOVING'}→${h.t90.scale === 1 ? 'settles' : 'NOT SETTLED ' + h.t90.scale}; words ${h.t03.wordsShown}→${h.t17.wordsShown + h.t17.wordsPartial > 0 && h.t17.wordsShown < h.t17.words ? 'one by one' : 'NOT STAGGERED'}→${h.t40.wordsShown}/${h.t40.words}; rate/desc/cta ${h.t03.rate ?? '-'}/${h.t03.desc}/${h.t03.cta}→${h.t40.rate ?? '-'}/${h.t40.desc}/${h.t40.cta}`;
    const near = (a, b, t) => Math.abs(a - b) <= t; const dh = d.hero, mh = m.hero;
    say(!/NO |NOT/.test(f(mh)) && near(dh.t03.scale, mh.t03.scale, .01) && near(dh.t17.scale, mh.t17.scale, .012) && near(dh.t40.scale, mh.t40.scale, .012) && mh.t90.scale === 1 && near(dh.t17.wordsShown, mh.t17.wordsShown, 1) && mh.t40.wordsShown === mh.t40.words,
      `${tagp} hero: ${f(mh)} | zoom at 0.3/1.7/4/9 s ${mh.t03.scale}/${mh.t17.scale}/${mh.t40.scale}/${mh.t90.scale} (desktop ${dh.t03.scale}/${dh.t17.scale}/${dh.t40.scale}/${dh.t90.scale}); words shown at 1.7 s ${mh.t17.wordsShown}+${mh.t17.wordsPartial} of ${mh.t17.words} (desktop ${dh.t17.wordsShown}+${dh.t17.wordsPartial})`); }
  const rd = d.reveals, rm = m.reveals;
  say(rm.total === rd.total && rm.fired === rm.total && rm.early === 0 && rm.stillHidden === 0 && rm.ranBoth === rm.fired && rd.ranBoth === rd.fired && m.afterReverseHidden === 0 && rd.durs.sort().join('|') === rm.durs.sort().join('|') && m.hiddenBelowFold.split('/')[0] === m.hiddenBelowFold.split('/')[1],
    `${tagp} reveals: ${rm.fired}/${rm.total} fired on entering view (desktop ${rd.fired}/${rd.total}), early ${rm.early}, animated ${rm.ranBoth}, fired at ${rm.topFracMin}–${rm.topFracMax} of screen (desktop ${rd.topFracMin}–${rd.topFracMax}), timings ${rm.durs.join(' ; ')}`);
  say(JSON.stringify(d.odo) === JSON.stringify(m.odo) && m.odo.every(o => o.rolled === o.cols), `${tagp} counters: ${m.odo.map(o => `${o.v} ${o.rolled}/${o.cols} ${o.dur}`).join(', ') || 'none'}`);
  if (d.carousel) { const k = c => JSON.stringify({ ...c, cur: 0, bgRuns: [...new Set(c.bgRuns.split(','))].sort().join(), twRuns: [...new Set(c.twRuns.split(','))].sort().join() }); say(k(d.carousel) === k(m.carousel) && m.carousel.autoplayAdvanced && m.carousel.pausedOffScreen && m.carousel.blurOn === 8, `${tagp} carousel: ${JSON.stringify(m.carousel)}`); if (k(d.carousel) !== k(m.carousel)) console.log('     desktop: ' + JSON.stringify(d.carousel)); }
  if (d.accordion) { const k = a => JSON.stringify({ a: a.animatedOpen, on: a.on, ph: a.phOn, d1: a.phDur, d2: a.bodyDur }); say(k(d.accordion) === k(m.accordion) && m.accordion.animatedOpen, `${tagp} accordion: ${JSON.stringify(m.accordion)}`); }
  if (d.asterisk) say(Math.abs(d.asterisk.degPerSec - m.asterisk.degPerSec) <= 12 && m.asterisk.stopsOffScreen, `${tagp} asterisk: ${m.asterisk.degPerSec}°/s (desktop ${d.asterisk.degPerSec}), stops off screen ${m.asterisk.stopsOffScreen}`);
  say(m.dockTop === d.dockTop && m.dockEnd === d.dockEnd && JSON.stringify(m.dockMid && m.dockMid.show === !m.dockMid.over) === JSON.stringify(d.dockMid && d.dockMid.show === !d.dockMid.over), `${tagp} dock: top ${m.dockTop}, middle ${JSON.stringify(m.dockMid)}, end ${m.dockEnd}`);
  say(m.errors === 0, `${tagp} script errors ${m.errors}`);
}
for (const k of Object.keys(out)) { const o = out[k];
  say(o.slowLoad.firstScreenItems > 0 && o.slowLoad.shownBeforeScript === 0 && o.slowLoad.shownAfter.split('/')[0] === o.slowLoad.shownAfter.split('/')[1], `${k} slow connection (script 1.5 s late): ${JSON.stringify(o.slowLoad)}`);
  say(o.noScript.slide === 1 && o.noScript.desc === 1 && o.noScript.cta === 1 && o.noScript.firstReveal === 1 && o.noScript.carouselImg === 1, `${k} no script: ${JSON.stringify(o.noScript)}`);
  if (o.touchFling) say(o.touchFling.down.hidden === 0 && o.touchFling.down.early === 0 && o.touchFling.up.hidden === 0 && o.touchFling.down.y > o.touchFling.down.max - 5 && o.touchFling.up.y === 0 && o.touchFling.up.dock === false, `${k} real touch flings: ${JSON.stringify(o.touchFling)}`); }
console.log(bad ? `\n${bad} DIFFERENCES` : '\nPARITY: phone matches desktop on every measured effect');
