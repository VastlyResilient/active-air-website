// Local-only receiver (127.0.0.1): the Flow tab sends generated images here so they land in media/flow/.
// Accepts raw POST bodies (?name=) or a form POST with fields name + data (base64 or data: URL).
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const dir = path.join(path.dirname(new URL(import.meta.url).pathname), 'flow');
const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Private-Network': 'true' };
const clean = n => (n || 'img').replace(/[^a-z0-9._-]/gi, '_');
http.createServer((req, res) => {
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
  const u = new URL(req.url, 'http://x');
  if (req.method === 'GET' && u.pathname === '/rx') { res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(`<!doctype html><title>rx</title><p id=s>ready</p><script>
addEventListener('message', async e => { if (e.origin !== 'https://flow.google.com') return;
  const { name, buf } = e.data; const r = await fetch('/save?name=' + encodeURIComponent(name), { method: 'POST', body: buf });
  document.getElementById('s').textContent = await r.text(); e.source.postMessage({ ok: name, res: await Promise.resolve(document.getElementById('s').textContent) }, e.origin); });
opener && opener.postMessage({ rxReady: 1 }, 'https://flow.google.com');
</script>`); }
  const chunks = []; req.on('data', c => chunks.push(c)); req.on('end', () => {
    let buf = Buffer.concat(chunks), name = u.searchParams.get('name');
    if ((req.headers['content-type'] || '').includes('application/x-www-form-urlencoded')) {
      const p = new URLSearchParams(buf.toString()); const saved = [];
      for (const [k, v] of p) { if (!k.startsWith('n_')) continue; const d = p.get('d_' + k.slice(2)) || '';
        const b = Buffer.from(d.replace(/^data:[^,]+,/, ''), 'base64'); fs.writeFileSync(path.join(dir, clean(v)), b); saved.push(clean(v) + ' ' + b.length); console.log('saved', clean(v), b.length); }
      res.writeHead(200, { ...cors, 'Content-Type': 'text/html' }); return res.end('<title>saved</title><pre>' + saved.join('\n') + '</pre>');
    }
    if (req.method === 'POST' && buf.length) { fs.writeFileSync(path.join(dir, clean(name)), buf); console.log('saved', clean(name), buf.length); }
    res.writeHead(200, { ...cors, 'Content-Type': 'text/html' }); res.end(`<p>saved ${clean(name)} ${buf.length}</p><script>window.close&&setTimeout(()=>window.close(),50)</script>`);
  });
}).listen(4499, '127.0.0.1', () => console.log('receiver on 127.0.0.1:4499'));
