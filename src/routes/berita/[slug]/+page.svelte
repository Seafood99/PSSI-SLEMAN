<script lang="ts">
  import SiteHeader from '$lib/SiteHeader.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.item.title} | PSSI Sleman</title>
  <meta name="description" content={data.item.excerpt} />
</svelte:head>

<SiteHeader active="berita" />

<main class="site-shell article-shell">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span>/</span>
    <a href="/berita">Berita</a>
    <span>/</span>
    <b>{data.item.category}</b>
  </nav>

  <article class="article-detail">
    <span class="article-category">{data.item.category}</span>
    <h1>{data.item.title}</h1>
    <p class="article-meta">{data.item.time} - {data.item.author}</p>
    <img src={data.item.image} alt="" />
    <p class="article-lead">{data.item.excerpt}</p>
    {#each data.item.content as paragraph}
      <p>{paragraph}</p>
    {/each}
  </article>

  <section class="related-news">
    <div class="section-heading">
      <h2>Berita Terkait</h2>
      <a href="/berita">Indeks Berita -&gt;</a>
    </div>
    <div class="headline-grid">
      {#each data.related as item}
        <a class="headline-card" href={`/berita/${item.slug}`}>
          <img src={item.image} alt="" />
          <h2>{item.title}</h2>
        </a>
      {/each}
    </div>
  </section>
</main>
