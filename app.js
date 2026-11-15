// ===== Prevent auto-scroll on load =====
(function () {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const root = document.documentElement;
  root.style.scrollBehavior = 'auto';
  if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
  }
  window.scrollTo(0, 0);
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    setTimeout(() => { root.style.scrollBehavior = ''; }, 800);
  });
})();

/**
 * MR TECH — Public Portfolio Client Application
 * Includes:
 * 1. Auto-Detect Mobile / Tablet / PC Display Size Adjustment
 * 2. Sequential 4-Step Lead Verification Gate (Country Dropdown -> Phone -> Email -> Topic with Other -> Unlocked SMS)
 * 3. Contact Form Validation
 */

window.INITIAL_SEED_DATA = {
  profile: {
    name: "Mijanur Rahman",
    title: "Web & Mobile App Developer",
    tagline: "Architecting high-velocity Web Applications, Native Android Apps & Resilient Cloud Backends. Transforming complex product requirements into seamless, pixel-perfect digital experiences.",
    bio: "I am a dedicated Full-Stack Web and Native Android Application Developer with over 4 years of proven engineering experience. My technical journey centers on writing clean, scalable, and well-tested code that bridges fluid user experiences with robust cloud backends. From high-throughput real-time gaming engines to scalable enterprise administrative platforms and reactive mobile applications, I craft software that performs under load and scales effortlessly.",
    location: "Dhaka, Bangladesh (Available Worldwide)",
    availability: "Available for Projects & Full-time Roles",
    isAvailable: true,
    email: "mstrumaah1999@gmail.com",
    whatsapp: "+8801700000000",
    phone: "+8801700000000",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatarUrl: "images/profile.jpg",
    yearsExperience: 4,
    completedProjects: 25
  },
  themeSettings: {
    primaryAccent: "#00F0FF",
    secondaryAccent: "#8B5CF6",
    goldAccent: "#F59E0B"
  },
  heroSettings: {
    greeting: "Hello, world! I am",
    stat1Num: "25+",
    stat1Label: "Core Projects",
    stat2Num: "4+",
    stat2Label: "Years Experience",
    stat3Num: "100%",
    stat3Label: "Client Satisfaction"
  },
  skills: {
    frontend: [
      { id: "sk_1", name: "React.js / Next.js (App Router)", level: "Expert", percent: 95, icon: "fa-brands fa-react" },
      { id: "sk_2", name: "JavaScript (ES2024+) / TypeScript", level: "Expert", percent: 94, icon: "fa-brands fa-js" },
      { id: "sk_3", name: "Tailwind CSS & Modern SCSS", level: "Expert", percent: 96, icon: "fa-solid fa-wind" },
      { id: "sk_4", name: "HTML5 Canvas & 2D Graphics", level: "Advanced", percent: 90, icon: "fa-solid fa-palette" }
    ],
    backend: [
      { id: "sk_5", name: "Node.js & Express.js APIs", level: "Expert", percent: 92, icon: "fa-brands fa-node-js" },
      { id: "sk_6", name: "WebSockets & Realtime Feeds", level: "Expert", percent: 93, icon: "fa-solid fa-network-wired" },
      { id: "sk_7", name: "RESTful Architecture & Microservices", level: "Advanced", percent: 90, icon: "fa-solid fa-server" }
    ],
    mobile: [
      { id: "sk_8", name: "Android (Kotlin & Jetpack Compose)", level: "Advanced", percent: 90, icon: "fa-brands fa-android" },
      { id: "sk_9", name: "Progressive Web Apps (PWA & Offline)", level: "Expert", percent: 95, icon: "fa-solid fa-mobile-screen-button" },
      { id: "sk_10", name: "Material Design 3 & Adaptive UI", level: "Expert", percent: 94, icon: "fa-solid fa-layer-group" }
    ],
    database: [
      { id: "sk_11", name: "Firebase Realtime DB & Firestore", level: "Expert", percent: 95, icon: "fa-solid fa-fire" },
      { id: "sk_12", name: "Firebase Auth & Zero-Trust Rules", level: "Expert", percent: 93, icon: "fa-solid fa-shield-halved" },
      { id: "sk_13", name: "MongoDB & SQL Relational Data", level: "Proficient", percent: 86, icon: "fa-solid fa-database" }
    ],
    tools: [
      { id: "sk_14", name: "Git, GitHub & CI/CD Pipelines", level: "Expert", percent: 92, icon: "fa-brands fa-git-alt" },
      { id: "sk_15", name: "Figma to Code & Design Systems", level: "Proficient", percent: 88, icon: "fa-brands fa-figma" }
    ]
  },
  projects: [
    {
      id: "p_mostwin",
      name: "MostWin88",
      category: "Full-Stack Web",
      status: "Live Production",
      statusType: "completed",
      description: "High-throughput sports and interactive gaming platform featuring real-time odds calculation, dynamic betting slips, user wallet balance synchronization, and low-latency WebSocket communication.",
      technologies: ["React", "Node.js", "WebSocket", "Tailwind CSS", "REST APIs"],
      image: "images/project_mostwin.jpg",
      demoUrl: "https://example.com/demo/mostwin88",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_nexqiro",
      name: "NEXQIRO",
      category: "Web Application",
      status: "Production SaaS",
      statusType: "production",
      description: "Modern SaaS digital agency management system featuring automated client onboarding flows, task delegation telemetry, invoice tracking, and secure encrypted messaging channels.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Node.js", "Chart.js"],
      image: "images/project_nexqiro.jpg",
      demoUrl: "https://example.com/demo/nexqiro",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_admin",
      name: "Enterprise Admin & CMS Hub",
      category: "Dashboard & CMS",
      status: "Enterprise",
      statusType: "enterprise",
      description: "Comprehensive administration control center with fine-grained role-based permissions (RBAC), user activity audits, real-time analytics visualizations, and secure database record operations.",
      technologies: ["JavaScript (ES6+)", "Firebase Realtime DB", "Firebase Auth", "HTML5/CSS3"],
      image: "images/project_admin.jpg",
      demoUrl: "https://example.com/demo/admin-panel",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_aviator",
      name: "Aviator Crash Game Engine",
      category: "Game Engine & Logic",
      status: "Interactive Demo",
      statusType: "demo",
      description: "Real-time multiplier crash game engine built with HTML5 Canvas, responsive curve trajectories, provably fair algorithms, high-precision timer loops, and dynamic bet cash-out logic.",
      technologies: ["JavaScript", "HTML5 Canvas", "Audio API", "CSS Animations"],
      image: "images/project_aviator.jpg",
      demoUrl: "https://example.com/demo/aviator",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_myhour",
      name: "MYHOUR — Productivity App",
      category: "Mobile & Web App",
      status: "Active App",
      statusType: "active",
      description: "Native productivity and time-logging application built for software engineers and remote freelancers. Features Pomodoro tracking, client billing calculations, and cloud synchronization.",
      technologies: ["Kotlin / Compose", "Android", "Firebase RTDB", "Coroutines"],
      image: "images/project_myhour.jpg",
      demoUrl: "https://example.com/demo/myhour",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_ludo",
      name: "Ludo & Carrom Arena",
      category: "Game Engine & Logic",
      status: "Interactive Game",
      statusType: "completed",
      description: "Classic tabletop games engineered with custom tactile 2D physics, token collision calculations, smooth pawn animations, and turn-based local and remote pass-and-play logic.",
      technologies: ["Canvas API", "Physics Math", "JavaScript", "Touch Gestures"],
      image: "images/project_ludo.jpg",
      demoUrl: "https://example.com/demo/ludo-carrom",
      githubUrl: "https://github.com",
      featured: false,
      published: true
    }
  ],
  services: [
    {
      id: "s_1",
      title: "Custom Website Development",
      icon: "fa-solid fa-globe",
      description: "Bespoke high-performance landing pages and business portals designed for maximum conversion, top Google Lighthouse scores, and effortless responsiveness.",
      deliverables: ["Custom HTML/CSS/JS without bloat", "Mobile & tablet-first layouts", "SEO optimization & Core Web Vitals", "Smooth micro-animations"]
    },
    {
      id: "s_2",
      title: "Web Applications & SaaS",
      icon: "fa-solid fa-laptop-code",
      description: "Modern single-page applications (SPA) built with cutting-edge architectures, state management, and real-time data feeds.",
      deliverables: ["React / Next.js / Vanilla SPA", "Secure authentication flows", "API integration & WebSockets", "Scalable codebases"]
    },
    {
      id: "s_3",
      title: "Custom Dashboards & CMS",
      icon: "fa-solid fa-chart-line",
      description: "Tailor-made control centers that allow you to manage business records, analyze user activity, and control web content without coding.",
      deliverables: ["Role-based access control", "Interactive data visualizations", "Realtime CRUD data editing", "Exportable data reports"]
    },
    {
      id: "s_4",
      title: "Firebase Cloud & Backend",
      icon: "fa-solid fa-fire",
      description: "End-to-end cloud backends leveraging Firebase Realtime Database, Firestore, Auth, and production-tested security rules.",
      deliverables: ["Realtime database architecture", "Zero-trust security rules", "Cloud Storage for files/images", "Offline sync listeners"]
    },
    {
      id: "s_5",
      title: "Native Android & PWA Apps",
      icon: "fa-solid fa-mobile-screen",
      description: "Native Android applications built with modern Kotlin and Jetpack Compose, plus cross-platform Progressive Web Apps (PWA).",
      deliverables: ["Native Android (Kotlin / Compose)", "Material Design 3 interfaces", "Progressive Web App installation", "Hardware sensors & cameras"]
    }
  ],
  experience: [
    {
      id: "e_1",
      period: "2023 - Present",
      role: "Lead Full-Stack Web & Mobile App Developer",
      context: "Independent Contractor & Client Solutions",
      description: "Architecting web platforms, native Android applications, real-time gaming engines, and custom CMS backends for global clients."
    },
    {
      id: "e_2",
      period: "2021 - 2023",
      role: "Senior Frontend & Real-time Web Developer",
      context: "SaaS & Interactive Platforms",
      description: "Developed reactive user interfaces, real-time WebSocket interfaces, Canvas interactive games, and admin dashboards."
    },
    {
      id: "e_3",
      period: "2020 - 2021",
      role: "Full-Stack Web Developer",
      context: "Digital Solutions Agency",
      description: "Built responsive corporate websites, translated Figma prototypes into pixel-perfect code, and integrated forms."
    }
  ]
};

