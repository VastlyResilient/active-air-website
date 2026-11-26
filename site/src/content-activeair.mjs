// Active Air LLC — content. Every fact traces to ../claim-ledger.md (retrieved 2026-11-26).
// {gap:'…'} = fact still needed from Active Air (hidden from visitors, listed in gaps.txt). {gap, alt} shows alt instead.
import fs from 'node:fs';
import { gapNote, HIDE_GAPS, ic, esc } from './templates.mjs';

const man = JSON.parse(fs.readFileSync(new URL('../public/img/m/manifest.json', import.meta.url)));
// m(id, alt, pos) -> media object. Illustrations get the visible label; own photos never do.
const m = (id, alt, pos, portraitId) => {
  const x = man[id]; if (!x) throw new Error('missing image ' + id);
  const o = { scene: { base: `/img/m/${id}`, widths: x.widths, w: x.w, h: x.h }, alt: (x.kind === 'illustration' ? 'Illustration: ' : '') + alt, ill: x.kind === 'illustration', pos };
  if (portraitId && man[portraitId]) { const p = man[portraitId]; o.portrait = { base: `/img/m/${portraitId}`, widths: p.widths }; }
  return o;
};
const card = (big, small, label, icon) => ({ card: { big, small, label, icon } });

const PHONE = '(203) 945-6287', TEL = 'tel:+12039456287', SMS = 'sms:+12039456287', EMAIL = 'activeair203@gmail.com';
const GOOGLE = 'https://maps.app.goo.gl/275P12LF1gRHz1EXA', GREVIEW = 'https://g.page/r/CR49smEL67M5EBM/review';
const BBB = 'https://www.bbb.org/us/ct/trumbull/profile/heating-and-air-conditioning/active-air-llc-0111-110091681';
const FB = 'https://www.facebook.com/activeair203/', IG = 'https://www.instagram.com/activeair_llc/', ND = 'https://nextdoor.com/pages/active-air-llc-trumbull-ct/';
const BOOK = '/free-hvac-consultation/';
const TOWNS = 'Trumbull, Monroe, Easton, Fairfield, Shelton and Bridgeport';

const S = {
  heat: '/heating-repair/', furnace: '/gas-furnace-replacement-installation/', boiler: '/oil-boiler-replacement-installation/',
  hp: '/heat-pump-equipment-installation-replacement/', mini: '/mini-split-installation/', ac: '/air-conditioning/',
  wh: '/hot-water-tank-replacement/', maint: '/hvac-maintenance/', all: '/hvac-services-repair/'
};

export const site = {
  name: 'Active Air LLC', legal: 'Active Air LLC', origin: 'https://www.activeairllc.com',
  desc: `Family-owned, owner-operated heating and cooling in ${TOWNS}, CT. Furnaces, oil boilers, heat pumps, mini-splits, AC and tune-ups. Talk directly with the owner.`,
  phone: PHONE, tel: TEL, book: BOOK, favicon: '/img/favicon.png',
  logoLight: '/img/logo-light.webp', logoDark: '/img/logo-dark.webp', logoW: 879, logoH: 200,
  nav: [['Services', S.all], ['Prices', '/hvac-maintenance/'], ['Reviews', '/#reviews'], ['Our Story', '/about/'], ['Contact', '/contact/']],
  footBlurb: `Family-owned, owner-operated heating and cooling for ${TOWNS} and nearby Fairfield County towns.`,
  footLinks: [['Services', S.all], ['Maintenance prices', S.maint], ['Our Story', '/about/'], ['Gallery', '/hvac-gallery/'], ['Online payments', '/online-payments/'], ['Contact', '/contact/']],
  footLines: [`<li><a href="${SMS}">Text ${PHONE}</a></li>`, `<li><a href="mailto:${EMAIL}">${EMAIL}</a></li>`, `<li>Trumbull, CT 06611</li>`, `<li><a href="${BBB}" target="_blank" rel="noopener">BBB Accredited since July 2024</a></li>`],
  copyNote: `Family-owned and owner-operated in Trumbull, CT. ${gapNote('CT HVAC license type and number needed (none found on elicense.ct.gov)')}${gapNote('Business hours needed (site settings disagree: 7am–5pm vs 7am–7pm)')}`
};

const schema = {
  '@context': 'https://schema.org', '@type': 'HVACBusiness', name: 'Active Air LLC', telephone: '+1-203-945-6287', email: EMAIL,
  url: 'https://www.activeairllc.com/', address: { '@type': 'PostalAddress', addressLocality: 'Trumbull', addressRegion: 'CT', postalCode: '06611', addressCountry: 'US' },
  areaServed: ['Trumbull', 'Monroe', 'Easton', 'Fairfield', 'Shelton', 'Bridgeport'].map(t => ({ '@type': 'City', name: `${t}, CT` })),
  founder: { '@type': 'Person', name: 'Andrew DeJesus' }, sameAs: [FB, IG, BBB]
};

// ---------- shared blocks ----------
const callBtn = [`Call ${PHONE}`, TEL, 'light', 'phone'];
const bookBtn = ['Book a free consultation', BOOK, 'glass'];

const platforms = [
  { key: 'google', name: 'Google', score: '5.0', stars: true, count: '57 reviews', href: GOOGLE },
  { name: 'BBB', icon: 'shield-check', score: 'Accredited', count: 'since July 2024 · 4 reviews, all 5 stars', href: BBB },
  { name: 'Facebook', icon: 'message-square', score: '100%', count: 'recommend · 5 reviews', href: FB },
  { name: 'Nextdoor', icon: 'house', score: '2025', count: 'Neighborhood Favorite', href: ND }
];
const R = {
  connolly: { name: 'Christopher Connolly', meta: 'Google review · Nov 2026 · Gas furnace replacement', when: 'Nov 2026', text: 'Owner came over right away gave me estimate and had new one installed in a day.' },
  gillian: { name: 'Gillian', meta: 'Google review · Oct 2026 · Central air replacement', when: 'Oct 2026', text: 'Hired Andrew and crew to replace my central air system.' },
  peluso: { name: 'Patrick.Marina Peluso', meta: 'Google review · Aug 2026 · AC repair', when: 'Aug 2026', text: 'Not a full system overhaul like the other company implied.' },
  kelly: { name: 'Linda Kelly', meta: 'Google review · Oct 2026 · System install', when: 'Oct 2026', text: 'Very professional and great with communication and follow up.' },
  hagen: { name: 'Hagen George', meta: 'Google review · Jun 2026 · Central air install', when: 'Jun 2026', text: 'Andrew and his crew did a great job installing our central air system. We had Andrew pull permits for the job and he did it in a timely fashion and handled all the scheduling with the town.' },
  jodi: { name: 'Jodi', meta: 'Review on activeairllc.com · Repair', when: '', text: 'Andrew responded right away to my inquiry and they came out quickly to fix the problem. They were very professional and explained everything that was going on and what needed to be done.' },
  don: { name: 'Don Dest', meta: 'Review on activeairllc.com · New HVAC system', when: '', text: 'Exactly one year after installation, he proactively contacted us for our annual maintenance, just as promised. He didn’t just show up; he sent a detailed plan beforehand and then provided a thorough explanation during the appointment.' }
};
const reviewsBlock = (items, extra = {}) => ({
  id: 'reviews', tag: 'Reviews', h2: extra.h2 || 'What neighbors say after we leave',
  lede: extra.lede || 'Rated 5.0 from 57 Google reviews. A few in their own words, with the job they hired us for.',
  platforms, items: items.map(k => R[k]),
  ctas: [['Read all reviews on Google', GOOGLE, 'dark'], ['Leave us a review', GREVIEW, 'light']]
});
const reviewTownGap = gapNote('Featured reviews that name the town (none of the visible Google reviews name one; needs the Google review export)');

