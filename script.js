/**
 * ============================================================
 *  DAPUR SEPEKAN — SCRIPT INTERAKTIF
 *  File ini mengatur semua fungsi interaktif:
 *  - Navbar scroll & hamburger menu
 *  - Render konten dari content.js
 *  - Validasi dan submit form
 *  - Popup Thank You & Privacy Policy
 *  - Accordion FAQ
 *  - Animasi scroll
 * ============================================================
 *
 *  CATATAN UNTUK PEMULA:
 *  File ini TIDAK perlu diedit untuk mengubah teks atau konten.
 *  Semua konten dikelola di file content.js.
 *  Edit file ini hanya jika ingin mengubah FUNGSI website.
 * ============================================================
 */

/**
 * DAFTAR FILE GAMBAR YANG SUDAH ADA DI FOLDER assets/
 * ============================================================
 * Tambahkan nama file di sini setelah kamu menaruh gambar di assets/.
 * Script akan menampilkan placeholder langsung tanpa request HTTP
 * untuk file yang TIDAK ada dalam daftar ini.
 *
 * Cara menambah: uncomment baris yang sesuai setelah file ada.
 */
const AVAILABLE_IMAGES = new Set([
  "assets/dapursepekan-logo1.png",          // ✅ Logo — sudah ada
  "assets/hero-Page1-original.png",          // ✅ Foto hero — sudah ada
  "assets/Halal_Indonesia.svg.png",          // ✅ Logo Halal Indonesia — sudah ada
  "assets/logo msg.png",                     // ✅ Badge MSG Free — sudah ada
  "assets/pengawet.png",                     // ✅ Badge No Added Preservatives — sudah ada
  // "assets/hero-product.png",              // ⬜ Tambahkan setelah file ada
  // "assets/favicon.png",                   // ⬜ Tambahkan setelah file ada
]);
// ============================================================
//  KONFIGURASI GOOGLE APPS SCRIPT
//  URL untuk Section 5 — JSON-P via GET
//  Lokasi konfigurasi: baris ini di script.js
//  Ganti hanya jika Apps Script di-redeploy dengan URL baru.
// ============================================================
const SECTION5_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby84Bf0BX39PBcf-OEIpavHpR6DgCn8VY-HnSA2jaYx9grUlcrNODvB-MOEDpoO_-_3/exec";

// Alias agar referensi APPS_SCRIPT_URL lama tidak error
const APPS_SCRIPT_URL = SECTION5_APPS_SCRIPT_URL;


// ============================================================
//  INISIALISASI — Jalankan semua fungsi setelah halaman dimuat
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderContent();        // Isi semua konten dari content.js
  initNavbar();           // Navbar scroll + hamburger
  initFAQ();              // Accordion FAQ
  initForm();             // Validasi dan submit form (form lama, jika masih ada)
  initModals();           // Popup Thank You + Privacy Policy
  initScrollAnimation();  // Animasi muncul saat scroll
  initSection5Form();     // Form Early Access Section 5 (JSON-P)
});


// ============================================================
//  RENDER KONTEN — Mengambil data dari content.js dan mengisi HTML
// ============================================================
function renderContent() {
  renderNavbar();
  renderHero();
  renderChallenges();   // Page 2 — Tantangan Keluarga
  renderHowItWorks();
  renderPackages();
  renderFAQ();
  renderComingSoon();
  renderFooter();
  updatePageMeta();
}

