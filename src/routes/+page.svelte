<script lang="ts">
  import SiteHeader from '$lib/SiteHeader.svelte';

  let { data } = $props();

  const featured = $derived(data.newsItems[0]);
  const headlineCards = $derived(data.newsItems.slice(1, 5));
  const feed = $derived(data.newsItems.slice(1, 5));
  const popularNews = $derived(data.newsItems.slice(1, 5));
</script>

<svelte:head>
  <title>PSSI Sleman | Portal Sepak Bola Sleman</title>
</svelte:head>

<SiteHeader active="home" />

<main class="site-shell home-shell">
  <section class="club-strip" aria-label="Klub anggota">
    {#each ['SU', 'MF', 'TM', 'GR', 'CF', 'TP', 'KF', 'PU', 'MM', 'NR'] as club}
      <span>{club}</span>
    {/each}
  </section>

  <section class="headline-grid" aria-label="Berita pilihan">
    {#each headlineCards as item}
      <a class="headline-card" href={`/berita/${item.slug}`}>
        <img src={item.image} alt="" />
        <h2>{item.title}</h2>
      </a>
    {/each}
  </section>

  <div class="content-grid">
    <section class="main-column">
      <article class="featured-card">
        <a href={`/berita/${featured.slug}`}>
          <img src={featured.image} alt="" />
          <div class="featured-overlay">
            <span>{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.time}</p>
          </div>
        </a>
        <div class="related-row">
          <div>
            <strong>Berita Terkait</strong>
            <p>Seri A dan Seri B Masuk Agenda Kompetisi Utama Askab</p>
          </div>
          <p>Perangkat pertandingan disiapkan untuk menjaga standar laga.</p>
        </div>
      </article>

      <section class="feed-section">
        <div class="section-heading">
          <h2>News Feed</h2>
          <a href="/berita">Indeks Berita -&gt;</a>
        </div>
        {#each feed as item}
          <a class="feed-card" href={`/berita/${item.slug}`}>
            <img src={item.image} alt="" />
            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <time>{item.time}</time>
            </div>
          </a>
        {/each}
      </section>
    </section>

    <aside class="sidebar">
      <section class="panel">
        <div class="panel-heading">
          <h2>Jadwal Hari Ini</h2>
          <a class="panel-link" href="/kompetisi#jadwal">Semua Seri</a>
        </div>
        <div class="match-list">
          {#each data.matches.slice(0, 3) as match}
            <article>
              <div class="team-pair">
                <strong>{match.home}</strong>
                <span>{match.away}</span>
              </div>
              <div class="match-meta">
                <b>{match.date}</b>
                <span>{match.time}</span>
              </div>
            </article>
          {/each}
        </div>
      </section>

      <section class="panel">
        <div class="panel-heading">
          <h2>Klasemen</h2>
          <a class="panel-link" href="/kompetisi?seri=seri-a#klasemen">Seri A</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Tim</th>
              <th>D</th>
              <th>M</th>
              <th>Pn</th>
            </tr>
          </thead>
          <tbody>
            {#each data.standingRows as row}
              <tr>
                <td>{row.pos}</td>
                <td>{row.team}</td>
                <td>{row.played}</td>
                <td>{row.won}</td>
                <td>{row.points}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </section>

      <section class="popular panel">
        <h2>Berita Terpopuler</h2>
        {#each popularNews as item, index}
          <a href={`/berita/${item.slug}`}>
            <span>#{index + 1}</span>
            {item.title}
          </a>
        {/each}
      </section>
    </aside>
  </div>
</main>
