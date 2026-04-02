import type { DaySchedule } from './sanityTypes';

export const defaultNightSchedule: DaySchedule[] = [
  { short: 'Mo', label: 'Monday', open: false },
  { short: 'Tu', label: 'Tuesday', open: false },
  { short: 'We', label: 'Wednesday', open: false },
  { short: 'Th', label: 'Thursday', open: true, hours: '23:00 – 04:00' },
  { short: 'Fr', label: 'Friday', open: true, hours: '23:00 – 04:00' },
  { short: 'Sa', label: 'Saturday', open: true, hours: '23:00 – 04:00' },
  { short: 'Su', label: 'Sunday', open: false },
];
