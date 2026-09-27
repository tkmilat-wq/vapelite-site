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

  /* ---------- Bannière : étapes « Bien choisir » ---------- */

  const heroSteps = document.querySelector(".hero-steps");
  if (heroSteps) {
    const STEP_MS = 3000;
    const messages = [...heroSteps.querySelectorAll(".hero-steps__list li")];
    const bars = [...heroSteps.querySelectorAll(".hero-steps__bars span")];
    if (reduceMotion) {
      heroSteps.classList.add("is-static");
      bars.forEach((bar) => bar.classList.add("is-done"));
    } else {
      // Un message à la fois : chacun remplace le précédent, en boucle
      heroSteps.style.setProperty("--step-ms", `${STEP_MS}ms`);
      let step = 0;
      const show = () => {
        const last = messages.length - 1;
        messages.forEach((message, i) => {
          message.classList.toggle("is-active", i === step);
          // En reprenant au début, le dernier message sort lui aussi par le haut
          message.classList.toggle("is-done", i < step || (step === 0 && i === last));
        });
        bars.forEach((bar, i) => {
          bar.classList.toggle("is-active", i === step);
          bar.classList.toggle("is-done", i < step);
        });
      };
      show();
      setInterval(() => {
        step = (step + 1) % messages.length;
        show();
      }, STEP_MS);
    }
  }

  /* ---------- Vidéo de la devanture : chargée à l'approche ---------- */

  document.querySelectorAll("[data-lazy-video]").forEach((video) => {
    const load = () => {
      video.poster = video.dataset.poster;
      if (reduceMotion) return; // affiche seulement l'image
      video.querySelectorAll("source[data-src]").forEach((source) => { source.src = source.dataset.src; });
      video.load();
      video.play().catch(() => {});
    };
    if (!("IntersectionObserver" in window)) { load(); return; }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        load();
      }
    }, { rootMargin: "400px 0px" });
    observer.observe(video);
  });

  /* ---------- Produits phares : coloris ---------- */

  document.querySelectorAll(".swatches").forEach((group) => {
    const card = group.closest(".card");
    const device = card.querySelector(".card__visual .device");
    group.addEventListener("click", (event) => {
      const swatch = event.target.closest("button");
      if (!swatch) return;
      group.querySelectorAll("button").forEach((b) => b.setAttribute("aria-checked", String(b === swatch)));
      card.style.setProperty("--tint", swatch.dataset.tint);
      if (swatch.dataset.img) {
        // Vraie photo du coloris : fondu enchaîné
        const label = card.querySelector(".card__color-name");
        device.classList.add("is-swapping");
        setTimeout(() => {
          device.src = swatch.dataset.img;
          device.alt = device.alt.replace(/coloris .*/, `coloris ${swatch.dataset.name}`);
          if (label) label.textContent = swatch.dataset.name;
          device.classList.remove("is-swapping");
        }, 180);
      } else {
        device.style.setProperty("--body", swatch.dataset.body);
      }
    });
  });

  /* ---------- Collection Vapelite : familles et défilement ---------- */

  const flavorList = document.querySelector(".flavors");
  if (flavorList) {
    const flavors = [...flavorList.querySelectorAll(".flavor")];
    const famChips = [...document.querySelectorAll("[data-fam-filter]")];
    const arrows = [...document.querySelectorAll("[data-scroll]")];

    const updateArrows = () => {
      const max = flavorList.scrollWidth - flavorList.clientWidth - 4;
      arrows.forEach((arrow) => {
        arrow.disabled = Number(arrow.dataset.scroll) < 0 ? flavorList.scrollLeft <= 4 : flavorList.scrollLeft >= max;
      });
    };

    famChips.forEach((chip) => chip.addEventListener("click", () => {
      const fam = chip.dataset.famFilter;
      famChips.forEach((c) => {
        c.classList.toggle("is-active", c === chip);
        c.setAttribute("aria-pressed", String(c === chip));
      });
      flavors.forEach((flavor) => {
        const visible = fam === "all" || flavor.dataset.fam.split(" ").includes(fam);
        const wasHidden = flavor.hidden;
        flavor.hidden = !visible;
        if (visible && wasHidden) {
          flavor.classList.remove("is-entering");
          void flavor.offsetWidth;
          flavor.classList.add("is-entering");
        }
      });
      flavorList.scrollTo({ left: 0, behavior: reduceMotion ? "auto" : "smooth" });
      requestAnimationFrame(updateArrows);
    }));

    arrows.forEach((arrow) => arrow.addEventListener("click", () => {
      const step = flavors.find((f) => !f.hidden)?.offsetWidth || 240;
      flavorList.scrollBy({ left: Number(arrow.dataset.scroll) * (step + 20) * 2, behavior: reduceMotion ? "auto" : "smooth" });
    }));

    flavorList.addEventListener("scroll", () => requestAnimationFrame(updateArrows), { passive: true });
    window.addEventListener("resize", updateArrows);
    updateArrows();
  }

  /* ---------- Avis Google : défilement des cartes ---------- */

  const reviewList = document.querySelector(".reviews__list");
  if (reviewList) {
    const reviewArrows = [...document.querySelectorAll("[data-reviews-scroll]")];
    const updateReviewArrows = () => {
      const max = reviewList.scrollWidth - reviewList.clientWidth - 4;
      reviewArrows.forEach((arrow) => {
        arrow.disabled = Number(arrow.dataset.reviewsScroll) < 0 ? reviewList.scrollLeft <= 4 : reviewList.scrollLeft >= max;
      });
    };
    reviewArrows.forEach((arrow) => arrow.addEventListener("click", () => {
      const card = reviewList.querySelector(".review");
      reviewList.scrollBy({ left: Number(arrow.dataset.reviewsScroll) * ((card?.offsetWidth || 340) + 18), behavior: reduceMotion ? "auto" : "smooth" });
    }));
    reviewList.addEventListener("scroll", () => requestAnimationFrame(updateReviewArrows), { passive: true });
    window.addEventListener("resize", updateReviewArrows);
    updateReviewArrows();
  }

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