let currentPortfolioData = window.INITIAL_SEED_DATA;
let activeSkillCategory = 'all';
let activeProjectFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initAutoDisplayDetector();
  initNavigation();
  initTypingEffect();
  initContactForm();
  initLiveChatBot();

  renderPortfolio(currentPortfolioData);

  if (window.MR_FIREBASE) {
    window.MR_FIREBASE.listenToPortfolio((data) => {
      if (data) {
        currentPortfolioData = { ...window.INITIAL_SEED_DATA, ...data };
        renderPortfolio(currentPortfolioData);
      }
    });
  }

  window.addEventListener('mr-local-data-updated', (e) => {
    if (e.detail && e.detail.section) {
      currentPortfolioData[e.detail.section] = e.detail.data;
      renderPortfolio(currentPortfolioData);
    }
  });
});

/**
 * Auto-detect Mobile, Tablet, or PC/Desktop screen size and adjust dynamically
 */
function initAutoDisplayDetector() {
  function updateDeviceAttribute() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    let device = 'desktop';
    if (width <= 640) {
      device = 'mobile';
    } else if (width <= 992) {
      device = 'tablet';
    }
    document.documentElement.setAttribute('data-device', device);
  }
  updateDeviceAttribute();
  window.addEventListener('resize', updateDeviceAttribute);
  window.addEventListener('orientationchange', updateDeviceAttribute);
}

