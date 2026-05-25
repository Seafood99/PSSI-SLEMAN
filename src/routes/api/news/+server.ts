import { json } from '@sveltejs/kit';
import { filterNews } from '$lib/data';

export function GET({ url }) {
  const query = url.searchParams.get('q') ?? '';

  return json({
    query,
    items: filterNews(query)
  });
}
