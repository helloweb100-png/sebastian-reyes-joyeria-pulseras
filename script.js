/* =========================================================
   Sebastián Reyes · Joyería & Pulseras — «El Joyero Vivo»
   Todo es mejora progresiva: sin JS (o si algo falla) el contenido se ve completo.
   ========================================================= */
'use strict';

/* ---- WhatsApp: número del negocio (10 dígitos, sin +52). Vacío = canal aún no activo ---- */
const WHATSAPP = '';

/* ---- Catálogo (precios SOLO los impresos en las fotos del cliente) ---- */
const PRODUCTS = {
  'mariposas': { id: 'mariposas', file: 'p-mariposas.jpg', name: 'Noche de Mariposas', desc: 'Set largo de cuentas de cristal negro, mariposas tono plata y borlas, con aretes a juego', price: 450, chip: [6, 87, 22, 7], tags: ['noche', 'naturaleza'], ar: '3/4', w: 900, h: 1200, alt: 'Set largo de cuentas de cristal negro con mariposas tono plata y borlas negras, con aretes a juego' },
  'rojo-v': { id: 'rojo-v', file: 'p-rojo-v.jpg', name: 'Rubí en V', desc: 'Collar en V tono dorado con piedras rojas y aretes de perla roja', price: 70, chip: [6, 88, 18, 7], tags: ['noche'], ar: '3/4', w: 900, h: 1200, alt: 'Collar en V tono dorado con piedras rojas y aretes de perla roja sobre terciopelo negro' },
  'rosa': { id: 'rosa', file: 'p-rosa.jpg', name: 'Rosa Eterna', desc: 'Cadena fina con rosa roja y hojas verdes, aretes a juego', price: 320, chip: [70, 85, 20, 7.5], tags: ['regalo', 'naturaleza'], ar: '3/4', w: 900, h: 1200, alt: 'Set de collar y aretes con rosa roja y hojas verdes sobre busto de terciopelo negro' },
  'corazon-oro': { id: 'corazon-oro', file: 'p-corazon-oro.jpg', name: 'Corazón Dorado', desc: 'Cadena fina con corazón labrado y aretes gemelos', price: 300, chip: [54, 87, 35, 11], tags: ['regalo', 'corazones'], ar: '970/1598', w: 970, h: 1598, tall: true, alt: 'Cadena fina con corazón dorado labrado y aretes gemelos sobre mármol negro' },
  'corazon-coral': { id: 'corazon-coral', file: 'p-corazon-coral.jpg', name: 'Coral Enamorado', desc: 'Corazón coral en cadena tono dorado y aretes de tres corazones', price: 180, chip: [24, 69, 20.5, 8], tags: ['regalo', 'corazones'], ar: '3/4', w: 900, h: 1200, alt: 'Collar con corazón coral en cadena tono dorado y aretes de tres corazones' },
  'cuarzo': { id: 'cuarzo', file: 'p-cuarzo.jpg', name: 'Rosa Cristal', desc: 'Collar largo de cuentas rosa translúcidas y aretes iridiscentes', price: 80, chip: [58.5, 83.5, 25, 11.5], tags: ['regalo'], ar: '3/4', w: 900, h: 1200, alt: 'Collar largo de cuentas rosa translúcidas y aretes iridiscentes' },
  'perla': { id: 'perla', file: 'p-perla.jpg', name: 'Perla Gris', desc: 'Cadena tono plata con perla gris y broqueles', price: 110, chip: [58, 70, 25, 9], tags: ['clasicos'], ar: '3/4', w: 900, h: 1200, alt: 'Cadena tono plata con perla gris y broqueles a juego' },
  'lariat': { id: 'lariat', file: 'p-lariat.jpg', name: 'Lariat Moño Negro', desc: 'Collar lariat de cuentas negras, eslabones dorados y moño', price: 220, chip: [44.5, 46, 20.5, 7.5], tags: ['noche', 'clasicos'], ar: '3/4', w: 900, h: 1200, alt: 'Collar lariat de cuentas negras con eslabones dorados y moño negro' }
};
/* Pulseras: sin precio publicado → «precio por confirmar» */
const PUL = {
  'pul-chaquira': { name: 'Pulsera de chaquira roja y amarilla', file: 'b-expositor-verde.jpg' },
  'pul-ojo-turco': { name: 'Pulsera de ojo turco con mano', file: 'b-expositor-verde.jpg' },
  'pul-cuero-cruz': { name: 'Pulsera de cuero trenzado con cruz', file: 'b-expositor-verde.jpg' },
  'pul-piedras-azules': { name: 'Pulsera de piedras azules con alambre dorado', file: 'b-expositor-verde.jpg' },
  'pul-ancla': { name: 'Pulsera con ancla', file: 'b-expositor-verde.jpg' },
  'pul-madera': { name: 'Pulsera de madera grande', file: 'b-expositor-verde.jpg' },
  'pul-fucsia': { name: 'Pulsera fucsia con cuentas plateadas', file: 'b-fucsia.jpg' }
};
const MOODS = {
  romantica: { label: 'romántica', items: ['corazon-oro', 'corazon-coral', 'rosa'] },
  nocturna: { label: 'nocturna', items: ['mariposas', 'lariat', 'rojo-v'] },
  clasica: { label: 'clásica', items: ['perla', 'lariat', 'cuarzo'] },
  atrevida: { label: 'atrevida', items: ['rojo-v', 'mariposas', 'PULSERAS'] }
};
const CALLS = [
  [{ x: 35, y: 31, s: 'l', lx: 46, ly: 14, t: 'Mariposas tono plata' }, { x: 29, y: 58, s: 'l', lx: 42, ly: 70, t: 'Cuentas de cristal negro' }, { x: 80, y: 45, s: 'r', lx: 97, ly: 30, t: 'Borlas negras' }],
  [{ x: 50, y: 92, s: 'r', lx: 97, ly: 78, t: 'Piedras rojas ovaladas' }, { x: 47, y: 52, s: 'l', lx: 58, ly: 38, t: 'Aretes de perla roja' }, { x: 24, y: 40, s: 'l', lx: 30, ly: 20, t: 'Cadena tono dorado' }],
  [{ x: 48, y: 83, s: 'l', lx: 3, ly: 70, t: 'Rosa roja en relieve' }, { x: 46, y: 88, s: 'l', lx: 3, ly: 94, t: 'Hojas verdes' }, { x: 50, y: 40, s: 'r', lx: 97, ly: 26, t: 'Aretes a juego' }]
];

