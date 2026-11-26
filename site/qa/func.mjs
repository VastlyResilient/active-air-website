// Functional QA: all routes, Chromium + WebKit iPhone. Overflow, off-screen controls, links, images, menu, accordion, carousel, form, fast/reverse scroll, reduced motion.
import { chromium, webkit, devices } from 'playwright';
const BASE = 'http://localhost:4403';
const routes = ['/', '/hvac-services-repair/', '/heating-repair/', '/gas-furnace-replacement-installation/', '/oil-boiler-replacement-installation/', '/heat-pump-equipment-installation-replacement/', '/mini-split-installation/', '/air-conditioning/', '/hot-water-tank-replacement/', '/hvac-maintenance/', '/about/', '/contact/', '/free-hvac-consultation/', '/hvac-gallery/', '/online-payments/'];
const fails = []; const F = m => { fails.push(m); console.log('FAIL', m); };
const P = m => console.log('PASS', m);
async function run(label, launcher, ctxOpts, widths) {
  const b = await launcher.launch();
  for (const w of widths) {
    const ctx = await b.newContext(typeof w === 'object' ? w : { ...ctxOpts, viewport: { width: w, height: 900 } });
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    for (const r of routes) {
      const res = await p.goto(BASE + r, { waitUntil: 'networkidle' });
      if (res.status() !== 200) F(`${label} ${r} status ${res.status()}`);
      const H = await p.evaluate(() => document.documentElement.scrollHeight);
      // fast scroll down then reverse
      for (let y = 0; y <= H; y += 900) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(60); }
      for (let y = H; y >= 0; y -= 1500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(40); }
      await p.waitForTimeout(1400);
      const chk = await p.evaluate(() => {
        const vw = document.documentElement.clientWidth, out = { over: [], off: [], hiddenRv: 0, brokenImg: [] };
        if (document.documentElement.scrollWidth > vw + 1) out.over.push('doc ' + document.documentElement.scrollWidth);
        document.querySelectorAll('main a, main button, main input, main select, main textarea, footer a').forEach(el => {
          const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
          if (!r.width || cs.visibility === 'hidden' || el.closest('[aria-hidden="true"]') || el.closest('.islide:not(.on)')) return;
          if (r.left < -1 || r.right > vw + 1) out.off.push((el.innerText || el.name || el.tagName).trim().slice(0, 30) + ' ' + Math.round(r.left) + '..' + Math.round(r.right));
        });
        document.querySelectorAll('.rv,.rv-spring').forEach(el => { if (!el.classList.contains('in')) out.hiddenRv++; });
        document.querySelectorAll('img').forEach(i => { if (i.complete && i.naturalWidth === 0 && i.loading !== 'lazy') out.brokenImg.push(i.src); });
        return out;
      });
      if (chk.over.length) F(`${label} w${typeof w === 'object' ? 'phone' : w} ${r} overflow ${chk.over}`);
      if (chk.off.length) F(`${label} w${typeof w === 'object' ? 'phone' : w} ${r} off-screen: ${chk.off.slice(0, 4).join(' | ')}`);
      if (chk.hiddenRv) F(`${label} ${r} ${chk.hiddenRv} reveals still hidden after fast scroll`);
      if (chk.brokenImg.length) F(`${label} ${r} broken images ${chk.brokenImg.slice(0, 3)}`);
    }
    if (errs.length) F(`${label} console errors: ${[...new Set(errs)].slice(0, 5).join(' | ')}`);
    await ctx.close();
  }
  // interactions on one context
  const ctx = await b.newContext(ctxOpts.isMobile ? ctxOpts : { viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  await p.goto(BASE + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(2500);
  const heroOn = await p.evaluate(() => !!document.querySelector('.slide.on') && getComputedStyle(document.querySelector('.slide.on .w')).opacity > .9);
  heroOn ? P(`${label} hero slide shows, headline revealed`) : F(`${label} hero headline not revealed`);
  const heroImg = await p.evaluate(() => { const i = document.querySelector('.slide.on img'); const r = i.getBoundingClientRect(); return i.naturalWidth > 0 && r.height >= document.querySelector('.hero').getBoundingClientRect().height - 2; });
  heroImg ? P(`${label} hero image loaded and fills the hero`) : F(`${label} hero image missing or short`);
  const cta = await p.evaluate(() => [...document.querySelectorAll('.slide.on .cta a')].map(a => a.getAttribute('href')));
  (cta.includes('tel:+12039456287') && cta.some(h => h.includes('free-hvac-consultation'))) ? P(`${label} first screen has Call + Book (${cta.join(', ')})`) : F(`${label} first screen CTAs ${cta}`);
  // carousel next
  await p.locator('#systems').scrollIntoViewIfNeeded(); await p.waitForTimeout(900);
  await p.locator('#systems .next').click(); await p.waitForTimeout(700);
  const cur = await p.locator('#systems .cur').textContent(); cur.trim() === '02' ? P(`${label} carousel next -> 02`) : F(`${label} carousel shows ${cur}`);
  // accordion
  const row = p.locator('#why .row').nth(1); await row.locator('button').click(); await p.waitForTimeout(700);
  (await row.getAttribute('class')).includes('on') ? P(`${label} accordion opens row 2`) : F(`${label} accordion`);
  const phOn = await p.evaluate(() => [...document.querySelector('#why .ph').children].findIndex(c => c.classList.contains('on')));
  phOn === 1 ? P(`${label} why photo follows row`) : F(`${label} why photo index ${phOn}`);
  // dock
  await p.evaluate(() => scrollTo(0, 2500)); await p.waitForTimeout(800);
  (await p.evaluate(() => document.querySelector('.dock').classList.contains('show'))) ? P(`${label} call dock visible after first screen`) : F(`${label} dock hidden`);
  // menu (phone)
  if (ctxOpts.isMobile) {
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(400);
    await p.locator('#burger').click(); await p.waitForTimeout(700);
    const h = await p.evaluate(() => document.getElementById('mmenu').getBoundingClientRect().height); h > 300 ? P(`${label} phone menu opens (${Math.round(h)}px)`) : F(`${label} menu height ${h}`);
    await p.keyboard.press('Escape'); await p.waitForTimeout(600);
  }
  // form: no fake success
  await p.goto(BASE + '/contact/', { waitUntil: 'networkidle' });
  await p.fill('input[name=name]', 'Test Person'); await p.fill('input[name=phone]', '203-555-0100');
  await p.click('.fcard .sub'); await p.waitForTimeout(400);
  (await p.locator('.fcard .msg').isVisible()) ? P(`${label} form shows preview notice, no fake success`) : F(`${label} form notice missing`);
  // reduced motion
  const rctx = await b.newContext({ ...(ctxOpts.isMobile ? ctxOpts : { viewport: { width: 1440, height: 900 } }), reducedMotion: 'reduce' });
  const rp = await rctx.newPage(); await rp.goto(BASE + '/', { waitUntil: 'networkidle' }); await rp.waitForTimeout(900);
  (await rp.evaluate(() => getComputedStyle(document.querySelector('.slide.on .w') || document.querySelector('.slide .w')).opacity)) > .9 ? P(`${label} reduced motion: headline visible`) : F(`${label} reduced motion headline hidden`);
  await b.close();
}
await run('chromium', chromium, {}, [360, 390, 768, 834, 1024, 1280, 1440, 1920]);
await run('webkit-iphone', webkit, { ...devices['iPhone 15 Pro'] }, [{ ...devices['iPhone 15 Pro'] }]);
console.log(fails.length ? `${fails.length} FAILURES` : 'NO FAILURES');