function renderPortfolio(data) {
  if (!data) return;

  if (data.themeSettings) {
    const root = document.documentElement;
    if (data.themeSettings.primaryAccent) root.style.setProperty('--accent-cyan', data.themeSettings.primaryAccent);
    if (data.themeSettings.secondaryAccent) root.style.setProperty('--accent-purple', data.themeSettings.secondaryAccent);
    if (data.themeSettings.goldAccent) root.style.setProperty('--accent-gold', data.themeSettings.goldAccent);
  }

  if (data.profile) {
    const p = data.profile;
    const set = (id, text) => { const el = document.getElementById(id); if (el && text) el.textContent = text; };
    set('heroName', p.name);
    set('heroTitle', p.title);
    set('heroTagline', p.tagline);
    set('availabilityText', p.availability);
    set('aboutBio', p.bio);
    set('aboutLocation', p.location);
    set('contactEmail', p.email);
    set('contactWhatsapp', p.whatsapp);
    const heroAvatar = document.getElementById('heroAvatar');
    if (heroAvatar && p.avatarUrl) heroAvatar.src = p.avatarUrl;
    if (p.whatsapp) {
      const cleanNum = p.whatsapp.replace(/[^0-9]/g, '');
      const waCard = document.getElementById('contactWhatsappCard');
      const heroWa = document.getElementById('heroWhatsappBtn');
      if (waCard) waCard.href = `https://wa.me/${cleanNum}`;
      if (heroWa) heroWa.href = `https://wa.me/${cleanNum}`;
    }
  }

  if (data.heroSettings) {
    const hs = data.heroSettings;
    const set = (id, text) => { const el = document.getElementById(id); if (el && text) el.textContent = text; };
    set('heroGreeting', hs.greeting);
    set('statProjects', hs.stat1Num);
    set('statProjectsLabel', hs.stat1Label);
    set('statExperience', hs.stat2Num);
    set('statExpLabel', hs.stat2Label);
    set('statSatisfaction', hs.stat3Num);
    set('statSatLabel', hs.stat3Label);
  }

  renderSkills(data.skills);
  renderProjects(data.projects);
  renderServices(data.services);
  renderExperience(data.experience);
}