const ctaBlock = (h2, text, img) => ({ tag: 'Get started', h2, text, img: img || m('cta-evening', 'a warm family room at dusk with lamps on and snow outside', null, 'cta-evening-p'), ctas: [callBtn.slice(0, 2).concat(['light', 'phone']), ['Book a free consultation', BOOK, 'glass']] });

const priceRows = [
  { title: 'Gas furnace tune-up · $195', body: 'Safety and combustion checks, burner, flame sensor and ignition cleaning, venting, blower and a full heating cycle. If anything else is needed, we explain it and give you the price before doing the work.' },
  { title: 'Oil boiler tune-up · $295', body: 'Burner and boiler cleaning with a new nozzle, oil filter and pump strainer, then a check of ignition, safety controls and the whole system. Extra cleaning may be needed if the boiler hasn’t been serviced in three years.' },
  { title: 'AC annual maintenance plan · $250', body: 'Refrigerant and pressure checks, electrical connections, condenser motor and fan, evaporator coil, condensate drain flush and treatment, and a standard 1-inch filter.' },
  { title: 'Light commercial · from $395 per rooftop unit', body: 'Preventive maintenance for rooftop units up to 10 tons at restaurants, offices and shops. Plus tax; repairs and parts are quoted separately.' },
  { title: 'Replacements and new systems', body: { gap: 'Typical price ranges for furnace, boiler, heat pump, mini-split and AC replacement', alt: 'Every replacement starts with a free in-home consultation and a written quote, so you know the price before any work starts.' } },
  { title: 'Monthly payments', body: { gap: 'Financing terms (lender, APR, monthly example) — none published; Klarna is switched on at checkout but never mentioned' } }
];
const prices = (extra = {}) => ({ id: 'prices', tag: 'Prices', h2: extra.h2 || 'Straight answers on price', lede: 'Tune-up prices are fixed and listed here. Bigger jobs get a free consultation and a written quote first.', rows: priceRows, wide: true, ast: false, open: extra.open ?? 0, toggle: true });

// ---------- HOME ----------
const home = {
  path: '/', title: 'Active Air LLC | Heating & Cooling in Trumbull & Fairfield County, CT', desc: site.desc, schema, ogImage: '/img/m/hero-home-1280.webp',
  body: (T, s) => `
${T.hero(s, { label: 'Active Air', ctas: [callBtn, bookBtn], slides: [
  { img: m('hero-home', 'a white colonial in Fairfield County at golden hour with a heat pump beside the house', '62% 50%', 'hero-home-p'), rate: '5.0 on Google · 57 reviews', h1: 'Heating\u00a0& Cooling For Trumbull\u00a0& Fairfield County', desc: 'Family-owned and owner-operated. When you call, you talk directly with Andrew, the owner.' }
] })}
${T.trust({ tag: 'Trusted locally', statement: 'A family-owned HVAC company that listens first, explains your options, <span class="pill">' + ic('message-square', 1.8) + '</span> and recommends what makes sense for your home and budget', avatars: ['C', 'G', 'H'], avatarIcon: 'star', trusted: `Rated 5.0 from 57 Google reviews · <a href="${GOOGLE}" target="_blank" rel="noopener">Read them on Google</a>`, counters: [{ v: '5.0', label: 'Google rating' }, { v: '57', label: 'Google reviews' }, { v: '18', label: 'Years Andrew spent helping contractors choose equipment' }] })}
${T.services({ tag: 'Our services', h2: 'Heating, Cooling And Hot Water, Done Right', lede: `Repairs, replacements and yearly tune-ups for homes in ${TOWNS}.`, ctas: [['Book a free consultation', BOOK, 'dark'], [`Call ${PHONE}`, TEL, 'light', 'phone']], cards: [
  { icon: 'flame', title: 'No heat & heating repair', text: 'Furnace not heating or boiler stopped? We find the problem and tell you the price first.', href: S.heat },
  { icon: 'heater', title: 'Gas furnace replacement', text: 'High-efficiency gas furnaces, sized to your home and installed cleanly.', href: S.furnace },
  { icon: 'thermometer', title: 'Oil boiler replacement', text: 'New oil boilers for hot-water heat, and oil tank swaps when needed.', href: S.boiler },
  { icon: 'fan', title: 'Heat pumps', text: 'Cold-climate heat pumps that heat through a Connecticut winter and cool all summer.', href: S.hp },
  { icon: 'air-vent', title: 'Ductless mini-splits', text: 'Single and multi-zone systems for rooms without ducts, additions and shops.', href: S.mini },
  { icon: 'snowflake', title: 'Air conditioning', text: 'AC repair and central air replacement, sized to your home.', href: S.ac },
  { icon: 'droplets', title: 'Water heaters', text: 'Tank water heater replacement with new shutoffs and connections.', href: S.wh },
  { icon: 'wrench', title: 'Tune-ups from $195', text: 'Gas furnace $195, oil boiler $295, AC plan $250. Prices listed up front.', href: S.maint },
  { icon: 'calendar-check', title: 'Free consultation', text: 'Thinking about a new system? Talk it through with the owner at no cost.', href: BOOK, more: 'Book a visit' }
] })}
${T.carousel({ id: 'systems', tag: 'Systems we install', cta: ['See all services', S.all], slides: [
  { title: 'Gas Furnaces', text: 'High-efficiency gas furnaces with new venting and ductwork connections, sized to your home instead of the biggest box on the truck.', img: m('furnace', 'a newly installed gas furnace in a tidy basement', null, 'furnace-p'), href: S.furnace },
  { title: 'Oil Boilers', text: 'New oil-fired boilers for hot-water baseboard and radiator heat, with neat piping and a clean basement when we leave.', img: m('boiler', 'a new oil boiler in a fieldstone basement', null, 'boiler-p'), href: S.boiler },
  { title: 'Cold-Climate Heat Pumps', text: 'One system to heat and cool. We install cold-climate heat pumps built for Connecticut winters.', img: m('heatpump-snow', 'a heat pump on a wall bracket above snow beside a colonial', null, 'heatpump-snow-p'), href: S.hp },
  { title: 'Ductless Mini-Splits', text: 'Multi-zone ductless systems like this one Active Air installed, with tidy line-set covers on the outside of the house.', img: m('own-multizone', 'A multi-zone ductless system Active Air installed on a two-story house', null, 'own-multizone-p'), href: S.mini }
] })}
${T.accordion({ id: 'why', tag: 'Why Active Air', h2: 'Honest Advice From The Person Who Owns The Company', rows: [
  { title: 'You talk to the owner', body: 'Your call, message and project go directly to Andrew. No call center, no runaround and no getting passed from person to person.' },
  { title: 'Options, not a sales pitch', body: 'We look at your current system, your comfort concerns and long-term costs, then recommend what makes sense. Not simply the newest or most expensive option.' },
  { title: 'Done the right way', body: 'Every system we install represents our name. We take pride in doing things the right way, not the easy way, and we treat your home like our own.' },
  { title: 'Equipment know-how', body: 'Andrew spent 18 years on the distribution side helping contractors choose equipment, and still visits manufacturers to learn new technology.' }
], photos: [m('own-tech-condenser', 'An Active Air technician with the company phone number on his shirt', '50% 40%'), m('kitchen', 'a kitchen table with coffee and a folder of heating options'), m('own-tech-furnace', 'An Active Air technician working inside a furnace', '40% 50%'), m('own-trane-team', 'Andrew (red shirt) with the team at a Trane Supply customer center during his distribution years', '50% 40%')] })}
${T.accordion({ ...prices(), cls: 'pricesec' })}
${T.team({ tag: 'Our team', h2: 'The People Who Come To Your Home', lede: 'A small local crew led by the owner. The same people answer the phone and do the work.', people: [
  { img: m('own-owner', 'Andrew DeJesus, owner of Active Air', '50% 0%'), name: 'Andrew DeJesus', role: 'Owner', href: '/about/' },
  { img: m('own-tech-furnace-card', 'An Active Air technician servicing a furnace', '40% 50%'), name: { gap: 'Technician names and roles', alt: 'Our technicians' }, role: 'Repairs & installs', href: S.heat },
  { img: m('own-tech-condenser', 'An Active Air technician servicing an outdoor AC unit', '50% 40%'), name: { gap: 'Maintenance tech name', alt: 'Tune-up visits' }, role: 'Yearly maintenance', href: S.maint }
] })}
${T.reviews(reviewsBlock(['connolly', 'gillian', 'peluso', 'hagen', 'jodi', 'don']))}${reviewTownGap}
${T.accordion({ id: 'faq', tag: 'Questions', h2: 'Common Questions', ast: false, wide: true, toggle: true, rows: faqHome })}
${T.ctaBand(ctaBlock('Not Sure What You Need? Start With A Free Consultation', 'Tell us about your current system and what you’d like to improve. You don’t need to know exactly what you need before you call.'))}
`
};
const faqHome = [
  { title: 'Is the consultation really free?', body: 'Yes. Active Air offers a free Home Comfort Consultation for anyone thinking about a new system, replacing an old one or improving comfort and efficiency.' },
  { title: 'Who will I talk to?', body: 'The owner, Andrew DeJesus. Your call, text or message goes straight to him, not to a call center.' },
  { title: 'How fast will you get back to me?', body: `Call or text ${PHONE} for the quickest answer. Calls and texts go straight to Andrew.` },
  { title: 'Which towns do you serve?', body: `${TOWNS}, and other towns in Fairfield County. ${gapNote('Confirm the final town list (Facebook also lists Weston, Newtown and Westport)')}` },
  { title: 'How much is a tune-up?', body: 'Gas furnace $195, oil boiler $295 and the AC annual plan $250. Light commercial rooftop units start at $395 plus tax.' },
  { title: 'Do you handle permits?', body: 'Yes, for jobs that need one. One customer, Hagen George, wrote that Andrew pulled the permits for his central air install and handled the scheduling with the town.' },
  { title: 'Are you licensed and insured?', body: { gap: 'License type/number and insurance confirmation (not found in CT eLicense lookup on 2026-11-26)' } },
  { title: 'Do you offer financing?', body: { gap: 'Financing offer and terms' } }
];

