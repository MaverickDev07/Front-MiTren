import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4000,
    https: {
      key: readFileSync('localhost-key.pem'),
      cert: readFileSync('localhost.pem'),
    },
  },
});