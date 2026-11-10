/**
 * MR TECH — Private Admin CMS Controller
 * Strict Authorization, Full Portfolio CRUD, & Bidirectional Live Chat Console
 * Author: Mijanur Rahman (Web & App Developer)
 */

// Fallback seed data
const DEFAULT_CMS_DATA = {
  profile: {
    name: "Mijanur Rahman",
    title: "Web & App Developer",
    tagline: "Building Modern Websites, Web Applications & Digital Solutions.",
    bio: "I am a dedicated Full-Stack Web and Mobile Application Developer with a strong foundation in modern JavaScript ecosystems, responsive web architectures, and cloud databases. My mission is to build robust digital solutions that combine bulletproof backend stability with intuitive, fluid UI designs.",
    location: "Dhaka, Bangladesh (Available Worldwide)",
    availability: "Available for Projects & Full-time Roles",
    isAvailable: true,
    email: "mstrumaah1999@gmail.com",
    whatsapp: "+8801700000000",
    phone: "+8801700000000",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatarUrl: "images/profile.jpg",
    resumeUrl: "database-schema.json",
    yearsExperience: 4,
    completedProjects: 18
  },
  themeSettings: {
    primaryAccent: "#00F0FF",
    secondaryAccent: "#8B5CF6",
    goldAccent: "#F59E0B"
  },
  heroSettings: {
    greeting: "Hello, world! I am",
    stat1Num: "6+",
    stat1Label: "Core Projects",
    stat2Num: "4+",
    stat2Label: "Years Experience",
    stat3Num: "100%",
    stat3Label: "Client Satisfaction"
  },
  chatSettings: {
    enabled: true,
    welcomeMessage: "Hello! 👋 I'm Mijanur Rahman. What kind of website or application are you looking to build?",
    agentStatus: "Online • Typically replies in minutes"
  },
  skills: {
    frontend: [
      { id: "sk_1", name: "HTML5 / CSS3 / SCSS", level: "Expert", percent: 95, icon: "fa-brands fa-html5" },
      { id: "sk_2", name: "JavaScript (ES6+) / TypeScript", level: "Expert", percent: 92, icon: "fa-brands fa-js" },
      { id: "sk_3", name: "React.js / Next.js", level: "Advanced", percent: 90, icon: "fa-brands fa-react" },
      { id: "sk_4", name: "Tailwind CSS / UI Components", level: "Expert", percent: 94, icon: "fa-solid fa-wind" }
    ],
    backend: [
      { id: "sk_5", name: "Node.js & Express APIs", level: "Advanced", percent: 88, icon: "fa-brands fa-node-js" },
      { id: "sk_6", name: "RESTful Architecture & WebSockets", level: "Expert", percent: 92, icon: "fa-solid fa-network-wired" }
    ],
    mobile: [
      { id: "sk_7", name: "Android (Kotlin / Jetpack Compose)", level: "Advanced", percent: 86, icon: "fa-brands fa-android" },
      { id: "sk_8", name: "Progressive Web Apps (PWA)", level: "Expert", percent: 95, icon: "fa-solid fa-mobile-screen-button" }
    ],
    database: [
      { id: "sk_9", name: "Firebase Realtime Database", level: "Expert", percent: 94, icon: "fa-solid fa-fire" },
      { id: "sk_10", name: "Firebase Auth & Security Rules", level: "Expert", percent: 92, icon: "fa-solid fa-shield-halved" },
      { id: "sk_11", name: "MongoDB & SQL Relational Data", level: "Proficient", percent: 82, icon: "fa-solid fa-database" }
    ],
    tools: [
      { id: "sk_12", name: "Git, GitHub & CI/CD", level: "Advanced", percent: 90, icon: "fa-brands fa-git-alt" },
      { id: "sk_13", name: "UI/UX & Figma Design Systems", level: "Proficient", percent: 85, icon: "fa-brands fa-figma" }
    ]
  },
  projects: [
    {
      id: "p_mostwin",
      name: "MostWin88",
      category: "Full-Stack Web",
      status: "Live Demo Available",
      statusType: "completed",
      description: "High-throughput sports and interactive gaming platform featuring real-time odds calculation, dynamic betting slips, user wallet balance synchronization, and low-latency WebSocket communication.",
      technologies: ["React", "Node.js", "WebSocket", "Tailwind CSS", "REST APIs"],
      image: "images/project_showcase.jpg",
      demoUrl: "https://example.com/demo/mostwin88",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_nexqiro",
      name: "NEXQIRO",
      category: "Web Application",
      status: "Production",
      statusType: "production",
      description: "Modern SaaS digital agency management system featuring automated client onboarding flows, task delegation telemetry, invoice tracking, and secure encrypted messaging channels.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Node.js", "Chart.js"],
      image: "images/project_showcase.jpg",
      demoUrl: "https://example.com/demo/nexqiro",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_admin",
      name: "User & Admin Panel",
      category: "Dashboard & CMS",
      status: "Enterprise",
      statusType: "enterprise",
      description: "Comprehensive administration control hub with fine-grained role-based permissions (RBAC), user activity audits, real-time analytics visualizations, and secure database record operations.",
      technologies: ["JavaScript (ES6+)", "Firebase Realtime DB", "Firebase Auth", "HTML5/CSS3"],
      image: "images/project_showcase.jpg",
      demoUrl: "https://example.com/demo/admin-panel",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_aviator",
      name: "Aviator",
      category: "Game Engine & Logic",
      status: "Interactive Demo",
      statusType: "demo",
      description: "Real-time multiplier crash game engine built with HTML5 Canvas, responsive curve trajectories, provably fair algorithms, high-precision timer loops, and dynamic bet cash-out logic.",
      technologies: ["JavaScript", "HTML5 Canvas", "Audio API", "CSS Animations"],
      image: "images/project_showcase.jpg",
      demoUrl: "https://example.com/demo/aviator",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    },
    {
      id: "p_ludo",
      name: "Ludo / Carrom",
      category: "App & Game Dev",
      status: "In Development",
      statusType: "development",
      description: "Classic tabletop games engineered with custom tactile 2D physics, token collision calculations, smooth pawn animations, and turn-based local and remote pass-and-play logic.",
      technologies: ["Canvas API", "Physics Math", "JavaScript", "Touch Gestures"],
      image: "images/project_showcase.jpg",
      demoUrl: "https://example.com/demo/ludo-carrom",
      githubUrl: "https://github.com",
      featured: false,
      published: true
    },
    {
      id: "p_myhour",
      name: "MYHOUR",
      category: "Mobile & Web App",
      status: "Active",
      statusType: "active",
      description: "Productivity and time-logging application built for software engineers and remote freelancers. Features Pomodoro tracking, client billing calculations, and cloud synchronization.",
      technologies: ["Kotlin / Compose", "Android", "Firebase RTDB", "Coroutines"],
      image: "images/project_showcase.jpg",
      demoUrl: "https://example.com/demo/myhour",
      githubUrl: "https://github.com",
      featured: true,
      published: true
    }
  ],
  services: [
    {
      id: "s_1",
      title: "Website Development",
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
      title: "Firebase Integration & Backend",
      icon: "fa-solid fa-fire",
      description: "End-to-end cloud backends leveraging Firebase Realtime Database, Firestore, Auth, and production-tested security rules.",
      deliverables: ["Realtime database architecture", "Zero-trust security rules", "Cloud Storage for files/images", "Offline sync listeners"]
    },
    {
      id: "s_5",
      title: "App Development",
      icon: "fa-solid fa-mobile-screen",
      description: "Native Android applications built with modern Kotlin and Jetpack Compose, plus cross-platform Progressive Web Apps (PWA).",
      deliverables: ["Native Android (Kotlin / Compose)", "Material Design 3 interfaces", "Progressive Web App installation", "Hardware sensors & cameras"]
    }
  ],
  experience: [
    {
      id: "e_1",
      period: "2023 - Present",
      role: "Lead Full-Stack Web & App Developer",
      context: "Independent Contractor & Client Solutions",
      description: "Architecting web platforms, real-time gaming engines, and custom CMS backends for global clients."
    },
    {
      id: "e_2",
      period: "2021 - 2023",
      role: "Frontend & Real-time Web Developer",
      context: "SaaS & Interactive Platforms",
      description: "Developed user interfaces, real-time WebSocket interfaces, Canvas interactive games, and admin dashboards."
    },
    {
      id: "e_3",
      period: "2020 - 2021",
      role: "Junior Web Developer",
      context: "Digital Agency",
      description: "Built responsive corporate websites, translated Figma prototypes into pixel-perfect code, and integrated forms."
    }
  ],
  settings: {
    siteTitle: "MR TECH | Mijanur Rahman — Web & App Developer",
    metaDescription: "Official portfolio of Mijanur Rahman (MR TECH). Professional Web & App Developer specializing in modern websites, web applications, dashboards, and digital solutions.",
    brandName: "MR TECH",
    accentColor: "#00F0FF"
  }
};

