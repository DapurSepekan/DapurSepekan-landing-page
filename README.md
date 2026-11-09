# Dapur Sepekan — Landing Page Pre-Launch

Landing page pre-launch untuk brand **Dapur Sepekan**.

> Your Family Weekly Home-Cooked Meal Solution.

---

## 📁 Struktur Project

```
dapursepekan-landing-page/
│
├── index.html              → Struktur halaman utama
├── style.css               → Desain dan tampilan website
├── content.js              → Semua konten (teks, harga, FAQ, dll.) — edit di sini
├── script.js               → Fungsi interaktif (popup, FAQ, form, animasi)
│
├── assets/                 → Folder untuk logo dan gambar
│   ├── logo-dapur-sepekan.png   ← Letakkan file logo di sini
│   ├── favicon.png              ← Favicon (ikon tab browser)
│   ├── hero-food.jpg            ← Gambar utama halaman hero
│   ├── family-meal.jpg          ← Gambar Family Package
│   ├── single-meal.jpg          ← Gambar Single Package
│   ├── chilled-food.jpg         ← Gambar format Chilled
│   └── frozen-food.jpg          ← Gambar format Frozen
│
├── google-apps-script/
│   └── Code.gs             → Kode Google Apps Script untuk menyimpan data form
│
├── README.md               → Panduan teknis ini
└── EDITING-GUIDE.md        → Panduan edit konten untuk pemula
```

---

## 🚀 Cara Menjalankan Website Secara Lokal

### Cara 1 — Paling Mudah (Buka Langsung)
1. Buka folder project di File Explorer (Windows) atau Finder (Mac)
2. Double-click file `index.html`
3. Website akan terbuka di browser

> ⚠️ Beberapa fitur mungkin tidak berjalan sempurna dengan cara ini karena pembatasan browser untuk file lokal.

### Cara 2 — Menggunakan VS Code Live Server (Disarankan)
1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Buka VS Code, klik **Extensions** (ikon kotak di sidebar kiri)
3. Cari "Live Server" dan install ekstensi dari Ritwick Dey
4. Buka folder project: File > Open Folder > pilih folder `dapursepekan-landing-page`
5. Klik kanan file `index.html` di sidebar > **Open with Live Server**
6. Browser akan otomatis membuka `http://127.0.0.1:5500`
7. Website akan **otomatis refresh** setiap kamu menyimpan perubahan

### Cara 3 — Menggunakan Python (jika sudah terinstall)
```bash
# Masuk ke folder project
cd dapursepekan-landing-page

# Jalankan server lokal
python -m http.server 8000

# Buka di browser: http://localhost:8000
```

---

## 🖼️ Cara Mengganti Logo

1. Siapkan file logo dalam format **PNG dengan background transparan**
2. Beri nama file: **`logo-dapur-sepekan.png`**
3. Pindahkan file ke folder **`assets/`**
4. Refresh browser — logo akan otomatis muncul

Jika ingin menggunakan nama file yang berbeda, edit bagian ini di `content.js`:
```js
logo: "assets/nama-logo-kamu.png",
```

---

## 🖼️ Cara Mengganti Gambar

1. Siapkan file gambar (format JPG, PNG, atau WebP)
2. Pindahkan ke folder **`assets/`**
3. Gunakan nama file sesuai tabel di bawah, ATAU ubah nama di `content.js`

### Daftar gambar yang dibutuhkan:

| File | Ukuran Disarankan | Keterangan |
|------|-------------------|------------|
| `hero-food.jpg` | 800×600 px | Gambar besar di halaman utama |
| `family-meal.jpg` | 400×300 px | Gambar Family Package |
| `single-meal.jpg` | 400×300 px | Gambar Single Package |
| `chilled-food.jpg` | 600×400 px | Gambar format Chilled |
| `frozen-food.jpg` | 600×400 px | Gambar format Frozen |
| `favicon.png` | 64×64 px | Ikon kecil di tab browser |

---

## ✏️ Cara Mengubah Teks dan Harga Placeholder

Semua teks dan harga dikelola di file **`content.js`**.

### Mengubah harga:
Cari `PRICE_PLACEHOLDER` di `content.js` dan ganti dengan harga sebenarnya:
```js
// Sebelum:
price: "PRICE_PLACEHOLDER",

// Sesudah:
price: "Rp 150.000/minggu",
```

### Mengubah teks lainnya:
Lihat **`EDITING-GUIDE.md`** untuk panduan lengkap dengan contoh sebelum & sesudah.

