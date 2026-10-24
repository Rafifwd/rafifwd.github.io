# rafifwd.github.io

Single-page portfolio for Muhammad Rafif Widyadhana, built with Astro 5 and TypeScript. Deployed to GitHub Pages at [https://rafifwd.github.io](https://rafifwd.github.io).

## Stack

- Astro 5 (static output)
- TypeScript (strict)
- Hand-written CSS, no framework
- Self-hosted fonts via `@fontsource`: Space Grotesk Variable, Geist Variable, JetBrains Mono

## Design notes

The site follows the **Signal Index** direction: a Swiss/technical portfolio
index built on strict 12-column discipline, sharp corners, hairline rules, mono
metadata, an oversized Space Grotesk poster headline, one electric cobalt
signal, and a full-bleed cobalt contact block. It should read like a precise
printed index or technical dossier rather than a card-based landing page.

The light theme is warm paper (`#F3F2ED`) with near-black ink and cobalt
(`#1F3CFF`) as the only accent. A dark theme mirrors it with near-black paper,
bone ink, and a lighter cobalt (`#8C9BFF`) for text and controls. The contact
block stays saturated cobalt in both themes (`#1F3CFF` light, `#2B45FF` dark)
with white type. The footer sits below it as a fixed black bar with bone text
in both themes.

The header theme button (moon in light, sun in dark) toggles the theme; the
first visit defaults to the operating system's `prefers-color-scheme`, and a
manual choice is stored under the `theme` localStorage key (`light` / `dark`).
A blocking inline script applies the theme before paint, and the
`meta[name="theme-color"]` value is kept in sync with the active paper color.

### Tokens

Defined at the top of [`src/styles/global.css`](src/styles/global.css):

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | `#F3F2ED` | `#0B0B0C` | Page background |
| `--paper-2` | `#E9E8E1` | `#141416` | Row hover, figure wells |
| `--paper-raised` | `#FAFAF7` | `#1A1A1D` | Raised figure fills |
| `--ink` | `#0B0B0C` | `#F3F2ED` | Primary text |
| `--ink-2` | `#2C2C2F` | `#D5D4CC` | Secondary text |
| `--muted` | `#5C5C56` | `#A3A29A` | Metadata |
| `--rule` / `--rule-strong` | `#D1D0C7` / `#9E9D94` | `#2A2A2D` / `#4A4A4F` | Hairlines |
| `--accent` | `#1F3CFF` | `#8C9BFF` | Cobalt signal, links, marks |
| `--on-accent` | `#FFFFFF` | `#0B0B0C` | Text on accent fills |
| `--on-ink` | `#F3F2ED` | `#0B0B0C` | Text on ink surfaces |
| `--contact-bg` / `--contact-fg` | `#1F3CFF` / `#FFFFFF` | `#2B45FF` / `#FFFFFF` | Contact block |
| `--contact-muted` | `#D7DCFF` | `#D7DCFF` | Contact copy and metadata |
| `--contact-rule` | `rgba(255, 255, 255, 0.28)` | `rgba(255, 255, 255, 0.28)` | Contact hairlines |
| `--footer-bg` / `--footer-fg` | `#0B0B0C` / `#F3F2ED` | `#0B0B0C` / `#F3F2ED` | Fixed footer bar |

Add a new theme token to both theme blocks, and to both `--contact-*` groups
when it affects the closing panel. The fixed footer tokens live only in
`:root`, so the closing bar stays fixed across themes. `color-scheme` is set
per theme for native controls and scrollbars.

Type: Space Grotesk Variable for the uppercase display poster, Geist Variable
for body/UI, and JetBrains Mono for labels and metadata. Body copy is 17px on
mobile and 18px from 900px up. All fonts are self-hosted.

### Sections

1. `01 / Intro` — full-width poster headline, lede and actions in seven columns,
   borderless model dossier in five.
2. `02 / Selected work` — a ruled case index; each project is one row with a
   four-column inline SVG technical plate.
3. `03 / About` — seven-column statement, four-row spec table, and a three-column
   ruled capabilities table.
4. `04 / Experience` — a hairline table with period, role/org, contribution, and
   location.
5. `05 / Contact` — full-bleed cobalt block with the giant email link, followed
   by a fixed black footer.

### Motion

There are no scroll reveals; content is readable immediately. Hover and focus
transitions run at 140–180ms, the theme change is instant, and all motion is
disabled under `prefers-reduced-motion`. The mobile menu, active navigation
state, theme toggle, inert/scroll-lock behavior, and no-JS fallback are handled
in [`src/scripts/site.ts`](src/scripts/site.ts) and the blocking inline script
in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro).

## Local development

```bash
cd portfolio
npm install
npm run dev
```

Open `http://localhost:4321`.

Useful commands:

```bash
npm run check    # Astro + TypeScript diagnostics
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Editing content

All copy and links live in [`src/data/site.ts`](src/data/site.ts):

- `site.meta` — page title, description, canonical URL, OG image, theme color
- `site.links` / `site.contact` — email, GitHub, LinkedIn, contact copy
- `site.projects` — project order, descriptions, stacks, live links, figure labels
- `site.about` — positioning, quick facts, capability blocks
- `site.experience` — experience rows
- `site.hero` / `site.nav` — hero copy, model card rows, availability, navigation

Components in `src/components/` consume this data; you normally do not need to edit them to update content. Global styles are in `src/styles/global.css`.

Do not add a phone number or street-level address to this site.

## Assets

- `public/favicon.svg` — ink square, cobalt hairline, bone grotesk `r`, cobalt
  signal square.
- `public/og.svg` — 1200×630 source with embedded Space Grotesk and JetBrains
  Mono subsets.
- `public/og.png` — 1200×630 export of the same layout.

## Deploying to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds with `withastro/action@v3` and deploys with `actions/deploy-pages@v4`. It expects the **contents of this `portfolio/` directory to be at the repository root**.

1. Create a new GitHub repository named exactly `rafifwd.github.io`.
2. Copy the contents of `portfolio/` into the new repository root (so `package.json`, `astro.config.mjs`, `src/`, and `.github/` are at the top level). Do not commit `node_modules/` or `dist/`.
3. Commit and push to the `main` branch.
4. In the repository, open **Settings > Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Wait for the "Deploy to GitHub Pages" workflow to finish. The site will be available at [https://rafifwd.github.io](https://rafifwd.github.io).

You can also run the workflow manually from the **Actions** tab (`workflow_dispatch`).

## Custom domain later

This project does not configure a custom domain. To add one later:

1. Add a `public/CNAME` file containing the domain (for example `rafifwd.dev`).
2. Configure the DNS records GitHub Pages requires (an `A`/`AAAA` apex record or a `CNAME` for a subdomain).
3. Set the custom domain in **Settings > Pages** and update `site` in `astro.config.mjs`, plus the canonical/OG URLs in `src/data/site.ts`.

## Notes

- External links use `target="_blank"` and `rel="noopener noreferrer"`.
- The page is a single document with anchors: `#top`, `#main`, `#work`, `#about`, `#experience`, `#contact`.
- All figures are inline SVG with accessible titles and descriptions.
