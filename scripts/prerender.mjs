/**
 * Pre-renderizado SSR para VitalFem (vía Vite SSR)
 * Genera un index.html real por cada ruta de la SPA, con su título,
 * descripción y contenido ya escritos en el HTML (SEO + vistas previas).
 * Se ejecuta después de `vite build` (ver package.json → build).
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { HelmetProvider } from "react-helmet-async";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createElement } from "react";
import { createServer } from "vite";

// Rutas públicas (las mismas del sitemap). El catch-all (*) no se pre-renderiza.
const ROUTES = [
  { path: "/", out: "index.html" },
  { path: "/quien-soy", out: "quien-soy/index.html" },
  { path: "/mujer-fit", out: "mujer-fit/index.html" },
  { path: "/embarazo-saludable", out: "embarazo-saludable/index.html" },
  { path: "/recuperacion-posparto", out: "recuperacion-posparto/index.html" },
  { path: "/contacto", out: "contacto/index.html" },
  { path: "/politica-privacidad", out: "politica-privacidad/index.html" },
  { path: "/aviso-legal", out: "aviso-legal/index.html" },
  { path: "/politica-cookies", out: "politica-cookies/index.html" },
];

const rootDir = process.cwd();
const distDir = resolve(rootDir, "dist");
const template = readFileSync(resolve(distDir, "index.html"), "utf8");

// Assets reales del build (con hash, p.ej. foto-1-OGeLZqem.JPG)
let realAssets = [];
try {
  realAssets = readdirSync(resolve(distDir, "assets"));
} catch {}

// Convierte rutas de desarrollo (/src/assets/x.ext) a las reales de producción (/assets/x-hash.ext)
function fixAssetUrls(html) {
  return html.replace(/(src|srcset)="\/src\/assets\/([^"]+)"/g, (m, attr, name) => {
    const dot = name.lastIndexOf(".");
    const base = name.slice(0, dot);
    const ext = name.slice(dot);
    const found = realAssets.find((a) => a.startsWith(base + "-") && a.endsWith(ext));
    if (found) return `${attr}="/assets/${found}"`;
    if (realAssets.includes(name)) return `${attr}="/assets/${name}"`;
    return m;
  });
}

// Vite en modo SSR: compila TSX y resuelve el alias "@" sobre la marcha
const vite = await createServer({
  root: rootDir,
  logLevel: "error",
  server: { middlewareMode: true },
  appType: "custom",
});

const { AppProviders, AppRoutes } = await vite.ssrLoadModule("/src/App.tsx");

function renderRoute(route) {
  const helmetContext = {};
  const html = renderToString(
    createElement(
      AppProviders,
      { helmetContext },
      createElement(StaticRouter, { location: route.path }, createElement(AppRoutes))
    )
  );

  const helmet = helmetContext.helmet || {};
  const title = helmet.title ? helmet.title.toString() : "<title>VitalFem</title>";
  const meta = helmet.meta ? helmet.meta.toString() : "";
  const link = helmet.link ? helmet.link.toString() : "";
  const bodyAttrs = helmet.bodyAttributes ? helmet.bodyAttributes.toString() : "";

  // Rutas de imágenes de desarrollo → assets reales del build (con hash)
  const htmlFinal = fixAssetUrls(html);

  let doc = template.replace(/<title>[^<]*<\/title>/, title);
  // Quitar meta/link estáticos del base (los dinámicos van después, sin duplicar)
  doc = doc.replace(/<meta name="description"[^>]*>\s*/g, "");
  doc = doc.replace(/<meta property="og:[^>]*>\s*/g, "");
  doc = doc.replace(/<meta name="twitter:[^>]*>\s*/g, "");
  doc = doc.replace(/<link rel="icon"[^>]*>\s*/g, "");
  doc = doc.replace(/<link rel="shortcut icon"[^>]*>\s*/g, "");

  // Contenido pre-renderizado dentro de #root
  doc = doc.replace(/<div id="root"><\/div>/, `<div id="root">${htmlFinal}</div>`);

  // Meta/link dinámicos antes de </head>
  const extra = [meta, link].filter(Boolean).join("\n  ");
  doc = doc.replace("</head>", `${extra}\n</head>`);

  if (bodyAttrs) doc = doc.replace(/<body>/, `<body ${bodyAttrs}>`);

  return doc;
}

let ok = 0;
for (const route of ROUTES) {
  try {
    const outPath = resolve(distDir, route.out);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, renderRoute(route), "utf8");
    ok++;
    console.log(`✅ ${route.path} → ${route.out}`);
  } catch (e) {
    console.error(`❌ ${route.path}: ${e.message}`);
    process.exitCode = 1;
  }
}

await vite.close();
console.log(`🎉 Pre-renderizado: ${ok}/${ROUTES.length} páginas`);
