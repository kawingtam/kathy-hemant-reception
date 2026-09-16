/* Add figurines at the data-portrait paths in index.html. Initials remain when absent. */
document.querySelectorAll('[data-portrait]').forEach((slot) => {
  const portrait = new Image();
  portrait.alt = ''; // The adjoining caption names the person.
  portrait.onload = () => slot.replaceChildren(portrait);
  portrait.src = slot.dataset.portrait;
});

/* One responsive, continuous SVG flight path, measured in page coordinates.
   Scroll progress drives actual distance along the curve, including its loops. */
(() => {
  const main = document.querySelector('main');
  const svg = document.querySelector('#flight-svg');
  const path = document.querySelector('#flight-path');
  const plane = document.querySelector('#paper-plane');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let length = 0;
  let scheduled = false;
  const clamp = (n, low, high) => Math.min(high, Math.max(low, n));
  function drawPath() {
    const width = main.clientWidth;
    const height = main.scrollHeight;
    const top = main.getBoundingClientRect().top + window.scrollY;
    const at = (selector, fraction = 0) => {
      const el = document.querySelector(selector);
      return el.getBoundingClientRect().top + window.scrollY - top + el.offsetHeight * fraction;
    };
    const edge = width < 600 ? 14 : width * .075;
    const left = edge;
    const right = width - edge;
    const start = at('.hero', .77);
    const story = at('#story', .52);
    const bridge = at("#families") - 35;
    const family = at('#families', .55);
    const reception = at('#celebration', .52);
    const end = at('.closing', .87);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    path.setAttribute('d', `M ${width*.2} ${start}
      C ${left} ${start+20}, ${left} ${story-90}, ${width*.2} ${story}
      C ${width*.6} ${story+90}, ${right} ${bridge-170}, ${width*.7} ${bridge-100}
      C ${width*.36} ${bridge-10}, ${width*.24} ${bridge-190}, ${width*.52} ${bridge-165}
      C ${width*.85} ${bridge-140}, ${width*.8} ${bridge-10}, ${width*.48} ${bridge+20}
      C ${left} ${bridge+100}, ${right} ${family-65}, ${width*.75} ${family+85}
      C ${width*.45} ${family+180}, ${left} ${reception-200}, ${left} ${reception-50}
      C ${left} ${reception+80}, ${width*.23} ${reception+70}, ${width*.15} ${reception+145}
      C ${left} ${reception+210}, ${right} ${end-210}, ${right} ${end-85}
      C ${right} ${end+30}, ${width*.65} ${end+30}, ${width*.5} ${end}`);
    length = path.getTotalLength();
    updatePlane();
  }
  function updatePlane() {
    scheduled = false;
    if (!length || reducedMotion.matches) return;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = clamp(window.scrollY / maxScroll, 0, 1);
    const distance = progress * length;
    const point = path.getPointAtLength(distance);
    const before = path.getPointAtLength(Math.max(0, distance - 2));
    const after = path.getPointAtLength(Math.min(length, distance + 2));
    const angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI;
    plane.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`);
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updatePlane); }
  }, { passive: true });
  const observer = new ResizeObserver(drawPath);
  observer.observe(main);
  window.addEventListener('resize', drawPath, { passive: true });
  reducedMotion.addEventListener('change', updatePlane);
  drawPath();
})();

// Hover, keyboard focus, and tap all reveal the same family introduction.
const familyFigures = [...document.querySelectorAll('.family-figure')];
function closeFamilyLabels() {
  familyFigures.forEach((figure) => {
    figure.classList.remove('is-open');
    figure.querySelector('button').setAttribute('aria-expanded', 'false');
  });
}
familyFigures.forEach((figure) => {
  const button = figure.querySelector('button');
  button.addEventListener('click', () => {
    const wasOpen = figure.classList.contains('is-open');
    closeFamilyLabels();
    figure.classList.toggle('is-open', !wasOpen);
    figure.classList.toggle('dismissed', wasOpen);
    button.setAttribute('aria-expanded', String(!wasOpen));
  });
  figure.addEventListener('pointerenter', () => figure.classList.remove('dismissed'));
  button.addEventListener('focus', () => figure.classList.remove('dismissed'));
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.family-figure')) closeFamilyLabels();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeFamilyLabels();
    familyFigures.forEach(figure => figure.classList.add('dismissed'));
  }
});

// Send to the US-Indian tab through the spreadsheet's deployed Apps Script.
(() => {
 const form = document.querySelector('#rsvp-form');
 const status = document.querySelector('#rsvp-status');
 const submit = form.querySelector('[type="submit"]');
 const endpoint = form.dataset.endpoint;
 submit.disabled = false; submit.textContent = 'Send RSVP';
 status.textContent = 'Please let us know any dietary needs so we can plan for you.';
 let pending = null, timer, retryId = null, previousPayload = '';
 const fail = () => { clearTimeout(timer); pending = null; submit.disabled = false; submit.textContent = 'Try again'; status.textContent = 'We couldn’t confirm your RSVP. Your details are still here. Please try again.'; };
 form.addEventListener('submit', async event => {
  event.preventDefault(); if (submit.disabled || !form.reportValidity()) return;
  const data = new FormData(form);
  const fields = {destination:'US-Indian', guestName:String(data.get('name') || '').trim(), plusOneName:String(data.get('plus_one') || '').trim(), dietaryRestrictions:data.getAll('dietary_restrictions').join(', '), dietaryOther:String(data.get('dietary_other') || '').trim()};
  if (!fields.guestName) { status.textContent = 'Please enter your name.'; form.elements.name.focus(); return; }
  const payload = JSON.stringify(fields);
  if (!retryId || payload !== previousPayload) retryId = crypto.randomUUID();
  previousPayload = payload; fields.submissionId = retryId; pending = retryId;
  submit.disabled = true; submit.textContent = 'Sending…'; status.textContent = 'Sending your RSVP…';
  fields.transport = 'fetch';
  const controller = new AbortController(); timer = setTimeout(() => controller.abort(), 30000);
  try {
   const response = await fetch(endpoint, {method:'POST', body:new URLSearchParams(fields), credentials:'omit', signal:controller.signal});
   const result = await response.json();
   if (!response.ok || !result.ok || result.id !== pending) throw new Error('Not confirmed');
   clearTimeout(timer); pending=null; retryId=null; previousPayload='';
   status.textContent='Your RSVP has been received. We can’t wait to celebrate with you!';
   form.reset(); submit.textContent='RSVP sent';
  } catch { fail(); }

 });
})();

// Multiple dietary needs can coexist; “No restrictions” is exclusive.
(() => {
 const form = document.querySelector('#rsvp-form');
 const options = [...form.querySelectorAll('[name="dietary_restrictions"]')];
 const other = document.querySelector('#diet-other');
 const wrap = document.querySelector('#diet-other-wrap');
 const sync = () => {
  const selected = options.some(input => input.value === 'Other' && input.checked);
  wrap.hidden = !selected;
  other.disabled = !selected;
  other.required = selected;
 };
 options.forEach(input => input.addEventListener('change', () => {
  if (input.checked) options.forEach(option => {
   if (input.value === 'No restrictions' && option !== input) option.checked = false;
   if (input.value !== 'No restrictions' && option.value === 'No restrictions') option.checked = false;
  });
  sync();
 }));
 form.addEventListener('reset', () => setTimeout(sync, 0));
 sync();
})();
