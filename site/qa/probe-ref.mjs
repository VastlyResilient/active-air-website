import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [vw, vh] of [[1440, 900], [390, 844]]) {
const p = await (await b.newContext({ viewport: { width: vw, height: vh } })).newPage();
await p.goto('https://consult-pro.framer.website/', { waitUntil: 'networkidle' });
for (let y = 0; y < 10000; y += 500) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(100); }
const r = await p.evaluate(() => {
  const out = [];
  const pick = (sel, label) => { const el = typeof sel === 'string' ? document.querySelector(sel) : sel; if (!el) return out.push(label + ' MISSING'); const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    out.push(`${label}: ${Math.round(r.left)},${Math.round(r.top + scrollY)} ${Math.round(r.width)}x${Math.round(r.height)} bg=${cs.backgroundColor} pad=${cs.padding} br=${cs.borderRadius} bd=${cs.border} sh=${cs.boxShadow.slice(0,60)} op=${cs.opacity}`); };
  const h3s = [...document.querySelectorAll('h3')];
  const row = h3s.find(h => h.textContent.includes('Strategic Planning'));
  let el = row; for (let i = 0; i < 6 && el; i++) { pick(el, 'row-anc' + i); el = el.parentElement; }
  const row2 = h3s.find(h => h.textContent.includes('Data Driven')); el = row2; for (let i = 0; i < 4 && el; i++) { pick(el, 'row2-anc' + i); el = el.parentElement; }
  const ast = [...document.querySelectorAll('img')].find(i => { const r = i.getBoundingClientRect(); return r.width > 90 && r.width < 100; }); if (ast) { pick(ast, 'asterisk'); out.push('ast src ' + ast.src); }
  const team = [...document.querySelectorAll('a')].find(a => a.textContent.includes('Michael Carter')); if (team) { [...team.querySelectorAll('div')].slice(0, 12).forEach((d, i) => pick(d, 'team-div' + i)); out.push('team href ' + team.getAttribute('href')); }
  const cta = [...document.querySelectorAll('h2')].find(h => h.textContent.includes('Ready')); el = cta; for (let i = 0; i < 4 && el; i++) { pick(el, 'cta-anc' + i); el = el.parentElement; }
  const ft = document.querySelector('footer'); if (ft) [...ft.querySelectorAll('div')].filter(d => d.getBoundingClientRect().height <= 2).forEach((d, i) => pick(d, 'foot-line' + i));
  const icons = [...document.querySelectorAll('img')].filter(i => i.getBoundingClientRect().width === 41 || i.alt === 'Sparkle icon').slice(0, 2).map(i => i.src); out.push('icons ' + icons.join(' '));
  return out;
});
console.log('==== ' + vw); console.log(r.join('\n'));
await p.context().close();
}
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto('https://consult-pro.framer.website/contact-us', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
console.log(await p.evaluate(() => { const out = []; const f = document.querySelector('form') || document.querySelector('input').closest('div'); let el = document.querySelector('input'); for (let i = 0; i < 7 && el; i++) { const cs = getComputedStyle(el), r = el.getBoundingClientRect(); out.push(`inp-anc${i} ${el.tagName} ${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${Math.round(r.height)} bg=${cs.backgroundColor} pad=${cs.padding} br=${cs.borderRadius} bd=${cs.border}`); el = el.parentElement; }
 const hr = [...document.querySelectorAll('div')].filter(d => { const r = d.getBoundingClientRect(); return r.height <= 2 && r.width > 200; }).map(d => { const r = d.getBoundingClientRect(), cs = getComputedStyle(d); return `line ${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}x${r.height} ${cs.backgroundColor}`; }); return out.concat(hr).join('\n'); }));
await b.close();
