import { MASSEUSE_CATALOG } from './masseuses';
import { MASSAGE_SERVICE_CATALOG } from './massageServices';
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
    services: c.serviceSlugs.map(serviceRefFromSlug),
    schedule: c.schedule.map((d) => ({ ...d })),
    stats: c.stats,
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
  }));

export const masseuseDetails: Record<string, MasseuseDetail> = Object.fromEntries(
  MASSEUSE_CATALOG.map((c) => [c.slug, toMasseuseDetail(c)]),
);

export function getMasseuseDetail(slug: string): MasseuseDetail | undefined {
  return masseuseDetails[slug];
}

export type MasseuseCardForService = { name: string; slug: string; image: string };

export function getMasseusesForService(serviceSlug: string): MasseuseCardForService[] {
  return [...MASSEUSE_CATALOG]
    .filter((m) => m.serviceSlugs.includes(serviceSlug))
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((d) => ({ name: d.name, slug: d.slug, image: d.cardImageUrl }));
}
