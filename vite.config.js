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
    reportCompressedSize: false,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'gsap': ['gsap'],
          'react-vendor': ['react', 'react-dom'],
        },
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1600,
  },
  server: {
    compress: true,
    headers: {
      'Cache-Control': 'public, max-age=3600',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap'],
  }
})