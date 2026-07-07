// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// ponytail: base only applied on `astro build` so `npm run dev` still serves at localhost root
const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: 'https://Rimba-maker.github.io',
  base: isBuild ? '/kopi-jalan/' : '/',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});