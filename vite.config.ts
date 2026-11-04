import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { TanStackStartVite } from '@lovable.dev/vite-tanstack-config';

// https://vitejs.dev
export default defineConfig({
  plugins: [
    TanStackStartVite(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

