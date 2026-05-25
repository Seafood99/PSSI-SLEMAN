import type { NewsItem } from '$lib/data';

export async function load({ fetch, url }) {
  const query = url.searchParams.get('q') ?? '';
  const response = await fetch(`/api/news?q=${encodeURIComponent(query)}`);
  const payload = (await response.json()) as { query: string; items: NewsItem[] };

  return {
    query: payload.query,
    items: payload.items
  };
}
