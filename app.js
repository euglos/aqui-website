/* ===================================================================
   Aquí — App-Logik: Menü-Rendering, Navigation, Reservierung
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Menü rendern ---------- */
  function renderItem(item) {
    const tag = item.tag ? `<span class="mi-tag">${esc(item.tag)}</span>` : "";
    let price = "";
    if (item.price && item.price2) {
      price = `<span class="mi-price">${esc(item.price)} <span class="two">/ ${esc(item.price2)}</span></span>`;
    } else if (item.price) {
      price = `<span class="mi-price">${esc(item.price)}</span>`;
    } else {
      price = `<span class="mi-price"></span>`;
    }
    const desc = item.desc ? `<p class="mi-desc">${esc(item.desc)}</p>` : "";
    const opts = item.options ? `<p class="mi-options">${esc(item.options)}</p>` : "";
    return `<div class="menu-item">
        <span class="mi-name">${esc(item.name)}${tag}</span>
        ${price}${desc}${opts}
      </div>`;
  }

  function renderCategory(cat) {
    const note = cat.note ? `<span class="menu-cat-note">${esc(cat.note)}</span>` : "";
    const items = cat.items.map(renderItem).join("");
    return `<section class="menu-cat reveal">
        <div class="menu-cat-head"><h3>${esc(cat.title)}</h3>${note}</div>
        ${items}
      </section>`;
  }

  function renderMenu(targetId, data) {
    const el = document.getElementById(targetId);
    if (el && Array.isArray(data)) el.innerHTML = data.map(renderCategory).join("");
  }

  if (typeof FOOD_MENU !== "undefined")   renderMenu("food-menu", FOOD_MENU);
  if (typeof DRINKS_MENU !== "undefined") renderMenu("drinks-menu", DRINKS_MENU);

  /* ---------- Jahr im Footer ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile Navigation ---------- */
  const toggle = $(".nav-toggle");
  const mobileNav = $(".nav-mobile");
  if (toggle && mobileNav) {
    const close = () => {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", mobileNav).forEach((a) => a.addEventListener("click", close));
  }

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach((el) => io.observe(el));
  } else {
    $$(".reveal").forEach((el) => el.classList.add("in"));
  }

  /* ---------- Reservierungsformular ---------- */
  const form = $("#reserveForm");
  if (!form) return;

  const note = $("#formNote");

  // Mindestdatum = heute
  const dateInput = $("#r-date");
  if (dateInput) {
    const today = new Date();
    const iso = today.toISOString().split("T")[0];
    dateInput.min = iso;
  }

  const setError = (field, msg) => {
    const wrap = field.closest(".field");
    const small = $(`.error[data-for="${field.id}"]`);
    if (wrap) wrap.classList.toggle("invalid", !!msg);
    if (small) small.textContent = msg || "";
  };

  const validators = {
    "r-name":  (v) => v.trim().length >= 2 ? "" : "Bitte gib deinen Namen ein.",
    "r-date":  (v) => {
      if (!v) return "Bitte wähle ein Datum.";
      const sel = new Date(v + "T00:00:00");
      const today = new Date(); today.setHours(0, 0, 0, 0);
      return sel >= today ? "" : "Das Datum liegt in der Vergangenheit.";
    },
    "r-time":  (v) => v ? "" : "Bitte wähle eine Uhrzeit.",
    "r-guests":(v) => {
      if (v.trim() === "") return "Bitte gib die Personenzahl ein.";
      const n = Number(v);
      if (!Number.isInteger(n) || n < 1) return "Bitte gib eine Zahl von 1 bis 8 ein.";
      if (n > 8) return "Reservierungen ab 8 Personen bitte telefonisch: +43 676 9479912.";
      return "";
    },
    "r-phone": (v) => /^[+\d][\d\s/()-]{6,}$/.test(v.trim()) ? "" : "Bitte gib eine gültige Telefonnummer ein.",
    "r-email": (v) => v.trim() === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Bitte gib eine gültige E-Mail ein."
  };

  // Live-Validierung beim Verlassen eines Feldes
  Object.keys(validators).forEach((id) => {
    const f = document.getElementById(id);
    if (!f) return;
    // Personenzahl sofort prüfen, damit der Telefon-Hinweis direkt erscheint
    const liveAlways = id === "r-guests";
    f.addEventListener("blur", () => setError(f, validators[id](f.value)));
    f.addEventListener("input", () => {
      const wrap = f.closest(".field");
      if (liveAlways || (wrap && wrap.classList.contains("invalid"))) {
        setError(f, validators[id](f.value));
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "";
    note.className = "form-note";

    let firstInvalid = null;
    Object.keys(validators).forEach((id) => {
      const f = document.getElementById(id);
      if (!f) return;
      const msg = validators[id](f.value);
      setError(f, msg);
      if (msg && !firstInvalid) firstInvalid = f;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      note.textContent = "Bitte überprüfe die markierten Felder.";
      note.classList.add("err");
      return;
    }

    const data = {
      name:   $("#r-name").value.trim(),
      date:   $("#r-date").value,
      time:   $("#r-time").value,
      guests: $("#r-guests").value,
      phone:  $("#r-phone").value.trim(),
      email:  $("#r-email").value.trim(),
      notes:  $("#r-notes").value.trim()
    };

    /* --------------------------------------------------------------
       Ohne Backend: wir öffnen eine vorausgefüllte E-Mail an das
       Restaurant. Für echten Online-Versand hier später einen
       Fetch-Aufruf an die Buchungs-API / einen Service einsetzen.
       -------------------------------------------------------------- */
    const dateFmt = new Date(data.date + "T00:00:00")
      .toLocaleDateString("de-AT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });

    const subject = `Tischreservierung – ${data.name} (${data.guests} Pers.)`;
    const body =
      `Hallo Aquí-Team,\n\nich möchte einen Tisch reservieren:\n\n` +
      `Name: ${data.name}\n` +
      `Datum: ${dateFmt}\n` +
      `Uhrzeit: ${data.time} Uhr\n` +
      `Personen: ${data.guests}\n` +
      `Telefon: ${data.phone}\n` +
      (data.email ? `E-Mail: ${data.email}\n` : "") +
      (data.notes ? `Anmerkungen: ${data.notes}\n` : "") +
      `\nVielen Dank!`;

    const mailto = `mailto:office@aqui-restaurant.at?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    note.innerHTML =
      `¡Gracias, ${esc(data.name)}! Deine Anfrage für <strong>${esc(dateFmt)}</strong> um ` +
      `<strong>${esc(data.time)} Uhr</strong> (${esc(data.guests)} Pers.) ist vorbereitet. ` +
      `Dein E-Mail-Programm öffnet sich zum Absenden – oder ruf uns an unter ` +
      `<a href="tel:+436769479912">+43 676 9479912</a>.`;
    note.classList.add("ok");

    window.location.href = mailto;
    form.reset();
  });
})();
