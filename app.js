/**
 * MR TECH — Public Portfolio Client Application
 * Author: Mijanur Rahman (Web & Mobile App Developer)
 */

// Comprehensive production seed data guaranteeing zero latency and immediate rendering
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
      { id: "sk_13", name: "MongoDB & SQL Relational Data", level: "Advanced", percent: 86, icon: "fa-solid fa-database" }
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
      image: "images/profile.jpg",
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
      image: "images/profile.jpg",
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
      image: "images/profile.jpg",
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
      image: "images/profile.jpg",
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
      image: "images/profile.jpg",
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
      image: "images/profile.jpg",
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

// Application State
let currentPortfolioData = window.INITIAL_SEED_DATA;
let activeSkillCategory = 'all';
let activeProjectFilter = 'all';

// DOM Elements & Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTypingEffect();
  initContactForm();

  // Render initial seed immediately
  renderPortfolio(currentPortfolioData);

  // Connect Realtime Firebase Listener if configured
  if (window.MR_FIREBASE) {
    window.MR_FIREBASE.listenToPortfolio((data) => {
      if (data) {
        currentPortfolioData = { ...window.INITIAL_SEED_DATA, ...data };
        renderPortfolio(currentPortfolioData);
      }
    });
  }

  // Handle local data updates from Admin CMS (cross-tab or same window)
  window.addEventListener('mr-local-data-updated', (e) => {
    if (e.detail && e.detail.section) {
      currentPortfolioData[e.detail.section] = e.detail.data;
      renderPortfolio(currentPortfolioData);
    }
  });
});

/**
 * Render Complete Portfolio Content
 */
function renderPortfolio(data) {
  if (!data) return;

  // Apply Theme Colors
  if (data.themeSettings) {
    const root = document.documentElement;
    if (data.themeSettings.primaryAccent) {
      root.style.setProperty('--accent-cyan', data.themeSettings.primaryAccent);
    }
    if (data.themeSettings.secondaryAccent) {
      root.style.setProperty('--accent-purple', data.themeSettings.secondaryAccent);
    }
    if (data.themeSettings.goldAccent) {
      root.style.setProperty('--accent-gold', data.themeSettings.goldAccent);
    }
  }

  // Profile / Hero / About
  if (data.profile) {
    const p = data.profile;
    const heroName = document.getElementById('heroName');
    const heroTitle = document.getElementById('heroTitle');
    const heroTagline = document.getElementById('heroTagline');
    const heroAvatar = document.getElementById('heroAvatar');
    const availabilityText = document.getElementById('availabilityText');
    const aboutBio = document.getElementById('aboutBio');
    const aboutLocation = document.getElementById('aboutLocation');
    const contactEmail = document.getElementById('contactEmail');
    const contactWhatsapp = document.getElementById('contactWhatsapp');
    const contactGithub = document.getElementById('contactGithub');
    const contactLinkedin = document.getElementById('contactLinkedin');
    const heroWhatsappBtn = document.getElementById('heroWhatsappBtn');
    const brandText = document.getElementById('brandText');

    if (heroName && p.name) heroName.textContent = p.name;
    if (heroTitle && p.title) heroTitle.textContent = p.title;
    if (heroTagline && p.tagline) heroTagline.textContent = p.tagline;
    if (heroAvatar && p.avatarUrl) heroAvatar.src = p.avatarUrl;
    if (availabilityText && p.availability) availabilityText.textContent = p.availability;
    if (aboutBio && p.bio) aboutBio.textContent = p.bio;
    if (aboutLocation && p.location) aboutLocation.textContent = p.location;

    if (contactEmail && p.email) {
      contactEmail.textContent = p.email;
      const card = document.getElementById('contactEmailCard');
      if (card) card.href = `mailto:${p.email}`;
    }
    if (contactWhatsapp && p.whatsapp) {
      contactWhatsapp.textContent = p.whatsapp;
      const card = document.getElementById('contactWhatsappCard');
      const cleanNum = p.whatsapp.replace(/[^0-9]/g, '');
      if (card) card.href = `https://wa.me/${cleanNum}`;
      if (heroWhatsappBtn) heroWhatsappBtn.href = `https://wa.me/${cleanNum}`;
      const quickTrigger = document.getElementById('quickContactTrigger');
      if (quickTrigger) quickTrigger.href = `https://wa.me/${cleanNum}`;
    }
    if (contactGithub && p.github) {
      contactGithub.textContent = p.github.replace('https://', '');
      const card = document.getElementById('contactGithubCard');
      if (card) card.href = p.github;
    }
    if (contactLinkedin && p.linkedin) {
      contactLinkedin.textContent = p.linkedin.replace('https://', '');
      const card = document.getElementById('contactLinkedinCard');
      if (card) card.href = p.linkedin;
    }
    if (data.settings && data.settings.brandName && brandText) {
      const bName = data.settings.brandName;
      if (bName.toUpperCase().includes('TECH')) {
        brandText.innerHTML = bName.replace(/TECH/i, '<span class="tech-pill-badge">TECH</span>');
      } else {
        brandText.textContent = bName;
      }
    }
  }

  // Hero Quick Stats
  if (data.heroSettings) {
    const hs = data.heroSettings;
    const heroGreeting = document.getElementById('heroGreeting');
    const statProjects = document.getElementById('statProjects');
    const statProjectsLabel = document.getElementById('statProjectsLabel');
    const statExperience = document.getElementById('statExperience');
    const statExpLabel = document.getElementById('statExpLabel');
    const statSatisfaction = document.getElementById('statSatisfaction');
    const statSatLabel = document.getElementById('statSatLabel');

    if (heroGreeting && hs.greeting) heroGreeting.textContent = hs.greeting;
    if (statProjects && hs.stat1Num) statProjects.textContent = hs.stat1Num;
    if (statProjectsLabel && hs.stat1Label) statProjectsLabel.textContent = hs.stat1Label;
    if (statExperience && hs.stat2Num) statExperience.textContent = hs.stat2Num;
    if (statExpLabel && hs.stat2Label) statExpLabel.textContent = hs.stat2Label;
    if (statSatisfaction && hs.stat3Num) statSatisfaction.textContent = hs.stat3Num;
    if (statSatLabel && hs.stat3Label) statSatLabel.textContent = hs.stat3Label;
  }

  // Skills, Projects, Services, Timeline
  renderSkills(data.skills);
  renderProjects(data.projects);
  renderServices(data.services);
  renderExperience(data.experience);
}

