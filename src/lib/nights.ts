/** Next bookable night shifts (Thu–Sat), ISO date strings. */

export type NightOption = { value: string; label: string };

export function upcomingNightShifts(max = 14, locale = 'en-GB'): NightOption[] {
  const out: NightOption[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  for (let i = 0; i < 200 && out.length < max; i++) {
    const wd = cursor.getDay();
    if (wd === 4 || wd === 5 || wd === 6) {
      const value = cursor.toISOString().slice(0, 10);
      const label = cursor.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
      });
      out.push({ value, label });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}

export const nightSlots = [
  '23:00',
  '23:30',
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
] as const;
