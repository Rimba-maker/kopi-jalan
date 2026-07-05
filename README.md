# Kopi Jalan ☕

Landing page untuk **Kopi Jalan** — kedai kopi keliling & mobile coffee cart. Menampilkan jadwal lokasi harian, menu, paket sewa cart untuk event, dan corporate order.

## Tech Stack

- [Astro](https://astro.build) (static site)
- [Tailwind CSS v4](https://tailwindcss.com)
- React islands + [Framer Motion](https://www.framer.com/motion/) untuk animasi
- Astro Content Collections untuk update jadwal harian/mingguan tanpa perlu deploy ulang kode

## Struktur

```
src/
├── components/          # section statis (.astro) + React islands
├── content/schedule/     # today.yaml & weekly.yaml — update jadwal di sini
├── layouts/
└── pages/index.astro
```

## Update Jadwal Harian

Edit `src/content/schedule/today.yaml` untuk mengubah lokasi/jam buka hari ini, dan `weekly.yaml` untuk jadwal rutin mingguan.

## Commands

| Command           | Aksi                                       |
| :---------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Jalankan dev server di `localhost:4321`     |
| `npm run build`    | Build production ke `./dist/`               |
| `npm run preview`  | Preview hasil build                         |