/* ---------------- utilidades ---------------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const money = n => '$' + Number(n).toLocaleString('es-MX');
const html = document.documentElement;
const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const mqDesk = window.matchMedia('(min-width: 900px)');
const imgSrc = f => 'assets/img/' + f;
let lenis = null;
const safe = (name, fn) => { try { return fn(); } catch (e) { console.warn('[sr] ' + name, e); } };

if (rm) html.classList.add('rm');
if (fine) document.body.classList.add('fine');

const chipHTML = p => `<span class="chip" style="left:${p.chip[0]}%;top:${p.chip[1]}%;width:${p.chip[2]}%;height:${p.chip[3]}%">${money(p.price)}<small>MXN</small></span>`;

/* ---------------- WhatsApp ---------------- */
async function copyText(t) {
  try { await navigator.clipboard.writeText(t); return true; }
  catch (e) {
    const ta = document.createElement('textarea');
    ta.value = t; ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.append(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (_) { }
    ta.remove(); return ok;
  }
}
function abrirWhatsApp(texto) {
  if (!WHATSAPP) {
    copyText(texto).then(ok => toast(ok ? 'Copiamos tu mensaje. Pégalo donde prefieras escribirnos ✦' : 'El WhatsApp aún no está activo. Intenta de nuevo pronto.'));
    return false;
  }
  window.open('https://wa.me/52' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  return true;
}

/* ---------------- toast ---------------- */
let toastTimer;
function toast(msg, withBtn) {
  const t = $('#toast'); if (!t) return;
  $('#toastT').textContent = msg;
  $('#toastBtn').hidden = !withBtn;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3800);
}

/* ---------------- capas (drawer, vista rápida) ---------------- */
let layer = null, lastFocus = null;
const ovl = $('#ovl');
function lockScroll(on) {
  document.body.classList.toggle('lock', on);
  if (lenis) { on ? lenis.stop() : lenis.start(); }
}
function openLayer(el, withOvl) {
  if (layer) closeLayer(true);
  layer = el; lastFocus = document.activeElement;
  el.classList.add('open'); el.setAttribute('aria-hidden', 'false');
  if (withOvl) ovl.classList.add('open');
  lockScroll(true);
  setTimeout(() => { const f = el.querySelector('[data-focus],button,[href],input,select,textarea'); (f || el).focus({ preventScroll: true }); }, 60);
}
function closeLayer(silent) {
  if (!layer) return;
  layer.classList.remove('open'); layer.setAttribute('aria-hidden', 'true');
  ovl.classList.remove('open'); lockScroll(false);
  const f = lastFocus; layer = null;
  if (!silent && f && f.focus) f.focus({ preventScroll: true });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (layer) closeLayer(); closeMenu(); hideHot(); }
  if (e.key === 'Tab' && layer) {
    const f = $$('button:not([disabled]),[href],input,select,textarea,[tabindex]:not([tabindex="-1"])', layer).filter(x => x.offsetParent !== null || x === document.activeElement);
    if (!f.length) return;
    const a = f[0], b = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus(); }
    else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus(); }
  }
});
ovl && ovl.addEventListener('click', () => closeLayer());

/* ---------------- menú móvil ---------------- */
const menu = $('#menu'), burger = $('#burger');
function closeMenu() {
  if (!menu || !menu.classList.contains('open')) return;
  menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Abrir menú'); lockScroll(false);
}
burger && burger.addEventListener('click', () => {
  const open = !menu.classList.contains('open');
  if (!open) { closeMenu(); return; }
  menu.classList.add('open'); menu.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true'); burger.setAttribute('aria-label', 'Cerrar menú'); lockScroll(true);
});

/* ---------------- scroll programático ---------------- */
function scrollToEl(el) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -60, duration: 1.6 });
  else el.scrollIntoView({ behavior: rm ? 'auto' : 'smooth', block: 'start' });
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a && a.getAttribute('href').length > 1) {
    const t = document.getElementById(a.getAttribute('href').slice(1));
    if (t) { e.preventDefault(); closeMenu(); closeLayer(true); setTimeout(() => scrollToEl(t), 30); }
  }
  const add = e.target.closest('[data-add]');
  if (add) { addProduct(add.dataset.add, 1, add); }
  const addp = e.target.closest('[data-add-pul]');
  if (addp) { addPul(addp.dataset.addPul, addp); }
  if (e.target.closest('[data-open-bag]')) openBag();
  if (e.target.closest('[data-close]')) closeLayer();
  if (e.target === $('#qv')) closeLayer();
});

/* =========================================================
   CARRITO «MI JOYERO»
   ========================================================= */
const KEY = 'sr-joyero-v1';
let items = [];
function defFor(id) {
  if (PRODUCTS[id]) { const p = PRODUCTS[id]; return { id, name: p.name, price: p.price, img: imgSrc(p.file) }; }
  if (PUL[id]) return { id, name: PUL[id].name, price: null, img: imgSrc(PUL[id].file) };
  return null;
}
try {
  const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
  items = raw.map(r => { const d = defFor(r && r.id); return d ? Object.assign(d, { qty: clamp(parseInt(r.qty, 10) || 1, 1, 20) }) : null; }).filter(Boolean);
} catch (e) { items = []; }
const saveCart = () => { try { localStorage.setItem(KEY, JSON.stringify(items.map(i => ({ id: i.id, qty: i.qty })))); } catch (e) { } };
const count = () => items.reduce((a, i) => a + i.qty, 0);
function totals() {
  let total = 0, unk = 0;
  items.forEach(i => { if (i.price == null) unk += i.qty; else total += i.price * i.qty; });
  return { total, unk };
}
function totalText() {
  const t = totals();
  let s = 'Total estimado: ' + money(t.total) + ' MXN';
  if (t.unk) s += ' (+ ' + t.unk + (t.unk === 1 ? ' pieza' : ' piezas') + ' por cotizar)';
  return s;
}
function orderText(name, notes) {
  const lines = items.map(i => '• ' + i.qty + ' × ' + i.name + ' — ' + (i.price != null ? money(i.price * i.qty) : 'precio por confirmar'));
  let s = 'Hola Sebastián, quiero hacer este pedido:\n' + lines.join('\n') + '\n' + totalText();
  if (name) s += '\nNombre: ' + name;
  if (notes) s += '\nNotas: ' + notes;
  return s;
}
function fly(from) {
  const bag = $('#bagBtn'); if (rm || !from || !bag) return;
  const a = from.getBoundingClientRect(), b = bag.getBoundingClientRect();
  const d = document.createElement('i');
  d.style.cssText = 'position:fixed;left:0;top:0;width:18px;height:18px;margin:-9px;border-radius:50%;z-index:400;pointer-events:none;background:radial-gradient(circle at 32% 30%,#fff,#F2DDA4 30%,#C9A25B 70%);box-shadow:0 0 18px #F2DDA4';
  document.body.append(d);
  const sx = a.left + a.width / 2, sy = a.top + a.height / 2, ex = b.left + b.width / 2, ey = b.top + b.height / 2;
  const mx = (sx + ex) / 2, my = Math.min(sy, ey) - 140;
  const anim = d.animate([
    { transform: `translate(${sx}px,${sy}px) scale(1)` },
    { transform: `translate(${mx}px,${my}px) scale(1.4)`, offset: .5 },
    { transform: `translate(${ex}px,${ey}px) scale(.4)` }
  ], { duration: 900, easing: 'cubic-bezier(.5,0,.3,1)' });
  anim.onfinish = () => d.remove();
}
function addItem(def, qty, src, silent) {
  const f = items.find(i => i.id === def.id);
  if (f) f.qty = clamp(f.qty + qty, 1, 20); else items.push(Object.assign({}, def, { qty }));
  saveCart(); renderCart(true); fly(src);
  if (!silent) toast('Agregado a tu joyero ✦', true);
}
function addProduct(id, qty, src, silent) { const d = defFor(id); if (d && PRODUCTS[id]) addItem(d, qty || 1, src, silent); }
function addPul(id, src) { const d = defFor(id); if (d) addItem(d, 1, src); }

