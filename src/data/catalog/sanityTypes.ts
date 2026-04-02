/**
 * Shapes mirror a future Sanity Studio schema (documents + portable text later).
 * Run `npm run export:sanity` → `sanity-export/bundle.json` (gitignored) for migration tooling.
 */

export type LocalePair = { en: string; cs: string };

/** WordPress REST slugs per locale — until body copy moves to Sanity. */
export type WpSlugPair = LocalePair;

export type DaySchedule = {
  short: string;
  label: string;
  open: boolean;
  hours?: string;
};

export type MasseuseStats = {
  age?: string;
  height?: string;
  weight?: string;
  bust?: string;
  tattoos?: string;
};

export type MasseuseServiceRef = { title: string; slug: string };

/** Runtime shape used by profile / cards (derived from catalog). */
export type MasseuseDetail = {
  slug: string;
  vibe: string;
  services: MasseuseServiceRef[];
  schedule: DaySchedule[];
  stats?: MasseuseStats;
};

/** Single source row for `/massages` + WP fetch keys + localized titles. */
export type CatalogMassageService = {
  _type: 'massageService';
  _id: string;
  slug: string;
  title: LocalePair;
  wpSlug: WpSlugPair;
  /** Public URL or site path — becomes Sanity image asset after upload */
  heroImageUrl: string;
  homeFeature: boolean;
  sortOrder: number;
};

export type CatalogMasseuse = {
  _type: 'masseuse';
  _id: string;
  slug: string;
  name: string;
  vibe: string;
  cardImageUrl: string;
  galleryUrls: readonly string[];
  stats?: MasseuseStats;
  /** References by `massageService.slug` — in Studio: reference field */
  serviceSlugs: readonly string[];
  schedule: readonly DaySchedule[];
  sortOrder: number;
};

export type PriceRow = {
  duration: string;
  czk: string;
  eur: string;
  usd: string;
};

export type CatalogPriceBlock = {
  _type: 'priceBlock';
  _id: string;
  /** Key into `src/i18n/ui.ts` (`price.*`) */
  titleKey: 'price.blockSalon' | 'price.blockHotel' | 'price.blockWomen' | 'price.blockCouple';
  tabs: readonly { rows: readonly PriceRow[] }[];
};

export type CatalogExtraService = {
  _type: 'extraService';
  _id: string;
  name: string;
  price: string;
  sortOrder: number;
};
