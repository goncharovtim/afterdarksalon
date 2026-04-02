/**
 * Removes embedded WP price UI from massage page HTML:
 * - `.pricing-table` (salon duration / Kč grids)
 * - `.fw-table` (e.g. “Extra sluzba” add-on rows)
 *
 * WP wraps content in a section with `massages kindof`; we only strip these inner blocks,
 * never the whole section (that would remove the real description).
 */

function stripBalancedDivByClassToken(html: string, classToken: string): string {
  const escaped = classToken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const openRe = new RegExp(
    `<div\\b[^>]*\\bclass\\s*=\\s*["'][^"']*\\b${escaped}\\b[^"']*["'][^>]*>`,
    'gi',
  );

  let out = html;
  let guard = 0;
  while (guard++ < 50) {
    openRe.lastIndex = 0;
    const match = openRe.exec(out);
    if (!match) break;
    const start = match.index;
    let i = start + match[0].length;
    let depth = 1;
    while (i < out.length && depth > 0) {
      const nextOpen = out.indexOf('<div', i);
      const nextClose = out.toLowerCase().indexOf('</div>', i);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        i = nextOpen + 4;
        continue;
      }
      depth -= 1;
      i = nextClose + 6;
    }
    if (depth !== 0) break;
    out = out.slice(0, start) + out.slice(i);
  }
  return out;
}

export function stripWpEmbeddedSalonPricing(html: string): string {
  let out = html;
  out = stripBalancedDivByClassToken(out, 'pricing-table');
  out = stripBalancedDivByClassToken(out, 'fw-table');
  return out;
}
