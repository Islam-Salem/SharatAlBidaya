// Service worker — makes the site installable as an app on phones.
// Strategy: always try the network first (so your updates show up immediately),
// fall back to the saved copy only when offline.
const CACHE = "sharah-v6";
const SHELL = ["./", "index.html", "songs.js", "about.html", "privacy.html", "page.css",
               "icon-192.png", "icon-512.png", "favicon.ico"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(f => c.add(f).catch(() => {}))))   // a missing file never blocks install
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;   // YouTube, fonts: untouched
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      })
      .catch(() => caches.match(e.request).then(m => m || caches.match("index.html")))
  );
});
