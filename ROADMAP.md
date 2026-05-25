
# Roadmap PSSI Sleman Portal

Dokumen ini jadi pegangan arah pengembangan project PSSI Sleman agar scope tetap jelas dan tidak melebar terlalu cepat.

## Keputusan Stack Awal

Project ini diarahkan sebagai project **full SvelteKit**.

- Frontend memakai SvelteKit.
- Backend awal memakai server-side SvelteKit, bukan Laravel.
- Data awal memakai dummy data.
- Laravel ditahan dulu, kecuali kebutuhan backend/admin sudah jauh lebih kompleks.

## Tahap 1: Rapikan FE Jadi Portal Utuh

Tujuan tahap ini adalah membuat user flow terasa seperti portal berita dan kompetisi yang nyata, walaupun datanya masih dummy.

- [x] Buat halaman `/berita`.
- [x] Buat detail berita `/berita/[slug]`.
- [x] Buat halaman `/kompetisi`.
- [x] Buat tab/filter `Seri A`, `Seri B`, `Seri C`, dan `Seri D`.
- [x] Klasemen dan jadwal bisa berganti sesuai seri.
- [x] Tambahkan search berita sederhana.

Catatan:

- Data masih boleh dummy.
- Fokus utama adalah struktur halaman, navigasi, dan pengalaman pengguna.
- Beranda harus tetap terasa seperti portal sepak bola, mengacu pada reference visual yang sudah ada.

## Tahap 2: Backend SvelteKit Ringan

Backend mulai dibuat dari SvelteKit sendiri melalui API internal.

Endpoint awal:

- [x] `src/routes/api/news/+server.ts`
- [x] `src/routes/api/competitions/+server.ts`
- [x] `src/routes/api/matches/+server.ts`
- [x] `src/routes/api/standings/+server.ts`
- [x] `src/routes/api/news/[slug]/+server.ts`

Tujuan:

- [x] Frontend tidak langsung membaca dummy data dari file komponen.
- [x] Data diambil lewat API internal.
- [x] Project mulai terasa sebagai full-stack SvelteKit.
- Tetap sederhana dan mudah dipahami untuk project pertama full SvelteKit.

## Tahap 3: Database

Kalau sudah butuh data yang bisa disimpan dan dikelola, tambahkan database.

Rekomendasi awal:

- SQLite untuk local/simple.
- Prisma atau Drizzle sebagai ORM.

Tabel awal:

- `news`
- `competitions`
- `teams`
- `standings`
- `matches`

Catatan:

- SQLite cukup untuk tahap awal karena ringan.
- Prisma atau Drizzle dipilih nanti setelah mempertimbangkan kebutuhan dan kenyamanan development.
- Laravel belum perlu di tahap ini jika kebutuhan masih bisa ditangani SvelteKit.

## Tahap 4: Admin Panel

Tahap ini membuat website benar-benar bisa dikelola.

Fitur admin:

- Login admin.
- CRUD berita.
- Upload thumbnail.
- CRUD kompetisi/seri.
- CRUD klub/tim.
- Input jadwal.
- Input/update klasemen.

Rute admin yang direncanakan:

- `/admin/login`
- `/admin/berita`
- `/admin/kompetisi`
- `/admin/jadwal`
- `/admin/klasemen`

Catatan:

- Admin panel tetap diarahkan memakai SvelteKit.
- Auth, upload, dan validasi dipilih saat mulai masuk tahap ini.

## Tahap 5: Polish

Tahap ini fokus ke kualitas akhir, SEO, dan kesiapan deploy.

- SEO metadata detail berita.
- Responsive mobile.
- Pagination berita.
- Filter jadwal.
- Status pertandingan: belum main, live, selesai.
- Deploy.

## Urutan Kerja Terdekat

Urutan terbaik untuk saat ini:

1. Selesaikan FE pages: beranda, berita, detail berita, kompetisi. `[selesai]`
2. Pindahkan dummy data ke API SvelteKit. `[selesai]`
3. Tambahkan database. `[berikutnya]`
4. Tambahkan admin CRUD.

## Batasan Scope Saat Ini

- Jangan langsung masuk Laravel.
- Jangan langsung bikin admin sebelum halaman publiknya rapi.
- Jangan langsung pakai database sebelum struktur data dummy dan API internalnya jelas.
- Fokus project pertama adalah belajar dan membuktikan full SvelteKit dari frontend sampai backend ringan.
