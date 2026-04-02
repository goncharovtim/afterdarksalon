export const WP_ORIGIN = 'https://erotic-massage-prague.com';

export function httpsSrc(src: string): string {
  if (src.startsWith('//')) return `https:${src}`;
  return src;
}

export const googleMapsPlaceUrl = 'https://maps.app.goo.gl/1k4jYMBSkwGLsaYP7' as const;

export const contact = {
  phoneDisplay: '+420 775 445 442',
  phoneTel: '+420775445442',
  email: 'info@erotic-massage-prague.com',
  addressLine: 'Maiselova 12, Praha 1',
  mapsUrl: googleMapsPlaceUrl,
} as const;

/** Keep in sync with the linked Google Maps listing (rating + review count). */
export const googleReviews = {
  url: googleMapsPlaceUrl,
  rating: 4.5,
  reviewCount: 56,
} as const;

export const homeHero = {
  background: httpsSrc(
    '//erotic-massage-prague.com/wp-content/uploads/2026/02/E459335E-C6C9-4AC1-A539-5AD671951F15.png',
  ),
} as const;

export { featuredMasseuses } from './catalog/adapters';

export const homeCta = {
  background: httpsSrc(
    '//erotic-massage-prague.com/wp-content/uploads/2026/02/salon-8.jpg',
  ),
} as const;

export { massageGrid } from './catalog/adapters';

export const faviconUrl = `${WP_ORIGIN}/wp-content/uploads/2026/03/NightShift_favicon.png`;
export const logoUrl = '/logo.png' as const;