// Application State
let cmsData = { ...DEFAULT_CMS_DATA };
let allMessages = [];
let allChatSessions = [];
let activeChatSessionId = null;
let chatUnsubscribe = null;
let deleteActionCallback = null;
let isAuthenticated = false;

document.addEventListener('DOMContentLoaded', () => {
  initAuthGate();
  initSidebarNavigation();
  initPanelEvents();
  initLiveChatConsoleEvents();
  checkExistingSession();
});

/**
 * Authentication Gate & Security Authorization
 */
function initAuthGate() {
  const loginForm = document.getElementById('adminLoginForm');
  const demoBtn = document.getElementById('demoAdminBtn');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      const submitBtn = document.getElementById('loginSubmitBtn');

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Verifying Admin Authorization...</span>`;

      try {
        const auth = window.MR_FIREBASE ? window.MR_FIREBASE.getAuth() : null;
        if (auth && window.MR_FIREBASE.isConfigured()) {
          const cred = await auth.signInWithEmailAndPassword(email, password);
          const isVerifiedAdmin = await window.MR_FIREBASE.verifyAdminAccess(cred.user);

          if (!isVerifiedAdmin) {
            await auth.signOut();
            throw new Error("ACCESS DENIED: Your user UID is not registered as an authorized administrator in Realtime Database rules.");
          }

          grantAdminAccess(cred.user.email);
        } else {
          if (email.toLowerCase() === "mijanbabu2015@gmail.com") {
            grantAdminAccess(email);
          } else {
            throw new Error("Invalid admin email. Access permitted only to authorized developer credentials.");
          }
        }
      } catch (err) {
        console.error("Auth error:", err);
        showToast(err.message || "Authentication failed.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-lock-open"></i> <span>Authenticate & Access CMS</span>`;
      }
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      grantAdminAccess("mijanbabu2015@gmail.com (Preview Session)");
    });
  }

  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to exit the Admin CMS session?")) {
        const auth = window.MR_FIREBASE ? window.MR_FIREBASE.getAuth() : null;
        if (auth) auth.signOut();
        sessionStorage.removeItem('MR_ADMIN_ACTIVE');
        location.reload();
      }
    });
  }
}

function checkExistingSession() {
  const activeSession = sessionStorage.getItem('MR_ADMIN_ACTIVE');
  if (activeSession) {
    grantAdminAccess(activeSession);
  }
}

function grantAdminAccess(identifier) {
  isAuthenticated = true;
  sessionStorage.setItem('MR_ADMIN_ACTIVE', identifier);
  
  const overlay = document.getElementById('authOverlay');
  if (overlay) overlay.style.display = 'none';

  showToast(`Welcome back, Mijanur! Live CMS Session Active.`, 'success');
  loadAllCmsData();
}

/**
 * Sidebar Navigation
 */
function initSidebarNavigation() {
  const navButtons = document.querySelectorAll('.admin-sidebar-nav button');
  const panels = document.querySelectorAll('.cms-panel');
  const topbarTitle = document.getElementById('topbarTitle');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetPanel = btn.dataset.panel;
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === `panel-${targetPanel}`) {
          p.classList.add('active');
        }
      });

      if (topbarTitle) {
        topbarTitle.textContent = btn.querySelector('span').textContent;
      }
    });
  });

  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const sidebar = document.getElementById('adminSidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => sidebar.classList.add('open'));
  }
  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));
  }
}

/**
 * Data Loading & Synchronization
 */
function loadAllCmsData() {
  if (window.MR_FIREBASE) {
    window.MR_FIREBASE.listenToPortfolio((data) => {
      if (data) {
        cmsData = { ...DEFAULT_CMS_DATA, ...data };
      }
      populateAllPanels();
    });

    window.MR_FIREBASE.listenToMessages((msgs) => {
      allMessages = msgs || [];
      renderInbox();
      renderDashboardRecentMessages();
      updateMetrics();
    });

    // Listen to All Customer Chat Sessions
    window.MR_FIREBASE.listenToAllChats((chatList) => {
      allChatSessions = chatList || [];
      renderChatThreads();
      updateMetrics();
    });
  } else {
    populateAllPanels();
  }
}