// ---------- SERVICE PAGES ----------
const steps = [
  { title: 'Call, text or book', body: `Tell Andrew what’s going on at ${PHONE}. For a new system, book a free consultation.` },
  { title: 'We look at your home', body: 'We check your current system, ductwork or piping and comfort concerns, and talk through the options.' },
  { title: 'A clear written quote', body: 'You get a recommendation and the price in writing before any work starts.' },
  { title: 'Clean, careful install', body: 'Our crew installs it, tests it and leaves the work area clean. We follow up when maintenance is due.' }
];
const svc = d => ({
  path: d.path, title: `${d.title} | Active Air LLC · Trumbull, CT`, desc: d.desc, schema: { ...schema, '@type': 'Service', serviceType: d.title, provider: { '@type': 'HVACBusiness', name: 'Active Air LLC', telephone: '+1-203-945-6287' } },
  body: (T, s) => `
${T.hero(s, { short: true, label: d.title, ctas: [callBtn, bookBtn], slides: [{ img: { ...d.img, eager: true }, rate: '5.0 on Google · 57 reviews', h1: d.h1, desc: d.lead }] })}
${T.trust({ id: 'about-service', tag: d.title, statement: d.statement, avatars: ['C', 'G', 'H'], avatarIcon: 'star', trusted: `Rated 5.0 from 57 Google reviews · <a href="${GOOGLE}" target="_blank" rel="noopener">Read them on Google</a>`, counters: d.counters || [{ v: '5.0', label: 'Google rating' }, { v: '57', label: 'Google reviews' }, { v: '18', label: 'Years Andrew spent helping contractors choose equipment' }] })}
${T.services({ id: 'what', tag: 'What’s included', h2: d.whatH2, lede: d.whatLede, ctas: [['Book a free consultation', BOOK, 'dark'], [`Call ${PHONE}`, TEL, 'light', 'phone']], cards: d.cards })}
${T.accordion({ id: 'how', tag: 'How it works', h2: 'From First Call To Finished Job', rows: d.steps || steps, photos: d.photos })}
${d.priceRows ? T.accordion({ id: 'prices', tag: 'Prices', h2: d.priceH2 || 'What It Costs', lede: d.priceLede || 'Every replacement starts with a free consultation and a written quote, so you know the price before any work starts.', rows: d.priceRows, wide: true, ast: false, toggle: true }) : ''}
${T.reviews(reviewsBlock(d.reviews, { h2: 'Reviews From Customers', lede: 'Rated 5.0 from 57 Google reviews.' }))}
${d.faq ? T.accordion({ id: 'faq', tag: 'Questions', h2: 'Common Questions', ast: false, wide: true, toggle: true, rows: d.faq }) : ''}
${T.ctaBand(ctaBlock(d.ctaH2 || 'Talk It Through With The Owner', d.ctaText || 'Call or text Andrew, or book a free consultation. You’ll get a straight answer and a written price before any work.', d.ctaImg))}
`
});
const replacePrice = what => [{ title: `${what} replacement`, body: { gap: `Typical installed price range for ${what.toLowerCase()} replacement`, alt: 'Priced after a free in-home consultation, with a written quote before any work starts.' } }, { title: 'Monthly payments', body: { gap: 'Financing terms (monthly payment example)' } }];

