// Only replace the inside of a card; its original content keeps the same layout footprint.
const panels = document.querySelectorAll('[data-mini-playground]');
let modulePromise;
const loadViewer = () => modulePromise ||= import('./mini-model-scene.js');

panels.forEach((panel) => {
  const card = panel.closest('.publication-entry');
  const trigger = card.querySelector('[data-paper-play]');
  const back = panel.querySelector('[data-paper-back]');
  const paper = [...card.children].filter((child) => child !== panel);
  const wireframe = panel.querySelector('[data-mini-wireframe]');
  const effect = panel.querySelector('[data-mini-effect]');
  const reset = panel.querySelector('.mini-reset');
  let viewer, pending;
  function exit() {
    viewer?.setActive(false);
    panel.hidden = true;
    card.classList.remove('is-playing');
    paper.forEach((element) => { element.inert = false; });
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus({ preventScroll: true });
  }
  trigger.hidden = false;
  trigger.addEventListener('click', async () => {
    panel.hidden = false;
    card.classList.add('is-playing');
    paper.forEach((element) => { element.inert = true; });
    trigger.setAttribute('aria-expanded', 'true');
    back.focus({ preventScroll: true });
    try {
      pending ||= loadViewer().then(({ createMiniViewer }) => createMiniViewer(panel));
      viewer = await pending;
      viewer.setActive(!panel.hidden);
      viewer.setEffect(Number(effect.value));
    } catch (_) {
      const status = panel.querySelector('.mini-model-status');
      status.hidden = false;
      status.textContent = '3D could not load in this browser. Select Paper to return.';
    }
  });
  back.addEventListener('click', exit);
  panel.addEventListener('keydown', (event) => { if(event.key === 'Escape') {event.preventDefault();exit();} });
  wireframe.addEventListener('change', () => viewer?.setWireframe(wireframe.checked));
  effect.addEventListener('input', () => viewer?.setEffect(Number(effect.value)));
  reset.addEventListener('click', () => {
    wireframe.checked = false;
    effect.value = panel.dataset.paper === 'lin2026lowpowar' ? '75' : '0';
    viewer?.setWireframe(false); viewer?.setEffect(Number(effect.value)); viewer?.reset();
  });
});

document.querySelectorAll('[data-mini-portrait]').forEach((panel) => {
  const profile = panel.parentElement;
  const photo = profile.querySelector('figure');
  const toggle = profile.querySelector('[data-mini-portrait-toggle]');
  let viewer, pending;
  toggle.hidden = false;
  toggle.addEventListener('click', async () => {
    const active = panel.hidden;
    panel.hidden = !active; photo.hidden = active;
    toggle.textContent = active ? 'Switch to photo' : 'Switch to 3D';
    toggle.setAttribute('aria-pressed', String(active));
    if (!active) { viewer?.setActive(false); return; }
    try {
      pending ||= loadViewer().then(({ createMiniViewer }) => createMiniViewer(panel, true));
      viewer = await pending; viewer.reset(true); viewer.setActive(!panel.hidden);
    } catch (_) {
      panel.hidden = true; photo.hidden = false;
      toggle.textContent = '3D unavailable';toggle.disabled = true;toggle.setAttribute('aria-pressed','false');
    }
  });
  panel.querySelector('.mini-reset').addEventListener('click', () => viewer?.reset());
});
