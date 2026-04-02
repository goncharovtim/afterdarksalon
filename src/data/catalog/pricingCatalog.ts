import type { CatalogExtraService, CatalogPriceBlock, PriceRow } from './sanityTypes';

const salon1: PriceRow[] = [
  { duration: '30 min', czk: '1900 Kč', eur: '83 €', usd: '95 $' },
  { duration: '45 min', czk: '2200 Kč', eur: '96 €', usd: '110 $' },
  { duration: '60 min', czk: '2500 Kč', eur: '109 €', usd: '125 $' },
  { duration: '90 min', czk: '3500 Kč', eur: '153 €', usd: '175 $' },
  { duration: '120 min', czk: '4700 Kč', eur: '205 €', usd: '235 $' },
];

const salon2: PriceRow[] = [
  { duration: '30 min', czk: '3200 Kč', eur: '140 €', usd: '160 $' },
  { duration: '45 min', czk: '3700 Kč', eur: '161 €', usd: '185 $' },
  { duration: '60 min', czk: '4400 Kč', eur: '192 €', usd: '220 $' },
  { duration: '90 min', czk: '5600 Kč', eur: '244 €', usd: '280 $' },
  { duration: '120 min', czk: '7400 Kč', eur: '322 €', usd: '370 $' },
];

const hotel1: PriceRow[] = [
  { duration: '60 min', czk: '3300 Kč', eur: '144 €', usd: '165 $' },
  { duration: '90 min', czk: '4700 Kč', eur: '205 €', usd: '235 $' },
  { duration: '120 min', czk: '6000 Kč', eur: '261 €', usd: '300 $' },
];

const hotel2: PriceRow[] = [
  { duration: '60 min', czk: '5500 Kč', eur: '240 €', usd: '275 $' },
  { duration: '90 min', czk: '7600 Kč', eur: '331 €', usd: '380 $' },
  { duration: '120 min', czk: '9700 Kč', eur: '422 €', usd: '485 $' },
];

const women1: PriceRow[] = [
  { duration: '60 min', czk: '2900 Kč', eur: '126 €', usd: '145 $' },
  { duration: '90 min', czk: '4000 Kč', eur: '174 €', usd: '200 $' },
  { duration: '120 min', czk: '5400 Kč', eur: '235 €', usd: '270 $' },
];

const women2: PriceRow[] = [
  { duration: '60 min', czk: '5100 Kč', eur: '222 €', usd: '255 $' },
  { duration: '90 min', czk: '6400 Kč', eur: '279 €', usd: '320 $' },
  { duration: '120 min', czk: '8500 Kč', eur: '370 €', usd: '425 $' },
];

const couple: PriceRow[] = [
  { duration: '60 min', czk: '5600 Kč', eur: '244 €', usd: '280 $' },
  { duration: '90 min', czk: '7800 Kč', eur: '340 €', usd: '390 $' },
  { duration: '120 min', czk: '10600 Kč', eur: '460 €', usd: '530 $' },
];

export const PRICE_CATALOG: CatalogPriceBlock[] = [
  {
    _type: 'priceBlock',
    _id: 'priceBlock.salon',
    titleKey: 'price.blockSalon',
    tabs: [{ rows: salon1 }, { rows: salon2 }],
  },
  {
    _type: 'priceBlock',
    _id: 'priceBlock.hotel',
    titleKey: 'price.blockHotel',
    tabs: [{ rows: hotel1 }, { rows: hotel2 }],
  },
  {
    _type: 'priceBlock',
    _id: 'priceBlock.women',
    titleKey: 'price.blockWomen',
    tabs: [{ rows: women1 }, { rows: women2 }],
  },
  {
    _type: 'priceBlock',
    _id: 'priceBlock.couple',
    titleKey: 'price.blockCouple',
    tabs: [{ rows: couple }],
  },
];

export const EXTRA_SERVICES_CATALOG: CatalogExtraService[] = [
  {
    _type: 'extraService',
    _id: 'extraService.french-kiss',
    slug: 'french-kiss',
    title: { en: 'French kiss', cs: 'Francouzské polibky' },
    price: '+500 Kč',
    sortOrder: 10,
  },
  {
    _type: 'extraService',
    _id: 'extraService.pussycat-addon',
    slug: 'pussycat-addon',
    title: { en: 'Pussycat (add-on)', cs: 'Pussycat (doplněk)' },
    price: '+500 Kč',
    sortOrder: 20,
  },
  {
    _type: 'extraService',
    _id: 'extraService.prostate-massage',
    slug: 'prostate-massage',
    title: { en: 'Prostate massage', cs: 'Masáž prostaty' },
    price: '+500 Kč',
    sortOrder: 30,
  },
  {
    _type: 'extraService',
    _id: 'extraService.tenga-egg',
    slug: 'tenga-egg',
    title: { en: 'Tenga egg', cs: 'Tenga vejce' },
    price: '+500 Kč',
    sortOrder: 40,
  },
  {
    _type: 'extraService',
    _id: 'extraService.footjob',
    slug: 'footjob',
    title: { en: 'Foot fetish / footjob', cs: 'Footfetish / footjob' },
    price: '+500 Kč',
    sortOrder: 50,
  },
  {
    _type: 'extraService',
    _id: 'extraService.stripshow',
    slug: 'stripshow',
    title: { en: 'Stripshow', cs: 'Stripshow' },
    price: '+500 Kč',
    sortOrder: 60,
  },
  {
    _type: 'extraService',
    _id: 'extraService.autoerotica',
    slug: 'autoerotica',
    title: { en: 'Autoerotica', cs: 'Autoerotika' },
    price: '+500 Kč',
    sortOrder: 70,
  },
  {
    _type: 'extraService',
    _id: 'extraService.autoerotica-toys',
    slug: 'autoerotica-toys',
    title: { en: 'Autoerotica with a toy', cs: 'Autoerotika s hračkou' },
    price: '+1000 Kč',
    sortOrder: 80,
  },
];
