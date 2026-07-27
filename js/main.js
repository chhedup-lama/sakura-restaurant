/* Sakura Family Restaurant — site interactions */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const vt = (fn) => (document.startViewTransition ? document.startViewTransition(fn) : fn());

  /* ---------------- Footer year ---------------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Theme toggle ---------------- */
  const themeToggle = $("#themeToggle");
  const root = document.documentElement;
  function currentTheme() { return root.getAttribute("data-theme") === "light" ? "light" : "dark"; }
  function applyThemeLabel() {
    const isLight = currentTheme() === "light";
    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  }
  if (themeToggle) {
    applyThemeLabel();
    themeToggle.addEventListener("click", () => {
      const next = currentTheme() === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("sakura-theme", next); } catch (e) {}
      applyThemeLabel();
    });
  }

  /* ---------------- Header scroll state ---------------- */
  const header = $("#siteHeader");
  const toTopBtn = $("#toTop");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    toTopBtn.classList.toggle("is-visible", y > 700);
    mobileCta.classList.toggle("is-visible", y > window.innerHeight * 0.6);
  };

  /* ---------------- Mobile nav ---------------- */
  const menuToggle = $("#menuToggle");
  const mobileNav = $("#mobileNav");
  const mobileScrim = $("#mobileScrim");
  const mobileCta = $("#mobileCta");

  function setMobileNav(open) {
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
    mobileScrim.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  menuToggle.addEventListener("click", () => setMobileNav(!mobileNav.classList.contains("is-open")));
  mobileScrim.addEventListener("click", () => setMobileNav(false));
  $$("[data-mobile]").forEach((a) => a.addEventListener("click", () => setMobileNav(false)));

  /* ---------------- Active nav link on scroll ---------------- */
  const navLinks = $$("[data-nav]");
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === id));
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((s) => navObserver.observe(s));

  /* ---------------- Scroll reveal ---------------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$("[data-reveal], [data-reveal-list]").forEach((el) => revealObserver.observe(el));

  /* ---------------- Open / closed status (Asia/Kolkata) ---------------- */
  function updateStatus() {
    const pill = $("#statusPill");
    const text = $("#statusText");
    if (!pill || !text) return;
    try {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: false
      }).formatToParts(new Date());
      const hour = parseInt(parts.find((p) => p.type === "hour").value, 10);
      const minute = parseInt(parts.find((p) => p.type === "minute").value, 10);
      const minutesNow = hour * 60 + minute;
      const open = 11 * 60;
      const close = 21 * 60;
      const isOpen = minutesNow >= open && minutesNow < close;
      pill.classList.toggle("is-closed", !isOpen);
      text.textContent = isOpen ? "Open now · till 9 PM" : "Closed · opens 11 AM";
    } catch (e) {
      text.textContent = "Open daily 11 AM–9 PM";
    }
  }
  updateStatus();

  /* ---------------- Petals ---------------- */
  const petalHost = $("#petals");
  if (petalHost) {
    const count = window.innerWidth < 640 ? 10 : 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      const left = Math.random() * 100;
      const dur = 9 + Math.random() * 9;
      const delay = Math.random() * -18;
      const size = 8 + Math.random() * 10;
      const drift = (Math.random() - 0.5) * 160;
      p.style.left = left + "%";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = dur + "s";
      p.style.animationDelay = delay + "s";
      p.style.setProperty("--drift", drift + "px");
      petalHost.appendChild(p);
    }
  }

  /* ---------------- Stat counters ---------------- */
  const statEls = $$(".stat-num");
  const statObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  statEls.forEach((el) => statObserver.observe(el));

  /* ---------------- Render menu ---------------- */
  const menuGrid = $("#menuGrid");
  function dishCard(item) {
    const badge = item.badge ? `<span class="dish-badge">${item.badge}</span>` : "";
    const serving = item.serving ? `<span class="dish-serving">${item.serving}</span>` : "";
    const variants = item.variants
      .map((v) => `<li><span>${v.name}</span><span>₹${v.price}</span></li>`)
      .join("");
    return `
      <article class="dish-card" data-section="${item.section}">
        <div class="dish-media">
          ${badge}
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="300">
        </div>
        <div class="dish-body">
          <div class="dish-title-row"><h3>${item.name}</h3>${serving}</div>
          <p class="dish-desc">${item.description}</p>
          <ul class="dish-variants">${variants}</ul>
        </div>
      </article>`;
  }
  if (menuGrid && typeof MENU_DATA !== "undefined") {
    menuGrid.innerHTML = MENU_DATA.map(dishCard).join("");
  }

  /* ---------------- Menu filters ---------------- */
  const chips = $$(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      vt(() => {
        chips.forEach((c) => {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-selected", String(c === chip));
        });
        const filter = chip.dataset.filter;
        $$(".dish-card", menuGrid).forEach((card) => {
          const match = filter === "all" || card.dataset.section === filter;
          card.style.display = match ? "" : "none";
        });
      });
    });
  });

  /* ---------------- Gallery + Lightbox ---------------- */
  const galleryGrid = $("#galleryGrid");
  let galleryImages = [];
  if (galleryGrid && typeof MENU_DATA !== "undefined") {
    galleryImages = MENU_DATA.map((m) => ({ src: m.image, alt: m.name }));
    galleryGrid.innerHTML = galleryImages
      .map(
        (g, i) => `
      <div class="gallery-item" data-index="${i}">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" width="300" height="300">
        <span class="gallery-cap">${g.alt}</span>
      </div>`
      )
      .join("");
  }

  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[index].src;
    lightboxImg.alt = galleryImages[index].alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function showRelative(delta) {
    currentIndex = (currentIndex + delta + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
  }

  if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (item) openLightbox(parseInt(item.dataset.index, 10));
    });
  }
  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightboxPrev")?.addEventListener("click", () => showRelative(-1));
  $("#lightboxNext")?.addEventListener("click", () => showRelative(1));
  lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showRelative(-1);
    if (e.key === "ArrowRight") showRelative(1);
  });

  /* ---------------- Reviews marquee ---------------- */
  const marqueeTrack = $("#marqueeTrack");
  if (marqueeTrack && typeof REVIEWS_DATA !== "undefined") {
    const cards = REVIEWS_DATA.map(
      (r) => `
      <article class="review-card">
        <span class="stars" aria-hidden="true">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
        <p>“${r.quote}”</p>
        <div class="review-who">
          <span class="review-avatar">${r.name.trim().charAt(0)}</span>
          <div>
            <strong>${r.name}</strong>
            <span>${r.time || "Google review"}</span>
          </div>
        </div>
      </article>`
    ).join("");
    // duplicate for seamless infinite scroll
    marqueeTrack.innerHTML = cards + cards;
  }

  /* ---------------- Back to top ---------------- */
  toTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