function renderCart(bump) {
  const n = count(), t = totals();
  const bc = $('#bagCount');
  if (bc) {
    bc.textContent = n;
    if (bump) { bc.classList.remove('bump'); void bc.offsetWidth; bc.classList.add('bump'); }
  }
  const mini = $('#miniBag'); if (mini) mini.innerHTML = 'Tu joyero: <b>' + n + (n === 1 ? ' pieza' : ' piezas') + '</b>';
  const pill = $('#pillBag');
  if (pill) { pill.hidden = !n; $('#pillN').textContent = n; $('#pillT').textContent = (t.total ? money(t.total) : 'por cotizar'); }
  const list = $('#drawerList'), foot = $('#drawerFoot');
  if (!list) return;
  if (!items.length) {
    list.innerHTML = '<div class="empty"><svg aria-hidden="true" style="color:#C9A25B"><use href="#mono"/></svg><h3>Tu joyero está vacío</h3><p>Elige las piezas que te laten y aquí las vas armando.</p><button class="btn btn--gold" type="button" data-close data-goto="coleccion">Ver la colección</button></div>';
    foot.hidden = true; return;
  }
  foot.hidden = false;
  list.innerHTML = items.map(i => `<div class="it" data-id="${i.id}"><img class="it__img" src="${i.img}" alt="" width="64" height="64"><div><p class="it__n">${i.name}</p><p class="it__p">${i.price != null ? money(i.price) + ' MXN' : 'Precio por confirmar'}</p><div class="it__q"><button type="button" data-q="-1" aria-label="Menos">−</button><output>${i.qty}</output><button type="button" data-q="1" aria-label="Más">+</button></div></div><button class="it__rm" type="button" data-rm aria-label="Quitar ${i.name}">Quitar</button></div>`).join('');
  $('#drawerTot').textContent = totalText();
}
function openBag() {
  const d = $('#drawer'); if (!d) return;
  renderCart(); openLayer(d, true);
}
safe('cart-ui', () => {
  const list = $('#drawerList');
  list.addEventListener('click', e => {
    const it = e.target.closest('.it');
    const go = e.target.closest('[data-goto]');
    if (go) { setTimeout(() => scrollToEl(document.getElementById(go.dataset.goto)), 250); return; }
    if (!it) return;
    const item = items.find(i => i.id === it.dataset.id); if (!item) return;
    const q = e.target.closest('[data-q]');
    if (q) { item.qty = clamp(item.qty + parseInt(q.dataset.q, 10), 1, 20); saveCart(); renderCart(); }
    if (e.target.closest('[data-rm]')) { items = items.filter(i => i !== item); saveCart(); renderCart(); }
  });
  $('#bagBtn').addEventListener('click', openBag);
  $('#pillBag').addEventListener('click', openBag);
  $('#toastBtn').addEventListener('click', () => { $('#toast').classList.remove('show'); openBag(); });
  $('#drawerClear').addEventListener('click', () => { items = []; saveCart(); renderCart(); });
  const send = $('#drawerSend');
  if (!WHATSAPP) send.innerHTML = 'Copiar mi pedido';
  send.addEventListener('click', () => {
    if (!items.length) return;
    abrirWhatsApp(orderText($('#d-n').value.trim(), $('#d-m').value.trim()));
  });
  renderCart();
});

/* =========================================================
   REVELADO (IntersectionObserver + respaldo por geometría)
   ========================================================= */
const pending = new Set(); let revealIO = null;
function showEl(el) { el.classList.add('in'); pending.delete(el); if (revealIO) revealIO.unobserve(el); }
function watch(el) {
  if (rm) { el.classList.add('in'); return; }
  if (el.classList.contains('in')) return;
  pending.add(el); if (revealIO) revealIO.observe(el);
}
function checkReveal() {
  const vh = window.innerHeight;
  pending.forEach(el => { const r = el.getBoundingClientRect(); if (r.height && r.top < vh * .95 && r.bottom > 0) showEl(el); });
}
safe('reveal', () => {
  if ('IntersectionObserver' in window) {
    revealIO = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) showEl(e.target); }), { threshold: .12, rootMargin: '0px 0px -8% 0px' });
  }
  $$('.rv').forEach(watch);
  setTimeout(checkReveal, 2000);
  setTimeout(checkReveal, 3500);
});

/* =========================================================
   CARGADOR
   ========================================================= */
safe('loader', () => {
  const L = $('#loader'), num = $('#ldNum');
  const dur = rm ? 400 : 1500, t0 = performance.now();
  if (window.anime) {
    const o = { v: 0 };
    anime({ targets: o, v: 100, round: 1, duration: dur, easing: 'easeInOutQuad', update: () => { num.textContent = String(o.v).padStart(2, '0'); } });
  } else {
    (function step(now) { const p = clamp((now - t0) / dur, 0, 1); num.textContent = String(Math.round(p * 100)).padStart(2, '0'); if (p < 1) requestAnimationFrame(step); })(t0);
  }
  setTimeout(() => { num.textContent = '100'; }, dur + 30);
  setTimeout(() => html.classList.add('ready'), rm ? 50 : 1700);
  setTimeout(() => { if (L) L.remove(); }, 2600);
});
setTimeout(() => html.classList.add('ready'), 2600); // respaldo

/* =========================================================
   LENIS (scroll suave lento) — solo puntero fino
   ========================================================= */
