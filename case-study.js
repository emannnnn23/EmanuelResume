import { projects } from '/projects-data.js';

// ============================================================
//  DARK MODE (sync with portfolio preference)
// ============================================================
const body = document.body;
const darkToggle = document.getElementById('dark-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  body.classList.add('dark');
}
darkToggle?.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// ============================================================
//  LOAD PROJECT
// ============================================================
const params = new URLSearchParams(location.search);
const projectId = params.get('id');
const project = projects.find(p => p.id === projectId);

const root = document.getElementById('case-study-root');
const notFound = document.getElementById('not-found');

if (!project) {
  notFound.classList.remove('hidden');
} else {
  root.classList.remove('hidden');
  document.title = `${project.title} | Emanuel Ymbong`;

  // ── Hero image ──────────────────────────────────────────
  const heroImg = document.getElementById('cs-hero-img');
  heroImg.src = project.thumbnail;
  heroImg.alt = project.title;

  // ── Overview table ───────────────────────────────────────
  const overviewMap = {
    'Project Type': project.overview.type,
    'Primary Users': project.overview.users,
    'Workflow': project.overview.workflow,
    'Platforms': project.overview.platforms,
    'Database': project.overview.database,
  };

  const overviewTable = document.getElementById('cs-overview-table');
  overviewTable.innerHTML = Object.entries(overviewMap).map(([key, val]) => `
    <div class="overview-row">
      <span class="overview-key">${key}</span>
      <span style="font-size:0.78rem;color:inherit;">${val}</span>
    </div>
  `).join('');

  // ── Tech stack ───────────────────────────────────────────
  const techStack = document.getElementById('cs-tech-stack');
  techStack.innerHTML = project.techStack.map(t => `<span class="tag text-xs">${t}</span>`).join('');

  // ── Key features ─────────────────────────────────────────
  const keyFeatures = document.getElementById('cs-key-features');
  keyFeatures.innerHTML = project.keyFeatures.map(f => `
    <li class="flex items-start gap-2 text-sm">
      <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-muted text-xs leading-relaxed">${f}</span>
    </li>
  `).join('');

  // ── Main content ─────────────────────────────────────────
  const main = document.getElementById('cs-main');

  // Title + tagline
  main.innerHTML = `
    <div>
      <h1 class="text-3xl font-bold mb-2" style="font-size:1.75rem;font-weight:700;">${project.title}</h1>
      <p class="text-muted text-sm leading-relaxed">${project.tagline}</p>
    </div>
  `;

  // Icon lookup table
  const iconMap = {
    filter: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    sort: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12',
    grid: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    cart: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    check: 'M5 13l4 4L19 7',
    bar: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    line: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
    alert: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    chat: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    story: 'M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
    bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    default: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  };

  // Sections
  project.sections.forEach(section => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'space-y-4';

    let innerHtml = `<h2 style="font-size:1.125rem;font-weight:600;margin-bottom:8px;">${section.title}</h2>`;

    if (section.description) {
      innerHtml += `<p class="text-muted text-sm leading-relaxed">${section.description}</p>`;
    }

    // Flow steps
    if (section.flow) {
      const flowItems = section.flow.map((step, i) =>
        i < section.flow.length - 1
          ? `<span class="flow-step">${step}</span><span class="flow-arrow">&#8594;</span>`
          : `<span class="flow-step">${step}</span>`
      ).join('');
      innerHtml += `
        <div>
          <p class="section-label mb-2">Sequential Processing Flow</p>
          <div class="flow-steps">${flowItems}</div>
        </div>
      `;
    }

    // Section image
    if (section.image) {
      innerHtml += `
        <div class="cs-section-image">
          <img src="${section.image}" alt="${section.title}" class="w-full" loading="lazy" />
        </div>
      `;
    }

    // Feature cards
    if (section.features && section.features.length) {
      const featureCards = section.features.map(f => {
        const d = iconMap[f.icon] || iconMap.default;
        return `
          <div class="feature-item">
            <div class="feature-icon-wrap">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${d}"/>
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium" style="margin-bottom:2px;">${f.label}</p>
              <p class="text-xs text-muted leading-relaxed">${f.detail}</p>
            </div>
          </div>
        `;
      }).join('');
      innerHtml += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${featureCards}</div>`;
    }

    // Bullet points
    if (section.bullets && section.bullets.length) {
      const bullets = section.bullets.map(b => `
        <li class="flex items-start gap-2 text-sm text-muted">
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" style="min-width:6px;min-height:6px;border-radius:50%;background:#94a3b8;margin-top:7px;"></span>
          ${b}
        </li>
      `).join('');
      innerHtml += `<ul class="space-y-2 pl-1" style="list-style:none;padding-left:0;">${bullets}</ul>`;
    }

    sectionEl.innerHTML = innerHtml;

    const divider = document.createElement('hr');
    divider.className = 'cs-divider';
    main.appendChild(divider);
    main.appendChild(sectionEl);
  });

  // ── "Visit Demo" button in navbar ─────────────────────────
  if (project.demoUrl) {
    const navBar = document.querySelector('.navbar .max-w-5xl');
    if (navBar) {
      const demoBtn = document.createElement('a');
      demoBtn.href = project.demoUrl;
      demoBtn.target = '_blank';
      demoBtn.rel = 'noopener noreferrer';
      demoBtn.className = 'btn-primary text-xs py-2 px-4';
      demoBtn.innerHTML = `Visit Demo <svg class="w-3 h-3 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;
      navBar.appendChild(demoBtn);
    }
  }
}
