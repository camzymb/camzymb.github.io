import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://camzymb.github.io',
    integrations: [tailwind()],
});