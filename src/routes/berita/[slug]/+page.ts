import { error } from '@sveltejs/kit';
import type { NewsItem } from '$lib/data';

export async function load({ fetch, params }) {
  const response = await fetch(`/api/news/${params.slug}`);

  if (!response.ok) {
    error(404, 'Berita tidak ditemukan');
  }

  return (await response.json()) as {
    item: NewsItem;
    related: NewsItem[];
  };
}
