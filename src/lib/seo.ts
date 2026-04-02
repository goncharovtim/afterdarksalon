import type { Lang } from '../i18n/types';
import { pathHome, pathMassage, pathMassages, pathMasseuse, pathMasseuses } from '../i18n/paths';

const SITE_NAME = 'After Dark';

export function absoluteUrl(origin: string, pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const base = origin.replace(/\/$/, '');
  const p = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${p}`;
}

export function massageMetaDescription(lang: Lang, title: string): string {
  if (lang === 'cs') {
    return `${title} — erotická masáž v nočním salónu ${SITE_NAME}, Praha 1. Diskrétní vstup, rezervace online nebo telefonicky. Čt–So 23:00–04:00.`;
  }
  return `${title} — erotic massage at ${SITE_NAME} night salon, Prague 1. Discreet entry, book online or by phone. Thu–Sat 11pm–4am.`;
}

export function masseuseMetaDescription(lang: Lang, name: string, vibe?: string): string {
  const extra = vibe ? (lang === 'cs' ? ` ${vibe}.` : ` ${vibe}.`) : '';
  if (lang === 'cs') {
    return `${name} — masérka ${SITE_NAME}, Praha 1.${extra} Noční směny, služby, rezervace online. Erotická masáž v Praze.`;
  }
  return `${name} — masseuse at ${SITE_NAME}, Prague 1.${extra} Night shifts, services, book online. Erotic massage in Prague.`;
}

export function massagesIndexDescription(lang: Lang): string {
  if (lang === 'cs') {
    return `Přehled erotických masáží v Praze — nuru, tantra, body-to-body, lingam, čtyři ruce. ${SITE_NAME}, noční salón Praha 1.`;
  }
  return `Erotic massage menu in Prague — nuru, tantra, body-to-body, lingam, four hands. ${SITE_NAME}, night salon Prague 1.`;
}

export function masseusesIndexDescription(lang: Lang): string {
  if (lang === 'cs') {
    return `Masérky nočního salónu ${SITE_NAME} v Praze — profily, směny, doporučené masáže a rezervace. Čt–So 23:00–04:00.`;
  }
  return `Masseuses at ${SITE_NAME}, Prague — profiles, shifts, recommended massages and booking. Thu–Sat 11pm–4am.`;
}

export function scheduleIndexDescription(lang: Lang): string {
  if (lang === 'cs') {
    return `Týdenní rozvrh masérek ${SITE_NAME}, Praha — klikněte na směnu a přejděte rovnou do rezervace.`;
  }
  return `Weekly masseuse schedule at ${SITE_NAME}, Prague — tap a shift to jump into booking.`;
}

export function stripHtml(html: string, maxLen = 320): string {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(origin: string, lang: Lang, items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(origin, it.path),
    })),
  };
}

export function webPageJsonLd(opts: {
  origin: string;
  url: string;
  name: string;
  description: string;
  lang: Lang;
  image?: string;
}) {
  const { origin, url, name, description, lang, image } = opts;
  const inLanguage = lang === 'cs' ? 'cs-CZ' : 'en-GB';
  const node: Record<string, unknown> = {
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(origin, url),
    inLanguage,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl(origin, pathHome(lang)),
    },
  };
  if (image) {
    node.image = absoluteUrl(origin, image);
  }
  return node;
}

export function graphLd(...nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}

/** Helpers for localized paths in JSON-LD (pathname only). */
export const seoPaths = {
  home: pathHome,
  massages: pathMassages,
  massage: pathMassage,
  masseuses: pathMasseuses,
  masseuse: pathMasseuse,
};
