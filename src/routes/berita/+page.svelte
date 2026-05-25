<script lang="ts">
  import SiteHeader from '$lib/SiteHeader.svelte';

  let { data } = $props();

  const popularNews = $derived(data.items.slice(0, 4));
</script>

<svelte:head>
  <title>Berita | PSSI Sleman</title>
</svelte:head>

<SiteHeader active="berita" query={data.query} />

<main class="site-shell page-shell">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span>/</span>
    <b>Berita</b>
  </nav>

  <section class="page-hero">
    <p>Indeks berita</p>
    <h1>Berita PSSI Sleman</h1>
    <span>{data.items.length} artikel ditemukan</span>
  </section>

  <div class="content-grid">
    <section class="listing-column">
      {#if data.query}
        <p class="result-note">Hasil pencarian untuk <strong>"{data.query}"</strong></p>
      {/if}

      {#if data.items.length > 0}
        {#each data.items as item}
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
      {:else}
        <div class="empty-state">
          <h2>Berita tidak ditemukan</h2>
          <p>Coba gunakan kata kunci lain atau kembali ke indeks berita.</p>
          <a href="/berita">Lihat semua berita</a>
        </div>
      {/if}
    </section>

    <aside class="sidebar">
      <section class="popular panel">
        <h2>Kategori Cepat</h2>
        {#each ['Seri A', 'Seri B', 'Seri C', 'Seri D', 'Jadwal'] as category}
          <a href={`/berita?q=${encodeURIComponent(category)}`}>
            <span>#</span>
            {category}
          </a>
        {/each}
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
