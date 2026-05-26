# GameOri Deployment

GameOri is a static site prepared for `https://gameori.com`. The generated game and guide routes are already committed under `games/` and `guides/`.

## Pre-Deploy

Run these checks from the project root:

```bash
SITE_URL=https://gameori.com node scripts/generate-routes.js
node --check app.js
node --check scripts/generate-routes.js
node --check scripts/generate-assets.js
```

Confirm these production files exist:

- `ads.txt`
- `robots.txt`
- `sitemap.xml`
- `_headers`
- `games/*/index.html`
- `guides/*/index.html`

## Cloudflare Pages

Recommended settings:

- Framework preset: `None`
- Build command: `SITE_URL=https://gameori.com node scripts/generate-routes.js`
- Build output directory: project root
- Production branch: your main branch

After the first deploy:

1. Add the custom domain `gameori.com`.
2. Add `www.gameori.com` if needed and redirect it to the canonical domain.
3. Open `https://gameori.com/ads.txt` and confirm the publisher line is visible.
4. Open `https://gameori.com/robots.txt` and confirm it points to `https://gameori.com/sitemap.xml`.
5. Open `https://gameori.com/sitemap.xml` and confirm URLs use `https://gameori.com`.

## Post-Deploy Checklist

- Submit `https://gameori.com/sitemap.xml` in Google Search Console.
- Add `gameori.com` in Google AdSense and wait for review.
- Test these key URLs on desktop and mobile:
  - `https://gameori.com/`
  - `https://gameori.com/games/blackmyth/`
  - `https://gameori.com/guides/bm-ch1/`
  - `https://gameori.com/ads.txt`
  - `https://gameori.com/robots.txt`
  - `https://gameori.com/sitemap.xml`

## Launch Notes

- Current images are suitable for MVP preview, but public launch should keep tracking source/usage rights for every official game asset.
- AdSense script is already installed in the HTML head. Actual ad slots can be added after site approval.
- The site currently uses Chinese guide body content with multilingual UI. Full guide translation can be handled after launch.
