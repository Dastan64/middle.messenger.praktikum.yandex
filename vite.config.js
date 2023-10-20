import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import checker from 'vite-plugin-checker';

export default defineConfig({
  base: './',
  plugins: [
    checker({
      typescript: true,
    }),
  ],
});
