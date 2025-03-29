import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://backend:8000', // Use service name from docker-compose
        changeOrigin: true,
        secure: false
      }
    }
  }
})