import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion') || id.includes('motion/react')) {
              return 'framer-motion';
            }
            if (id.includes('three') || id.includes('ogl')) {
              return 'three';
            }
          }
        },
      },
    },
  },
  server: {
    compress: true,
  },
});