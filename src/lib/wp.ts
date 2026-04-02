import { WP_ORIGIN } from '../data/site';
import type { Lang } from '../i18n/types';

type WpPage = {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
};

/** WordPress page slug to fetch for a localized massage/service route. */
export function wpPageSlugForMassage(
  entry: { wpEn: string; wpCs: string } | undefined,
  lang: Lang,
): string {
  if (!entry) return '';
  return lang === 'cs' ? entry.wpCs : entry.wpEn;
}

export async function fetchWpPageBySlug(
  slug: string,
): Promise<{ title: string; html: string } | null> {
  if (!slug) return null;
  const url = `${WP_ORIGIN}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = (await res.json()) as WpPage[];
  const page = data[0];
  if (!page) return null;
  return {
    title: page.title.rendered,
    html: page.content.rendered,
  };
}

/** Team / masseuse profiles are not exposed via REST; scrape public HTML. */
export async function fetchTeamMemberByPath(
  pathname: string,
): Promise<{ title: string; html: string } | null> {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const url = `${WP_ORIGIN}${path.endsWith('/') ? path : `${path}/`}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const html = await res.text();

  const og = html.match(/property="og:title"\s+content="([^"]+)"/);
  const titleFromOg = og?.[1]?.split(/\s*[|—]\s*/)[0]?.trim();
  const titleTag = html.match(/<title>([^<]+)<\/title>/i);
  const titleFromTag = titleTag?.[1]?.split(/\s*[|—]\s*/)[0]?.trim();
  const title = titleFromOg ?? titleFromTag ?? 'Masseuse';

  const article = html.match(
    /<article[^>]*\btlp-member-article\b[^>]*>([\s\S]*?)<\/article>/i,
  );
  if (article?.[1]) {
    return { title, html: article[1] };
  }

  const fw = html.match(
    /<div\s+class="fw-page-builder-content"[^>]*>([\s\S]*?)<\/div>\s*<div\s+class="clearfix"/i,
  );
  if (fw?.[1]) {
    return { title, html: fw[1] };
  }

  return null;
}
