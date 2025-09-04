import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    plugins: [
      tailwindcss(),
      react({
        jsx: 'automatic'
      })
    ],
    base: isProd ? '/blessan-portfolio/' : '/',
    
  }
})
