import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/HTMLNTR/',
  plugins: [react()],
  publicDir: 'public',
});
