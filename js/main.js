// ============================================================
// NAVDEEP SINGH — Portfolio JS
// ============================================================

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = window.matchMedia("(pointer: fine)").matches;

/* ── CURSOR ── */
/* Only on devices with a real pointer — on touch the fake cursor would
   sit frozen at 0,0 while the system cursor stays hidden. */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const trail = document.getElementById("cursor-trail");

  if (!FINE_POINTER || REDUCED_MOTION) {
    document.documentElement.classList.add("no-custom-cursor");
    cursor.remove();
    trail.remove();
    return;
  }

  let trailX = 0, trailY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
  });

  (function animateTrail() {
    trailX += (cursorX - trailX) * 0.14;
    trailY += (cursorY - trailY) * 0.14;
    trail.style.left = trailX + "px";
    trail.style.top = trailY + "px";
    requestAnimationFrame(animateTrail);
  })();

  // Delegated so it also covers cards rendered later from data.js
  const HOVER_TARGETS = "a, button, summary, .project-card, .skill-pill, .contact-card, .achievement-card, .concept-card, .semester-stat";

  document.addEventListener("mouseover", (e) => {
    if (!e.target.closest(HOVER_TARGETS)) return;
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    trail.style.transform = "translate(-50%, -50%) scale(0.6)";
    trail.style.opacity = "0.5";
  });

  document.addEventListener("mouseout", (e) => {
    if (!e.target.closest(HOVER_TARGETS)) return;
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    trail.style.transform = "translate(-50%, -50%) scale(1)";
    trail.style.opacity = "1";
  });
}

/* ── NAVBAR + SCROLL PROGRESS ── */
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const progressBar = document.getElementById("scroll-progress");

function onScroll() {
  nav.classList.toggle("scrolled", window.scrollY > 40);

  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

hamburger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-locked", open);
});

nav.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  }
});

/* ── THIS SEMESTER COUNTERS ── */
function renderSemesterStats() {
  const grid = document.getElementById("semester-grid");
  if (!grid || typeof SEMESTER_STATS === "undefined") return;

  grid.innerHTML = SEMESTER_STATS.map((s) => `
    <div class="semester-stat reveal">
      <span class="sem-num" data-target="${s.num}" data-suffix="${s.suffix}">0${s.suffix}</span>
      <span class="sem-label">${s.label}</span>
    </div>
  `).join("");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      countUp(entry.target);
    });
  }, { threshold: 0.4 });

  grid.querySelectorAll(".sem-num").forEach((el) => observer.observe(el));
}