---

## 📊 Cara Membuat Google Sheet

1. Buka [Google Sheets](https://sheets.google.com) dan login dengan akun Google
2. Klik **+ Blank** untuk membuat spreadsheet baru
3. Beri judul spreadsheet, misalnya: **"Dapur Sepekan — Early Access"**
4. Salin **ID Spreadsheet** dari URL:
   ```
   https://docs.google.com/spreadsheets/d/[INI_ADALAH_ID_SPREADSHEET]/edit
   ```
   Contoh ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms`

---

## ⚙️ Cara Deploy Google Apps Script

1. Di Google Sheets yang sudah dibuat, klik menu **Extensions > Apps Script**
2. Hapus semua kode yang ada (kode default `function myFunction()`)
3. **Copy-paste** seluruh isi file `google-apps-script/Code.gs` ke editor Apps Script
4. Ganti nilai `SPREADSHEET_ID` dengan ID spreadsheet kamu:
   ```js
   var SPREADSHEET_ID = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms";
   ```
5. Simpan: klik ikon 💾 atau **Ctrl+S / Cmd+S**
6. Beri nama project, misalnya: "Dapur Sepekan Form Handler"
7. Klik **Deploy > New Deployment**
8. Klik ikon ⚙️ (gear) di sebelah "Select type" > pilih **Web App**
9. Atur konfigurasi:
   - **Description:** Dapur Sepekan Form Handler
   - **Execute as:** Me
   - **Who has access:** Anyone
10. Klik **Deploy**
11. **Izinkan akses** jika diminta (klik "Review Permissions" > pilih akun Google kamu > "Allow")
12. **Salin URL** yang diberikan — URL terlihat seperti:
    ```
    https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXX/exec
    ```

---

## 🔗 Cara Memasukkan URL Apps Script

1. Buka file **`script.js`**
2. Cari baris ini di bagian atas file:
   ```js
   const APPS_SCRIPT_URL = "GANTI_DENGAN_URL_APPS_SCRIPT_KAMU";
   ```
3. Ganti dengan URL yang sudah disalin:
   ```js
   const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXXXX/exec";
   ```
4. Simpan file

---

## 🧪 Cara Menguji Formulir

### Sebelum URL Apps Script diisi:
- Formulir akan berjalan dalam **mode demo**
- Data tidak akan tersimpan ke Google Sheets
- Popup "Terima Kasih" tetap akan muncul
- Di console browser (F12 > Console) akan muncul pesan: `⚠️ URL Apps Script belum dikonfigurasi`

### Setelah URL Apps Script diisi:
1. Buka website di browser
2. Isi formulir: masukkan nama dan username Instagram
3. Klik **Daftar Early Access**
4. Popup "Terima Kasih" harus muncul
5. Buka Google Sheets kamu — data harus muncul dalam hitungan detik

### Catatan teknis:
Karena Google Apps Script memiliki keterbatasan CORS, website menggunakan `mode: "no-cors"` saat mengirim data. Artinya browser tidak bisa membaca respons dari server. Jika data muncul di Google Sheets, berarti pengiriman berhasil.

---

## 🌐 Cara Deploy Website ke Vercel

[Vercel](https://vercel.com) adalah platform hosting gratis yang sangat mudah digunakan.

### Langkah-langkah:

1. **Buat akun Vercel** di https://vercel.com (bisa login dengan akun GitHub/Google)

2. **Upload project ke GitHub terlebih dahulu:**
   - Buat akun [GitHub](https://github.com) jika belum punya
   - Buat repository baru
   - Upload semua file project ke repository tersebut

3. **Deploy ke Vercel:**
   - Di dashboard Vercel, klik **Add New > Project**
   - Pilih repository GitHub yang berisi project ini
   - Klik **Deploy**
   - Tunggu beberapa detik — website sudah online!

4. **Domain custom (opsional):**
   - Di dashboard Vercel, masuk ke project > **Settings > Domains**
   - Tambahkan domain kamu (misalnya `dapursepekan.id`)

### Alternatif tanpa GitHub (drag & drop):
1. Buka https://vercel.com/new
2. Scroll ke bawah, cari opsi **"Or deploy from your computer"**
3. Drag & drop folder `dapursepekan-landing-page` ke area upload
4. Website langsung online

---

## 📞 Bantuan

Jika mengalami kesulitan, lihat **`EDITING-GUIDE.md`** untuk panduan edit konten yang lebih detail dengan contoh sebelum dan sesudah perubahan.
