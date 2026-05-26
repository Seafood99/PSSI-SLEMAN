<script lang="ts">
  type ActivePage = 'home' | 'berita' | 'kompetisi';

  let { active = 'home' }: { active?: ActivePage } = $props();
</script>

<header class="site-header">
  <div class="site-header-inner">
    <a class="brand-mark" href="/" aria-label="Ke beranda PSSI Sleman">
      <span class="logo-button">PS</span>
      <span>
        <strong>PSSI Sleman</strong>
        <small>Portal resmi askab</small>
      </span>
    </a>

    <nav class="main-nav" aria-label="Navigasi utama">
      <a class:active={active === 'home'} href="/">Home</a>
      <a class:active={active === 'berita'} href="/berita">Berita</a>
      <div class="nav-dropdown">
        <a class:active={active === 'kompetisi'} href="/kompetisi">Kompetisi</a>
        <div class="dropdown-menu" aria-label="Daftar seri kompetisi">
          <a href="/kompetisi?seri=seri-a">Seri A</a>
          <a href="/kompetisi?seri=seri-b">Seri B</a>
          <a href="/kompetisi?seri=seri-c">Seri C</a>
          <a href="/kompetisi?seri=seri-d">Seri D</a>
          <a href="/kompetisi#jadwal">Jadwal</a>
          <a href="/kompetisi#klasemen">Klasemen</a>
        </div>
      </div>
    </nav>
  </div>
</header>
