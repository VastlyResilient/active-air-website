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
