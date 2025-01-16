import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'buffer': 'buffer/'
    },
  },
  define: {
    'global': {},
    'process.env': {}
  },
  server: {
    proxy: {
      '/yearn-api': {
        target: 'https://api.yearn.finance/v1/chains',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yearn-api/, '')
      }
    }
  }
});