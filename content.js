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
    email: "dsepekan@gmail.com",
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
    badge: "Coming Soon",

    // Kalimat pembuka kecil di atas headline (warna oranye, huruf kapital)
    eyebrow: "YOUR FAMILY HOME-COOKED MEAL SOLUTION",

    // Kalimat pengenalan brand — tampil di atas headline utama
    intro: "Kenalan yuk dengan Dapur Sepekan!",

    // Headline utama — dua baris sesuai referensi
    headlineLine1: "A NEW WAY TO ENJOY",        // navy, Fredoka One, besar
    headlineLine2: "FAMILY MEALS!",             // oranye, Fredoka One, underline

    // Sub-headline bold di bawah headline
    subhead: "Stress Setiap Hari Mikirin Menu? Saatnya Punya Solusi!",

    // Deskripsi paragraf
    description: "Solusi family meal prep mingguan dengan pilihan porsi yang beragam dan fleksibel, mudah disimpan dan disajikan kapan saja. Serasa punya home chef sendiri!",

    // ----------------------------------------------------------------
    // BADGE PRODUK — semua aset sudah tersedia di folder assets/
    // Logo Halal, MSG Free, dan No Added Preservatives.
    // Pastikan klaim ini sesuai dengan komposisi produk sebelum publish.
    // ----------------------------------------------------------------
    halalLogo: "assets/Halal_Indonesia.svg.png",
    halalLogoAlt: "Halal Indonesia",

    productBadges: [
      { type: "halal",  label: "HALAL",  sublabel: "INDONESIA",        img: "assets/Halal_Indonesia.svg.png", imgAlt: "Halal Indonesia" },
      { type: "img",    label: "Tanpa MSG",   sublabel: "",             img: "assets/logo msg.png",           imgAlt: "Tanpa MSG"       },
      { type: "img",    label: "Tanpa Bahan Pengawet", sublabel: "",    img: "assets/pengawet.png",           imgAlt: "Tanpa Bahan Pengawet" },
    ],

    // Tombol CTA — teks dan anchor target
    ctaButton: "Daftar menjadi yang pertama!",
    ctaLink: "#area-layanan",   // Lead Form Early Access

    // Gambar produk (kanan hero) — masukkan file PNG transparan ke assets/
    productImage: "assets/hero-product.png",
    productImageAlt: "Produk paket makanan Dapur Sepekan",

    // Background dapur — diatur via CSS .hero__bg (bukan via JS)
    // Lihat komentar di style.css untuk cara mengaktifkan background-image
  },   // ← penutup hero:

  // ============================================================
  //  TANTANGAN KELUARGA — Section Page 2
  //  Berisi headline utama + 3 kartu tantangan dengan background gambar.
  // ============================================================
  challenges: {
    title: "Mengatur Menu Keluarga Setiap Hari Memang Nggak Selalu Mudah!",

    items: [
      {
        number: "01",
        image: "assets/busy day.png",
        title: "Sibuk Bekerja, Bingung Menyiapkan Menu Sehat?",
        description: "Pagi berangkat kerja, sore pulang kelelahan. Menyiapkan menu makan bergizi untuk seluruh keluarga setiap hari terasa menyita waktu dan tenaga.",
      },
      {
        number: "02",
        image: "assets/aneka menu.png",
        title: "Katering Harian Belum Tentu Sesuai Kebutuhan?",
        description: "Menu katering sering kurang bervariasi, porsi tidak selalu pas, dan belum tentu sesuai dengan selera dan kebutuhan nutrisi keluarga kamu.",
      },
      {
        number: "03",
        image: "assets/meal prep.png",
        title: "Ingin Lebih Bebas Memilih Menu?",
        description: "Setiap keluarga punya selera dan kebutuhan yang berbeda. Kamu ingin pilihan menu yang fleksibel — bukan sekadar apa yang tersedia.",
      },
    ],
  },

  // ============================================================
  //  CARA KERJA — 4 langkah dengan ikon SVG
  //  Setiap langkah menggunakan iconId yang cocok dengan STEP_ICONS di script.js
  // ============================================================
  howItWorks: {
    sectionBadge: "Cara Kerja",
    title: "Semudah Ini Menikmati Makanan Rumahan",
    subtitle: "Dapur Sepekan sedang disiapkan untuk memberikan pengalaman yang mudah dan menyenangkan.",

    steps: [
      {
        number: "01",
        iconId: "icon-paket",
        title: "Pilih Paket",
        description: "Pilih paket yang sesuai dengan kebutuhan keluarga kamu — Single atau Family Package, dengan pilihan langganan 1 minggu, 1 bulan, atau 3 bulan.",
      },
      {
        number: "02",
        iconId: "icon-menu",
        title: "Menu Disiapkan",
        description: "Tim Dapur Sepekan menyiapkan variasi menu rumahan untuk 5 hari dalam seminggu, dirancang untuk memastikan kamu tidak bosan.",
      },
      {
        number: "03",
        iconId: "icon-kirim",
        title: "Dikirim ke Rumah",
        description: "Makanan disiapkan dengan format Chilled atau Frozen dan akan dikirimkan langsung ke rumah kamu dalam kemasan yang terjaga kualitasnya.",
      },
      {
        number: "04",
        iconId: "icon-sajian",
        title: "Nikmati Bersama Keluarga",
        description: "Sajikan makanan rumahan lezat untuk keluarga kamu setiap hari, tanpa harus repot berbelanja atau memasak dari nol.",
      },
    ],
  },

  // ============================================================
  //  PAKET LANGGANAN — Struktur accordion (Solo & Family)
  // ============================================================
  packages: {
    sectionBadge: "Paket Kami",
    title: "Pilih Paket yang Tepat untuk Keluarga Kamu",
    subtitle: "5 menu per pekan · Tersedia format Chilled dan Frozen · Dikirim ke rumah kamu",

    // Harga referensi yang dicoret (paket paling dasar)
    referencePrice: "Rp37.500",

    categories: [
      {
        id: "solo",
        name: "Paket Solo",
        paxLabel: "1 pax · per hari",
        description: "Cocok untuk kamu yang tinggal sendiri dan ingin menikmati makanan rumahan setiap hari kerja tanpa repot memasak.",
        plans: [
          {
            id: "solo-1w",
            duration: "1 Minggu",
            pricePerPax: "Rp37.500",
            priceTotal: "Rp187.500",
            showStrike: false,     // harga referensi = harga ini, tidak perlu dicoret
            isPopular: false,
            details: {
              deskripsi: "Cocok untuk kamu yang ingin mencoba Dapur Sepekan selama satu minggu penuh.",
              porsi: "1 porsi per hari",
              menu: "5 variasi menu per minggu",
              benefit: ["Tanpa komitmen jangka panjang", "Variasi menu harian"],
            },
          },
          {
            id: "solo-1m",
            duration: "1 Bulan",
            pricePerPax: "Rp35.000",
            priceTotal: "Rp700.000",
            showStrike: true,      // lebih murah dari referensi → tampilkan Rp37.500 dicoret
            isPopular: false,
            details: {
              deskripsi: "Hemat lebih banyak dengan berlangganan sebulan penuh. Cocok untuk rutinitas harian kamu.",
              porsi: "1 porsi per hari",
              menu: "5 variasi menu per minggu",
              benefit: ["Lebih hemat dari paket mingguan", "Variasi menu mingguan"],
            },
          },
          {
            id: "solo-3m",
            duration: "3 Bulan",
            pricePerPax: "Rp32.500",
            priceTotal: "Rp1.950.000",
            showStrike: true,
            isPopular: true,
            details: {
              deskripsi: "Harga terbaik untuk kamu yang sudah yakin dengan gaya hidup meal prep mingguan.",
              porsi: "1 porsi per hari",
              menu: "5 variasi menu per minggu",
              benefit: ["Harga per porsi paling hemat", "Variasi menu mingguan", "Komitmen terbaik untuk kebiasaan sehat"],
            },
          },
        ],
      },
      {
        id: "family",
        name: "Paket Family",
        paxLabel: "4 pax · per hari",
        description: "Solusi lengkap untuk seluruh keluarga. Semua anggota keluarga menikmati makanan rumahan bersama setiap hari kerja.",
        plans: [
          {
            id: "family-1w",
            duration: "1 Minggu",
            pricePerPax: "Rp35.000",
            priceTotal: "Rp700.000",
            showStrike: true,
            isPopular: false,
            details: {
              deskripsi: "Paket keluarga mingguan untuk kamu yang baru mau mencoba layanan Dapur Sepekan bersama keluarga.",
              porsi: "4 porsi per hari",
              menu: "5 variasi menu per minggu",
              benefit: ["Cocok untuk keluarga kecil", "Variasi menu harian"],
            },
          },
          {
            id: "family-1m",
            duration: "1 Bulan",
            pricePerPax: "Rp32.500",
            priceTotal: "Rp2.600.000",
            showStrike: true,
            isPopular: true,
            details: {
              deskripsi: "Paket keluarga bulanan — pilihan terpopuler untuk keluarga yang ingin konsistensi makanan rumahan setiap pekan.",
              porsi: "4 porsi per hari",
              menu: "5 variasi menu per minggu",
              benefit: ["Lebih hemat dari paket mingguan", "Variasi menu mingguan", "Paling banyak dipilih keluarga"],
            },
          },
          {
            id: "family-3m",
            duration: "3 Bulan",
            pricePerPax: "Rp30.000",
            priceTotal: "Rp7.200.000",
            showStrike: true,
            isPopular: false,
            details: {
              deskripsi: "Harga terbaik untuk keluarga yang sudah siap beralih ke solusi makanan mingguan jangka panjang.",
              porsi: "4 porsi per hari",
              menu: "5 variasi menu per minggu",
              benefit: ["Harga per porsi paling hemat", "Variasi menu mingguan", "Nilai terbaik untuk keluarga"],
            },
          },
        ],
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
        question: "Apa pilihan durasi langganan yang tersedia?",
        answer: "Dapur Sepekan akan menyediakan tiga pilihan durasi langganan: 1 minggu, 1 bulan, dan 3 bulan. Detail harga untuk setiap paket akan diumumkan saat launching.",
      },
      {
        question: "Berapa menu yang disiapkan per minggu?",
        answer: "Setiap paket mencakup 5 hari menu per minggu (hari kerja Senin–Jumat). Variasi menu dirancang agar kamu dan keluarga tidak bosan.",
      },
      {
        question: "Di area mana saja Dapur Sepekan melayani pelanggan?",
        answer: "Saat ini Dapur Sepekan hanya melayani pemesanan di wilayah Tangerang Selatan (Tangsel) dan Gading Serpong. Untuk sementara, layanan kami belum tersedia di luar area tersebut. Kami akan menginformasikan apabila cakupan layanan bertambah.",
      },
      {
        question: "Bagaimana cara mendapatkan informasi saat Dapur Sepekan launching?",
        answer: "Daftarkan nama dan username Instagram kamu melalui formulir Early Access di halaman ini. Kami akan menghubungi kamu melalui Instagram saat Dapur Sepekan siap launching, termasuk penawaran eksklusif bagi pendaftar awal.",
      },
    ],
  },

  // ============================================================
  //  COMING SOON — Section di bawah FAQ
  // ============================================================
  comingSoon: {
    badge: "COMING SOON!",
    title: "Jadilah yang pertama mengetahui kabar launching Dapur Sepekan, pilihan menu, dan penawaran spesial dari kami!",
    tagline: "Something delicious is coming to your family table!",
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
      { icon: "✉️", label: "Email",     value: "dsepekan@gmail.com", href: "mailto:dsepekan@gmail.com" },
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
