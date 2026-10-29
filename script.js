// ===== Mobile menu =====
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// ===== Appointment popup =====
const bookingDialog = document.getElementById('appointment');
const bookingForm = document.getElementById('booking-form');
const bookingReview = document.getElementById('booking-review');
const bookingService = document.getElementById('booking-service');
const bookingDate = document.getElementById('booking-date');
let bookingTrigger;
function localToday() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
function openBooking(service = '', trigger = document.activeElement) {
  bookingTrigger = trigger;
  bookingDate.min = localToday();
  bookingService.value = service;
  bookingForm.hidden = false;
  bookingReview.hidden = true;
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  if (!bookingDialog.open) bookingDialog.showModal();
  document.body.classList.add('booking-open');
  bookingForm.elements.name.focus();
}
document.querySelectorAll('[data-booking]').forEach(link => {
  link.setAttribute('aria-haspopup', 'dialog');
  link.setAttribute('aria-controls', 'appointment');
  link.addEventListener('click', event => {
    event.preventDefault();
    openBooking(link.dataset.bookingService || '', link);
  });
});
bookingDialog.querySelector('.booking-close').addEventListener('click', () => bookingDialog.close());
bookingDialog.addEventListener('click', event => {
  if (event.target !== bookingDialog) return;
  const rect = bookingDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) bookingDialog.close();
});
bookingDialog.addEventListener('close', () => {
  document.body.classList.remove('booking-open');
  if (bookingTrigger && bookingTrigger.isConnected) bookingTrigger.focus();
});
bookingDate.addEventListener('input', () => bookingDate.setCustomValidity(''));
bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  bookingDate.min = localToday();
  bookingDate.setCustomValidity(bookingDate.value < bookingDate.min ? 'Please choose today or a future date.' : '');
  if (!bookingForm.reportValidity()) return;
  const data = new FormData(bookingForm);
  document.getElementById('booking-summary').textContent = [
    `Name: ${data.get('name')}`, `Phone: ${data.get('phone')}`,
    `Service: ${data.get('service')}`, `Preferred date: ${data.get('date')}`,
    `Preferred time: ${data.get('time')}`, data.get('notes') ? `Notes: ${data.get('notes')}` : ''
  ].filter(Boolean).join('\n');
  bookingForm.hidden = true;
  bookingReview.hidden = false;
  bookingReview.querySelector('a').focus();
});
bookingDialog.querySelector('.booking-edit').addEventListener('click', () => {
  bookingReview.hidden = true;
  bookingForm.hidden = false;
  bookingForm.elements.name.focus();
});

// ===== Price list (data comes from prices.js) =====
const listEl = document.getElementById('price-list');
const searchEl = document.getElementById('price-search');
const tabs = document.querySelectorAll('.tab');
let activeTab = 'ladies';
let cardIndex = 0; // first card of a tab starts open on phones

const money = n => (n === null || n === undefined) ? '–' : n.toLocaleString('en-IN');
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function highlight(text, q) {
  const safe = escapeHtml(text);
  if (!q) return safe;
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return safe;
  return escapeHtml(text.slice(0, i)) + '<mark>' + escapeHtml(text.slice(i, i + q.length)) + '</mark>' + escapeHtml(text.slice(i + q.length));
}

function cardHtml(block, tabLabel, q, showTab) {
  const titleMatch = q && block.title.toLowerCase().includes(q);
  const items = q && !titleMatch ? block.items.filter(it => it[0].toLowerCase().includes(q)) : block.items;
  if (!items.length) return '';
  const head = block.cols.map(c => `<th>${escapeHtml(c).replace(' · ', '<br>')}</th>`).join('');
  const rows = items.map(it => {
    const [name, time, ...prices] = it;
    const service = `${tabLabel} – ${block.title} – ${name}`;
    return `<tr tabindex="0" data-service="${escapeHtml(service)}">
      <td>${highlight(name, titleMatch ? '' : q)}${time ? `<span class="time">${escapeHtml(time)}</span>` : ''}</td>
      ${prices.map(p => `<td class="${p === null ? 'na' : ''}">${money(p)}</td>`).join('')}
    </tr>`;
  }).join('');
  const lowest = Math.min(...items.flatMap(it => it.slice(2)).filter(p => p !== null));
  const n = cardIndex++;
  return `<article class="price-card${block.wide ? ' wide' : ''}${q || !n ? ' open' : ''}" style="--i:${Math.min(n, 12)}">
    <h3 class="card-head" tabindex="0" role="button">${showTab ? `<small>${escapeHtml(tabLabel)}</small>` : ''}${highlight(block.title, titleMatch ? q : '')}<span class="card-sum">${items.length} service${items.length > 1 ? 's' : ''} · from ₹${money(lowest)}</span></h3>
    ${block.note ? `<p class="price-note">${escapeHtml(block.note)}</p>` : ''}
    <table class="price-table"><thead><tr><th>Service</th>${head}</tr></thead><tbody>${rows}</tbody></table>
  </article>`;
}

