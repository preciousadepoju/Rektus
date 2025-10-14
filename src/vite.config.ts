import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  // GitHub Pages deployment configuration
  // IMPORTANT: Change 'rektus-deal-platform' to your actual repository name
  base: process.env.GITHUB_PAGES ? '/rektus-deal-platform/' : '/',
})
