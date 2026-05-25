import { json } from '@sveltejs/kit';
import { competitions, standings } from '$lib/data';

export function GET({ url }) {
  const seri = url.searchParams.get('seri');
  const competition = competitions.find((item) => item.slug === seri) ?? competitions[0];

  return json({
    seri: competition.slug,
    competition,
    items: standings[competition.name]
  });
}
