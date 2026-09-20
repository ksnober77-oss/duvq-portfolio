# duvq — AI Visual Studio

A dark, editorial portfolio for **duvq**, built as a dependency-free static site for GitHub Pages.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish on GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `master` branch and `/ (root)` folder.
4. Click **Save** and wait for GitHub to provide the Pages URL.

The project is already compatible with Pages: it uses a root-level `index.html`, relative asset paths, no server-side code, and includes `.nojekyll`.

## Included interactions

- Responsive mobile navigation.
- Scroll reveal animation with staggered entrances.
- Project category filtering.
- Click-to-open project detail modal.
- Pointer-following ambient glow and tactile project tilt on desktop.
- Reduced-motion support via `prefers-reduced-motion`.

The visual work is rendered with CSS artwork, so no build step or asset hosting is required.
