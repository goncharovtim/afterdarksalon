export type NightOption = { value: string; label: string };

/** Local calendar date as YYYY-MM-DD (avoids UTC drift from toISOString). */
export function isoLocal(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function upcomingNightShifts(max = 14, locale = 'en-GB'): NightOption[] {
  const out: NightOption[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  for (let i = 0; i < 200 && out.length < max; i++) {
    const wd = cursor.getDay();
    if (wd === 4 || wd === 5 || wd === 6) {
      const value = isoLocal(cursor);
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
