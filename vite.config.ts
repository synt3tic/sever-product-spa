import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [eslintPlugin(), vue(), svgLoader()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
