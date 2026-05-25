export type CompetitionKey = 'Seri A' | 'Seri B' | 'Seri C' | 'Seri D';

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  time: string;
  excerpt: string;
  image: string;
  author: string;
  content: string[];
};

export type Standing = {
  pos: number;
  team: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  goalDiff: number;
  points: number;
};

export type Match = {
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
  competition: CompetitionKey;
  status: 'Belum main' | 'Selesai';
  score?: string;
};

export type Competition = {
  name: CompetitionKey;
  slug: string;
  summary: string;
};

export const competitions: Competition[] = [
  {
    name: 'Seri A',
    slug: 'seri-a',
    summary: 'Level kompetisi utama untuk klub anggota dengan performa paling stabil.'
  },
  {
    name: 'Seri B',
    slug: 'seri-b',
    summary: 'Ruang kompetisi ketat untuk klub yang mengejar promosi ke level utama.'
  },
  {
    name: 'Seri C',
    slug: 'seri-c',
    summary: 'Kompetisi pengembangan untuk klub aktif di wilayah kecamatan Sleman.'
  },
  {
    name: 'Seri D',
    slug: 'seri-d',
    summary: 'Level pembinaan awal untuk klub baru dan akademi sepak bola lokal.'
  }
];

export const news: NewsItem[] = [
  {
    slug: 'pssi-sleman-siapkan-kalender-kompetisi-2026',
    title: 'PSSI Sleman Siapkan Kalender Kompetisi Antar Klub Musim 2026',
    category: 'Kompetisi',
    time: 'Senin, 25 Mei 2026 08.30 WIB',
    excerpt:
      'Empat seri kompetisi disiapkan sebagai ruang pembinaan dan pertandingan reguler untuk klub anggota di Sleman.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    author: 'Redaksi PSSI Sleman',
    content: [
      'PSSI Sleman menyiapkan kalender kompetisi antar klub untuk musim 2026 dengan format empat seri. Pembagian ini dibuat agar jadwal pertandingan lebih mudah dibaca oleh klub, perangkat pertandingan, dan penonton.',
      'Seri A dan Seri B akan menjadi fokus utama pada fase awal. Seri C dan Seri D disiapkan sebagai jalur pembinaan agar klub baru tetap memiliki ruang bertanding yang terukur.',
      'Untuk tahap awal, portal ini menampilkan jadwal dan klasemen berbasis data dummy. Struktur ini disiapkan agar nanti mudah dipindahkan ke database saat data resmi sudah tersedia.'
    ]
  },
  {
    slug: 'seri-a-masuki-pekan-ketiga',
    title: 'Seri A Masuki Pekan Ketiga, Persaingan Papan Atas Makin Ketat',
    category: 'Seri A',
    time: '2 jam yang lalu',
    excerpt:
      'Tiga klub teratas hanya terpaut dua poin setelah rangkaian pertandingan akhir pekan.',
    image:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80',
    author: 'Tim Kompetisi',
    content: [
      'Seri A memasuki pekan ketiga dengan persaingan papan atas yang semakin rapat. Sleman United masih memimpin klasemen sementara, tetapi Merapi FC dan Tridadi Muda terus menempel.',
      'Beberapa laga pekan ini diprediksi menentukan posisi tiga besar. Panitia kompetisi menyiapkan perangkat pertandingan tambahan untuk menjaga kelancaran laga.',
      'Klub peserta diminta memastikan daftar pemain dan perlengkapan pertandingan sudah terverifikasi sebelum hari pertandingan.'
    ]
  },
  {
    slug: 'jadwal-seri-b-dan-seri-c-dimatangkan',
    title: 'Komisi Pertandingan Matangkan Jadwal Seri B dan Seri C',
    category: 'Jadwal',
    time: '4 jam yang lalu',
    excerpt:
      'Pembaruan jadwal akan diumumkan setelah validasi venue dan kesiapan perangkat pertandingan selesai.',
    image:
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&w=900&q=80',
    author: 'Komisi Pertandingan',
    content: [
      'Komisi pertandingan mulai mematangkan jadwal Seri B dan Seri C. Validasi venue menjadi prioritas karena beberapa klub masih menyesuaikan ketersediaan lapangan.',
      'Jadwal sementara akan terus diperbarui sampai seluruh perangkat pertandingan tersedia. Portal ini nantinya menjadi kanal utama untuk melihat perubahan jadwal.',
      'Klub diminta aktif mengonfirmasi kesiapan venue agar jadwal tidak berubah terlalu dekat dengan hari pertandingan.'
    ]
  },
  {
    slug: 'pembinaan-wasit-lokal-jadi-fokus',
    title: 'Pembinaan Wasit Lokal Jadi Fokus Program Kompetisi Tahun Ini',
    category: 'Asprov',
    time: 'Kemarin',
    excerpt:
      'PSSI Sleman menyiapkan evaluasi berkala untuk menjaga kualitas pertandingan di semua seri.',
    image:
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=80',
    author: 'Bidang Pembinaan',
    content: [
      'Pembinaan wasit lokal menjadi salah satu fokus dalam program kompetisi tahun ini. Evaluasi akan dilakukan secara berkala setelah rangkaian pertandingan berjalan.',
      'PSSI Sleman ingin memastikan kualitas kepemimpinan pertandingan tetap konsisten di Seri A sampai Seri D.',
      'Masukan dari klub akan dihimpun sebagai bahan evaluasi internal tanpa mengganggu keputusan pertandingan yang sudah berjalan.'
    ]
  },
  {
    slug: 'seri-d-dibuka-untuk-klub-baru',
    title: 'Seri D Dibuka untuk Klub Baru dan Akademi Sepak Bola Sleman',
    category: 'Seri D',
    time: 'Kemarin',
    excerpt:
      'Format kompetisi dibuat lebih sederhana agar klub pembinaan bisa mendapatkan menit bermain rutin.',
    image:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
    author: 'Redaksi PSSI Sleman',
    content: [
      'Seri D disiapkan untuk klub baru dan akademi sepak bola lokal. Format kompetisi dibuat lebih sederhana agar peserta bisa fokus pada pengalaman bertanding.',
      'Panitia membuka peluang penyesuaian jumlah peserta sambil menunggu data resmi dari klub calon peserta.',
      'Ke depan, Seri D diharapkan menjadi jalur pembinaan yang sehat sebelum klub naik ke level kompetisi berikutnya.'
    ]
  },
  {
    slug: 'klub-seri-c-siapkan-verifikasi-pemain',
    title: 'Klub Seri C Siapkan Verifikasi Pemain Jelang Kick-off',
    category: 'Seri C',
    time: '2 hari yang lalu',
    excerpt:
      'Verifikasi pemain menjadi syarat sebelum klub tampil di pertandingan pembuka Seri C.',
    image:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80',
    author: 'Admin Kompetisi',
    content: [
      'Klub peserta Seri C mulai menyiapkan berkas verifikasi pemain. Tahapan ini diperlukan untuk memastikan seluruh peserta memenuhi ketentuan kompetisi.',
      'Data pemain yang sudah valid akan digunakan sebagai basis daftar susunan pemain saat pertandingan berjalan.',
      'Panitia menargetkan seluruh proses verifikasi selesai sebelum jadwal pekan pertama diumumkan.'
    ]
  }
];

