import { MASSEUSE_CATALOG } from './masseuses';
import { MASSAGE_SERVICE_CATALOG } from './massageServices';
import { extraSlugsToLines, hostFilterFacets, physicalToDisplayStats } from './hostDerived';
import type { MasseuseDetail, MasseuseServiceRef } from './sanityTypes';

function serviceRefFromSlug(slug: string): MasseuseServiceRef {
  const s = MASSAGE_SERVICE_CATALOG.find((m) => m.slug === slug);
  return { slug, title: s?.title.en ?? slug };
}

function toMasseuseDetail(c: (typeof MASSEUSE_CATALOG)[number]): MasseuseDetail {
  return {
    slug: c.slug,
    vibe: c.vibe,
    personalIntro: c.personalIntro,
    physical: c.physical,
    offerings: c.offerings,
    services: c.offerings.massageSlugs.map(serviceRefFromSlug),
    schedule: c.schedule.map((d) => ({ ...d })),
    stats: physicalToDisplayStats(c.physical),
    extras: extraSlugsToLines(c.offerings.extraSlugs),
  };
}

export const massageGrid = [...MASSAGE_SERVICE_CATALOG]
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map((d) => ({
    slug: d.slug,
    wpEn: d.wpSlug.en,
    wpCs: d.wpSlug.cs,
    image: d.heroImageUrl,
    homeFeature: d.homeFeature,
  }));

export const featuredMasseuses = [...MASSEUSE_CATALOG]
  .sort((a, b) => a.sortOrder - b.sortOrder)
  .map((d) => ({
    name: d.name,
    slug: d.slug,
    image: d.cardImageUrl,
    photos: [...d.galleryUrls],
    ...(d.nameInstrumentalCs != null && d.nameInstrumentalCs !== ''
      ? { nameInstrumentalCs: d.nameInstrumentalCs }
      : {}),
    ...(d.cardImageObjectPosition != null && d.cardImageObjectPosition !== ''
      ? { cardImageObjectPosition: d.cardImageObjectPosition }
      : {}),
    ...(d.cardImageScale != null && d.cardImageScale > 1 ? { cardImageScale: d.cardImageScale } : {}),
  }));

export const masseuseDetails: Record<string, MasseuseDetail> = Object.fromEntries(
  MASSEUSE_CATALOG.map((c) => [c.slug, toMasseuseDetail(c)]),
);

export function getMasseuseDetail(slug: string): MasseuseDetail | undefined {
  return masseuseDetails[slug];
}

export type MasseuseCardForService = {
  name: string;
  slug: string;
  image: string;
  cardImageObjectPosition?: string;
  cardImageScale?: number;
};

export function getMasseusesForService(serviceSlug: string): MasseuseCardForService[] {
  return [...MASSEUSE_CATALOG]
    .filter((m) => m.offerings.massageSlugs.includes(serviceSlug))
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((d) => ({
      name: d.name,
      slug: d.slug,
      image: d.cardImageUrl,
      ...(d.cardImageObjectPosition != null && d.cardImageObjectPosition !== ''
        ? { cardImageObjectPosition: d.cardImageObjectPosition }
        : {}),
      ...(d.cardImageScale != null && d.cardImageScale > 1 ? { cardImageScale: d.cardImageScale } : {}),
    }));
}

/** Serializable facets for search / filter UI (all hosts). */
export const hostSearchIndex = MASSEUSE_CATALOG.map((h) =>
  hostFilterFacets({
    slug: h.slug,
    physical: h.physical,
    massageSlugs: h.offerings.massageSlugs,
    extraSlugs: h.offerings.extraSlugs,
  }),
);
