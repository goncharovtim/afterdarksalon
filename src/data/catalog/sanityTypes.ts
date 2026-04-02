import type { HostOfferings, HostPhysicalProfile } from './contentModel';

export type LocalePair = { en: string; cs: string };

export type WpSlugPair = LocalePair;

export type DaySchedule = {
  short: string;
  label: string;
  open: boolean;
  hours?: string;
};

/** Legacy display row shape (derived from HostPhysicalProfile in adapters). */
export type MasseuseStats = {
  age?: string;
  height?: string;
  weight?: string;
  bust?: string;
  tattoos?: string;
};

export type MasseuseServiceRef = { title: string; slug: string };

/** Extra pleasures / add-ons (not linked to massage detail pages). */
export type MasseuseExtrasLines = { en: readonly string[]; cs: readonly string[] };

export type MasseuseDetail = {
  slug: string;
  vibe: LocalePair;
  personalIntro: LocalePair;
  /** Canonical - use for filters / future API. */
  physical: HostPhysicalProfile;
  /** Canonical - massage + ceník extra slugs. */
  offerings: HostOfferings;
  services: MasseuseServiceRef[];
  schedule: DaySchedule[];
  /** Derived for existing UI (MasseuseStatsBar). */
  stats: MasseuseStats;
  /** Derived labels for profile “Masáže a potěšení” from offerings.extraSlugs. */
  extras?: MasseuseExtrasLines;
};

export type CatalogMassageService = {
  _type: 'massageService';
  _id: string;
  slug: string;
  title: LocalePair;
  wpSlug: WpSlugPair;
  heroImageUrl: string;
  homeFeature: boolean;
  sortOrder: number;
  seoTitle?: LocalePair;
  seoDescription?: LocalePair;
};

export type CatalogMasseuse = {
  _type: 'masseuse';
  _id: string;
  slug: string;
  name: string;
  /** Czech instrumental for „Rezervovat s …“; if omitted, derived in UI from `name`. */
  nameInstrumentalCs?: string;
  vibe: LocalePair;
  /** Short profile copy - age, look & personality (shown on profile page). */
  personalIntro: LocalePair;
  cardImageUrl: string;
  /** CSS `object-position` for card/list photos when the file has excess headroom (e.g. `center 32%`). */
  cardImageObjectPosition?: string;
  /** Zoom > 1 crops in-frame letterboxing; uses `.host-card-photo-zoom` + `--host-card-zoom`. */
  cardImageScale?: number;
  galleryUrls: readonly string[];
  physical: HostPhysicalProfile;
  offerings: HostOfferings;
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
  titleKey: 'price.blockSalon' | 'price.blockHotel' | 'price.blockWomen' | 'price.blockCouple';
  tabs: readonly { rows: readonly PriceRow[] }[];
};

export type CatalogExtraService = {
  _type: 'extraService';
  _id: string;
  /** Stable id for host checkboxes + filters (CMS slug field). */
  slug: string;
  title: LocalePair;
  price: string;
  sortOrder: number;
};
