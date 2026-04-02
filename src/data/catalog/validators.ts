import { MASSAGE_SERVICE_CATALOG } from './massageServices';
import { EXTRA_SERVICES_CATALOG } from './pricingCatalog';
import type { CatalogMasseuse } from './sanityTypes';

const massageSet = new Set(MASSAGE_SERVICE_CATALOG.map((m) => m.slug));
const extraSet = new Set(EXTRA_SERVICES_CATALOG.map((e) => e.slug));

/**
 * Throws if catalog data is inconsistent. Call once after MASSEUSE_CATALOG is defined.
 * Catches typos before they reach production / CMS import.
 */
export function assertValidMasseuseCatalog(hosts: readonly CatalogMasseuse[], context = 'MASSEUSE_CATALOG'): void {
  for (const h of hosts) {
    for (const s of h.offerings.massageSlugs) {
      if (!massageSet.has(s)) {
        throw new Error(`[${context}] ${h.slug}: unknown massage slug "${s}"`);
      }
    }
    for (const s of h.offerings.extraSlugs) {
      if (!extraSet.has(s)) {
        throw new Error(`[${context}] ${h.slug}: unknown extra slug "${s}"`);
      }
    }
    if (h.physical.ageYears < 18 || h.physical.ageYears > 99) {
      throw new Error(`[${context}] ${h.slug}: unrealistic ageYears ${h.physical.ageYears}`);
    }
    if (h.cardImageScale != null && (h.cardImageScale <= 1 || h.cardImageScale > 2.25)) {
      throw new Error(`[${context}] ${h.slug}: cardImageScale must be in (1, 2.25], got ${h.cardImageScale}`);
    }
  }
}
