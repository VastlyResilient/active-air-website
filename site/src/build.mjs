// node src/build.mjs  -> dist/   (routes come from content-activeair.mjs)
import fs from 'node:fs';
import path from 'node:path';
import * as T from './templates.mjs';

const here = path.dirname(new URL(import.meta.url).pathname);
const rootDir = path.resolve(here, '..');
const out = path.join(rootDir, 'dist');
const C = await import('./content-activeair.mjs');
const s = C.site;

fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(path.join(rootDir, 'public'), out, { recursive: true });

const routes = [];
for (const [route, p] of Object.entries(C.pages)) {
  const html = T.page(s, p, p.body(T, s));
  const f = path.join(out, route, route.endsWith('.html') ? '' : 'index.html');
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
  routes.push(route);
}
if (C.extraFiles) for (const [f, body] of Object.entries(C.extraFiles(routes))) fs.writeFileSync(path.join(out, f), body);

const gaps = [];
for (const r of routes) {
  const html = fs.readFileSync(path.join(out, r, r.endsWith('.html') ? '' : 'index.html'), 'utf8');
  for (const m of html.matchAll(/class="gap">([^<]+)<|<!--gap:(.+?)-->/g)) gaps.push(`/${r} · ${m[1] || m[2]}`);
}
fs.writeFileSync(path.join(rootDir, 'gaps.txt'), [...new Set(gaps)].join('\n') + '\n');
console.log(`built ${routes.length} routes -> ${out}; ${new Set(gaps).size} open gaps`);

// Test hosting under a sub-path (GitHub Pages project site): BASE=/active-air-website node src/build.mjs
// Prefixes every root-relative link/asset and marks the copy noindex so it never competes with the real domain.
const BASE = (process.env.BASE || '').replace(/\/$/, '');
if (BASE) {
  const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
  for (const f of walk(out)) {
    if (f.endsWith('.html')) {
      let h = fs.readFileSync(f, 'utf8');
      h = h.replace(/(href|src|action|content)="\/(?!\/)/g, `$1="${BASE}/`)
           .replace(/srcset="([^"]+)"/g, (m, v) => `srcset="${v.replace(/(^|,\s*)\/(?!\/)/g, `$1${BASE}/`)}"`)
           .replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="robots" content="noindex, nofollow">');
      fs.writeFileSync(f, h);
    } else if (f.endsWith('.css')) {
      fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace(/url\(\/(?!\/)/g, `url(${BASE}/`));
    }
  }
  fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  fs.rmSync(path.join(out, '_redirects'), { force: true });
  fs.writeFileSync(path.join(out, '.nojekyll'), '');
  console.log(`prefixed for ${BASE} (noindex test copy)`);
}
