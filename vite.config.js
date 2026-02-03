// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

export default defineConfig({
  plugins: [react()],
  base: '/shopping-website/', // Aapke repository ka naam yahan likhein
})
