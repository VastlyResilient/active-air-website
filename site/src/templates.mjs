// ConsultPro templates (library ref framer21-consultpro). Content lives in content-activeair.mjs.
import fs from 'node:fs';
export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const icons = JSON.parse(fs.readFileSync(new URL('./icons.json', import.meta.url)));
export const ic = (n, sw = 1.5) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n] || ''}</svg>`;
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const phoneI = `<svg class="phn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons.phone}</svg>`;
// Reference sparkle (4-point star) used before every eyebrow label.
const sparkle = '<svg viewBox="0 0 27 27" aria-hidden="true"><path fill="currentColor" d="M13.5 2c.5 5.9 5.1 10.5 11 11-5.9.5-10.5 5.1-11 11-.5-5.9-5.1-10.5-11-11 5.9-.5 10.5-5.1 11-11z"/></svg>';
const chev = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const starSvg = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z"/></svg>';
export const stars = (n = 5) => `<span class="st" aria-hidden="true">${starSvg.repeat(Math.round(n))}</span>`;
const astSvg = '<svg class="ast" viewBox="0 0 96 96" aria-hidden="true"><g stroke="currentColor" stroke-width="11" stroke-linecap="round"><path d="M48 8v80M8 48h80M19.7 19.7l56.6 56.6M76.3 19.7 19.7 76.3"/></g></svg>';

// Gaps: hidden from visitors by default (same switch as Masters); SHOW_GAPS=1 shows orange chips.
export const HIDE_GAPS = process.env.SHOW_GAPS !== '1';
const gapChip = g => `<span class="gap">${esc(g)}</span>`;
export const gapNote = g => HIDE_GAPS ? `<!--gap:${esc(g).replace(/--/g, '-')}-->` : gapChip(g);
const isGap = v => v && typeof v === 'object' && v.gap;
export const hiddenGap = v => HIDE_GAPS && isGap(v) && !v.alt;
export const val = v => isGap(v) ? (HIDE_GAPS ? gapNote(v.gap) + (v.alt || '') : gapChip(v.gap)) : (v ?? '');

// media: {scene:{base,widths,w,h}, alt, ill} | {own:{...}} | {card:{big|icon, small, label}} | {src, alt}
export const media = (m, cls = '') => {
  if (!m) return '';
  if (m.card) return `<div class="bcard ${cls}" role="img" aria-label="${esc(m.card.label)}">${m.card.icon ? `<i class="bi">${ic(m.card.icon)}</i>` : `<b>${m.card.big}</b>`}<span>${m.card.small}</span></div>`;
  const src = m.scene;
  if (src) {
    const { base, widths, w, h } = src, sizes = m.sizes || '100vw';
    const set = ext => widths.map(x => `${base}-${x}.${ext} ${x}w`).join(', ');
    const pos = m.pos ? ` style="object-position:${m.pos}"` : '';
    const ph = m.portrait ? ['avif', 'webp'].map(ext => `<source media="${m.portrait.media || '(max-aspect-ratio: 1/1)'}" type="image/${ext}" srcset="${m.portrait.widths.map(x => `${m.portrait.base}-${x}.${ext} ${x}w`).join(', ')}" sizes="100vw">`).join('') : '';
    const img = `<picture>${ph}<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}"><source type="image/webp" srcset="${set('webp')}" sizes="${sizes}"><img src="${base}-${widths[Math.min(1, widths.length - 1)]}.webp" alt="${esc(m.alt || '')}" width="${w}" height="${h}" loading="${m.eager ? 'eager' : 'lazy'}" decoding="async"${m.eager ? ' fetchpriority="high"' : ''}${pos}></picture>`;
    return `<span class="scene ${cls}">${img}</span>`;
  }
  return `<img class="${cls}" src="${esc(m.src)}" alt="${esc(m.alt || '')}" loading="${m.eager ? 'eager' : 'lazy'}" decoding="async"${m.w ? ` width="${m.w}" height="${m.h}"` : ''}>`;
};

