import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE in CI for GitHub Pages project sites, e.g. "/portfolio/".
// For a user/organization site (<user>.github.io), leave it as "/".
const base = process.env.VITE_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5380 },
  preview: { port: 5380 },
})
