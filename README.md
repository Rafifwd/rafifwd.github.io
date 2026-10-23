# rafifwd.github.io

Single-page portfolio for Muhammad Rafif Widyadhana, built with Astro 5 and TypeScript. Deployed to GitHub Pages at [https://rafifwd.github.io](https://rafifwd.github.io).

## Stack

- Astro 5 (static output)
- TypeScript (strict)
- Hand-written CSS, no framework
- Self-hosted fonts via `@fontsource`: Instrument Serif, Geist Variable, JetBrains Mono

## Design notes

The site uses an editorial / research identity: warm paper, ink text, one
burnt-sienna accent, serif display type, a grotesk body face, and monospace
metadata. Layouts use an asymmetric 12-column grid with hairline rules and
generous whitespace.

A dark editorial theme mirrors the light one with warm near-black paper and
bone ink. The header theme button (moon in light, sun in dark) toggles it; the
first visit defaults to the operating system's `prefers-color-scheme`, and a
manual choice is stored under the `theme` localStorage key (`light` / `dark`).
The closing contact/footer block intentionally inverts against the page: a
light page closes in dark ink, a dark page closes in light paper.

### Tokens

Defined at the top of [`src/styles/global.css`](src/styles/global.css):

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F4EFE6` | Page background |
| `--paper-deep` | `#EAE3D6` | Figure wells |
| `--paper-raised` | `#FAF7F0` | Model card surface |
| `--ink` | `#15140F` | Primary text, ink buttons |
| `--ink-2` | `#3E3A31` | Secondary text |
| `--muted` | `#6C6557` | Metadata |
| `--rule` / `--rule-strong` | `#D8CEBC` / `#B9AD97` | Hairlines |
| `--accent` | `#A63A1B` | Links, marks, highlights |
| `--on-ink` | `#F4EFE6` | Text on ink-colored buttons |
| `--contact-bg` / `--contact-fg` | `#15140F` / `#F4EFE6` | Closing contact panel and footer |
| `--contact-muted` / `--contact-accent` | `#B9AD97` / `#E8896B` | Contact metadata and links |
| `--contact-rule` | `rgba(244, 239, 230, 0.16)` | Contact/footer hairlines |

Dark values live in the `:root[data-theme="dark"]` block directly below the
light block: the same token names are redefined (paper, ink, rules, accent,
contact panel, shadows). Add a new token to both blocks, and to both
`--contact-*` groups when it affects the closing panel, so the themes stay in
sync. `color-scheme` is set per theme for native form controls and scrollbars.

Type: Instrument Serif for display, Geist Variable for body/UI, JetBrains Mono
for labels and metadata. Body copy is 17px on mobile and 18px from 900px up.

### Sections

1. Hero with a 7/5 split and an editorial model card.
2. `01 / Selected work` — three alternating project rows with custom inline SVG figures.
3. `02 / About` — prose, facts, and three capability columns.
4. `03 / Experience` — hairline rows for roles and contributions.
5. `04 / Contact` — full-bleed ink panel, closed by the footer.

### Motion

Reveals are opacity + 18px translate transitions triggered once by
IntersectionObserver, with an optional `--i` stagger. The header gains a border
and shadow after 8px of scroll. The mobile menu, active navigation state, and
theme toggle are handled in [`src/scripts/site.ts`](src/scripts/site.ts). A
blocking inline script in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)
sets the theme before paint so system-dark visitors get no flash. All animation
and transforms are disabled under `prefers-reduced-motion`.

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

- `public/favicon.svg` — paper rounded square, ink serif `r`, accent dot.
- `public/og.svg` — 1200×630 source with embedded font subsets.
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
