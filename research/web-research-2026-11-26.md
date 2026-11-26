# Active Air LLC: web research

- **Date of all checks:** 2026-11-26. Every fact below was observed on that date, unless a line gives another date.
- **Company:** Active Air LLC (also styled "Active Air, LLC"), Trumbull, CT. Phone (203) 945-6287. https://www.activeairllc.com
- **How it was checked:** web search, page fetches, a headless browser (Playwright) for Google Maps, Facebook, Energize CT and CT eLicense, and the CT open-data APIs on data.ct.gov.
- **Sites that blocked fetching:** Yelp (HTTP 403, both fetch and browser), HomeAdvisor (403), Justia trademarks (403), and Energize CT's plain fetch (403; the browser worked).
- Paired file: `../claim-ledger-draft.md`.

---

## 0. Headline findings for Bobby

1. **No HVAC license found.** The live CT eLicense lookup and the DCP license dataset (refreshed 2026-11-25) show nothing for "Andrew DeJesus" or for "Active Air". There is no S1/S2/S3/D1/D2/B1/HTG credential under either name.
   - A control search for a Trumbull competitor (Wilson R Sanchez, HTG.0403521-S1) returned results, so the search itself works.
   - The site says "licensed technicians" but shows no license number.
   - **Ask the owner which licensed contractor holds the license for the company's HVAC work, with type, number and expiry.** Until we have that, the new site cannot show a license number.
2. **Google: 5.0 stars, 57 reviews.** The listing name is "Active Air LLC". No street address shows; it is set up as a service-area listing. It has 91 photos, and the most recent review is about 6 days old.
3. **BBB accredited since 7/31/2024**, with 4 BBB reviews averaging 5/5. The rating letter is inconsistent:
   - the profile page fetched today shows **A**;
   - several BBB search snippets show **A-**.
   - Treat it as "A" (profile page) and recheck before launch.
4. **CT business record:** ACTIVE AIR LLC, registered **2019-10-02**, status Active. Its sub-status is **"Annual report past due"** (it was due 2026-03-31), which is a compliance flag. The principal is Andrew DeJesus.
5. **Years in business is muddy.**
   - The LLC was formed in 2019.
   - Yelp and Nextdoor say "Founded in 2019 and officially launched in May 2024".
   - BBB says "Business started: 10/2/2023" and "Years in business: 3".
   - The owner's own story is "18 years of experience on the distribution side". That is HVAC equipment distribution, not contracting.
   - One site page says "over 20 years of experience in the HVAC industry", and other pages say "over 18 years".
   - **Do not claim years in business beyond what Bobby confirms with the owner.**
6. **Not in the Energize CT Heat Pump Installer Network.** All 96 network contractors within 10 miles of 06611 were checked, and Active Air is not among them. Do not claim Energize CT rebate eligibility "through us".
7. **No financing, warranty terms or manufacturer dealer status were found anywhere public.**
8. **Some Nextdoor recommendations may not be independent.** Three of the visible recommendations on one Nextdoor page are from "K. D." in Trumbull, and the owner intro post there is signed "Karen DeJesus". Do not use Nextdoor posts as independent reviews.

---

## 1. Reviews by platform

