# Apollo Magazine — site vitrine

Site inspiré (design & UX uniquement, aucun contenu ni image copiés) d'un
magazine masculin francophone. Construit avec Next.js 14 (App Router),
React 18, TypeScript, Tailwind CSS et Framer Motion.

## Identité de design

- **Palette** — encre `#0B0B0E`, papier `#F3EFE6`, os `#F6F4EF`,
  signal (magenta) `#E63462`, or `#D8A93B`, sarcelle `#1F8C82`.
- **Typographies** — Fraunces (display, éditorial) / Inter (texte courant) /
  Space Mono (légendes, eyebrows, numéros).
- **Signature** — chaque couverture est générée en SVG (dégradé + numéro
  typographique géant) et découpée par une diagonale animée au scroll,
  en écho au grand aplat de couleur de la page d'accueil originale.

Aucune image externe n'est utilisée : toutes les "couvertures" sont
générées par le composant `CoverArt` (SVG + dégradés), ce qui rend le
projet 100% autonome et libre de droits.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (tokens de design custom dans `tailwind.config.ts`)
- Framer Motion (animations d'entrée, reveal au scroll, micro-interactions)
- lucide-react (icônes)

## Structure du projet

```
app/
  layout.tsx        # polices, métadonnées SEO globales
  page.tsx           # assemble les sections
  globals.css         # styles globaux, focus, scrollbar, grain
  robots.ts / sitemap.ts
components/
  Header.tsx          # nav sticky + menu mobile animé
  Hero.tsx             # section d'ouverture (le "N°41 en kiosque")
  Marquee.tsx          # bandeau défilant
  ArchiveSection.tsx    # liste des anciens numéros
  IssueRow.tsx           # carte diagonale par numéro (élément signature)
  Manifesto.tsx          # citation éditoriale + piliers
  FollowSection.tsx       # formulaire newsletter + réseaux
  Footer.tsx
  CoverArt.tsx            # couverture SVG générée (pas d'image externe)
lib/
  data.ts                  # contenu des numéros, liens de nav
```

## Lancer le projet en local

Prérequis : Node.js 18.17 ou supérieur.

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

Autres commandes utiles :

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint    # vérifie le code avec ESLint
```

## Déploiement sur Vercel

Le projet est un projet Next.js standard, donc directement compatible :

1. Poussez le dossier sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com), cliquez sur **New Project** et
   importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucune configuration
   supplémentaire n'est nécessaire (`Build Command: next build`,
   `Output: .next`).
4. Cliquez sur **Deploy**.

Aucune variable d'environnement n'est requise pour cette version (pas de
backend, formulaire newsletter simulé côté client).

## Personnaliser le contenu

Tout le contenu éditorial (titres de numéros, saisons, couleurs d'accent,
liens de navigation) se trouve dans `lib/data.ts`. Modifiez ce fichier pour
ajouter un numéro, changer une couleur d'accent ou renommer une section —
aucune autre partie du code n'a besoin d'être touchée.

## Accessibilité & performance

- Contrastes vérifiés sur fond encre et fond papier.
- `prefers-reduced-motion` respecté (animations désactivées automatiquement).
- Focus clavier visible partout (`:focus-visible`).
- Polices chargées via `next/font` (auto-hébergées, pas de requête externe,
  pas de layout shift).
- Aucune image raster : les couvertures SVG sont légères et nettes à toute
  résolution.
