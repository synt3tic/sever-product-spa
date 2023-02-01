import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
  plugins: [eslintPlugin(), vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
