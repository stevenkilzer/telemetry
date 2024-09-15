import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@storybook/react'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});