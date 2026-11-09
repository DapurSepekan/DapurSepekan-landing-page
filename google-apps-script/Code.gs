/**
 * ============================================================
 *  DAPUR SEPEKAN — GOOGLE APPS SCRIPT
 *  File: Code.gs
 * ============================================================
 *
 *  CARA PENGGUNAAN:
 *  1. Buka Google Sheets dan buat spreadsheet baru
 *  2. Di menu: Extensions > Apps Script
 *  3. Hapus kode default, lalu copy-paste seluruh kode ini
 *  4. Ganti nilai SPREADSHEET_ID di bawah dengan ID spreadsheet kamu
 *  5. Simpan (Ctrl+S), lalu klik Deploy > New Deployment
 *  6. Pilih Type: Web App
 *  7. Execute as: Me
 *  8. Who has access: Anyone
 *  9. Klik Deploy, lalu salin URL yang diberikan
 *  10. Tempelkan URL tersebut ke file script.js di variabel APPS_SCRIPT_URL
 *
 *  CARA MENEMUKAN SPREADSHEET ID:
 *  URL Google Sheets kamu:
 *  https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
 *  Salin bagian [SPREADSHEET_ID] dari URL tersebut.
 * ============================================================
 */

// ============================================================
//  KONFIGURASI — Ganti nilai di bawah ini
// ============================================================

// Ganti dengan ID spreadsheet Google Sheets kamu
// Cara mendapatkan ID: lihat URL Google Sheets, salin bagian setelah /d/ dan sebelum /edit
var SPREADSHEET_ID = "GANTI_DENGAN_ID_SPREADSHEET_KAMU";

// Nama sheet di dalam spreadsheet (biasanya "Sheet1" atau sesuai yang kamu beri nama)
var SHEET_NAME = "Early Access";


// ============================================================
//  FUNGSI UTAMA — Menerima data dari form website
// ============================================================

/**
 * doPost — Fungsi ini dipanggil setiap kali form di website dikirim.
 * @param {Object} e - Event object dari HTTP POST request
 * @returns {TextOutput} Respons JSON
 */
function doPost(e) {
  try {
    // Ambil data dari form
    var nama      = "";
    var instagram = "";

    // Coba baca dari FormData (cara yang digunakan oleh script.js)
    if (e && e.parameter) {
      nama      = (e.parameter.nama      || "").toString().trim();
      instagram = (e.parameter.instagram || "").toString().trim();
    }

    // Validasi: pastikan data tidak kosong
    if (!nama || !instagram) {
      return ContentService
        .createTextOutput(JSON.stringify({
          status: "error",
          message: "Data tidak lengkap. Nama dan Instagram diperlukan."
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Buka spreadsheet
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Jika sheet belum ada, buat baru dengan header
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Buat baris header
      sheet.appendRow(["Timestamp", "Nama", "Username Instagram"]);

      // Format header agar mudah dibaca
      var headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1B2A4A");
      headerRange.setFontColor("#FFFFFF");
    }

    // Tambahkan baris baru dengan data pendaftar
    var timestamp = new Date();
    sheet.appendRow([timestamp, nama, instagram]);

    // Kirim respons sukses
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Data berhasil disimpan.",
        data: {
          nama: nama,
          instagram: instagram,
          timestamp: timestamp.toString()
        }
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Tangani error dan kirim respons gagal
    Logger.log("Error doPost: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: "Terjadi kesalahan: " + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * doGet — Fungsi tes sederhana untuk memastikan Apps Script berjalan.
 * Buka URL Apps Script di browser untuk melihat hasilnya.
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "ok",
      message: "Dapur Sepekan Apps Script berjalan dengan baik.",
      timestamp: new Date().toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}


/**
 * setupSheet — Fungsi untuk membuat struktur spreadsheet secara manual.
 * Jalankan fungsi ini sekali dari Apps Script Editor jika sheet belum ada:
 * Klik nama fungsi "setupSheet" lalu klik tombol "Run".
 */
function setupSheet() {
  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  // Cek apakah sheet sudah ada
  var existingSheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (existingSheet) {
    Logger.log("Sheet '" + SHEET_NAME + "' sudah ada.");
    return;
  }

  // Buat sheet baru
  var sheet = spreadsheet.insertSheet(SHEET_NAME);

  // Buat header
  sheet.appendRow(["Timestamp", "Nama", "Username Instagram"]);

  // Format header
  var headerRange = sheet.getRange(1, 1, 1, 3);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#1B2A4A");
  headerRange.setFontColor("#FFFFFF");

  // Atur lebar kolom
  sheet.setColumnWidth(1, 200); // Timestamp
  sheet.setColumnWidth(2, 200); // Nama
  sheet.setColumnWidth(3, 200); // Instagram

  // Bekukan baris header
  sheet.setFrozenRows(1);

  Logger.log("Sheet '" + SHEET_NAME + "' berhasil dibuat.");
}
