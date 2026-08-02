import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works under GitHub Pages project subpaths
  // (https://<user>.github.io/<repo>/) without hardcoding the repo name.
  // Combined with HashRouter, this means no server-side rewrite rules
  // are needed for client-side routes to work on Pages.
  base: './',
  plugins: [react()],
})