// --- Navbar ---
function renderNavbar() {
  const { navbar, brand, images } = CONTENT;

  // Logo
  const logoContainer = document.getElementById("navbar-logo");
  if (logoContainer) {
    logoContainer.innerHTML = createLogoHTML(images.logo, images.logoAlt, brand.name, "navbar");
  }

  // Menu items
  const menuDesktop = document.getElementById("navbar-menu-desktop");
  const menuMobile  = document.getElementById("navbar-menu-mobile");

  const menuHTML = navbar.menuItems
    .map(item => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  if (menuDesktop) menuDesktop.innerHTML = menuHTML;
  if (menuMobile)  menuMobile.innerHTML  = menuHTML;

  // CTA Buttons
  document.querySelectorAll(".js-navbar-cta").forEach(el => {
    el.textContent = navbar.ctaButton;
  });
}

// --- Hero ---
function renderHero() {
  const { hero, form } = CONTENT;

  // Badge "– COMING SOON"
  setTextContent("hero-badge", hero.badge);

  // Eyebrow oranye uppercase
  setTextContent("hero-eyebrow", hero.eyebrow);

  // Headline dua baris
  const headlineEl = document.getElementById("hero-headline");
  if (headlineEl) {
    headlineEl.innerHTML =
      `<span class="hero__headline-line1">${hero.headlineLine1}</span>` +
      `<em class="hero__headline-line2">${hero.headlineLine2}</em>`;
  }

  // Sub-headline navy bold
  setTextContent("hero-subhead", hero.subhead);

  // Kalimat pengenalan — "Dapur Sepekan!" diwarnai oranye
  const introEl = document.getElementById("hero-intro");
  if (introEl) {
    const introText = hero.intro;
    introEl.innerHTML = introText.replace(
      "Dapur Sepekan!",
      '<span class="hero__intro-brand">Dapur Sepekan!</span>'
    );
  }

  // Deskripsi paragraf
  setTextContent("hero-description", hero.description);

  // Badge produk — render berdasarkan array productBadges di content.js
  const badgesEl = document.getElementById("hero-product-badges");
  if (badgesEl) {
    const badges = hero.productBadges || [];
    if (badges.length === 0) {
      badgesEl.innerHTML = "";
    } else {
      badgesEl.innerHTML = badges.map(b => `
        <div class="hero__badge-pill">
          <img src="${b.img}" alt="${b.imgAlt}" class="hero__badge-img">
        </div>
      `).join("");
    }
  }

  // Gambar produk kanan
  const productEl = document.getElementById("hero-product-container");
  if (productEl) {
    if (AVAILABLE_IMAGES.has(hero.productImage)) {
      productEl.innerHTML = `<img src="${hero.productImage}" alt="${hero.productImageAlt}" class="hero__product-img">`;
    } else {
      // Gambar belum ada — kosongkan kolom (jangan tampilkan placeholder kotak)
      productEl.innerHTML = "";
    }
  }

  // Tombol CTA
  const ctaBtn = document.getElementById("hero-cta-btn");
  if (ctaBtn) {
    ctaBtn.textContent = hero.ctaButton;
    ctaBtn.href = hero.ctaLink;
  }

  // Form (ada di #form-section, bukan di hero)
  setTextContent("form-title",    form.title);
  setTextContent("form-subtitle", form.subtitle);
  setAttr("input-name",      "placeholder", form.namePlaceholder);
  setAttr("input-instagram", "placeholder", form.instagramPlaceholder);
  setTextContent("form-submit-btn", form.submitButton);
  setTextContent("label-name",      form.nameLabel);
  setTextContent("label-instagram", form.instagramLabel);

  const privacyEl = document.getElementById("form-privacy-text");
  if (privacyEl) {
    privacyEl.innerHTML = `
      ${form.privacyPolicyText}
      <button type="button" id="open-privacy-modal">${form.privacyPolicyLink}</button>
      ${form.privacyPolicyText2}
    `;
  }
}

// --- Tantangan Keluarga (Page 2) ---
function renderChallenges() {
  const { challenges } = CONTENT;

  const titleEl = document.getElementById("challenges-title");
  if (titleEl) titleEl.textContent = challenges.title;

  const grid = document.getElementById("challenges-grid");
  if (!grid) return;

  grid.innerHTML = challenges.items.map(item => `
    <div
      class="challenge-card"
      data-animate
      style="background-image: url('${item.image}');"
    >
      <div class="challenge-card__overlay"></div>
      <div class="challenge-card__body">
        <div class="challenge-card__number">${item.number}</div>
        <h3 class="challenge-card__title">${item.title}</h3>
        <p class="challenge-card__description">${item.description}</p>
      </div>
    </div>
  `).join("");
}

// --- Cara Kerja ---
// Kumpulan ikon SVG inline untuk step cards Page 3.
// Setiap ikon sesuai konteks langkahnya (tidak menggunakan emoji).
const STEP_ICONS = {
  "icon-paket": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>`,

  "icon-menu": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <line x1="8" y1="14" x2="8" y2="14"/>
    <line x1="12" y1="14" x2="12" y2="14"/>
    <line x1="16" y1="14" x2="16" y2="14"/>
    <line x1="8" y1="18" x2="8" y2="18"/>
    <line x1="12" y1="18" x2="12" y2="18"/>
  </svg>`,

  "icon-kirim": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 5v3h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>`,

  "icon-sajian": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/>
    <line x1="10" y1="1" x2="10" y2="4"/>
    <line x1="14" y1="1" x2="14" y2="4"/>
  </svg>`,
};

function renderHowItWorks() {
  const { howItWorks } = CONTENT;

  setTextContent("how-badge",    howItWorks.sectionBadge);
  setTextContent("how-title",    howItWorks.title);
  setTextContent("how-subtitle", howItWorks.subtitle);

  const stepsContainer = document.getElementById("steps-grid");
  if (!stepsContainer) return;

  stepsContainer.innerHTML = howItWorks.steps.map(step => `
    <div class="step-card" data-animate>
      <div class="step-card__number">${step.number}</div>
      <div class="step-card__icon" aria-hidden="true">
        ${STEP_ICONS[step.iconId] || ""}
      </div>
      <h3 class="step-card__title">${step.title}</h3>
      <p class="step-card__description">${step.description}</p>
    </div>
  `).join("");
}

// --- Paket (Accordion) ---
function renderPackages() {
  const { packages } = CONTENT;

  setTextContent("packages-badge",    packages.sectionBadge);
  setTextContent("packages-title",    packages.title);
  setTextContent("packages-subtitle", packages.subtitle);

  const container = document.getElementById("packages-grid");
  if (!container) return;

  container.innerHTML = packages.categories.map(cat => `
    <div class="pricing-category" data-animate>

      <!-- Header kategori -->
      <div class="pricing-category__header">
        <div class="pricing-category__info">
          <h3 class="pricing-category__name">${cat.name}</h3>
          <p class="pricing-category__pax">${cat.paxLabel}</p>
          <p class="pricing-category__desc">${cat.description}</p>
        </div>
      </div>

      <!-- Baris-baris paket accordion -->
      <div class="pricing-plans">
        ${cat.plans.map(plan => `
          <div class="pricing-row" id="row-${plan.id}">

            <!-- Baris yang bisa diklik -->
            <button
              class="pricing-row__trigger${plan.isPopular ? " pricing-row__trigger--popular" : ""}"
              aria-expanded="false"
              aria-controls="detail-${plan.id}"
              onclick="togglePricingRow('${plan.id}')"
            >
              <div class="pricing-row__left">
                ${plan.isPopular
                  ? `<span class="pricing-row__popular-badge">Terpopuler</span>`
                  : ""}
                <span class="pricing-row__duration">${plan.duration}</span>
              </div>

              <div class="pricing-row__right">
                <div class="pricing-row__price-block">
                  ${plan.showStrike
                    ? `<span class="pricing-row__price-strike">${packages.referencePrice}/pax</span>`
                    : ""}
                  <span class="pricing-row__price-pax">${plan.pricePerPax}<span class="pricing-row__price-unit">/pax</span></span>
                </div>
                <div class="pricing-row__chevron" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </button>

            <!-- Panel detail (tersembunyi saat awal) -->
            <div class="pricing-row__detail" id="detail-${plan.id}" role="region" aria-hidden="true">
              <div class="pricing-detail">

                <p class="pricing-detail__desc">${plan.details.deskripsi}</p>

                <div class="pricing-detail__specs">
                  <div class="pricing-detail__spec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>${plan.details.porsi}</span>
                  </div>
                  <div class="pricing-detail__spec">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>${plan.details.menu}</span>
                  </div>
                </div>

                <ul class="pricing-detail__benefits">
                  ${plan.details.benefit.map(b => `<li>${b}</li>`).join("")}
                </ul>

                <div class="pricing-detail__total">
                  <span class="pricing-detail__total-label">Total paket</span>
                  <span class="pricing-detail__total-value">${plan.priceTotal}</span>
                </div>

              </div>
            </div>

          </div><!-- /.pricing-row -->
        `).join("")}
      </div><!-- /.pricing-plans -->

    </div><!-- /.pricing-category -->
  `).join("");
}

// Toggle accordion baris paket
function togglePricingRow(planId) {
  const row     = document.getElementById("row-" + planId);
  const detail  = document.getElementById("detail-" + planId);
  const trigger = row ? row.querySelector(".pricing-row__trigger") : null;
  if (!row || !detail || !trigger) return;

  const isOpen = row.classList.contains("is-open");

  // Tutup semua baris yang terbuka di kategori yang sama
  const category = row.closest(".pricing-category");
  if (category) {
    category.querySelectorAll(".pricing-row.is-open").forEach(openRow => {
      openRow.classList.remove("is-open");
      const openDetail  = openRow.querySelector(".pricing-row__detail");
      const openTrigger = openRow.querySelector(".pricing-row__trigger");
      if (openDetail)  { openDetail.style.maxHeight = "0"; openDetail.setAttribute("aria-hidden", "true"); }
      if (openTrigger) { openTrigger.setAttribute("aria-expanded", "false"); }
    });
  }

  // Buka atau tutup baris yang diklik
  if (!isOpen) {
    row.classList.add("is-open");
    detail.style.maxHeight = detail.scrollHeight + "px";
    detail.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-expanded", "true");
  }
}

// --- Format Makanan ---
function renderFoodFormat() {
  const { foodFormat } = CONTENT;

  setTextContent("format-badge",    foodFormat.sectionBadge);
  setTextContent("format-title",    foodFormat.title);
  setTextContent("format-subtitle", foodFormat.subtitle);

  const grid = document.getElementById("format-grid");
  if (!grid) return;

  grid.innerHTML = foodFormat.formats.map(fmt => `
    <div class="format-card" data-animate>
      ${createFormatImageHTML(fmt)}
      <div class="format-card__body">
        <span class="format-card__highlight">${fmt.highlight}</span>
        <span class="format-card__icon">${fmt.icon}</span>
        <h3 class="format-card__name">${fmt.name}</h3>
        <div class="format-card__tagline">${fmt.tagline}</div>
        <p class="format-card__description">${fmt.description}</p>
      </div>
    </div>
  `).join("");
}

/**
 * createFormatImageHTML — Buat HTML gambar untuk section Format Makanan.
 * Menggunakan AVAILABLE_IMAGES untuk memutuskan apakah render <img> atau placeholder.
 * File yang tidak ada dalam daftar → langsung placeholder, tidak ada request HTTP.
 */
function createFormatImageHTML(fmt) {
  if (AVAILABLE_IMAGES.has(fmt.image)) {
    return `
      <img
        src="${fmt.image}"
        alt="${fmt.imageAlt}"
        class="format-card__image"
        onerror="this.outerHTML='<div class=\\'format-card__image-placeholder\\'><span class=\\'placeholder-icon\\'>${fmt.icon}</span><span>Gambar tidak ditemukan</span></div>';"
      >
    `;
  }

  // File belum ada — langsung tampilkan placeholder, tidak ada request HTTP
  return `
    <div class="format-card__image-placeholder">
      <span class="placeholder-icon">${fmt.icon}</span>
      <span>Foto akan ditambahkan</span>
    </div>
  `;
}

// --- FAQ ---
function renderFAQ() {
  const { faq } = CONTENT;

  setTextContent("faq-badge",    faq.sectionBadge);
  setTextContent("faq-title",    faq.title);
  setTextContent("faq-subtitle", faq.subtitle);

  const list = document.getElementById("faq-list");
  if (!list) return;

  list.innerHTML = faq.questions.map((item, i) => `
    <div class="faq-item" data-animate>
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${item.question}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join("");
}

// --- Coming Soon ---
function renderComingSoon() {
  const { comingSoon } = CONTENT;
  if (!comingSoon) return;

  setTextContent("coming-soon-badge",   comingSoon.badge);
  setTextContent("coming-soon-title",   comingSoon.title);
  setTextContent("coming-soon-tagline", comingSoon.tagline);

  // Form submit — reuse logic yang sama dengan form utama
  const form = document.getElementById("coming-soon-form");
  if (!form) return;

  const { form: formContent } = CONTENT;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("cs-name");
    const igInput   = document.getElementById("cs-instagram");
    const nameErr   = document.getElementById("cs-name-error");
    const igErr     = document.getElementById("cs-instagram-error");
    const submitBtn = document.getElementById("cs-submit-btn");

    // Reset error
    nameErr.textContent = "";
    igErr.textContent   = "";

    let valid = true;

    if (!nameInput.value.trim()) {
      nameErr.textContent = formContent.errorName;
      valid = false;
    }

    const igVal     = igInput.value.trim().replace(/^@/, "");
    const igPattern = /^[\w.]+$/;
    if (!igInput.value.trim()) {
      igErr.textContent = formContent.errorInstagram;
      valid = false;
    } else if (!igPattern.test(igVal)) {
      igErr.textContent = formContent.errorInstagramFormat;
      valid = false;
    }

    if (!valid) return;

    // Submit
    submitBtn.disabled    = true;
    submitBtn.textContent = formContent.submitButtonLoading;

    try {
      // Gunakan endpoint yang sama dengan form utama
      const mainForm = document.getElementById("lead-form");
      if (mainForm) {
        // Trigger submit event pada form utama dengan data yang sama
        document.getElementById("input-name").value      = nameInput.value.trim();
        document.getElementById("input-instagram").value = "@" + igVal;
        mainForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      }

      // Tampilkan Thank You modal
      const modal = document.getElementById("thankyou-modal");
      if (modal) {
        modal.classList.add("is-active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }

      form.reset();
    } catch (err) {
      igErr.textContent = formContent.errorSubmit;
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = "Daftar Early Access";
    }
  });

  // Privacy link
  const privacyBtn = document.getElementById("cs-privacy-btn");
  if (privacyBtn) {
    privacyBtn.addEventListener("click", () => {
      const modal = document.getElementById("privacy-modal");
      if (modal) {
        modal.classList.add("is-active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      }
    });
  }
}

// --- Footer ---
function renderFooter() {
  const { footer, brand, images } = CONTENT;

  // Logo footer
  const footerLogo = document.getElementById("footer-logo");
  if (footerLogo) {
    footerLogo.innerHTML = createLogoHTML(images.logo, images.logoAlt, brand.name, "footer");
  }

  setTextContent("footer-brand-name",    brand.name);
  setTextContent("footer-brand-tagline", brand.tagline);
  setTextContent("footer-desc",          footer.description);
  setTextContent("footer-nav-title",     footer.navTitle);
  setTextContent("footer-contact-title", footer.contactTitle);

  // Nav links
  const footerNav = document.getElementById("footer-nav");
  if (footerNav) {
    footerNav.innerHTML = footer.navItems
      .map(item => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
  }

  // Contact
  const footerContact = document.getElementById("footer-contact");
  if (footerContact) {
    footerContact.innerHTML = footer.contactItems.map(item => `
      <li>
        <span>${item.icon}</span>
        <a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.value}</a>
      </li>
    `).join("");
  }

  // Copyright — ganti {year} dengan tahun saat ini
  const year = new Date().getFullYear();
  setTextContent("footer-copyright", footer.copyright.replace("{year}", year));

  // Privacy button di footer
  const footerPrivacyBtn = document.getElementById("footer-privacy-btn");
  if (footerPrivacyBtn) {
    footerPrivacyBtn.textContent = footer.privacyPolicyLink;
  }
}

// --- Update meta halaman ---
function updatePageMeta() {
  const { brand, images } = CONTENT;

  document.title = brand.name + " — " + brand.tagline;

  // Favicon — hanya set jika file ada di AVAILABLE_IMAGES, agar tidak 404
  const favicon = document.getElementById("favicon");
  if (favicon && AVAILABLE_IMAGES.has(images.favicon)) {
    favicon.href = images.favicon;
  }
  // Jika favicon belum ada, biarkan default browser — tidak ada request 404
}


// ============================================================
//  NAVBAR — Scroll effect & Hamburger menu
// ============================================================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("navbar-mobile-menu");

  // Tambah class "scrolled" saat halaman di-scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Toggle mobile menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");
      mobileMenu.classList.toggle("open", !isOpen);
      hamburger.classList.toggle("active", !isOpen);
      hamburger.setAttribute("aria-expanded", String(!isOpen));
    });

    // Tutup menu saat link diklik
    mobileMenu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }
}


// ============================================================
//  FAQ ACCORDION
// ============================================================
function initFAQ() {
  // Gunakan event delegation karena elemen di-render secara dinamis
  document.addEventListener("click", (e) => {
    const questionBtn = e.target.closest(".faq-question");
    if (!questionBtn) return;

    const faqItem = questionBtn.closest(".faq-item");
    const isActive = faqItem.classList.contains("active");

    // Tutup semua item lain
    document.querySelectorAll(".faq-item.active").forEach(item => {
      item.classList.remove("active");
      item.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    // Buka item yang diklik (jika belum aktif)
    if (!isActive) {
      faqItem.classList.add("active");
      questionBtn.setAttribute("aria-expanded", "true");
    }
  });
}


// ============================================================
//  FORM — Validasi dan Submit ke Google Sheets
// ============================================================
function initForm() {
  const form = document.getElementById("early-access-form");
  if (!form) return;

  form.addEventListener("submit", handleFormSubmit);

  // Hapus error saat user mulai mengetik
  form.addEventListener("input", (e) => {
    const input = e.target;
    if (input.classList.contains("form-input")) {
      clearFieldError(input);
    }
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form       = e.currentTarget;
  const nameInput  = document.getElementById("input-name");
  const igInput    = document.getElementById("input-instagram");
  const submitBtn  = document.getElementById("form-submit-btn");
  const errorBox   = document.getElementById("form-submit-error");

  // Reset error sebelum validasi baru
  clearFieldError(nameInput);
  clearFieldError(igInput);
  if (errorBox) {
    errorBox.classList.remove("visible");
    errorBox.textContent = "";
  }

  // --- Validasi ---
  const { form: formContent } = CONTENT;
  let isValid = true;

  const nameValue = nameInput.value.trim();
  const igValue   = igInput.value.trim();

  if (!nameValue) {
    showFieldError(nameInput, "error-name", formContent.errorName);
    isValid = false;
  }

  const igCleaned = igValue.replace(/^@/, ""); // Hapus @ di awal jika ada
  const igRegex   = /^[a-zA-Z0-9._]{1,30}$/;

  if (!igValue) {
    showFieldError(igInput, "error-instagram", formContent.errorInstagram);
    isValid = false;
  } else if (!igRegex.test(igCleaned)) {
    showFieldError(igInput, "error-instagram", formContent.errorInstagramFormat);
    isValid = false;
  }

  if (!isValid) return;

  // --- Cek apakah URL Apps Script sudah diisi ---
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "GANTI_DENGAN_URL_APPS_SCRIPT_KAMU") {
    // Mode demo: tampilkan thank you tanpa benar-benar kirim data
    console.warn("⚠️ URL Apps Script belum dikonfigurasi. Menampilkan Thank You dalam mode demo.");
    showThankYouModal();
    form.reset();
    return;
  }

  // --- Kirim data ke Google Sheets via Apps Script ---
  submitBtn.disabled = true;
  submitBtn.textContent = formContent.submitButtonLoading;

  try {
    const formData = new FormData();
    formData.append("nama", nameValue);
    formData.append("instagram", "@" + igCleaned);

    /**
     * CATATAN TEKNIS CORS — Google Apps Script:
     * Google Apps Script tidak mendukung fetch() biasa karena CORS.
     * Solusi: gunakan mode "no-cors" dengan FormData.
     * Kita tidak bisa membaca respons — sukses diasumsikan jika tidak ada error jaringan.
     */
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    showThankYouModal();
    form.reset();

  } catch (error) {
    console.error("Form submission error:", error);
    if (errorBox) {
      errorBox.textContent = formContent.errorSubmit;
      errorBox.classList.add("visible");
    }
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = formContent.submitButton;
  }
}

// Helper: tampilkan error di bawah input
function showFieldError(input, errorId, message) {
  input.classList.add("error");
  const errorEl = document.getElementById(errorId);
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add("visible");
  }
}

// Helper: hapus error di input
function clearFieldError(input) {
  input.classList.remove("error");
  const errorEl = input.parentElement?.querySelector(".form-error");
  if (errorEl) {
    errorEl.classList.remove("visible");
    errorEl.textContent = "";
  }
}


// ============================================================
//  MODALS — Thank You & Privacy Policy
// ============================================================
function initModals() {
  renderThankYouModal();
  renderPrivacyModal();

  // Tutup modal saat klik overlay (area di luar kotak)
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  // Tutup modal dengan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(overlay => {
        closeModal(overlay.id);
      });
    }
  });

  // Event delegation untuk tombol buka Privacy Policy
  document.addEventListener("click", (e) => {
    if (e.target.id === "open-privacy-modal" || e.target.id === "footer-privacy-btn") {
      openModal("privacy-modal");
    }
  });
}

function renderThankYouModal() {
  const { thankYou } = CONTENT;
  const modal = document.getElementById("modal-body-thankyou");
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-icon">🎉</div>
    <h2 class="modal-title">${thankYou.title}</h2>
    <p class="modal-message">${thankYou.message}</p>
    <p class="modal-submessage">${thankYou.subMessage}</p>
    <button class="btn btn--primary btn--full btn--lg" onclick="closeModal('thankyou-modal')">
      ${thankYou.closeButton}
    </button>
  `;
}

function renderPrivacyModal() {
  const { privacyPolicy } = CONTENT;
  const modal = document.getElementById("modal-body-privacy");
  if (!modal) return;

  const sectionsHTML = privacyPolicy.content.map(section => `
    <div class="policy-section">
      <h3>${section.heading}</h3>
      <p>${section.text}</p>
    </div>
  `).join("");

  modal.innerHTML = `
    <h2 class="modal-title">${privacyPolicy.title}</h2>
    <p class="modal-updated">Terakhir diperbarui: ${privacyPolicy.lastUpdated}</p>
    ${sectionsHTML}
    <div class="modal-footer-btn">
      <button class="btn btn--primary" onclick="closeModal('privacy-modal')">
        ${privacyPolicy.closeButton}
      </button>
    </div>
  `;
}

function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function showThankYouModal() {
  openModal("thankyou-modal");
}


// ============================================================
//  SCROLL TO FORM — Tombol "Daftar Early Access" di navbar
//  Form sudah dihapus dari halaman. Tombol ini sekarang mengarah
//  ke #faq (Page 6) agar pengguna tetap mendapat informasi.
// ============================================================
function scrollToForm() {
  const target = document.getElementById("faq");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


// ============================================================
//  SCROLL ANIMATION
// ============================================================
function initScrollAnimation() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-animate]").forEach(el => {
      el.classList.add("animated");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  const observeNewElements = () => {
    document.querySelectorAll("[data-animate]:not(.animated)").forEach(el => {
      observer.observe(el);
    });
  };

  observeNewElements();

  // Re-observe saat DOM berubah (setelah render dinamis selesai)
  const mutationObserver = new MutationObserver(observeNewElements);
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}


