# Metamorfosis · Directorio (landing de redirección)

Landing page standalone para el capítulo BNI Metamorfosis (León). Página de un
solo propósito: recibe a los miembros que escanean el QR y los dirige al
directorio oficial de BNI Guanajuato.

Proyecto independiente — no forma parte del repo del sitio principal de
Draft Studio.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Sin CMS, sin backend — contenido 100% estático
- Fuentes: Geist / Geist Mono vía `next/font/google` (self-hosted, sin llamadas externas)

## Desarrollo

```bash
npm install
npm run dev
```

## Deploy en Vercel

1. Importa este directorio como proyecto nuevo en Vercel (no lo agregues al
   proyecto del sitio principal).
2. Framework preset: Next.js (autodetectado).
3. En **Settings → Domains**, agrega `metamorfosis.draftstudio.mx` y apunta el
   CNAME/registro correspondiente desde el DNS de `draftstudio.mx`.
4. No requiere variables de entorno.

## Actualizar el link del directorio o los datos de ejemplo

Todo vive en [`src/lib/constants.ts`](src/lib/constants.ts):

- `BNI_DIRECTORY_URL` — link al directorio real de BNI Guanajuato.
- `PLACEHOLDER_MEMBERS` — tarjetas de ejemplo del mini-preview (reemplazar
  cuando haya datos reales de miembros, si se decide mostrar info real en
  vez del preview genérico).

## Marca

Usa los tokens del kit oficial `Draft Studio - Brand Assets` (v2.0 "Cobalto"):
Ink `#0E0E12`, Paper `#F1EEE5`, Graphite `#6B6B72`, Cobalto `#2B41E5` (acento,
≤5% de superficie), tipografía Geist / Geist Mono únicamente. Ver
`tailwind.config.ts` para los tokens y `src/components/DraftStudioLogo.tsx`
para el uso del logo.
