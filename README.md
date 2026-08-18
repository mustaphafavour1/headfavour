# headfavour.com

One-pager for [headfavour.com](https://headfavour.com) — a live catalog of shipped
projects, a short bio, and links out to socials.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Concept

The whole page is built around one idea: **a stamped shipping manifest.** Every
major headline carries a rotated, ink-stamp-style badge on one word (the
`Stamped` component in `src/components/Stamped.tsx`), and the project list
in `src/components/ShippingLog.tsx` reads like a manifest — numbered entries,
a "LIVE" status stamp, category tags — rather than a generic card grid.

## Structure

- `src/lib/data.ts` — project catalog and social links (edit here to add/update projects)
- `src/components/Stamped.tsx` — the shared headline stamp mechanism
- `src/components/Hero.tsx`, `Bio.tsx`, `ShippingLog.tsx`, `Socials.tsx`, `Footer.tsx`, `Nav.tsx` — page sections
- `src/components/icons.tsx` — hand-rolled brand icons (LinkedIn, GitHub, X, Instagram, Facebook — not in lucide-react)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```
