# Active Air LLC — build status (2026-11-26)

**Company:** Active Air LLC, family-owned, owner-operated HVAC, Trumbull CT (owner Andrew DeJesus). Old site: https://www.activeairllc.com (Squarespace).
**Reference:** ConsultPro (`refs/framer21-consultpro`), chosen in-session because Bobby asked for no stops; the reasoning and the runner-up (Asterre) are in `references/candidates.md`.
**Stage:** full site built locally with real copy, the HVAC layer, 33 Google Flow illustrations (incl. 13 phone-shaped versions) and 21 crops of Active Air's own photos. Independent review done (2 blockers, 9 major) and fixed; see `qa-review.md`. Nothing deployed.

## Run it
- Build: `cd site && node src/build.mjs` (`SHOW_GAPS=1` shows the orange "needed" chips)
- Serve: `node serve.mjs dist 4403` → http://localhost:4403/
- QA: `cd site/qa && node func.mjs` (15 routes × Chrome 360–1920 + WebKit iPhone: status, overflow, off-screen controls, reveals after fast/reverse scroll, broken images, hero, Call+Book, carousel, accordion, dock, phone menu, form, reduced motion)
- Idle survey: `cd ~/starwell-si-site/qa && URL=http://localhost:4403/ node idle-survey.mjs`
- Images: `cd media && python prep.py` (Flow picks + own-photo crops → `site/public/img/m/`)

## Routes (16)
/, /hvac-services-repair/ (was an unedited template), 8 service pages (/heating-repair/, /gas-furnace-replacement-installation/, /oil-boiler-replacement-installation/, /heat-pump-equipment-installation-replacement/, /mini-split-installation/, /air-conditioning/, /hot-water-tank-replacement/, /hvac-maintenance/), /about/, /contact/, /free-hvac-consultation/, /hvac-gallery/, /online-payments/, 404. Old URLs (12 broken service links, town gallery pages, store products, duplicate home slug) redirect via `dist/_redirects`.

## HVAC layer
1. First screen (one still image: golden-hour colonial with a heat pump; no slideshow, per Bobby): trade + towns in the headline, "5.0 on Google · 57 reviews", Call and Book side by side, no pop-ups, no panel over the image.
2. Reach: header call pill, a Call/Book dock that stays on screen after the first screen, call or text links, 4-field forms (no fake success; preview notice).
3. Reviews: Google 5.0/57 first, then BBB Accredited, Facebook 100%, Nextdoor Favorite 2025; dated review cards naming the job.
4. Prices: real maintenance prices ($195 / $295 / $250 / from $395). Install ranges, financing and license are gaps (hidden, listed).
5. Services: 8 tiles + free consultation, each to its own page with call, book, reviews and prices.
6–7. Behind-the-scenes (text-back, CRM, tracking numbers) and ad landing pages: not built yet; need Bobby's go-ahead and the tools.

## QA evidence (2026-11-26)
- `func.mjs`: NO FAILURES (15 routes, Chrome at 360/390/768/834/1024/1280/1440/1920 and WebKit iPhone 15 Pro; fast + reverse scroll).
- Idle survey: 0 draws/s at every stop with nothing moving; motion only at the hero (slides/zoom), the carousel and the 30 fps asterisk.
- iOS Simulator (iPhone 17 Pro, Safari): home and a service page load; label, CTAs, dock and menu checked.
- Fidelity: section positions match ConsultPro within a few px at 1440 and 390 (eyebrow 1000, statement 1047, avatars 1300).
- Real-phone check by Bobby: pending.

## Open (needs Active Air / Bobby) — see `site/gaps.txt`
- **License:** none found in the CT eLicense lookup for Andrew DeJesus or Active Air. The site makes no license claim. Biggest item.
- Install price ranges, financing terms, service-call fee, hours, final town list, technician names, co-owner name (Karen DeJesus unconfirmed), Yelp rating, towns in reviews, online payment link (the Squarespace store goes away), booking tool with real open times, full-size job photos.
- CT business record shows "Annual report past due" (due 2026-03-31) — worth telling the owner.
- Real-phone check by Bobby still required. Not deployed.
