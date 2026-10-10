# شارة البداية — Spacetoon Songless

Daily "name the intro from the first second" game for Spacetoon cartoon intros.
Clips unlock at 1 → 2 → 4 → 6 → 8 seconds (5 tries). Wrong guess or skip = longer clip.

## Files
```
index.html            the game
songs.js              the song list (Claude updates it from the Google Sheet)
about.html            عن اللعبة — how to play, copyright note, contact
privacy.html          سياسة الخصوصية
404.html              "page not found" page (GitHub Pages uses it automatically)
page.css              style for about / privacy
sw.js                 makes the site installable as an app on phones
site.webmanifest      app name, colors and icons for "install"
favicon.ico, favicon-32.png, apple-touch-icon.png,
icon-192.png, icon-512.png, icon-maskable-512.png   icons
og-image.png          picture shown when the link is shared (WhatsApp, Facebook…)
robots.txt, sitemap.xml   help Google find the pages
```

## Moving to your own domain later
These files contain the full address `https://islam-salem.github.io/awelnaghma/` —
replace it with the new address in all of them:
- `index.html` (canonical + og:url + og:image + twitter:image)
- `robots.txt`
- `sitemap.xml`

## Settings (top of the script in index.html)
- `START_DATE` — the date of puzzle #1 (Cairo time).
- `CLIPS` — clip lengths per attempt.
- `--bg` (top of the CSS) — page background color.

## Testing songs
Add `?test=0` to the address. Use السابقة / التالية to go through every song.
Nothing is saved in test mode.

## Hosting
Works on GitHub Pages as-is. Open it through a server (GitHub Pages, VS Code Live Server),
not by double-clicking index.html.
