# Shri Swami Samarth Math Karjat — GitHub Pages

## Publish
1. Extract this ZIP.
2. Upload its contents into your GitHub repository root. `index.html`, `CSS`, `Scripts`, and `Images` must be directly at the root, not inside an extra folder.
3. In repository Settings → Pages, choose Deploy from a branch.
4. Select your uploaded branch (normally `main`) and `/ (root)`, then Save.
5. Open the website URL shown by GitHub Pages after deployment finishes.

Keep directory and filename capitalization unchanged. Relative links support both repository Pages sites and user Pages sites. No build command, Node.js, or ASP.NET server is required.

## Local preview
Run `python -m http.server 8080` in the extracted folder, then open http://localhost:8080.

## Changes
- Packaged `index.html` directly at the ZIP root for repository-root deployment.
- Added `.nojekyll` and a static 404 page.
- Removed CSS references to background files absent from the original ZIP; retained existing colors and layout.
- Replaced players for absent videos with an unavailable message. To restore the videos, supply `Files/Dattaguru.mp4` and `Files/Akkalkot Darshan.mp4`, then restore their video elements.
- Removed the legacy sitemap referencing the old domain and `.aspx` pages. Generate a new sitemap once your final public URL is known.

## Forms
Feedback and Share Experience forms currently validate locally but do not send or store submissions. A receiving service or backend is required. GitHub Pages serves static files only. No receiving service has been configured in this update.
