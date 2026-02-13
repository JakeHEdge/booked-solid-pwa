const CACHE_NAME = "booked-solid-v1";

const CACHE_URLS = [
  "./",
  "./Manifest.json",

  // HTML
  "./HTML/index.html",
  "./HTML/Basket.html",
  "./HTML/BestSellers.html",
  "./HTML/Browse.html",
  "./HTML/Contact_Us.html",
  "./HTML/NewReleases.html",
  "./HTML/OutOfStock.html",
  "./HTML/PrivacyPolicy.html",
  "./HTML/StaffReccomendations.html",

  // CSS
  "./CSS/Styles.css",

  // Images folder
  "./Images/Book_Background.webp",
  "./Images/booked solid.webp",
  "./Images/Cameron.webp",
  "./Images/Jake.webp",
  "./Images/Kevin.webp",
  "./Images/Paul.webp",

  // BookCovers folder
  "./BookCovers/BNW.webp",
  "./BookCovers/call 911.webp",
  "./BookCovers/Desire.webp",
  "./BookCovers/Gatsby.webp",
  "./BookCovers/invs man.webp",
  "./BookCovers/Pride.webp",
  "./BookCovers/RYE.webp",
  "./BookCovers/social.webp",

  // Root images
  "./Best Sellers.webp",
  "./New Releases.webp",
  "./Out of stock.webp",
  "./Staff Reccomendations.webp",
  "./Icon1.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    await Promise.all(
      CACHE_URLS.map(async (url) => {
        try {
          await cache.add(url);
        } catch {
          console.warn("Failed to cache:", url);
        }
      })
    );

    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)));
    self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;

    try {
      return await fetch(event.request);
    } catch {
      return new Response("Offline", {
        status: 503,
        headers: { "Content-Type": "text/plain" }
      });
    }
  })());
});
