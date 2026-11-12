# 📝 Panduan Mengedit Website Dapur Sepekan

> Panduan ini ditulis khusus untuk pemula.
> Kamu **tidak perlu memahami coding** untuk mengubah konten website.
> Semua perubahan teks, harga, dan gambar dilakukan melalui satu file saja: **`content.js`**

---

## 🗂️ File-File Penting

| File | Fungsi |
|------|--------|
| `content.js` | ✏️ Semua teks dan konten yang bisa kamu ubah |
| `style.css` | 🎨 Warna dan tampilan website |
| `index.html` | 🏗️ Struktur halaman (tidak perlu diedit) |
| `script.js` | ⚙️ Fungsi interaktif (tidak perlu diedit) |
| `assets/` | 🖼️ Folder untuk logo dan gambar |

---

## 1. Cara Mengganti Headline

**File yang diedit:** `content.js`

**Cari bagian ini:**
```js
hero: {
  headline: "Makanan Rumahan Keluarga,<br>Lebih Praktis Setiap Pekan.",
```

**Sebelum:**
```js
headline: "Makanan Rumahan Keluarga,<br>Lebih Praktis Setiap Pekan.",
```

**Sesudah (contoh perubahan):**
```js
headline: "Makanan Enak untuk Keluarga,<br>Tanpa Repot Memasak.",
```

> 💡 **Tips:** `<br>` berfungsi seperti tombol Enter — digunakan untuk memindahkan teks ke baris baru.

---

## 2. Cara Mengganti Deskripsi/Subheadline

**File yang diedit:** `content.js`

**Cari bagian ini:**
```js
subheadline: "Dapur Sepekan hadir untuk keluarga urban...",
```

**Sebelum:**
```js
subheadline: "Dapur Sepekan hadir untuk keluarga urban yang ingin menikmati makanan rumahan lezat tanpa harus repot berbelanja dan memasak setiap hari.",
```

**Sesudah (contoh perubahan):**
```js
subheadline: "Nikmati makanan rumahan setiap hari bersama keluarga, tanpa perlu berbelanja dan memasak sendiri.",
```

---

## 3. Cara Mengganti Harga Paket

**File yang diedit:** `content.js`

**Cari bagian ini:**
```js
price: "PRICE_PLACEHOLDER",  // ← Ganti dengan harga sebenarnya
```

Ada **4 paket** yang perlu diisi harganya. Cari semua baris dengan `PRICE_PLACEHOLDER`.

**Sebelum:**
```js
price: "PRICE_PLACEHOLDER",
```

**Sesudah (contoh):**
```js
price: "Rp 150.000/minggu",
```

> ⚠️ **Penting:** Setelah mengganti harga, hapus komentar `// ← Ganti dengan harga sebenarnya` agar terlihat rapi.

---

## 4. Cara Mengganti Foto/Gambar

### Langkah-langkah:

1. **Siapkan file gambar kamu** (format JPG atau PNG)
2. **Pindahkan file ke folder `assets/`**
3. **Beri nama file sesuai panduan di bawah**

### Nama file gambar yang digunakan:

| Nama File | Digunakan untuk |
|-----------|----------------|
| `hero-food.jpg` | Foto besar di halaman utama (hero section) |
| `single-meal.jpg` | Foto untuk Single Package |
| `family-meal.jpg` | Foto untuk Family Package |
| `chilled-food.jpg` | Foto untuk format Chilled |
| `frozen-food.jpg` | Foto untuk format Frozen |

### Jika ingin menggunakan nama file yang berbeda:

**File yang diedit:** `content.js` — cari bagian `images:`

**Sebelum:**
```js
heroImage: "assets/hero-food.jpg",
```

**Sesudah (sesuaikan nama file kamu):**
```js
heroImage: "assets/foto-makanan-hero.jpg",
```

> 💡 **Tips ukuran gambar yang disarankan:**
> - Gambar hero: 800 × 600 piksel
> - Gambar paket: 400 × 300 piksel
> - Format gambar: JPG atau WebP untuk ukuran file lebih kecil

---

## 5. Cara Mengganti Logo

### Langkah-langkah:

1. **Siapkan file logo** (format PNG dengan background transparan — **disarankan**)
2. **Pindahkan file ke folder `assets/`**
3. **Beri nama file: `logo-dapur-sepekan.png`**

Website akan otomatis menggunakan logo tersebut.

### Jika ingin nama file yang berbeda:

**File yang diedit:** `content.js` — cari bagian `images:`

**Sebelum:**
```js
logo: "assets/logo-dapur-sepekan.png",
```

**Sesudah:**
```js
logo: "assets/nama-logo-baru.png",
```

