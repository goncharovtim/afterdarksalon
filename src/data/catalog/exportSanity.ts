import { SALON_GALLERY_ITEMS } from '../salonGallery';
import { MASSEUSE_CATALOG } from './masseuses';
import { MASSAGE_SERVICE_CATALOG } from './massageServices';
import { EXTRA_SERVICES_CATALOG, PRICE_CATALOG } from './pricingCatalog';

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
    offerings: {
      massageSlugs: [...m.offerings.massageSlugs],
      extraSlugs: [...m.offerings.extraSlugs],
    },
    physical: { ...m.physical },
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

  const salonGallery = {
    _type: 'salonGallery' as const,
    _id: 'salonGallery',
    images: SALON_GALLERY_ITEMS.map((row) => ({
      _key: row._id.replace(/^salonGallery\./, ''),
      url: row.url,
    })),
  };

  return {
    meta: {
      generator: 'afterdarksalon',
      version: 1,
      exportedAt: new Date().toISOString(),
      note:
        'Import: define Sanity types massageService, masseuse, priceBlock, extraService, salonGallery; masseuse.offerings.massageServices + extraServices as multi-references; physical as structured object; upload images.',
    },
    documents: [...services, ...hosts, ...priceBlocks, ...extras, salonGallery],
  };
}
