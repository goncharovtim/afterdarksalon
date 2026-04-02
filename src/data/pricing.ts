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
  tabs: PriceTab[];
};

export function getPriceBlocks(lang: Lang): PriceBlock[] {
  return PRICE_CATALOG.map((b) => ({
    title: t(lang, b.titleKey),
    tabs: b.tabs.map((tab) => ({ label: '', rows: tab.rows.map((r) => ({ ...r })) })),
  }));
}

export function getSalonPriceBlock(lang: Lang): PriceBlock {
  const blocks = getPriceBlocks(lang);
  const first = blocks[0];
  if (first) return first;
  return {
    title: t(lang, 'price.blockSalon'),
    tabs: [{ label: '', rows: [] }],
  };
}

export const extraServices = EXTRA_SERVICES_CATALOG.map((e) => ({
  name: e.name,
  price: e.price,
}));