> ⚠️ Jika file logo belum ada, website akan otomatis menampilkan placeholder teks "DS" sebagai logo sementara.

---

## 6. Cara Mengganti Warna Website

**File yang diedit:** `style.css` — buka bagian paling atas (`:root`)

**Cari bagian ini:**
```css
:root {
  --color-navy:   #1B2A4A;  /* Warna biru navy utama */
  --color-orange: #E8662A;  /* Warna oranye aksen */
  --color-cream:  #FDF8F2;  /* Background cream hangat */
```

**Untuk mencari kode warna baru:**
1. Buka https://www.google.com/search?q=color+picker
2. Pilih warna yang kamu inginkan
3. Salin kode HEX (contoh: `#FF6B35`)

**Sebelum:**
```css
--color-orange: #E8662A;
```

**Sesudah (contoh ganti warna aksen ke merah):**
```css
--color-orange: #E53E3E;
```

---

## 7. Cara Menambah atau Mengubah FAQ

**File yang diedit:** `content.js` — cari bagian `faq:`

### Mengubah pertanyaan yang sudah ada:

**Cari:**
```js
{
  question: "Apa itu Dapur Sepekan?",
  answer: "Dapur Sepekan adalah layanan...",
},
```

**Ganti teks `question` dan `answer` sesuai kebutuhan.**

### Menambah pertanyaan baru:

Cari bagian akhir `questions: [` dan tambahkan item baru **sebelum** tanda `]`:

**Sebelum:**
```js
{
  question: "Bagaimana cara mendapatkan informasi launching?",
  answer: "Daftarkan nama dan username Instagram...",
},
```

**Sesudah (tambahkan di bawahnya, sebelum ]):
```js
{
  question: "Bagaimana cara mendapatkan informasi launching?",
  answer: "Daftarkan nama dan username Instagram...",
},
{
  question: "Pertanyaan baru kamu di sini?",
  answer: "Jawaban pertanyaan baru kamu di sini.",
},
```

> ⚠️ **Perhatikan koma (`,`) setelah setiap `}` kecuali item terakhir sebelum `]`.**

### Menghapus pertanyaan:

Hapus seluruh blok `{...},` dari pertanyaan yang ingin dihapus.

---

## 8. Cara Mengubah Informasi Kontak

**File yang diedit:** `content.js`

**Cari bagian `brand:`:**
```js
brand: {
  instagram: "@dapursepekan",
  instagramUrl: "https://instagram.com/dapursepekan",
  email: "dsepekan@gmail.com",
```

**Ganti dengan informasi resmi kamu.**

Cari juga bagian `footer:` > `contactItems:`:
```js
contactItems: [
  { icon: "📸", label: "Instagram", value: "@dapursepekan", href: "https://instagram.com/dapursepekan" },
  { icon: "✉️", label: "Email",     value: "dsepekan@gmail.com", href: "mailto:dsepekan@gmail.com" },
],
```

---

## 9. Cara Menyimpan Perubahan dan Melihat Hasilnya

### Menyimpan perubahan:
- **Windows:** Tekan `Ctrl + S`
- **Mac:** Tekan `Cmd + S`

### Melihat hasilnya di browser:

**Cara 1 — Buka langsung (paling mudah):**
1. Buka folder project di File Explorer / Finder
2. Double-click file `index.html`
3. File akan terbuka di browser

**Cara 2 — Menggunakan VS Code Live Server (disarankan):**
1. Install ekstensi "Live Server" di VS Code
2. Klik kanan `index.html` > "Open with Live Server"
3. Website akan otomatis refresh setiap kali kamu menyimpan

> 💡 **Tips:** Gunakan Cara 2 agar tidak perlu refresh manual setiap ada perubahan.

---

## ❓ Pertanyaan Umum

**Q: Apakah aman mengedit `content.js`?**
A: Ya, sangat aman. File ini dirancang khusus untuk diedit. Selama kamu tidak menghapus tanda `"`, `,`, atau `{}`, website akan tetap berjalan normal.

**Q: Apa yang terjadi jika ada kesalahan setelah diedit?**
A: Buka browser > klik kanan > Inspect > Console. Jika ada pesan error merah, kemungkinan ada tanda kutip atau koma yang terhapus. Cek kembali bagian yang terakhir kamu edit.

**Q: Bisakah saya mengubah urutan FAQ?**
A: Bisa. Cukup cut-paste seluruh blok `{question: ..., answer: ...},` ke posisi yang kamu inginkan dalam array `questions`.

---

*Panduan ini dibuat untuk memudahkan pengelolaan website Dapur Sepekan tanpa keahlian programming.*
