import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adityadhikale.netlify.app',
  output: 'static',
  build: {
    format: 'directory',
  },
});