export const standings: Record<CompetitionKey, Standing[]> = {
  'Seri A': [
    { pos: 1, team: 'Sleman United', played: 6, won: 5, draw: 1, lost: 0, goalDiff: 12, points: 16 },
    { pos: 2, team: 'Merapi FC', played: 6, won: 4, draw: 2, lost: 0, goalDiff: 9, points: 14 },
    { pos: 3, team: 'Tridadi Muda', played: 6, won: 4, draw: 1, lost: 1, goalDiff: 7, points: 13 },
    { pos: 4, team: 'Gamping Raya', played: 6, won: 3, draw: 1, lost: 2, goalDiff: 3, points: 10 },
    { pos: 5, team: 'Cangkringan FC', played: 6, won: 2, draw: 2, lost: 2, goalDiff: 1, points: 8 }
  ],
  'Seri B': [
    { pos: 1, team: 'Tempel Putra', played: 5, won: 4, draw: 1, lost: 0, goalDiff: 8, points: 13 },
    { pos: 2, team: 'Kalasan FC', played: 5, won: 3, draw: 2, lost: 0, goalDiff: 6, points: 11 },
    { pos: 3, team: 'Prambanan United', played: 5, won: 3, draw: 1, lost: 1, goalDiff: 5, points: 10 },
    { pos: 4, team: 'Moyudan Muda', played: 5, won: 2, draw: 1, lost: 2, goalDiff: 0, points: 7 },
    { pos: 5, team: 'Ngaglik Raya', played: 5, won: 1, draw: 1, lost: 3, goalDiff: -4, points: 4 }
  ],
  'Seri C': [
    { pos: 1, team: 'Berbah Muda', played: 4, won: 3, draw: 1, lost: 0, goalDiff: 7, points: 10 },
    { pos: 2, team: 'Mlati Selection', played: 4, won: 3, draw: 0, lost: 1, goalDiff: 5, points: 9 },
    { pos: 3, team: 'Depok Raya', played: 4, won: 2, draw: 1, lost: 1, goalDiff: 2, points: 7 },
    { pos: 4, team: 'Pakem FC', played: 4, won: 1, draw: 2, lost: 1, goalDiff: 0, points: 5 },
    { pos: 5, team: 'Seyegan Putra', played: 4, won: 1, draw: 0, lost: 3, goalDiff: -5, points: 3 }
  ],
  'Seri D': [
    { pos: 1, team: 'Akademi Sleman', played: 3, won: 2, draw: 1, lost: 0, goalDiff: 4, points: 7 },
    { pos: 2, team: 'Turi Junior', played: 3, won: 2, draw: 0, lost: 1, goalDiff: 3, points: 6 },
    { pos: 3, team: 'Ngemplak Muda', played: 3, won: 1, draw: 1, lost: 1, goalDiff: 0, points: 4 },
    { pos: 4, team: 'Minggir FC', played: 3, won: 1, draw: 0, lost: 2, goalDiff: -2, points: 3 },
    { pos: 5, team: 'Sleman Barat', played: 3, won: 0, draw: 0, lost: 3, goalDiff: -5, points: 0 }
  ]
};

