/**
 * Salon content model - single source of truth for “who offers what”.
 *
 * Future CMS (e.g. Sanity) mapping (conceptual):
 *
 * **masseuse** document
 * - `slug` (slug, unique)
 * - `name` (string)
 * - optional `nameInstrumentalCs` - 7. pád for Czech „s …“ on the reserve CTA; omit to auto-derive from `name`
 * - `vibe` (localeString or object { cs, en })
 * - `personalIntro` (locale text)
 * - `cardImage`, `gallery[]` (image assets)
 * - `physical` → object matching `HostPhysicalProfile` (numbers + enums + booleans)
 * - `offerings.massageServices[]` → references to **massageService** (checkbox list in desk)
 * - `offerings.extraServices[]` → references to **extraService** (checkbox list; same rows as ceník “doplňky”)
 * - `schedule` → embedded or reference to shared night template
 * - `sortOrder` (number)
 *
 * **massageService** document (already implied by MASSAGE_SERVICE_CATALOG)
 * - stable `slug` used in URLs and filters
 *
 * **extraService** document (EXTRA_SERVICES_CATALOG)
 * - stable `slug` (not only display name) for filters and host checkboxes
 * - `title` { cs, en }, `price` string
 *
 * Site code should only depend on `slug` arrays on the host, never duplicate free-text lists.
 */

import type { HairColorId, EyeColorId, SpokenLanguageCode } from './taxonomy';

/** Structured body / booking facts - suitable for GROQ filters and faceted search. */
export type HostPhysicalProfile = {
  ageYears: number;
  heightCm: number;
  weightKg: number;
  /** Display label (cup / numeric salon convention). */
  bustLabel?: string;
  tattoos: boolean;
  hairColor?: HairColorId;
  eyeColor?: EyeColorId;
  languages?: readonly SpokenLanguageCode[];
  /** Nabízí hotel / escort varianty (ceník hotel). */
  hotelEscort?: boolean;
  /** Doprovod / outcall companion where applicable. */
  companionEscort?: boolean;
};

/**
 * What this host performs from salon menus.
 * - massageSlugs ⊆ MASSAGE_SERVICE_CATALOG slugs
 * - extraSlugs ⊆ EXTRA_SERVICES_CATALOG slugs
 */
export type HostOfferings = {
  readonly massageSlugs: readonly string[];
  readonly extraSlugs: readonly string[];
};
