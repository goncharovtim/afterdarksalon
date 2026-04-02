import type { Lang } from './types';
import { ui } from './ui';

function getNode(lang: Lang, key: string): unknown {
  const parts = key.split('.');
  let node: unknown = ui[lang];
  for (const p of parts) {
    if (node !== null && typeof node === 'object' && p in (node as object)) {
      node = (node as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return node;
}

export function t(lang: Lang, key: string): string {
  const node = getNode(lang, key);
  return typeof node === 'string' ? node : key;
}

export function tArr(lang: Lang, key: string): string[] {
  const node = getNode(lang, key);
  return Array.isArray(node) ? (node as string[]) : [];
}
