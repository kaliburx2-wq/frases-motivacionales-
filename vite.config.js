import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: "/frases-motivacionales-/", // 👈 nombre EXACTO del repo
  plugins: [react()],
})
