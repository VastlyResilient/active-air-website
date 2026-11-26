# Active Air LLC — website (Starwell build)

New website for Active Air LLC, a family-owned HVAC company in Trumbull, CT. Static site, no framework.

- **Preview the built site:** open `site/dist/` with any static server, e.g. `cd site && node serve.mjs dist 4403` → http://localhost:4403/
- **Rebuild:** `cd site && node src/build.mjs` (content in `site/src/content-activeair.mjs`, templates in `site/src/templates.mjs`)
- **Status, open items and QA evidence:** `STATUS.md`
- **Every fact on the site and its source:** `claim-ledger.md`
- **Open gaps (hidden from visitors):** `site/gaps.txt`
- **Reference choice:** `references/candidates.md` (ConsultPro)
- **Images:** `media/RESULTS.md` (Google Flow scenes + Active Air's own photos)

Not deployed. `site/dist/_redirects` maps the old activeairllc.com URLs for Netlify/Cloudflare Pages.
