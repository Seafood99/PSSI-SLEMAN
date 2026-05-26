<script lang="ts">
  import { navigating } from '$app/state';

  const isNavigating = $derived(Boolean(navigating.to));
</script>

{#if isNavigating}
  <div class="navigation-loader" aria-live="polite" aria-label="Memuat halaman">
    <div class="navigation-loader-bar"></div>
    <div class="navigation-loader-card">
      <span></span>
      <p>Memuat halaman</p>
    </div>
  </div>
{/if}
