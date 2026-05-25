import type { Match, NewsItem, Standing } from '$lib/data';

export async function load({ fetch }) {
  const [newsResponse, matchesResponse, standingsResponse] = await Promise.all([
    fetch('/api/news'),
    fetch('/api/matches'),
    fetch('/api/standings?seri=seri-a')
  ]);

  const newsPayload = (await newsResponse.json()) as { items: NewsItem[] };
  const matchesPayload = (await matchesResponse.json()) as { items: Match[] };
  const standingsPayload = (await standingsResponse.json()) as { items: Standing[] };

  return {
    newsItems: newsPayload.items,
    matches: matchesPayload.items,
    standingRows: standingsPayload.items
  };
}