const SMALL = new Set(['a', 'an', 'and', 'or', 'the', 'to', 'of', 'for', 'in', 'on', 'with', 'at', 'by', 'from', 'per']);
export const tc = t => String(t).split(' ').map((w, i) => (i && SMALL.has(w)) ? w : w.replace(/^([a-z])/, c => c.toUpperCase())).join(' ');
export const btn = (label, href, kind = 'light', icon = 'arrow', extra = '') => `<a class="btn btn-${kind}${extra ? ' ' + extra : ''}" href="${esc(href)}"><span class="lbl"><span>${label}</span><span aria-hidden="true">${label}</span></span><span class="ic">${icon === 'phone' ? phoneI : arrow}</span></a>`;
const eyebrow = (t, cls = '') => `<div class="eyebrow ${cls} rv">${sparkle}${esc(t)}</div>`;

export function header(s, page) {
  const cur = page.path || '/';
  const links = s.nav.map(([l, h]) => `<a href="${h}"${cur === h ? ' aria-current="page"' : ''}>${l}</a>`).join('');
  return `<a class="sr" href="#main">Skip to content</a>
<header class="hdr" id="hdr">
  <a class="logo" href="/" aria-label="${esc(s.name)} home"><img class="ld" src="${s.logoLight}" alt="" width="${s.logoW}" height="${s.logoH}"><img class="lw" src="${s.logoDark}" alt="" width="${s.logoW}" height="${s.logoH}"></a>
  <nav class="nav" aria-label="Main">${links}</nav>
  <a class="pill-w" href="${s.tel}">${ic('phone', 1.8)}${s.phone}</a>
  <button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="mmenu"><i></i><i></i></button>
</header>
<div class="mmenu" id="mmenu"><nav aria-label="Mobile">${links}<a class="full" href="${s.tel}">${ic('phone', 1.8)}Call ${s.phone}</a><a class="full l" href="${s.book}">Book a free consultation</a></nav></div>`;
}

export function footer(s) {
  return `<footer class="foot">
  <div class="row1">
    <div class="brand"><img src="${s.logoLight}" alt="${esc(s.name)}" width="${s.logoW}" height="${s.logoH}" loading="lazy"><p>${s.footBlurb}</p></div>
    <div class="ql"><p>Quick Links</p><ul>${s.footLinks.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
    <div class="ct"><p class="t">Talk to the owner</p><ul>${s.footLines.join('')}</ul><a class="pill-w" href="${s.tel}">${ic('phone', 1.8)}Call ${s.phone}</a></div>
  </div>
  <div class="sep"></div>
  <p class="copy">© ${new Date().getFullYear()} ${esc(s.legal)}. All rights reserved.<small>${s.copyNote}</small></p>
</footer>
<div class="dock" aria-label="Quick contact">${btn('Call ' + s.phone, s.tel, 'dark', 'phone')}${btn('Book', s.book, 'light', 'arrow', 'bk')}</div>`;
}

export function page(s, p, body) {
  const title = p.title ? `${p.title}` : s.name;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<script>document.documentElement.className='js'</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.desc || s.desc)}">
<link rel="canonical" href="${s.origin}${p.path || '/'}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(p.desc || s.desc)}"><meta property="og:type" content="website">
${p.ogImage ? `<meta property="og:image" content="${s.origin}${p.ogImage}">` : ''}
<meta name="theme-color" content="#0a0a0c">
<link rel="icon" href="${s.favicon}">
<link rel="preload" href="/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/fonts.css">
<link rel="stylesheet" href="/css/site.css">
${p.schema ? `<script type="application/ld+json">${JSON.stringify(p.schema)}</script>` : ''}
</head>
<body${p.bodyClass ? ` class="${p.bodyClass}"` : ''}>
${header(s, p)}
<main id="main">
${body}
</main>
${footer(s)}
<script src="/js/site.js" defer></script>
</body>
</html>
`;
}

// ---------- sections ----------
export function hero(s, h) {
  const many = h.slides.length > 1;
  return `<section class="hero${h.short ? ' short' : ''}" aria-roledescription="${many ? 'carousel' : 'banner'}" aria-label="${esc(h.label || 'Introduction')}">