// ============================================================
//  HELPER FUNCTIONS
// ============================================================

function setTextContent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setAttr(id, attr, value) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, value);
}

/**
 * createLogoHTML — Buat HTML tag <img> logo dengan fallback placeholder teks.
 * Jika file logo gagal dimuat, placeholder "DS" akan muncul menggantikannya.
 */
function createLogoHTML(src, alt, brandName, context) {
  const isFooter = context === "footer";
  const imgClass = isFooter ? "footer__brand-logo" : "navbar__logo-img";

  return `
    <img
      src="${src}"
      alt="${alt}"
      class="${imgClass}"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    >
    <div class="logo-placeholder" style="display:none;">
      <div class="logo-placeholder__icon">DS</div>
      <div class="logo-placeholder__text">
        ${brandName}
        <span>Dapur Sepekan</span>
      </div>
    </div>
  `;
}

/**
 * createImageHTML — Buat HTML gambar untuk hero section (mobile).
 * Jika file gambar gagal dimuat, placeholder dengan ikon dan teks akan muncul.
 */
function createImageHTML(src, alt, wrapperClass, imgClass, placeholderClass, icon, placeholderText) {
  return `
    <div class="${wrapperClass}" id="hero-img-inner">
      <img
        src="${src}"
        alt="${alt}"
        class="${imgClass}"
        onerror="this.style.display='none'; document.getElementById('hero-img-placeholder').style.display='flex';"
      >
      <div class="${placeholderClass}" id="hero-img-placeholder" style="display:none;">
        <span class="placeholder-icon">${icon}</span>
        <p>${placeholderText}</p>
      </div>
    </div>
  `;
}

