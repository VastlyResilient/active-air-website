// Range-capable static server (Python http.server lacks Range, which iPhone video needs).
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const [,, dir = 'dist-masters', port = 4321] = process.argv;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.avif':'image/avif','.svg':'image/svg+xml','.mp4':'video/mp4','.json':'application/json','.txt':'text/plain'};
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = path.join(dir, p); if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { f = path.join(dir, '404.html'); if (!fs.existsSync(f)) { res.writeHead(404); return res.end('404'); } res.statusCode = 404; }
  const st = fs.statSync(f), type = types[path.extname(f)] || 'application/octet-stream';
  const range = req.headers.range;
  if (range) { const [a, b] = range.replace('bytes=', '').split('-'); const start = +a, end = b ? +b : st.size - 1;
    res.writeHead(206, {'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${st.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1});
    return fs.createReadStream(f, {start, end}).pipe(res); }
  res.setHeader('Content-Type', type); res.setHeader('Accept-Ranges', 'bytes'); res.setHeader('Content-Length', st.size); res.setHeader('Cache-Control', 'no-cache');
  if (!res.statusCode || res.statusCode === 200) res.statusCode = 200;
  fs.createReadStream(f).pipe(res);
}).listen(+port, () => console.log(`serving ${dir} on http://localhost:${port}`));
