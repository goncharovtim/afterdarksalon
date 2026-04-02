import type { CatalogMassageService } from './sanityTypes';

function httpsSrc(src: string): string {
  if (src.startsWith('//')) return `https:${src}`;
  return src;
}

export const MASSAGE_SERVICE_CATALOG: CatalogMassageService[] = [
  {
    _type: 'massageService',
    _id: 'massageService.body-to-body-massage',
    slug: 'body-to-body-massage',
    title: { en: 'Body to body massage', cs: 'Masáž tělo na tělo' },
    wpSlug: { en: 'body-to-body-massage', cs: 'telo-na-telo-masaz' },
    heroImageUrl: httpsSrc('//erotic-massage-prague.com/wp-content/uploads/2026/02/IMG_9540.jpg'),
    homeFeature: true,
    sortOrder: 10,
    seoTitle: {
      en: 'Body to body massage - an exciting, eroticall charged procedure',
      cs: 'Tělo na tělo masáž - vzrušující procedura s erotickým nábojem',
    },
    seoDescription: {
      en: 'A body to body massage is a sexy procedure full of intimacy and close contact ❤️ This is as close to actual sex as you can get ❤️ Try it and find out.',
      cs: 'Zažijte masáž tělo na tělo - sexy proceduru plnou těsného, intimního kontaktu ❤️ Žádný přímý sex, pořádná porce vzrušení se štastným koncem je zato zaručena ❤️.',
    },
  },
  {
    _type: 'massageService',
    _id: 'massageService.erotic-mix-massage-2',
    slug: 'erotic-mix-massage-2',
    title: { en: 'Erotic mix massage', cs: 'Erotická mix masáž' },
    wpSlug: { en: 'erotic-mix-massage-2', cs: 'eroticka-mix-masaz-3-v-1' },
    heroImageUrl: httpsSrc('//erotic-massage-prague.com/wp-content/uploads/2026/02/IMG_9542.jpg'),
    homeFeature: true,
    sortOrder: 20,
    seoTitle: {
      en: 'Mix massage – Our erotic massage in Prague | NIRVANA',
      cs: 'Mix massage – Our erotic massage in Prague | NIRVANA',
    },
    seoDescription: {
      en: 'Try this unique combination of all your favourite erotic massage treatments - Erotic Mix massage - your way to reach Nirvana',
      cs: 'Try this unique combination of all your favourite erotic massage treatments - Erotic Mix massage - your way to reach Nirvana',
    },
  },
  {
    _type: 'massageService',
    _id: 'massageService.lingam-massage',
    slug: 'lingam-massage',
    title: { en: 'Lingam massage', cs: 'Lingam masáž' },
    wpSlug: { en: 'lingam-massage', cs: 'lingam-masaz' },
    heroImageUrl: httpsSrc('//erotic-massage-prague.com/wp-content/uploads/2026/02/IMG_9545.jpg'),
    homeFeature: true,
    sortOrder: 30,
    seoTitle: {
      en: 'Lingam massage – a tantra-inspired penis & body treatment',
      cs: 'Lingam masáž - smyslná masáž penisu s tantrickými prvky',
    },
    seoDescription: {
      en: "Experience a lingam massage, a tantric-based rubdown focusing on your erogenous zones ❤️ Shorter and to the point, this is the perfect massage if you're busy.",
      cs: 'Vyzkoušejte lingam masáž, speciální odnož masáže tantrické se zaměřením na penis a erogenní zóny ❤️ Maximální rozkoš a relaxace ❤️ Krásné masérky.',
    },
  },
  {
    _type: 'massageService',
    _id: 'massageService.nuru-massage',
    slug: 'nuru-massage',
    title: { en: 'Nuru massage', cs: 'Nuru masáž' },
    wpSlug: { en: 'nuru-massage', cs: 'nuru-masaz' },
    heroImageUrl: httpsSrc('//erotic-massage-prague.com/wp-content/uploads/2026/02/IMG_9541.jpg'),
    homeFeature: true,
    sortOrder: 40,
    seoTitle: {
      en: "Nuru massage in Prague - an erotic Japanese rubdown you won't regret",
      cs: 'Nuru masáž - klouzavá japonská masáž v těsném kontaktu',
    },
    seoDescription: {
      en: 'Indulge in a delightful nuru massage, an erotic Japanese procedure which combines relaxation with pleasure ❤️ Add extra services for more pleasure ❤️.',
      cs: 'Erotická nuru masáž patří mezi nejvíce sexy procedury svého druhu ❤️ Těšte se na intimní kontakt tělo na tělo, který přináší rozkoš i bez přímého sexu.',
    },
  },
  {
    _type: 'massageService',
    _id: 'massageService.pussycat-massage',
    slug: 'pussycat-massage',
    title: { en: 'Pussycat massage', cs: 'Pussycat masáž' },
    wpSlug: { en: 'pussycat-massage', cs: 'pussycat-masaz' },
    heroImageUrl: httpsSrc('//erotic-massage-prague.com/wp-content/uploads/2026/02/IMG_9544.jpg'),
    homeFeature: true,
    sortOrder: 50,
    seoTitle: {
      en: 'Pussycat massage - try a special erotic rubdown at our spa',
      cs: 'Pussycat masáž - vyzkoušejte speciální masáž našeho salónu',
    },
    seoDescription: {
      en: "A sexy Pussycat massage is a unique procedure both thrilling and relaxing ❤️ Try this combination of nuru and lingam treatments at our spa ❤️. You won't regret.",
      cs: 'Sexy Pussycat masáž je erotickou procedurou, jakou jinde nenajdete ❤️ Smyslné masírování celého těla včetně erogenních zón váš přivede na vrchol rozkoše ❤️.',
    },
  },
  {
    _type: 'massageService',
    _id: 'massageService.four-hands-joy-massage',
    slug: 'four-hands-joy-massage',
    title: { en: 'Four hands joy massage', cs: 'Masáž čtyřma rukama' },
    wpSlug: { en: 'four-hands-joy-massage', cs: 'masaz-ctyr-rukou' },
    heroImageUrl: httpsSrc('//erotic-massage-prague.com/wp-content/uploads/2026/02/IMG_9543.jpg'),
    homeFeature: true,
    sortOrder: 60,
    seoTitle: {
      en: 'Four hands joy massage - let two hot masseuses work on your body',
      cs: 'Masáž čtyř rukou - nechte se opečovávat dvojicí krásných masérek',
    },
    seoDescription: {
      en: 'To maximise your pleasure, order a four hands joy massage ❤️ A riveting rubdown with a happy ending performed by two masseuses ❤️ Available as outcall.',
      cs: 'Jestliže chcete znásobit svou rozkoš, pak volte masáž čtyř rukou ❤️ Procedury s erotickým nábojem se zhostí dvě z našich masérek dle vašeho výběru.',
    },
  },
];

export function getMassageServiceBySlug(slug: string): CatalogMassageService | undefined {
  return MASSAGE_SERVICE_CATALOG.find((s) => s.slug === slug);
}
