import { EXTRA_SERVICES_CATALOG } from './pricingCatalog';
import type { HostPhysicalProfile } from './contentModel';
import type { MasseuseExtrasLines, MasseuseStats } from './sanityTypes';

export function physicalToDisplayStats(p: HostPhysicalProfile): MasseuseStats {
  return {
    age: String(p.ageYears),
    height: `${p.heightCm} cm`,
    weight: `${p.weightKg} kg`,
    bust: p.bustLabel,
    tattoos: p.tattoos ? 'yes' : 'no',
  };
}

/** Build localized bullet lists for profile UI from canonical extra slugs. */
export function extraSlugsToLines(extraSlugs: readonly string[]): MasseuseExtrasLines | undefined {
  if (!extraSlugs.length) return undefined;
  const en: string[] = [];
  const cs: string[] = [];
  for (const slug of extraSlugs) {
    const row = EXTRA_SERVICES_CATALOG.find((e) => e.slug === slug);
    if (row) {
      en.push(row.title.en);
      cs.push(row.title.cs);
    }
  }
  if (!en.length) return undefined;
  return { en, cs };
}

/** Flat document for future client-side filters / JSON export. */
export function hostFilterFacets(input: {
  slug: string;
  physical: HostPhysicalProfile;
  massageSlugs: readonly string[];
  extraSlugs: readonly string[];
}) {
  return {
    slug: input.slug,
    massageSlugs: [...input.massageSlugs],
    extraSlugs: [...input.extraSlugs],
    ageYears: input.physical.ageYears,
    heightCm: input.physical.heightCm,
    weightKg: input.physical.weightKg,
    bustLabel: input.physical.bustLabel ?? null,
    tattoos: input.physical.tattoos,
    hairColor: input.physical.hairColor ?? null,
    eyeColor: input.physical.eyeColor ?? null,
    languages: input.physical.languages ? [...input.physical.languages] : [],
    hotelEscort: input.physical.hotelEscort ?? null,
    companionEscort: input.physical.companionEscort ?? null,
  };
}