const svcPages = {
  'heating-repair': svc({ ctaImg: m('h2-winter', 'a Cape Cod house after snowfall with warm windows', null, 'h2-winter-p'), path: S.heat, title: 'Heating repair & no-heat service', h1: 'No Heat? Heating Repair In Trumbull And Nearby', lead: 'Gas furnaces and oil boilers diagnosed and repaired, with the price explained before any work.',
    desc: `Heating repair and no-heat service for gas furnaces and oil boilers in ${TOWNS}, CT. Talk directly with the owner of Active Air.`,
    img: m('repair', 'an open furnace with a multimeter and tools on a drop cloth', null, 'repair-p'),
    statement: 'When the heat stops, you want someone who answers <span class="pill">' + ic('phone', 1.8) + '</span> comes out quickly and tells you plainly what is wrong',
    whatH2: 'Repairs For Furnaces And Boilers', whatLede: 'We work on gas furnaces and oil boilers, the two most common heating systems in our area.',
    cards: [{ icon: 'flame', title: 'No-heat calls', text: 'We find why the system stopped and get the heat back on where a repair makes sense.' }, { icon: 'heater', title: 'Gas furnace repair', text: 'Ignition, flame sensors, blowers, controls, venting and safety switches.' }, { icon: 'thermometer', title: 'Oil boiler repair', text: 'Burners, nozzles, pumps, controls and circulators on hot-water systems.' }, { icon: 'shield-check', title: 'Repair or replace?', text: 'If a repair isn’t worth it, we’ll say so and show you the options.' }],
    photos: [m('own-tech-furnace', 'An Active Air technician working inside a furnace', '40% 50%'), m('kitchen', 'a quote and coffee on a kitchen table'), m('own-tech-wiring', 'An Active Air technician wiring an air handler', '60% 40%'), m('maintenance', 'tools and a fresh filter beside a furnace')],
    priceRows: [{ title: 'Repair visits', body: { gap: 'Service-call / diagnostic fee', alt: 'We diagnose the problem and tell you the repair price before doing the work.' } }],
    reviews: ['jodi', 'peluso', 'connolly'],
    faq: [{ title: 'Should I repair or replace my furnace?', body: 'It depends on the age of the system, what failed and what a repair costs. We’ll explain both options and the price of each so you can decide.' }, { title: 'Do you work on oil boilers?', body: 'Yes. We repair and replace oil-fired boilers and do yearly oil boiler tune-ups for $295.' }] }),
  'gas-furnace-replacement-installation': svc({ ctaImg: m('equipment', 'a newly finished furnace and water heater replacement', null, 'equipment-p'), path: S.furnace, title: 'Gas furnace replacement', h1: 'Gas Furnace Replacement And Installation', lead: 'High-efficiency gas furnaces sized to your home, with a written quote before any work.',
    desc: `Gas furnace replacement and installation in ${TOWNS}, CT. Free consultation, written quote, family-owned.`,
    img: m('furnace', 'a newly installed gas furnace in a basement', null, 'furnace-p'),
    statement: 'A new furnace should be sized to your home <span class="pill">' + ic('ruler', 1.8) + '</span> not picked because it’s the biggest or most expensive',
    whatH2: 'What A Furnace Replacement Includes', whatLede: 'We look at your ductwork, venting and gas line, then recommend the right size and efficiency.',
    cards: [{ icon: 'ruler', title: 'Right size', text: 'Proper equipment selection and sizing for comfort and lower running costs.' }, { icon: 'heater', title: 'High efficiency', text: 'High-efficiency furnaces with new intake and exhaust venting where needed.' }, { icon: 'wrench', title: 'Clean install', text: 'New connections, start-up testing and a clean work area when we leave.' }, { icon: 'calendar-check', title: 'Yearly follow-up', text: 'We reach out when your first tune-up is due.' }],
    photos: [m('kitchen', 'a kitchen table with heating options'), m('equipment', 'a new furnace and water heater after a full replacement'), m('own-tech-furnace', 'An Active Air technician at a furnace', '40% 50%'), m('desk', 'a desk with a heating comparison sheet')],
    priceRows: replacePrice('Gas furnace'), reviews: ['connolly', 'don', 'hagen'] }),
  'oil-boiler-replacement-installation': svc({ ctaImg: m('about-street', 'a tree-lined Fairfield County street in autumn', null, 'about-street-p'), path: S.boiler, title: 'Oil boiler replacement', h1: 'Oil Boiler Replacement And Installation', lead: 'New oil-fired boilers for hot-water heat, with neat piping and honest advice on your options.',
    desc: `Oil boiler replacement, installation and repair in ${TOWNS}, CT. Oil tank replacement too. Talk directly with the owner.`,
    img: m('boiler', 'a new oil boiler in a fieldstone basement', null, 'boiler-p'),
    statement: 'Replacing an oil boiler is a big decision. We explain <span class="pill">' + ic('message-square', 1.8) + '</span> every option, including whether to stay with oil',
    whatH2: 'Boilers, Tanks And Hot-Water Heat', whatLede: 'From a single boiler swap to a new oil tank, we handle the whole heating system.',
    cards: [{ icon: 'thermometer', title: 'Oil boiler replacement', text: 'New boilers for baseboard and radiator heat, piped and tested.' }, { icon: 'droplets', title: 'Oil tank replacement', text: 'Basement tank replacement, like a 275-gallon tank we replaced in Monroe.' }, { icon: 'flame', title: 'Boiler repair', text: 'Burners, nozzles, pumps, controls and circulators.' }, { icon: 'wrench', title: 'Tune-ups $295', text: 'Yearly oil boiler maintenance with nozzle, filter and strainer.' }],
    photos: [m('desk', 'a desk with a heating comparison sheet'), m('baseboard', 'a baseboard radiator under a sunny winter window'), m('own-tech-wiring', 'An Active Air technician at work', '60% 40%'), m('kitchen', 'a kitchen table with heating options')],
    priceRows: [...replacePrice('Oil boiler'), priceRows[1]], reviews: ['don', 'jodi', 'kelly'] }),
  'heat-pump-equipment-installation-replacement': svc({ ctaImg: m('h3-living', 'a living room with a ductless unit in warm afternoon light', null, 'h3-living-p'), path: S.hp, title: 'Heat pump installation', h1: 'Cold-Climate Heat Pumps For Connecticut Homes', lead: 'One system that heats through winter and cools all summer, sized and installed by a local family company.',
    desc: `Cold-climate heat pump installation and replacement in ${TOWNS}, CT. Free consultation with the owner.`,
    img: m('heatpump-snow', 'a heat pump on a wall bracket above snow', null, 'heatpump-snow-p'),
    statement: 'A heat pump only saves money when it’s sized and set up for your house <span class="pill">' + ic('house', 1.8) + '</span> so that’s where we start',
    whatH2: 'Heat Pumps, Ducted And Ductless', whatLede: 'We install cold-climate heat pumps, including high-efficiency 20 SEER models built for Connecticut winters.',
    cards: [{ icon: 'fan', title: 'Cold-climate models', text: 'Heat pumps designed to keep heating on the coldest nights.' }, { icon: 'house', title: 'Ducted or ductless', text: 'Whole-house ducted systems or ductless heads room by room.' }, { icon: 'ruler', title: 'Sized for your home', text: 'We look at insulation, rooms and how you use your home.' }, { icon: 'snowflake', title: 'Cooling too', text: 'The same system replaces your central air in summer.' }],
    photos: [m('heatpump', 'a heat pump beside a white clapboard house in autumn'), m('kitchen', 'heating options on a kitchen table'), m('own-multizone-sq', 'A ductless system Active Air installed', '50% 50%'), m('desk', 'a desk with a heating comparison sheet')],
    priceRows: [...replacePrice('Heat pump'), { title: 'Rebates', body: { gap: 'Energize CT heat pump rebate participation (Active Air is not listed in the Energize CT installer network as of 2026-11-26)' } }], reviews: ['kelly', 'don', 'hagen'] }),
  'mini-split-installation': svc({ ctaImg: m('minisplit-bed', 'a ductless unit above a bedroom window', null, 'minisplit-bed-p'), path: S.mini, title: 'Ductless mini-split installation', h1: 'Ductless Mini-Splits, Single And Multi-Zone', lead: 'Quiet, efficient heating and cooling for rooms without ducts, additions, finished basements and shops.',
    desc: `Ductless mini-split installation in ${TOWNS}, CT. Single and multi-zone systems, residential and light commercial.`,
    img: { ...m('own-ductless-living', 'A ductless mini-split Active Air installed in a living room', '50% 40%', 'own-ductless-living-p') },
    statement: 'We’ve become experts at ductless systems <span class="pill">' + ic('air-vent', 1.8) + '</span> efficient, cost-saving and comfortable year-round',
    whatH2: 'What A Ductless Install Includes', whatLede: 'From one room to a whole-house multi-zone system, including light commercial spaces.',
    cards: [{ icon: 'air-vent', title: 'Single-zone', text: 'One indoor unit for a bedroom, addition or office.' }, { icon: 'house', title: 'Multi-zone', text: 'Several rooms on one outdoor unit, each with its own temperature.' }, { icon: 'wrench', title: 'Neat line sets', text: 'Covered line sets on the outside, like the install pictured here.' }, { icon: 'shield-check', title: 'Commercial too', text: 'We’ve installed mini-splits for businesses, including a car-tinting shop.' }],
    photos: [m('minisplit-bed', 'a ductless unit above a bedroom window'), m('own-multizone-sq', 'A multi-zone ductless system Active Air installed', '50% 50%'), m('own-hat-innovair', 'An Active Air cap on a ductless outdoor unit', '50% 30%'), m('kitchen', 'a quote on a kitchen table')],
    priceRows: replacePrice('Mini-split'), reviews: ['kelly', 'jodi', 'don'] }),
  'air-conditioning': svc({ ctaImg: m('h1-colonial', 'a white colonial at golden hour', null, 'h1-colonial-p'), path: S.ac, title: 'Air conditioning repair & replacement', h1: 'AC Repair And Central Air Replacement', lead: 'Repairs on hot days and central air replacements, with permits handled when needed.',
    desc: `Air conditioning repair, central AC replacement and installation in ${TOWNS}, CT. Family-owned, owner-operated.`,
    img: m('ac', 'a central air condenser beside a brick ranch with hydrangeas', null, 'ac-p'),
    statement: 'Sometimes it’s a part, not a new system <span class="pill">' + ic('wrench', 1.8) + '</span> and we’ll tell you which one you need',
    whatH2: 'Cooling Repairs And Replacements', whatLede: 'We repair and replace central air conditioning, and pull permits when the job needs one.',
    cards: [{ icon: 'snowflake', title: 'AC repair', text: 'Capacitors, contactors, fan motors, refrigerant and drain problems.' }, { icon: 'fan', title: 'Central air replacement', text: 'New condensers and coils sized to your home.' }, { icon: 'shield-check', title: 'Permits handled', text: 'We take care of town permits and scheduling when needed.' }, { icon: 'calendar-check', title: 'AC plan $250', text: 'Yearly AC maintenance to catch problems before summer.' }],
    photos: [m('own-ladder', 'An Active Air technician installing three new AC condensers', '50% 30%'), m('own-bryant-trumbull', 'A new condenser Active Air installed in Trumbull', '50% 50%'), m('own-condenser-fairfield', 'A new condenser Active Air installed in Fairfield', '50% 50%'), m('kitchen', 'a written quote on a kitchen table')],
    priceRows: [...replacePrice('Central AC'), priceRows[2]], reviews: ['peluso', 'gillian', 'hagen'] }),
  'hot-water-tank-replacement': svc({ ctaImg: m('cta-evening', 'a warm family room at dusk', null, 'cta-evening-p'), path: S.wh, title: 'Water heater replacement', h1: 'Water Heater Replacement And Installation', lead: 'Tank water heaters replaced with new shutoffs and connections, and the old one taken away.',
    desc: `Water heater replacement and installation in ${TOWNS}, CT. Gas and tank water heaters, family-owned.`,
    img: m('waterheater', 'a new tank water heater in a basement', null, 'waterheater-p'),
    statement: 'Hot water is easy to take for granted <span class="pill">' + ic('droplets', 1.8) + '</span> until it’s gone, so we keep the swap simple',
    whatH2: 'What A Water Heater Swap Includes', whatLede: 'We replace tank water heaters and check the connections and safety items around them.',
    cards: [{ icon: 'droplets', title: 'Tank replacement', text: 'A new water heater sized for your household.' }, { icon: 'wrench', title: 'New connections', text: 'New shutoffs and water connections where needed.' }, { icon: 'shield-check', title: 'Safety checks', text: 'Venting and relief valve checked before we leave.' }, { icon: 'house', title: 'Whole-system view', text: 'Replacing your heating too? We can plan both together.' }],
    photos: [m('equipment', 'a new furnace and water heater installed together'), m('kitchen', 'a quote on a kitchen table'), m('own-tech-wiring', 'An Active Air technician at work', '60% 40%'), m('desk', 'a desk with a comparison sheet')],
    priceRows: replacePrice('Water heater'), reviews: ['jodi', 'don', 'kelly'] }),
  'hvac-maintenance': svc({ ctaImg: m('own-wiring-hero', 'An Active Air technician wiring an air handler', '60% 40%', 'own-wiring-hero-p'), path: S.maint, title: 'HVAC maintenance & tune-ups', h1: 'Tune-Ups With Prices Listed Up Front', lead: 'Gas furnace $195, oil boiler $295, AC plan $250. Light commercial from $395 per rooftop unit.',
    desc: `HVAC maintenance and tune-ups in ${TOWNS}, CT: gas furnace $195, oil boiler $295, AC plan $250, light commercial from $395.`,
    img: m('maintenance', 'a furnace tune-up with a fresh filter and tools on a drop cloth', null, 'maintenance-p'),
    statement: 'Yearly maintenance catches small problems early <span class="pill">' + ic('calendar-check', 1.8) + '</span> and keeps your system running safely',
    counters: [{ v: '$195', label: 'Gas furnace tune-up' }, { v: '$295', label: 'Oil boiler tune-up' }, { v: '$250', label: 'AC annual plan' }],
    whatH2: 'Four Ways To Keep Things Running', whatLede: 'Every visit ends with your system run through a full cycle and the work area cleaned.',
    cards: [{ icon: 'heater', title: 'Gas furnace · $195', text: 'Safety, combustion and carbon monoxide testing, burners, ignition, venting and blower.' }, { icon: 'thermometer', title: 'Oil boiler · $295', text: 'New nozzle, oil filter and pump strainer, cleaning, bleeding and safety checks.' }, { icon: 'snowflake', title: 'AC plan · $250', text: 'Refrigerant, electrical, coils, drains and a standard 1-inch filter.' }, { icon: 'house', title: 'Light commercial · from $395', text: 'Rooftop units up to 10 tons for restaurants, offices and shops (plus tax).' }],
    photos: [m('own-tech-condenser', 'An Active Air technician on a maintenance visit', '50% 40%'), m('own-tech-furnace', 'An Active Air technician servicing a furnace', '40% 50%'), m('baseboard', 'a baseboard radiator in a sunny room'), m('desk', 'a desk with a maintenance checklist')],
    steps: [{ title: 'Book your visit', body: `Call or text ${PHONE}, or send a request online.` }, { title: 'We inspect and clean', body: 'A full checklist for your system type, from safety tests to cleaning.' }, { title: 'Anything extra is priced first', body: 'If parts or repairs are needed, we explain the issue and give you the price before doing the work.' }, { title: 'We remind you next year', body: 'Customers like Don Dest hear from us when the next tune-up is due.' }],
    priceH2: 'Maintenance Prices', priceLede: 'Prices are listed up front. If anything extra is needed, you get the price before we do the work.', priceRows: priceRows.slice(0, 4), reviews: ['don', 'peluso', 'jodi'],
    faq: [{ title: 'Why does an oil boiler cost more?', body: 'Oil tune-ups include a new nozzle, oil filter and pump strainer plus more cleaning. Boilers not serviced in three years may need extra time.' }, { title: 'Can I pay online?', body: { gap: 'Online checkout link for maintenance (the old Squarespace store goes away with the new site)', alt: 'Not on this page yet. Call or text to book, and we’ll confirm the price and how to pay when you schedule.' } }] })
};

