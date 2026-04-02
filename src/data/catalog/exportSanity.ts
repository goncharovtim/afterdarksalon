import { MASSEUSE_CATALOG } from './masseuses';
import { MASSAGE_SERVICE_CATALOG } from './massageServices';
import { EXTRA_SERVICES_CATALOG, PRICE_CATALOG } from './pricingCatalog';

/**
 * Portable bundle for a future Sanity dataset (schema to be created in Studio).
 * - `masseuse.serviceSlugs` → replace with `reference` fields to `massageService`.
 * - `heroImageUrl` / `cardImageUrl` / `galleryUrls` → upload as `image` assets.
 * - `priceBlock.tabs` → model as array of `{ _key, label?, rows[] }` in Studio.
 */
export function buildSanityExportBundle(): {
  meta: {
    generator: string;
    version: number;
    exportedAt: string;
    note: string;
  };
  documents: unknown[];
} {
  const services = MASSAGE_SERVICE_CATALOG.map((d) => ({ ...d }));
  const hosts = MASSEUSE_CATALOG.map((m) => ({
    ...m,
    serviceSlugs: [...m.serviceSlugs],
    galleryUrls: [...m.galleryUrls],
    schedule: m.schedule.map((d) => ({ ...d })),
  }));
  const priceBlocks = PRICE_CATALOG.map((b) => ({
    ...b,
    tabs: b.tabs.map((tab, ti) => ({
      _key: `tab-${ti}`,
      rows: tab.rows.map((row, ri) => ({
        _key: `row-${ti}-${ri}`,
        ...row,
      })),
    })),
  }));
  const extras = EXTRA_SERVICES_CATALOG.map((e) => ({ ...e }));

  return {
    meta: {
      generator: 'afterdarksalon',
      version: 1,
      exportedAt: new Date().toISOString(),
      note:
        'Import: define Sanity types massageService, masseuse, priceBlock, extraService; map serviceSlugs to references; upload images.',
    },
    documents: [...services, ...hosts, ...priceBlocks, ...extras],
  };
}
