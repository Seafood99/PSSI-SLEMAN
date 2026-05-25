<script lang="ts">
  import SiteHeader from '$lib/SiteHeader.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Kompetisi | PSSI Sleman</title>
</svelte:head>

<SiteHeader active="kompetisi" />

<main class="site-shell page-shell">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">Home</a>
    <span>/</span>
    <b>Kompetisi</b>
  </nav>

  <section class="page-hero">
    <p>Kompetisi 2026</p>
    <h1>{data.activeCompetition.name}</h1>
    <span>{data.activeCompetition.summary}</span>
  </section>

  <nav class="competition-tabs" aria-label="Pilih seri kompetisi">
    {#each data.competitions as competition}
      <a
        class:active={competition.name === data.activeCompetition.name}
        href={`/kompetisi?seri=${competition.slug}`}
      >
        {competition.name}
      </a>
    {/each}
  </nav>

  <div class="competition-grid">
    <section id="klasemen" class="panel table-panel">
      <div class="panel-heading">
        <h2>Klasemen {data.activeCompetition.name}</h2>
        <span class="panel-badge">Dummy Data</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Tim</th>
            <th>D</th>
            <th>M</th>
            <th>S</th>
            <th>K</th>
            <th>SG</th>
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
              <td>{row.draw}</td>
              <td>{row.lost}</td>
              <td>{row.goalDiff}</td>
              <td>{row.points}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>

    <section id="jadwal" class="panel schedule-panel">
      <div class="panel-heading">
        <h2>Jadwal {data.activeCompetition.name}</h2>
        <span class="panel-badge">{data.matchRows.length} laga</span>
      </div>
      <div class="schedule-list">
        {#each data.matchRows as match}
          <article>
            <div class="date-block">
              <strong>{match.date}</strong>
              <span>{match.time}</span>
            </div>
            <div>
              <h3>{match.home} vs {match.away}</h3>
              <p>{match.venue}</p>
            </div>
            <div class="status-block">
              <span>{match.status}</span>
              {#if match.score}
                <b>{match.score}</b>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </section>
  </div>
</main>