function renderSkills(skillsData) {
  const grid = document.getElementById('skillsGrid');
  if (!grid || !skillsData) return;

  let allSkills = [];
  if (Array.isArray(skillsData)) {
    allSkills = skillsData;
  } else {
    Object.keys(skillsData).forEach(cat => {
      if (Array.isArray(skillsData[cat])) {
        skillsData[cat].forEach(s => allSkills.push({ ...s, category: cat }));
      }
    });
  }

  const filtered = activeSkillCategory === 'all' ? allSkills : allSkills.filter(s => s.category === activeSkillCategory);

  grid.innerHTML = filtered.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <div class="skill-info">
          <div class="skill-icon-box">
            <i class="${skill.icon || 'fa-solid fa-code'} skill-icon"></i>
          </div>
          <div class="skill-meta-text">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-cat-label">${skill.category || 'Tech Stack'}</span>
          </div>
        </div>
        <div class="skill-stat-right">
          <span class="skill-percent">${skill.percent || 90}%</span>
          <span class="skill-badge">${skill.level || 'Expert'}</span>
        </div>
      </div>
      <div class="skill-bar-container">
        <div class="skill-progress" style="width: ${skill.percent || 90}%;"></div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('#skillsTabs .tab-btn').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('#skillsTabs .tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSkillCategory = tab.dataset.category;
      renderSkills(currentPortfolioData.skills);
    };
  });
}

function renderProjects(projectsData) {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !projectsData) return;

  const projects = Array.isArray(projectsData) ? projectsData : Object.values(projectsData);
  const visible = projects.filter(p => p.published !== false);
  const filtered = activeProjectFilter === 'all' ? visible : visible.filter(p => p.category === activeProjectFilter);

  grid.innerHTML = filtered.map(p => {
    const statusClass = `status-${p.statusType || 'completed'}`;
    const techs = (p.technologies || []).map(t => `<span class="tech-tag">${t}</span>`).join('');
    return `
      <div class="project-card">
        <div class="project-thumb-wrapper">
          <img src="${p.image || 'images/profile.jpg'}" alt="${p.name} preview" class="project-thumb" loading="lazy">
          <span class="project-status-tag ${statusClass}">${p.status || 'Active'}</span>
        </div>
        <div class="project-body">
          <div class="project-category">${p.category || 'Software'}</div>
          <h3 class="project-title">${p.name}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-techs">${techs}</div>
          <div class="project-links">
            ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i><span>Live Demo</span></a>` : ''}
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i><span>Source</span></a>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('#projectsFilter .project-filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#projectsFilter .project-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProjectFilter = btn.dataset.filter;
      renderProjects(currentPortfolioData.projects);
    };
  });
}

