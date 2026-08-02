import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so asset URLs resolve correctly. Routing now uses
  // BrowserRouter (clean paths, no "/#/") combined with the GitHub Pages
  // SPA-fallback trick in public/404.html + index.html, instead of
  // HashRouter -- see those two files for how deep links survive a
  // refresh without server-side rewrite support.
  base: './',
  plugins: [react()],
})
