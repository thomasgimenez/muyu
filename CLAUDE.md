# CLAUDE.md

## Proyecto

Landing page para emprendimiento de alimentos fermentados. El sitio sirve como presencia web principal y como destino de QR codes impresos en productos físicos.

## Stack

- **Framework:** Astro (SSG)
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Deploy:** (por definir — Vercel, Netlify o Cloudflare Pages recomendados)

## Estructura del proyecto

```
src/
├── pages/
│   ├── index.astro          # Landing page principal
│   └── qr/
│       └── [slug].astro     # Redirecciones QR dinámicas
├── layouts/
│   └── Base.astro           # Layout base con head, meta, fonts
├── components/              # Componentes reutilizables (.astro)
├── content/
│   └── qr-redirects.json   # Mapa de slugs QR → URLs destino
├── lib/
│   └── analytics.ts         # Helpers de analíticas
└── styles/
    └── global.css           # Estilos globales y config Tailwind
```

## Ruta /qr — Redirecciones QR

Esta es la funcionalidad central del proyecto.

- Los QR codes físicos apuntan a `/qr/{slug}` (ej: `/qr/kombucha-500ml`)
- El archivo `qr-redirects.json` mapea cada slug a su URL destino
- La redirección debe registrar analíticas antes de redirigir (UTM params, timestamp, user-agent)
- Si un slug no existe, redirigir al home con un fallback amigable
- Los slugs deben ser cortos, en minúsculas, separados por guiones

Formato de `qr-redirects.json`:
```json
{
  "kombucha-500ml": {
    "target": "https://instagram.com/mi-marca",
    "label": "Kombucha 500ml - Etiqueta"
  }
}
```

## Convenciones

- Componentes en PascalCase: `ProductCard.astro`
- Archivos de páginas en kebab-case
- Preferir componentes `.astro` sobre frameworks JS (React/Vue) a menos que se necesite interactividad del lado del cliente
- Textos y copy en español (Argentina)
- Comentarios de código en español

## Estilo visual

- Estética natural/orgánica acorde a alimentos fermentados
- Paleta de colores terrosos y cálidos (por definir en detalle)
- Tipografía legible, mobile-first
- Diseño limpio, sin sobrecarga visual

## Comandos

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Preview del build
```

## Notas

- Prioridad actual: ruta /qr funcional con analíticas
- La landing page principal se desarrollará en una segunda fase
- Mantener el bundle lo más liviano posible