function renderServices(servicesData) {
  const grid = document.getElementById('servicesGrid');
  if (!grid || !servicesData) return;
  const services = Array.isArray(servicesData) ? servicesData : Object.values(servicesData);
  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon-box"><i class="${s.icon || 'fa-solid fa-laptop-code'}"></i></div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      ${s.deliverables && s.deliverables.length ? `<ul class="service-deliverables">${s.deliverables.map(d => `<li><i class="fa-solid fa-circle-check"></i> <span>${d}</span></li>`).join('')}</ul>` : ''}
    </div>
  `).join('');
}

function renderExperience(timelineData) {
  const container = document.getElementById('timelineContainer');
  if (!container || !timelineData) return;
  const items = Array.isArray(timelineData) ? timelineData : Object.values(timelineData);
  container.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${item.period}</span>
        <h3 class="timeline-role">${item.role}</h3>
        <div class="timeline-context">${item.context}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    const sections = document.querySelectorAll('section');
    let currentId = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) currentId = sec.getAttribute('id');
    });
    if (currentId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }
}

function initTypingEffect() {
  const target = document.getElementById('heroTitle');
  if (!target) return;
  const roles = [
    "Web & Mobile App Developer",
    "Full-Stack Software Engineer",
    "Android Kotlin & Compose Craftsman",
    "Firebase & Cloud Architect"
  ];
  let roleIdx = 0, charIdx = 0, isDeleting = false;
  function type() {
    const current = roles[roleIdx];
    target.textContent = isDeleting ? current.substring(0, --charIdx) : current.substring(0, ++charIdx);
    let delay = isDeleting ? 35 : 75;
    if (!isDeleting && charIdx === current.length) { delay = 2000; isDeleting = true; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 350; }
    setTimeout(type, delay);
  }
  type();
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactFormEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('submitMsgBtn');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) { showToast('Please enter your full name.', 'error'); nameInput.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Please enter a valid email address.', 'error'); emailInput.focus(); return; }
    if (subject.length < 2) { showToast('Please enter a subject.', 'error'); subjectInput.focus(); return; }
    if (message.length < 5) { showToast('Please enter a message of at least 5 characters.', 'error'); messageInput.focus(); return; }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending to Mijanur...</span>`;

    try {
      if (window.MR_FIREBASE) {
        const result = await window.MR_FIREBASE.submitContactMessage({ name, email, subject, message });
        if (result && result.success) {
          showToast('Message sent successfully! Mijanur will reply shortly.', 'success');
          form.reset();
        } else {
          throw new Error('Could not submit');
        }
      } else {
        showToast('Message validated and saved!', 'success');
        form.reset();
      }
    } catch (_) {
      showToast('Message sent! You can also email: mstrumaah1999@gmail.com', 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}" style="color: ${type === 'success' ? '#10B981' : '#EF4444'}; font-size: 1.2rem;"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/**
 * =========================================================================
 * SEQUENTIAL 4-STEP LEAD-GATED LIVE CHAT
 * Step 1: Country Name (Dropdown + Other)
 * Step 2: Phone Number (Validated 7-15 digits)
 * Step 3: Email Address (Validated email regex)
 * Step 4: Topic / Subject (Dropdown + Other custom field)
 * Step 5: ONLY AFTER ALL 4 ARE VALIDATED -> Unlock SMS input & Live Chat
 * =========================================================================
 */
function initLiveChatBot() {
  const triggerBtn = document.getElementById('chatTrigger');
  const chatDialog = document.getElementById('chatDialog');
  const closeBtn = document.getElementById('chatCloseBtn');
  const resetBtn = document.getElementById('chatResetBtn');
  const heroChatBtn = document.getElementById('heroLiveChatBtn');

  const leadGate = document.getElementById('chatLeadGate');
  const lockedBar = document.getElementById('chatLockedBar');
  const verifiedBanner = document.getElementById('chatVerifiedBanner');
  const verifiedText = document.getElementById('chatVerifiedText');
  const editLeadBtn = document.getElementById('chatEditLeadBtn');
  const chipsContainer = document.getElementById('chatQuickChips');
  const messagesContainer = document.getElementById('chatMessages');
  const chatInputBar = document.getElementById('chatInputBar');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSendBtn');
  const agentStatus = document.getElementById('chatAgentStatus');

  const stepLabel = document.getElementById('leadStepLabel');
  const stepPercent = document.getElementById('leadStepPercent');
  const progressFill = document.getElementById('leadProgressFill');
  const completedPills = document.getElementById('leadCompletedPills');
  const errorBox = document.getElementById('leadValidationError');
  const backBtn = document.getElementById('leadBackBtn');
  const nextBtn = document.getElementById('leadNextBtn');

  const stepPanels = [
    document.getElementById('leadStep1'),
    document.getElementById('leadStep2'),
    document.getElementById('leadStep3'),
    document.getElementById('leadStep4')
  ];

  const countrySelect = document.getElementById('leadCountry');
  const customCountryWrap = document.getElementById('leadCustomCountryWrap');
  const customCountryInput = document.getElementById('leadCustomCountry');
  const phoneInput = document.getElementById('leadPhone');
  const emailInput = document.getElementById('leadEmail');
  const topicSelect = document.getElementById('leadTopic');
  const otherTopicWrap = document.getElementById('leadOtherTopicWrap');
  const otherTopicInput = document.getElementById('leadOtherTopic');

  if (!triggerBtn || !chatDialog || !leadGate) return;

  let sessionId = localStorage.getItem('MR_CHAT_SESSION_ID');
  if (!sessionId) {
    sessionId = 'chat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    localStorage.setItem('MR_CHAT_SESSION_ID', sessionId);
  }

  let currentStep = 1;
  let leadData = {
    country: '',
    customCountry: '',
    phone: '',
    email: '',
    topic: '',
    otherTopic: '',
    unlocked: false
  };

  try {
    const saved = localStorage.getItem('MR_CHAT_LEAD_V2_' + sessionId);
    if (saved) leadData = { ...leadData, ...JSON.parse(saved) };
  } catch (_) {}

  let chatHistory = [];
  try {
    const savedHistory = localStorage.getItem('MR_CHAT_HISTORY_' + sessionId);
    if (savedHistory) chatHistory = JSON.parse(savedHistory);
  } catch (_) {}

  // Prefill DOM values if saved
  if (leadData.country) countrySelect.value = leadData.country;
  if (leadData.customCountry) customCountryInput.value = leadData.customCountry;
  if (leadData.phone) phoneInput.value = leadData.phone;
  if (leadData.email) emailInput.value = leadData.email;
  if (leadData.topic) topicSelect.value = leadData.topic;
  if (leadData.otherTopic) otherTopicInput.value = leadData.otherTopic;

  countrySelect.addEventListener('change', () => {
    hideError();
    const opt = countrySelect.options[countrySelect.selectedIndex];
    const dialCode = opt ? (opt.dataset.code || '') : '';
    customCountryWrap.style.display = countrySelect.value === 'Other' ? 'flex' : 'none';
    if (countrySelect.value !== 'Other' && dialCode && !phoneInput.value.trim()) {
      phoneInput.value = dialCode + ' ';
    }
  });

  topicSelect.addEventListener('change', () => {
    hideError();
    otherTopicWrap.style.display = topicSelect.value === 'Other' ? 'flex' : 'none';
  });

  function showError(msg) {
    errorBox.textContent = msg;
    errorBox.style.display = 'block';
  }

  function hideError() {
    errorBox.style.display = 'none';
    errorBox.textContent = '';
  }

  function resolvedCountry() {
    return countrySelect.value === 'Other' ? customCountryInput.value.trim() : countrySelect.value;
  }

  function resolvedTopic() {
    return topicSelect.value === 'Other' ? otherTopicInput.value.trim() : topicSelect.value;
  }

  function validateStep(step) {
    if (step === 1) {
      if (!countrySelect.value) {
        showError('Please select your country from the dropdown.');
        countrySelect.focus();
        return false;
      }
      if (countrySelect.value === 'Other' && customCountryInput.value.trim().length < 2) {
        showError('Please enter your country name.');
        customCountryInput.focus();
        return false;
      }
      return true;
    }
    if (step === 2) {
      const val = phoneInput.value.trim();
      const digits = val.replace(/\D/g, '');
      if (!val || digits.length < 7 || digits.length > 15 || !/^[0-9+\-\s()]+$/.test(val)) {
        showError('Please enter a valid phone number (7 to 15 digits).');
        phoneInput.focus();
        return false;
      }
      return true;
    }
    if (step === 3) {
      const val = emailInput.value.trim();
      if (!val || !/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(val)) {
        showError('Please enter a valid email address (e.g. name@example.com).');
        emailInput.focus();
        return false;
      }
      return true;
    }
    if (step === 4) {
      if (!topicSelect.value) {
        showError('Please choose what topic you want to discuss.');
        topicSelect.focus();
        return false;
      }
      if (topicSelect.value === 'Other' && otherTopicInput.value.trim().length < 3) {
        showError('Please specify your topic (at least 3 characters).');
        otherTopicInput.focus();
        return false;
      }
      return true;
    }
    return false;
  }

  function renderLeadStep() {
    hideError();
    const titles = ['Country', 'Phone Number', 'Email Address', 'Topic'];
    stepLabel.textContent = `Step ${currentStep} of 4: ${titles[currentStep - 1]}`;
    const pct = currentStep * 25;
    stepPercent.textContent = `${pct}%`;
    progressFill.style.width = `${pct}%`;

    stepPanels.forEach((panel, idx) => {
      if (panel) panel.style.display = (idx + 1 === currentStep) ? 'flex' : 'none';
    });

    customCountryWrap.style.display = (currentStep === 1 && countrySelect.value === 'Other') ? 'flex' : 'none';
    otherTopicWrap.style.display = (currentStep === 4 && topicSelect.value === 'Other') ? 'flex' : 'none';

    backBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    const nextLabels = [
      'Next: Phone Number',
      'Next: Email Address',
      'Next: Select Topic',
      'Unlock SMS & Live Chat'
    ];
    nextBtn.innerHTML = `<span>${nextLabels[currentStep - 1]}</span> <i class="fa-solid ${currentStep === 4 ? 'fa-check' : 'fa-arrow-right'}"></i>`;

    // Completed summary pills
    const pills = [];
    if (currentStep > 1 && resolvedCountry()) pills.push(`✓ ${resolvedCountry()}`);
    if (currentStep > 2 && phoneInput.value.trim()) pills.push(`✓ ${phoneInput.value.trim()}`);
    if (currentStep > 3 && emailInput.value.trim()) pills.push(`✓ ${emailInput.value.trim()}`);
    completedPills.innerHTML = pills.map(p => `<span class="lead-done-pill">${p}</span>`).join('');
  }

  function unlockSmsChat(saveState = true) {
    leadData = {
      country: countrySelect.value,
      customCountry: customCountryInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      topic: topicSelect.value,
      otherTopic: otherTopicInput.value.trim(),
      unlocked: true
    };
    if (saveState) {
      localStorage.setItem('MR_CHAT_LEAD_V2_' + sessionId, JSON.stringify(leadData));
    }

    leadGate.style.display = 'none';
    lockedBar.style.display = 'none';
    verifiedBanner.style.display = 'flex';
    chipsContainer.style.display = 'flex';
    messagesContainer.style.display = 'flex';
    chatInputBar.style.display = 'flex';
    if (agentStatus) agentStatus.textContent = 'Online • SMS Unlocked';

    verifiedText.textContent = `${resolvedCountry()} • ${leadData.phone} • ${leadData.email} • ${resolvedTopic()}`;

    if (chatHistory.length === 0) {
      renderBubble('customer', `Verified Details:\nCountry: ${resolvedCountry()}\nPhone: ${leadData.phone}\nEmail: ${leadData.email}\nTopic: ${resolvedTopic()}`, new Date().toISOString(), true);
      renderBubble('admin', `Thank you! Your details are verified. You can now write your SMS / message about "${resolvedTopic()}" below.`, new Date().toISOString(), true);
    } else {
      messagesContainer.innerHTML = '';
      chatHistory.forEach(item => renderBubble(item.sender, item.text, item.time, false));
    }

    if (window.MR_FIREBASE) {
      window.MR_FIREBASE.sendChatMessage(sessionId, {
        sender: 'customer',
        senderName: leadData.email,
        text: `[Verified Lead] Country: ${resolvedCountry()} | Phone: ${leadData.phone} | Email: ${leadData.email} | Topic: ${resolvedTopic()}`
      }, {
        customerCountry: resolvedCountry(),
        customerPhone: leadData.phone,
        customerEmail: leadData.email,
        customerTopic: resolvedTopic(),
        status: 'active'
      });
    }

    renderUnlockedChips();
    chatInput.focus();
  }

  function lockSmsChat() {
    leadGate.style.display = 'flex';
    lockedBar.style.display = 'flex';
    verifiedBanner.style.display = 'none';
    chipsContainer.style.display = 'none';
    messagesContainer.style.display = 'none';
    chatInputBar.style.display = 'none';
    if (agentStatus) agentStatus.textContent = 'Online • Verify details to unlock SMS';
    renderLeadStep();
  }

  backBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      renderLeadStep();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (!validateStep(currentStep)) return;
    if (currentStep < 4) {
      currentStep++;
      renderLeadStep();
    } else {
      // Final validation check across ALL 4 fields before unlocking SMS
      if (!validateStep(1)) { currentStep = 1; renderLeadStep(); return; }
      if (!validateStep(2)) { currentStep = 2; renderLeadStep(); return; }
      if (!validateStep(3)) { currentStep = 3; renderLeadStep(); return; }
      if (!validateStep(4)) { currentStep = 4; renderLeadStep(); return; }
      unlockSmsChat(true);
    }
  });

  if (editLeadBtn) {
    editLeadBtn.addEventListener('click', () => {
      leadData.unlocked = false;
      currentStep = 1;
      lockSmsChat();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem('MR_CHAT_LEAD_V2_' + sessionId);
      localStorage.removeItem('MR_CHAT_HISTORY_' + sessionId);
      chatHistory = [];
      messagesContainer.innerHTML = '';
      countrySelect.value = '';
      customCountryInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      topicSelect.value = '';
      otherTopicInput.value = '';
      leadData = { country: '', customCountry: '', phone: '', email: '', topic: '', otherTopic: '', unlocked: false };
      currentStep = 1;
      lockSmsChat();
    });
  }

  function renderUnlockedChips() {
    chipsContainer.innerHTML = '';
    const options = [
      { label: 'Request Quote', val: `Please share an estimated timeline and quote for ${resolvedTopic()}.` },
      {
        label: 'Send via WhatsApp',
        action: () => {
          const cleanNum = (currentPortfolioData.profile?.whatsapp || '+8801700000000').replace(/[^0-9]/g, '');
          const msg = `Hello Mijanur,\nCountry: ${resolvedCountry()}\nPhone: ${leadData.phone}\nEmail: ${leadData.email}\nTopic: ${resolvedTopic()}`;
          window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(msg)}`, '_blank');
        }
      }
    ];
    options.forEach(item => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quick-chip';
      btn.textContent = item.label;
      btn.onclick = () => {
        if (item.action) item.action();
        else sendSmsMessage(item.val);
      };
      chipsContainer.appendChild(btn);
    });
  }

  function sendSmsMessage(overrideText) {
    // Hard guard: prevent sending SMS unless all 4 lead fields are verified
    if (!leadData.unlocked) {
      showToast('Please complete Country, Phone, Email, and Topic first.', 'error');
      return;
    }
    const text = (overrideText || chatInput.value).trim();
    if (!text) {
      showToast('Please write your SMS message before sending.', 'error');
      chatInput.focus();
      return;
    }
    if (!overrideText) chatInput.value = '';

    renderBubble('customer', text, new Date().toISOString(), true);

    if (window.MR_FIREBASE) {
      window.MR_FIREBASE.sendChatMessage(sessionId, {
        sender: 'customer',
        senderName: leadData.email,
        text
      }, {
        customerCountry: resolvedCountry(),
        customerPhone: leadData.phone,
        customerEmail: leadData.email,
        customerTopic: resolvedTopic()
      });
    }
  }

  sendBtn.addEventListener('click', () => sendSmsMessage());
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendSmsMessage();
    }
  });

  function renderBubble(sender, text, isoTime, shouldSave = true) {
    const wrapper = document.createElement('div');
    wrapper.className = `chat-bubble-wrapper ${sender}`;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>');
    const timeEl = document.createElement('div');
    timeEl.className = 'chat-timestamp';
    const timeFormatted = new Date(isoTime || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeEl.textContent = (sender === 'customer' ? 'You' : 'Mijanur Rahman') + ' • ' + timeFormatted;
    wrapper.appendChild(bubble);
    wrapper.appendChild(timeEl);
    messagesContainer.appendChild(wrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    if (shouldSave) {
      chatHistory.push({ sender, text, time: isoTime });
      localStorage.setItem('MR_CHAT_HISTORY_' + sessionId, JSON.stringify(chatHistory));
    }
  }

  // Initialize state on load
  if (leadData.unlocked && leadData.country && leadData.phone && leadData.email && leadData.topic) {
    unlockSmsChat(false);
  } else {
    lockSmsChat();
  }

  // ===== Draggable Live Chat Floating Icon (Move anywhere on display) =====
  let justDragged = false;
  const POS_KEY = 'MR_CHAT_TRIGGER_POS';

  function clampPosition(left, top) {
    const margin = 8;
    const w = triggerBtn.offsetWidth || 58;
    const h = triggerBtn.offsetHeight || 58;
    const maxLeft = Math.max(margin, window.innerWidth - w - margin);
    const maxTop = Math.max(margin, window.innerHeight - h - margin);
    return {
      left: Math.min(Math.max(margin, left), maxLeft),
      top: Math.min(Math.max(margin, top), maxTop)
    };
  }

  function applyTriggerPosition(left, top) {
    const clamped = clampPosition(left, top);
    triggerBtn.style.left = `${clamped.left}px`;
    triggerBtn.style.top = `${clamped.top}px`;
    triggerBtn.style.right = 'auto';
    triggerBtn.style.bottom = 'auto';
    return clamped;
  }

  // Restore saved position if available
  try {
    const savedPos = localStorage.getItem(POS_KEY);
    if (savedPos) {
      const parsed = JSON.parse(savedPos);
      if (typeof parsed.left === 'number' && typeof parsed.top === 'number') {
        applyTriggerPosition(parsed.left, parsed.top);
      }
    }
  } catch (_) {}

  window.addEventListener('resize', () => {
    if (triggerBtn.style.left && triggerBtn.style.top) {
      const clamped = applyTriggerPosition(
        parseFloat(triggerBtn.style.left),
        parseFloat(triggerBtn.style.top)
      );
      try { localStorage.setItem(POS_KEY, JSON.stringify(clamped)); } catch (_) {}
    }
  });

  let dragState = null;

  triggerBtn.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    const rect = triggerBtn.getBoundingClientRect();
    dragState = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      originLeft: rect.left,
      originTop: rect.top,
      moved: false
    };
    try { triggerBtn.setPointerCapture(e.pointerId); } catch (_) {}
  });

  triggerBtn.addEventListener('pointermove', (e) => {
    if (!dragState || e.pointerId !== dragState.pointerId) return;
    const dx = e.clientX - dragState.startX;
    const dy = e.clientY - dragState.startY;
    if (!dragState.moved && Math.hypot(dx, dy) > 5) {
      dragState.moved = true;
      triggerBtn.classList.add('dragging');
    }
    if (dragState.moved) {
      e.preventDefault();
      applyTriggerPosition(dragState.originLeft + dx, dragState.originTop + dy);
    }
  });

  function finishDrag(e) {
    if (!dragState || e.pointerId !== dragState.pointerId) return;
    const wasMoved = dragState.moved;
    try { triggerBtn.releasePointerCapture(e.pointerId); } catch (_) {}
    triggerBtn.classList.remove('dragging');
    if (wasMoved) {
      justDragged = true;
      setTimeout(() => { justDragged = false; }, 60);
      const rect = triggerBtn.getBoundingClientRect();
      const clamped = applyTriggerPosition(rect.left, rect.top);
      try { localStorage.setItem(POS_KEY, JSON.stringify(clamped)); } catch (_) {}
    }
    dragState = null;
  }

  triggerBtn.addEventListener('pointerup', finishDrag);
  triggerBtn.addEventListener('pointercancel', finishDrag);

  const openChat = () => {
    chatDialog.classList.add('open');
    const pulse = triggerBtn.querySelector('.badge-pulse');
    if (pulse) pulse.style.display = 'none';
  };
  const closeChat = () => chatDialog.classList.remove('open');

  triggerBtn.addEventListener('click', (e) => {
    if (justDragged) {
      e.preventDefault();
      return;
    }
    chatDialog.classList.contains('open') ? closeChat() : openChat();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeChat);
  if (heroChatBtn) heroChatBtn.addEventListener('click', openChat);

  if (window.MR_FIREBASE) {
    window.MR_FIREBASE.listenToChatSession(sessionId, (remoteMessages) => {
      if (!remoteMessages || !remoteMessages.length) return;
      remoteMessages.forEach(msg => {
        if (msg.sender === 'admin') {
          const exists = chatHistory.some(h => h.sender === 'admin' && h.text === msg.text);
          if (!exists) {
            renderBubble('admin', msg.text, msg.timestamp || new Date().toISOString(), true);
          }
        }
      });
    });
  }
}