// ============================================================
//  SECTION 5 — FORM EARLY ACCESS  (JSON-P submit)
//  Semua fungsi menggunakan prefix s5 untuk menghindari konflik
//  dengan fungsi lain di file ini.
// ============================================================

/**
 * initSection5Form — Daftarkan event listener ke form Section 5.
 * Dipanggil dari DOMContentLoaded. Null-safe: jika form tidak ada di halaman,
 * fungsi ini diam saja tanpa error.
 */
function initSection5Form() {
  const form = document.getElementById("s5-early-access-form");
  if (!form) return;

  // Hapus state error saat pengguna mulai mengetik ulang
  form.addEventListener("input", function(ev) {
    if (ev.target.classList.contains("s5-input")) {
      clearS5FieldError(ev.target);
    }
  });

  form.addEventListener("submit", handleS5FormSubmit);
}

/**
 * handleS5FormSubmit — Handler utama submit form Section 5.
 *
 * Alur:
 *   1. Reset semua state UI
 *   2. Validasi & sanitasi input (trim, cek format)
 *   3. Set loading state — cegah submit ganda via submitBtn.disabled
 *   4. Panggil submitViaJSONP dan tunggu konfirmasi nyata dari server
 *   5. Jika sukses: reset form, tampilkan pesan sukses hijau
 *   6. Jika gagal/timeout: tampilkan error, JANGAN reset form
 *   7. Finally: kembalikan tombol ke normal (timeout bukan sukses)
 */
