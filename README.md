# Moonton Checker 🔎

Tool validasi akun Mobile Legends: Bang Bang (Moonton) berbasis web dengan fitur scraping proxy publik otomatis.  
Dirancang untuk **edukasi dan pengujian akun milik sendiri**. Tidak untuk disalahgunakan.

---

## ✨ Fitur Utama

- ✅ **Checker Akun** – Cek validitas akun Mobile Legends menggunakan API resmi Moonton.
- 🔄 **Multi-Threading** – Proses pengecekan cepat dengan thread yang bisa diatur (1–20).
- 🌐 **Proxy Scraper Otomatis** – Mengambil dan memvalidasi proxy publik dari `free-proxy-list.net` saat server dijalankan.
- 🖥️ **Server-side Proxy** – Request ke API Moonton dilakukan melalui server Node.js sehingga bebas dari CORS browser.
- 📊 **Statistik & Live Log** – Pantau progres, hasil sukses, dan gagal secara real-time.
- 📁 **Ekspor Hasil** – Unduh file `live.txt` / `die.txt` atau salin seluruh hasil ke clipboard.
- 🎨 **UI Retro Cyberpunk** – Tampilan gelap ala terminal dengan animasi khas.

---

## ⚙️ Persyaratan

- [Node.js](https://nodejs.org) versi **16.x** atau lebih baru
- NPM (biasanya sudah termasuk dengan Node.js)
- Koneksi internet (untuk scraping proxy dan pengecekan API Moonton)

---

## 📦 Instalasi

1. **Clone repositori** (atau download ZIP)
   ```bash
   git clone https://github.com/ellxyz-null/ml-check.git
   cd mlcheck