safe('lenis', () => {
  if (window.Lenis && fine && !rm) {
    lenis = new Lenis({ lerp: .085 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
});

/* =========================================================
   HERO
   ========================================================= */
safe('h1', () => {
  const h = $('#h1'); let ci = 0;
  const walk = node => Array.from(node.childNodes).forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(pt => {
        if (!pt) return;
        if (/^\s+$/.test(pt)) { frag.append(' '); return; }
        const wd = document.createElement('span'); wd.className = 'wd'; wd.style.cssText = 'display:inline-block;white-space:nowrap';
        Array.from(pt).forEach(chr => { const s = document.createElement('span'); s.className = 'ch'; s.style.setProperty('--ci', ci++); s.textContent = chr; s.setAttribute('aria-hidden', 'true'); wd.append(s); });
        frag.append(wd);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) walk(n);
  });
  $$('.ln', h).forEach(walk);
  $$('.gl', h).forEach(e => e.classList.add('gl--split'));
});

let heroVis = true;
const hero = $('#inicio');
let ptr = { x: 0, y: 0, in: false, tx: 0, ty: 0 }, rx = 0, ry = 0, rxT = 0, ryT = 0;
const ringPearls = [];
let ringR = 260, ringAngle = 0;

safe('hero-ring', () => {
  const wrap = $('#ringwrap');
  for (let i = 0; i < 28; i++) { const p = document.createElement('i'); p.className = 'pearl'; wrap.append(p); ringPearls.push(p); }
  const setR = () => { ringR = parseFloat(getComputedStyle($('#orbit')).getPropertyValue('--r')) + (mqDesk.matches ? 90 : 62); };
  setR(); window.addEventListener('resize', setR);
});
function ringTick(dt) {
  if (!rm) ringAngle -= dt * (Math.PI * 2 / 30);
  ringPearls.forEach((p, i) => {
    const a = ringAngle + i * Math.PI * 2 / 28;
    p.style.transform = `translate(${(Math.cos(a) * ringR).toFixed(1)}px,${(Math.sin(a) * ringR).toFixed(1)}px) rotateX(-74deg)`;
  });
}

/* polvo de brillo */
let dustTick = () => { };
safe('dust', () => {
  const c = $('#dust'); if (!c) return;
  const ctx = c.getContext('2d');
  const spr = document.createElement('canvas'); spr.width = spr.height = 64;
  const g = spr.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,248,225,1)'); gr.addColorStop(.25, 'rgba(242,221,164,.85)'); gr.addColorStop(.6, 'rgba(201,162,91,.25)'); gr.addColorStop(1, 'rgba(201,162,91,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  let W = 0, H = 0, dpr = 1; const ps = [];
  const N = () => window.innerWidth < 700 ? 45 : 90;
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = c.clientWidth; H = c.clientHeight;
    c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = N();
    while (ps.length < n) ps.push({ x: Math.random() * W, y: Math.random() * H, r: 1 + Math.random() * 2, vy: .12 + Math.random() * .38, ph: Math.random() * 6.28, sp: .6 + Math.random() * 1.6 });
    ps.length = n;
  }
  size(); window.addEventListener('resize', size);
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (const p of ps) {
      if (!rm) {
        p.y -= p.vy; p.x += Math.sin(t / 1800 + p.ph) * .15;
        if (ptr.in) { const dx = ptr.tx - p.x, dy = ptr.ty - p.y, d = Math.hypot(dx, dy); if (d < 200 && d > 1) { p.x += dx / d * (1 - d / 200) * 1.2; p.y += dy / d * (1 - d / 200) * 1.2; } }
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      }
      const a = .3 + .7 * Math.pow(Math.sin(t / 1000 * p.sp + p.ph) * .5 + .5, 2);
      ctx.globalAlpha = rm ? .7 : a;
      const s = p.r * 5; ctx.drawImage(spr, p.x - s / 2, p.y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
  }
  dustTick = draw;
  draw(0);
});

safe('hero-loop', () => {
  if (!hero) return;
  const stage3d = $('#stage3d'), bg = $('.hero__bg');
  let last = performance.now(), running = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => { heroVis = es[0].isIntersecting; if (heroVis && !running && !rm) { last = performance.now(); requestAnimationFrame(loop); } }, { threshold: 0 }).observe(hero);
  }
  hero.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
    ryT = clamp(nx * 24, -12, 12); rxT = clamp(-ny * 16, -8, 8);
    ptr.in = true; ptr.tx = e.clientX - r.left; ptr.ty = e.clientY - r.top;
    bg.style.setProperty('--spx', ((nx + .5) * 100).toFixed(1) + '%'); bg.style.setProperty('--spy', ((ny + .5) * 100).toFixed(1) + '%');
  });
  hero.addEventListener('pointerleave', () => { ptr.in = false; ryT = 0; rxT = 0; });
  function loop(now) {
    running = true;
    const dt = Math.min((now - last) / 1000, .1); last = now;
    if (!rm) {
      rx += (rxT - rx) * .06; ry += (ryT - ry) * .06;
      stage3d.style.setProperty('--rx', rx.toFixed(2)); stage3d.style.setProperty('--ry', ry.toFixed(2));
      dustTick(now);
    }
    ringTick(dt);
    if (heroVis && !rm) requestAnimationFrame(loop); else running = false;
  }
  requestAnimationFrame(loop);
  /* destellos ✦ */
  if (!rm) setInterval(() => {
    if (!heroVis || document.hidden) return;
    const box = $('#sparks'); const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('class', 'spk'); s.innerHTML = '<use href="#spark"/>';
    s.style.left = (30 + Math.random() * 40) + '%'; s.style.top = (14 + Math.random() * 58) + '%';
    box.append(s); setTimeout(() => s.remove(), 800);
  }, 2000);
});

/* =========================================================
   MANIFIESTO
   ========================================================= */
let maniWords = [];
safe('manifiesto', () => {
  const txt = $('#maniTxt'); if (!txt) return;
  const split = (node, key) => Array.from(node.childNodes).forEach(n => {
    if (n.nodeType === 3) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(pt => {
        if (!pt) return;
        if (/^\s+$/.test(pt)) { frag.append(' '); return; }
        const s = document.createElement('span'); s.className = 'w' + (key ? ' k' : ''); s.textContent = pt; maniWords.push(s); frag.append(s);
      });
      n.replaceWith(frag);
    } else if (n.nodeType === 1) split(n, key || n.classList.contains('k'));
  });
  if (!rm) { split(txt, false); maniWords.forEach(w => w.style.setProperty('--wo', .14)); }
  /* hilos de perlas cayendo */
  const th = $('#threads');
  [[10, 16], [52, 22], [90, 13]].forEach(([x, dur]) => {
    const d = document.createElement('div'); d.className = 'thr'; d.style.left = x + '%';
    for (let i = 0; i < 4; i++) { const p = document.createElement('i'); p.style.animationDuration = dur + 's'; p.style.animationDelay = (-i * dur / 4) + 's'; d.append(p); }
    th.append(d);
  });
  /* contadores */
  const stats = $$('.stat');
  const run = st => {
    const b = $('.stat__n', st); if (!b || b.dataset.done) return; b.dataset.done = 1;
    if (rm) return;
    b.classList.add('glow');
    $$('[data-count]', b).forEach(sp => {
      const to = +sp.dataset.count, o = { v: 0 };
      if (window.anime) anime({ targets: o, v: to, round: 1, duration: 1800, easing: 'easeOutExpo', update: () => { sp.textContent = o.v; } });
      else { const t0 = performance.now(); (function s(n) { const p = clamp((n - t0) / 1800, 0, 1); sp.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(s); })(t0); }
    });
  };
  if (!rm) stats.forEach(st => $$('[data-count]', st).forEach(sp => sp.textContent = '0'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: .4 });
    stats.forEach(s => io.observe(s));
  }
  setTimeout(() => stats.forEach(st => { const b = $('.stat__n', st); const r = st.getBoundingClientRect(); if (!b.dataset.done && r.top < innerHeight && r.bottom > 0) run(st); else if (!b.dataset.done) { /* respaldo: números finales si nunca se anima */ setTimeout(() => { if (!b.dataset.done) $$('[data-count]', b).forEach(sp => sp.textContent = sp.dataset.count); }, 12000); } }), 2400);
});
function maniUpdate() {
  const txt = $('#maniTxt'); if (!txt || !maniWords.length || rm) return;
  const r = txt.getBoundingClientRect(), vh = innerHeight;
  const p = clamp((vh * .85 - r.top) / (r.height + vh * .4), 0, 1);
  const n = maniWords.length;
  maniWords.forEach((w, i) => {
    const o = clamp((p * (n + 5) - i) / 5, 0, 1);
    const v = (.14 + .86 * o).toFixed(2);
    if (w._v !== v) { w._v = v; w.style.setProperty('--wo', v); w.classList.toggle('lit', o > .5); }
  });
}

