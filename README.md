# Sakura Family Restaurant — Website

A single static site, no build step, no dependencies.

```
website/
  index.html          all markup + SEO/meta + schema.org Restaurant data
  css/styles.css       full design system (colors, type, components, animations)
  js/menu-data.js       the entire menu + curated Google reviews, as data
  js/main.js            nav, mobile drawer, scroll reveal, menu filters,
                         gallery lightbox, reviews marquee, live open/closed
                         status, animated stats, sticky mobile CTA bar
  assets/logo/          favicons generated from the brand logo
  assets/images/        the 19 dish photos, copied from ../images
```

## View it

Any static file server works. From this folder:

```
python -m http.server 8080
```

Then open `http://localhost:8080`. (Opening `index.html` directly by
double-clicking also works for everything except the Google Maps embed,
which some browsers block over `file://`.)

## Editing content

- **Menu / prices** → edit `js/menu-data.js` (`MENU_DATA` array). Cards,
  filters and the gallery all render from this automatically.
- **Reviews** → `REVIEWS_DATA` in the same file.
- **Phone / address / hours** → appear in a few places: the hero, the
  header call button, the location section, the footer, the mobile CTA
  bar, and the `schema.org` JSON-LD block in `index.html`'s `<head>`.
- **Colors / type** → CSS custom properties at the top of `css/styles.css`.

See `../BRAND_GUIDELINES.md` for the full brand rationale (colors sampled
from the logo, typography pairing, voice, imagery guidance).

## Deploying

It's plain HTML/CSS/JS — drag the `website/` folder onto Netlify/Vercel's
manual-deploy drop zone, or host it on any static host (GitHub Pages, S3 +
CloudFront, etc.). No build command needed.
