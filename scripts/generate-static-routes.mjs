// Generates dist/<route>/index.html for every non-root route in
// src/seo/routes.json, by cloning the built dist/index.html and swapping in
// route-specific <title>/description/canonical/OG/Twitter tags.
//
// Why this exists: the site is a client-rendered SPA (React + BrowserRouter).
// Googlebot executes JS and will see correct per-route tags from
// src/seo/useSEO.ts regardless. But Bing, Yandex, DuckDuckGo, and most
// link-preview bots (Slack, Telegram, X/Twitter card fetchers) either don't
// run JS at all or run it unreliably -- they read whatever HTML the server
// returns for the requested path. Because this is a GitHub Pages user-page
// site (served at the domain root, no server-side routing), a direct
// request to /faq/ or /magazine/ needs its OWN static index.html with the
// right tags already baked in, rather than falling back to 404.html's
// client-side redirect trick.
//
// This keeps a single source of truth (routes.json) shared with the
// client-side hook, so the two can't drift out of sync on title/description.
//
// Note: page-specific structured data (FAQPage on /faq, Article on
// /magazine) is intentionally NOT duplicated here -- it lives next to its
// content in the page components and is injected by useSEO.ts at runtime.
// JS-executing crawlers still see it; this script only guarantees the
// baseline meta/OG/Twitter tags for non-JS crawlers.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath)) {
  console.error("[generate-static-routes] dist/index.html not found -- run `vite build` first.");
  process.exit(1);
}

const routesConfig = JSON.parse(readFileSync(join(root, "src/seo/routes.json"), "utf8"));
const { siteUrl, siteName, defaultImage, locale, routes } = routesConfig;
const template = readFileSync(indexPath, "utf8");

function renderShell(path, meta) {
  const url = `${siteUrl}${path}/`;
  const image = `${siteUrl}${defaultImage}`;
  let html = template;

  html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
    `<meta name="description" content="${meta.description}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/>/, `<meta property="og:image" content="${image}" />`);
  html = html.replace(/<meta\s+property="og:locale"\s+content=".*?"\s*\/>/, `<meta property="og:locale" content="${locale}" />`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/, `<meta name="twitter:title" content="${meta.title}" />`);
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/,
    `<meta name="twitter:description" content="${meta.description}" />`
  );
  html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/, `<meta name="twitter:image" content="${image}" />`);

  return html;
}

let count = 0;
for (const [path, meta] of Object.entries(routes)) {
  if (path === "/") continue; // root already has its correct tags in dist/index.html
  const outDir = join(distDir, path.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), renderShell(path, meta), "utf8");
  count += 1;
  console.log(`[generate-static-routes] wrote ${path}/index.html`);
}

console.log(`[generate-static-routes] done -- ${count} static route shell(s) generated (site: ${siteName}).`);