${h.slides.map((sl, i) => `  <div class="slide" data-i="${i}">
    <div class="bg"><div class="img">${media({ ...sl.img, ill: false, eager: i === 0, sizes: '100vw' })}</div><div class="vig"></div><div class="scrim"></div></div>
    <div class="content"><div>${sl.rate ? `<p class="rate">${/Google/.test(sl.rate) ? stars(5) : ''}<span>${sl.rate}</span></p>` : ''}<${i === 0 && !h.noH1 ? 'h1' : 'p class="h1"'}>${sl.h1}</${i === 0 && !h.noH1 ? 'h1' : 'p'}><p class="desc">${sl.desc}</p></div>
      <div class="btns cta">${(sl.ctas || h.ctas).map(c => btn(c[0], c[1], c[2] || 'light', c[3] || 'arrow')).join('')}</div></div>
  </div>`).join('\n')}
${many ? `  <div class="rail" role="group" aria-label="Choose slide">${h.slides.map((_, i) => `<button type="button" aria-label="Slide ${i + 1}">${String(i + 1).padStart(2, '0')}<i></i></button>`).join('')}</div>` : ''}
${h.slides.some(x => x.img?.ill) ? '' : ''}
</section>`;
}

export function trust(t) {
  return `<section class="trust" id="${t.id || 'trust'}">
  ${eyebrow(t.tag)}
  <p class="statement rv">${t.statement}</p>
  <div class="rv avwrap">
    <div class="avatars" aria-hidden="true">${t.avatars.map(a => `<span>${esc(a)}</span>`).join('')}<span class="g">${t.avatarIcon ? ic(t.avatarIcon) : '+'}</span></div>
    <p class="trusted">${t.trusted}</p>
  </div>
  <div class="counters">${t.counters.map((c, i) => `<div class="counter"><div class="odo" data-v="${esc(c.v)}"${c.s ? ` data-s="${esc(c.s)}"` : ''} aria-hidden="true">${esc(c.v + (c.s || ''))}</div><span class="vh">${esc(c.v + (c.s || ''))}</span><p>${c.label}</p><div class="dots" aria-hidden="true">${[0, 1, 2].map(j => `<i${j <= i ? ' class="f"' : ''}></i>`).join('')}</div></div>`).join('')}</div>
</section>`;
}

export function services(sv) {
  return `<section class="services" id="${sv.id || 'services'}">
  ${eyebrow(sv.tag)}
  <h2 class="h2 rv">${sv.h2}</h2>
  ${sv.lede ? `<p class="lede rv">${sv.lede}</p>` : ''}
  ${sv.ctas ? `<div class="btns rv">${sv.ctas.map(c => btn(c[0], c[1], c[2] || 'dark', c[3] || 'arrow')).join('')}</div>` : ''}
  <div class="cards${sv.cards.length === 8 || sv.cards.length === 4 ? ' c4' : ''}">${sv.cards.map(c => `<${c.href ? `a href="${c.href}"` : 'div'} class="card rv-spring"><span class="ico">${ic(c.icon)}</span><div><h3>${tc(c.title)}</h3><p>${c.text}</p></div>${c.href ? `<span class="more">${c.more || 'Learn more'}<i>${arrow}</i></span>` : ''}</${c.href ? 'a' : 'div'}>`).join('')}</div>
</section>`;
}

export function carousel(c) {
  const N = c.slides.length;
  return `<section class="ind" data-nodock id="${c.id || 'systems'}" aria-roledescription="carousel" aria-label="${esc(c.tag)}">