function renderPrices() {
  const q = searchEl.value.trim().toLowerCase();
  // When searching, look through Ladies, Men and Nail Bar together
  const tabKeys = q ? Object.keys(PRICE_LIST) : [activeTab];
  let html = '', normal = '';
  cardIndex = 0;
  const flush = () => { if (normal) { html += `<div class="price-cols">${normal}</div>`; normal = ''; } };
  tabKeys.forEach(key => {
    const tab = PRICE_LIST[key];
    tab.blocks.forEach(block => {
      const card = cardHtml(block, tab.label, q, !!q);
      if (!card) return;
      if (block.wide) { flush(); html += card; } else { normal += card; }
    });
  });
  flush();
  listEl.innerHTML = html || `<p class="empty">No service found for “${escapeHtml(searchEl.value)}”. Call us on 9096109116 and we'll help.</p>`;
  tabs.forEach(t => t.classList.toggle('active', !q && t.dataset.tab === activeTab));
}

function setTab(key) {
  activeTab = key;
  searchEl.value = '';
  tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.tab === key));
  renderPrices();
}

tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)));
searchEl.addEventListener('input', renderPrices);

// Links with data-tab (service cards, "Full nail menu") open that tab
document.querySelectorAll('a[data-tab]').forEach(a => a.addEventListener('click', () => setTab(a.dataset.tab)));

// Tap a price row → open the appointment form
function bookRow(row) {
  openBooking(row.dataset.service, row);
}
// On phones, tap a block heading to open / close it
listEl.addEventListener('click', e => {
  const head = e.target.closest('.card-head');
  if (head) { head.parentElement.classList.toggle('open'); return; }
  const row = e.target.closest('tr[data-service]');
  if (row) bookRow(row);
});
listEl.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  if (e.target.closest('.card-head, tr[data-service]')) e.preventDefault();
  const head = e.target.closest('.card-head');
  if (head) { head.parentElement.classList.toggle('open'); return; }
  const row = e.target.closest('tr[data-service]');
  if (row) bookRow(row);
});

renderPrices();

// ===== Animations =====
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mark what should slide in as you scroll: [selector, extra style, delay between items]
const revealGroups = [
  ['.title', '', 0],
  ['.service', '', 0.08],
  ['.why-item', '', 0.12],
  ['.price-tools', '', 0],
  ['.nailbar-photos', 'from-left', 0],
  ['.nailbar-text', 'from-right', 0],
  ['.nail-prices li', 'from-right', 0.08],
  ['.gallery img', 'zoom', 0.08],
  ['.visit-card', 'from-left', 0],
  ['.map', 'from-right', 0],
  ['.cta-inner', 'zoom', 0],
  ['.footer-grid > div', '', 0.1]
];
const revealEls = [];
revealGroups.forEach(([sel, extra, step]) => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    if (extra) el.classList.add(extra);
    // stagger items in the same row (resets every 4 items)
    if (step) el.style.setProperty('--d', ((i % 4) * step).toFixed(2) + 's');
    revealEls.push(el);
  });
});
if ('IntersectionObserver' in window && !calm) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Scroll effects: progress bar, slim header, drifting nail photos
const progress = document.getElementById('progress');
const header = document.querySelector('.header');
const np1 = document.querySelector('.np1');
const np2 = document.querySelector('.np2');
const nailSection = document.getElementById('nail-bar');
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  header.classList.toggle('scrolled', y > 40);
  if (!calm && np1 && np2) {
    const r = nailSection.getBoundingClientRect();
    if (r.bottom > 0 && r.top < window.innerHeight) {
      const t = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight; // -1 … 1
      np1.style.transform = `translateY(${t * 40}px)`;
      np2.style.transform = `translateY(${t * -50}px)`;
    }
  }
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

