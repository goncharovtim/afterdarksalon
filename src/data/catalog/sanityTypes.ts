export type LocalePair = { en: string; cs: string };

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

export type MasseuseDetail = {
  slug: string;
  vibe: LocalePair;
  services: MasseuseServiceRef[];
  schedule: DaySchedule[];
  stats?: MasseuseStats;
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
  vibe: LocalePair;
  cardImageUrl: string;
  galleryUrls: readonly string[];
  stats?: MasseuseStats;
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