/* =========================================================
   COLECCIÓN
   ========================================================= */
const grid = $('#grid');
let curFilter = 'all';
safe('colección', () => {
  const banner = $('#banner');
  Object.values(PRODUCTS).forEach((p, i) => {
    const a = document.createElement('article');
    a.className = 'pc rv rv--card' + (p.tall ? ' pc--tall' : ''); a.dataset.id = p.id; a.style.setProperty('--d', ((i % 4) * .08).toFixed(2));
    a.innerHTML = `<div class="pc__ph" style="--ar:${p.ar}" data-open="${p.id}"><div class="pc__tilt"><img src="${imgSrc(p.file)}" width="${p.w}" height="${p.h}" alt="${p.alt}" loading="lazy" decoding="async">${chipHTML(p)}<i class="pc__shine" style="--n:${i}"></i><i class="pc__glare"></i></div></div><h3 class="pc__n">${p.name}</h3><p class="pc__d">${p.desc}</p><div class="pc__row"><button class="btn btn--gold" type="button" data-add="${p.id}">Lo quiero <svg class="ic" aria-hidden="true"><use href="#plus"/></svg></button><button class="pc__eye" type="button" data-open="${p.id}" aria-label="Ver de cerca: ${p.name}"><svg aria-hidden="true"><use href="#lens"/></svg></button></div>`;
    grid.insertBefore(a, banner); watch(a);
  });
  /* tilt 3D */
  grid.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const ph = e.target.closest('.pc__ph'); if (!ph) return;
    const t = $('.pc__tilt', ph), r = ph.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    t.classList.add('hov');
    t.style.setProperty('--tx', ((.5 - py) * 16).toFixed(1) + 'deg'); t.style.setProperty('--ty', ((px - .5) * 16).toFixed(1) + 'deg');
    t.style.setProperty('--gx', (px * 100).toFixed(0) + '%'); t.style.setProperty('--gy', (py * 100).toFixed(0) + '%');
  });
  grid.addEventListener('pointerout', e => {
    const ph = e.target.closest('.pc__ph'); if (!ph || ph.contains(e.relatedTarget)) return;
    const t = $('.pc__tilt', ph); t.classList.remove('hov'); t.style.setProperty('--tx', '0deg'); t.style.setProperty('--ty', '0deg');
  });
  grid.addEventListener('click', e => { const o = e.target.closest('[data-open]'); if (o) openQuick(o.dataset.open); });

  /* filtros con píldora y FLIP */
  const fbox = $('#filters'), pill = $('#pill'), btns = $$('.f', fbox);
  const movePill = () => { const b = $('.f.is-on', fbox); if (!b) return; pill.style.width = b.offsetWidth + 'px'; pill.style.transform = `translateX(${b.offsetLeft}px)`; };
  window.movePill = movePill;
  movePill(); window.addEventListener('resize', movePill);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(movePill);
  window.addEventListener('load', movePill);
  function applyFilter(f) {
    if (f === curFilter) return;
    curFilter = f;
    btns.forEach(b => { const on = b.dataset.f === f; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    movePill();
    const cards = $$('.pc', grid);
    const ok = c => f === 'all' || PRODUCTS[c.dataset.id].tags.includes(f);
    const leaving = cards.filter(c => !c.hidden && !ok(c));
    if (!rm) leaving.forEach(c => c.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.92)' }], { duration: 220, fill: 'forwards' }));
    setTimeout(() => {
      const first = new Map(cards.filter(c => !c.hidden).map(c => [c, c.getBoundingClientRect()]));
      cards.forEach(c => { c.getAnimations().forEach(a => a.cancel()); c.hidden = !ok(c); });
      let k = 0;
      cards.forEach(c => {
        if (c.hidden) return;
        showEl(c);
        if (rm) return;
        const a = first.get(c), b = c.getBoundingClientRect();
        if (a) { const dx = a.left - b.left, dy = a.top - b.top; if (dx || dy) c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' }); }
        else c.animate([{ opacity: 0, transform: 'scale(.92)' }, { opacity: 1, transform: 'none' }], { duration: 550, delay: (k++) * 70, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' });
      });
      checkReveal();
    }, rm ? 0 : 230);
  }
  window.applyFilter = applyFilter;
  btns.forEach(b => b.addEventListener('click', () => applyFilter(b.dataset.f)));
});

/* vista rápida */
let qvId = null, qvQty = 1;
function openQuick(id) {
  const p = PRODUCTS[id]; if (!p) return;
  qvId = id; qvQty = 1;
  $('#qvPh').innerHTML = `<img src="${imgSrc(p.file)}" width="${p.w}" height="${p.h}" alt="${p.alt}">${chipHTML(p)}`;
  $('#qv-n').textContent = p.name; $('#qvD').textContent = p.desc;
  $('#qvP').innerHTML = money(p.price) + ' <small>MXN</small>'; $('#qvQ').textContent = 1;
  openLayer($('#qv'), false);
}
safe('quickview', () => {
  $('#qvMinus').addEventListener('click', () => { qvQty = clamp(qvQty - 1, 1, 20); $('#qvQ').textContent = qvQty; });
  $('#qvPlus').addEventListener('click', () => { qvQty = clamp(qvQty + 1, 1, 20); $('#qvQ').textContent = qvQty; });
  $('#qvAdd').addEventListener('click', e => { const src = e.currentTarget; addProduct(qvId, qvQty, src); closeLayer(true); });
  $('#qvAsk').addEventListener('click', e => { e.preventDefault(); const p = PRODUCTS[qvId]; abrirWhatsApp('Hola Sebastián, me interesa la pieza «' + p.name + '» (' + money(p.price) + ' MXN). ¿Sigue disponible?'); });
});

/* =========================================================
   ESCENA FIJA «BAJO EL REFLECTOR»
   ========================================================= */
const pinSec = $('#reflector'), pinStage = $('#pinStage');
const chaps = $$('.chap', pinStage || document);
const callRefs = [];
safe('pin-build', () => {
  chaps.forEach((ch, i) => {
    const frame = $('.frame', ch);
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'calls'); svg.setAttribute('aria-hidden', 'true');
    frame.append(svg);
    const refs = [];
    CALLS[i].forEach(c => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); svg.append(line);
      const wrap = document.createElement('div'); wrap.className = 'call'; wrap.setAttribute('aria-hidden', 'true'); wrap.style.inset = '0'; wrap.style.pointerEvents = 'none';
      const dot = document.createElement('i'); dot.className = 'call__dot'; dot.style.left = c.x + '%'; dot.style.top = c.y + '%';
      const lb = document.createElement('span'); lb.className = 'call__lb'; lb.textContent = c.t; lb.style.left = c.lx + '%'; lb.style.top = c.ly + '%';
      lb.style.transform = c.s === 'l' ? 'translate(0,-50%)' : 'translate(-100%,-50%)';
      wrap.append(dot, lb); frame.append(wrap);
      refs.push({ c, line, wrap, len: 0 });
    });
    callRefs.push({ frame, svg, refs });
  });
  const layout = () => callRefs.forEach(cr => {
    const W = cr.frame.offsetWidth, H = cr.frame.offsetHeight; if (!W) return;
    cr.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    cr.refs.forEach(r => {
      const x1 = r.c.x / 100 * W, y1 = r.c.y / 100 * H, x2 = r.c.lx / 100 * W, y2 = r.c.ly / 100 * H;
      r.line.setAttribute('x1', x1); r.line.setAttribute('y1', y1); r.line.setAttribute('x2', x2); r.line.setAttribute('y2', y2);
      r.len = Math.hypot(x2 - x1, y2 - y1); r.line.style.strokeDasharray = r.len;
      if (rm || !html.classList.contains('js')) { r.line.style.strokeDashoffset = 0; r.wrap.style.setProperty('--c', 1); }
    });
  });
  layout(); window.addEventListener('resize', layout); window.addEventListener('load', layout);
  window.pinLayout = layout;
  if (rm) callRefs.forEach(cr => cr.refs.forEach(r => r.wrap.style.setProperty('--c', 1)));
});
function pinUpdate() {
  if (!pinSec || rm) return;
  const r = pinSec.getBoundingClientRect(), total = pinSec.offsetHeight - innerHeight;
  if (total <= 0) return;
  const p = clamp(-r.top / total, 0, 1);
  const idx = Math.min(2, Math.floor(p * 3)), q = clamp(p * 3 - idx, 0, 1);
  pinStage.dataset.idx = idx;
  $('#roll').style.setProperty('--ri', idx);
  pinStage.style.setProperty('--sp', p.toFixed(3));
  $$('#steps li').forEach((li, i) => li.classList.toggle('on', i <= idx));
  chaps.forEach((ch, i) => {
    ch.classList.toggle('is-on', i === idx);
    let o, cs = [0, 0, 0];
    if (i < idx) { o = 1; cs = [1, 1, 1]; }
    else if (i > idx) { o = 0; }
    else { o = ease(clamp(q / .5, 0, 1)); cs = [0, 1, 2].map(k => clamp((q - .5 - k * .1) / .18, 0, 1)); }
    ch.style.setProperty('--o', o.toFixed(3));
    const cr = callRefs[i];
    if (cr) cr.refs.forEach((rf, k) => {
      rf.wrap.style.setProperty('--c', cs[k].toFixed(2));
      rf.line.style.strokeDashoffset = (rf.len * (1 - cs[k])).toFixed(1);
    });
  });
}

