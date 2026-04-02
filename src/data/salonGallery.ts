import { WP_ORIGIN } from './site';

export type SalonGalleryItem = {
  _type: 'salonGalleryImage';
  _id: string;
  url: string;
};

export const SALON_GALLERY_ITEMS: readonly SalonGalleryItem[] = [
  {
    _type: 'salonGalleryImage',
    _id: 'salonGallery.salon-10',
    url: `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-10.jpg`,
  },
  {
    _type: 'salonGalleryImage',
    _id: 'salonGallery.salon-8',
    url: `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-8.jpg`,
  },
  {
    _type: 'salonGalleryImage',
    _id: 'salonGallery.salon-11',
    url: `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-11.jpg`,
  },
  {
    _type: 'salonGalleryImage',
    _id: 'salonGallery.salon-4',
    url: `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-4.jpg`,
  },
  {
    _type: 'salonGalleryImage',
    _id: 'salonGallery.salon-2',
    url: `${WP_ORIGIN}/wp-content/uploads/2026/02/salon-2.jpg`,
  },
  {
    _type: 'salonGalleryImage',
    _id: 'salonGallery.salon',
    url: `${WP_ORIGIN}/wp-content/uploads/2026/02/salon.jpg`,
  },
];
