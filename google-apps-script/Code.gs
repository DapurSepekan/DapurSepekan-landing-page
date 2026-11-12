/**
 * ============================================================
 *  DAPUR SEPEKAN — GOOGLE APPS SCRIPT
 *  Mekanisme: JSON-P via GET
 *  Tab spreadsheet: Leads
 *  Kolom: Timestamp | Nama | Username Instagram | Sumber | Status Lead
 * ============================================================
 *
 *  CARA DEPLOY:
 *  1. Buka Google Sheets → Extensions → Apps Script
 *  2. Paste seluruh kode ini
 *  3. WAJIB: Ganti SPREADSHEET_ID di bawah dengan ID spreadsheet kamu
 *     (URL Google Sheets: https://docs.google.com/spreadsheets/d/[ID-DI-SINI]/edit)
 *  4. Simpan → Deploy → New Deployment → Web App
 *     - Execute as: Me
 *     - Who has access: Anyone
 *  5. Salin URL deployment → paste ke SECTION5_APPS_SCRIPT_URL di script.js
 *
 *  CATATAN PENGUJIAN (Langkah 2 dalam rencana pengujian):
 *  Membuka URL endpoint di browser AKAN MENULIS BARIS BARU ke spreadsheet.
 *  Ini bukan dry-run. Hapus baris tes secara manual dari tab Leads setelah pengujian.
 *  Contoh URL tes (ganti <DEPLOY_URL> dengan URL aktual setelah deploy):
 *  <DEPLOY_URL>?callback=test&nama=CobaDapur&username=test_akun
 *  Respons yang diharapkan: test({"status":"success",...})
 * ============================================================
 */

// ── KONFIGURASI ── Ganti nilai ini sebelum deploy ──────────────────────────
var SPREADSHEET_ID = "GANTI_DENGAN_ID_SPREADSHEET_KAMU";
// Cara mendapatkan ID: lihat URL Google Sheets kamu:
// https://docs.google.com/spreadsheets/d/[INI_ADALAH_ID]/edit
// Salin bagian antara /d/ dan /edit

var SHEET_NAME = "Leads";
// ───────────────────────────────────────────────────────────────────────────

/**
 * doGet — Entry point utama untuk JSON-P.
 *
 * Menerima parameter via URL query string:
 *   callback  : nama fungsi callback JavaScript (wajib, divalidasi ketat)
 *   nama      : nama lengkap pendaftar (wajib)
 *   username  : username Instagram tanpa @ (wajib)
 *   sumber    : asal traffic (opsional, default: "Dapur Sepekan Website")
 *
 * Jaminan: status "success" HANYA dikembalikan setelah sheet.appendRow()
 * berhasil dieksekusi. Jika appendRow melempar exception, blok catch
 * mengembalikan status "error". Tidak ada jalur kode yang mengembalikan
 * "success" sebelum appendRow dipanggil.
 */
