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
  "assets/dapursepekan-logo1.png",   // ✅ Logo — sudah ada
  // "assets/hero-food.jpg",          // ⬜ Tambahkan setelah file ada
  // "assets/chilled-food.jpg",       // ⬜ Tambahkan setelah file ada
  // "assets/frozen-food.jpg",        // ⬜ Tambahkan setelah file ada
  // "assets/family-meal.jpg",        // ⬜ Tambahkan setelah file ada
  // "assets/single-meal.jpg",        // ⬜ Tambahkan setelah file ada
  // "assets/favicon.png",            // ⬜ Tambahkan setelah file ada
]);
// ============================================================
//  KONFIGURASI GOOGLE APPS SCRIPT
//  → Ganti nilai APPS_SCRIPT_URL setelah kamu deploy Apps Script
//  → Ikuti panduan di README.md bagian "Cara Deploy Apps Script"
// ============================================================
const APPS_SCRIPT_URL = "GANTI_DENGAN_URL_APPS_SCRIPT_KAMU";
// Contoh URL setelah deploy:
// const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXXXXX/exec";


// ============================================================
//  INISIALISASI — Jalankan semua fungsi setelah halaman dimuat
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderContent();        // Isi semua konten dari content.js
  initNavbar();           // Navbar scroll + hamburger
  initFAQ();              // Accordion FAQ
  initForm();             // Validasi dan submit form
  initModals();           // Popup Thank You + Privacy Policy
  initScrollAnimation();  // Animasi muncul saat scroll
});


// ============================================================
//  RENDER KONTEN — Mengambil data dari content.js dan mengisi HTML
// ============================================================
function renderContent() {
  renderNavbar();
  renderHero();
  renderCustomerProblem();
  renderWhyUs();
  renderHowItWorks();
  renderPackages();
  renderFoodFormat();
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
  const { hero, form, images } = CONTENT;

  // Badge & tagline
  setTextContent("hero-badge",       hero.badge);
  setTextContent("hero-tagline",     hero.tagline);
  setTextContent("hero-question",    hero.subheadlineQuestion);
  setTextContent("hero-subheadline", hero.subheadline);
  setTextContent("hero-brand-intro", hero.brandIntro);
  setTextContent("hero-description", hero.description);
  setTextContent("hero-highlight",   hero.highlight);
  setTextContent("hero-closing",     hero.closing);

  // Headline
  const headlineEl = document.getElementById("hero-headline");
  if (headlineEl) headlineEl.innerHTML = hero.headline;

  // Brand intro dengan bold
  const brandIntroEl = document.getElementById("hero-brand-intro");
  if (brandIntroEl) brandIntroEl.innerHTML = `Kenalan dengan <strong>Dapur Sepekan!</strong>`;

  // Highlight & closing dengan emoji
  const highlightEl = document.getElementById("hero-highlight");
  if (highlightEl) highlightEl.innerHTML = `🌿 ${hero.highlight}`;

  const closingEl = document.getElementById("hero-closing");
  if (closingEl) closingEl.innerHTML = `✨ ${hero.closing}`;

  // Gambar hero — tampil di mobile
  const heroImgContainer = document.getElementById("hero-image-container");
  if (heroImgContainer) {
    if (AVAILABLE_IMAGES.has(images.heroImage)) {
      heroImgContainer.innerHTML = createImageHTML(
        images.heroImage,
        hero.imageAlt,
        "hero__image-wrapper",
        "hero__image",
        "hero__image-placeholder",
        "🍽️",
        "Letakkan file hero-food.jpg di folder assets/"
      );
    } else {
      heroImgContainer.innerHTML = `
        <div class="hero__image-placeholder">
          <span class="placeholder-icon">🍽️</span>
          <p>Letakkan file hero-food.jpg di folder assets/</p>
        </div>
      `;
    }
  }

  // Form
  setTextContent("form-title",    form.title);
  setTextContent("form-subtitle", form.subtitle);
  setAttr("input-name",      "placeholder", form.namePlaceholder);
  setAttr("input-instagram", "placeholder", form.instagramPlaceholder);
  setTextContent("form-submit-btn", form.submitButton);

  // Label form
  setTextContent("label-name",      form.nameLabel);
  setTextContent("label-instagram", form.instagramLabel);

  // Privacy policy text
  const privacyEl = document.getElementById("form-privacy-text");
  if (privacyEl) {
    privacyEl.innerHTML = `
      ${form.privacyPolicyText}
      <button type="button" id="open-privacy-modal">${form.privacyPolicyLink}</button>
      ${form.privacyPolicyText2}
    `;
  }
}