async function handleS5FormSubmit(ev) {
  ev.preventDefault();

  const form      = ev.currentTarget;
  const nameInput = document.getElementById("s5-input-name");
  const igInput   = document.getElementById("s5-input-instagram");
  const submitBtn = document.getElementById("s5-submit-btn");
  const errorBox  = document.getElementById("s5-submit-error");
  const successEl = document.getElementById("s5-success-msg");

  // Reset semua state UI sebelum proses baru
  clearS5FieldError(nameInput);
  clearS5FieldError(igInput);
  if (errorBox)  { errorBox.classList.remove("visible");  errorBox.textContent  = ""; }
  if (successEl) { successEl.classList.remove("visible"); successEl.textContent = ""; }

  // ── Validasi — trim spasi di awal dan akhir ──────────────────
  const nameValue = nameInput.value.trim();
  const igRaw     = igInput.value.trim();
  const igClean   = igRaw.replace(/^@+/, "");   // hapus semua @ di awal

  // Format username: huruf, angka, titik, underscore, maks 30 karakter
  const igRegex = /^[a-zA-Z0-9._]{1,30}$/;
  let   valid   = true;

  if (!nameValue) {
    showS5FieldError(nameInput, "s5-error-name", "Nama tidak boleh kosong.");
    valid = false;
  } else if (nameValue.length > 100) {
    showS5FieldError(nameInput, "s5-error-name", "Nama terlalu panjang (maks 100 karakter).");
    valid = false;
  }

  if (!igRaw) {
    showS5FieldError(igInput, "s5-error-ig", "Username Instagram tidak boleh kosong.");
    valid = false;
  } else if (!igRegex.test(igClean)) {
    showS5FieldError(igInput, "s5-error-ig",
      "Format tidak valid. Gunakan huruf, angka, titik, atau underscore (maks 30 karakter).");
    valid = false;
  }

  if (!valid) return;

  // ── Loading state — cegah submit ganda ───────────────────────
  submitBtn.disabled    = true;
  submitBtn.textContent = "Mengirim...";

  try {
    // submitViaJSONP menunggu konfirmasi NYATA dari server.
    // Promise hanya resolve jika Apps Script mengembalikan {status:"success"}
    // setelah appendRow berhasil dieksekusi.
    await submitViaJSONP(nameValue, igClean);

    // ── SUKSES NYATA ─────────────────────────────────────────
    // Hanya sampai di sini jika server mengkonfirmasi data tersimpan.
    form.reset();
    if (successEl) {
      successEl.textContent =
        "✅ Berhasil didaftarkan! Kami akan menghubungi kamu saat Dapur Sepekan launching.";
      successEl.classList.add("visible");
    }

  } catch (err) {
    // ── ERROR atau TIMEOUT ────────────────────────────────────
    // Tampilkan pesan error. Form TIDAK direset agar pengguna
    // bisa memperbaiki dan mencoba lagi tanpa mengisi ulang.
    console.error("[S5 Form]", err.message);
    if (errorBox) {
      errorBox.textContent = err.message || "Gagal mengirim. Silakan coba lagi.";
      errorBox.classList.add("visible");
    }

  } finally {
    // Selalu kembalikan tombol ke normal.
    // Timeout masuk ke catch (bukan sukses) — finally hanya mengembalikan tombol.
    submitBtn.disabled    = false;
    submitBtn.textContent = "Daftar Early Access";
  }
}

