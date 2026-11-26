# Active Air: independent design and QA review

**Reviewed:** 2026-11-26, against http://localhost:4403 (static `site/dist`) and the live ConsultPro site (https://consult-pro.framer.website/ and /contact-us).

**Method:**
- Rendered 16 routes (15 named routes plus an unknown path) at 1440×900 and 834×1112 in Chromium, and on the iPhone 15 Pro profile in WebKit.
- Scrolled each page fully, waited 3 s at the top, then took full-page and per-viewport screenshots.
- Captured ConsultPro at the same three sizes.
- Ran DOM audits (overflow, tap targets, image resolution, label count, links) and functional probes (call dock, menu, hero slides, carousel pager).
- Checked claims against `claim-ledger-draft.md`, `research/web-research-2026-11-26.md` and `inventory/raw/*.txt`.
- No site files were edited.

**Where the files are:**
- Scripts: `site/qa/review/` (`capture.mjs`, `ref.mjs`, `probe.mjs`, `probe2.mjs`).
- Screenshots: `site/qa/review/shots/`. Full-page shots are named `<route>-<d1440|t834|iphone>-full.jpg` and per-screen shots `-sNN.jpg`.
- Contact sheets: `site/qa/review/sheets/`.
- Audit data: `site/qa/review/audit-*.json`.
- Paths below are relative to `site/qa/review/`.

## What already works

- **No horizontal overflow.** Every route at every size passes.
- **No console errors**, apart from the expected 404 on the unknown path.
- **Type matches ConsultPro exactly:**
  - Desktop: H1 76/400, H2 53/500, H3 23/500, industries title 46.
  - Phone: H1 46, H2 34, with the same −0.05 em tracking.
- **The footer and contact page are faithful to the reference.**
- **The phone menu carries Call and Book.**
- **The phone dock works.** Call and Book stay on screen past the first screen and hide at the footer.
- **Every AI image has a visible label.** The count of `alt="Illustration…"` images equals the count of `.ill` labels on every page.
- **Facts check out:**
  - Every price matches the ledger: $195, $295, $250, and from $395 plus tax up to 10 tons.
  - Review quotes match the research file and old-site text.
  - No license number, financing offer, year count or dealer status is invented.

---

## Blockers

### B1. The forms do not send anything, but the copy promises a reply

- **Where:** /contact/, /free-hvac-consultation/ and the 404 page, at all sizes.
- **What happens:** `form[data-preview]` is intercepted in `js/site.js`. Nothing is submitted.
- **What the copy says:**
  - "Messages go to Andrew, who aims to reply within 30 minutes."
  - On the consultation page: "Andrew will call to confirm a time."
- **The HVAC layer** also requires booking with real open times. None is connected (this is already a known gap).
- **Fix before launch:**
  - Connect the forms to the CRM and the Starwell text-back.
  - Until then, keep the honest "not connected yet" message the code already shows.
- **Shots:** `shots/contact-d1440-s00.jpg`, `sheets/free-hvac-consultation-d1440-p0.jpg`

### B2. The home first screen is an AI house, not the crew or trucks

- **Where:** / at all sizes.
- **What happens:**
  - Slide 1 (autumn colonial) and slide 2 (winter Cape) are AI illustrations.
  - Only slide 3 (a ductless install) is a real photo.
  - The About hero is also AI.
