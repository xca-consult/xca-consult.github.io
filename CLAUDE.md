# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for XCA Consult ApS, hosted via GitHub Pages at `www.xca-consult.dk`. No build process, no package manager, no server-side code.

## Deployment

Push to `main` branch on GitHub — GitHub Pages serves the site automatically. No build step required.

## Architecture

Single-page application in a single `index.html` file. All content is divided into 4 tabs (About, Resume, Services, Contact) controlled by jQuery EasyTabs with hash-based routing (`#about`, `#resume`, `#services`, `#contact`). Tab content is hidden/shown via CSS; the active hash drives navigation.

**Key files:**
- `index.html` — all site content and structure
- `css/main.css` — all custom styles; includes a simple grid (`.g1`, `.g2`), typography scale, and skill bar animations
- `js/main.js` — tab initialization and animated skill meter bars (triggered on page load and when Resume tab becomes active)
- `js/vendor/` — jQuery 1.10.1, EasyTabs, HashChange, html5shiv (IE compatibility)

## Local Development

Open `index.html` directly in a browser. No server or build step needed. To simulate GitHub Pages behavior with hash routing, serve with any static file server:

```sh
python3 -m http.server 8000
```
