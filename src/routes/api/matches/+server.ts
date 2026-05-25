import { json } from '@sveltejs/kit';
import { competitions, matches } from '$lib/data';

export function GET({ url }) {
  const seri = url.searchParams.get('seri');
  const competition = competitions.find((item) => item.slug === seri);
  const items = competition
    ? matches.filter((match) => match.competition === competition.name)
    : matches;

  return json({
    seri: competition?.slug ?? null,
    items
  });
}