function countUp(el) {
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix || "";

  if (REDUCED_MOTION) {
    el.textContent = target + suffix;
    return;
  }

  const duration = 1100;
  let start = null;

  function step(ts) {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    // ease-out cubic so it decelerates into the final number
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ── EDUCATION ── */
function renderEducation() {
  const mount = document.getElementById("education-mount");
  if (!mount || typeof EDUCATION === "undefined") return;

  mount.innerHTML = EDUCATION.map((e) => `
    <div class="edu-item reveal">
      <div class="edu-top">
        <span class="edu-school">${e.school}</span>
        <span class="edu-date">${e.date}</span>
      </div>
      <div class="edu-detail">${e.detail}</div>
      <div class="edu-place">${e.place}</div>
      ${e.extra ? `<div class="edu-extra">${e.extra}</div>` : ""}
    </div>
  `).join("");
}

/* ── EXPERIENCE ── */
function renderExperience() {
  const mount = document.getElementById("experience-mount");
  if (!mount || typeof EXPERIENCE === "undefined") return;

  mount.innerHTML = EXPERIENCE.map((x) => `
    <article class="exp-card reveal">
      <div class="exp-rail" aria-hidden="true"></div>
      <div class="exp-body">
        <div class="exp-top">
          <h3 class="exp-role">${x.role}</h3>
          <span class="exp-date">${x.date}</span>
        </div>
        <div class="exp-org">${x.org}</div>
        <div class="exp-place">${x.place}</div>
        <p class="exp-summary">${x.summary}</p>
        <ul class="exp-points">
          ${x.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
        <div class="project-tags">
          ${x.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

/* ── RESEARCH SPOTLIGHT ── */
function renderResearch() {
  const mount = document.getElementById("research-mount");
  if (!mount || typeof RESEARCH === "undefined") return;

  mount.innerHTML = `
    <div class="research-head reveal">
      <h3 class="research-title">${RESEARCH.title}</h3>
      <div class="research-venue">${RESEARCH.venue}</div>
      <div class="research-date">${RESEARCH.date}</div>
    </div>
    <div class="research-grid">
      ${RESEARCH.blocks.map((b) => `
        <div class="research-block reveal rb-${b.key}">
          <div class="rb-label">${b.label}</div>
          <p class="rb-text">${b.text}</p>
        </div>
      `).join("")}
    </div>
  `;
}

/* ── RENDER PROJECTS ── */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.map((p) => {
    let badgeHTML = "";
    if (p.badge === "conference") {
      badgeHTML = `<div class="metric-badge conference">${p.metric}</div>`;
    } else if (p.badge === "demo") {
      badgeHTML = `<div class="metric-badge demo">${p.metric}</div>`;
    } else if (p.metric) {
      badgeHTML = `<div class="metric-badge accuracy">${p.metric}</div>`;
    } else if (p.status === "in-progress") {
      badgeHTML = `<div class="metric-badge wip">Work in progress</div>`;
    }

    const links = [];
    if (p.github) {
      links.push(`<a href="${p.github}" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>`);
    }
    if (p.demo) {
      links.push(`<a href="${p.demo}" target="_blank" rel="noopener" class="project-link demo-link">Live demo ↗</a>`);
    }
    const linkHTML = links.length
      ? `<span class="project-links">${links.join("")}</span>`
      : `<span class="project-link disabled">Unreleased</span>`;

    return `
    <article class="project-card reveal${p.status === "in-progress" ? " wip-card" : ""}">
      <div class="project-top">
        <span class="project-date">${p.date}</span>
        ${linkHTML}
      </div>
      ${badgeHTML}
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <ul class="project-highlights">
        ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </article>`;
  }).join("");
}

/* ── RENDER CONCEPTS ── */
function renderConcepts() {
  const mount = document.getElementById("concepts-mount");
  if (!mount || typeof CONCEPTS === "undefined") return;

  mount.innerHTML = CONCEPTS.map((c) => `
    <article class="concept-card reveal">
      <div class="concept-n">${c.n}</div>
      <div class="concept-body">
        <h3 class="concept-title">${c.title}</h3>
        <div class="concept-shift">
          <div class="shift-col before">
            <span class="shift-label">Before</span>
            <p>${c.before}</p>
          </div>
          <div class="shift-arrow" aria-hidden="true">→</div>
          <div class="shift-col now">
            <span class="shift-label">Now</span>
            <p>${c.now}</p>
          </div>
        </div>
        <div class="concept-example">↳ ${c.example}</div>
      </div>
    </article>
  `).join("");
}

/* ── RENDER QUICK SHIFTS ── */
function renderShifts() {
  const mount = document.getElementById("shifts-mount");
  if (!mount || typeof SHIFTS === "undefined") return;

  mount.innerHTML = SHIFTS.map((s) => `
    <li class="shift-row">
      <span class="sr-before">${s.before}</span>
      <span class="sr-arrow" aria-hidden="true">→</span>
      <span class="sr-now">${s.now}</span>
    </li>
  `).join("");
}

/* ── RENDER JOURNEY TIMELINE ── */
function renderJourney() {
  const mount = document.getElementById("journey-mount");
  if (mount && typeof JOURNEY !== "undefined") {
    mount.innerHTML = JOURNEY.map((j, i) => `
      <div class="tl-item reveal${i === JOURNEY.length - 1 ? " tl-now" : ""}">
        <span class="tl-dot" aria-hidden="true"></span>
        <div class="tl-when">${j.when}</div>
        <div class="tl-body">
          <div class="tl-what">${j.what}</div>
          <p class="tl-detail">${j.detail}</p>
        </div>
      </div>
    `).join("");
  }

  const cap = document.getElementById("journey-caption");
  if (cap && typeof JOURNEY_CAPTION !== "undefined") {
    cap.textContent = JOURNEY_CAPTION;
  }
}

/* ── RENDER TAKEAWAYS ── */
function renderTakeaways() {
  const mount = document.getElementById("takeaways-mount");
  if (!mount || typeof TAKEAWAYS === "undefined") return;

  mount.innerHTML = TAKEAWAYS.map((t) => `
    <div class="takeaway-card reveal tk-${t.kind}">
      <span class="tk-icon" aria-hidden="true">${t.icon}</span>
      <div class="tk-label">${t.label}</div>
      <p class="tk-text">${t.text}</p>
    </div>
  `).join("");
}

/* ── RENDER FIELD NOTES ── */
function renderFieldNotes() {
  const mount = document.getElementById("field-notes-mount");
  if (!mount || typeof FIELD_NOTES === "undefined") return;

  mount.innerHTML = `
    <div class="fn-scroll">
      <table class="fn-table">
        <thead>
          <tr>${FIELD_NOTES.columns.map((c) => `<th>${c}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${FIELD_NOTES.rows.map((r) => `
            <tr>${r.map((cell, i) => `<td${i === 0 ? ' class="fn-model"' : ""}>${cell}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <p class="fn-caption">${FIELD_NOTES.caption}</p>
  `;
}

/* ── RENDER SKILLS ── */
function renderSkills() {
  const wrapper = document.getElementById("skills-wrapper");
  if (!wrapper || typeof SKILLS === "undefined") return;

  wrapper.innerHTML = SKILLS.map((group) => `
    <div class="skill-group reveal">
      <div class="skill-group-label">${group.group}</div>
      <div class="skill-pills">
        ${group.items.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ── RENDER ACHIEVEMENTS ── */
function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  if (!grid || typeof ACHIEVEMENTS === "undefined") return;

  grid.innerHTML = ACHIEVEMENTS.map((a) => `
    <div class="achievement-card reveal">
      <span class="ach-icon">${a.icon}</span>
      <div class="ach-title">${a.title}</div>
      <p class="ach-desc">${a.desc}</p>
    </div>
  `).join("");
}

/* ── RENDER NOW & NEXT ── */
function renderNowNext() {
  const mount = document.getElementById("nownext-mount");
  if (mount && typeof NOW_NEXT !== "undefined") {
    mount.innerHTML = NOW_NEXT.map((col) => `
      <div class="nownext-card reveal nn-${col.accent}">
        <div class="nn-label">${col.label}</div>
        <ul class="nn-list">
          ${col.items.map((i) => `<li>${i}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  const quote = document.getElementById("closing-quote");
  if (quote && typeof CLOSING_QUOTE !== "undefined") {
    quote.innerHTML = `<span class="quote-mark">"</span>${CLOSING_QUOTE}<span class="quote-mark">"</span>
      <cite>— what I want from next semester</cite>`;
  }
}

/* ── INTERSECTION OBSERVER ── */
function initReveal() {
  if (REDUCED_MOTION) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}

/* ── TERMINAL TYPEWRITER ── */
function typewriterJSON() {
  const jsonEl = document.querySelector(".json-block");
  if (!jsonEl) return;

  const fullText = jsonEl.textContent;
  if (REDUCED_MOTION) return;

  jsonEl.textContent = "";
  let i = 0;

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    const interval = setInterval(() => {
      jsonEl.textContent += fullText[i];
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 12);
  }, { threshold: 0.35 });

  observer.observe(jsonEl);
}

/* ── SMOOTH SCROLL ── */
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (href === "#") return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({
    behavior: REDUCED_MOTION ? "auto" : "smooth",
    block: "start",
  });
});

/* ── ACTIVE NAV HIGHLIGHT ── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active-link", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => observer.observe(s));
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  renderSemesterStats();
  renderEducation();
  renderExperience();
  renderResearch();
  renderProjects();
  renderConcepts();
  renderShifts();
  renderFieldNotes();
  renderJourney();
  renderSkills();
  renderAchievements();
  renderNowNext();
  renderTakeaways();
  initActiveNav();
  requestAnimationFrame(() => {
    initReveal();
    typewriterJSON();
  });
});
