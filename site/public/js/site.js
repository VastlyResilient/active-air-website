// ConsultPro behaviours (library ref framer21-consultpro, values from its Framer config), shared by every route.
// Idle rule: nothing loops while it is off screen; the hero and carousel pause when out of view.
(() => {
  const d = document, root = d.documentElement;
  root.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onView = (el, cb, opts) => { const io = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting, e)), opts); io.observe(el); return io; };

  // HERO: slides hold 6 s, cut to #0a0a0c then 0.7 s fade, 8 s Ken Burns 1.16 -> 1, word blur reveal (CSS).
  const hero = d.querySelector('.hero');
  if (hero) {
    const slides = [...hero.querySelectorAll('.slide')], rail = [...hero.querySelectorAll('.rail button')];
    hero.querySelectorAll('.slide h1, .slide .h1').forEach(h => {
      if (h.dataset.split) return; h.dataset.split = 1;
      let i = 0;
      const wrap = node => [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const parts = n.textContent.split(/([ \t\n]+)/);  // split on normal spaces only, so a no-break space keeps words together
          const frag = d.createDocumentFragment();
          parts.forEach(p => { if (!p) return; if (/^[ \t\n]+$/.test(p)) frag.appendChild(d.createTextNode(' ')); else { const s = d.createElement('span'); s.className = 'w'; s.style.setProperty('--i', i++); s.textContent = p; frag.appendChild(s); } });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') wrap(n);
      });
      wrap(h);
    });
    let cur = -1, timer = null, visible = true;
    const show = n => {
      if (n === cur) return;
      slides.forEach(s => { s.classList.remove('on'); s.setAttribute('aria-hidden', 'true'); s.querySelectorAll('a,button').forEach(a => a.tabIndex = -1); });
      const s = slides[n]; void s.offsetWidth;
      s.removeAttribute('aria-hidden'); s.querySelectorAll('a,button').forEach(a => a.removeAttribute('tabindex'));
      requestAnimationFrame(() => requestAnimationFrame(() => s.classList.add('on')));
      rail.forEach((b, i) => { b.classList.toggle('on', i === n); b.setAttribute('aria-current', i === n ? 'true' : 'false'); });
      cur = n; schedule();
    };
    const schedule = () => { clearTimeout(timer); if (slides.length > 1 && visible && !reduce) timer = setTimeout(() => show((cur + 1) % slides.length), 6000); };
    rail.forEach((b, i) => b.addEventListener('click', () => show(i)));
    const first = slides[0]?.querySelector('img');
    const go0 = () => setTimeout(() => show(0), Math.max(0, 400 - performance.now()));
    if (first && first.decode) first.decode().then(go0, go0); else go0();
    onView(hero, v => { visible = v; if (v) schedule(); else clearTimeout(timer); });
  }

  // Reveal on scroll (once): .rv y50 0.6 s; .rv-spring y30 1.2 s overshoot.
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -60px 0px' });
  let pending = [...d.querySelectorAll('.rv,.rv-spring')];
  pending.forEach(el => { if (el.classList.contains('rv-spring')) el.style.transitionDelay = '.3s'; io.observe(el); });
  // Fast-scroll catch-up: anything the visitor has already scrolled past is revealed, never left blank.
  let tick = 0;
  const catchUp = () => { tick = 0; const vh = innerHeight; pending = pending.filter(el => { if (el.classList.contains('in')) return false; if (el.getBoundingClientRect().top < vh) { el.classList.add('in'); io.unobserve(el); return false; } return true; }); if (!pending.length) removeEventListener('scroll', onScroll); };
  const onScroll = () => { if (!tick) tick = requestAnimationFrame(catchUp); };
  addEventListener('scroll', onScroll, { passive: true });

  // Odometer: each digit column rolls -(20+n)em over 2 s, ease (.22,1,.36,1), 0.06 s stagger. Non-digits stay fixed.
  d.querySelectorAll('.odo').forEach(o => {
    const v = o.dataset.v, cols = [];
    o.textContent = '';
    [...v].forEach(ch => {
      if (!/\d/.test(ch)) { const s = d.createElement('span'); s.textContent = ch; o.appendChild(s); return; }
      const n = +ch, total = 20 + n, k = cols.length;
      const c = d.createElement('span'); c.className = 'col';
      const inner = d.createElement('div');
      for (let e = 0; e <= total; e++) { const sp = d.createElement('span'); sp.textContent = e % 10; inner.appendChild(sp); }
      c.appendChild(inner); o.appendChild(c); cols.push([inner, total, k]);
    });
    if (o.dataset.s) { const suf = d.createElement('span'); suf.textContent = o.dataset.s; o.appendChild(suf); }
    const fin = () => cols.forEach(([el, t, k]) => { el.style.transition = reduce ? 'none' : `transform 2s cubic-bezier(.22,1,.36,1) ${k * .06}s`; el.style.transform = `translateY(-${t}em)`; });
    const ob = new IntersectionObserver(es => { if (es[0].isIntersecting) { ob.disconnect(); fin(); } }, { rootMargin: '0px 0px -100px 0px' }); ob.observe(o);
  });

  // Carousel ("Industries"): 0.5 s crossfade, autoplay 5 s while in view only, wraps; arrows clamp.
  d.querySelectorAll('.ind').forEach(ind => {
    const is = [...ind.querySelectorAll('.islide')]; if (!is.length) return;
    const prev = ind.querySelector('.prev'), next = ind.querySelector('.next'), num = ind.querySelector('.cur'), N = is.length;
    let ic = 0, it = null, vis = false;
    const go = n => { is[ic].classList.remove('on'); is[ic].setAttribute('aria-hidden', 'true'); ic = n; is[ic].classList.add('on'); is[ic].removeAttribute('aria-hidden');
      num.textContent = String(n + 1).padStart(2, '0'); prev.disabled = n === 0; next.disabled = n === N - 1; plan(); };
    const plan = () => { clearTimeout(it); if (vis && !reduce) it = setTimeout(() => go((ic + 1) % N), 5000); };
    prev.onclick = () => ic > 0 && go(ic - 1); next.onclick = () => ic < N - 1 && go(ic + 1);
    is.forEach((s, i) => { if (i) s.setAttribute('aria-hidden', 'true'); });
    onView(ind, v => { vis = v; plan(); });
    const o1 = new IntersectionObserver(es => { if (es[0].isIntersecting) { ind.classList.add('in'); o1.disconnect(); } }, { rootMargin: '0px 0px -60px 0px' }); o1.observe(ind);
    const o2 = new IntersectionObserver(es => { if (es[0].isIntersecting) { ind.classList.add('in2'); o2.disconnect(); } }, { rootMargin: '0px 0px -40px 0px' }); o2.observe(ind.querySelector('.bottom'));
    // Progressive bottom blur: 8 layers, blur 10/2^(7-k) px, masked bands.
    const pb = ind.querySelector('.pblur'), B = 10;
    if (pb) for (let k = 0; k < 8; k++) { const b = B / Math.pow(2, 7 - k), a = k * 12.5, c = [a, a + 12.5, a + 25, a + 37.5].map(v => Math.min(v, 100));
      const g = k === 7 ? 'rgba(0,0,0,0) 87.5%,#000 100%' : k === 6 ? 'rgba(0,0,0,0) 75%,#000 87.5%,#000 100%' : `rgba(0,0,0,0) ${c[0]}%,#000 ${c[1]}%,#000 ${c[2]}%,rgba(0,0,0,0) ${c[3]}%`;
      const dv = d.createElement('div'); dv.style.cssText = `backdrop-filter:blur(${b}px);-webkit-backdrop-filter:blur(${b}px);mask-image:linear-gradient(to bottom,${g});-webkit-mask-image:linear-gradient(to bottom,${g})`; pb.appendChild(dv); }
  });

  // Accordion (why-us, prices, FAQ): one row open; photo crossfades with the active row (0.5 s).
  d.querySelectorAll('.acc').forEach(acc => {
    const rows = [...acc.querySelectorAll('.row')], ph = acc.dataset.ph ? d.getElementById(acc.dataset.ph) : null;
    const set = i => { rows.forEach((r, j) => { const on = j === i && !(r.classList.contains('on') && acc.dataset.toggle); r.classList.toggle('on', on); r.querySelector('button').setAttribute('aria-expanded', on); });
      if (ph) [...ph.children].forEach((c, j) => c.classList.toggle('on', j === i)); };
    rows.forEach((r, i) => r.querySelector('button').addEventListener('click', () => set(i)));
  });

  // Rotating asterisk: 360deg / 5 s linear (cfg). Stepped at exactly 30 fps with a timer (one draw per step), only while on screen.
  d.querySelectorAll('.ast').forEach(a => {
    if (reduce) return; let iv = 0, deg = 0;
    onView(a, v => { clearInterval(iv); if (v) iv = setInterval(() => { deg = (deg + 360 / 150) % 360; a.style.transform = `rotate(${deg}deg)`; }, 1000 / 30); });
  });

  // Phone menu
  const hdr = d.getElementById('hdr'), mm = d.getElementById('mmenu'), bg = d.getElementById('burger');
  if (bg && mm) {
    const set = o => { hdr.classList.toggle('open', o); mm.classList.toggle('open', o); bg.setAttribute('aria-expanded', o); mm.style.setProperty('--mh', mm.querySelector('nav').scrollHeight + 'px'); };
    bg.addEventListener('click', () => set(!mm.classList.contains('open')));
    mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
    d.addEventListener('keydown', e => { if (e.key === 'Escape' && mm.classList.contains('open')) { set(false); bg.focus(); } });
  }

  // HVAC: call dock appears once the first screen is gone, hides again over the footer.
  const dock = d.querySelector('.dock'), first = d.querySelector('.hero, .cpage'), foot = d.querySelector('.foot');
  if (dock && first) {
    let pastFirst = false; const busy = new Set();
    const upd = () => dock.classList.toggle('show', pastFirst && !busy.size);
    onView(first, v => { pastFirst = !v; upd(); }, { rootMargin: '-120px 0px 0px 0px' });
    // Hide over the footer and over sections that carry their own bottom-right buttons (carousel, CTA band).
    [foot, ...d.querySelectorAll('[data-nodock]')].filter(Boolean).forEach(el => onView(el, v => { v ? busy.add(el) : busy.delete(el); upd(); }, { rootMargin: '0px 0px -40% 0px' }));
  }

  // Forms: this preview has no backend yet. Never show a fake success; say so and offer the phone.
  d.querySelectorAll('form[data-preview]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault(); if (!f.reportValidity()) return;
    const m = f.querySelector('.msg'); m.classList.add('show'); m.focus();
  }));
})();