/* =========================================================
   PULSERAS: scroll horizontal fijado + hotspots
   ========================================================= */
const hs = $('#hs'), hsTrack = $('#hsTrack');
let hsMax = 0;
function hsMeasure() {
  if (!hs) return;
  if (!mqDesk.matches || rm) { hs.style.height = ''; hsTrack.style.transform = ''; hsMax = 0; return; }
  hsMax = Math.max(0, hsTrack.scrollWidth - innerWidth);
  hs.style.height = (innerHeight + hsMax) + 'px';
}
function hsUpdate() {
  if (!hs || !mqDesk.matches || rm || !hsMax) return;
  const r = hs.getBoundingClientRect(), p = clamp(-r.top / (hs.offsetHeight - innerHeight), 0, 1);
  hsTrack.style.transform = `translate3d(${(-p * hsMax).toFixed(1)}px,0,0)`;
}
let hotKey = null, hotEl = null;
function hideHot() { const c = $('#hotcard'); if (c) c.hidden = true; if (hotEl) hotEl.classList.remove('on'); hotEl = null; hotKey = null; }
safe('pulseras', () => {
  const box = $('#hotBox'), card = $('#hotcard');
  box.addEventListener('click', e => {
    const h = e.target.closest('.hot');
    if (!h) { if (!e.target.closest('#hotcard')) hideHot(); return; }
    if (hotEl === h) { hideHot(); return; }
    if (hotEl) hotEl.classList.remove('on');
    hotEl = h; hotKey = h.dataset.key; h.classList.add('on');
    $('#hotName').textContent = h.dataset.name;
    card.hidden = false;
    const W = box.clientWidth, H = box.clientHeight, cx = h.offsetLeft + 17, cy = h.offsetTop + 17;
    const cw = card.offsetWidth || 200, ch = card.offsetHeight || 120;
    card.style.left = clamp(cx - cw / 2, 8, W - cw - 8) + 'px';
    card.style.top = (cy + 26 + ch > H ? cy - 26 - ch : cy + 26) + 'px';
  });
  $('#hotAdd').addEventListener('click', e => { if (hotKey) addPul(hotKey, e.currentTarget); hideHot(); });
  $('#askPul').addEventListener('click', () => abrirWhatsApp('Hola Sebastián, me interesan sus pulseras. ¿Me compartes precios y disponibilidad?'));
  hsMeasure(); window.addEventListener('resize', hsMeasure); window.addEventListener('load', hsMeasure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(hsMeasure);
  $$('#hsTrack img').forEach(im => im.addEventListener('load', hsMeasure));
});

/* =========================================================
   LUPA
   ========================================================= */
safe('lupa', () => {
  const box = $('#lupa'), lens = $('#lens'); if (!box) return;
  const Z = 2.6; let W = 0, H = 0, S = 150, cur = { x: 0, y: 0 }, tween = null, touched = false;
  lens.style.backgroundImage = `url(${imgSrc('p-rosa.jpg')})`;
  const measure = () => {
    W = box.clientWidth; H = box.clientHeight; S = W < 360 ? 120 : 150;
    lens.style.width = lens.style.height = S + 'px'; lens.style.margin = -S / 2 + 'px';
    lens.style.backgroundSize = `${W * Z}px ${H * Z}px`;
  };
  measure(); window.addEventListener('resize', measure);
  const place = (x, y, forced) => {
    cur.x = x; cur.y = y;
    lens.style.left = x + 'px'; lens.style.top = y + 'px';
    lens.style.backgroundPosition = `${S / 2 - x * Z}px ${S / 2 - y * Z}px`;
    const blocked = !forced && y > H * .78 && x > W * .6;
    lens.classList.toggle('on', !blocked);
  };
  const to = (px, py, dur, cb) => {
    if (tween) cancelAnimationFrame(tween);
    const x0 = cur.x, y0 = cur.y, x1 = px / 100 * W, y1 = py / 100 * H, t0 = performance.now();
    (function s(n) {
      const p = clamp((n - t0) / dur, 0, 1), e = ease(p);
      place(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e, true);
      if (p < 1) tween = requestAnimationFrame(s); else { tween = null; cb && cb(); }
    })(t0);
  };
  const pt = e => { const r = box.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  box.addEventListener('pointermove', e => { touched = true; if (tween) { cancelAnimationFrame(tween); tween = null; } const [x, y] = pt(e); place(x, y, false); });
  box.addEventListener('pointerdown', e => { touched = true; const [x, y] = pt(e); place(x, y, false); });
  box.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') lens.classList.remove('on'); });
  box.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') setTimeout(() => lens.classList.remove('on'), 1400); });
  $$('.dchip').forEach(b => b.addEventListener('click', () => { touched = true; const [x, y] = b.dataset.lens.split(',').map(Number); lens.classList.add('on'); if (!cur.x) place(W / 2, H / 2, true); to(x, y, 800); }));
  /* recorrido automático al entrar */
  if (!rm && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return; io.disconnect(); measure();
      place(W * .5, H * .3, true);
      const pts = [[48, 83], [46, 88], [24, 50]]; let i = 0;
      const step = () => { if (touched || i >= pts.length) return; to(pts[i][0], pts[i][1], 1100, () => { i++; setTimeout(step, 350); }); };
      setTimeout(step, 500);
    }, { threshold: .5 });
    io.observe(box);
  }
});

