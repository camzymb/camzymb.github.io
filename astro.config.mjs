import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
    site: 'https://camzymb.github.io',
    integrations: [tailwind(), alpinejs()],
});