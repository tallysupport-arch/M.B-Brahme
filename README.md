# M.B.Bhramhe - Static HTML Version

This folder is a browser-hostable HTML conversion of the supplied ASP.NET WebForms website.

## Run locally
- Open `index.html` directly, or
- Recommended: run `python -m http.server 8080` in this folder and open `http://localhost:8080`.

## Hosting
Upload the complete folder to any static host such as Netlify, GitHub Pages, Cloudflare Pages, cPanel public_html, or an Apache/Nginx server.

## Important
The original Feedback and Share Experience pages depended on ASP.NET server code. In this static conversion, the forms render and validate in the browser, but a real receiving endpoint (email/API/database) must be connected for submissions to be delivered/stored. The Photo Gallery has been converted to a JavaScript gallery using the supplied image assets.
