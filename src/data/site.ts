/** Source site (WordPress) — legacy URLs for scrapes. Team photos: `public/team/` (mirrored from erotic-massage-prague.com). */
export const WP_ORIGIN = 'https://erotic-massage-prague.com';

export function httpsSrc(src: string): string {
  if (src.startsWith('//')) return `https:${src}`;
  return src;
}

/** Official Google Maps link (place / reviews / directions). */
export const googleMapsPlaceUrl = 'https://maps.app.goo.gl/1k4jYMBSkwGLsaYP7' as const;

export const contact = {
  phoneDisplay: '+420 775 445 442',
  phoneTel: '+420775445442',
  email: 'info@erotic-massage-prague.com',
  addressLine: 'Maiselova 12, Praha 1',
  mapsUrl: googleMapsPlaceUrl,
  instagram: 'https://www.instagram.com/nirvana_massage_prague/',
} as const;

/** Google listing — `url` uses `googleMapsPlaceUrl`; refresh rating/reviewCount from Business Profile. */
export const googleReviews = {
  url: googleMapsPlaceUrl,
  rating: 4.9,
  reviewCount: 127,
} as const;

export const homeHero = {
  background: httpsSrc(
    '//erotic-massage-prague.com/wp-content/uploads/2026/02/E459335E-C6C9-4AC1-A539-5AD671951F15.png',
  ),
} as const;

/** Hosts — canonical list: `src/data/catalog/masseuses.ts` (export with `npm run export:sanity`). */
export { featuredMasseuses } from './catalog/adapters';

export const galleryImages = [
  `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-10.jpg`,
  `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-8.jpg`,
  `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-11.jpg`,
  `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-4.jpg`,
  `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-2.jpg`,
  `${WP_ORIGIN}/wp-content/uploads/2026/02/salon.jpg`,
] as const;

export const homeCta = {
  background: httpsSrc(
    '//erotic-massage-prague.com/wp-content/uploads/2026/02/salon-8.jpg',
  ),
} as const;

/** Services — canonical list: `src/data/catalog/massageServices.ts`. */
export { massageGrid } from './catalog/adapters';

export const faviconUrl = `${WP_ORIGIN}/wp-content/uploads/2026/03/NightShift_favicon.png`;
export const logoUrl = httpsSrc(
  '//erotic-massage-prague.com/wp-content/uploads/2026/03/NightShift_noPadding.png',
);
