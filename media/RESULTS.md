# Active Air media log

## Google Flow (Bobby's signed-in account, Ultra plan) — 2026-11-26
- Model: Nano Banana Pro (and one early Nano Banana 2.1 test), 2 outputs per prompt. Flow showed "Generating will use 0 credits" for every image run.
- Batch 1: 22 prompts (`prompts.json`), 44 outputs requested; 40 arrived (3 prompts produced nothing: c-heatpump, s-maintenance, s-ac). Batch 2: those 3 re-run plus h-owner-desk.
- Native size 1376×768 (16:9), 768×1376 (9:16), 1024×1024 (1:1). Flow's own download menu would not save from the in-app browser, so images were moved with an in-page form post to a local-only receiver (`receiver.mjs`, 127.0.0.1:4499) into `flow/`.
- No video generated: ConsultPro's hero is a photo slider, not a film.
- Rules kept: no people, vehicles, text or logos in any illustration; every illustration carries a visible "Illustration · not an Active Air photo" label and "Illustration:" alt text.
- Picks and crops: `prep.py` (SCENES). Web sizes in `site/public/img/m/` (AVIF + WebP).

## Active Air's own photos
From their website (`inventory/images`). Light autocontrast/colour only, crops listed in `prep.py` (OWNJ). Small originals get one 2× Lanczos copy. Excluded: "Wife and I" truck graphic, office portrait, AI share image, Squarespace AI template images.

## Phone (9:16) versions — after the independent review
- 12 portrait prompts, then the 5 that came back empty re-run once. 14 + 10 outputs arrived; several were letterboxed (flat bands) and skipped.
- Used: maintenance, desk, minisplit-bed, cta-evening, waterheater, boiler, repair, about-street, equipment, furnace (`flow/p-*.jpg`).
- Still missing: heatpump-snow and ac portrait versions (Flow returned nothing twice); those two pages use a centred landscape crop on phones.
- Thermostat illustration dropped (baked-in white border, AI family faces in frames).
- Total Flow images used on the site: 33 (all 0 credits as shown by Flow).

## Bobby's changes (2026-11-26, later)
- Visible "Illustration · not an Active Air photo" labels removed everywhere, and the footer note about them (Bobby's request). Hidden alt text still begins "Illustration:" for screen readers; no AI image shows people.
- New home opening image: `hero-home` (white colonial at golden hour with a heat pump beside it; Flow, Nano Banana Pro, 0 credits) with its own phone version `hero-home-p`. A second option, `hero-porch` (gray-shingled colonial with a lit porch), is prepared but unused.
- Home opening is now one still image (Bobby disliked the slideshow): the golden-hour colonial, with the slow zoom and word-by-word headline kept. The real ductless job stays on the mini-split page and gallery; the snowy Cape stays as a closing image.
