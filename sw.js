// this service worker is from the tutorial from https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/
// -> I'll try to rewrite it asap
const name_cache = "muss.mal.v1.1";
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

// on fetching use the cached documents instead of fetching them through network (a.k.a "cache first" strategy)
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(name_cache);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  let url = new URL(event.request.url);
  if (static.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});
