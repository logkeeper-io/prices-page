import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  //site: 'https://logkeeper-io.github.io',
  site: 'https://logkeeper.io',
  //base: 'prices-page'
});