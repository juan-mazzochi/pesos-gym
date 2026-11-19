// Offline support: the app shell is cached on install; everything else
// (illustrations, fonts) is cached the first time it loads.
// The page itself is fetched network-first, so a phone with signal always
// opens the latest version and falls back to the cached one offline.
// Bump VERSION to drop old caches.
const VERSION = "pesos-v4";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Stale-while-revalidate: answer from cache right away, refresh the cache in the background
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const ok = url.origin === location.origin || url.host === "fonts.googleapis.com" || url.host === "fonts.gstatic.com";
  if (!ok) return;
  if (e.request.mode === "navigate") {
    e.respondWith(caches.open(VERSION).then(async cache => {
      try {
        const res = await Promise.race([
          fetch(e.request),
          new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 4000))
        ]);
        if (res.ok) cache.put("index.html", res.clone());
        return res;
      } catch {
        return (await cache.match("index.html")) || Response.error();
      }
    }));
    return;
  }
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(res => {
      if (res.ok || res.type === "opaque") cache.put(e.request, res.clone());
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