/* =========================================================
   TU ESTILO
   ========================================================= */
let mood = 'romantica';
safe('estilo', () => {
  const sec = $('#estilo'), fan = $('#fan');
  const render = m => {
    mood = m; sec.dataset.mood = m;
    $$('.mood').forEach(b => { const on = b.dataset.m === m; b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on); });
    fan.innerHTML = MOODS[m].items.map((id, j) => {
      const k = j - 1;
      if (id === 'PULSERAS') return `<a class="fc fc--link" style="--k:${k};--j:${j}" href="#pulseras" aria-label="Ver las pulseras"><div class="fc__in" style="--j:${j}"><div class="fc__fr"><b>Pulseras</b><span>Ver el expositor</span></div></div></a>`;
      const p = PRODUCTS[id];
      return `<figure class="fc" style="--k:${k}"><div class="fc__in" style="--j:${j}"><div class="fc__fr"><img src="${imgSrc(p.file)}" width="${p.w}" height="${p.h}" alt="${p.alt}" loading="lazy" decoding="async">${chipHTML(p)}<figcaption class="fc__nm">${p.name}</figcaption></div></div></figure>`;
    }).join('');
  };
  render(mood);
  $$('.mood').forEach(b => b.addEventListener('click', () => { if (b.dataset.m !== mood) render(b.dataset.m); }));
  $('#lookAdd').addEventListener('click', e => {
    const ids = MOODS[mood].items.filter(i => PRODUCTS[i]);
    ids.forEach((id, i) => addProduct(id, 1, i ? null : e.currentTarget, true));
    toast('Look ' + MOODS[mood].label + ' agregado a tu joyero ✦', true);
  });
  $('#lookAsk').addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); abrirWhatsApp('Hola Sebastián, me siento ' + MOODS[mood].label + ' hoy, ¿qué piezas me recomiendas?'); });
});

/* =========================================================
   REGALOS
   ========================================================= */
function giftUpdate() {
  const f = $('#gfan'); if (!f || rm) return;
  const r = f.getBoundingClientRect(), vh = innerHeight;
  f.style.setProperty('--p', clamp((vh * .95 - r.top) / (vh * .6), 0, 1).toFixed(3));
}
safe('regalos', () => {
  $('#giftWa').addEventListener('click', () => abrirWhatsApp('Hola Sebastián, busco un regalo. ¿Me ayudas a elegir?'));
  $('#giftIdeas').addEventListener('click', () => { if (window.applyFilter) window.applyFilter('regalo'); scrollToEl($('#coleccion')); });
});

/* =========================================================
   CÓMO PEDIR: cadena que se dibuja
   ========================================================= */
let chainState = null;
safe('cadena', () => {
  const wrap = $('#chain'), svg = $('#chainSvg'), base = $('#chainBase'), draw = $('#chainDraw'), pearl = $('#chainPearl');
  const steps = $$('.hstep', wrap);
  let len = 0;
  function build() {
    const W = wrap.offsetWidth, H = wrap.offsetHeight; if (!W || !H) return;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    let d;
    if (mqDesk.matches) {
      const cx = W / 2, a = Math.min(46, W * .04);
      d = `M${cx} 0 C${cx + a} ${H * .12},${cx - a} ${H * .22},${cx} ${H * .33} S${cx + a} ${H * .55},${cx} ${H * .66} S${cx - a} ${H * .88},${cx} ${H}`;
    } else d = `M28 0 L28 ${H}`;
    base.setAttribute('d', d); draw.setAttribute('d', d);
    len = draw.getTotalLength(); draw.style.strokeDasharray = len;
    update();
  }
  function update() {
    if (!len) return;
    const r = wrap.getBoundingClientRect(), vh = innerHeight;
    let p = clamp((vh * .7 - r.top) / (r.height + vh * .15), 0, 1);
    if (rm) p = 1;
    draw.style.strokeDashoffset = (len * (1 - p)).toFixed(1);
    const pt = draw.getPointAtLength(len * p);
    pearl.style.transform = `translate(${pt.x.toFixed(1)}px,${pt.y.toFixed(1)}px)`;
    wrap.classList.toggle('live', p > .005);
    steps.forEach(s => s.classList.toggle('on', p >= parseFloat(s.dataset.at) - .02));
  }
  chainState = { build, update };
  build(); window.addEventListener('resize', build); window.addEventListener('load', build);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);
  if ('ResizeObserver' in window) new ResizeObserver(build).observe(wrap);
});

/* =========================================================
   PREGUNTAS (acordeón)
   ========================================================= */
