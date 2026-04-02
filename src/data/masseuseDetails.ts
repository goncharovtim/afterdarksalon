/** Profile types + lookups — data lives in `catalog/masseuses.ts` (Sanity-exportable). */

export type {
  DaySchedule,
  MasseuseStats,
  MasseuseServiceRef,
  MasseuseDetail,
} from './catalog/sanityTypes';

export { defaultNightSchedule } from './catalog/nightSchedule';
export { masseuseDetails, getMasseuseDetail } from './catalog/adapters';
