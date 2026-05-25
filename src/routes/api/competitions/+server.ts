import { json } from '@sveltejs/kit';
import { competitions } from '$lib/data';

export function GET() {
  return json({
    items: competitions
  });
}
