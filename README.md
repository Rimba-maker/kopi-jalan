# Kopi Jalan

Landing page satu halaman untuk konsep kedai kopi keliling. Pengunjung dapat melihat menu, gambaran rute mingguan, opsi sewa coffee cart, dan opsi pesanan kantor. Ini belum menjadi sumber informasi operasional langsung: titik singgah saat ini belum dikonfirmasi, harga berasal dari brief, dan foto adalah ilustrasi stok.

## Teknologi dan struktur

- Astro 7 dengan output statis, TypeScript strict, dan Tailwind CSS v4. Halaman saat ini tidak memakai React islands atau Framer Motion; gerak masuk gelas kopi memakai CSS dan menghormati `prefers-reduced-motion`.
- `src/pages/index.astro` adalah satu-satunya halaman. `src/layouts/Layout.astro` memuat metadata dan gambar Open Graph; `src/styles/global.css` memuat token, font lokal, dan tata letak responsif.
- `src/content.config.ts` mendefinisikan koleksi `today` dan `weekly` dari `src/content/schedule/today.yaml` serta `weekly.yaml`. Keduanya dibaca ketika halaman dibangun, bukan dimuat ulang otomatis di browser.
- `src/components/Arrow.astro` adalah ikon tautan. Foto berada di `public/images/`; sejumlah aset baru memiliki catatan asal gambar pada berkas `.json` di sebelahnya. Gelas tanpa latar pada hero berasal dari foto stok menu yang sudah ada; foto dan ilustrasi tidak menggambarkan operasi Kopi Jalan yang terverifikasi.

## Menjalankan proyek

Memerlukan Node.js 22.12 atau lebih baru.

| Perintah | Hasil |
|---|---|
| `npm install` | Memasang dependensi. |
| `npm run dev` | Menjalankan server pengembangan di `http://localhost:4321/`. Astro 7 menjalankannya sebagai daemon; gunakan `npx astro dev status`, `logs`, atau `stop` untuk mengelolanya. |
| `npm run build` | Membuat situs statis di `dist/`. |
| `npm run preview` | Meninjau build produksi pada path `/kopi-jalan/`. |

Konfigurasi build menggunakan `https://Rimba-maker.github.io/kopi-jalan/` sebagai URL kanonis. Workflow `.github/workflows/deploy.yml` dikonfigurasi untuk menerbitkan ke GitHub Pages ketika cabang `master` diperbarui; konfigurasi itu bukan bukti situs atau bisnis sudah aktif.

## Memperbarui jadwal

1. Edit `src/content/schedule/today.yaml`. Biarkan `confirmed: false` sampai lokasi, alamat, jam, dan tautan peta benar-benar dikonfirmasi.
2. Untuk menampilkan titik singgah, set `confirmed: true` **dan** isi `day` dengan tanggal hari itu dalam format Indonesia yang mencakup nama hari. Skrip di `src/pages/index.astro` hanya menampilkan data ini saat tanggal pada `day` cocok dengan tanggal saat ini menurut zona `Asia/Jakarta`; jika tanggal tidak cocok, halaman menampilkan status belum dikonfirmasi. Pastikan nama hari juga benar secara kalender.
3. Edit `src/content/schedule/weekly.yaml` jika gambaran rute berubah. Saat ini rute tersebut adalah contoh dari brief, bukan jadwal operasional yang terverifikasi.
4. Bangun dan terbitkan ulang situs untuk memublikasikan perubahan YAML. Mengedit file saja tidak memperbarui situs statis yang sudah terbit.

Jangan mengubah harga contoh menjadi penawaran nyata, atau mengarahkan pengunjung ke nomor WhatsApp/TikTok/email yang belum dikonfirmasi. Tautan Instagram `@kopijalan.id` ada di halaman sesuai brief, tetapi kepemilikan dan respons akunnya belum diverifikasi.

## Dokumentasi desain dan produk

- [PRODUCT.md](PRODUCT.md): tujuan produk, audiens, dan batasan fakta.
- [DESIGN.md](DESIGN.md): sistem visual poster kopi jalanan; token yang benar-benar dipakai berasal dari `src/styles/global.css`.
- [.impeccable/surfaces/src-pages-index-astro.md](.impeccable/surfaces/src-pages-index-astro.md): keputusan khusus halaman. Tangkapan layar tinjauan ada di `.impeccable/review/`.
- `211-kedai-kopi-keliling-mobile-PRD.md`: brief awal lokal yang diabaikan Git; bagian yang belum diimplementasikan atau belum terverifikasi tidak boleh dibaca sebagai fakta situs saat ini.
