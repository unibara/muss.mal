const name_cache = "muss.mal.v1";
const static = [
  "/",
  "/app.html",
  "/chota.min.css",
  "/style.css",
  "/assets/map-pin-line.svg",
  "/manifest.json",
  "/assets/information-line.svg"
];

// cache all given static resource on installing the pwa
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(name_cache);
      cache.addAll(static);
    })(),
  );
});

// delete the old caches on activating the service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== name_cache) {
            return caches.delete(name);
          }
        }),
      );
      await clients.claim();
    })(),
  );
});

// on fetching use the cached documents instead of fetching them through network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(name_cache);
      const cachedResponse = await cache.match(event.request.url);

      // if the requested resource has already been cached, use the cached one
      if (cachedResponse) {
        return cachedResponse;
      }
      // if not, return status 404
      return new Response(null, { status: 404 });
    })(),
  );
});
