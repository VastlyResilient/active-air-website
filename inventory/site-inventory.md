# Active Air LLC: public website inventory

- Site: https://www.activeairllc.com (Squarespace 7.1, Fluid Engine; site id `652d6b19798aeb069cebb698`)
- Captured: 2026-11-26 with curl, Safari 17.5 user agent. `http://activeairllc.com/` 301-redirects to `https://www.activeairllc.com/`.
- Raw files: `raw/<slug>.html` and `raw/<slug>.txt` (slug = path with `/` → `__`; `/` = `home`). Also `raw/sitemap.xml`, `raw/robots.txt`, `raw/_crawl.json` (status code per URL).
- Images: `images/` (57 unique images, plus the homepage video and its poster frame). Source URL, page and pixel size for each are in `images/_manifest.json` and in the table at the end.
- Quotes below are copied verbatim from the page text, including the site's own typos (marked *[sic]* only where it could look like a transcription error).

## Page list

| # | URL | HTTP | Status | Sitemap lastmod |
|---|-----|------|--------|-----------------|
| 1 | `/` | 200 | Homepage | (as `/hvac-home-page-active-air-llc`) 2026-09-23 |
| 2 | `/hvac-home-page-active-air-llc` | 200 | Same page as `/` (the homepage's own slug, listed in sitemap). Duplicate URL. | 2026-09-23 |
| 3 | `/about` ("Our Story") | 200 | Live | 2025-06-02 |
| 4 | `/contact` | 200 | Live | 2026-09-22 |
| 5 | `/free-hvac-consultation` | 200 | Live | 2026-09-22 |
| 6 | `/hvac-services-repair` | 200 | **Live but unedited Squarespace template placeholder text** (no Active Air content) | 2026-09-23 |
| 7 | `/hvac-gallery` | 200 | Live (4 town tiles) | 2025-02-14 |
| 8 | `/hvac-gallery/trumbull-ct` | 200 | Live (1 image) | 2025-01-20 |
| 9 | `/hvac-gallery/shelton-ct` | 200 | Live (1 image) | 2025-01-20 |
| 10 | `/hvac-gallery/fairfield-ct` | 200 | Live (1 image) | 2025-01-20 |
| 11 | `/hvac-gallery/monroe-ct` | 200 | Live (1 image) | 2025-01-20 |
| 12 | `/online-payments` | 200 | Squarespace store (4 products) | 2025-01-15 |
| 13 | `/online-payments/maintenance-plans` | 200 | Store category "AC MAINTENANCE PLANS" | 2025-04-21 |
| 14 | `/online-payments/p/light-commercial-maintenance` | 200 | Product | 2026-10-10 |
| 15 | `/online-payments/p/gas-furnace-maintenance` | 200 | Product | 2026-10-10 |
| 16 | `/online-payments/p/oil-boiler-maintenance` | 200 | Product | 2026-10-10 |
| 17 | `/online-payments/p/annual-hvac-maintenance-plan` | 200 | Product | 2026-08-28 |
| 18 | `/cart` | 200 | Squarespace cart (empty, no content) | not in sitemap |
| — | `/consultations`, `/maintenance`, `/hvac-maintenance`, `/new-page`, `/oil-boiler-replacement-installation`, `/heat-pump`, `/heat-pump-equipment-installation-replacement`, `/mini-split`, `/mini-split-installation`, `/hot-water-hearter`, `/hot-water-tank-replacement`, `/hvac-equipment-replacement` | **404** | **Broken.** All 12 are linked from the homepage service tiles. The 404 response body is a copy of the homepage content (identical visible text), so they look like the homepage in a browser but return 404. Saved as `raw/<slug>.html/.txt` for the record. | not in sitemap |

Content pages that carry over: 17 live URLs (16 unique pages, since `/` and `/hvac-home-page-active-air-llc` are the same), plus the cart. No blog, no service detail pages, no privacy policy or terms page (`/privacy-policy`, `/terms` = 404). robots.txt is the Squarespace default.

---

## Global elements (every page)

**Announcement bar (top):** "FREE Home Consultations. Click to schedule yours today!" → `mailto:activeairct@outlook.com` (opens in new window).

**Header:** logo (desktop `FullLogo_NoBuffer.jpg`, mobile `ACTIVE AIR LOGO.jpg`) → `/`. Social icons: Instagram → https://www.instagram.com/activeair_llc/ · Facebook → http://facebook.com/activeair203?mibextid=avESrC · Google Maps → https://maps.app.goo.gl/275P12LF1gRHz1EXA · BBB → https://www.bbb.org/us/ct/trumbull/profile/heating-and-air-conditioning/active-air-llc-0111-110091681

**Nav (in order):** HVAC Services Repair → `/hvac-services-repair` · Contact Us → `/contact` · Free Consultation → `/free-hvac-consultation` · Our Story → `/about` · Online Payments → `/online-payments` · HVAC Gallery → `/hvac-gallery` · Cart icon "0" → `/cart` · Header button **FREE CONSULTATION** → `/contact` (note: not to `/free-hvac-consultation`).

**Footer (every page):**
- BBB Accredited Business badge (`cdn.png`) → BBB profile URL above
- Grayscale Active Air logo
- BusinessRate "Best of 2026 Award Winner" plaque image (`IMG_5349.jpg`): "Active Air LLC / Hvac Contractor / Long Hill / Trumbull, CT / Powered by Google Reviews"
- "DITCH THE HASSLE! Install options available! We offer top-rates HVAC replacements with minimal disruption to your home." *[sic: "top-rates"]*
- "“Exceeding expectations, one trusted service at a time. ” — Andrew DeJesus - Owner"
- "“At Active Air LLC, we’re committed to comfort, reliability, and doing every job the right way — from Trumbull to Bridgeport and everywhere in between.”"

**Promotional pop-up:** Squarespace pop-up settings exist (`showOnAllPages: true`, after 25% scroll or 5 s), but no pop-up content is in the HTML. Content: not stated.

**Tracking:** Google Analytics 4 `G-EZWTGL7X1R`. No Facebook pixel, call tracking, chat widget or booking widget found.

**Site-wide head code injection (problem):** The site header injection adds a second `<title>` ("Active Air LLC | HVAC Services in Trumbull, Shelton, Fairfield, Monroe & Bridgeport, CT"), second meta description, OG/Twitter tags pointing to `https://www.yourwebsite.com/...`, and HVACBusiness JSON-LD with placeholder data: `"telephone": "(203) 555-1234"`, `"streetAddress": "Your Street Address"`, `"url": "https://www.yourwebsite.com"`. The homepage also has a second injected block with `<title>Your Page Title Here | Active Air LLC</title>` and `meta description "Your 400-character SEO-optimized meta description here…"`. These are unedited templates and conflict with the real data.

**Squarespace business settings (in page JSON / schema, not shown as visible text):**
- Legal name "Active Air llc"; address "4 Aragon Drive, Trumbull, CT, 06611, United States"; email "activeair203@gmail.com"; telephone "12039456287"
- Business hours (settings, hidden on site): Monday–Friday "7am-5pm" (but the machine-readable ranges are 07:00–19:00, and the LocalBusiness schema says "Mo 07:00-19:00 … Fr 07:00-19:00"); Saturday "8am-5pm"; Sunday "Closed". Hours are not shown anywhere on the visible site. The text and the ranges disagree.
- Store: Squarespace Commerce with Stripe; `klarnaEnabled: true`, `afterpayEnabled: false` (not advertised on any page).

---

## 1. Homepage: `/` (same as `/hvac-home-page-active-air-llc`; 404 pages show this content too)

- **Title:** "Active Air LLC, HVAC Installation & Replacement | Trumbull, Fairfield, Monroe & Shelton CT | Air Conditioner Repair"
- **Meta description:** "Active Air specializes in expert HVAC installation, replacements, and ductless mini split systems in Trumbull, Fairfield, Monroe and Shelton CT. With over 18 years of experience, we deliver energy-efficient comfort solutions tailored to your home. Air Conditioner repair, maintenance, gas furnaces, boiler, Oil" (truncated in source)
- **H1:** "Local HVAC service in Trumbull & Fairfield County. Heating, cooling, repairs, maintenance & replacement. Talk directly with the owner."
- **H2:** none. **H3:** "* Gas Furnace Repair & Replacements", "* Oil Boilers Repair & Replacement", "* Maintenance", "* HVAC Tune-up"
- **Media:** 5-second vertical logo-animation video (1080×1812, `images/home-video-01-logo-animation.mp4`) in the hero section. No crew/truck footage.

**Section 1: Hero (in page order)**
- Logo animation video
- Phone link "(203) 945-6287" → `tel:2039456287`
- H1 (above)
- Every paragraph below is wrapped in a link to `https://share.google/GrFCTgNoZBxRXtuHO` (resolves to the Google Business Profile search panel, kgmid `/g/11t79hnpfq`):
  - "Heating season is here. Is your home ready?"
  - "When your furnace isn’t heating, your oil boiler stops working, or your heating system is simply no longer keeping your home comfortable, Active Air LLC is here to help."
  - "We specialize in residential heating repair, no-heat service, gas furnace repair and replacement, oil boiler repair and replacement, and complete heating system replacements."
  - "As a family-owned, owner-operated HVAC company, we provide homeowners with straightforward recommendations and personalized service. Every project starts with understanding your home, your comfort needs, and the options available to you."
  - "We primarily serve homeowners throughout Trumbull, Monroe, Easton, Fairfield, Shelton, and Bridgeport, Connecticut."
  - "Need heating repair, have no heat, or considering replacing an older system? Contact Active Air LLC for a personalized home comfort consultation."
- Bullets (H3): Gas Furnace Repair & Replacements / Oil Boilers Repair & Replacement / Maintenance / HVAC Tune-up
- **Service tiles (9; image + label; most links are broken 404s):**

| Tile label (verbatim) | Image | Image link | Label link |
|---|---|---|---|
| FREE CONSULTATION | owner at laptop (home-01) | `/free-hvac-consultation` (alt "#free consultation, HVAC Replacement, New Systems \| Trumbull CT") | "CONSULTATION" → `/consultations` **404** |
| HVAC MAINTENANCE | tech wiring air handler (home-02) | `/maintenance` **404** | "VAC MAINTENANCE" → `/hvac-maintenance` **404** (the "H" is outside the link) |
| HVAC SERVICE REPAIR | tech at furnace (home-03) | none | `/hvac-services-repair` (template page) |
| GAS FURNACE REPLACEMENT INSTALLATION | Carrier furnace (home-04) | `/new-page` **404** | no link |
| OIL BOILER REPLACEMENT INSTALLATION | Utica boilers (home-05) | none | `/oil-boiler-replacement-installation` **404** |
| HEAT PUMPS INSTALLATION | Bosch heat pump (home-06), alt "We install and replace Bosch 20 SEER cold‑climate heat pumps — high‑efficiency, ultra‑quiet, built for CT winters" | `/heat-pump` **404** | "HE" → `/heat-pump` **404**, "AT PUMPS INSTALLATION" → `/heat-pump-equipment-installation-replacement` **404** |
| MINI SPLIT INSTALLATION | Mitsubishi mini split (home-07) | `/mini-split` **404** | `/mini-split-installation` **404** |
| HOT WATER TANK REPLACEMENT \| INSTALLATION | A.O. Smith water heater (home-08) | `/hot-water-hearter` **404** *[sic]* | `/hot-water-tank-replacement` **404** |
| EQUIPMENT REPLACEMENT \| INSTALLATION | Bryant condenser, Trumbull (home-09), alt "Need AC replacement in Trumbull, CT? Active Air LLC provides fast, professional air‑conditioning installation, system upgrades, and energy‑e…" | none | `/hvac-equipment-replacement` **404** |

**Section 2: Trust / owner**
- Image "Wife and I _ Active Air.PNG" (home-10, AI-style marketing graphic) → links to Google Maps place URL (Active Air LLC, @41.2060801,-73.2407895). Alt: "Active Air owners providing residential heating and cooling repair, replacement, heat pump, and AC maintenance in Trumbull and Fairfield Cou…". Text baked into image: "ACTIVE AIR / HEATING & COOLING REPAIR & REPLACEMENT / Serving Trumbull & Fairfield County / Local. Straightforward. HVAC Guidance." and icons "FURNACES Repair & Replacement · AIR CONDITIONERS Repair & Replacement · HEAT PUMPS Installation & Service · MAINTENANCE Keep your system running · RESIDENTIAL Local & Trusted".
- Heading text: "Your Local HVAC Experts. Your Home. Your Comfort."
- Logo image (FullLogo_Transparent) → https://www.facebook.com/activeair203/ (alt wrongly says "…with the word 'AquaTherm' underneath.")
- "Why Trust Active Air for Your HVAC Needs?"
- "When it comes to your home’s heating and cooling, you deserve more than a quick fix or a sales pitch. You deserve an HVAC company you can trust."
- "Active Air LLC is a family-owned HVAC company proudly serving homeowners throughout Trumbull, Fairfield, Monroe, Shelton, Bridgeport, and communities across Fairfield County, Connecticut. We specialize in professional heating and cooling solutions, including heat pumps, air conditioning, heating systems, ductless mini-splits, HVAC replacements, installations, maintenance, and repairs."
- "Our approach is simple: listen to your needs, evaluate your home, explain your options, and recommend the solution that makes the most sense for you and your budget. We believe homeowners should understand what they are paying for and why a particular system is being recommended."
- "From routine HVAC maintenance and AC repair to complete cold-climate heat pump installations and high-efficiency heating and cooling system replacements, our goal is to provide dependable comfort, quality workmanship, and long-term value."
- "We don’t believe in cutting corners or recommending equipment simply because it costs more. We believe in doing the job right, standing behind our work, and treating every customer’s home like it were our own."
- "Whether you need HVAC repair in Trumbull, a new heat pump in Monroe, AC service in Fairfield, or a complete heating and cooling system replacement anywhere in Fairfield County, Active Air LLC is here to help."
- Owner office portrait (home-11; alt "Man in business suit sitting at his desk in an office with a logo that says 'Active Air' on the wall behind him.")
- "A Message From the Owner"
- "“I started Active Air with a simple belief: homeowners deserve honest HVAC advice, quality workmanship, and a company that genuinely cares about the people we serve. Every system we install and every home we work in represents our name and our reputation. That’s why we take pride in doing things the right way, not just the easy way."
- "**Thank you for trusting Active Air LLC with your home and your comfort. We truly appreciate the opportunity to serve our community.”" (the "**" is literal on the page)
- "— Andrew DeJesus, Owner Active Air LLC"
- "REQUEST SERVICE" + **form "Home Form 2"** (see Forms)
- **Instagram feed block** (account activeair_llc): 3 linked posts with captions — "Commercial project, temporary AC!" → https://www.instagram.com/p/DPoj-L3jnSt/ · "We’ve really become experts at installing ductless systems. 💨⚡️ They’re energy-efficient, cost-saving, and a great way to keep your home comfortable year-round." → https://www.instagram.com/p/DPP6GImDOuW/ · "ACTIVE AIR  LLC 🇺🇸 DUCTLESS MULTI ZONE INSTALL" → https://www.instagram.com/p/DMea0eKOunX/ — plus a 20-slide carousel ("Slide 1"…"Slide 20") of reel thumbnails (home-14 to home-31).

**Section 3: Reviews**
- "Review us on Google ★★★★★" image (home-32) → https://g.page/r/CR49smEL67M5EBM/review (alt "Request for customers to review the business on Google with a five-star rating and the Google logo. #chatgpt")
- "CLICK HERE TO VIEW" → https://share.google/IMscYUoyv3kokJzqO (Google Business Profile panel)
- Five gold stars image (home-33)
- Three testimonials (verbatim in Global facts → Reviews)

**CTAs on homepage:** (203) 945-6287 → tel:2039456287 · hero paragraphs → Google profile share link · 9 service tiles (above) · owners image → Google Maps · logo → Facebook · form Submit · 3 Instagram posts · Review us on Google → g.page review link · CLICK HERE TO VIEW → Google profile share link · global header/footer CTAs.

---

## 2. About: `/about` ("Our Story")

- **Title (Squarespace):** "Active Air llc, Trumbull, Fairfield CT- HVAC, installations, repair, replacement | mini split Ductless" (page-level injected title also present: "Our Story | Active Air LLC – Trusted HVAC Experts Serving Trumbull, Shelton, Monroe, Fairfield & Bridgeport")
- **Meta description:** "Discover the story behind Active Air LLC - your trusted HVAC partner in Trumbull, Shelton, Monroe, Fairfield, and Bridgeport, CT. With years of experience, we're committed to delivering honest, high-quality heating and cooling solutions. Learn how our value, service, and dedication set us apart in the HVAC industry."
- **H1:** none. **H2:** "How Active Air Became a Trusted HVAC Expert Across Fairfield County"
- **Content (verbatim):**
  - Owner photo (about-01; alt "Owner Andrew DeJesus Active Air Air, Near me AC Repair, Replacement, HVAC")
  - "Andrew DeJesus" / "LinkedIn Profile" → https://www.linkedin.com/in/andrewdejesus1010
  - "We are a family-owned business, deeply rooted in Fairfield County, Connecticut, bringing a wealth of expertise in residential HVAC equipment. With 18 years of experience on the distribution side, I've aided contractors in selecting the ideal equipment for their projects. Now, I'm on a new mission to assist homeowners to find the perfect system for their families and homes."
  - "Our commitment goes beyond the basics. I've personally traveled to manufacturing companies to actively learn about cutting-edge HVAC technology. At Active Air, we take pride in our team, consisting of the most qualified and licensed technicians with outstanding reputations in Fairfield County."
  - "Rest assured, I am dedicated to helping you achieve your HVAC goals and addressing your specific needs. We're here to ensure your home's comfort and your family's satisfaction. Choose Active Air HVAC for a superior experience in home comfort."
  - Image: Trane Supply "Customer Solutions Center" group photo (about-02; filename "Trane Carrier Bosch Daikin Fujitsu HVAC Mitsubishi.jpg")
  - "Active Air LLC in Trumbull, CT, distinguishes itself from other HVAC companies in the area through several key factors:"
  - "Commitment to Expertise and Continuous Learning: The owner personally travels to manufacturing companies to stay updated on the latest HVAC technology. This dedication to learning ensures that Active Air LLC offers cutting-edge solutions and expert knowledge."
  - "Highly Qualified and Licensed Technicians: Active Air LLC prides itself on its team of the most qualified and licensed technicians in Fairfield County. These technicians have outstanding reputations, ensuring high-quality service and expertise."
  - "Personalized and Customer-Focused Approach: The owner is dedicated to helping customers achieve their specific HVAC goals and addressing their unique needs. This personalized approach ensures customer satisfaction and tailored solutions for every home."
- **CTAs:** LinkedIn Profile (×2: name/photo and text link). No call, book or form.
- **Forms:** none.

---

## 3. Contact: `/contact`

- **Title:** "Active Air llc, Trumbull, Fairfield CT- HVAC, installations, repair, replacement | mini split Ductless"
- **Meta description:** "Contact Active Air LLC for residential HVAC service, heating and cooling repairs, system replacements, and free home comfort consultations in Trumbull, Monroe, Fairfield, Easton, Shelton and Bridgeport, CT."
- **H1:** none. **H2:** "Contact Us"
- **Content (verbatim):** "Family-Owned. Owner-Operated." / "Personally Accountable." / "Your call, message, and project go directly to the owner, no runaround, no call center, no getting passed from person to person." / "Contact Us" / "(203) 945-6287" / "Activeair203@gmail.com" / "Social Midea Links" *[sic: "Midea"]* / "HVAC SERVICE REQUEST FORM"
- **CTAs:** "(203) 945-6287" → `tel:2039456287` · "Activeair203@gmail.com" → `mailto:activeair203@gmail.com?subject=HVAC%20Services%20` · "Social Midea Links" → https://www.facebook.com/activeair203 · form "Send"
- **Form "New Form":** Name (required, first/last) · Email (required) · Message (textarea, required). Button "Send". Success message "Thank you!". reCAPTCHA on; SMS consent option enabled. No phone, address or service-type field. No address, map or hours shown.

---

## 4. Free consultation: `/free-hvac-consultation`

- **Title:** "Active Air llc, Trumbull, Fairfield CT- HVAC, installations, repair, replacement | mini split Ductless"
- **Meta description:** "Get a free HVAC consultation from Active Air LLC. We help homeowners in Trumbull, Monroe, Fairfield, Easton, Shelton and Bridgeport explore heating and cooling replacement options, improve comfort and efficiency, reduce energy costs, and choose the right HVAC system for their home."
- **H1:** "Free HVAC Home Comfort Consultation." **H2:** none
- **Image:** AI-generated template image of a wooden desk with notebook (free-hvac-consultation-01), unrelated to HVAC.
- **Content (verbatim, in order):**
  - "More Than Just Choosing Equipment"
  - "With over 20 years of experience in the HVAC industry, our specialty is understanding how different heating and cooling systems, equipment, and technologies work together with your home."
  - "We don’t believe in recommending equipment simply because it’s the newest or most expensive option."
  - "We look at your home’s existing system, comfort concerns, efficiency goals, available options, and long-term costs to help determine what makes sense for your home."
  - "Our goal is to design and recommend systems around what matters most to you:"
  - "Better home comfort" / "Improved energy efficiency" / "Lower operating costs" / "Long-term value and return on investment" / "Proper equipment selection and system sizing" / "Modern heating and cooling technology" / "Options that fit your home and your budget"
  - "Thinking About Replacing or Upgrading Your HVAC System?"
  - "Not sure what heating or cooling system is right for your home? Before you invest thousands of dollars into new HVAC equipment, let’s talk about your options."
  - "Active Air LLC offers a free Home Comfort Consultation for homeowners considering a new HVAC system, replacing an aging system, improving energy efficiency, reducing operating costs, or simply making their home more comfortable."
  - "Considering a New HVAC System?"
  - "Whether you’re replacing an old gas furnace, oil boiler, central air conditioning system, heat pump, or ductless system, you don’t have to know exactly what you need before calling us."
  - "That’s where the consultation comes in."
  - "We’ll discuss your current system, what you’re experiencing, what you’re looking to improve, and the different options available for your home. If a replacement makes sense, we’ll help you understand why a particular system may be appropriate and what you can expect from the investment."
  - "Local, Personalized HVAC Guidance"
  - "Active Air LLC is a family-owned, owner-operated company serving homeowners throughout Trumbull, Monroe, Fairfield, Easton, Shelton, and Bridgeport, Connecticut."
  - "When you contact us, you’re speaking directly with the owner—not a call center or a salesperson working from a script."
  - "Have questions about replacing your HVAC system? Start with a free Home Comfort Consultation."
- **CTA:** "CALL NOW" → `sms:2039456287` (opens a text message, not a call).
- **Forms:** none. No booking calendar.

---

## 5. HVAC Services Repair: `/hvac-services-repair` (template placeholder, no real content)

- **Title:** "Active Air llc, Trumbull, Fairfield CT- HVAC, installations, repair, replacement | mini split Ductless"
- **Meta description:** not stated (empty)
- **H2s:** "Our Service Portfolio", "Structured Precision, Every Step", "Advance Together: Our Collective Learning Series", "“Clear communication and rigorous analysis distinguished the team from prior vendors we engaged.”", "“We observed immediate efficiency improvements after the implementation plan was executed precisely as outlined.”", "“Deliverables arrived ahead of schedule, enabling us to accelerate our own client commitments without risk.”", "Initiate a Productive Dialogue". H4: "logo"/"LOGO"/"Logo" (placeholder logo slots).
- **Content:** Generic consulting-firm template copy ("We present a comprehensive suite designed to facilitate operational excellence and sustained growth.", phases "Discovery / Strategy Design / Analysis / Optimization", fake testimonials attributed to "Procurement Lead", "Valued Client", "Facility Director", "Complete the form with contextual information regarding your challenges, timelines, and desired outcomes…"). Full text in `raw/hvac-services-repair.txt`. **None of this is Active Air content; do not carry it over.** The fake testimonials must not be reused.
- **Images:** 3 AI-generated interior-design template images (hvac-services-repair-01 to 03).
- **Form:** an empty form block (no fields configured, renders nothing).
- **CTAs:** none beyond global. This is the page the main nav item "HVAC Services Repair" points to.

---

## 6. HVAC Gallery: `/hvac-gallery` and 4 town pages

**Index `/hvac-gallery`**
- **Title:** "Active Air llc, Trumbull, Fairfield CT- HVAC, installations, repair, replacement | mini split Ductless"
- **Meta description:** "Active Air LLC of Trumbull, Connecticut proudly serves Fairfield County. Check out our heating and cooling projects in Trumbull and surrounding areas."
- **H3s / tiles (each = 1 photo + town link):** "TRUMBULL, CONNECTICUT" → `/hvac-gallery/trumbull-ct` · "SHELTON, CONNECTICUT" → `/hvac-gallery/shelton-ct` · "FAIRFIELD, CONNECTICUT" → `/hvac-gallery/fairfield-ct` · "MONROE, CONNECTICUT" → `/hvac-gallery/monroe-ct`

**Town item pages** (each shows one image and Previous/Next links; no body text)
- Title on all four: "Active Air LLC, Monroe, Shelton & Bridgeport CT | HVAC Replacement, Installation, Repair"
- Meta descriptions: Trumbull "…Check out our heating and cooling projects in Trumbull." · Shelton "…in Shelton." · Fairfield "…in Fairfield." · Monroe "…in Trumbull and surrounding areas." (all start "Active Air LLC of Trumbull, Connecticut proudly serves Fairfield County.")
- Image alt text is a keyword list, e.g. Trumbull: "HVAC Installation Trumbull CT / HVAC Replacement Trumbull CT / Furnace Installation Trumbull CT / Boiler Installation Trumbull CT / Heat Pump Installation Trumbull CT / Ductless Mini-Split Installation Trumbull CT / Air Conditioning Installation Trumbull CT / Heating Installation Trumbull CT / HVAC Repair Trumbull CT / HVAC Maintenance Trumbull CT / Family-Owned HVAC Trumbull CT" (same pattern for Shelton and Fairfield); Monroe: "HVAC INSTALLATION HEAT PUMP HVAC REPLACEMENT MONROE CT FAMILY-OWNED HVAC".
- Navigation: Trumbull → Next "SHELTON, CONNECTICUT"; Shelton → Previous "TRUMBULL…", Next "FAIRFIELD…"; Fairfield → Previous "SHELTON…", Next "MONROE…"; Monroe → Previous "FAIRFIELD…".
- Photos: Trumbull = Bryant condenser beside rose bush (same job as homepage tile home-09); Shelton = Bryant air handler in insulated closet; Fairfield = new Bryant condenser on pad; Monroe = Bryant condenser on riser beside house. All are small screenshots (353–456 px wide). Gallery item pages reuse the same files (byte-identical), so they are saved once.

---

## 7. Online Payments (Squarespace store)

**`/online-payments`**
- **Title:** "Active Air llc, Trumbull, Fairfield CT- HVAC, installations, repair, replacement | mini split Ductless" · **Meta description:** not stated (empty)
- **H2:** "ONLINE PAYMENTS". Category filters: "Maintenance" → `/online-payments`, "AC MAINTENANCE PLANS" → `/online-payments/maintenance-plans`.
- Product grid (Quick View): Light Commercial Maintenance **$395.00** · Gas Furnace Maintenance **$195.00** · Oil Boiler Maintenance **$295.00** · AC ANNUAL MAINTENANCE PLAN **$250.00**
- Payment: Squarespace Commerce checkout via Stripe; Klarna enabled in store settings. No invoice-payment link, no customer-portal or third-party payment page. This "Online Payments" section is a shop for fixed-price maintenance, not a way to pay an invoice.

**`/online-payments/maintenance-plans`**: Title "AC MAINTENANCE PLANS — Active Air llc, …"; H2 "AC MAINTENANCE PLANS"; one product: AC ANNUAL MAINTENANCE PLAN $250.00.

**`/online-payments/p/annual-hvac-maintenance-plan`**
- Title "Active Air LLC, Monroe, Shelton & Bridgeport CT | HVAC Replacement, Installation, Repair"; Meta: "Active Air LLC is owned and operated in Trumbull, CT. Annual maintenance plans are offered to VIP customers in Trumbull, Fairfield, Monroe, and Shelton, Connecticut."
- H1 "AC ANNUAL MAINTENANCE PLAN" · "$250.00" · images: maintenance-agreement cover (online-payments-04), tech servicing condenser (online-payments-05)
- Includes (verbatim): "Check refrigerant levels" / "Test system pressure levels" / "Test contactor function" / "Inspect all wiring connections" / "Inspect condenser motor and fan" / "Check evaporator coil" / "Flush condensate drain" / "Chemical treatment of condensate pump" / "Inspect drain pan and safety switch" / "Check blower fan and belt" / "Replace standard 1’ inch filter ***Additional charge for air filters large than 1’inch***" *[sic]*
- CTA "Add Maintenance Plan To Cart". Stock set to quantity 1 (limited, not unlimited): it will show sold out after one purchase.

**`/online-payments/p/gas-furnace-maintenance`**
- Meta: "Professional gas furnace maintenance and tune-ups in Trumbull, CT. Active Air LLC provides furnace cleaning, safety inspections, combustion testing, burner and ignition checks, airflow testing, and complete heating system performance checks for homeowners in Trumbull, Monroe, Fairfield, Easton, Shelton, and Bridgeport."
- H1 "Gas Furnace Maintenance" · "$195.00" · H3 "What’s Included", "Additional Work"
- "Keep your gas furnace operating safely, reliably, and efficiently with professional annual maintenance from Active Air LLC." / "Our $195 Gas Furnace Maintenance & Tune-Up includes a thorough inspection, cleaning, testing, and operational check of your heating system."
- What’s Included: "Complete furnace safety and operational inspection" / "Inspect heat exchanger for visible signs of damage, corrosion, or deterioration" / "Inspect and clean burners as needed" / "Clean and inspect flame sensor" / "Inspect ignition system and igniter" / "Check burner flame pattern and ignition sequence" / "Check gas pressure and combustion operation" / "Perform combustion and carbon monoxide testing where applicable" / "Inspect gas piping and accessible connections" / "Inspect furnace venting and flue connections" / "Inspect and test safety controls" / "Inspect limit and pressure switches where applicable" / "Inspect blower assembly and blower wheel" / "Check blower motor operation and amp draw" / "Inspect electrical wiring and connections" / "Check thermostat operation" / "Check furnace temperature rise and airflow" / "Inspect filter condition" / "Inspect condensate drain and trap on applicable high-efficiency furnaces" / "Inspect intake and exhaust piping on applicable high-efficiency furnaces" / "Run the furnace through a complete heating cycle" / "Verify proper heating operation and safety shutdown" / "Clean the immediate work area after service"
- Additional Work: "The $195 maintenance price covers standard annual furnace maintenance and inspection. Additional charges may apply for replacement parts, repairs, extensive cleaning, blower-wheel removal and cleaning, or correction of unsafe or defective conditions." / "If additional work is recommended, we will explain the issue and provide pricing before performing the work." / "Annual maintenance is recommended to help identify potential problems early, maintain reliable heating performance, and keep your system operating as efficiently as possible."
- CTA "Add To Cart"; related product "AC ANNUAL MAINTENANCE PLAN $250.00 Add". Image: AI-generated furnace (online-payments-02).

**`/online-payments/p/light-commercial-maintenance`**
- Meta: "Commercial HVAC maintenance for rooftop units up to 10 tons. Active Air LLC provides preventive maintenance, inspections, heating and cooling service for restaurants, offices, retail businesses and light-commercial properties in Trumbull and surrounding CT communities."
- H1 "Light Commercial Maintenance" · "$395.00" · "Starting at $395 + applicable tax per rooftop unit"
- "Active Air LLC provides preventive maintenance for commercial rooftop HVAC systems serving restaurants, offices, retail businesses, and other light-commercial properties." / "Our maintenance service is designed to help maintain system performance, improve reliability, and identify potential problems before they become costly repairs."
- What’s Included: "Complete rooftop unit inspection" / "Inspect cabinet, panels, insulation, and visible corrosion" / "Inspect and replace standard filters when included and accessible" / "Inspect blower, motors, belts, pulleys, and bearings where applicable" / "Inspect and clean condenser and evaporator coils as needed" / "Check condenser fan and compressor operation" / "Check refrigerant pressures and operating temperatures" / "Inspect accessible refrigerant piping for signs of leakage" / "Inspect condensate pan, drain, and trap" / "Inspect electrical wiring, contactors, capacitors, and controls" / "Check operating voltage and motor/compressor amp draw" / "Inspect heating components on gas-fired units" / "Check burners, ignition, gas pressure, venting, and safety controls where applicable" / "Inspect economizers, dampers, and sensors where applicable" / "Test heating and cooling operation" / "Check supply and return temperatures" / "Provide a summary of conditions found and recommended repairs"
- Additional Work: "The $395 maintenance price covers standard preventive maintenance. Repairs, replacement parts, refrigerant, extensive coil or equipment cleaning, electrical work, roof repairs, crane services, or corrective work are not included and will be quoted separately." / "Pricing may vary based on equipment condition, accessibility, equipment type, number of units, and required service." / "Preventive maintenance does not guarantee that equipment will not fail. Its purpose is to inspect, clean, test, and identify potential problems before they develop into larger issues."
- CTA "Add To Cart". Image: AI-generated rooftop unit (online-payments-01).

**`/online-payments/p/oil-boiler-maintenance`**
- Meta: "Professional oil boiler maintenance and tune-ups in Trumbull, CT. Includes burner cleaning, nozzle, filter, strainer replacement, system inspection and testing. Additional charges may apply for boilers not maintained within 3 years."
- H1 "Oil Boiler Maintenance" · "$295.00"
- "Keep your oil boiler running safely, reliably, and efficiently with professional oil boiler maintenance from Active Air LLC. Our annual oil heating maintenance includes a thorough inspection and cleaning of the oil burner and boiler, replacement of the oil nozzle, oil filter, and pump strainer, vacuuming and cleaning of the boiler and flue passages as needed, bleeding the oil system, and checking the burner, ignition, electrodes, safety controls, and overall system operation."
- "We also check for visible issues that may affect the performance, reliability, or safe operation of your heating system and make sure the boiler is operating properly before we leave."
- "Additional cleaning and service charges may apply if the oil boiler has not been professionally maintained within the past three years. Older systems that have been neglected may require additional time, cleaning, parts, or corrective work beyond the standard annual maintenance service."
- "Regular oil boiler maintenance can help improve reliability, maintain heating efficiency, and identify potential problems before they become larger repairs."
- "Serving homeowners throughout Trumbull, Monroe, Fairfield, Easton, Shelton, and Bridgeport, Connecticut"
- CTA "Add To Cart". Image: AI-generated oil boiler (online-payments-03).

**`/cart`**: empty Squarespace cart. Title "Active Air LLC | Heating, AC & HVAC Services, Installation | Trumbull & Fairfield County". No content.

---

## Forms (all)

| Form | Where | Fields (all required) | Button | After submit |
|---|---|---|---|---|
| "Home Form 2" | Homepage, under "REQUEST SERVICE" (also renders on every 404 URL) | Name (first/last) · Email · "Subject: New Service Request - Active Air" (single-line text field whose label is the subject line) · Message | Submit | "Your message has been forwarded to the owner, Andrew DeJesus. Expect a response within 30 minutes." |
| "New Form" | `/contact`, under "HVAC SERVICE REQUEST FORM" | Name (first/last) · Email · Message | Send | "Thank you!" |
| (empty) | `/hvac-services-repair` | no fields | — | — |

Neither form asks for a phone number, address or service type. Both use reCAPTCHA and have SMS consent enabled. Submissions go to Squarespace (storage target not visible).

---

## Global facts (exact, with source)

| Item | Value (verbatim) | Where |
|---|---|---|
| Company name | "Active Air LLC" (settings: "Active Air llc") | all pages, schema |
| Phone | "(203) 945-6287" → tel:2039456287; also on crew shirts "203-945-6287" | homepage hero, contact; schema "12039456287". Placeholder "(203) 555-1234" appears in injected schema (wrong). |
| Text | `sms:2039456287` ("CALL NOW" button) | /free-hvac-consultation |
| Email 1 | "Activeair203@gmail.com" (mailto activeair203@gmail.com) | /contact, schema |
| Email 2 | activeairct@outlook.com (link only, no visible text) | announcement bar on every page |
| Address | "4 Aragon Drive, Trumbull, CT, 06611" | Squarespace settings + schema only; not visible on any page. Maps pin in homepage link: @41.2060801,-73.2407895 (different from settings lat/lng 41.2489907,-73.2309301). |
| Hours | Not shown on site. Settings: Mon–Fri "7am-5pm" (ranges/schema say 07:00–19:00), Sat "8am-5pm", Sun "Closed" | settings/schema only |
| Service towns | "Trumbull, Monroe, Easton, Fairfield, Shelton, and Bridgeport, Connecticut"; "Fairfield County"; gallery: Trumbull, Shelton, Fairfield, Monroe; award: "Long Hill, Trumbull, CT" | home, contact meta, free consultation, oil boiler page |
| Commercial area | "rooftop units up to 10 tons" for "restaurants, offices, retail businesses and light-commercial properties in Trumbull and surrounding CT communities" | light commercial product meta |
| License numbers | not stated (only "qualified and licensed technicians") | — |
| Years in business / founding year | not stated | — |
| Experience claims (inconsistent) | "With over 18 years of experience" (home meta) · "With 18 years of experience on the distribution side" (about) · "With over 20 years of experience in the HVAC industry" (free consultation) · "With years of experience" (about meta) | as listed |
| Owner | "Andrew DeJesus, Owner Active Air LLC"; LinkedIn andrewdejesus1010 | home, about |
| Other people | Homepage image filename "Wife and I _ Active Air.PNG", alt "Active Air owners…"; wife's name not stated | home |
| Positioning | "family-owned, owner-operated"; "Family-Owned. Owner-Operated. Personally Accountable."; "you’re speaking directly with the owner—not a call center…" | home, contact, free consultation |
| Response promise | "Expect a response within 30 minutes." | homepage form success message |
| Brands shown | Carrier (furnace), Utica Boilers (oil boilers), Bosch (heat pump; alt "Bosch 20 SEER cold‑climate heat pumps"), Mitsubishi Electric (mini split), A.O. Smith (water heater), Bryant (all job photos), Innovair (Instagram reel). About image filename lists "Trane Carrier Bosch Daikin Fujitsu HVAC Mitsubishi". | images |
| Dealer status | not stated (no "authorized dealer" or program claim anywhere) | — |
| Former employer hint | Trane Supply "Customer Solutions Center" group photo (owner's distribution background) | about |
| Financing | not stated (Klarna enabled at Squarespace checkout but not mentioned) | — |
| Guarantees | not stated as a formal guarantee. Copy: "standing behind our work" (home); "Preventive maintenance does not guarantee that equipment will not fail." (light commercial). The AI share image (global-09, og:image only) says "100% SATISFACTION GUARANTEED", "EXPERIENCED TECHNICIANS", "ON TIME. EVERY TIME." | as listed |
| Promotions | "FREE Home Consultations. Click to schedule yours today!"; "DITCH THE HASSLE! Install options available! We offer top-rates HVAC replacements with minimal disruption to your home."; Free Home Comfort Consultation page | global, footer |
| Prices | Light Commercial Maintenance $395.00 ("Starting at $395 + applicable tax per rooftop unit"); Gas Furnace Maintenance $195.00; Oil Boiler Maintenance $295.00; AC ANNUAL MAINTENANCE PLAN $250.00. No install/replacement prices. | /online-payments |
| Accreditation / awards | BBB Accredited Business badge (footer) + BBB plaque in Instagram reel (date on plaque not legible); BBB rating not stated. BusinessRate "BEST OF 2026 AWARD WINNER … Hvac Contractor, Long Hill, Trumbull, CT, Powered by Google Reviews" (footer image); BusinessRate "Best of 2025 Hvac Contractor Trumbull Connecticut" (Instagram reel image) | footer, home |
| Star rating / review count | not stated anywhere on the site | — |
| Social | Instagram https://www.instagram.com/activeair_llc/ · Facebook https://www.facebook.com/activeair203 (header uses http://facebook.com/activeair203?mibextid=avESrC) · Google Maps https://maps.app.goo.gl/275P12LF1gRHz1EXA · Google profile share links https://share.google/GrFCTgNoZBxRXtuHO and https://share.google/IMscYUoyv3kokJzqO (both → Google kgmid /g/11t79hnpfq) · Google review link https://g.page/r/CR49smEL67M5EBM/review · BBB https://www.bbb.org/us/ct/trumbull/profile/heating-and-air-conditioning/active-air-llc-0111-110091681 · LinkedIn https://www.linkedin.com/in/andrewdejesus1010 | header, home, about, contact |
| Booking | No online booking or calendar. "Free consultation" goes to /contact (form) or texting. | — |
| Payments | Squarespace Commerce store at /online-payments (Stripe). | — |
| Analytics | GA4 G-EZWTGL7X1R | all pages |
| Taglines in brand images | "HEATING & COOLING CONSULTING COMPANY" (social logo), "COMFORT YOU CAN COUNT ON" (AI share image) | images |

### Reviews and testimonials quoted on the site

**Homepage text testimonials (no dates, no star ratings, no source platform stated):**

1. "Andrew and his crew did a great job installing our central air system. They were able to give us exactly what we wanted for a great price. We had Andrew pull permits for the job and he did it in a timely fashion and handled all the scheduling with the town. Andrew also gave us a great price. Would definitely recommend Active Air for all your heating/cooling projects big or small." — Hagen George
2. "Highly recommend Active Air! Andrew responded right away to my inquiry and they came out quickly to fix the problem. They were very professional and explained everything that was going on and what needed to be done. It’s hard to find companies that are both knowledgeable and genuinely helpful, but they exceeded expectations. Highly recommend this company for fast, honest, and reliable service! Will definitely use them again, if needed!" — Jodi
3. "Our new HVAC system from Active Air was an excellent investment, thanks to their exceptional service. Andrew's expertise truly stands out; he's knowledgeable, meticulous, and ensures superior quality. Exactly one year after installation, he proactively contacted us for our annual maintenance, just as promised. He didn't just show up; he sent a detailed plan beforehand and then provided a thorough explanation during the appointment. Active Air earns my highest recommendation for their trustworthiness and commitment to customer satisfaction." — Don Dest

**Google review screenshots inside the homepage Instagram carousel (5 stars each; dates are relative as shown in the screenshot, absolute dates not stated):**

4. Tyson Kubick (1 review · 0 photos), "6 hours ago": "Andrew and his team were professional, courteous, and skilled! So happy we went with Active Air for our first home A/C. I’m even more excited about the high efficiency boiler Andrew and his team will be installing soon. Highly recommend!!" (home-25)
5. Scott Duva (1 review · 0 photos), "6 hours ago": "Needed to replace my ac unit. Andrew was able to come right out and provide me with a quote for several options. He and his team were able to get the equipment and install quickly. Andrew and his team were a pleasure to work with. Install was clean and they took the time to do it right. I would highly recommend them." (home-26)
6. Jose Martinez (4 reviews · 0 photos), "1 week ago": "Active Air really looked out for me on a Sunday morning. Could’ve charged me big money, but instead walked me through some steps and helped me get my HVAC up and running. They are in the business for more than just making money. Will continue calling them for any HVAC need. Can’t thank you enough." (home-27)
7. r p (2 reviews · 0 photos), "2 weeks ago": "Andrew was on point and responsive, came right away, and while I have upgrades to make, my house is back to being cool. Thank you Andrew!!!" (home-28)
8. Tom Rampino (1 review · 0 photos), "3 weeks ago": "A friend of mine recommended this company to me, of course on the first day of the year 91° turned on my air. It was blowing hot. I never met anybody from the company. I reached out, he sent someone who leaving one job and going to another and I happen to be in the middle. He sent his Technician by and They diagnosed my situation, they did a quick repair and Charged my unit and they were on their way to the next job. Very efficient, friendly, and clean. I will be scheduling a preventative maintenance tuneup with the rest of my equipment with them in the very near future I highly recommend." (home-29)

To use these on the new site, re-pull them from Google with real dates and record them in the claim ledger; the site gives no dates or overall rating.

---

## Images

All downloaded at the largest size Squarespace serves (`?format=2500w`; originals checked, none larger). Squarespace sometimes serves WebP for a `.jpg` name; file extensions reflect the real format. Full source URLs in `images/_manifest.json`.

Quality key: **web-ready** = long side ≥ 1,000 px and sharp; **card only** = usable small (≤ ~600 px display); **thumb** = too small for anything but a thumbnail.

| File | Page / use | Size | What it shows | Own / stock / AI | Quality |
|---|---|---|---|---|---|
| global-01-logo-full-color.webp | header (desktop), all pages | 1280×982 | Full-color logo: flame + mini-split icon in circle, "ACTIVE AIR" | logo | web-ready (raster only; no SVG found) |
| global-02-logo-mobile-header.jpg | mobile header | 812×535 | Older logo version, "ACTIVE AIR" in teal | logo | ok |
| global-03-logo-full-transparent.png | homepage (links to Facebook) | 1280×1024 | Full-color logo on transparent | logo | web-ready |
| global-04-logo-grayscale-footer.png | footer | 1280×1024 | Grayscale logo | logo | web-ready |
| global-05-logo-social-consulting-company.png | og:image / social logo | 1019×565 | Older logo + "HEATING & COOLING CONSULTING COMPANY" | logo | ok |
| global-06-logo-icon-basic.webp | og:image (one page) | 257×342 | Logo mark only (older) | logo | thumb |
| global-07-bbb-accredited-badge-footer.png | footer | 187×130 | BBB Accredited Business badge | third-party badge | thumb |
| global-08-businessrate-best-of-2026-award-footer.jpg | footer | 770×989 | BusinessRate Best of 2026 award plaque | award graphic | card only |
| global-09-og-share-ad-heating-tuneup-ai.webp | og:image on 2 product pages | 1254×1254 | Ad: tech in Active Air shirt at furnace, mother and child, "Stay Warm. Stay Worry-Free." | **AI-generated people** | do not use |
| home-01-owner-at-laptop-consultation-tile.jpg | home, Free Consultation tile | 960×960 | Owner (Andrew) in shirt and tie at a laptop, filtered | own (owner) | card only (dated, heavy filter) |
| home-02-tech-wiring-air-handler-maintenance-tile.jpg | home, HVAC Maintenance tile | 1057×966 | Bearded tech wiring a new air handler in a basement | **own job** | web-ready (slightly soft, video-frame look) |
| home-03-tech-servicing-furnace-repair-tile.jpg | home, Service Repair tile | 1179×1584 | Tech in Active Air T-shirt (phone number on back) working in an open furnace | **own job** | web-ready |
| home-04-carrier-furnace-product.png | home, Gas Furnace tile | 465×906 | Carrier Performance furnace cut-out | manufacturer stock | card only |
| home-05-utica-oil-boilers-product.png | home, Oil Boiler tile | 475×350 | Utica oil boilers group | manufacturer stock | card only |
| home-06-bosch-heat-pump-product.webp | home, Heat Pumps tile | 770×1155 | Bosch IDS Ultra outdoor unit + air handler | manufacturer stock | card only |
| home-07-mitsubishi-mini-split-product.webp | home, Mini Split tile | 568×546 | Mitsubishi Hyper-Heat wall unit + condenser | manufacturer stock | card only |
| home-08-ao-smith-water-heater-product.png | home, Hot Water tile | 230×434 | A.O. Smith Signature 300 gas water heater | manufacturer stock | thumb |
| home-09-bryant-condenser-install-trumbull.jpg | home, Equipment Replacement tile | 659×720 | New Bryant condenser by grey siding and rose bush (Trumbull) | **own job** | card only (nice warm photo, small) |
| home-10-owners-truck-marketing-graphic-ai.png | home, trust section | 1536×1024 | Couple in Active Air polos, white truck with logo, Carrier unit, headline text and service icons baked in | **appears AI-generated** (filename "Wife and I"; faces do not clearly match the owner's real photos) | do not use as team photo; confirm with Bobby |
| home-11-owner-office-portrait-ai.jpg | home, owner message | 1402×1122 | Man in suit at desk, Active Air logo wall, BBB plaque | **appears AI-generated/AI-edited** (face resembles owner) | do not use without owner confirmation |
| home-12-ig-commercial-temporary-ac.jpg | home, Instagram post | 1440×1080 | Large hall with red chairs, motion-blurred ("Commercial project, temporary AC!") | own | blurry, not usable |
| home-13-ig-ductless-living-room.jpg | home, Instagram post | 1440×1080 | White ductless wall unit installed above window in a bright living room | **own job** | web-ready |
| home-14-ig-new-construction-site.jpg | home, IG carousel | 640×1136 | New-construction house framing, telehandler (letterboxed) | own (job site) | thumb (letterboxed, small) |
| home-15-ig-bbb-plaque-and-hats.jpg | home, IG carousel | 640×1136 | BBB accreditation plaque, Active Air hats and tumbler on a table | own | card only (9:16) |
| home-16-ig-old-condenser.jpg | home, IG carousel | 640×1136 | Old condenser on mulch (before photo) | own job | card only |
| home-17-ig-mitsubishi-crane-lift.jpg | home, IG carousel | 640×1136 | Mitsubishi outdoor unit, A&A Crane lifting at a brick school building | own job | card only |
| home-18-ig-businessrate-2025-plaque.jpg | home, IG carousel | 640×1136 | BusinessRate Best of 2025 HVAC Contractor plaque | award graphic | card only |
| home-19-ig-logo-black-reel.jpg | home, IG carousel | 640×1136 | Logo on black | logo | thumb |
| home-20-ig-logo-consulting-reel.jpg | home, IG carousel | 640×1136 | Older logo "HEATING & COOLING CONSULTING COMPANY" | logo | thumb |
| home-21-ig-tech-ladder-three-condensers.jpg | home, IG carousel | 720×1278 | Tech on ladder in Active Air shirt, three new condensers, Active Air hat on top unit | **own job, crew** | card only (9:16, good for phone) |
| home-22-ig-colonial-house-exterior.jpg | home, IG carousel | 720×1280 | White colonial house with porch (letterboxed) | own (customer home) | thumb (letterboxed) |
| home-23-ig-ductless-multizone-exterior.jpg | home, Instagram post | 1440×1080 | Multi-zone mini-split condenser with white line-set covers on a beige house, evening light | **own job** | web-ready |
| home-24-ig-office-building-1069.jpg | home, IG carousel | 640×552 | Brick office building, number "1069" (screenshot) | unclear | thumb |
| home-25…29-ig-google-review-*.jpg | home, IG carousel | 640×1136 | Google review screenshots (Tyson Kubick, Scott Duva, Jose Martinez, r p, Tom Rampino) | screenshots | text source only |
| home-30-ig-july-4th-graphic.jpg | home, IG carousel | 640×1136 | "4 July Independance Day" *[sic]* graphic | stock graphic | not usable |
| home-31-ig-innovair-mini-split-hat.jpg | home, IG carousel | 1179×2096 | Active Air hat on an Innovair mini-split condenser | **own job** | web-ready (portrait 9:16) |
| home-32-review-us-on-google-badge.png | home, reviews | 840×318 | "Review us on Google" + 5 stars | stock graphic | n/a |
| home-33-five-gold-stars-graphic.jpg | home, reviews | 840×259 | Five gold 3D stars | stock clip art | n/a |
| about-01-owner-andrew-dejesus-portrait.jpg | about | 1179×1199 | Andrew DeJesus in Active Air jacket, arms crossed, autumn backyard, circular crop on black | **own (owner)** | web-ready (circle crop baked in) |
| about-02-trane-supply-customer-solutions-team.jpg | about | 1179×1070 | Group of ~11 men at Trane Supply Customer Solutions Center; Andrew in red shirt | own (pre-Active Air, distribution era) | ok, dated |
| free-hvac-consultation-01-template-desk-notebook-ai.png | free consultation | 896×1200 | Burl-wood desk, notebook, vase | **AI template image** (Squarespace "imgg") | do not use |
| hvac-services-repair-01/02/03-template-*-ai.png | services page | 896×1200, 1376×768, 896×1200 | Interior-design swatches, room, laptop | **AI template images** | do not use |
| hvac-gallery-01-trumbull-bryant-condenser.png | gallery (Trumbull) | 456×293 | Bryant condenser, rose bush (same job as home-09) | **own job** | thumb |
| hvac-gallery-02-shelton-bryant-air-handler.png | gallery (Shelton) | 353×477 | Bryant air handler in foil-insulated closet | **own job** | thumb |
| hvac-gallery-03-fairfield-bryant-condenser.png | gallery (Fairfield) | 424×517 | New Bryant condenser on pad, grass (Instagram screenshot) | **own job** | thumb |
| hvac-gallery-04-monroe-bryant-condenser.png | gallery (Monroe) | 363×483 | Bryant condenser on riser by grey house | **own job** | thumb |
| online-payments-01-light-commercial-rooftop-unit-ai.png | store | 1200×896 | Rooftop unit on gravel roof | **AI-generated** (Squarespace "imgg") | do not use |
| online-payments-02-gas-furnace-ai.png | store | 1200×896 | White furnace in basement | **AI-generated** | do not use |
| online-payments-03-oil-boiler-ai.png | store | 1200×896 | Red oil boiler in basement | **AI-generated** | do not use |
| online-payments-04-maintenance-agreement-cover.jpg | annual plan | 1179×1498 | "HVAC AGREEMENT / PLANNED MAINTENANCE AGREEMENT" cover with logo, BBB badge, "ACTIVE AIR LLC Trumbull CT 06611 203.945.6287" | own document | ok |
| online-payments-05-tech-servicing-condenser.png | annual plan | 500×625 | Tech from behind in Active Air shirt and hat, condenser fan lifted out | **own job, crew** | card only (warm, good subject) |
| home-video-01-logo-animation.mp4 (+ poster .jpg) | homepage hero | 1080×1812, 5.2 s, with audio | 3D logo reveal animation | brand animation | usable as is |

**Own photos usable at web size (≥ ~1,000 px, sharp):** 7
1. home-03 tech servicing furnace in Active Air shirt (1179×1584), the best crew shot
2. home-02 tech wiring new air handler (1057×966)
3. home-13 ductless unit in living room (1440×1080)
4. home-23 multi-zone mini-split exterior with line-set covers (1440×1080)
5. home-31 Active Air hat on Innovair condenser (1179×2096, portrait)
6. about-01 owner portrait (1179×1199, circle crop on black)
7. about-02 Trane Supply group photo (1179×1070, dated, distribution era)

Usable only as small cards/phone tiles: home-01, home-09, home-15, home-16, home-17, home-21, online-payments-05. Thumbnails only: the 4 gallery images, home-14, home-22, home-24. No truck photo, no real crew group photo, no van, and nothing golden-hour wide enough for a hero.

---

## Duplicates, drafts, broken links and oddities

1. **12 broken internal links (HTTP 404)** from the homepage service tiles: `/consultations`, `/maintenance`, `/hvac-maintenance`, `/new-page`, `/oil-boiler-replacement-installation`, `/heat-pump`, `/heat-pump-equipment-installation-replacement`, `/mini-split`, `/mini-split-installation`, `/hot-water-hearter` (typo), `/hot-water-tank-replacement`, `/hvac-equipment-replacement`. Visitors see homepage content because the 404 page shows the homepage, so the breakage is hidden. `/new-page` is a leftover draft slug.
2. **Duplicate homepage URL:** `/hvac-home-page-active-air-llc` = `/`, both indexable and in the sitemap.
3. **`/hvac-services-repair` is an unedited template** (consulting-firm copy, fake testimonials, AI interior photos, empty form) and is the first nav item.
4. **Placeholder SEO code injected site-wide:** `yourwebsite.com` URLs, "(203) 555-1234", "Your Street Address", and "Your Page Title Here" title on the homepage. Every page has two `<title>` tags and two meta descriptions.
5. **Two different emails:** activeair203@gmail.com (contact, schema) and activeairct@outlook.com (announcement bar).
6. **Experience claims disagree:** 18 years (distribution) vs "over 18 years" vs "over 20 years in the HVAC industry".
7. **Hours disagree** inside settings (7am-5pm text vs 07:00–19:00 ranges/schema) and are not shown on the site.
8. **CTA mislabels:** "CALL NOW" opens SMS; header "FREE CONSULTATION" goes to /contact, not the consultation page; the announcement bar "Click to schedule" opens an email; hero paragraphs all link to a Google search panel.
9. **AI imagery presented as company:** home-10 (owners + truck graphic), home-11 (owner office portrait), global-09 (share image with AI tech and family), plus AI template images on the store, services and consultation pages. Under Starwell rules these cannot be used as the team or customers.
10. **Alt-text problems:** logo alt says "AquaTherm"; Google badge alt ends "#chatgpt"; gallery alts are keyword lists.
11. **Typos on page:** "top-rates", "Social Midea Links", "hot-water-hearter", "large than 1’inch", "Independance" (image), split link text "VAC MAINTENANCE" / "HE" + "AT PUMPS INSTALLATIO N".
12. **Annual plan stock = 1:** it sells out after one order.
13. **Gallery is thin:** 4 towns, one small screenshot each, no text.
14. **No visible address, hours, license number, rating, review count, financing or dealer status** anywhere on the site.
