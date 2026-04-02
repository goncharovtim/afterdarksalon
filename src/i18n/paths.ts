import type { Lang } from './types';

const EN_PREFIX = '/en';

export function stripLocalePrefix(pathname: string): string {
  const raw = pathname.replace(/\/$/, '') || '/';
  if (raw === EN_PREFIX) return '/';
  if (raw.startsWith(`${EN_PREFIX}/`)) {
    const rest = raw.slice(EN_PREFIX.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return raw;
}

export function pathWithLang(logical: string, lang: Lang): string {
  const path = logical.startsWith('/') ? logical : `/${logical}`;
  if (lang === 'cs') {
    return path === '/' ? '/' : path;
  }
  if (path === '/') return EN_PREFIX;
  return `${EN_PREFIX}${path}`;
}

export function pathHome(lang: Lang): string {
  return pathWithLang('/', lang);
}

export function pathBook(lang: Lang): string {
  return pathWithLang('/book', lang);
}

export function pathContacts(lang: Lang): string {
  return pathWithLang('/contacts', lang);
}

export function pathMasseuses(lang: Lang): string {
  return pathWithLang('/masseuses', lang);
}

export function pathMasseuse(lang: Lang, slug: string): string {
  return pathWithLang(`/masseuses/${slug}`, lang);
}

export function pathMassages(lang: Lang): string {
  return pathWithLang('/massages', lang);
}

export function pathMassage(lang: Lang, slug: string): string {
  return pathWithLang(`/massages/${slug}`, lang);
}

export function pathPrice(lang: Lang): string {
  return pathWithLang('/price', lang);
}

export function pathTeam(lang: Lang): string {
  return pathWithLang('/team', lang);
}

export function pathSchedule(lang: Lang): string {
  return pathWithLang('/schedule', lang);
}

export function switchLangPath(pathname: string, target: Lang): string {
  const logical = stripLocalePrefix(pathname);
  return pathWithLang(logical, target);
}

export function bookWithQuery(lang: Lang, params: Record<string, string>): string {
  const base = pathBook(lang);
  const q = new URLSearchParams(params).toString();
  return q ? `${base}?${q}` : base;
}
