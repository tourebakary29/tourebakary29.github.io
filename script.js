/**
 * script.js
 * Vanilla JS behavior for Bakary TOURE's portfolio.
 * Relies on `translations` and `sharedData` from translations.js.
 */

(function () {
  "use strict";

  const STORAGE_LANG_KEY = "bt-portfolio-lang";
  const STORAGE_THEME_KEY = "bt-portfolio-theme";

  let currentLang = localStorage.getItem(STORAGE_LANG_KEY) || "fr";
  let activeFilter = "all";
  let typedInstance = null;
  let skillsObserver = null;
  let sliderIndex = 0;
  let sliderAutoplayTimer = null;

  /** Resolve a dot-path (e.g. "hero.roles") against the current language dictionary. */
  function t(path) {
    return path
      .split(".")
      .reduce((obj, key) => (obj && key in obj ? obj[key] : undefined), translations[currentLang]);
  }

  /* ---------------------------------------------------------
     Theme (light / dark)
     --------------------------------------------------------- */
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    applyTheme(theme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME_KEY, theme);
    const icon = document.querySelector("#darkModeToggle i");
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  }

  /* ---------------------------------------------------------
     Language / translations
     --------------------------------------------------------- */
  function applyStaticTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t("meta.title");

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    // Buttons / icons whose accessible label isn't a data-i18n text node
    setLabel("#darkModeToggle", t("misc.toggleDarkMode"));
    setLabel("#langToggle", t("misc.toggleLang"));
    setLabel("#backToTop", t("misc.backToTop"));
    setLabel(".whatsapp-float", t("misc.whatsappLabel"));
    setLabel("#sliderPrev", t("misc.prevSlide"));
    setLabel("#sliderNext", t("misc.nextSlide"));
    setLabel("#menuToggle", isMenuOpen() ? t("misc.closeMenu") : t("misc.openMenu"));

    // Active language indicator in the toggle
    document.querySelector(".lang-fr")?.classList.toggle("active", currentLang === "fr");
    document.querySelector(".lang-en")?.classList.toggle("active", currentLang === "en");
  }

  function setLabel(selector, value) {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute("aria-label", value);
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    applyStaticTranslations();
    renderAboutStats();
    renderProjects();
    renderServices();
    renderTimeline();
    renderTestimonials();
    initTyped();
  }

  /* ---------------------------------------------------------
     About stats
     --------------------------------------------------------- */
  function renderAboutStats() {
    const container = document.getElementById("aboutStats");
    if (!container) return;
    const stats = t("about.stats") || [];
    container.innerHTML = stats
      .map(
        (s) => `
        <div class="about-stat">
          <span class="stat-value">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------
     Skills (language-independent names, animated bars)
     --------------------------------------------------------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;
    grid.innerHTML = sharedData.skills
      .map(
        (skill) => `
        <div class="skill-card">
          <div class="skill-card-head">
            <span class="skill-name"><i class="fa-solid ${skill.icon}" aria-hidden="true"></i>${skill.name}</span>
            <span class="skill-percent">${skill.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${skill.level}"></div>
          </div>
        </div>`
      )
      .join("");

    if (skillsObserver) skillsObserver.disconnect();
    skillsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              bar.style.width = bar.getAttribute("data-level") + "%";
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    skillsObserver.observe(grid);
  }

  /* ---------------------------------------------------------
     Projects (filterable grid)
     --------------------------------------------------------- */
  function renderFilterBar() {
    const bar = document.getElementById("filterBar");
    if (!bar) return;
    const tags = ["all", ...sharedData.filterTags];
    bar.innerHTML = tags
      .map((tag) => {
        const label = tag === "all" ? t("projects.filters.all") : tag;
        const value = tag === "all" ? "all" : tag;
        return `<button type="button" class="filter-btn${
          value === activeFilter ? " active" : ""
        }" data-filter="${value}">${label}</button>`;
      })
      .join("");

    bar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.getAttribute("data-filter");
        bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        applyProjectFilter();
      });
    });
  }

  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    const viewLabel = t("projects.viewProject");

    grid.innerHTML = sharedData.projects
      .map((project) => {
        const text = t(`projects.items.${project.id}`) || {};
        return `
        <article class="project-card" data-tags="${project.tags.join("|")}">
          <div class="project-thumb">
            <img src="${project.image}" alt="${text.title || ""}" loading="lazy" />
          </div>
          <div class="project-body">
            <h3>${text.title || ""}</h3>
            <p>${text.description || ""}</p>
            <div class="project-tags">
              ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
            </div>
            <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
              ${viewLabel} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>`;
      })
      .join("");

    renderFilterBar();
    applyProjectFilter();
  }

  function applyProjectFilter() {
    document.querySelectorAll("#projectsGrid .project-card").forEach((card) => {
      const tags = card.getAttribute("data-tags").split("|");
      const show = activeFilter === "all" || tags.includes(activeFilter);
      card.classList.toggle("hidden", !show);
    });
  }

  /* ---------------------------------------------------------
     Services
     --------------------------------------------------------- */
  function renderServices() {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    const items = t("services.items") || [];
    grid.innerHTML = items
      .map(
        (service) => `
        <div class="service-card">
          <div class="service-icon"><i class="fa-solid ${service.icon}" aria-hidden="true"></i></div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------
     Timeline
     --------------------------------------------------------- */
  function renderTimeline() {
    const list = document.getElementById("timelineList");
    if (!list) return;
    const items = t("timeline.items") || [];
    list.innerHTML = items
      .map(
        (item, index) => `
        <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 60}">
          <span class="timeline-date">${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>`
      )
      .join("");
    if (window.AOS) window.AOS.refreshHard();
  }

  /* ---------------------------------------------------------
     Testimonials slider
     --------------------------------------------------------- */
  function renderTestimonials() {
    const track = document.getElementById("sliderTrack");
    const dots = document.getElementById("sliderDots");
    if (!track || !dots) return;

    const items = t("testimonials.items") || [];

    track.innerHTML = sharedData.testimonials
      .map((person, index) => {
        const text = items[index] || {};
        return `
        <div class="testimonial-card">
          <div class="testimonial-quote-icon"><i class="fa-solid fa-quote-left" aria-hidden="true"></i></div>
          <p class="quote">${text.quote || ""}</p>
          <div class="testimonial-person">
            <img src="${person.photo}" alt="${person.name}" loading="lazy" />
            <div class="testimonial-person-info">
              <div class="t-name">${person.name}</div>
              <div class="t-role">${text.role || ""} — ${person.company}</div>
              <div class="t-country">${person.flag} ${person.country}</div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    dots.innerHTML = sharedData.testimonials
      .map((_, index) => `<button type="button" class="slider-dot${index === 0 ? " active" : ""}" data-index="${index}" aria-label="${index + 1}"></button>`)
      .join("");

    dots.querySelectorAll(".slider-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.getAttribute("data-index"), 10));
        resetAutoplay();
      });
    });

    sliderIndex = 0;
    updateSliderPosition();
  }

  function updateSliderPosition() {
    const track = document.getElementById("sliderTrack");
    if (!track) return;
    track.style.transform = `translateX(-${sliderIndex * 100}%)`;
    document.querySelectorAll(".slider-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === sliderIndex);
    });
  }

  function goToSlide(index) {
    const total = sharedData.testimonials.length;
    sliderIndex = (index + total) % total;
    updateSliderPosition();
  }

  function nextSlide() {
    goToSlide(sliderIndex + 1);
  }

  function prevSlide() {
    goToSlide(sliderIndex - 1);
  }

  function startAutoplay() {
    sliderAutoplayTimer = setInterval(nextSlide, 6000);
  }

  function resetAutoplay() {
    clearInterval(sliderAutoplayTimer);
    startAutoplay();
  }

  function initSlider() {
    document.getElementById("sliderNext")?.addEventListener("click", () => {
      nextSlide();
      resetAutoplay();
    });
    document.getElementById("sliderPrev")?.addEventListener("click", () => {
      prevSlide();
      resetAutoplay();
    });

    const wrapper = document.getElementById("testimonialSlider");
    wrapper?.addEventListener("mouseenter", () => clearInterval(sliderAutoplayTimer));
    wrapper?.addEventListener("mouseleave", startAutoplay);

    startAutoplay();
  }

  /* ---------------------------------------------------------
     Typed.js hero role text
     --------------------------------------------------------- */
  function initTyped() {
    const el = document.getElementById("typedRole");
    if (!el || typeof Typed === "undefined") return;
    if (typedInstance) typedInstance.destroy();
    typedInstance = new Typed(el, {
      strings: t("hero.roles") || [],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });
  }

  /* ---------------------------------------------------------
     Navbar: scroll shadow + mobile menu
     --------------------------------------------------------- */
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    menuToggle?.addEventListener("click", () => {
      const willOpen = !navLinks.classList.contains("open");
      navLinks.classList.toggle("open", willOpen);
      menuToggle.setAttribute("aria-expanded", String(willOpen));
      menuToggle.setAttribute("aria-label", willOpen ? t("misc.closeMenu") : t("misc.openMenu"));
    });

    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
      });
    });
  }

  function isMenuOpen() {
    return document.getElementById("navLinks")?.classList.contains("open");
  }

  /* ---------------------------------------------------------
     Back to top
     --------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      () => btn.classList.toggle("visible", window.scrollY > 480),
      { passive: true }
    );
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------
     Contact form (Formspree AJAX submission)
     --------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    const submitBtn = document.getElementById("formSubmit");
    if (!form || !status || !submitBtn) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const action = form.getAttribute("action") || "";
      if (action.includes("VOTRE_ID_FORMSPREE")) {
        status.textContent = t("contact.formError");
        status.className = "form-status error";
        return;
      }

      const originalLabel = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>${t("contact.formSending")}</span>`;
      status.textContent = "";
      status.className = "form-status";

      try {
        const response = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          status.textContent = t("contact.formSuccess");
          status.className = "form-status success";
          form.reset();
        } else {
          status.textContent = t("contact.formError");
          status.className = "form-status error";
        }
      } catch (error) {
        status.textContent = t("contact.formError");
        status.className = "form-status error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
      }
    });
  }

  /* ---------------------------------------------------------
     Misc: footer year, loader, language/theme toggle wiring
     --------------------------------------------------------- */
  function initFooterYear() {
    const el = document.getElementById("currentYear");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initLoader() {
    window.addEventListener("load", () => {
      document.getElementById("loader")?.classList.add("hidden");
    });
  }

  function initToggles() {
    document.getElementById("darkModeToggle")?.addEventListener("click", toggleTheme);
    document.getElementById("langToggle")?.addEventListener("click", () => {
      setLanguage(currentLang === "fr" ? "en" : "fr");
    });
  }

  /* ---------------------------------------------------------
     Bootstrap
     --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLoader();
    initFooterYear();
    initNavbar();
    initBackToTop();
    initToggles();
    initContactForm();

    renderSkills();
    applyStaticTranslations();
    renderAboutStats();
    renderProjects();
    renderServices();
    renderTimeline();
    renderTestimonials();
    initSlider();
    initTyped();

    if (window.AOS) {
      window.AOS.init({ duration: 700, once: true, offset: 60 });
    }
  });
})();