| Platform | Rating | Count | Status | Source |
|---|---|---|---|---|
| Google Business Profile ("Active Air LLC") | **5.0** | **57** | Confirmed in browser, 2026-11-26 | https://www.google.com/maps/place/Active+Air+LLC/@41.2060801,-73.2407895,11z/data=!3m1!4b1!4m6!3m5!1s0x216c7bd22e2cae3b:0x39b3eb0b61b23d1e!8m2!3d41.2060801!4d-73.2407895!16s%2Fg%2F11t79hnpfq |
| Facebook (Active Air, @activeair203) | "100% recommend" | **5 reviews** | Confirmed in browser (logged-out view) | https://www.facebook.com/activeair203/ |
| BBB | 5/5 customer-review average; letter grade **A** on the profile (A- in search snippets) | **4 reviews**; 1 complaint in 3 years, 0 in 12 months | Confirmed | https://www.bbb.org/us/ct/trumbull/profile/heating-and-air-conditioning/active-air-llc-0111-110091681 |
| Yelp ("Active Air", /biz/active-air-trumbull-2) | One Google snippet shows "5.0 · Review by Ryan H."; Yelp category snippets show "Active Air. 0.0" | **Not confirmed** | Yelp blocks fetching (403) | https://www.yelp.com/biz/active-air-trumbull-2 |
| Nextdoor (two pages) | No rating shown | No total shown; 5–6 posts visible | Page "active-air-llc-trumbull-ct" shows **"Neighborhood Favorite" 2025** | https://nextdoor.com/pages/active-air-llc-trumbull-ct/ and https://nextdoor.com/pages/activeair_llc-trumbull-ct/ |
| Angi / HomeAdvisor | none found | none found | No Active Air LLC profile found. A HomeAdvisor "Active Air Inc" page exists (rated.ActiveAirHVAC.143067369) but is blocked (403) and its link to this company is unconfirmed. | https://www.homeadvisor.com/rated.ActiveAirHVAC.143067369.html |
| Thumbtack | none found | none found | Search turned up nothing | — |
| Houzz | none found | none found | Search turned up nothing | — |
| Rheem Find-a-Pro | no rating | — | Listed as "Active Air", 4 Aragon Dr, phone **(203) 793-6835** (a different number). No tier or Pro Partner badge; services and hours are empty. | https://www.rheem.com/find-a-pro/active-air-trumbull-ct/ |
| trustedlocalcontractors.com (aggregator) | 5.0 from 43 reviews; "19+ years" | — | **Unreliable. Do not use.** The figures are stale or invented and conflict with the CT record. | https://trustedlocalcontractors.com/fairfield/hvac/trumbull/ |

### 1a. Google Business Profile details
- **Name:** "Active Air LLC". **Category:** HVAC contractor.
- **Contact:** website activeairllc.com, phone (203) 945-6287. Hours showed "Closed · Opens 7 AM" at the time of the check.
- **Address:** none shown; it is a service-area listing. The website links to Google Maps coordinates 41.2060801, -73.2407895.
- **Photos:** 91.
- **No "Book online" button** on the listing. The competitor subagent saw the same in the Maps search results.
- **Review topic tags** Google shows: "heat pump installation" 5, "ac unit replacement" 2, "polite crew" 3, "thorough testing" 2, plus 6 more.
- **Latest owner post (Sep 28, 2026):** a 275-gallon oil tank replacement in **Monroe, CT**.
- **Review request link** on the site: https://g.page/r/CR49smEL67M5EBM/review
- Google served a "limited view" to the logged-out browser, so only 5 reviews loaded. **To build a dated review feed, Bobby or the owner needs to export the reviews from the GBP dashboard or use the Places API.**

### 1b. Recent Google reviews (visible to a logged-out viewer)
- Dates are Google's relative labels on 2026-11-26. Approximate absolute dates are in brackets.
- Excerpts are kept short. Before quoting anything in full on the new site, pull the full text from the GBP itself.

| Reviewer (as displayed) | When | Job | Town named? | Short excerpt |
|---|---|---|---|---|
| Christopher Connolly | "6 days ago" [~2026-11-20] | Gas furnace replacement; tagged "Great price" | No | "owner came over right away gave me estimate and had new one installed in a day" |
| Linda Kelly (Local Guide) | "a month ago" [~Oct 2026] | System install | No | "very professional and great with communication and follow up" |
| Gillian | "a month ago" [~Oct 2026] | Central air replacement; tagged "Great price" | No | "Hired Andrew and crew to replace my central air system." |
| Patrick.Marina Peluso | "3 months ago" [~Aug 2026] | AC repair (dual run capacitor) after another company misdiagnosed it; tagged "HVAC system repair", "Great price" | No | "Not a full system overhaul like the other company implied." |
| Hagen George (Local Guide) | "5 months ago" [~Jun 2026] | Central air install; Andrew pulled the town permits; tagged "Install AC" | No | "Andrew pull permits for the job" |

**Gap:** none of the visible reviews names a town. Featured reviews that name both the job and the town need the full GBP review export, or the owner can ask customers.

### 1c. BBB reviews
All four are 5 stars. Source: https://www.bbb.org/us/ct/trumbull/profile/heating-and-air-conditioning/active-air-llc-0111-110091681/customer-reviews