/**
 * submitViaJSONP — Kirim data ke Apps Script via JSON-P dan tunggu konfirmasi nyata.
 *
 * Cara kerja:
 *   1. Generate nama callback unik: "dsS5cb_<timestamp>_<random>"
 *   2. Daftarkan sebagai fungsi global sementara di window
 *   3. Inject <script src="GAS_URL?callback=...&nama=..."> ke <head>
 *   4. Browser mendownload dan mengeksekusi respons Apps Script:
 *        dsS5cb_1234({status:"success",...})
 *      HANYA setelah appendRow selesai tanpa exception di server
 *   5. window["dsS5cb_1234"] terpanggil → resolve atau reject Promise
 *   6. cleanup() dipanggil: hapus window[cbName] dan script tag dari DOM
 *
 * Timeout:
 *   15 detik — jika tidak ada respons, reject dengan pesan timeout.
 *   Timeout bukan sukses: form tidak direset (handleS5FormSubmit menanganinya).
 *
 * Keterbatasan (didokumentasikan dengan jujur):
 *   - Data dikirim via URL query string (GET), bukan request body
 *   - URL dengan nama + username muncul di browser history dan server log Google
 *   - Acceptable untuk nama + username Instagram (bukan password atau data keuangan)
 *   - Jika butuh POST body + konfirmasi nyata → diperlukan proxy serverless
 *     (contoh: Vercel Edge Function ~15 baris, lihat README.md)
 *
 * @param {string} nama     - Nama pendaftar (sudah di-trim, panjang max 100)
 * @param {string} username - Username Instagram tanpa @ (sudah di-trim, panjang max 30)
 * @returns {Promise}       - Resolve jika server konfirmasi sukses, reject jika error/timeout
 */
