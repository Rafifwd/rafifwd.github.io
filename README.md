# rafifwd.github.io

Single-page portfolio for Muhammad Rafif Widyadhana, built with Astro 5 and TypeScript. Deployed to GitHub Pages at [https://rafifwd.github.io](https://rafifwd.github.io).

## Stack

- Astro 5 (static output)
- TypeScript (strict)
- Hand-written CSS, no framework
- Self-hosted variable fonts: Inter and JetBrains Mono via `@fontsource-variable`

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

- `site.meta` — page title, description, canonical URL, OG image
- `site.links` / `site.contact` — email, GitHub, LinkedIn, contact copy
- `site.projects` — project order, descriptions, stacks, live links
- `site.about` — positioning, quick facts, capability blocks
- `site.experience` — timeline entries
- `site.hero` / `site.nav` — hero copy, availability, terminal lines, navigation

Components in `src/components/` consume this data; you normally do not need to edit them to update content. Global styles are in `src/styles/global.css`.

Design tokens (background, surface, border, text, muted, accent) are CSS custom properties at the top of `global.css`.

Do not add a phone number or street-level address to this site.

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

- The OG image is available as `public/og.svg` and `public/og.png` (1200×630).
- Motion is limited and disabled under `prefers-reduced-motion`.
- External links use `rel="noopener noreferrer"`.
