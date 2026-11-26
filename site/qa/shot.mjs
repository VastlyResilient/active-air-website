import { chromium, webkit, devices } from 'playwright';
const [,, route = '/', tag = 'home', vw = '1440', eng = 'chromium'] = process.argv;
const O = '/Users/bobby/starwell-hvac-sites/companies/active-air/qa-shots/'; (await import('node:fs')).mkdirSync(O, { recursive: true });
const b = await (eng === 'webkit' ? webkit : chromium).launch();
const ctx = vw === 'iphone' ? await b.newContext({ ...devices['iPhone 15 Pro'] }) : await b.newContext({ viewport: { width: +vw, height: 900 } });
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
await p.goto('http://localhost:4403' + route, { waitUntil: 'networkidle' });
await p.waitForTimeout(2500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(150); }
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(2600);
await p.screenshot({ path: `${O}${tag}-${vw}.jpg`, fullPage: true, type: 'jpeg', quality: 55 });
console.log(tag, vw, 'H=' + H, 'errors:', errs.length ? errs : 'none');
await b.close();
