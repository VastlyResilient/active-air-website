// Measure ConsultPro sections the library rebuild does not cover (why-us, team, CTA, footer, contact) + header nav.
import { chromium } from 'playwright';
import fs from 'node:fs';
const out = {};
const b = await chromium.launch();
for (const [vw, vh, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
  for (const url of ['https://consult-pro.framer.website/', 'https://consult-pro.framer.website/contact-us']) {
    const p = await (await b.newContext({ viewport: { width: vw, height: vh } })).newPage();
    await p.goto(url, { waitUntil: 'networkidle' });
    for (let y = 0; y < 12000; y += 500) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(120); }
    await p.waitForTimeout(1500);
    const data = await p.evaluate(() => {
      const res = [];
      const want = el => { const cs = getComputedStyle(el); return cs; };
      document.querySelectorAll('h1,h2,h3,h4,p,a,button,input,textarea,select,label,img,section,footer,header,nav').forEach(el => {
        const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return;
        const cs = want(el);
        const t = (el.innerText || el.value || el.placeholder || el.alt || '').trim().slice(0, 60);
        res.push({ tag: el.tagName, id: el.id || undefined, t, x: Math.round(r.left), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height),
          f: `${cs.fontWeight} ${cs.fontSize}/${cs.lineHeight} ${cs.fontFamily.split(',')[0]}`, ls: cs.letterSpacing, c: cs.color, bg: cs.backgroundColor !== 'rgba(0, 0, 0, 0)' ? cs.backgroundColor : undefined,
          br: cs.borderRadius !== '0px' ? cs.borderRadius : undefined, bd: cs.borderTopWidth !== '0px' ? cs.border : undefined, sh: cs.boxShadow !== 'none' ? cs.boxShadow.slice(0, 80) : undefined });
      });
      return { H: document.documentElement.scrollHeight, res };
    });
    out[tag + ' ' + url.split('/').pop()] = data;
    await p.screenshot({ path: `/Users/bobby/starwell-hvac-sites/companies/active-air/references/live-${tag}-${url.split('/').pop() || 'home'}.jpg`, fullPage: true, type: 'jpeg', quality: 60 });
    await p.context().close();
  }
}
await b.close();
fs.writeFileSync('/Users/bobby/starwell-hvac-sites/companies/active-air/references/consultpro-measure.json', JSON.stringify(out, null, 0));
console.log(Object.entries(out).map(([k, v]) => k + ' H=' + v.H + ' n=' + v.res.length).join('\n'));
