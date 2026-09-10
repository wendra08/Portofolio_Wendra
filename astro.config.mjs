import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://wendrasuryananda.my.id',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
