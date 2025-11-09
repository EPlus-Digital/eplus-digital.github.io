import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Copy 404.html to dist after build
    {
      name: 'copy-404',
      closeBundle() {
        try {
          copyFileSync(
            join(__dirname, 'public', '404.html'),
            join(__dirname, 'dist', '404.html')
          )
        } catch (err) {
          console.warn('Failed to copy 404.html:', err)
        }
      }
    }
  ],
  publicDir: 'assets',
  // Base path - repository is eplus-digital.github.io so base is '/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