export const matches: Match[] = [
  {
    date: '26 Mei',
    time: '15.30',
    home: 'Sleman United',
    away: 'Merapi FC',
    venue: 'Lapangan Denggung',
    competition: 'Seri A',
    status: 'Belum main'
  },
  {
    date: '26 Mei',
    time: '19.00',
    home: 'Tridadi Muda',
    away: 'Gamping Raya',
    venue: 'Stadion Tridadi',
    competition: 'Seri A',
    status: 'Belum main'
  },
  {
    date: '27 Mei',
    time: '15.30',
    home: 'Tempel Putra',
    away: 'Kalasan FC',
    venue: 'Lapangan Tempel',
    competition: 'Seri B',
    status: 'Belum main'
  },
  {
    date: '28 Mei',
    time: '15.30',
    home: 'Prambanan United',
    away: 'Moyudan Muda',
    venue: 'Lapangan Prambanan',
    competition: 'Seri B',
    status: 'Belum main'
  },
  {
    date: '29 Mei',
    time: '15.30',
    home: 'Berbah Muda',
    away: 'Mlati Selection',
    venue: 'Lapangan Berbah',
    competition: 'Seri C',
    status: 'Belum main'
  },
  {
    date: '30 Mei',
    time: '15.30',
    home: 'Akademi Sleman',
    away: 'Turi Junior',
    venue: 'Lapangan Turi',
    competition: 'Seri D',
    status: 'Belum main'
  },
  {
    date: '24 Mei',
    time: '15.30',
    home: 'Cangkringan FC',
    away: 'Gamping Raya',
    venue: 'Lapangan Cangkringan',
    competition: 'Seri A',
    status: 'Selesai',
    score: '1-1'
  }
];

export const competitionNames = competitions.map((competition) => competition.name);

export function findCompetitionBySlug(slug: string | null): Competition {
  return competitions.find((competition) => competition.slug === slug) ?? competitions[0];
}

export function findNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug);
}

export function filterNews(query: string): NewsItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return news;
  }

  return news.filter((item) => {
    return [item.title, item.category, item.excerpt, item.author]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery);
  });
}
