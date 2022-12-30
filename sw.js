const cacheName = "v1";
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache != cacheName) {
            console.log("ServiceWorker: cleaning old caches...");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  if (!(e.request.url.indexOf("http") === 0)) {
    return false;
  }
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
