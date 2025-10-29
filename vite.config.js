import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: ['es2020'],
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split large dependencies
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'framer-motion'
            }
            if (id.includes('gsap')) {
              return 'gsap'
            }
            if (id.includes('ogl')) {
              return 'ogl'
            }
            if (id.includes('recharts') || id.includes('chart')) {
              return 'charts'
            }
            return 'vendor'
          }
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    compress: true,
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
    middlewareMode: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap'],
    exclude: ['ogl'],
  }
})