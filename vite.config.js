import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    babel: {
      compact: true,
    },
  })],
  base: '/',
  build: {
    target: ['es2020'],
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('gsap')) {
              return 'gsap';
            }
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 2000,
  },
  server: {
    compress: true,
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
    middlewareMode: false,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'gsap',
      'react-icons/fi',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    exclude: [],
  },
  preview: {
    port: 4173,
    strictPort: false,
    host: 'localhost',
  }
})