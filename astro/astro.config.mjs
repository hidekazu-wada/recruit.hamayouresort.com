// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@styles': path.join(rootDir, 'src/styles'),
        '@components': path.join(rootDir, 'src/components'),
        '@assets': path.join(rootDir, 'src/assets'),
        '@layouts': path.join(rootDir, 'src/layouts'),
        '@data': path.join(rootDir, 'src/data'),
        '@utils': path.join(rootDir, 'src/utils'),
      },
    },
  },
  base: '/',
});