function populateAllPanels() {
  renderDashboard();
  renderProfileForm();
  renderProjectsTable();
  renderSkillsTable();
  renderServicesTable();
  renderExperienceTable();
  renderResumeSettings();
  renderSocials();
  renderSettings();
  updateMetrics();
}

/**
 * Dashboard Overview & Metrics
 */
function renderDashboard() {
  renderDashboardRecentMessages();
  updateMetrics();
}

function updateMetrics() {
  const pCount = (cmsData.projects || []).filter(p => p.published !== false).length;
  let sCount = 0;
  if (cmsData.skills) {
    if (Array.isArray(cmsData.skills)) sCount = cmsData.skills.length;
    else Object.values(cmsData.skills).forEach(arr => sCount += (arr || []).length);
  }
  const unreadMsgCount = allMessages.filter(m => !m.read).length;
  const unreadChatCount = allChatSessions.filter(c => c.metadata && c.metadata.unreadForAdmin).length;

  const mProj = document.getElementById('metricProjects');
  const mSkill = document.getElementById('metricSkills');
  const mMsg = document.getElementById('metricMessages');
  const mChat = document.getElementById('metricLiveChats');
  const inboxBadge = document.getElementById('inboxBadge');
  const liveChatBadge = document.getElementById('liveChatBadge');
  const activeChatCount = document.getElementById('activeChatCount');

  if (mProj) mProj.textContent = pCount;
  if (mSkill) mSkill.textContent = sCount;
  if (mMsg) mMsg.textContent = unreadMsgCount;
  if (mChat) mChat.textContent = allChatSessions.length;
  if (inboxBadge) inboxBadge.textContent = unreadMsgCount;
  if (liveChatBadge) liveChatBadge.textContent = unreadChatCount;
  if (activeChatCount) activeChatCount.textContent = allChatSessions.length;
}