safe('faq', () => {
  const list = $('#faqList');
  list.addEventListener('click', e => {
    const q = e.target.closest('.faq__q'); if (!q) return;
    const item = q.closest('.faq__i'), open = !item.classList.contains('open');
    $$('.faq__i', list).forEach(i => { i.classList.remove('open'); $('.faq__q', i).setAttribute('aria-expanded', 'false'); });
    if (open) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
  });
});

/* =========================================================
   FORMULARIO / CONTACTO
   ========================================================= */
safe('form', () => {
  const form = $('#form'), nowa = $('#nowa');
  const build = () => {
    const n = $('#f-n').value.trim(), q = $('#f-q').value, m = $('#f-m').value.trim();
    let s = 'Hola Sebastián, soy ' + (n || '…') + '. Busco: ' + (q || 'ver tus piezas') + '.';
    if (m) s += ' ' + m;
    if (items.length) s += '\n\nMi joyero:\n' + items.map(i => '• ' + i.qty + ' × ' + i.name + ' — ' + (i.price != null ? money(i.price * i.qty) : 'precio por confirmar')).join('\n') + '\n' + totalText();
    return s;
  };
  if (!WHATSAPP) { form.hidden = true; nowa.hidden = false; }
  $('#copyBtn').addEventListener('click', () => {
    const txt = items.length ? orderText('', '') : build();
    copyText(txt).then(ok => toast(ok ? 'Pedido copiado ✦ Pégalo donde prefieras escribirnos' : 'No pudimos copiar. Intenta de nuevo.'));
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const n = $('#f-n'), q = $('#f-q'); let ok = true;
    const flag = (el, id, msg) => { el.parentElement.classList.toggle('bad', !!msg); $(id).textContent = msg || ''; if (msg) ok = false; };
    flag(n, '#e-n', n.value.trim().length < 2 ? 'Escribe tu nombre para saber cómo llamarte.' : '');
    flag(q, '#e-q', !q.value ? 'Cuéntanos qué buscas.' : '');
    if (!ok) { (n.parentElement.classList.contains('bad') ? n : q).focus(); return; }
    abrirWhatsApp(build());
  });
  ['#f-n', '#f-q'].forEach(s => $(s).addEventListener('input', () => { $(s).parentElement.classList.remove('bad'); $(s === '#f-n' ? '#e-n' : '#e-q').textContent = ''; }));
});

/* botón flotante de WhatsApp */
safe('fab', () => {
  const fab = $('#fab'); if (!fab || !WHATSAPP) return;
  fab.hidden = false;
  const txt = 'Hola Sebastián, vi tu página y quiero información.';
  fab.href = 'https://wa.me/52' + WHATSAPP + '?text=' + encodeURIComponent(txt);
  fab.target = '_blank'; fab.rel = 'noopener';
  setTimeout(() => { fab.classList.add('tip'); setTimeout(() => fab.classList.remove('tip'), 5000); }, 6000);
});

/* =========================================================
   Pie, encabezado, progreso, puntos, parallax
   ========================================================= */
safe('footer', () => {
  $('#toTop').addEventListener('click', () => { if (lenis) lenis.scrollTo(0, { duration: 1.8 }); else window.scrollTo({ top: 0, behavior: rm ? 'auto' : 'smooth' }); });
});
const hdr = $('#hdr');
let lastY = 0;
safe('dots', () => {
  const nav = $('#dots');
  $$('section[data-dot]').forEach(s => {
    const a = document.createElement('a'); a.href = '#' + s.id; a.dataset.for = s.id; a.setAttribute('aria-label', s.dataset.dot);
    a.innerHTML = '<span>' + s.dataset.dot + '</span>'; nav.append(a);
  });
});
function chromeUpdate() {
  const y = window.scrollY, doc = document.documentElement;
  const max = doc.scrollHeight - innerHeight;
  doc.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : 0);
  $('#prog').style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : 0);
  hdr.classList.toggle('is-glass', y > 40);
  const menuOpen = menu.classList.contains('open');
  hdr.classList.toggle('is-hide', y > 160 && y > lastY + 4 && !menuOpen);
  if (y < lastY - 4 || y < 160) hdr.classList.remove('is-hide');
  lastY = y;
  /* sección activa */
  const mid = innerHeight * .4; let act = null;
  $$('section[data-dot]').forEach(s => { const r = s.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) act = s.id; });
  $$('#dots a').forEach(a => a.classList.toggle('act', a.dataset.for === act));
  $$('.nav a').forEach(a => a.classList.toggle('act', a.getAttribute('href') === '#' + act));
  /* parallax de la palabra gigante + pie */
  if (heroVis && !rm) $('.hero__bg').style.setProperty('--bw', (-y * .16).toFixed(1) + 'px');
  const fw = $('#ftWord');
  if (fw) { const r = fw.getBoundingClientRect(); fw.style.setProperty('--fp', rm ? 1 : clamp((innerHeight * .95 - r.top) / (innerHeight * .55), 0, 1).toFixed(3)); }
}

let sched = false;
function onScroll() {
  sched = false;
  safe('chrome', chromeUpdate); safe('mani', maniUpdate); safe('pin', pinUpdate); safe('hs', hsUpdate);
  safe('gift', giftUpdate); safe('chain', () => chainState && chainState.update()); safe('reveal', checkReveal);
}
const schedule = () => { if (!sched) { sched = true; requestAnimationFrame(onScroll); } };
window.addEventListener('scroll', schedule, { passive: true });
window.addEventListener('resize', () => { hsMeasure(); schedule(); });
window.addEventListener('load', () => { hsMeasure(); schedule(); });
schedule();

/* =========================================================
   Cursor, botones magnéticos, brillo de tiles
   ========================================================= */
safe('cursor', () => {
  if (!fine) return;
  const cur = $('#cur'); let x = 0, y = 0, tx = 0, ty = 0, started = false;
  window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cur.classList.add('vis'); if (!started) { x = tx; y = ty; started = true; (function l() { x += (tx - x) * .22; y += (ty - y) * .22; cur.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`; requestAnimationFrame(l); })(); } });
  document.addEventListener('mouseleave', () => cur.classList.remove('vis'));
  document.addEventListener('mouseover', e => {
    const t = e.target;
    cur.classList.toggle('big', !!t.closest('.pc__ph'));
    cur.classList.toggle('dot', !t.closest('.pc__ph') && !!t.closest('a,button,input,select,textarea,.hot,.mood'));
  });
  /* magnéticos */
  $$('.mag').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${clamp((e.clientX - r.left - r.width / 2) * .25, -8, 8).toFixed(1)}px,${clamp((e.clientY - r.top - r.height / 2) * .25, -8, 8).toFixed(1)}px)`;
    });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });
});
safe('tiles', () => {
  $$('.tile').forEach(t => t.addEventListener('pointermove', e => {
    const r = t.getBoundingClientRect();
    t.style.setProperty('--mx', (e.clientX - r.left) + 'px'); t.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));
});
