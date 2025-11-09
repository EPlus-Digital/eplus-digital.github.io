import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Copy 404.html and .nojekyll to dist after build
    {
      name: 'copy-github-pages-files',
      closeBundle() {
        try {
          // Copy 404.html
          copyFileSync(
            join(__dirname, 'public', '404.html'),
            join(__dirname, 'dist', '404.html')
          )
          // Create .nojekyll file to disable Jekyll processing
          writeFileSync(
            join(__dirname, 'dist', '.nojekyll'),
            ''
          )
          console.log('✓ Copied 404.html and created .nojekyll')
        } catch (err) {
          console.warn('Failed to copy GitHub Pages files:', err)
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
