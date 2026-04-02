import type { Lang } from '../i18n/types';
import { t } from '../i18n/t';
import { EXTRA_SERVICES_CATALOG, PRICE_CATALOG } from './catalog/pricingCatalog';
import type { PriceRow as CatalogPriceRow } from './catalog/sanityTypes';

export type PriceRow = CatalogPriceRow;

export type PriceTab = {
  label: string;
  rows: PriceRow[];
};

export type PriceBlock = {
  title: string;
  /** Public URL under `/priceicons/` for card header. */
  iconSrc?: string;
  tabs: PriceTab[];
};

const PRICE_BLOCK_ICONS: Record<(typeof PRICE_CATALOG)[number]['titleKey'], string> = {
  'price.blockSalon': '/priceicons/salon.png',
  'price.blockHotel': '/priceicons/hotel.png',
  'price.blockWomen': '/priceicons/woman.png',
  'price.blockCouple': '/priceicons/couple.png',
};

export function getPriceBlocks(lang: Lang): PriceBlock[] {
  return PRICE_CATALOG.map((b) => ({
    title: t(lang, b.titleKey),
    iconSrc: PRICE_BLOCK_ICONS[b.titleKey],
    tabs: b.tabs.map((tab) => ({ label: '', rows: tab.rows.map((r) => ({ ...r })) })),
  }));
}

export function getSalonPriceBlock(lang: Lang): PriceBlock {
  const blocks = getPriceBlocks(lang);
  const first = blocks[0];
  if (first) return first;
  return {
    title: t(lang, 'price.blockSalon'),
    iconSrc: PRICE_BLOCK_ICONS['price.blockSalon'],
    tabs: [{ label: '', rows: [] }],
  };
}

export function getExtraServiceRows(lang: Lang): { name: string; price: string }[] {
  return EXTRA_SERVICES_CATALOG.map((e) => ({
    name: lang === 'cs' ? e.title.cs : e.title.en,
    price: e.price,
  }));
}
