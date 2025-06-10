# Aplikasi Manajemen Proyek React

Aplikasi manajemen proyek modern dan responsif yang dibangun menggunakan React dan Tailwind CSS. Aplikasi ini membantu pengguna mengelola proyek dan tugas-tugas terkait secara efektif.

## Fitur

- **Manajemen Proyek**
  - Membuat proyek baru dengan judul, deskripsi, dan tanggal jatuh tempo
  - Melihat daftar semua proyek di sidebar
  - Memilih dan beralih antara proyek yang berbeda
  - Deteksi duplikasi proyek untuk mencegah konflik penamaan

- **Manajemen Tugas**
  - Menambahkan tugas ke proyek tertentu
  - Melihat tugas yang terkait dengan setiap proyek
  - Menghapus tugas dari proyek
  - Fungsi pembersihan tugas

- **Antarmuka Pengguna**
  - Navigasi sidebar yang bersih dan intuitif
  - Desain responsif menggunakan Tailwind CSS
  - Animasi dan transisi yang halus
  - Sistem notifikasi yang mudah digunakan

## Teknologi yang Digunakan

- **React** - Library frontend
- **Tailwind CSS** - Styling dan desain responsif
- **Vite** - Alat build dan lingkungan pengembangan
- JavaScript Modern (ES6+)

## Memulai

### Prasyarat

- Node.js (versi 14 atau lebih tinggi)
- npm (Node Package Manager)

### Instalasi

1. Clone repository
```bash
git clone [repository-url]
```

2. Masuk ke direktori proyek
```bash
cd Project-Management-React
```

3. Install dependensi
```bash
npm install
```

4. Jalankan server pengembangan
```bash
npm run dev
```

Aplikasi akan tersedia di `http://localhost:5173`

## Struktur Proyek

```
Project-Management-React/
├── src/
│   ├── Components/
│   │   ├── DaftarTugas.jsx
│   │   ├── MainContent.jsx
│   │   ├── Notification.jsx
│   │   ├── Sidebar.jsx
│   │   └── Task.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
└── package.json
```

## Detail Fitur

### Pembuatan Proyek
- Pengguna dapat membuat proyek baru dengan mengklik "Add Project" di sidebar
- Setiap proyek memerlukan judul, deskripsi, dan tanggal jatuh tempo
- Validasi memastikan semua bidang terisi
- Mencegah judul proyek yang duplikat

### Manajemen Tugas
- Tugas dapat ditambahkan ke proyek yang dipilih
- Setiap tugas terhubung dengan proyek induknya
- Tugas dapat dihapus secara individual
- Organisasi tugas yang jelas di bawah setiap proyek

### Sistem Notifikasi
- Menampilkan notifikasi untuk berbagai tindakan pengguna
- Menampilkan kesalahan validasi
- Menunjukkan judul proyek yang duplikat
- Otomatis hilang setelah 3 detik

## Styling

Aplikasi menggunakan Tailwind CSS untuk styling dengan konfigurasi khusus untuk:
- Layout dan animasi sidebar
- Input form dan tombol
- Alert notifikasi
- Elemen desain responsif

## Lisensi

Proyek ini bersifat open-source dan tersedia di bawah Lisensi MIT.

## Kontribusi

Kontribusi sangat diterima! Silakan ajukan Pull Request.