- **Why it blocks:** HVAC layer item 1 and the owner rules require a real photo or film of the crew and trucks on the first screen.
- **Fix:**
  - Make slide 1 a real crew photo. The ledger (#64) notes owner and truck photos exist on the old site's CDN.
  - Move the AI slides to second or third place, or drop them.
  - Do the same on /about/.
- **Shots:** `shots/home-d1440-s00.jpg`, `shots/_d-hero-2.jpg`, `shots/_d-hero-3.jpg`, `sheets/_iphone-heroes.jpg`

---

## Major

### M1. "Prices are listed up front" sits above a section with no price

- **Where:** every service page's "What It Costs" section at 1440: heating repair, furnace, boiler, heat pump, mini-split, AC and water heater.
  - These sections show one row, for example "Repair visits" or "Gas furnace replacement · Priced after a free in-home consultation".
  - Most of the row is empty.
- **The $0 stat:** "$0 Cost of the consultation" sits on /heating-repair/ and every service page. On a repair page it reads as a free service call, and the diagnostic fee is a gap.
- **Fix:**
  - Change the lede to "Replacements are quoted in writing after a free visit."
  - Remove or relabel the $0 card on /heating-repair/.
  - Keep the gap list for the ranges.
- **Shots:** `shots/heating-repair-d1440-s04.jpg`, `sheets/gas-furnace-replacement-installation-d1440-p0.jpg`

### M2. The review platform bar suggests star ratings that don't exist

- **Where:** every page with reviews.
- **What happens:**
  - Facebook ("100% recommend") and Nextdoor ("2025 Neighborhood Favorite") each show five filled stars. Neither platform gave a star rating here.
  - The BBB tile is mostly fine: its customer reviews really are 5/5 from 4. But the big word "Accredited" sits above the stars, so they read as a BBB rating.
  - Only Google has a real logo. The other three use a generic star outline icon.
- **Fix:**
  - Remove the stars from the Facebook and Nextdoor tiles.
  - On the BBB tile, label the stars "Customer reviews 5/5".
  - Use the real platform marks.
- **Shot:** `shots/home-d1440-s08.jpg`

### M3. The industries carousel loses its pager when the section is fully in view

- **Where:** /, at 1440.
- **What happens:**
  - With the section scrolled exactly into view, the pager (arrows and 01/04) stays at `opacity:0`. Its row sits at y=814, where ConsultPro's sits at y=766, so the reveal threshold is never met.
  - The desktop call dock also lands right under "See all services", and the two pills touch.
- **Fix:**
  - Restore ConsultPro's bottom inset of 80 px so the row sits at y=766, or loosen the in-view margin.
  - Lift the dock, or hide it while this section is in view.
- **Shots:** `shots/_d-ind-direct.jpg`, `shots/_d-ind-2.jpg`

### M4. The owner photo is a soft, upscaled selfie, cropped to a face close-up and repeated

- **Where:** Why-us on / (665×652 frame, object-position 50% 20%) and the team card on / and /about/.
- **What happens:**
  - The crop cuts off the top of his head and the Active Air logo on his jacket.
  - On phones it fills the full 393 px width twice within two screens.
- **Fix:**
  - Set object-position to about 50% 65% so the jacket logo shows.
  - In Why-us, show a different real photo, such as `own-trane-team` or a truck shot.
  - Ask Bobby for a sharper portrait.
- **Shots:** `shots/home-d1440-s04.jpg`, `shots/home-d1440-s05.jpg`, `shots/_owner.jpg`, `sheets/home-iphone-p1.jpg`

### M5. The illustration label is often unreadable

- **The label:** 12 px at 90% white with a light shadow.
- **Where it fails:**
  - It nearly disappears on bright sky and foliage: industries slide 2 and hero slide 1.
  - On phones it sits tight against the About eyebrow.
- **Fix:**
  - Use 13 px with a stronger shadow, or a small dark pill around the label only. A pill is not a band over the media.
  - Add 8 px of space under it on phones.
- **Shots:** `shots/_crop-hero-label.jpg`, `shots/_d-ind-2.jpg`, `shots/_crop-about-iphone-label.jpg`

### M6. The thermostat illustration has a white border baked in

- **The image:** `thermostat-1024` is 1024² with a white frame about 25 px wide.
- **Where it shows:**
  - A white strip along the right edge of the /hvac-maintenance/ hero.
  - Inside the accordion images on /heat-pump…/ and /free-hvac-consultation/.
  - The same 1024² square is also stretched across a 1440×760 hero.
- **Also:** its photo frames hold AI-made family faces. They are not presented as customers, but the rule is no AI people.
- **Fix:** crop or regenerate it as a landscape image with no frames.
- **Shots:** `shots/hvac-maintenance-d1440-s00.jpg`, `shots/_thermo.jpg`

### M7. Low-resolution photos are shown too large

- **Where:**
  - The /online-payments/ hero (a video frame of a tech at a condenser) is very blurry at 1440.
  - On iPhone, service heroes (393×720), the industries carousel (401×714) and the CTA bands use 1280-wide landscape sources cropped to portrait, about a 2.4× upscale. Only the home hero has portrait (`-p-`) versions.
- **Fix:**
  - Make portrait crops for the service heroes, industries slides and CTA bands.
  - Use a sharper real photo on the payments hero.
- **Shots:** `shots/online-payments-d1440-s00.jpg`, `sheets/_iphone-heroes.jpg`, `audit-iphone.json` (the `lowRes` field)

### M8. The 834 tablet layout doesn't match ConsultPro

- **How ConsultPro behaves at 834:** Why-us and the team cards collapse to one column, and the hero fills the viewport.
- **How the site behaves:**
  - Why-us stays two columns with a narrow photo.
  - The team grid is 2+1 with an orphan card.
  - The platform bar is 3+1, and the review grid leaves an orphan card.
  - The hero is 900 px tall instead of 1112.
  - The H1 runs to four lines, two of which end on "&".
  - The Call and Book pills stack at different widths.
- **Fix:**
  - Follow ConsultPro's tablet breakpoints: one column for Why-us and team, and a 2×2 platform bar.
  - Make the hero 100vh.
  - Widen the H1 box.
- **Shots:** `sheets/home-t834-p0.jpg` against `sheets/ref-home-t834-p0.jpg`, `shots/home-t834-s00.jpg`, `sheets/about-t834-p0.jpg`

### M9. Gallery: an orphan tile and a contradicting claim

- **Layout:** at 1440 the last tile ("Ductless outdoor unit") sits alone, leaving two-thirds of the row empty.
- **Copy:** the hero says "Every photo on this page is an Active Air job", but the CTA band is an AI house.
- **Privacy:** the customer's house number "101" is legible in `own-multizone`. That image is the gallery hero, gallery tile and home industries slide 4.
- **Fix:**
  - Fill or reflow the last row.
  - Change the copy to "Every job photo on this page…".
  - Blur the house number.
- **Shots:** `shots/hvac-gallery-d1440-s04.jpg`, `shots/_d-ind-3.jpg`

---

## Minor

### Copy

1. **The inline pill replaces a needed comma** in three trust statements. Add the comma or reword:
   - "someone who answers [pill] comes out quickly" (/heating-repair/)
   - "experts at ductless systems [pill] efficient, cost-saving…" (/mini-split-installation/, which is ungrammatical)
   - "sized to your home [pill] not picked…" (/gas-furnace…/)
2. **Title Case is inconsistent** with the reference:
   - These H2s are in sentence case: "Straight answers on price" (/ and /hvac-services-repair/), and "What neighbors say after we leave" (/, /about/, /free-hvac-consultation/, /hvac-services-repair/).
   - The 404 H1 "This page moved" is in sentence case.
   - Every H3 (card, accordion and team titles) is in sentence case, where ConsultPro uses Title Case, for example "Business Strategy".
   - Eyebrows "Systems we install" and "Get started" are lower case where ConsultPro has "Industries We Serve" and "Get Started".
3. **Single words left alone on a line:**
   - "…they hired us / for." (reviews lede at 1440)
   - "4 reviews, all 5 / stars"
   - "Want Results Like / These?"
   - "From First Call To Finished / Job"
   - Fix with `text-wrap: balance` or shorter copy.
4. **The "Can I pay online?" FAQ** (/hvac-maintenance/) never answers the question.
   - The /online-payments/ hero says "pay for maintenance", but the page offers no way to pay.
   - Say plainly that online payment is coming and to call or text for now.
5. **"Often installed in a single day"** (the furnace and AC heroes, and the AC tile) rests on one review.
   - Get Andrew's confirmation and add it to the ledger.
   - Also add ledger rows for "aims to reply within 30 minutes" (from the old site's form message) and "visits manufacturers" (old About page).
6. **The consultation form offers a "Saturday" time chip**, while business hours are still a gap.

### Images

7. **Images are reused heavily:**
   - Each service page shows its hero image again in the "How it works" panel: furnace, boiler, heat pump snow, water heater, repair, thermostat and the ductless living room.
   - The tech-at-condenser photo appears on five pages.
   - The "Tune-up visits" team card is a service, not a person.
8. **The Trane Supply photo** could be read as a Trane dealer claim. Its alt text is fine; add a visible caption: "Andrew's distribution years".

### Mobile and tap targets

9. **The desktop call dock** holds Call only, with no Book. It covers card titles and the Nextdoor tile at the bottom right.
10. **Tap targets under 44 px:**
    - Footer links are 21 px tall.
    - The burger is 24×24.
    - The carousel arrows are 44×30.
    - Accordion header buttons are 34 px tall.

### Small fixes

11. **`novalidate="false"` on the forms** still switches native validation off, because it is a yes/no attribute: writing "false" does nothing. Remove it.
12. **The CTA photo on / has a ragged dark edge** at its bottom left. Shot: `shots/_crop-home-cta.jpg`.

---

## Conversion summary

- **Calling is obvious everywhere:**
  - The header pill.
  - The hero Call button.
  - The phone dock with Call and Book.
  - The menu.
  - The CTA bands.
  - The footer.
  - Text via an `sms:` link.
- **Booking is visible but doesn't work yet.** It leads to a form that sends nothing, with no real open times (B1).
- **Desktop** keeps no persistent Book button once the header scrolls away (minor 9).
- **Price answers** are strong for tune-ups, but empty for every replacement page (M1).
