# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

This is the marketing and documentation website for **Q-Tune** — a DIY chromatic guitar tuner pedal kit based on an ESP32-S3 microcontroller. The site is hosted at [q-tune.com](https://www.q-tune.com) and also serves as the firmware OTA update portal via ESP Web Tools.

## Commands

All Jekyll commands must be run from the `docs/` directory:

```bash
cd docs

# Install dependencies (first time or after Gemfile changes)
bundle install

# Serve locally with live reload
bundle exec jekyll serve
# or use the helper script:
./run-jekyll.sh
```

The site builds to `docs/_site/` (gitignored).

## Architecture

### Site Structure

- **`docs/`** — Jekyll site root. All content lives here.
  - **`_config.yml`** — Site config: uses `jekyll/minima` remote theme, nav pages are explicitly ordered there under `minima.nav_pages`.
  - **`_includes/custom-head.html`** — Sitewide `<head>` additions: Google Analytics, Glider.js image carousel, global CSS for buy buttons and video embeds.
  - **`_includes/footer.html`** — Custom footer with copyright and legal links.
  - **`index.markdown`** — Homepage with buy buttons, product image carousel (Glider.js), and feature descriptions.
  - **`install.markdown`** — Firmware installer page using [ESP Web Tools](https://esphome.github.io/esp-web-tools/) (`esp-web-install-button` web component).
  - **`build-instructions.markdown`** — Links to PDF assembly guides and build videos.

### Firmware OTA Updates

The `docs/assets/install/` directory is the firmware distribution system:

- **`artifacts/manifest.json`** — Points to the current firmware version. When releasing a new firmware version, this file must be updated to reference the new `.bin` filename and version number.
- **`artifacts/*.bin`** — Compiled ESP32-S3 firmware binaries. Three files are required per release: the main app binary (`q-tune-<version>.bin`), `bootloader.bin`, and `partition-table.bin`.
- **`js/main.js`** — Compiled/bundled JS for the install page (not hand-edited; source is elsewhere).

**To release a new firmware version:**
1. Add the new `q-tune-<version>.bin` to `docs/assets/install/artifacts/`
2. Update `docs/assets/install/artifacts/manifest.json` to point to the new binary and update the `version` field.

**To release a beta firmware version:**
1. Add the beta `q-tune-<version>.bin`, `bootloader.bin`, and `partition-table.bin` to `docs/assets/install/beta/`
2. Update `docs/assets/install/beta/beta-manifest.json` to point to the new binary and update the `version` field.
3. Share `/beta-install/` directly — it is excluded from the nav, sitemap, and `robots.txt`.

### Buy Buttons

Purchase links use Stripe's hosted checkout. Each buy button in `index.markdown` has a `data-url-us` attribute containing a Stripe URL. A region-selection modal (JS inline in `index.markdown`) intercepts clicks and redirects to the appropriate Stripe link.

### Key External Dependencies

- **ESP Web Tools** — loaded from unpkg CDN on the install page for in-browser ESP32 flashing.
- **Glider.js** — image carousel on the homepage, loaded from jsDelivr CDN.
- **Stripe** — payment processing, linked via hosted buy buttons.
- **Google Analytics** — tag `G-CVGF0BKRZD`, included in `custom-head.html`.
