/**
 * Closed vocabularies for host profiles. Mirror these as Sanity string options / lists
 * so filters stay consistent across locales.
 */

/** Hair - filter facet + optional display chip. */
export type HairColorId = 'blonde' | 'brunette' | 'red' | 'black' | 'other';

/** Eyes - filter facet. */
export type EyeColorId = 'blue' | 'green' | 'brown' | 'black' | 'hazel' | 'other';

/** ISO-639-1 style; extend when adding languages. */
export type SpokenLanguageCode = 'cs' | 'en' | 'de' | 'ru';