// --- Why Dapur Sepekan ---
function renderWhyUs() {
  const { whyUs } = CONTENT;
  if (!whyUs) return;

  setTextContent("why-badge", whyUs.sectionBadge);
  setTextContent("why-title", whyUs.title);

  const grid = document.getElementById("why-grid");
  if (!grid) return;

  grid.innerHTML = whyUs.reasons.map(r => `
    <div class="why-card" data-animate>
      <div class="why-card__number">${r.number}</div>
      <span class="why-card__icon">${r.icon}</span>
      <h3 class="why-card__title">${r.title}</h3>
      <p class="why-card__desc">${r.description}</p>
    </div>
  `).join("");
}

// --- Customer Problem & Solution ---
function renderCustomerProblem() {
  const { customerProblem } = CONTENT;
  if (!customerProblem) return;

  setTextContent("problem-badge",    customerProblem.sectionBadge);
  setTextContent("problem-title",    customerProblem.title);
  setTextContent("problem-subtitle", customerProblem.subtitle);
  setTextContent("problem-intro",    customerProblem.problemsIntro);
  setTextContent("solution-title",   customerProblem.solutionTitle);
  setTextContent("solution-desc",    customerProblem.solutionDesc);

  const grid = document.getElementById("problems-grid");
  if (!grid) return;

  grid.innerHTML = customerProblem.problems.map(p => `
    <div class="problem-card">
      <div class="problem-card__header">
        <span class="problem-card__number">${p.number}</span>
        <span class="problem-card__icon">${p.icon}</span>
      </div>
      <h3 class="problem-card__title">${p.title}</h3>
      <p class="problem-card__desc">${p.description}</p>
    </div>
  `).join("");
}

// --- Cara Kerja ---
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
      <span class="step-card__icon">${step.icon}</span>
      <h3 class="step-card__title">${step.title}</h3>
      <p class="step-card__description">${step.description}</p>
    </div>
  `).join("");
}

// --- Paket ---
function renderPackages() {
  const { packages } = CONTENT;

  setTextContent("packages-badge",    packages.sectionBadge);
  setTextContent("packages-title",    packages.title);
  setTextContent("packages-subtitle", packages.subtitle);

  const grid = document.getElementById("packages-grid");
  if (!grid) return;

  grid.innerHTML = packages.items.map(pkg => `
    <div class="package-card ${pkg.isFeatured ? "package-card--featured" : ""}" data-animate>
      ${pkg.isFeatured ? `<div class="package-card__badge">Paling Populer</div>` : ""}
      <div class="package-card__type">${pkg.packageType}</div>
      <h3 class="package-card__name">${pkg.name}</h3>
      <div class="package-card__meta">${pkg.pax} · ${pkg.duration}</div>
      <p class="package-card__description">${pkg.description}</p>
      <ul class="package-card__features">
        ${pkg.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <div class="package-card__price">
        <div class="package-card__price-label">${packages.priceNote}</div>
        <div class="package-card__price-value">
          ${pkg.price === "PRICE_PLACEHOLDER" ? "Akan diumumkan" : pkg.price}
        </div>
      </div>
      <button
        class="btn ${pkg.isFeatured ? "btn--primary" : "btn--secondary"} btn--full"
        onclick="scrollToForm()"
      >${pkg.ctaButton}</button>
    </div>
  `).join("");
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
//  SCROLL TO FORM
// ============================================================
function scrollToForm() {
  const form = document.getElementById("early-access-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      const firstInput = form.querySelector("input");
      if (firstInput) firstInput.focus();
    }, 600);
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
