API Studio — Version 6 (light-only)

Files:
- index.html
- style.css
- script.js
- logo.png (place in same folder)
- document.html (link target for download button)

What changed in v6:
- Removed theme toggle; this version is light-only (guarantees 100% visibility).
- Simplified CSS and JavaScript to avoid any theme-related flashes or partial-screen issues on mobile.
- Mobile-first, responsive grid: 1 → 2 → 4 columns.
- Strong, clear numbered tiles with distinct OPEN action to remove user confusion.
- Touch and keyboard friendly: ripple feedback, pressed opacity (50%), Enter/Space activation.
- Meta theme-color set to #ffffff for mobile browser chrome consistency.
- Minimal JavaScript; no storage or theme persistence.

How to use:
1. Put these files in a folder with logo.png.
2. Open index.html in a modern browser.
3. Replace tile hrefs with real pages (news.html, nasa.html, books.html, ai.html, bank.html, arxiv.html, museum.html, one.html).
4. Replace document.html with your API docs.

If you want, I can now:
- Generate the 8 subpages in the same style (ready-to-wire).
- Export a ZIP package with placeholder logo/images.
