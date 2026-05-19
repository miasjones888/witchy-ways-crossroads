# Deploy to Vercel — one-command handoff

The site is fully built and PWA-ready. Deployment requires you to authenticate the Vercel CLI once, then it's a single command.

## Status as of handoff

All seven chapters built, wide-survey reframe complete, PWA infrastructure in place:

- `index.html` + `chapter-1.html` through `chapter-7.html` — content
- `manifest.json` — PWA manifest with name, theme colors, icons
- `sw.js` — service worker for offline support and caching
- `icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.ico`, `favicon-16.png`, `favicon-32.png` — pixel-style cat-and-candle icon at all required sizes
- `vercel.json` — deployment config with cache headers and clean URLs
- All HTML files have PWA meta tags injected (manifest link, apple-touch-icon, theme-color, service worker registration)

## What I couldn't do autonomously

Deploy to Vercel. The CLI needs an auth token; Claude in Chrome was unreachable; the existing `cat-archive-001` project in your Vercel account is a different piece of work I shouldn't overwrite. Two minutes of your time fixes it.

## To deploy (sequence — under five minutes)

Open Terminal. Navigate to the project folder:

```
cd ~/Documents/Claude/Projects/Witchy-Ways
```

Install Vercel CLI globally if you don't have it:

```
npm install -g vercel
```

Log in (opens browser, you authorize via email or GitHub):

```
vercel login
```

Deploy as a new project:

```
vercel deploy --prod
```

The CLI will ask:
- "Set up and deploy?" → **yes**
- "Which scope?" → your account (`miasjones888-8073's projects`)
- "Link to existing project?" → **no** (creating new — don't overwrite cat-archive-001)
- "Project name?" → suggest **`crossroads`** or **`slow-door`** (your call)
- "Directory?" → press enter to accept current directory
- "Modify settings?" → **no**

After ~30 seconds you'll get a deployment URL like `crossroads.vercel.app` or similar.

## To install as widget on phone and desktop

### iOS (iPhone)
1. Open the deployment URL in Safari
2. Tap the share icon (square with up-arrow)
3. Scroll down, tap "Add to Home Screen"
4. The icon (black cat + candle) will appear on your home screen
5. Opens as standalone app — no Safari chrome

### Android
1. Open the deployment URL in Chrome
2. Tap the three-dot menu
3. Tap "Install app" or "Add to Home Screen"
4. Same result — icon on home screen, opens standalone

### macOS desktop
1. Open the deployment URL in Chrome or Edge
2. Look for install icon in the address bar (small ⊕ or screen-with-arrow icon, right side)
3. Click "Install"
4. App appears in your Applications folder and Dock — clickable like any native app

### Windows / Linux desktop
1. Same — Chrome or Edge, install button in address bar

## If the deployment doesn't work

Two fallback paths:

**Option A — Netlify drop:** Visit https://app.netlify.com/drop in any browser. Drag the entire `Witchy-Ways` folder onto the page. Done. Free hosting, automatic HTTPS, custom domain available.

**Option B — Cloudflare Pages:** Sign in at https://pages.cloudflare.com, "Create a project," "Direct upload," drag the folder. Same outcome.

Both work without a CLI; the PWA install path on phone/desktop is identical.

## Files inventory

```
Witchy-Ways/
├── index.html              # landing
├── chapter-1.html          # Before the Beginning
├── chapter-2.html          # The First Weeks
├── chapter-3.html          # First Workings (NEW — operative core)
├── chapter-4.html          # The First Year
├── chapter-5.html          # The First Three Years
├── chapter-6.html          # The Deeper Years
├── chapter-7.html          # The Long View
├── manifest.json           # PWA manifest
├── sw.js                   # service worker
├── icon.svg                # source icon (pixel cat + candle)
├── icon-192.png            # PWA icon
├── icon-512.png            # PWA icon
├── apple-touch-icon.png    # iOS home screen icon
├── favicon.ico             # browser tab favicon
├── favicon-16.png
├── favicon-32.png
├── vercel.json             # deployment config
├── DEPLOY.md               # this file
└── (research deliverables: aesthetic-spec-v2.md, chapter-outline.md, etc.)
```

## Optional cleanups before deploying

The deployment will include everything in the folder including the .md research deliverables. If you want to publish only the chapters, move the research .md files to a subfolder before deploying — Vercel won't serve them by default but they will exist on the deployment server. Not a security issue (everything's already public-equivalent given the project's nature) but noting it.

## Local preview (no deployment)

Open `index.html` directly in your browser — works as PWA locally. Service worker registers, but install-to-home-screen requires HTTPS (which deployment provides automatically). For local testing of install flow, run a quick local HTTPS server:

```
cd ~/Documents/Claude/Projects/Witchy-Ways
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Install-to-home-screen won't work without HTTPS, but you can verify everything renders.
