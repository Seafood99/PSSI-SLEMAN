import type { Competition, Match, Standing } from '$lib/data';

export async function load({ fetch, url }) {
  const requestedSeri = url.searchParams.get('seri') ?? 'seri-a';
  const [competitionsResponse, standingsResponse, matchesResponse] = await Promise.all([
    fetch('/api/competitions'),
    fetch(`/api/standings?seri=${encodeURIComponent(requestedSeri)}`),
    fetch(`/api/matches?seri=${encodeURIComponent(requestedSeri)}`)
  ]);

  const competitionsPayload = (await competitionsResponse.json()) as { items: Competition[] };
  const standingsPayload = (await standingsResponse.json()) as {
    competition: Competition;
    items: Standing[];
  };
  const matchesPayload = (await matchesResponse.json()) as { items: Match[] };

  return {
    competitions: competitionsPayload.items,
    activeCompetition: standingsPayload.competition,
    standingRows: standingsPayload.items,
    matchRows: matchesPayload.items
  };
}
