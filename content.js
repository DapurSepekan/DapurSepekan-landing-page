/**
 * ============================================================
 *  DAPUR SEPEKAN — PUSAT KONTEN
 *  File ini berisi SEMUA teks dan konten yang bisa kamu ubah.
 *  Kamu TIDAK perlu mengedit file lain untuk mengubah teks.
 * ============================================================
 *
 *  CARA MENGEDIT:
 *  1. Cari bagian yang ingin diubah (gunakan Ctrl+F / Cmd+F)
 *  2. Ganti teks di antara tanda kutip: "teks lama" → "teks baru"
 *  3. Simpan file (Ctrl+S / Cmd+S)
 *  4. Refresh browser untuk melihat perubahan
 *
 *  PERHATIAN:
 *  - Jangan menghapus tanda kutip (""), koma (,), atau kurung kurawal ({})
 *  - Jangan mengubah nama variabel (bagian sebelum titik dua :)
 */

const CONTENT = {

  // ============================================================
  //  INFORMASI BRAND
  // ============================================================
  brand: {
    name: "Dapur Sepekan",
    tagline: "Your Family Weekly Home-Cooked Meal Solution.",
    description: "Solusi makanan rumahan mingguan untuk keluarga yang menginginkan makanan praktis, bervariasi, dan tetap terjaga kualitasnya. Hadirkan pengalaman seperti memiliki home chef pribadi, tanpa repot berbelanja dan memasak setiap hari.",

    // --- Instagram ---
    // Ganti "@dapursepekan" dengan username Instagram resmi setelah tersedia
    instagram: "@dapursepekan",
    instagramUrl: "https://instagram.com/dapursepekan",

    // --- Email ---
    // Ganti dengan email resmi jika sudah ada
    email: "hello@dapursepekan.id",
  },

  // ============================================================
  //  NAVBAR
  // ============================================================
  navbar: {
    menuItems: [
      { label: "Beranda",    href: "#beranda" },
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Paket",      href: "#paket" },
      { label: "FAQ",        href: "#faq" },
    ],
    ctaButton: "Daftar Early Access",
  },

  // ============================================================
  //  HERO SECTION
  // ============================================================
  hero: {
    badge: "Segera Hadir",

    // Headline utama — bisa menggunakan <br> untuk ganti baris
    headline: "Makanan Rumahan Keluarga,<br>Lebih Praktis Setiap Pekan.",

    // Subheadline — penjelasan singkat di bawah headline
    subheadline: "Dapur Sepekan hadir untuk keluarga urban yang ingin menikmati makanan rumahan lezat tanpa harus repot berbelanja dan memasak setiap hari.",

    // Gambar hero — letakkan file di folder assets/ lalu ganti nama file di sini
    // Ukuran yang disarankan: 800×600 piksel, format .jpg atau .webp
    image: "assets/hero-food.jpg",
    imageAlt: "Sajian makanan rumahan Dapur Sepekan",
  },

  // ============================================================
  //  LEAD FORM
  // ============================================================
  form: {
    title: "Jadilah yang Pertama",
    subtitle: "Daftarkan diri kamu dan dapatkan informasi launching serta penawaran eksklusif early access.",

    // Label dan placeholder input
    namePlaceholder: "Nama lengkap kamu",
    nameLabel: "Nama",
    instagramPlaceholder: "@username_instagram",
    instagramLabel: "Username Instagram",

    // Teks tombol submit
    submitButton: "Daftar Early Access",
    submitButtonLoading: "Mengirim...",

    // Pesan validasi (muncul jika input kosong atau salah)
    errorName: "Nama tidak boleh kosong.",
    errorInstagram: "Username Instagram tidak boleh kosong.",
    errorInstagramFormat: "Masukkan username Instagram yang valid (huruf, angka, titik, atau underscore).",
    errorSubmit: "Gagal mengirim data. Periksa koneksi internet kamu dan coba lagi.",

    // Teks link Privacy Policy di bawah form
    privacyPolicyText: "Dengan mendaftar, kamu menyetujui",
    privacyPolicyLink: "Kebijakan Privasi",
    privacyPolicyText2: "kami.",
  },

  // ============================================================
  //  THANK YOU POPUP (muncul setelah form berhasil dikirim)
  // ============================================================
  thankYou: {
    title: "Terima Kasih! 🎉",
    message: "Kamu sudah terdaftar sebagai Early Access. Kami akan menghubungi kamu melalui Instagram saat Dapur Sepekan siap launching.",
    subMessage: "Pantau terus Instagram kami untuk update terbaru.",
    closeButton: "Tutup",
  },

  // ============================================================
  //  CARA KERJA — 4 langkah
  //  Setiap langkah memiliki: icon (emoji), title, description
  // ============================================================
  howItWorks: {
    sectionBadge: "Cara Kerja",
    title: "Semudah Ini Menikmati Makanan Rumahan",
    subtitle: "Dapur Sepekan sedang disiapkan untuk memberikan pengalaman yang mudah dan menyenangkan.",

    steps: [
      {
        number: "01",
        icon: "📋",
        title: "Pilih Paket",
        description: "Pilih paket yang sesuai dengan kebutuhan keluarga kamu — Single atau Family Package, dengan pilihan langganan 1 minggu, 1 bulan, atau 3 bulan.",
      },
      {
        number: "02",
        icon: "🗓️",
        title: "Menu Disiapkan",
        description: "Tim Dapur Sepekan menyiapkan variasi menu rumahan untuk 5 hari dalam seminggu, dirancang untuk memastikan kamu tidak bosan.",
      },
      {
        number: "03",
        icon: "📦",
        title: "Dikirim ke Rumah",
        description: "Makanan disiapkan dengan format Chilled atau Frozen dan akan dikirimkan langsung ke rumah kamu dalam kemasan yang terjaga kualitasnya.",
      },
      {
        number: "04",
        icon: "🍽️",
        title: "Nikmati Bersama Keluarga",
        description: "Sajikan makanan rumahan lezat untuk keluarga kamu setiap hari, tanpa harus repot berbelanja atau memasak dari nol.",
      },
    ],
  },

  // ============================================================
  //  PAKET LANGGANAN
  //  Ganti PRICE_PLACEHOLDER dengan harga sebenarnya saat sudah ada
  // ============================================================
  packages: {
    sectionBadge: "Paket Kami",
    title: "Pilih Paket yang Tepat untuk Keluarga Kamu",
    subtitle: "Detail harga dan paket akan diumumkan saat launching. Daftar sekarang untuk mendapatkan penawaran eksklusif early access.",
    priceNote: "Harga akan diumumkan saat launching",

    // Paket tersedia — atur isFeatured: true untuk paket yang ingin ditonjolkan
    items: [
      {
        id: "single-1week",
        name: "Single – 1 Minggu",
        packageType: "Single Package",
        duration: "1 Minggu",
        pax: "1 Pax",
        description: "Cocok untuk kamu yang tinggal sendiri dan ingin menikmati makanan rumahan setiap hari kerja.",
        features: [
          "5 hari menu per minggu",
          "1 porsi per hari",
          "Format Chilled / Frozen",
          "Variasi menu mingguan",
        ],
        price: "PRICE_PLACEHOLDER",  // ← Ganti dengan harga sebenarnya
        isFeatured: false,
        ctaButton: "Daftar Early Access",
      },
      {
        id: "family-1week",
        name: "Family – 1 Minggu",
        packageType: "Family Package",
        duration: "1 Minggu",
        pax: "4 Pax",
        description: "Solusi praktis untuk keluarga kecil menikmati makanan rumahan bersama setiap hari kerja.",
        features: [
          "5 hari menu per minggu",
          "4 porsi per hari",
          "Format Chilled / Frozen",
          "Variasi menu mingguan",
        ],
        price: "PRICE_PLACEHOLDER",  // ← Ganti dengan harga sebenarnya
        isFeatured: false,
        ctaButton: "Daftar Early Access",
      },
      {
        id: "family-1month",
        name: "Family – 1 Bulan",
        packageType: "Family Package",
        duration: "1 Bulan",
        pax: "4 Pax",
        description: "Langganan bulanan untuk keluarga yang ingin konsistensi makanan rumahan setiap pekan.",
        features: [
          "5 hari menu per minggu",
          "4 porsi per hari",
          "Format Chilled / Frozen",
          "Variasi menu mingguan",
          "Lebih hemat dari paket mingguan",
        ],
        price: "PRICE_PLACEHOLDER",  // ← Ganti dengan harga sebenarnya
        isFeatured: true,            // ← Paket ini ditampilkan sebagai "Paling Populer"
        ctaButton: "Daftar Early Access",
      },
      {
        id: "family-3month",
        name: "Family – 3 Bulan",
        packageType: "Family Package",
        duration: "3 Bulan",
        pax: "4 Pax",
        description: "Komitmen jangka panjang dengan nilai terbaik untuk keluarga yang sudah siap beralih ke solusi makanan mingguan.",
        features: [
          "5 hari menu per minggu",
          "4 porsi per hari",
          "Format Chilled / Frozen",
          "Variasi menu mingguan",
          "Nilai terbaik — paling hemat",
        ],
        price: "PRICE_PLACEHOLDER",  // ← Ganti dengan harga sebenarnya
        isFeatured: false,
        ctaButton: "Daftar Early Access",
      },
    ],
  },

  // ============================================================
  //  FORMAT MAKANAN: CHILLED & FROZEN
  // ============================================================
  foodFormat: {
    sectionBadge: "Format Makanan",
    title: "Dua Format yang Sedang Kami Siapkan",
    subtitle: "Dapur Sepekan sedang mengembangkan dua format penyajian makanan. Detail dan mekanisme pemilihan akan diumumkan saat launching.",

    formats: [
      {
        icon: "❄️",
        name: "Chilled",
        tagline: "Segar, Siap Disajikan",
        description: "Makanan disiapkan dalam kondisi dingin (chilled) untuk menjaga kesegaran cita rasa. Format ini sedang kami kembangkan untuk memberikan pengalaman makan rumahan terbaik.",
        highlight: "Segera Hadir",
        // Gambar format — letakkan di assets/ lalu ganti nama file
        image: "assets/chilled-food.jpg",
        imageAlt: "Format makanan Chilled dari Dapur Sepekan",
      },
      {
        icon: "🧊",
        name: "Frozen",
        tagline: "Tahan Lama, Tetap Lezat",
        description: "Makanan dibekukan (frozen) dengan teknologi yang tepat untuk menjaga kualitas dan kemudahan penyimpanan. Format ini juga sedang kami kembangkan untuk fleksibilitas keluarga.",
        highlight: "Segera Hadir",
        // Gambar format — letakkan di assets/ lalu ganti nama file
        image: "assets/frozen-food.jpg",
        imageAlt: "Format makanan Frozen dari Dapur Sepekan",
      },
    ],
  },

  // ============================================================
  //  FAQ — Pertanyaan yang Sering Ditanyakan
  //  Tambah atau hapus item di dalam array questions: []
  // ============================================================
  faq: {
    sectionBadge: "FAQ",
    title: "Pertanyaan yang Sering Ditanyakan",
    subtitle: "Punya pertanyaan lain? Hubungi kami melalui Instagram.",

    questions: [
      {
        question: "Apa itu Dapur Sepekan?",
        answer: "Dapur Sepekan adalah layanan solusi makanan rumahan mingguan untuk keluarga. Kami menyiapkan menu makanan rumahan yang praktis, bervariasi, dan berkualitas — sehingga kamu tidak perlu lagi repot berbelanja bahan makanan dan memasak setiap hari.",
      },
      {
        question: "Kapan Dapur Sepekan akan launching?",
        answer: "Dapur Sepekan saat ini sedang dalam tahap persiapan. Kami akan mengumumkan tanggal launching melalui Instagram kami. Daftar Early Access sekarang agar kamu menjadi yang pertama mendapatkan informasi resmi.",
      },
      {
        question: "Siapa yang cocok menggunakan layanan Dapur Sepekan?",
        answer: "Dapur Sepekan dirancang khususnya untuk keluarga urban yang sibuk bekerja dan membutuhkan solusi makanan keluarga yang praktis. Terutama orang tua dengan anak yang ingin memastikan keluarganya tetap menikmati makanan rumahan berkualitas setiap hari.",
      },
      {
        question: "Apa perbedaan Single Package dan Family Package?",
        answer: "Single Package ditujukan untuk 1 orang, sementara Family Package dirancang untuk 4 orang. Keduanya menyediakan menu untuk 5 hari dalam seminggu dengan variasi menu yang menarik.",
      },
      {
        question: "Apa pilihan durasi langganan yang tersedia?",
        answer: "Dapur Sepekan akan menyediakan tiga pilihan durasi langganan: 1 minggu, 1 bulan, dan 3 bulan. Detail harga untuk setiap paket akan diumumkan saat launching.",
      },
      {
        question: "Apa itu format Chilled dan Frozen?",
        answer: "Dapur Sepekan sedang menyiapkan dua format penyajian makanan: Chilled (makanan dingin siap saji) dan Frozen (makanan beku). Kedua format ini sedang kami kembangkan untuk memberikan pilihan terbaik bagi keluarga. Detail mekanisme dan cara pemesanan setiap format akan diumumkan kemudian.",
      },
      {
        question: "Berapa menu yang disiapkan per minggu?",
        answer: "Setiap paket mencakup 5 hari menu per minggu (hari kerja Senin–Jumat). Variasi menu dirancang agar kamu dan keluarga tidak bosan.",
      },
      {
        question: "Bagaimana cara mendapatkan informasi saat Dapur Sepekan launching?",
        answer: "Daftarkan nama dan username Instagram kamu melalui formulir Early Access di halaman ini. Kami akan menghubungi kamu melalui Instagram saat Dapur Sepekan siap launching, termasuk penawaran eksklusif bagi pendaftar awal.",
      },
    ],
  },

  // ============================================================
  //  PRIVACY POLICY — Isi popup kebijakan privasi
  // ============================================================
  privacyPolicy: {
    title: "Kebijakan Privasi",
    lastUpdated: "November 2026",

    content: [
      {
        heading: "Data yang Kami Kumpulkan",
        text: "Melalui formulir Early Access, Dapur Sepekan hanya mengumpulkan dua informasi: (1) Nama kamu, dan (2) Username Instagram kamu. Kami tidak mengumpulkan data lain melalui formulir ini.",
      },
      {
        heading: "Penggunaan Data",
        text: "Data yang kamu berikan hanya digunakan untuk keperluan informasi Early Access dan update seputar launching Dapur Sepekan. Kami akan menghubungi kamu melalui Instagram untuk menyampaikan informasi terkait peluncuran layanan.",
      },
      {
        heading: "Keamanan Data",
        text: "Kami berkomitmen untuk menjaga keamanan data kamu. Data yang dikumpulkan disimpan secara terbatas dan hanya digunakan untuk tujuan yang disebutkan di atas.",
      },
      {
        heading: "Pertanyaan",
        text: "Jika kamu memiliki pertanyaan terkait kebijakan privasi ini, silakan hubungi kami melalui Instagram " + "@dapursepekan" + ".",
      },
    ],

    closeButton: "Tutup",
  },

  // ============================================================
  //  FOOTER
  // ============================================================
  footer: {
    description: "Solusi makanan rumahan mingguan untuk keluarga urban yang sibuk.",
    tagline: "Your Family Weekly Home-Cooked Meal Solution.",

    // Kolom navigasi di footer
    navTitle: "Navigasi",
    navItems: [
      { label: "Beranda",    href: "#beranda" },
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Paket",      href: "#paket" },
      { label: "FAQ",        href: "#faq" },
    ],

    // Kolom kontak
    contactTitle: "Hubungi Kami",
    contactItems: [
      { icon: "📸", label: "Instagram", value: "@dapursepekan", href: "https://instagram.com/dapursepekan" },
      { icon: "✉️", label: "Email",     value: "hello@dapursepekan.id", href: "mailto:hello@dapursepekan.id" },
    ],

    // Teks copyright — {year} akan otomatis diganti dengan tahun saat ini
    copyright: "© {year} Dapur Sepekan. Semua hak dilindungi.",
    privacyPolicyLink: "Kebijakan Privasi",
  },

  // ============================================================
  //  GAMBAR — Daftar semua gambar yang digunakan
  //  Letakkan file gambar di folder assets/ lalu ganti nama file di sini
  // ============================================================
  images: {
    // Logo utama
    logo: "assets/dapursepekan-logo1.png",
    logoAlt: "Logo Dapur Sepekan",

    // Favicon — letakkan file di assets/ dengan nama ini
    // Format yang disarankan: PNG ukuran 32×32 atau 64×64 piksel
    favicon: "assets/favicon.png",

    // Gambar Hero — ukuran disarankan 800×600 piksel
    heroImage: "assets/hero-food.jpg",

    // Gambar untuk section paket — ukuran disarankan 400×300 piksel
    singleMeal: "assets/single-meal.jpg",
    familyMeal: "assets/family-meal.jpg",

    // Gambar untuk format Chilled dan Frozen
    chilledFood: "assets/chilled-food.jpg",
    frozenFood:  "assets/frozen-food.jpg",
  },

};
