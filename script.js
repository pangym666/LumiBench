const severityData = {
  dark: {
    name: 'Dark',
    desc: 'Global illumination is progressively reduced while illumination geometry and color remain fixed.',
    levels: [
      ['L1', 'Ambient 0.025 · Key/Fill/Back 0.20 / 0.090 / 0.040'],
      ['L2', 'Ambient 0.010 · Key/Fill/Back 0.10 / 0.045 / 0.020'],
      ['L3', 'Ambient 0.003 · Key/Fill/Back 0.045 / 0.018 / 0.008']
    ],
    rates: [53.2, 46.6, 41.9, 38.3]
  },
  cold: {
    name: 'Cold',
    desc: 'Blue/cyan chromaticity is strengthened while luminance is normalized so chromaticity remains the dominant change.',
    levels: [
      ['L1', 'RGB ratio [0.55, 0.75, 1.0]'],
      ['L2', 'RGB ratio [0.28, 0.58, 1.0]'],
      ['L3', 'RGB ratio [0.10, 0.38, 1.0]']
    ],
    rates: [53.2, 49.5, 45.6, 44.4]
  },
  spot: {
    name: 'Spot',
    desc: 'Localized spotlight intensity increases while position, orientation, color, cone angles, and background illumination are fixed.',
    levels: [
      ['L1', 'Spot intensity 5.0'],
      ['L2', 'Spot intensity 8.0'],
      ['L3', 'Spot intensity 11.0']
    ],
    rates: [53.2, 35.6, 34.8, 34.2]
  },
  strobe: {
    name: 'Strobe',
    desc: 'A square-wave schedule jointly increases switching frequency and dark-phase exposure; the two temporal factors are not interpreted in isolation.',
    levels: [
      ['L1', '1 Hz · bright-phase duty cycle 0.65'],
      ['L2', '2 Hz · bright-phase duty cycle 0.50'],
      ['L3', '4 Hz · bright-phase duty cycle 0.35']
    ],
    rates: [53.2, 44.1, 43.5, 41.1]
  }
};

function renderSeverity(key) {
  const item = severityData[key];
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.severity === key));
  document.getElementById('severity-chart-name').textContent = item.name;
  document.getElementById('severity-description').innerHTML = `<h3>${item.name}</h3><p>${item.desc}</p>`;
  document.getElementById('severity-levels').innerHTML = item.levels.map(([l,v]) => `<div class="severity-level"><strong>${l}</strong><span>${v}</span></div>`).join('');
  const max = 60;
  const labels = ['L0', 'L1', 'L2', 'L3'];
  document.getElementById('mini-chart').innerHTML = item.rates.map((v, i) => {
    const h = Math.max(4, (v / max) * 100);
    return `<div class="bar-wrap" style="--h:${h}%"><span class="value">${v.toFixed(1)}</span><div class="bar" style="height:${h}%"></div><span class="label">${labels[i]}</span></div>`;
  }).join('');
}

document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => renderSeverity(btn.dataset.severity)));
renderSeverity('dark');

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const dialog = document.getElementById('lightbox');
const dialogImage = document.getElementById('lightbox-image');
document.querySelectorAll('[data-lightbox]').forEach(btn => btn.addEventListener('click', () => {
  dialogImage.src = btn.dataset.lightbox;
  dialog.showModal();
}));
document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

document.getElementById('copy-title').addEventListener('click', async e => {
  const title = document.getElementById('citation-title').textContent.trim();
  try {
    await navigator.clipboard.writeText(title);
    const old = e.currentTarget.textContent;
    e.currentTarget.textContent = 'Copied';
    setTimeout(() => e.currentTarget.textContent = old, 1200);
  } catch (_) {
    e.currentTarget.textContent = 'Select & copy';
  }
});
