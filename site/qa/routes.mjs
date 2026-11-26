import { chromium } from 'playwright';
const routes = ['/hvac-services-repair/','/heating-repair/','/gas-furnace-replacement-installation/','/oil-boiler-replacement-installation/','/heat-pump-equipment-installation-replacement/','/mini-split-installation/','/air-conditioning/','/hot-water-tank-replacement/','/hvac-maintenance/','/about/','/contact/','/free-hvac-consultation/','/hvac-gallery/','/online-payments/','/nope/'];
const O = '/Users/bobby/starwell-hvac-sites/companies/active-air/qa-shots/';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage(); const errs = [];
p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(p.url() + ' ' + m.text()));
for (const r of routes) {
  await p.goto('http://localhost:4403' + r, { waitUntil: 'networkidle' });
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 600) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(120); }
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(2600);
  await p.screenshot({ path: O + 'r' + r.replace(/\//g, '_') + '.jpg', fullPage: true, type: 'jpeg', quality: 45 });
  console.log(r, H);
}
console.log('errors', errs);
await b.close();
