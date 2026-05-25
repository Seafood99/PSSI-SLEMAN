import { error, json } from '@sveltejs/kit';
import { findNewsBySlug, news } from '$lib/data';

export function GET({ params }) {
  const item = findNewsBySlug(params.slug);

  if (!item) {
    error(404, 'Berita tidak ditemukan');
  }

  return json({
    item,
    related: news.filter((entry) => entry.slug !== item.slug).slice(0, 3)
  });
}
