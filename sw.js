self.addEventListener('install', function (event) {
  console.log('installing service worker');
});

self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url).pathname;

  if (url.pathname !== '/') {
    return;
  }

  event.respondWith(
    (async function () {
      try {
        var res = await fetch(event.request);
        var cache = await caches.open('cache');
        cache.put(event.request.url, res.clone());
        return res;
      } catch (error) {
        return caches.match(event.request);
      }
    })(),
  );
});
