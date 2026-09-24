(() => {
  const root = document.documentElement;
  root.classList.add("js");

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

  /* ---------- Menu ---------- */

  const trigger = document.querySelector(".dot--menu");
  const menu = document.getElementById("menu");

  const setMenu = (open) => {
    trigger.setAttribute("aria-expanded", String(open));
    trigger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    document.body.classList.toggle("is-locked", open);
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add("is-open"));
    } else {
      menu.classList.remove("is-open");
      menu.hidden = true;
    }
  };

  trigger.addEventListener("click", () => setMenu(menu.hidden));
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu.hidden) {
      setMenu(false);
      trigger.focus();
    }
  });

  /* ---------- Apparition au défilement ---------- */

  // Le hero est visible dès le chargement ; le reste apparaît au défilement.
  document.querySelectorAll(".hero .reveal").forEach((item) => {
    requestAnimationFrame(() => item.classList.add("is-visible"));
  });

  const items = document.querySelectorAll(".reveal:not(.hero .reveal)");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add("is-visible"));
  }

  /* ---------- Année du footer ---------- */

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