${c.slides.map((sl, i) => `  <div class="islide${i === 0 ? ' on' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${N}"><div class="bgi">${media({ ...sl.img, sizes: '100vw' })}</div><div class="ov"></div>
    <div class="txt tw"><small>${esc(c.tag)}</small><h3>${sl.title}</h3><p>${sl.text}</p>${btn(sl.cta?.[0] || 'Learn more', sl.cta?.[1] || sl.href, 'light', 'arrow', 'mcta')}</div></div>`).join('\n')}
  <div class="pblur"></div>
  <div class="bottom">
    <div class="pager pager-wrap"><button class="prev" type="button" disabled aria-label="Previous slide"><svg width="44" height="15" viewBox="0 0 34 12" fill="none" stroke="#fff" stroke-width="1.2" aria-hidden="true"><path d="M33 6H1M6 1L1 6l5 5"/></svg></button><span class="num" aria-live="polite"><b class="cur">01</b> <em>/ ${String(N).padStart(2, '0')}</em></span><button class="next" type="button" aria-label="Next slide"><svg width="44" height="15" viewBox="0 0 34 12" fill="none" stroke="#fff" stroke-width="1.2" aria-hidden="true"><path d="M1 6h32M28 1l5 5-5 5"/></svg></button></div>
    ${btn(c.cta[0], c.cta[1], 'light', 'arrow', 'ctaR tw')}
  </div>
</section>`;
}

let accN = 0;
export function accordion(a) {
  const id = 'ph' + (++accN);
  const rows = a.rows.filter(r => !hiddenGap(r.body));
  const gaps = a.rows.filter(r => hiddenGap(r.body)).map(r => gapNote(r.body.gap)).join('');
  const accHtml = `<div class="acc${a.photos ? '' : ' solo'}"${a.photos ? ` data-ph="${id}"` : ''}${a.toggle ? ' data-toggle="1"' : ''}>${rows.map((r, i) => `<div class="row rv-spring${i === (a.open ?? 0) ? ' on' : ''}"><button type="button" aria-expanded="${i === (a.open ?? 0)}"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${tc(r.title)}</h3>${chev}</button><div class="body"><div><p class="${a.wide ? 'wide' : ''}">${val(r.body)}</p>${r.meta ? `<div class="meta">${r.meta}</div>` : ''}</div></div></div>`).join('')}</div>${gaps}`;
  return `<section class="why${a.cls ? ' ' + a.cls : ''}" id="${a.id || 'why'}">
  <div class="top"><div>${eyebrow(a.tag, 'l')}<h2 class="h2 rv">${a.h2}</h2>${a.lede ? `<p class="lede rv" style="margin-left:0">${a.lede}</p>` : ''}</div>${a.ast === false ? '' : astSvg}</div>
  ${a.photos ? `<div class="grid">${accHtml}<div class="ph rv" id="${id}">${a.photos.map((p, i) => `<div${i === (a.open ?? 0) ? ' class="on"' : ''}>${media({ ...p, sizes: '(max-width: 809px) 100vw, 50vw' })}</div>`).join('')}</div></div>` : `<div style="margin-top:50px">${accHtml}</div>`}
</section>`;
}

export function team(t) {
  return `<section class="services team" id="${t.id || 'team'}">
  ${eyebrow(t.tag)}
  <h2 class="h2 rv">${t.h2}</h2>
  ${t.lede ? `<p class="lede rv">${t.lede}</p>` : ''}
  <div class="cards3">${t.people.map(p => `<a class="tcard rv-spring" href="${p.href}"><div class="im">${media({ ...p.img, sizes: '(max-width: 809px) 100vw, 33vw' })}<span class="notch"><i>${arrow}</i></span></div><div class="nm"><h3>${val(p.name)}</h3><p>- ${val(p.role)}</p></div></a>`).join('')}</div>
