(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const storage = {
    get(key) {
      try { return window.localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); } catch { /* stockage indisponible */ }
    },
  };

  /* ---------- Vérification de l'âge ---------- */

  const age = document.getElementById("age");
  const AGE_KEY = "vapelite-age-ok";

  if (age && storage.get(AGE_KEY) !== "1") {
    age.hidden = false;
    document.body.classList.add("is-locked");
    age.querySelector("[data-age='yes']").focus();

    age.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-age]")?.dataset.age;
      if (choice === "yes") {
        storage.set(AGE_KEY, "1");
        age.hidden = true;
        document.body.classList.remove("is-locked");
      } else if (choice === "no") {
        age.querySelector(".age__actions").hidden = true;
        age.querySelector(".age__denied").hidden = false;
      }
    });
  }

  /* ---------- En-tête et menu mobile ---------- */

  const header = document.getElementById("header");
  const burger = document.querySelector(".burger");
  const nav = document.getElementById("nav");

  const onScrollHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  const setNav = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    nav.classList.toggle("is-open", open);
  };
  burger.addEventListener("click", () => setNav(burger.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setNav(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNav(false);
  });

  /* ---------- Bannière : slider ---------- */

  const hero = document.querySelector(".hero");
  const slides = [...hero.querySelectorAll(".slide")];
  const dots = [...hero.querySelectorAll(".hero__dots button")];
  const SLIDE_MS = 6000;
  let current = 0;
  let timer = null;

  hero.style.setProperty("--slide-ms", `${SLIDE_MS}ms`);

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.querySelectorAll("a, button").forEach((el) => { el.tabIndex = active ? 0 : -1; });
    });
    dots.forEach((dot, i) => dot.setAttribute("aria-selected", String(i === current)));
    restart();
  };

  const restart = () => {
    clearTimeout(timer);
    if (reduceMotion) return;
    // Relance l'animation de la barre de progression
    hero.classList.remove("is-playing");
    void hero.offsetWidth;
    hero.classList.add("is-playing");
    timer = setTimeout(() => show(current + 1), SLIDE_MS);
  };

  const pause = () => {
    clearTimeout(timer);
    hero.classList.add("is-paused");
  };
  const resume = () => {
    hero.classList.remove("is-paused");
    restart();
  };

  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
  hero.querySelectorAll(".hero__arrow").forEach((arrow) => {
    arrow.addEventListener("click", () => show(current + Number(arrow.dataset.dir)));
  });
  hero.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") pause(); });
  hero.addEventListener("pointerleave", (event) => { if (event.pointerType === "mouse") resume(); });
  hero.addEventListener("focusin", pause);
  hero.addEventListener("focusout", resume);
  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : resume()));

  // Balayage sur mobile
  let touchX = null;
  hero.addEventListener("touchstart", (event) => { touchX = event.touches[0].clientX; }, { passive: true });
  hero.addEventListener("touchend", (event) => {
    if (touchX === null) return;
    const dx = event.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  show(0);

  // Légère parallaxe des appareils qui suit la souris
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.querySelectorAll("[data-parallax]").forEach((stage) => {
        stage.style.setProperty("--px", `${(x * 24).toFixed(1)}px`);
        stage.style.setProperty("--py", `${(y * 16).toFixed(1)}px`);
      });
    });
  }

  /* ---------- Gamme : filtres et coloris ---------- */

  const chips = [...document.querySelectorAll(".chip")];
  const cards = [...document.querySelectorAll(".card")];

  const filter = (cat) => {
    chips.forEach((chip) => {
      const active = chip.dataset.filter === cat;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      const visible = cat === "all" || card.dataset.cat === cat;
      const wasHidden = card.hidden;
      card.hidden = !visible;
      if (visible && wasHidden) {
        card.classList.remove("is-entering");
        void card.offsetWidth;
        card.classList.add("is-entering");
      }
    });
  };

  chips.forEach((chip) => chip.addEventListener("click", () => filter(chip.dataset.filter)));
  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => filter(link.dataset.filterLink));
  });

  document.querySelectorAll(".swatches").forEach((group) => {
    const card = group.closest(".card");
    const device = card.querySelector(".card__visual .device");
    group.addEventListener("click", (event) => {
      const swatch = event.target.closest("button");
      if (!swatch) return;
      group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-checked", String(b === swatch)));
      device.style.setProperty("--body", swatch.dataset.body);
      card.style.setProperty("--tint", swatch.dataset.tint);
    });
  });

  /* ---------- Bien choisir : animation liée au défilement ---------- */

  const spotlight = document.querySelector(".spotlight");
  const spotDevice = spotlight.querySelector(".spotlight__device");
  const feats = [...spotlight.querySelectorAll(".feat")];
  const looks = [
    { body: "#e9ecf1", liquid: "#ff7a59", accent: "#39d0ff", glow: "rgba(0, 47, 167, 0.9)" },
    { body: "#1d2027", liquid: "#3ddc97", accent: "#3ddc97", glow: "rgba(61, 220, 151, 0.7)" },
    { body: "#ff6b5b", liquid: "#ffb000", accent: "#ffffff", glow: "rgba(255, 150, 110, 0.75)" },
    { body: "#b69cff", liquid: "#8b5cf6", accent: "#ffffff", glow: "rgba(160, 120, 255, 0.8)" },
  ];
  let step = -1;
  let ticking = false;

  const updateSpotlight = () => {
    ticking = false;
    const rect = spotlight.getBoundingClientRect();
    const total = spotlight.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -rect.top / total));
    spotlight.style.setProperty("--p", p.toFixed(3));

    const next = Math.min(feats.length - 1, Math.floor(p * feats.length));
    if (next !== step) {
      step = next;
      feats.forEach((feat, i) => feat.classList.toggle("is-active", i === step));
      const look = looks[step];
      spotDevice.style.setProperty("--body", look.body);
      spotDevice.style.setProperty("--liquid", look.liquid);
      spotDevice.style.setProperty("--accent", look.accent);
      spotlight.style.setProperty("--glow", look.glow);
    }
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateSpotlight);
    }
  }, { passive: true });
  window.addEventListener("resize", updateSpotlight);
  updateSpotlight();

  /* ---------- Photo de l'intérieur : léger zoom au défilement ---------- */

  const inside = document.querySelector(".inside");
  if (inside && !reduceMotion) {
    const zoom = () => {
      const rect = inside.getBoundingClientRect();
      const z = 1 - Math.min(1, Math.max(0, rect.bottom / (window.innerHeight + rect.height)));
      inside.style.setProperty("--z", z.toFixed(3));
    };
    window.addEventListener("scroll", () => requestAnimationFrame(zoom), { passive: true });
    zoom();
  }

  /* ---------- Apparition au défilement (en cascade) ---------- */

  const items = [...document.querySelectorAll(".reveal")];
  items.forEach((item) => {
    const siblings = [...item.parentElement.children].filter((el) => el.classList.contains("reveal"));
    item.style.setProperty("--d", `${Math.min(siblings.indexOf(item), 6) * 0.08}s`);
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add("is-visible"));
  }

  /* ---------- Année du footer ---------- */

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