function submitViaJSONP(nama, username) {
  return new Promise(function(resolve, reject) {
    // Nama callback unik per submit — hindari tabrakan jika user submit berulang cepat
    const cbName = "dsS5cb_" + Date.now() + "_" + Math.floor(Math.random() * 9999);
    let   timerId;

    // cleanup: hapus global callback dan <script> tag dari DOM
    const cleanup = function() {
      try { delete window[cbName]; } catch (_) {}
      const el = document.getElementById(cbName);
      if (el) el.remove();
      clearTimeout(timerId);
    };

    // Callback global yang akan dipanggil Apps Script saat respons tiba
    // Didefinisikan SEBELUM script tag diinject
    window[cbName] = function(data) {
      cleanup();
      if (data && data.status === "success") {
        resolve(data);
      } else {
        // Server merespons tapi melaporkan error (validasi gagal, ID salah, dll.)
        reject(new Error(
          (data && data.message) ? data.message : "Server menolak permintaan."
        ));
      }
    };

    // Timeout 15 detik
    timerId = setTimeout(function() {
      cleanup();
      reject(new Error(
        "Waktu tunggu habis (15 detik). Periksa koneksi internet dan coba lagi."
      ));
    }, 15000);

    // Build URL — URLSearchParams otomatis encode karakter spesial
    const params = new URLSearchParams({
      callback: cbName,
      nama:     nama,
      username: username,
      sumber:   "Dapur Sepekan Website",
    });

    // Inject <script> ke <head> — trigger HTTP GET ke Apps Script
    const script   = document.createElement("script");
    script.id      = cbName;
    script.src     = SECTION5_APPS_SCRIPT_URL + "?" + params.toString();
    script.onerror = function() {
      // Network error: DNS gagal, server tidak terjangkau, dsb.
      cleanup();
      reject(new Error(
        "Tidak dapat terhubung ke server. Pastikan koneksi internet aktif."
      ));
    };
    document.head.appendChild(script);
  });
}

// ── Helper: tampilkan error di bawah input ────────────────────────
function showS5FieldError(input, errorId, msg) {
  input.classList.add("error");
  const el = document.getElementById(errorId);
  if (el) { el.textContent = msg; el.classList.add("visible"); }
}

// ── Helper: hapus error dari input ───────────────────────────────
function clearS5FieldError(input) {
  input.classList.remove("error");
  // Cari elemen error terdekat di parent .s5-field
  const parent = input.closest ? input.closest(".s5-field") : input.parentElement;
  if (parent) {
    const el = parent.querySelector(".s5-field-error");
    if (el) { el.classList.remove("visible"); el.textContent = ""; }
  }
}