</section>`;
}

const platIcon = { google: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.8 3.6-4.9 6.7-4.9z"/></svg>' };
export function reviews(r) {
  return `<section class="reviews" id="${r.id || 'reviews'}">
  ${eyebrow(r.tag)}
  <h2 class="h2 rv">${r.h2}</h2>
  ${r.lede ? `<p class="lede rv">${r.lede}</p>` : ''}
  <div class="rbar">${r.platforms.map(p => `<${p.href ? `a href="${p.href}" target="_blank" rel="noopener"` : 'div class="p"'} class="rv-spring"><span class="pl">${platIcon[p.key] || ic(p.icon || 'star')}${esc(p.name)}</span><span class="sc">${esc(p.score)}</span>${p.stars ? stars(5) : ''}<span class="ct">${p.count}</span></${p.href ? 'a' : 'div'}>`).join('')}</div>
  ${r.items?.length ? `<div class="feed">${r.items.map(it => `<figure class="rv-card rv-spring"><span class="tag">${stars(it.stars || 5)} ${esc(it.when || '')}</span><blockquote>“${esc(it.text)}”</blockquote><figcaption class="who"><span class="i" aria-hidden="true">${esc(it.name[0])}</span><span><b>${esc(it.name)}</b><small>${esc(it.meta)}</small></span></figcaption></figure>`).join('')}</div>` : ''}
  ${r.ctas ? `<div class="btns rv">${r.ctas.map(c => btn(c[0], c[1], c[2] || 'dark', c[3] || 'arrow')).join('')}</div>` : ''}
</section>`;
}

export function ctaBand(c) {
  return `<section class="ctab${c.flush ? ' flush' : ''}" data-nodock>
  <div class="bgp">${media({ ...c.img, sizes: '100vw' })}</div>
  <div class="in">${eyebrow(c.tag, 'w')}<h2 class="h2 rv">${c.h2}</h2><p class="l rv">${c.text}</p><div class="btns rv">${c.ctas.map(x => btn(x[0], x[1], x[2] || 'light', x[3] || 'arrow')).join('')}</div></div>
</section>`;
}

export function gallery(g) {
  return `<section class="services" id="${g.id || 'gallery'}">
  ${eyebrow(g.tag)}<h2 class="h2 rv">${g.h2}</h2>${g.lede ? `<p class="lede rv">${g.lede}</p>` : ''}
  <div class="gal">${g.items.map(it => `<figure class="rv-spring${it.wide ? ' wide' : ''}">${media({ ...it.img, sizes: it.wide ? '(max-width: 809px) 100vw, 66vw' : '(max-width: 809px) 100vw, 33vw' })}${it.cap ? `<figcaption>${it.cap}</figcaption>` : ''}</figure>`).join('')}</div>
</section>`;
}

const field = f => {
  const lab = `<span>${f.label}</span>`;
  if (f.type === 'select') return `<label class="${f.full ? 'full' : ''}">${lab}<span class="fld"><select name="${f.name}"${f.req ? ' required' : ''}>${f.options.map(o => `<option${o === '' ? ' value=""' : ''}>${o || 'Select...'}</option>`).join('')}</select></span></label>`;
  if (f.type === 'textarea') return `<label class="full">${lab}<span class="fld"><textarea name="${f.name}" rows="3" placeholder="${esc(f.ph || '')}"></textarea></span></label>`;
  if (f.type === 'slots') return `<fieldset class="full" style="border:0"><legend style="font-size:16px;line-height:25.6px;margin-bottom:10px">${f.label}</legend><div class="slots">${f.options.map((o, i) => `<label><input type="radio" name="${f.name}" value="${esc(o)}"${i === 0 ? ' required' : ''}><span>${esc(o)}</span></label>`).join('')}</div></fieldset>`;
  return `<label class="${f.full ? 'full' : ''}">${lab}<span class="fld"><input type="${f.type || 'text'}" name="${f.name}" placeholder="${esc(f.ph || '')}"${f.req ? ' required' : ''}${f.ac ? ` autocomplete="${f.ac}"` : ''}></span></label>`;
};
export function contactPage(s, c) {
  return `<section class="cpage">
  <div><h1>${c.h1}</h1><p class="intro">${c.intro}</p><hr><ul class="lines">${c.lines.join('')}</ul></div>
  <form class="fcard" data-preview novalidate="false" aria-label="${esc(c.formLabel || 'Contact form')}">
    <div class="grid2">${c.fields.map(field).join('')}</div>
    <button class="sub" type="submit">${c.submit}<i>${arrow}</i></button>
    <p class="msg" tabindex="-1" role="status">${c.previewMsg}</p>
    ${c.note ? `<p class="note">${c.note}</p>` : ''}
    ${c.alt ? `<div class="alt">${c.alt.join('')}</div>` : ''}
  </form>
</section>`;
}
