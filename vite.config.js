import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [
      react({
        jsx: 'automatic',
      }),
    ],
    base: isProd ? './' : '/', // use relative paths in production
    build: {
      chunkSizeWarningLimit: 600, // optional, avoids big chunk warnings
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
          },
        },
      },
    },
  }
})
