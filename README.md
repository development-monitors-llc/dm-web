# Development Monitors LLC Website

A responsive, content-rich marketing site that showcases Development Monitors’ services, publications, and project portfolio.  
The front page is built with:

* **Drupal 10** as the CMS (templating, translations, menus)
* **Bootstrap 5** utility classes for layout
* **Leaflet 1.9** for the interactive “Where We Work” map
* **Splide** slider for the card carousel
* **Matomo** analytics for privacy-friendly tracking

---

## 1 · Project structure

```
.
├── index.html            # Main landing page (exported from Drupal)
├── index.js              # Custom JS (map setup, misc helpers)
├── sites/                # Static assets served by Drupal
│   ├── img/              # Optimised images & icons
│   ├── styles.css        # Compiled theme CSS
│   └── styles2.css       # Additional overrides
└── README.md             # <— you are here
```

Drupal’s PHP modules, themes, and config live outside this export (usually in  
`web/core`, `web/modules`, `web/themes`, `config/…`).  
If you are **only working on the front‑end**, this repo is enough.  
If you need the full CMS, see **Option 2** below.

---

## 2 · Getting started

### Option 1 — Static‑only (quick preview)

> Perfect for tweaking HTML/CSS/JS without spinning up Drupal.

1. **Clone** the repository  
   ```bash
   git clone https://github.com/<org>/development-monitors-site.git
   cd development-monitors-site
   ```

2. **Serve** the folder with any static server  
   ```bash
   # pick ONE of the following
   npx http-server -p 8080            # Node
   python -m http.server 8080         # Python ≥3.7
   live-server .                      # VS Code Live Server extension
   ```
3. Visit `http://localhost:8080` — the site should load with full interactivity  
   (Leaflet map, Splide slider, Matomo will be disabled offline).

> **Tip:** Enable “Auto Save” in your editor; the live‑server reloads instantly.

---

### Option 2 — Full Drupal 10 stack (local CMS)

> Required if you want to edit content types, menus, or use Drupal modules.

| Step | Command / Action |
|------|------------------|
| **2.1** | Install **DDEV** or **Docker + Compose** |
| **2.2** | Copy `docker-compose.override.yml` (if provided) |
| **2.3** | `ddev start` → creates PHP, MariaDB & Traefik containers |
| **2.4** | `ddev composer install` → pulls Drupal core, themes, modules |
| **2.5** | `ddev drush cim -y` → import configuration |
| **2.6** | `ddev launch` → open the site at `https://developmentmonitors.ddev.site` |

Credentials (default Drush install):
```
admin / admin
```
— change immediately after first login.

---

## 3 · Key files

| File | Purpose |
|------|---------|
| `index.html` | Landing page template, contains Twig‑exported markup |
| `index.js` | Initialises Leaflet map, adds legend, sets view bounds |
| `sites/styles.css` | Compiled SCSS from Drupal theme (Bootstrap variables) |
| `sites/styles2.css` | Small per‑page overrides |
| `sites/img/*` | Optimised WebP/JPEG/PNG – hero, cards, map markers |

---

## 4 · Build & asset workflow

| Task | Command |
|------|---------|
| Install dev deps | `npm ci` |
| Watch SCSS → CSS | `npm run dev` (uses **sass** & **postcss** autoprefixer) |
| Lint JS & SCSS   | `npm run lint` |
| Production build | `npm run build` (minifies, hashes filenames) |

---

## 5 · Deployment guidelines

1. **Static hosting** (e.g. Vercel, Netlify): deploy the `/public` build folder.  
   Environment variable `MATOMO_URL` is optional; omit to disable tracking.
2. **Drupal hosting** (e.g. Pantheon, Acquia):  
   push the full repo, run `composer install` & `drush cim -y` in CI.

---

## 6 · External services & API keys

| Service   | Where used               | Notes                              |
|-----------|--------------------------|------------------------------------|
| Leaflet   | CDN links in `<head>`    | No key required                    |
| Matomo    | `statistik.germanwatch.org` | Set consent cookie before tracking |
| Splide.js | Slider for “What We Do”  | Bundled via CDN                    |
| Drupal    | CMS / translations       | Config in `/config/sync`           |

---

## 7 · Troubleshooting

* **Map tiles not loading:** check network; Leaflet CDN must be reachable.  
* **Mixed‑content warnings:** enforce HTTPS for Matomo & external images.  
* **Drupal config out of sync:** run `drush cim -y` then `drush cr`.

---

## 8 · Contributing

1. Fork ➜ create feature branch (`git checkout -b feat/awesome`)  
2. Commit **atomic** changes with conventional commits (`feat:`, `fix:`…)  
3. Pull request against `main`; one PR = one logical change.

---

## 9 · License

This repository: **MIT** (see `LICENSE`).  
Drupal core and contributed modules retain their original licenses (GPL‑2.0+).

---

&copy; 2017‑2025 Development Monitors LLC — All rights reserved.