// ---------- OTHER PAGES ----------
const servicesIndex = {
  path: S.all, title: 'HVAC Services & Repair | Active Air LLC · Trumbull, CT', desc: `Heating repair, furnace and boiler replacement, heat pumps, mini-splits, AC, water heaters and tune-ups in ${TOWNS}, CT.`,
  body: (T, s) => `
${T.hero(s, { short: true, label: 'Services', ctas: [callBtn, bookBtn], slides: [{ img: { ...m('equipment', 'a newly finished heating system replacement', null, 'equipment-p'), eager: true }, rate: '5.0 on Google · 57 reviews', h1: 'HVAC Services And Repair', desc: `Everything that heats and cools your home, from no-heat calls to full system replacements, for ${TOWNS}.` }] })}
${T.services({ tag: 'Our services', h2: 'Choose A Service', lede: 'Each page explains what’s included, how it works and what it costs.', cards: [
  { icon: 'flame', title: 'No heat & heating repair', text: 'Gas furnace and oil boiler repairs.', href: S.heat }, { icon: 'heater', title: 'Gas furnace replacement', text: 'High-efficiency furnaces sized to your home.', href: S.furnace },
  { icon: 'thermometer', title: 'Oil boiler replacement', text: 'Boilers and oil tanks for hot-water heat.', href: S.boiler }, { icon: 'fan', title: 'Heat pumps', text: 'Cold-climate heat pumps for Connecticut.', href: S.hp },
  { icon: 'air-vent', title: 'Ductless mini-splits', text: 'Single and multi-zone systems.', href: S.mini }, { icon: 'snowflake', title: 'Air conditioning', text: 'AC repair and central air replacement.', href: S.ac },
  { icon: 'droplets', title: 'Water heaters', text: 'Tank water heater replacement.', href: S.wh }, { icon: 'wrench', title: 'Tune-ups from $195', text: 'Prices listed up front.', href: S.maint }, { icon: 'calendar-check', title: 'Free consultation', text: 'Talk through a new system with the owner.', href: BOOK, more: 'Book a visit' }] })}
${T.accordion({ ...prices({ open: 4 }) })}
${T.reviews(reviewsBlock(['connolly', 'gillian', 'peluso']))}
${T.ctaBand(ctaBlock('Not Sure Which Service You Need?', 'Call or text Andrew and describe what’s happening. He’ll tell you plainly what it sounds like and what it would cost.', m('h1-colonial', 'a white colonial at golden hour', null, 'h1-colonial-p')))}
`
};

