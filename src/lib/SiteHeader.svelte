<script lang="ts">
  type ActivePage = 'home' | 'berita' | 'kompetisi';

  let { active = 'home', query = '' }: { active?: ActivePage; query?: string } = $props();
</script>

<header class="topbar">
  <div class="topbar-inner">
    <a class="logo-button" href="/" aria-label="Ke beranda PSSI Sleman">
      <span>PS</span>
    </a>
    <form class="search" action="/berita" method="GET">
      <input
        name="q"
        aria-label="Cari berita"
        placeholder="Cari berita PSSI Sleman"
        value={query}
      />
      <button aria-label="Cari">Go</button>
    </form>
    <a class="login-link" href="/kompetisi">Kompetisi</a>
  </div>
</header>

<div class="site-shell header-shell">
  <section class="brand-row" aria-label="Identitas portal">
    <a href="/">
      <p>Portal resmi askab</p>
      <h1><span>PSSI</span> Sleman</h1>
    </a>
    <div class="season-pill">Kompetisi 2026</div>
  </section>

  <nav class="primary-nav" aria-label="Navigasi utama">
    <a class:active={active === 'home'} href="/">Home</a>
    <a class:active={active === 'berita'} href="/berita">Berita</a>
    <a class:active={active === 'kompetisi'} href="/kompetisi">Kompetisi</a>
    <a href="/kompetisi?seri=seri-a">Seri A</a>
    <a href="/kompetisi?seri=seri-b">Seri B</a>
    <a href="/kompetisi?seri=seri-c">Seri C</a>
    <a href="/kompetisi?seri=seri-d">Seri D</a>
    <a href="/kompetisi#jadwal">Jadwal</a>
    <a href="/kompetisi#klasemen">Klasemen</a>
  </nav>

  <nav class="secondary-nav" aria-label="Menu berita">
    <a href="/berita">Terbaru</a>
    <a href="/kompetisi#jadwal">Jadwal Pertandingan</a>
    <a href="/kompetisi#klasemen">Klasemen Liga</a>
    <a href="/berita?q=Seri+A">Seri A</a>
    <a href="/berita?q=Seri+B">Seri B</a>
    <a href="/berita?q=Seri+D">Pembinaan</a>
  </nav>
</div>
