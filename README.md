# portfolio

Empty React + Vite project, ready for GitHub Pages.

## develop

```bash
npm install
npm run dev          # http://localhost:5173
```

## build

```bash
npm run build
npm run preview      # preview the production build
```

## deploy to GitHub Pages

Two options — pick one.

### option A: GitHub Actions (recommended)

The included workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`. One-time setup:

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. Site goes live at `https://<user>.github.io/<repo>/`.

The workflow sets `VITE_BASE=/<repo>/` automatically, so asset paths resolve correctly under the project-site subpath.

### option B: manual via `gh-pages` branch

```bash
# project site (https://<user>.github.io/<repo>/)
$env:VITE_BASE="/<repo>/"; npm run deploy   # PowerShell
VITE_BASE=/<repo>/ npm run deploy           # bash

# user/organization site (https://<user>.github.io/)
npm run deploy
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/ (root)`**.

## notes

- `vite.config.js` reads `VITE_BASE` from the environment. Defaults to `/`.
- Empty starter — edit `src/App.jsx` and go.