const about = {
  path: '/about/', title: 'Our Story | Active Air LLC · Family-Owned HVAC in Trumbull, CT', desc: 'The story behind Active Air LLC, a family-owned, owner-operated HVAC company in Trumbull serving Fairfield County, CT.',
  body: (T, s) => `
${T.hero(s, { short: true, label: 'Our Story', ctas: [callBtn, bookBtn], slides: [{ img: { ...m('own-wiring-hero', 'An Active Air technician wiring a new air handler', '60% 40%', 'own-wiring-hero-p'), eager: true }, rate: 'Family-owned · Trumbull, CT', h1: 'The Story Behind Active Air', desc: 'How a family business in Trumbull became a trusted HVAC company across Fairfield County: honest advice, quality workmanship and caring about the people we serve.' }] })}
${T.trust({ id: 'message', tag: 'A message from the owner', statement: '“Homeowners deserve honest HVAC advice <span class="pill">' + ic('shield-check', 1.8) + '</span> quality workmanship, and a company that genuinely cares about the people we serve.”', avatars: ['A'], avatarIcon: 'house', trusted: 'Andrew DeJesus, Owner', counters: [{ v: '18', label: 'Years helping contractors choose equipment' }, { v: '2019', label: 'Year Active Air LLC was formed' }, { v: '57', label: 'Google reviews, rated 5.0' }] })}
${T.accordion({ id: 'story', tag: 'Our story', h2: 'From The Distribution Side To Your Basement', rows: [
  { title: 'Eighteen years of equipment know-how', body: 'Before Active Air, Andrew spent 18 years on the distribution side, helping contractors pick the right equipment for their jobs. Now he does the same for homeowners.' },
  { title: 'Still learning', body: 'Andrew personally visits manufacturers to learn about new heating and cooling technology, so the advice you get is current.' },
  { title: 'Family-owned, owner-operated', body: 'We are a family business rooted in Fairfield County. Your call, message and project go directly to the owner.' },
  { title: 'Every job carries our name', body: 'Every system we install and every home we work in represents our name and our reputation. That’s why we do things the right way, not the easy way.' }
], photos: [m('own-trane-team', 'Andrew (red shirt) with the team at a Trane Supply customer center during his distribution years', '50% 40%'), m('about-street', 'a tree-lined Fairfield County street in autumn', null, 'about-street-p'), m('own-tech-condenser', 'An Active Air technician on a maintenance visit', '50% 40%'), m('own-tech-furnace', 'An Active Air technician at work', '40% 50%')] })}
${T.team({ tag: 'Our team', h2: 'The People Behind Active Air', lede: 'A small local crew led by the owner.', people: [
  { img: m('own-owner', 'Andrew DeJesus', '50% 0%'), name: 'Andrew DeJesus', role: 'Owner', href: '/contact/' },
  { img: m('own-tech-furnace-card', 'An Active Air technician', '40% 50%'), name: { gap: 'Technician names and roles', alt: 'Our technicians' }, role: 'Repairs & installs', href: S.all },
  { img: m('own-tech-condenser', 'An Active Air technician on a maintenance visit', '50% 40%'), name: { gap: 'Co-owner name and role (Nextdoor intro signed Karen DeJesus; confirm before naming)', alt: 'Tune-up visits' }, role: 'Yearly maintenance', href: S.maint }
] })}
${T.reviews(reviewsBlock(['don', 'jodi', 'hagen']))}
${T.ctaBand(ctaBlock('Talk To Andrew Directly', 'No call center and no script. Call, text or book a free consultation.', m('h1-colonial', 'a white colonial at golden hour', null, 'h1-colonial-p')))}
`
};

