// ============================================================
// NAVDEEP SINGH — Portfolio JS
// ============================================================

/* ── CURSOR ── */
const cursor = document.getElementById("cursor");
const trail = document.getElementById("cursor-trail");

let trailX = 0, trailY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
  cursorX = e.clientX;
  cursorY = e.clientY;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
});

function animateTrail() {
  trailX += (cursorX - trailX) * 0.14;
  trailY += (cursorY - trailY) * 0.14;
  trail.style.left = trailX + "px";
  trail.style.top = trailY + "px";
  requestAnimationFrame(animateTrail);
}
animateTrail();

document.querySelectorAll("a, button, .project-card, .skill-pill, .contact-card, .achievement-card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    trail.style.transform = "translate(-50%, -50%) scale(0.6)";
    trail.style.opacity = "0.5";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    trail.style.transform = "translate(-50%, -50%) scale(1)";
    trail.style.opacity = "1";
  });
});

/* ── NAVBAR ── */
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

/* ── RENDER PROJECTS ── */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.map((p) => {
    let badgeHTML = "";
    if (p.badge === "conference") {
      badgeHTML = `<div class="metric-badge conference">${p.metric}</div>`;
    } else if (p.badge === "accuracy" && p.metric) {
      badgeHTML = `<div class="metric-badge accuracy">${p.metric}</div>`;
    } else if (p.metric) {
      badgeHTML = `<div class="metric-badge accuracy">${p.metric}</div>`;
    }

    return `
    <article class="project-card reveal">
      <div class="project-top">
        <span class="project-date">${p.date}</span>
        <a href="${p.github}" target="_blank" class="project-link">GitHub ↗</a>
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

/* ── INTERSECTION OBSERVER ── */
function initReveal() {
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
  jsonEl.textContent = "";
  let i = 0;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect();
      const interval = setInterval(() => {
        jsonEl.textContent += fullText[i];
        i++;
        if (i >= fullText.length) clearInterval(interval);
      }, 16);
    }
  }, { threshold: 0.5 });

  observer.observe(jsonEl);
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ── ACTIVE NAV HIGHLIGHT ── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active-link", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach((s) => activeSectionObserver.observe(s));

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderAchievements();
  setTimeout(() => {
    initReveal();
    typewriterJSON();
  }, 50);
});
