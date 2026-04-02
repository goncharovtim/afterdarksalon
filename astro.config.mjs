// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Static hosting redirects: public/_redirects (Netlify-style) + vercel.json (Vercel).
export default defineConfig({
  site: 'https://afterdark.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});