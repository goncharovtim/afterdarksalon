import { MASSAGE_SERVICE_CATALOG } from '../data/catalog/massageServices';
import type { Lang } from './types';

export function massageTitle(lang: Lang, slug: string): string {
  const row = MASSAGE_SERVICE_CATALOG.find((m) => m.slug === slug);
  return row ? row.title[lang] : slug;
}
