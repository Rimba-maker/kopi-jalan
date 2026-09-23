# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pengunjung yang ingin menemukan kopi keliling di dekat rutinitas mereka; penyelenggara acara dan tim kantor yang ingin memesan coffee cart. Ini berdasarkan PRD dan alur halaman yang ada, belum tervalidasi sebagai bisnis yang aktif.

## Product Purpose

Kopi Jalan adalah konsep kedai kopi keliling yang berpindah titik, menampilkan menu, jadwal, dan opsi coffee cart untuk acara serta pesanan kantor. Keberhasilan halaman: pengunjung memahami konsepnya dan dapat menemukan jadwal atau jalur kontak tanpa mengira data contoh sebagai kabar langsung.

## Positioning

Kopi dibawa mendekati keseharian pengunjung alih-alih menunggu mereka datang ke kedai tetap. Nama Kopi Jalan merujuk pada kopi yang bergerak dan kopi di jalan.

## Operating Context

Jadwal lokasi harian dan mingguan dibaca sebelum berangkat; penawaran event dan kantor dibaca sebelum menghubungi tim. Konten jadwal diambil dari YAML saat build statis dan memerlukan build/deploy ulang setelah diedit. Lokasi harian hanya boleh muncul sebagai terkonfirmasi jika flag manual aktif dan tanggalnya cocok dengan hari ini di zona Asia/Jakarta.

## Capabilities and Constraints

Satu halaman Astro statis dengan koleksi konten hari ini dan mingguan, tanpa React islands. Harga menu dan paket berasal dari PRD, bukan harga terverifikasi terkini. Nama lokasi, alamat, dan rute mingguan masih berupa contoh; status harian bawaan tidak dikonfirmasi. Tidak ada nomor WhatsApp, kanal TikTok, atau email yang dikonfirmasi dalam repo. Instagram @kopijalan.id disebut PRD dan ditautkan dari halaman, tetapi kepemilikan serta respons akunnya belum terverifikasi.

## Brand Commitments

Nama Kopi Jalan dan suara kasual Indonesia yang ramah, membumi, sedikit ringan. Arah visual yang kini dipakai adalah poster kopi jalanan yang art-directed: foto kopi nyata diolah sebagai cutout, dipasangkan dengan bidang kuning–merah, tipografi berat, dan komposisi foto yang bervariasi. Ini memenuhi permintaan pengguna untuk suasana santai/chilling yang terasa lokal dan jauh dari template kafe generik; dokumentasi visual normatif ada di `DESIGN.md`.

## Evidence on Hand

PRD awal di `docs/archive/211-kedai-kopi-keliling-mobile-PRD.md` adalah arsip lokal yang diabaikan Git, bukan laporan operasi. Konten aktual berada di `src/pages/index.astro` dan `src/content/schedule/`; catatan provenance sejumlah aset baru berada di sidecar `public/images/*.json`. Testimoni, klaim jumlah cart/tim, serta nama tempat dalam PRD bukan bukti pelanggan atau operasi nyata yang diverifikasi.

## Product Principles

- Jelaskan kedai keliling lewat adegan dan alur lokasi, bukan jargon kafe.
- Jangan tampilkan tanggal lama atau area contoh sebagai status langsung.
- Pertahankan jalur menu, jadwal, event, dan kantor pada satu halaman.
- Foto stok harus dijelaskan sebagai suasana representatif, bukan dokumentasi operasional Kopi Jalan.
