import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.q-tune.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/beta-install'),
    }),
  ],
  trailingSlash: 'ignore',
});