| Reviewer | Date | Job |
|---|---|---|
| Ryan H | 11/21/2025 | Install. Praises Andrew's knowledge and an installer named **Wilmer**. |
| Adiar M | 10/28/2025 | Mini-split system for a **car-tinting shop** (commercial); chose Active Air over 4 quotes. |
| Anja S | 10/19/2025 | Fast AC replacement during a heat wave, then furnace help. |
| Judy K. | 08/08/2024 | General service; "upfront about costs". |

### 1d. Testimonials on the company's own site
- Named as "Hagen George", "Jodi" and "Don Dest" (activeairllc.com home page; text saved in `inventory/raw/home.txt`).
- The site also shows five screenshot images of Google reviews. Visible reviewer names in them include Tyson Rubrick, Scott Dove, Jose Martinez and Tim Rampino (OCR from thumbnails). Verify against the GBP before reuse.

### 1e. BBB complaint
1 complaint in the last 3 years and 0 in the last 12 months. The details are **not published** ("There are no matching results"). Source: https://www.bbb.org/us/ct/trumbull/profile/heating-and-air-conditioning/active-air-llc-0111-110091681/complaints

---

## 2. Licensing and registration

### 2a. CT DCP occupational license: NOT FOUND
- **Live eLicense lookup** (https://www.elicense.ct.gov/Lookup/LicenseLookup.aspx), 2026-11-26:
  - First "Andrew", last "DeJesus": **0 results**
  - First "Andrew", last "De Jesus": **0 results**
  - DBA "Active Air": **0 results**
  - Last "DeJesus", city "Trumbull": 8 results, **none of them HVAC**. They are nursing, real estate, EMT and one DOL apprentice registration of unknown trade under the same surname, with no link to the company established.
  - Control search "Wilson Sanchez": returned HTG.0403521-S1, so the lookup works.
- **DCP dataset "State Licenses and Credentials"** (https://data.ct.gov/resource/ngch-56tr.json, rows updated 2026-11-25):
  - no HVAC credential for "ANDREW … DEJESUS / DE JESUS";
  - nothing with businessname, dba or name containing "ACTIVE AIR";
  - nothing at "4 ARAGON DR" related to the business.
  - An "ANDY DEJESUS" in **Meriden** holds ELC.0210809-E2 (Electrical Unlimited Journeyperson, active until 2027-09-30). Different city and trade, **no evidence it is the same person**. Do not use.
- The BBB profile lists no license and refers readers to CT DCP.
- **Action:** ask the owner for the license holder, the license type (for example S1/S3/D1/B1/G1) and its number and expiry, plus the license of any installer such as "Wilmer". Then verify each on eLicense. **License: GAP.**

### 2b. CT Secretary of the State business record
Source: Connecticut Business Registry – Business Master, https://data.ct.gov/resource/n7gp-d28j.json (record created 2026-11-25), and the Principals dataset, https://data.ct.gov/resource/ka36-64k6.json

| Field | Value |
|---|---|
| Name | ACTIVE AIR LLC |
| Type | LLC, domestic (Connecticut) |
| Account no. | 1323363 |
| Registration date | **2019-10-02** |
| Status | **Active**, sub-status **"Annual report past due"** |
| Annual report due | 2026-03-31 |
| Business / mailing address | 4 Aragon Dr., Trumbull, CT 06611 |
| Business email on file | activeair203@gmail.com |
| NAICS on file | "All Other Business Support Services (561499)". This is not an HVAC code; the owner may want to update it. |
| Principal | **ANDREW DEJESUS** (Trumbull). No designation is given in the dataset. |
| Woman-, veteran- or minority-owned flags | all false |

---

## 3. Owner, story and business facts

- **Owner:** **Andrew DeJesus**, "Owner/Operator" per BBB; the site signs "Andrew DeJesus - Owner". Reviewers call him "Andrew" or "Andy".
- **Story, from the site's About page** (https://www.activeairllc.com/about):
  - "a family-owned business, deeply rooted in Fairfield County";
  - "With 18 years of experience on the distribution side, I've aided contractors in selecting the ideal equipment";
  - "I've personally traveled to manufacturing companies".
  - An About-page photo shows a Trane Supply "Customer Solutions Center" group, which fits a distribution background. Andrew's employer is not confirmed; do not name it.
- **Family:**
  - the site image "Wife and I _ Active Air" has alt text "Active Air owners";
  - the Nextdoor owner intro is signed "Karen DeJesus".
  - That Karen is Andrew's wife and co-owner is **likely but unconfirmed**. Ask before naming her.
- **Crew:** an installer named "Wilmer" (BBB review by Ryan H). Surname and license unknown.
- **Years in business** (see headline 5):
  - LLC formed 2019-10-02 (C);
  - public "launch" May 2024 (Yelp and Nextdoor company text);
  - BBB says business started 10/2/2023, 3 years.
  - **Recommend:** "Family-owned since 2019" only if the owner agrees. Otherwise lead with the owner's 18 years in HVAC distribution, worded exactly that way. Do not say "18 years in business".
- **Phone numbers seen:**
  - **(203) 945-6287** on the site, GBP, BBB, FB, IG and Nextdoor. This is primary.
  - (203) 793-6835 on the Rheem listing.
  - (203) 267-0555 in a Yelp snippet and on MapQuest.
  - The other two may be old or tracking numbers. Ask the owner.
- **Emails seen:**
  - activeairct@outlook.com (About page, Nextdoor);
  - activeair203@gmail.com (Contact page, Facebook, CT registry).
- **Prices published on the site** (online-payments pages):

  | Service | Price |
  |---|---|
  | AC Annual Maintenance Plan | $250 |
  | Gas Furnace Maintenance | $195 |
  | Oil Boiler Maintenance | $295 |
  | Light Commercial Maintenance | "Starting at $395 + applicable tax per rooftop unit" |

  Each comes with exclusions text. Sources:
  - https://www.activeairllc.com/online-payments/p/annual-hvac-maintenance-plan
  - https://www.activeairllc.com/online-payments/p/gas-furnace-maintenance
  - https://www.activeairllc.com/online-payments/p/oil-boiler-maintenance
  - https://www.activeairllc.com/online-payments/p/light-commercial-maintenance
- **Offer:** "FREE Home Consultations" (site-wide banner).
- **Manufacturer and dealer status: none confirmed.**
  - The site says "We install and replace Bosch 20 SEER cold-climate heat pumps" in an image caption. That is an install claim, not a dealer claim.
  - Brands seen in images or posts:
    - Bosch IDS Ultra
    - Mitsubishi (crane lift photo, image alt text)
    - Innovair (social post)
    - Rheem (customer post)
    - HEIL (Instagram caption snippet: "HEIL heating")
    - Carrier, A. O. Smith and Utica (image filenames only)
    - Trane, Carrier, Bosch, Daikin, Fujitsu and Mitsubishi (filename of the distributor-event photo)
  - The Rheem Find-a-Pro page lists "Active Air" with no program tier.
  - **No Mitsubishi Diamond, Bosch Pro, Carrier FAD, Lennox or Daikin Comfort Pro status was found.** Manufacturer locators were not searchable by fetch. **GAP: ask the owner.**
- **Financing:** none found on the site or any profile. **GAP.**
- **Warranties:** none stated publicly. **GAP.**
- **Utility rebates (Energize CT):** the company is not in the HPIN list (96 contractors within 10 miles of 06611, checked via the energizect.com contractor search API on 2026-11-26). The site makes no rebate claims. **Do not claim it.**
- **Awards:**
  - Nextdoor "Neighborhood Favorite" 2025 (C, on the Nextdoor page).
  - Site images show "BusinessRate Best of 2025 – Hvac Contractor – Trumbull" and "Best of 2026 – Long Hill, Trumbull". BusinessRate is a commercial badge vendor built on Google reviews. It is low-value and should only be used if Bobby wants it. Not independently verified.
  - The BBB Accreditation plaque appears in a photo.
- **Commercial work:**
  - the BBB review (car-tinting shop mini-split);
  - the site caption "Commercial project, temporary AC!";
  - a social post: "Our first commercial contract".
- **Permits:** a Google review says Andrew pulled the town permits.

## 4. Social profiles and photos

| Profile | URL | Stats (2026-11-26) | Own photos? |
|---|---|---|---|
| Instagram @activeair_llc ("ACTIVE AIR LLC") | https://www.instagram.com/activeair_llc/ | 147 followers, 129 following. Bio: "Family-Owned … Trumbull, CT … BBB Accredited". Latest thumbnail dated Nov 7, 2026. | Yes: job reels and posts, embedded on the site |
| Facebook "Active Air (Heating Cooling Consulting Company)" | https://www.facebook.com/activeair203/ | 255 followers, 18 following; 100% recommend (5 reviews). Latest post Nov 8, 2026 ("ANOTHER PREMIUM HVAC INSTALLATION BY ACTIVE AIR LLC!"). | Yes: before-and-after posts |
| Google Business Profile | (Maps link above) | 91 photos | Yes |
| Nextdoor | the two pages above | — | — |
| Yelp | https://www.yelp.com/biz/active-air-trumbull-2 | blocked | unknown |

**Note:** Facebook's service-area list adds towns the site does not list: Fairfield, Trumbull, **Weston**, Monroe, **Newtown**, **Westport**, Shelton, Easton and Bridgeport. BBB lists Trumbull, Shelton, Fairfield, Monroe, plus Bridgeport, Easton and Stratford on the BBB search page. **Confirm the service towns with the owner.**

### Best real photos (Squarespace CDN, all on activeairllc.com)
Base path is `https://images.squarespace-cdn.com/content/v1/652d6b19798aeb069cebb698/`.

| What it shows | Path (add to base) | Use |
|---|---|---|
| **Owners with the wrapped Active Air pickup truck** (logo, "Heating & Cooling Repair & Replacement") | `42daa171-a88d-4208-a31a-0ead66cf59b5/Wife+and+I+_+Active+Air.PNG` | Best brand and truck shot. The PNG may carry overlay graphics, so ask the owner for the original. |
| Owner portrait (Andrew, outdoors, branded jacket) | `07667083-499a-47e5-8d2f-fcbe5d171f30/OWNER.jpeg` | — |
| Tech working in a furnace or air handler (cap, side view) | `6137a268-4c52-4b56-b488-9c7bc6001286/2E6EC90F-3312-4BD1-92C0-4E43A50F8B16.jpeg` | Real crew at work |
| Tech in a branded hoodie servicing equipment | `0b9a83b6-42b0-404c-82a0-9883041bcfd4/Maintenance+tune+up+hvac.jpg` | Real crew at work |
| New condenser beside a Trumbull home | `f2b0ba92-d244-4e60-92eb-4531481dfb11/Trumbull.jpg` | Job photo |
| Crane lift of Mitsubishi equipment (commercial) | `1775872076265-XEWRM5CN6HGDZQ7CXFH2/image-asset.jpeg` | Commercial job |
| Multiple condensers with a branded hat | `1775872076265-E1TVW88SW193XSX4IXGV/image-asset.jpeg` | Job photo |
| New condenser on a pad | `1775872076265-XUF2FGW0XNLI82M1IK49/image-asset.jpeg` | Job photo |
| BBB plaque and branded hat | `1775872076265-77FUTI6DH54SR9ARNMPK/image-asset.jpeg` | Trust signal |
| Mini-split condenser at a house | `1775872076265-2ZVL22ZXXBLE1S2XFFP8/image-asset.jpeg` | Job photo |
| Gallery job photos | `1737347957231-KI1JR3JLVGLRTWZROCHD/AC+SUMMER+JOB.PNG`, `1737348568544-QMARAGJ5YPEKZ0502OQU/AC+REPLACEMENT.PNG` | Job photos |

Also:
- **Instagram reels and posts embedded on the site** (job video, good for 9:16 film reference):
  - DL3hJ4XOvfj, DL3hPfhOKVJ, DL3hVwEuuit, DL3hZF_O0xT, DL3hcqWOUWz, DL3khenOMP4, DLoLD_tOslU, DLsNiNGu2vv, DMlAzVLODXR, DMlC1JsuK9X, DN4ZqMTjAMs, DN9gfzADDem, DONOuWdjO7b, DOhf2XzjJm7, DOr1yn9DOpi, DPCAPgZjaoQ, DPP1C7jjMF9 (as https://www.instagram.com/reel/<id>/);
  - posts DMea0eKOunX, DPP6GImDOuW, DPoj-L3jnSt.
- **Do not use, likely AI or stock:**
  - files named `imgg-*.png` (on the free-consultation, services and online-payments pages);
  - the "Man in business suit at desk" office shots (`98DC0FAD…jpg`, `HVAC+Heating+cooling+AC.JPG`);
  - the staged interiors (`1775872076265-P3FYGYRI58XC4C9XBZJB`, `1776188762877-RMDE0HAFUO1PHLSAYPAY`);
  - the GOOGLE.png alt text contains "#chatgpt".
  - Treat all of these as unverified, and never present them as the team.
- An "AquaTherm" logo (`1587e3af-…/FullLogo_Transparent.png`) appears on the site with no explanation. **GAP: ask the owner** whether it is a partner or sister company.

## 5. Local competitors
Ratings are as shown in Google Maps results for "hvac contractor Trumbull CT" on 2026-11-26. Active Air showed **5.0 (57)** in the same results.

| Competitor | Town | Website | Google | Online booking | Financing shown | License on site | Badges |
|---|---|---|---|---|---|---|---|
| wtech22 Heating and Cooling | Trumbull (18 Botsford Pl) | https://www.wtech22.com | 5.0 (122) | Housecall Pro "Book Online", plus chat; Book button on Google | Wisetack with worked monthly examples (e.g. "$1,200 … $104.89 a month for 12 months at an 8.9% APR"); Service Finance, Synchrony, Smart-E | "CT State License #403521" | Mitsubishi Diamond Contractor; Energize CT heat pump installer; BBB A+ |
| Ventrella Mechanicals | Trumbull (16 Mayflower Dr) | https://www.ventrellamechanicals.com | 5.0 (112) | No; "Book Now!" goes to a form. Has a real **"Text Now!"** SMS button. | none | none | none; Energize CT HPIN member |
| Levco | Trumbull (55 Merritt Blvd) | https://calllevco.com | 4.7 (692); its own site shows "4.7 … Based on 693 reviews" | No; forms, "Ask Phil" chatbot | Watercress Financial, no terms | "CT Lic. # 303607" | "Family-owned since 1980"; spells out Energize CT heat pump incentives |
| Edgerton, Inc. | Monroe (786 Main St) | https://www.edgertonhvac.com | 4.8 (636) | No link; "CALL OR TEXT 203-268-6279" in header | Wells Fargo, GreenSky, Smart-E, no terms | S1 0302765, SM 0000160, P1 0287886 | Trane; "Since 1956"; Google review widget with relative dates; condo-specific maintenance plans |
| Tyler Heating, AC, Refrigeration | Stratford (255 Hathaway Dr) | https://www.tylerair.com | 4.8 (896) | ServiceTitan "Schedule Online", plus "Lucy" chat | Synchrony; Energize CT Heating Loan "as low as 4.49%"; Smart-E "as low as 6.49%"; Lennox 60-month | HTG-0396156-S1 | Carrier President's Award (multi-year); dated coupons |
| CELCO Heating & AC | Bridgeport (467 Bishop Ave) | https://celcoct.com | 4.7 (982), **Sponsored** listing | No; 13-field form | Wells Fargo, no terms | S1-392747 | Trane, NATE, ACCA, BBB A+; coupons expiring 3/31/2027 |

Also in the results: R & R Heating and Cooling (Shelton area), 4.9 (232), with Housecall Pro booking on Google. Its site was not reviewed.

**What competitors do well, and the gaps Active Air can take:**
- **Price ranges:** no competitor publishes repair or install price ranges. Active Air already publishes maintenance prices, so a no-form price-range section would be unique here, provided the owner supplies real ranges.
- **Monthly payments:** only wtech22 shows a worked monthly-payment example. That is the model to copy once Active Air has a lender.
- **Live review display:** only Levco and Edgerton show a live Google rating and count, and nobody tags reviews with job and town.
- **Text buttons:** rare. Only Ventrella and Edgerton have them.
- **Online booking:** real-time booking exists only at wtech22 and R&R (Housecall Pro) and at Tyler (ServiceTitan). Active Air's GBP has no Book button.
- **License numbers:** wtech22, Levco, Edgerton, Tyler and CELCO all display one. Active Air currently cannot.
- **Review count:** Active Air's 57 is the lowest count in the results. The two other 5.0 shops have about twice as many.
- **Unverified:** all competitor maintenance-plan prices (none published), Tyler's Mitsubishi and York status, and competitor Yelp, Facebook and BBB counts.

## 6. Negatives and risks

1. **No HVAC license on record** for the owner or the company name (section 2a). **Highest priority.**
2. **CT annual report past due** (due 2026-03-31). The LLC is still "Active", but CT can administratively dissolve an entity for non-filing. Owner action.
3. **1 BBB complaint** in 3 years, details unpublished. The BBB letter grade shows A on the profile and A- in snippets.
4. **Inconsistent claims on the current site:**
   - "over 18 years" vs "over 20 years" of experience;
   - two emails, three phone numbers;
   - title tag "Your Page Title Here";
   - many service URLs return 404: /heat-pump, /mini-split, /maintenance, /hot-water-hearter, /oil-boiler-replacement-installation, /hvac-equipment-replacement, /consultations, /new-page (see `inventory/raw/_crawl.json`).
5. **Nextdoor recommendations from "K. D."** likely come from family; do not present them as neighbor endorsements.
6. **Likely AI-generated images** on the current site (`imgg-*` files, staged office and interior shots) must not appear on the rebuild as real.
7. **BusinessRate "Best of" badges** are a paid, vendor-generated award. Use with care.
8. **Name clashes:**
   - BBB also lists **Active Air Cooling & Heating, Inc.** (White Plains, NY, A+): https://www.bbb.org/us/ny/white-plains/profile/heating-and-air-conditioning/active-air-cooling-heating-inc-0121-39833
   - and **Active Air Systems, Inc.** (Flushing, NY, A+): https://www.bbb.org/us/ny/flushing/profile/heating-and-air-conditioning/active-air-systems-inc-0121-78421
   - and Carrier lists an **Active Air, Inc.** in Calera, AL.
   - A HomeAdvisor "Active Air Inc" profile exists (blocked, link unknown).
   - A USPTO mark "ACTIVEAIR" (serial 86325067) exists. Justia was blocked, so its owner, goods and status are **unverified**: https://trademarks.justia.com/863/25/activeair-86325067.html
   - One search snippet showed a BBB listing "Active Air, LLC, 1812 Seaview Ave, Bridgeport". The BBB name search on 2026-11-26 did not return it, so it is unconfirmed.
   - In CT, no other active "Active Air" HVAC business was found.
9. **Aggregator noise:** trustedlocalcontractors.com says "19+ years" and "43 reviews", and one search summary placed the BBB listing at 18 Botsford Pl (wtech22's address). Both are wrong or stale; ignore them.

## 7. Gaps to ask Bobby or the owner
1. The HVAC license holder, with type, number and expiry, and other trade licenses (plumbing P-, electrical E-, sheet metal SM-) if they do hot water or electrical work.
2. Proof of insurance (general liability and workers' comp) behind the "licensed and insured" wording.
3. Which "since" year to show: 2019 (LLC formed) or 2024 (launch).
4. The owner's distribution employer and history, if he wants it named.
5. Whether Karen DeJesus is co-owner, and whether she may be named or pictured.
6. Crew names and permission to show them, e.g. Wilmer.
7. Manufacturer dealer or contractor programs: Bosch, Mitsubishi, Rheem, HEIL, Innovair.
8. Financing lender and terms, if any.
9. Labor and parts warranty terms.
10. Energize CT: whether the company intends to join HPIN, which affects heat pump rebate messaging.
11. Real price ranges for big jobs: AC replacement, furnace, heat pump, mini-split, oil-to-heat-pump, water heater.
12. The definitive service-town list.
13. Which phone number is canonical, and whether 793-6835 and 267-0555 are live.
14. The Yelp rating and count, which need a manual check because Yelp blocks bots.
15. A full Google review export from the GBP owner dashboard, with dates and any town mentions.
16. Original high-resolution photo and video files, especially the truck and crew.
17. What "AquaTherm" is.
18. Filing the overdue CT annual report.
