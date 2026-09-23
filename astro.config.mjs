// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Serve from root during local development; builds and previews use the deployed subpath.
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  site: 'https://Rimba-maker.github.io',
  base: isDev ? '/' : '/kopi-jalan/',

  vite: {
    plugins: [tailwindcss()]
  }
});