import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://wendra08.github.io',
  base: '/Portofolio_Wendra',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