const contactLines = [
  `<li>${ic('phone', 1.8)}<span><a href="${TEL}">${PHONE}</a><small>Call or text. Goes straight to the owner.</small></span></li>`,
  `<li>${ic('message-square', 1.8)}<span><a href="${SMS}">Text ${PHONE}</a></span></li>`,
  `<li>${ic('mail', 1.8)}<span><a href="mailto:${EMAIL}">${EMAIL}</a></span></li>`,
  `<li>${ic('map-pin', 1.8)}<span>Trumbull, CT · serving ${TOWNS}</span></li>`
];
const serviceOptions = ['', 'No heat / heating repair', 'Gas furnace', 'Oil boiler', 'Heat pump', 'Ductless mini-split', 'Air conditioning', 'Water heater', 'Tune-up / maintenance', 'Light commercial', 'Something else'];
const contact = {
  path: '/contact/', title: 'Contact Active Air LLC | (203) 945-6287 · Trumbull, CT', desc: `Contact Active Air LLC for heating and cooling repairs, replacements and free consultations in ${TOWNS}, CT.`, bodyClass: 'dark-top',
  body: (T, s) => `${T.contactPage(s, { h1: 'Get In Touch', intro: 'Family-owned. Owner-operated. Personally accountable. Your call, message and project go directly to the owner — no runaround, no call center.', lines: contactLines,
    formLabel: 'Service request', submit: 'Send request', fields: [{ label: 'Full Name *', name: 'name', ph: 'Your name', req: true, ac: 'name' }, { label: 'Phone *', name: 'phone', type: 'tel', ph: '203-555-0100', req: true, ac: 'tel' }, { label: 'Service needed', name: 'service', type: 'select', options: serviceOptions, full: true }, { label: 'Message', name: 'msg', type: 'textarea', ph: 'What’s going on?' }],
    previewMsg: `This preview doesn’t send messages yet. Please call or text ${PHONE}.`, note: `For the quickest answer, call or text ${PHONE}. ${gapNote('Form delivery: connect to the CRM / email, and the Starwell 1-minute text-back')}`,
    alt: [`<a href="${TEL}">${ic('phone', 1.8)}Call</a>`, `<a href="${SMS}">${ic('message-square', 1.8)}Text</a>`] })}
${T.accordion({ id: 'faq', tag: 'Questions', h2: 'Before You Call', ast: false, wide: true, toggle: true, rows: faqHome.slice(0, 6) })}
`
};
const consult = {
  path: BOOK, title: 'Free HVAC Home Comfort Consultation | Active Air LLC', desc: `Book a free HVAC home comfort consultation with Active Air LLC in ${TOWNS}, CT. Talk through replacement options with the owner.`, bodyClass: 'dark-top',
  body: (T, s) => `${T.contactPage(s, { h1: 'Free Home Comfort Consultation', intro: 'Thinking about replacing or upgrading your heating or cooling? You don’t need to know what you need before you call. We’ll look at your home, talk through the options and give you a written quote.', lines: contactLines,
    formLabel: 'Book a consultation', submit: 'Request my consultation', fields: [{ label: 'Full Name *', name: 'name', ph: 'Your name', req: true, ac: 'name' }, { label: 'Phone *', name: 'phone', type: 'tel', ph: '203-555-0100', req: true, ac: 'tel' }, { label: 'What are you thinking about?', name: 'system', type: 'select', options: ['', 'Replacing a gas furnace', 'Replacing an oil boiler', 'Heat pump', 'Ductless mini-split', 'Central air', 'Not sure yet'], full: true }, { label: 'Best time for a visit', name: 'when', type: 'slots', options: ['Weekday morning', 'Weekday afternoon', 'Saturday'] }],
    previewMsg: `This preview doesn’t book visits yet. Please call or text ${PHONE} and Andrew will set a time.`, note: `Andrew will call to confirm a time. ${gapNote('Online booking with real open times needs Active Air’s scheduling tool (none in use today)')}`,
    alt: [`<a href="${TEL}">${ic('phone', 1.8)}Call</a>`, `<a href="${SMS}">${ic('message-square', 1.8)}Text</a>`] })}
${T.accordion({ id: 'consult', tag: 'The consultation', h2: 'More Than Just Choosing Equipment', ast: true, rows: [
  { title: 'Better home comfort', body: 'We start with what bothers you: cold rooms, uneven temperatures, noise or high bills.' },
  { title: 'Lower operating costs', body: 'We compare running costs and long-term value, not only the price of the equipment.' },
  { title: 'Proper sizing', body: 'Proper equipment selection and system sizing for your home.' },
  { title: 'Options that fit your budget', body: 'We don’t recommend equipment simply because it’s the newest or most expensive option.' }
], photos: [m('desk', 'a home office desk with a heating system comparison sheet'), m('kitchen', 'a kitchen table with a folder of heating options'), m('furnace', 'a new gas furnace'), m('own-owner', 'Andrew DeJesus, owner', '50% 0%')] })}
${T.reviews(reviewsBlock(['connolly', 'don', 'kelly']))}
`
};