function doGet(e) {
  var params = (e && e.parameter) ? e.parameter : {};

  // ── Validasi callback — hanya izinkan identifier JavaScript yang valid ──
  // Ini mencegah injection: nama callback hanya boleh huruf, angka, $, _
  var rawCallback = (params.callback || "").toString();
  var callback    = rawCallback.replace(/[^a-zA-Z0-9_$]/g, "");

  if (!callback || callback.length < 1 || callback.length > 60) {
    // Callback tidak valid — kembalikan JSON biasa (browser tidak bisa membacanya
    // karena CORS, tapi setidaknya server tidak error dan tidak bocorkan data)
    return ContentService
      .createTextOutput(JSON.stringify({
        status:  "error",
        message: "Parameter callback tidak valid atau tidak ada."
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // Fungsi pembantu: bungkus data sebagai JSON-P
  // Format: callbackName({"status":"...","message":"..."});
  function respond(data) {
    return ContentService
      .createTextOutput(callback + "(" + JSON.stringify(data) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  // ── Validasi dan sanitasi parameter input ──

  var nama     = (params.nama     || "").toString().trim();
  var username = (params.username || "").toString().trim();
  var sumber   = (params.sumber   || "Dapur Sepekan Website").toString().trim();

  // Batasi panjang untuk mencegah penyalahgunaan
  if (nama.length > 100) {
    return respond({ status: "error", message: "Nama terlalu panjang (maks 100 karakter)." });
  }
  if (sumber.length > 100) {
    sumber = sumber.substring(0, 100);
  }

  // Normalisasi username: hapus semua @ di awal, lalu tambahkan satu
  username = username.replace(/^@+/, "");
  if (username.length > 30) {
    return respond({ status: "error", message: "Username terlalu panjang (maks 30 karakter)." });
  }

  // Validasi format username Instagram (huruf, angka, titik, underscore saja)
  if (username && !/^[a-zA-Z0-9._]+$/.test(username)) {
    return respond({ status: "error", message: "Format username tidak valid." });
  }

  // Tambahkan @ setelah validasi format
  if (username) username = "@" + username;

  // Validasi field wajib
  if (!nama) {
    return respond({ status: "error", message: "Nama tidak boleh kosong." });
  }
  if (!username) {
    return respond({ status: "error", message: "Username Instagram tidak boleh kosong." });
  }

  // ── Simpan ke spreadsheet ──────────────────────────────────────────────
  // Status "success" HANYA dikirim setelah baris ini (appendRow) berhasil.
  // Jika terjadi exception di manapun dalam try block, catch akan
  // mengembalikan status "error". Tidak ada fallthrough ke success.
  try {
    var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Buat tab Leads jika belum ada (setup otomatis pertama kali)
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Timestamp", "Nama", "Username Instagram", "Sumber", "Status Lead"]);
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1B2A4A");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(1, 180);
      sheet.setColumnWidth(2, 180);
      sheet.setColumnWidth(3, 200);
      sheet.setColumnWidth(4, 220);
      sheet.setColumnWidth(5, 120);
    }

    // ← Ini satu-satunya titik yang dianggap "data berhasil tersimpan"
    sheet.appendRow([new Date(), nama, username, sumber, "New"]);

    // Hanya setelah appendRow selesai tanpa exception, kirim sukses
    return respond({
      status:  "success",
      message: "Pendaftaran berhasil!",
      data:    { nama: nama, username: username }
    });

  } catch (err) {
    // appendRow gagal, spreadsheet tidak ditemukan, atau error lainnya
    // Status "error" dikirim — TIDAK ada sukses palsu
    Logger.log("doGet error: " + err.toString());
    return respond({
      status:  "error",
      message: "Gagal menyimpan data. Pastikan SPREADSHEET_ID sudah benar."
    });
  }
}

/**
 * doPost — Alias ke doGet untuk backward compatibility.
 * Form lama yang masih menggunakan POST tidak akan error.
 */
function doPost(e) {
  return doGet(e);
}

/**
 * setupSheet — Jalankan sekali dari editor untuk membuat tab Leads secara manual.
 * Apps Script Editor → pilih fungsi "setupSheet" → klik Run.
 * (doGet juga akan membuat tab otomatis jika belum ada, tapi fungsi ini
 * berguna untuk mempersiapkan sheet sebelum menerima data pertama.)
 */
function setupSheet() {
  var ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  var exist = ss.getSheetByName(SHEET_NAME);

  if (exist) {
    Logger.log("Sheet '" + SHEET_NAME + "' sudah ada. Tidak ada yang diubah.");
    return;
  }

  var sheet = ss.insertSheet(SHEET_NAME);
  sheet.appendRow(["Timestamp", "Nama", "Username Instagram", "Sumber", "Status Lead"]);

  var h = sheet.getRange(1, 1, 1, 5);
  h.setFontWeight("bold");
  h.setBackground("#1B2A4A");
  h.setFontColor("#FFFFFF");

  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 180);
  sheet.setColumnWidth(2, 180);
  sheet.setColumnWidth(3, 200);
  sheet.setColumnWidth(4, 220);
  sheet.setColumnWidth(5, 120);

  Logger.log("Sheet '" + SHEET_NAME + "' berhasil dibuat dengan 5 kolom.");
}
