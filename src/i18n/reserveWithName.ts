import type { Lang } from './types';
import { t } from './t';

/**
 * Czech instrumental (7. pád) for first names after the preposition „s“
 * (e.g. Rezervovat s Alinou). Heuristics cover typical female -a stems; use
 * `nameInstrumentalCs` on the host document when the name is irregular.
 */
const CS_INSTRUMENTAL_EXCEPTIONS: Record<string, string> = {
  alice: 'alicí',
  angie: 'angií',
  marie: 'marií',
  maria: 'marií',
  sophie: 'sofií',
  julie: 'julií',
  nathalie: 'nathálií',
  natalie: 'natalií',
  emily: 'emilií',
  charlotte: 'charlotou',
};

function applyCsCapitalization(original: string, instrumented: string): string {
  const ins = instrumented.normalize('NFC');
  if (!original || !ins) return ins;
  const upper = original === original.toLocaleUpperCase('cs-CZ');
  if (upper && original.trim().length > 1) {
    return ins.toLocaleUpperCase('cs-CZ');
  }
  const first = original.charAt(0);
  if (first !== first.toLocaleLowerCase('cs-CZ')) {
    return ins.charAt(0).toLocaleUpperCase('cs-CZ') + ins.slice(1);
  }
  return ins;
}

export function czechInstrumentalFirstName(displayName: string): string {
  const raw = displayName.trim();
  if (!raw) return raw;
  const lower = raw.normalize('NFC').toLocaleLowerCase('cs-CZ');
  const fixed = CS_INSTRUMENTAL_EXCEPTIONS[lower];
  if (fixed) {
    return applyCsCapitalization(raw, fixed);
  }
  if (lower.endsWith('a')) {
    return applyCsCapitalization(raw, `${lower.slice(0, -1)}ou`);
  }
  return raw;
}

/** English keeps the usual object form for proper nouns after “with” (no declension). */
export function englishReserveWithName(displayName: string): string {
  return displayName.trim();
}

export function reserveWithHostLabel(
  lang: Lang,
  displayName: string,
  czechInstrumentalOverride?: string,
): string {
  const template = t(lang, 'masseuses.profileReserve');
  const name = displayName.trim() || t(lang, 'masseuses.fallbackName');
  if (lang === 'cs') {
    const csForm = (czechInstrumentalOverride?.trim() || czechInstrumentalFirstName(name)).trim() || name;
    return template.replace('{name}', csForm);
  }
  return template.replace('{name}', englishReserveWithName(name));
}