const gallery = {
  path: '/hvac-gallery/', title: 'HVAC Gallery | Active Air LLC Jobs in Trumbull, Shelton, Fairfield & Monroe', desc: 'Photos of heating and cooling jobs by Active Air LLC in Trumbull, Shelton, Fairfield, Monroe and nearby Connecticut towns.',
  body: (T, s) => `
${T.hero(s, { short: true, label: 'Gallery', ctas: [callBtn, bookBtn], slides: [{ img: { ...m('own-multizone', 'A multi-zone ductless system Active Air installed'), eager: true }, rate: 'Real Active Air jobs', h1: 'Our Work Around Fairfield County', desc: 'Every photo in the gallery below is an Active Air job.' }] })}
${T.gallery({ tag: 'Recent jobs', h2: 'Installs, Repairs And Tune-Ups', lede: 'From Trumbull to Monroe. Older photos are small, so a few appear softer.', items: [
  { img: m('own-tech-furnace', 'An Active Air technician working in a furnace', '40% 50%'), cap: 'Furnace service' },
  { img: m('own-ductless-living', 'A ductless unit in a living room'), cap: 'Ductless install', wide: true },
  { img: m('own-bryant-trumbull', 'A new condenser in Trumbull'), cap: 'Trumbull · new condenser', id: 'trumbull' },
  { img: m('own-airhandler-shelton', 'A new air handler in Shelton'), cap: 'Shelton · air handler' },
  { img: m('own-condenser-fairfield', 'A new condenser in Fairfield'), cap: 'Fairfield · new condenser' },
  { img: m('own-multizone', 'A multi-zone ductless system on a house'), cap: 'Multi-zone ductless', wide: true },
  { img: m('own-condenser-monroe', 'A new condenser in Monroe'), cap: 'Monroe · new condenser' },
  { img: m('own-ladder', 'A technician with three new condensers'), cap: 'Three-condenser install' },
  { img: m('own-crane', 'A crane lifting a ductless unit at a brick building'), cap: 'Commercial crane lift' },
  { img: m('own-tech-wiring', 'A technician wiring an air handler', '60% 40%'), cap: 'Air handler wiring' }
] })}${gapNote('More recent job photos at full size (the Google profile has 91 photos; originals needed)')}
${T.ctaBand(ctaBlock('Want Results Like These?', 'Start with a free consultation. We’ll look at your home and give you a written quote.', m('h2-winter', 'a Cape Cod house after snowfall', null, 'h2-winter-p')))}
`
};

const payments = {
  path: '/online-payments/', title: 'Online Payments & Maintenance | Active Air LLC', desc: 'Maintenance prices from Active Air LLC: gas furnace $195, oil boiler $295, AC plan $250, light commercial from $395.',
  body: (T, s) => `
${T.hero(s, { short: true, label: 'Online payments', ctas: [callBtn, bookBtn], slides: [{ img: { ...m('desk', 'a home office desk with a heating comparison sheet', null, 'desk-p'), eager: true }, rate: 'Prices listed up front', h1: 'Maintenance And Payments', desc: 'Book a tune-up or pay for maintenance. Prices are the same as always.' }] })}
${T.services({ id: 'plans', tag: 'Maintenance', h2: 'Choose Your Tune-Up', lede: `Call or text ${PHONE} to book. ${HIDE_GAPS ? '' : ''}`, ctas: [[`Call ${PHONE}`, TEL, 'dark', 'phone'], ['Text to book', SMS, 'light']], cards: [
  { icon: 'heater', title: 'Gas furnace maintenance · $195', text: 'Full safety and combustion check, cleaning and a complete heating cycle.', href: S.maint },
  { icon: 'thermometer', title: 'Oil boiler maintenance · $295', text: 'Nozzle, oil filter and pump strainer, cleaning and safety checks.', href: S.maint },
  { icon: 'snowflake', title: 'AC annual plan · $250', text: 'Refrigerant, electrical, coils, drains and a standard filter.', href: S.maint },
  { icon: 'house', title: 'Light commercial · from $395', text: 'Per rooftop unit up to 10 tons, plus tax.', href: S.maint }] })}${gapNote('Online payment link (Stripe/Square) to replace the Squarespace store checkout')}
${T.ctaBand(ctaBlock('Questions About A Bill?', `Call or text ${PHONE}. You’ll reach the owner.`, m('own-tech-hero', 'An Active Air technician at a furnace', '50% 45%', 'own-tech-hero-p')))}
`
};

const notFound = {
  path: '/404', title: 'Page not found | Active Air LLC',
  body: (T, s) => `${T.contactPage(s, { h1: 'This page moved', intro: 'The page you’re looking for isn’t here. Try one of these, or call and we’ll help.', lines: [`<li>${ic('arrow-right', 1.8)}<span><a href="/">Home</a></span></li>`, `<li>${ic('arrow-right', 1.8)}<span><a href="${S.all}">All services</a></span></li>`, `<li>${ic('arrow-right', 1.8)}<span><a href="${S.maint}">Tune-up prices</a></span></li>`, `<li>${ic('phone', 1.8)}<span><a href="${TEL}">${PHONE}</a></span></li>`],
    formLabel: 'Quick request', submit: 'Send request', fields: [{ label: 'Full Name *', name: 'name', req: true, ac: 'name' }, { label: 'Phone *', name: 'phone', type: 'tel', req: true, ac: 'tel' }, { label: 'Message', name: 'msg', type: 'textarea' }], previewMsg: `This preview doesn’t send messages yet. Please call or text ${PHONE}.` })}`
};

export const pages = {
  '': home, 'hvac-services-repair': servicesIndex,
  ...Object.fromEntries(Object.entries(svcPages).map(([k, v]) => [k, v])),
  'about': about, 'contact': contact, 'free-hvac-consultation': consult, 'hvac-gallery': gallery, 'online-payments': payments, '404.html': notFound
};

// Old URLs -> new (Netlify/Cloudflare _redirects). Old service tiles all 404'd; the gallery town pages fold into /hvac-gallery/.
export const extraFiles = routes => ({
  '_redirects': [
    ['/hvac-home-page-active-air-llc', '/'], ['/consultations', BOOK], ['/maintenance', S.maint], ['/new-page', S.furnace], ['/heat-pump', S.hp],
    ['/mini-split', S.mini], ['/hot-water-hearter', S.wh], ['/hvac-equipment-replacement', S.all],
    ['/hvac-gallery/trumbull-ct', '/hvac-gallery/'], ['/hvac-gallery/shelton-ct', '/hvac-gallery/'], ['/hvac-gallery/fairfield-ct', '/hvac-gallery/'], ['/hvac-gallery/monroe-ct', '/hvac-gallery/'],
    ['/online-payments/maintenance-plans', S.maint], ['/online-payments/p/*', S.maint], ['/cart', '/online-payments/']
  ].map(([a, b]) => `${a} ${b} 301`).join('\n') + '\n',
  'robots.txt': 'User-agent: *\nAllow: /\nSitemap: https://www.activeairllc.com/sitemap.xml\n',
  'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.filter(r => !r.endsWith('.html')).map(r => `<url><loc>https://www.activeairllc.com/${r ? r + '/' : ''}</loc></url>`).join('\n')}\n</urlset>\n`
});
