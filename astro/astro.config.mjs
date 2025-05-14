// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@styles': path.resolve('./src/styles'),
        '@components': path.resolve('./src/components'),
        '@assets': path.resolve('./src/assets'),
        '@layouts': path.resolve('./src/layouts'),
        '@data': path.resolve('./src/data'),
      },
    },
  },
});