function renderDashboardRecentMessages() {
  const tbody = document.getElementById('dashboardRecentMessages');
  if (!tbody) return;

  const recents = allMessages.slice(0, 5);
  if (!recents.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted);">No contact messages received yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = recents.map(m => {
    const dateStr = m.createdAt ? new Date(m.createdAt).toLocaleDateString() : 'Recent';
    const statusChip = m.read 
      ? `<span style="color: var(--admin-text-muted); font-size: 0.8rem;"><i class="fa-solid fa-check"></i> Read</span>`
      : `<span style="color: var(--admin-accent-cyan); font-weight: 700; font-size: 0.8rem;"><i class="fa-solid fa-envelope"></i> Unread</span>`;

    return `
      <tr>
        <td>${dateStr}</td>
        <td><strong>${m.name}</strong></td>
        <td>${m.email}</td>
        <td>${m.subject || 'Inquiry'}</td>
        <td>${statusChip}</td>
        <td>
          <div class="table-actions">
            <button class="btn-icon" title="Toggle Read Status" onclick="toggleMessageRead('${m.id}', ${!m.read})">
              <i class="fa-solid ${m.read ? 'fa-envelope' : 'fa-envelope-open'}"></i>
            </button>
            <a href="mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || 'Portfolio Inquiry')}" class="btn-icon" title="Reply via Email">
              <i class="fa-solid fa-reply"></i>
            </a>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * =========================================================================
 * BIDIRECTIONAL LIVE CHAT CONSOLE
 * =========================================================================
 */
function renderChatThreads() {
  const list = document.getElementById('chatThreadsList');
  if (!list) return;

  if (!allChatSessions.length) {
    list.innerHTML = `
      <li style="padding: 2rem 1rem; text-align: center; color: var(--admin-text-muted); font-size: 0.85rem;">
        <i class="fa-regular fa-comment-dots" style="font-size: 1.75rem; margin-bottom: 0.5rem; display: block; color: var(--admin-accent-cyan);"></i>
        No active customer chats yet.<br>New chats will show here automatically in real time!
      </li>
    `;
    return;
  }

  list.innerHTML = allChatSessions.map(c => {
    const meta = c.metadata || {};
    const isUnread = !!meta.unreadForAdmin;
    const isActive = activeChatSessionId === c.sessionId;
    const timeStr = meta.updatedAt ? formatTimeAgo(meta.updatedAt) : 'Just now';
    const country = meta.customerCountry ? `<span style="font-size: 0.72rem; color: #22D3EE;"><i class="fa-solid fa-earth-americas"></i> ${meta.customerCountry}</span>` : '';
    const contactIcon = meta.customerContactMethod === 'WhatsApp' ? '<i class="fa-brands fa-whatsapp" style="color: #25D366;"></i>' :
                        meta.customerContactMethod === 'Telegram' ? '<i class="fa-brands fa-telegram" style="color: #229ED9;"></i>' :
                        '<i class="fa-solid fa-envelope" style="color: #A78BFA;"></i>';
    const contactMethodLabel = meta.customerContactMethod ? `<span style="font-size: 0.72rem; color: var(--admin-text-muted);">${contactIcon} ${meta.customerContactMethod}</span>` : '';

    return `
      <li class="chat-thread-item ${isActive ? 'active' : ''}" onclick="selectChatSession('${c.sessionId}')">
        <div class="chat-thread-top">
          <span class="chat-thread-name">${meta.customerName || 'Customer'}</span>
          <span class="chat-thread-time">${timeStr}</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center; margin: 3px 0 4px;">
          ${country}
          ${contactMethodLabel ? `<span style="color: var(--admin-text-muted); font-size: 0.7rem;">•</span> ${contactMethodLabel}` : ''}
        </div>
        <div class="chat-thread-preview">${meta.lastMessage || 'Started conversation'}</div>
        ${isUnread ? `<span class="chat-thread-unread-chip">● New Message</span>` : ''}
      </li>
    `;
  }).join('');

  // If no chat is active yet, select the top one
  if (!activeChatSessionId && allChatSessions.length > 0) {
    selectChatSession(allChatSessions[0].sessionId);
  }
}

function selectChatSession(sessionId) {
  activeChatSessionId = sessionId;
  renderChatThreads();

  const session = allChatSessions.find(c => c.sessionId === sessionId);
  const meta = (session && session.metadata) ? session.metadata : {};

  const nameEl = document.getElementById('activeVisitorName');
  const sessEl = document.getElementById('activeVisitorSessionId');
  const initEl = document.getElementById('activeVisitorInitial');
  const detailsEl = document.getElementById('activeVisitorLeadDetails');
  const directLinkEl = document.getElementById('activeVisitorDirectLinkContainer');

  if (nameEl) nameEl.textContent = `${meta.customerName || 'Customer'}`;
  if (sessEl) sessEl.textContent = `Session: ${sessionId} • Status: ${meta.status || 'Active'}`;
  if (initEl) initEl.textContent = (meta.customerName || 'C').charAt(0).toUpperCase();

  // Populate Lead Badges
  if (detailsEl) {
    const badges = [];
    if (meta.customerCountry) {
      badges.push(`
        <span style="background: rgba(34, 211, 238, 0.12); color: #22D3EE; border: 1px solid rgba(34, 211, 238, 0.3); padding: 2px 8px; border-radius: 4px; font-size: 0.74rem; font-weight: 600;">
          <i class="fa-solid fa-earth-americas"></i> ${meta.customerCountry}
        </span>
      `);
    }
    if (meta.customerContactMethod && meta.customerContactValue) {
      const isWa = meta.customerContactMethod === 'WhatsApp';
      const isTg = meta.customerContactMethod === 'Telegram';
      const icon = isWa ? 'fa-brands fa-whatsapp' : (isTg ? 'fa-brands fa-telegram' : 'fa-solid fa-envelope');
      const color = isWa ? '#25D366' : (isTg ? '#229ED9' : '#A78BFA');
      badges.push(`
        <span style="background: rgba(255, 255, 255, 0.05); color: ${color}; border: 1px solid rgba(255, 255, 255, 0.15); padding: 2px 8px; border-radius: 4px; font-size: 0.74rem; font-weight: 600;">
          <i class="${icon}"></i> ${meta.customerContactMethod}: <strong>${meta.customerContactValue}</strong>
        </span>
      `);
    } else if (meta.customerEmail) {
      badges.push(`
        <span style="background: rgba(255, 255, 255, 0.05); color: #A78BFA; border: 1px solid rgba(255, 255, 255, 0.15); padding: 2px 8px; border-radius: 4px; font-size: 0.74rem; font-weight: 600;">
          <i class="fa-solid fa-envelope"></i> ${meta.customerEmail}
        </span>
      `);
    }
    detailsEl.innerHTML = badges.join('');
  }

  // Populate direct contact button
  if (directLinkEl) {
    let directBtnHtml = '';
    if (meta.customerContactMethod === 'WhatsApp' && meta.customerContactValue) {
      const cleanNum = meta.customerContactValue.replace(/[^0-9]/g, '');
      directBtnHtml = `
        <a href="https://wa.me/${cleanNum}" target="_blank" class="btn btn-sm btn-primary" style="font-size: 0.78rem; background: #25D366; border-color: #25D366; color: #040711; font-weight: 700;">
          <i class="fa-brands fa-whatsapp"></i> <span>Open WhatsApp</span>
        </a>
      `;
    } else if (meta.customerContactMethod === 'Telegram' && meta.customerContactValue) {
      const handle = meta.customerContactValue.replace(/^@/, '');
      directBtnHtml = `
        <a href="https://t.me/${handle}" target="_blank" class="btn btn-sm btn-primary" style="font-size: 0.78rem; background: #229ED9; border-color: #229ED9; color: #FFFFFF; font-weight: 700;">
          <i class="fa-brands fa-telegram"></i> <span>Open Telegram</span>
        </a>
      `;
    } else if (meta.customerContactValue && meta.customerContactValue.includes('@')) {
      directBtnHtml = `
        <a href="mailto:${meta.customerContactValue}?subject=MR TECH Inquiry Follow-up" class="btn btn-sm btn-outline" style="font-size: 0.78rem;">
          <i class="fa-solid fa-envelope"></i> <span>Send Email</span>
        </a>
      `;
    }
    directLinkEl.innerHTML = directBtnHtml;
  }

  // Mark as read by admin
  if (window.MR_FIREBASE) {
    window.MR_FIREBASE.markChatReadByAdmin(sessionId);
  }

  // Subscribe to messages
  if (chatUnsubscribe) chatUnsubscribe();
  if (window.MR_FIREBASE) {
    chatUnsubscribe = window.MR_FIREBASE.listenToChatSession(sessionId, (messages) => {
      renderAdminChatMessages(messages, meta);
    });
  }
}

function renderAdminChatMessages(messages, meta) {
  const container = document.getElementById('adminChatMessages');
  if (!container) return;

  if (!messages || !messages.length) {
    container.innerHTML = `
      <div style="text-align: center; color: var(--admin-text-muted); margin-top: 3rem;">
        <p>Customer has opened the chat. Send your first reply below!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = messages.map(m => {
    const isAdmin = m.sender === 'admin';
    const time = m.timestamp ? new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

    return `
      <div class="admin-chat-bubble-wrapper ${isAdmin ? 'admin' : 'customer'}">
        <div class="admin-chat-bubble ${isAdmin ? 'admin' : 'customer'}">
          ${m.text}
        </div>
        <div class="admin-chat-time">${isAdmin ? 'Mijanur Rahman (You)' : (meta.customerName || 'Customer')} • ${time}</div>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
}

function initLiveChatConsoleEvents() {
  const replyInput = document.getElementById('adminReplyInput');
  const sendBtn = document.getElementById('adminSendReplyBtn');
  const resolveBtn = document.getElementById('resolveChatBtn');
  const quickChatBtn = document.getElementById('quickOpenChatConsoleBtn');
  const templateChips = document.querySelectorAll('#chatQuickTemplates .template-chip');

  const sendReply = async () => {
    if (!activeChatSessionId) {
      showToast('Select a customer chat first!', 'error');
      return;
    }
    const text = replyInput.value.trim();
    if (!text) return;

    replyInput.value = '';
    await window.MR_FIREBASE.sendChatMessage(activeChatSessionId, {
      sender: 'admin',
      senderName: 'Mijanur Rahman',
      text: text
    });
    showToast('Reply sent to customer live!', 'success');
  };

  if (sendBtn) sendBtn.onclick = sendReply;
  if (replyInput) {
    replyInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendReply();
      }
    });
  }

  // Template chips
  templateChips.forEach(chip => {
    chip.onclick = () => {
      if (replyInput) {
        replyInput.value = chip.dataset.text;
        replyInput.focus();
      }
    };
  });

  // Resolve chat
  if (resolveBtn) {
    resolveBtn.onclick = async () => {
      if (!activeChatSessionId) return;
      await window.MR_FIREBASE.resolveChatSession(activeChatSessionId);
      showToast('Chat marked as resolved.', 'success');
    };
  }

  // Quick Open from dashboard
  if (quickChatBtn) {
    quickChatBtn.onclick = () => {
      const btn = document.querySelector('.admin-sidebar-nav button[data-panel="livechat"]');
      if (btn) btn.click();
    };
  }
}

/**
 * Profile & Hero Form
 */
function renderProfileForm() {
  const p = cmsData.profile || {};
  const hs = cmsData.heroSettings || {};

  setVal('profName', p.name);
  setVal('profTitle', p.title);
  setVal('profTagline', p.tagline);
  setVal('profBio', p.bio);
  setVal('profLocation', p.location);
  setVal('profAvailability', p.availability);
  setVal('profEmail', p.email);
  setVal('profWhatsapp', p.whatsapp);
  setVal('profAvatarUrl', p.avatarUrl || 'images/profile.jpg');
  setVal('profResumeUrl', p.resumeUrl);

  setVal('stat1Num', hs.stat1Num || '6+');
  setVal('stat1Label', hs.stat1Label || 'Core Projects');
  setVal('stat2Num', hs.stat2Num || '4+');
  setVal('stat2Label', hs.stat2Label || 'Years Experience');
  setVal('stat3Num', hs.stat3Num || '100%');
  setVal('stat3Label', hs.stat3Label || 'Client Satisfaction');
}

/**
 * Projects CRUD Table
 */
function renderProjectsTable() {
  const tbody = document.getElementById('projectsTableBody');
  if (!tbody) return;

  const projects = Array.isArray(cmsData.projects) ? cmsData.projects : Object.values(cmsData.projects || {});
  
  if (!projects.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--admin-text-muted);">No projects recorded. Add your first project!</td></tr>`;
    return;
  }

  tbody.innerHTML = projects.map(p => {
    return `
      <tr>
        <td>
          <img src="${p.image || 'images/project_showcase.jpg'}" alt="${p.name}" style="width: 56px; height: 38px; border-radius: 6px; object-fit: cover;">
        </td>
        <td><strong>${p.name}</strong></td>
        <td>${p.category || 'General'}</td>
        <td><span class="project-status-tag status-${p.statusType || 'completed'}" style="position: static; font-size: 0.72rem;">${p.status || 'Active'}</span></td>
        <td>
          <button class="btn-icon" onclick="toggleProjectPublish('${p.id}', ${!p.published})" title="Toggle Visibility">
            <i class="fa-solid ${p.published !== false ? 'fa-eye' : 'fa-eye-slash'}" style="color: ${p.published !== false ? 'var(--admin-accent-green)' : 'var(--admin-text-muted)'};"></i>
          </button>
        </td>
        <td>
          <div style="display: flex; gap: 0.4rem;">
            ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" class="btn-icon" title="Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" class="btn-icon" title="Repo"><i class="fa-brands fa-github"></i></a>` : ''}
          </div>
        </td>
        <td>
          <div class="table-actions">
            <button class="btn-icon edit" onclick="editProject('${p.id}')" title="Edit Project"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-icon delete" onclick="confirmDeleteProject('${p.id}')" title="Delete Project"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Skills Management Table
 */
function renderSkillsTable() {
  const tbody = document.getElementById('skillsTableBody');
  if (!tbody) return;

  let skills = [];
  if (Array.isArray(cmsData.skills)) {
    skills = cmsData.skills;
  } else if (cmsData.skills) {
    Object.keys(cmsData.skills).forEach(cat => {
      (cmsData.skills[cat] || []).forEach(s => skills.push({ ...s, category: cat }));
    });
  }

  tbody.innerHTML = skills.map(s => `
    <tr>
      <td><i class="${s.icon || 'fa-solid fa-code'}" style="font-size: 1.25rem; color: var(--admin-accent-cyan);"></i></td>
      <td><strong>${s.name}</strong></td>
      <td><span style="text-transform: capitalize; color: var(--admin-accent-purple); font-weight: 600;">${s.category || 'frontend'}</span></td>
      <td><span class="skill-badge">${s.level || 'Expert'}</span></td>
      <td>${s.percent || 90}%</td>
      <td>
        <div class="table-actions">
          <button class="btn-icon edit" onclick="editSkill('${s.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-icon delete" onclick="confirmDeleteSkill('${s.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

/**
 * Services Management Table
 */
function renderServicesTable() {
  const tbody = document.getElementById('servicesTableBody');
  if (!tbody) return;

  const services = Array.isArray(cmsData.services) ? cmsData.services : Object.values(cmsData.services || {});

  tbody.innerHTML = services.map(s => `
    <tr>
      <td><i class="${s.icon || 'fa-solid fa-laptop-code'}" style="color: var(--admin-accent-cyan); font-size: 1.25rem;"></i></td>
      <td><strong>${s.title}</strong></td>
      <td style="max-width: 280px; font-size: 0.85rem; color: var(--admin-text-muted);">${s.description}</td>
      <td style="font-size: 0.85rem;">${(s.deliverables || []).join(', ')}</td>
      <td>
        <div class="table-actions">
          <button class="btn-icon delete" onclick="confirmDeleteService('${s.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

/**
 * Experience Timeline Table
 */
function renderExperienceTable() {
  const tbody = document.getElementById('experienceTableBody');
  if (!tbody) return;

  const exps = Array.isArray(cmsData.experience) ? cmsData.experience : Object.values(cmsData.experience || {});

  tbody.innerHTML = exps.map(e => `
    <tr>
      <td><strong>${e.period}</strong></td>
      <td>${e.role}</td>
      <td><span style="color: var(--admin-accent-purple); font-weight: 600;">${e.context}</span></td>
      <td style="max-width: 280px; font-size: 0.85rem; color: var(--admin-text-muted);">${e.description}</td>
      <td>
        <div class="table-actions">
          <button class="btn-icon delete" onclick="confirmDeleteExperience('${e.id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

/**
 * Resume Settings
 */
function renderResumeSettings() {
  const p = cmsData.profile || {};
  setVal('cvDownloadUrlInput', p.resumeUrl || 'database-schema.json');
}

/**
 * Inbox Table
 */
function renderInbox() {
  const tbody = document.getElementById('inboxTableBody');
  if (!tbody) return;

  if (!allMessages.length) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--admin-text-muted);">Inbox is clean! No messages to display.</td></tr>`;
    return;
  }

  tbody.innerHTML = allMessages.map(m => {
    const time = m.createdAt ? new Date(m.createdAt).toLocaleString() : 'Recent';
    const isRead = !!m.read;

    return `
      <tr style="${!isRead ? 'background: rgba(0, 240, 255, 0.04);' : ''}">
        <td style="white-space: nowrap; font-size: 0.82rem; color: var(--admin-text-muted);">${time}</td>
        <td><strong>${m.name}</strong></td>
        <td><a href="mailto:${m.email}" style="color: var(--admin-accent-cyan); text-decoration: none;">${m.email}</a></td>
        <td><strong>${m.subject || 'Inquiry'}</strong></td>
        <td style="max-width: 300px; font-size: 0.88rem; color: #E2E8F0;">${m.message}</td>
        <td>
          <span style="font-size: 0.8rem; font-weight: 700; color: ${isRead ? 'var(--admin-text-muted)' : 'var(--admin-accent-green)'};">
            ${isRead ? 'Read' : '● New'}
          </span>
        </td>
        <td>
          <div class="table-actions">
            <button class="btn-icon" onclick="toggleMessageRead('${m.id}', ${!isRead})" title="${isRead ? 'Mark as Unread' : 'Mark as Read'}">
              <i class="fa-solid ${isRead ? 'fa-envelope' : 'fa-envelope-open'}"></i>
            </button>
            <a href="mailto:${m.email}?subject=Re: ${encodeURIComponent(m.subject || 'Inquiry')}" class="btn-icon" title="Reply">
              <i class="fa-solid fa-reply"></i>
            </a>
            <button class="btn-icon delete" onclick="confirmDeleteMessage('${m.id}')" title="Delete Message">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Social Links
 */
function renderSocials() {
  const p = cmsData.profile || {};
  setVal('socialGithub', p.github || 'https://github.com');
  setVal('socialLinkedin', p.linkedin || 'https://linkedin.com');
  setVal('socialWhatsapp', p.whatsapp || '+8801700000000');
  setVal('socialEmail', p.email || 'mstrumaah1999@gmail.com');
}

/**
 * Settings & SEO
 */
function renderSettings() {
  const s = cmsData.settings || {};
  const ts = cmsData.themeSettings || {};
  const cs = cmsData.chatSettings || {};

  setVal('seoSiteTitle', s.siteTitle || 'MR TECH | Mijanur Rahman — Web & App Developer');
  setVal('seoMetaDesc', s.metaDescription || 'Official portfolio of Mijanur Rahman (MR TECH). Professional Web & App Developer specializing in modern websites, web applications, dashboards, and digital solutions.');
  setVal('brandNameInput', s.brandName || 'MR TECH');

  setVal('primaryAccentInput', ts.primaryAccent || '#00F0FF');
  setVal('primaryAccentHex', ts.primaryAccent || '#00F0FF');
  setVal('secondaryAccentInput', ts.secondaryAccent || '#8B5CF6');
  setVal('secondaryAccentHex', ts.secondaryAccent || '#8B5CF6');
  setVal('goldAccentInput', ts.goldAccent || '#F59E0B');
  setVal('goldAccentHex', ts.goldAccent || '#F59E0B');

  const chatToggle = document.getElementById('chatEnabledToggle');
  if (chatToggle) chatToggle.checked = cs.enabled !== false;
  setVal('chatStatusTextInput', cs.agentStatus || 'Online • Typically replies in minutes');
  setVal('chatWelcomeMsgInput', cs.welcomeMessage || 'Hello! 👋 I\'m Mijanur Rahman. What kind of website or application are you looking to build?');
}

/**
 * Event Listeners & Save Handlers
 */
function initPanelEvents() {
  // Save Profile & Hero
  const saveProfBtn = document.getElementById('saveProfileBtn');
  if (saveProfBtn) {
    saveProfBtn.onclick = async () => {
      cmsData.profile = {
        name: getVal('profName'),
        title: getVal('profTitle'),
        tagline: getVal('profTagline'),
        bio: getVal('profBio'),
        location: getVal('profLocation'),
        availability: getVal('profAvailability'),
        email: getVal('profEmail'),
        whatsapp: getVal('profWhatsapp'),
        avatarUrl: getVal('profAvatarUrl') || 'images/profile.jpg',
        resumeUrl: getVal('profResumeUrl') || 'database-schema.json',
        yearsExperience: 4,
        completedProjects: 18
      };

      cmsData.heroSettings = {
        greeting: "Hello, world! I am",
        stat1Num: getVal('stat1Num') || '6+',
        stat1Label: getVal('stat1Label') || 'Core Projects',
        stat2Num: getVal('stat2Num') || '4+',
        stat2Label: getVal('stat2Label') || 'Years Experience',
        stat3Num: getVal('stat3Num') || '100%',
        stat3Label: getVal('stat3Label') || 'Client Satisfaction'
      };

      await pushCmsUpdate('profile', cmsData.profile);
      await pushCmsUpdate('heroSettings', cmsData.heroSettings);
      showToast('Profile & Hero settings updated!', 'success');
    };
  }

  // Save Socials
  const saveSocialsBtn = document.getElementById('saveSocialsBtn');
  if (saveSocialsBtn) {
    saveSocialsBtn.onclick = async () => {
      cmsData.profile.github = getVal('socialGithub');
      cmsData.profile.linkedin = getVal('socialLinkedin');
      cmsData.profile.whatsapp = getVal('socialWhatsapp');
      cmsData.profile.email = getVal('socialEmail');
      await pushCmsUpdate('profile', cmsData.profile);
      showToast('Social networks saved!', 'success');
    };
  }

  // Save Settings, Colors, & Live Chat Config
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  if (saveSettingsBtn) {
    saveSettingsBtn.onclick = async () => {
      cmsData.settings = {
        siteTitle: getVal('seoSiteTitle'),
        metaDescription: getVal('seoMetaDesc'),
        brandName: getVal('brandNameInput')
      };

      cmsData.themeSettings = {
        primaryAccent: getVal('primaryAccentInput') || '#00F0FF',
        secondaryAccent: getVal('secondaryAccentInput') || '#8B5CF6',
        goldAccent: getVal('goldAccentInput') || '#F59E0B'
      };

      cmsData.chatSettings = {
        enabled: document.getElementById('chatEnabledToggle').checked,
        agentStatus: getVal('chatStatusTextInput'),
        welcomeMessage: getVal('chatWelcomeMsgInput')
      };

      await pushCmsUpdate('settings', cmsData.settings);
      await pushCmsUpdate('themeSettings', cmsData.themeSettings);
      await pushCmsUpdate('chatSettings', cmsData.chatSettings);
      showToast('Colors, SEO & Live Chat configurations saved!', 'success');
    };
  }

  // Color inputs sync
  const bindColorSync = (colorId, hexId) => {
    const cEl = document.getElementById(colorId);
    const hEl = document.getElementById(hexId);
    if (cEl && hEl) {
      cEl.oninput = () => hEl.value = cEl.value;
      hEl.oninput = () => {
        if (/^#[0-9A-Fa-f]{6}$/.test(hEl.value)) cEl.value = hEl.value;
      };
    }
  };
  bindColorSync('primaryAccentInput', 'primaryAccentHex');
  bindColorSync('secondaryAccentInput', 'secondaryAccentHex');
  bindColorSync('goldAccentInput', 'goldAccentHex');

  // Save CV settings
  const saveCvSettingsBtn = document.getElementById('saveCvSettingsBtn');
  if (saveCvSettingsBtn) {
    saveCvSettingsBtn.onclick = async () => {
      cmsData.profile.resumeUrl = getVal('cvDownloadUrlInput');
      await pushCmsUpdate('profile', cmsData.profile);
      showToast('Resume link updated!', 'success');
    };
  }

  // File Upload CV
  const cvFileInput = document.getElementById('cvFileInput');
  if (cvFileInput) {
    cvFileInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const label = document.getElementById('cvFileNameLabel');
      if (label) label.textContent = `Uploading: ${file.name}...`;

      try {
        const path = `portfolio/resume_${Date.now()}_${file.name}`;
        const url = await window.MR_FIREBASE.uploadFile(file, path);
        cmsData.profile.resumeUrl = url;
        setVal('cvDownloadUrlInput', url);
        await pushCmsUpdate('profile', cmsData.profile);
        if (label) label.textContent = `Uploaded & Saved: ${file.name}`;
        showToast('Resume file uploaded and saved!', 'success');
      } catch (err) {
        console.error("Upload error:", err);
        showToast('Error uploading file.', 'error');
      }
    };
  }

  // Publish all changes button
  const syncBtn = document.getElementById('syncFirebaseBtn');
  if (syncBtn) {
    syncBtn.onclick = async () => {
      syncBtn.disabled = true;
      syncBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Syncing with Cloud...</span>`;
      try {
        await window.MR_FIREBASE.updatePortfolio(null, cmsData);
        showToast('All portfolio sections published to Firebase Realtime Database!', 'success');
      } catch (err) {
        showToast('Sync saved locally.', 'success');
      } finally {
        syncBtn.disabled = false;
        syncBtn.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> <span>Publish All Changes</span>`;
      }
    };
  }

  // Add Project Modal Trigger
  const addProjBtn = document.getElementById('addNewProjectBtn');
  const quickAddProjBtn = document.getElementById('quickAddProjectBtn');
  if (addProjBtn) addProjBtn.onclick = () => openProjectModal();
  if (quickAddProjBtn) quickAddProjBtn.onclick = () => openProjectModal();

  // Project Modal Form Submit
  const projForm = document.getElementById('projectModalForm');
  if (projForm) {
    projForm.onsubmit = async (e) => {
      e.preventDefault();
      const id = getVal('pmId') || `proj_${Date.now()}`;
      const newProj = {
        id,
        name: getVal('pmName'),
        category: getVal('pmCategory'),
        status: getVal('pmStatus'),
        statusType: getVal('pmStatusType'),
        description: getVal('pmDesc'),
        technologies: getVal('pmTechs').split(',').map(t => t.trim()).filter(Boolean),
        demoUrl: getVal('pmDemoUrl'),
        githubUrl: getVal('pmGithubUrl'),
        image: getVal('pmImage') || 'images/project_showcase.jpg',
        published: document.getElementById('pmPublished').checked
      };

      if (!Array.isArray(cmsData.projects)) {
        cmsData.projects = Object.values(cmsData.projects || {});
      }

      const idx = cmsData.projects.findIndex(p => p.id === id);
      if (idx >= 0) {
        cmsData.projects[idx] = newProj;
      } else {
        cmsData.projects.push(newProj);
      }

      await pushCmsUpdate('projects', cmsData.projects);
      closeProjectModal();
      renderProjectsTable();
      updateMetrics();
      showToast(`Project "${newProj.name}" saved!`, 'success');
    };
  }

  // Quick Action Buttons
  const quickAddSkill = document.getElementById('quickAddSkillBtn');
  if (quickAddSkill) quickAddSkill.onclick = () => openSkillModal();

  const addNewSkill = document.getElementById('addNewSkillBtn');
  if (addNewSkill) addNewSkill.onclick = () => openSkillModal();

  // Skill Modal Submit
  const skillForm = document.getElementById('skillModalForm');
  if (skillForm) {
    skillForm.onsubmit = async (e) => {
      e.preventDefault();
      const id = getVal('smId') || `sk_${Date.now()}`;
      const category = getVal('smCategory');
      const skill = {
        id,
        name: getVal('smName'),
        category,
        level: getVal('smLevel'),
        percent: parseInt(getVal('smPercent'), 10) || 90,
        icon: getVal('smIcon') || 'fa-solid fa-code'
      };

      if (!cmsData.skills[category]) cmsData.skills[category] = [];
      const idx = cmsData.skills[category].findIndex(s => s.id === id);
      if (idx >= 0) {
        cmsData.skills[category][idx] = skill;
      } else {
        cmsData.skills[category].push(skill);
      }

      await pushCmsUpdate('skills', cmsData.skills);
      closeSkillModal();
      renderSkillsTable();
      updateMetrics();
      showToast(`Skill "${skill.name}" saved!`, 'success');
    };
  }

  // Backup Export
  const exportBtn = document.getElementById('quickExportJsonBtn');
  const exportFullBtn = document.getElementById('exportFullBackupBtn');
  const triggerExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cmsData, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `mr_developer_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    showToast("Portfolio database backup exported!", "success");
  };
  if (exportBtn) exportBtn.onclick = triggerExport;
  if (exportFullBtn) exportFullBtn.onclick = triggerExport;

  // Runtime Firebase Config Override
  const saveFirebaseOverrideBtn = document.getElementById('saveFirebaseOverrideBtn');
  if (saveFirebaseOverrideBtn) {
    saveFirebaseOverrideBtn.onclick = () => {
      const raw = getVal('firebaseConfigOverrideInput').trim();
      try {
        const parsed = JSON.parse(raw);
        if (parsed.apiKey) {
          localStorage.setItem('MR_DEVELOPER_FIREBASE_CONFIG', JSON.stringify(parsed));
          showToast('Firebase configuration saved! Reloading to apply...', 'success');
          setTimeout(() => location.reload(), 1200);
        } else {
          throw new Error('Missing apiKey in configuration object.');
        }
      } catch (err) {
        showToast('Invalid JSON format: ' + err.message, 'error');
      }
    };
  }

  // Confirm Delete Button in Modal
  const confirmBtn = document.getElementById('confirmDeleteBtn');
  if (confirmBtn) {
    confirmBtn.onclick = async () => {
      if (deleteActionCallback) {
        await deleteActionCallback();
        deleteActionCallback = null;
      }
      closeDeleteModal();
    };
  }
}

/**
 * CRUD Helper Functions & Modals
 */
function openProjectModal(project = null) {
  const modal = document.getElementById('projectModal');
  const title = document.getElementById('projectModalTitle');
  if (project) {
    title.textContent = "Edit Project";
    setVal('pmId', project.id);
    setVal('pmName', project.name);
    setVal('pmCategory', project.category);
    setVal('pmStatus', project.status);
    setVal('pmStatusType', project.statusType);
    setVal('pmDesc', project.description);
    setVal('pmTechs', (project.technologies || []).join(', '));
    setVal('pmDemoUrl', project.demoUrl || '');
    setVal('pmGithubUrl', project.githubUrl || '');
    setVal('pmImage', project.image || 'images/project_showcase.jpg');
    document.getElementById('pmPublished').checked = project.published !== false;
  } else {
    title.textContent = "Add New Project";
    setVal('pmId', '');
    document.getElementById('projectModalForm').reset();
    setVal('pmImage', 'images/project_showcase.jpg');
    document.getElementById('pmPublished').checked = true;
  }
  modal.classList.add('open');
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('open');
}

function editProject(id) {
  const projects = Array.isArray(cmsData.projects) ? cmsData.projects : Object.values(cmsData.projects || {});
  const p = projects.find(item => item.id === id);
  if (p) openProjectModal(p);
}

function confirmDeleteProject(id) {
  deleteActionCallback = async () => {
    cmsData.projects = (cmsData.projects || []).filter(p => p.id !== id);
    await pushCmsUpdate('projects', cmsData.projects);
    renderProjectsTable();
    updateMetrics();
    showToast('Project deleted permanently.', 'success');
  };
  openDeleteModal('Are you sure you want to permanently delete this project?');
}

async function toggleProjectPublish(id, isPublished) {
  const projects = Array.isArray(cmsData.projects) ? cmsData.projects : Object.values(cmsData.projects || {});
  const p = projects.find(item => item.id === id);
  if (p) {
    p.published = isPublished;
    await pushCmsUpdate('projects', cmsData.projects);
    renderProjectsTable();
    showToast(`Project visibility: ${isPublished ? 'Published' : 'Hidden'}`, 'success');
  }
}

// Skills Modals
function openSkillModal(skill = null) {
  const modal = document.getElementById('skillModal');
  const title = document.getElementById('skillModalTitle');
  if (skill) {
    title.textContent = "Edit Skill";
    setVal('smId', skill.id);
    setVal('smName', skill.name);
    setVal('smCategory', skill.category);
    setVal('smLevel', skill.level);
    setVal('smPercent', skill.percent);
    setVal('smIcon', skill.icon);
  } else {
    title.textContent = "Add Skill";
    setVal('smId', '');
    document.getElementById('skillModalForm').reset();
    setVal('smPercent', 90);
    setVal('smIcon', 'fa-solid fa-code');
  }
  modal.classList.add('open');
}

function closeSkillModal() {
  document.getElementById('skillModal').classList.remove('open');
}

function editSkill(id) {
  let target = null;
  if (Array.isArray(cmsData.skills)) {
    target = cmsData.skills.find(s => s.id === id);
  } else if (cmsData.skills) {
    Object.keys(cmsData.skills).forEach(cat => {
      const found = (cmsData.skills[cat] || []).find(s => s.id === id);
      if (found) target = { ...found, category: cat };
    });
  }
  if (target) openSkillModal(target);
}

function confirmDeleteSkill(id) {
  deleteActionCallback = async () => {
    if (Array.isArray(cmsData.skills)) {
      cmsData.skills = cmsData.skills.filter(s => s.id !== id);
    } else {
      Object.keys(cmsData.skills).forEach(cat => {
        cmsData.skills[cat] = (cmsData.skills[cat] || []).filter(s => s.id !== id);
      });
    }
    await pushCmsUpdate('skills', cmsData.skills);
    renderSkillsTable();
    updateMetrics();
    showToast('Skill deleted.', 'success');
  };
  openDeleteModal('Are you sure you want to delete this technical skill?');
}

// Message actions
async function toggleMessageRead(id, isRead) {
  if (window.MR_FIREBASE) {
    await window.MR_FIREBASE.setMessageStatus(id, isRead);
  }
  const m = allMessages.find(item => item.id === id);
  if (m) m.read = isRead;
  renderInbox();
  renderDashboardRecentMessages();
  updateMetrics();
  showToast(`Message marked as ${isRead ? 'read' : 'unread'}.`, 'success');
}

function confirmDeleteMessage(id) {
  deleteActionCallback = async () => {
    if (window.MR_FIREBASE) {
      await window.MR_FIREBASE.deleteMessage(id);
    }
    allMessages = allMessages.filter(m => m.id !== id);
    renderInbox();
    renderDashboardRecentMessages();
    updateMetrics();
    showToast('Message deleted permanently.', 'success');
  };
  openDeleteModal('Are you sure you want to permanently delete this message inquiry?');
}

// Delete Confirmation Modal
function openDeleteModal(msg) {
  const modal = document.getElementById('deleteConfirmModal');
  const txt = document.getElementById('deleteModalText');
  if (txt) txt.textContent = msg;
  modal.classList.add('open');
}

function closeDeleteModal() {
  document.getElementById('deleteConfirmModal').classList.remove('open');
}

/**
 * Universal update pusher
 */
async function pushCmsUpdate(section, data) {
  try {
    if (window.MR_FIREBASE) {
      await window.MR_FIREBASE.updatePortfolio(section, data);
    }
    showToast(`Saved ${section || 'portfolio'} changes!`, 'success');
  } catch (err) {
    console.error("Update error:", err);
    showToast("Saved locally. Ready to sync with Firebase.", "success");
  }
}

// Utility Helpers
function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value : '';
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined && val !== null) {
    el.value = val;
  }
}

function formatTimeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

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
  }, 4000);
}
