const WP_HOST = 'erotic-massage-prague.com';

type LegacyKind = 'book' | 'contacts';

function pathnameOnly(href: string): string {
  try {
    if (/^https?:\/\//i.test(href) || href.startsWith('//')) {
      const u = new URL(href.startsWith('//') ? `https:${href}` : href);
      const host = u.hostname.replace(/^www\./i, '').toLowerCase();
      if (host !== WP_HOST) return '';
      return u.pathname;
    }
    if (href.startsWith('/')) {
      return href.split('?')[0].split('#')[0] ?? '';
    }
  } catch {
    return '';
  }
  return '';
}

function classifyLegacyPath(pathname: string): LegacyKind | null {
  const norm = pathname.replace(/\/+$/, '') || '/';
  if (norm === '/contact-form' || norm === '/cs/kontaktni-formular') return 'book';
  if (norm === '/contacts' || norm === '/cs/kontakty') return 'contacts';
  return null;
}

function classifyLegacyHref(href: string): LegacyKind | null {
  return classifyLegacyPath(pathnameOnly(href));
}

/**
 * Rewrites legacy WP reservation / contact URLs inside HTML from {@link WP_HOST}
 * (and matching root-relative paths) to this site’s book and contacts routes.
 */
export function rewriteWpOutboundLinks(
  html: string,
  bookHref: string,
  contactsHref: string,
): string {
  return html.replace(/\bhref\s*=\s*(["'])([^"']*)\1/gi, (full, quote: string, url: string) => {
    const kind = classifyLegacyHref(url.trim());
    if (kind === 'book') return `href=${quote}${bookHref}${quote}`;
    if (kind === 'contacts') return `href=${quote}${contactsHref}${quote}`;
    return full;
  });
}
