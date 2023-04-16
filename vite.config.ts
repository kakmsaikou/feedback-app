import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/feedback-app/',
  plugins: [react()],
  // const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:5000"
      }
    }
  }
});
