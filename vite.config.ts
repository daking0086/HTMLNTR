import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://daking0086.github.io/HTMLNTR/
export default defineConfig({
  base: '/HTMLNTR/',
  plugins: [react()],
  publicDir: 'public',
});