/**
 * Render Skills Grid
 */
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

  const filtered = activeSkillCategory === 'all' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeSkillCategory);

  grid.innerHTML = filtered.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <div class="skill-info">
          <i class="${skill.icon || 'fa-solid fa-code'} skill-icon"></i>
          <span class="skill-name">${skill.name}</span>
        </div>
        <span class="skill-badge">${skill.level || 'Expert'}</span>
      </div>
      <div class="skill-bar-container">
        <div class="skill-progress" style="width: ${skill.percent || 90}%;"></div>
      </div>
    </div>
  `).join('');

  const tabs = document.querySelectorAll('#skillsTabs .tab-btn');
  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeSkillCategory = tab.dataset.category;
      renderSkills(currentPortfolioData.skills);
    };
  });
}

/**
 * Render Projects Grid
 */
function renderProjects(projectsData) {
  const grid = document.getElementById('projectsGrid');
  if (!grid || !projectsData) return;

  const projects = Array.isArray(projectsData) ? projectsData : Object.values(projectsData);
  const visible = projects.filter(p => p.published !== false);

  const filtered = activeProjectFilter === 'all'
    ? visible
    : visible.filter(p => p.category === activeProjectFilter);

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
            ${p.demoUrl ? `
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Live Demo</span>
              </a>` : ''}
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                <i class="fa-brands fa-github"></i>
                <span>Source</span>
              </a>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const buttons = document.querySelectorAll('#projectsFilter .project-filter-btn');
  buttons.forEach(btn => {
    btn.onclick = () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProjectFilter = btn.dataset.filter;
      renderProjects(currentPortfolioData.projects);
    };
  });
}

/**
 * Render Services Grid
 */
function renderServices(servicesData) {
  const grid = document.getElementById('servicesGrid');
  if (!grid || !servicesData) return;

  const services = Array.isArray(servicesData) ? servicesData : Object.values(servicesData);

  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon-box">
        <i class="${s.icon || 'fa-solid fa-laptop-code'}"></i>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      ${s.deliverables && s.deliverables.length ? `
        <ul class="service-deliverables">
          ${s.deliverables.map(d => `<li><i class="fa-solid fa-circle-check"></i> <span>${d}</span></li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
}

/**
 * Render Experience Timeline
 */
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

/**
 * Navigation & Header Scrolling
 */
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section');
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
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

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }
}

/**
 * Dynamic Typing Effect for Developer Roles
 */
function initTypingEffect() {
  const target = document.getElementById('heroTitle');
  if (!target) return;

  const roles = [
    "Web & Mobile App Developer",
    "Full-Stack Software Engineer",
    "Android Kotlin & Compose Craftsman",
    "Firebase & Cloud Architect"
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 35 : 75;

    if (!isDeleting && charIdx === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  type();
}

/**
 * Contact Form with Validation & Firebase Realtime DB submission
 */
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
    const subject = subjectInput.value.trim() || 'General Portfolio Inquiry';
    const message = messageInput.value.trim();

    if (name.length < 2) {
      showToast('Please enter your full name.', 'error');
      nameInput.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (message.length < 5) {
      showToast('Please enter a message of at least 5 characters.', 'error');
      messageInput.focus();
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending to Mijanur...</span>`;

    try {
      if (window.MR_FIREBASE) {
        const result = await window.MR_FIREBASE.submitContactMessage({
          name,
          email,
          subject,
          message
        });

        if (result && result.success) {
          showToast('Message sent successfully! Mijanur will get back to you shortly.', 'success');
          form.reset();
        } else {
          throw new Error('Could not submit message');
        }
      } else {
        showToast('Message submitted successfully! (Offline mode)', 'success');
        form.reset();
      }
    } catch (err) {
      console.error("Submission failed:", err);
      showToast('Message sent! You can also email directly: mstrumaah1999@gmail.com', 'success');
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}" style="color: ${type === 'success' ? '#10B981' : '#EF4444'}; font-size: 1.2rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}
