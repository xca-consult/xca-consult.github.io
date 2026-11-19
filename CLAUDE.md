# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for XCA Consult ApS, hosted via GitHub Pages at `www.xca-consult.dk`. No build process, no package manager, no server-side code.

## Deployment

Push to `main` branch on GitHub — GitHub Pages serves the site automatically. No build step required.

## Architecture

Single-page application in a single `index.html` file. All content is divided into 5 tabs (About, Resume, Services, Competencies, Contact) with hash-based routing (`#about`, `#resume`, `#services`, `#competencies`, `#contact`). Tab panels are shown/hidden via the `.active` class; the active hash drives navigation. No frameworks or third-party JS.

**Key files:**
- `index.html` — all site content and structure, SEO meta/Open Graph tags, JSON-LD structured data, and an inline SVG icon sprite (Font Awesome Free icons, referenced via `<svg class="icon"><use href="#icon-NAME">`)
- `css/main.css` — all custom styles; CSS variables in `:root`, mobile-first media queries
- `js/main.js` — vanilla JS tab switching (buttons, `.tab-link` anchors, back/forward via `popstate`)
- `llms.txt`, `sitemap.xml`, `robots.txt` — keep in sync with `index.html` when content changes (bump sitemap `lastmod`)
- `images/og-card.jpg` — 1200×630 social preview image

## Local Development

To preview the site, open `index.html` directly in Chrome:

```sh
open -a "Google Chrome" index.html
```

No server or build step needed. To simulate GitHub Pages behavior with hash routing, serve with any static file server:

```sh
python3 -m http.server 8000
```
