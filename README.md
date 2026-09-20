# duvq — AI Visual Studio

A dark, editorial portfolio for **duvq**, built as a dependency-free static site for GitHub Pages.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Publish on GitHub Pages

1. Create a GitHub repository and upload `index.html`, `styles.css`, and `script.js`.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)` folder.
4. Save. GitHub will publish the site automatically.

## Included interactions

- Responsive mobile navigation.
- Scroll reveal animation with staggered entrances.
- Project category filtering.
- Click-to-open project detail modal.
- Pointer-following ambient glow on desktop.
- Reduced-motion support via `prefers-reduced-motion`.

The visual work is rendered with CSS artwork, so no build step or asset hosting is required.
