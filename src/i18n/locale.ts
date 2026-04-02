import type { LocalePair } from '../data/catalog/sanityTypes';
import type { Lang } from './types';

export function pickLocale(lang: Lang, pair: LocalePair): string {
  return pair[lang];
}
