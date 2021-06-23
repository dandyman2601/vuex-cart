console.log("sw.js")

var cacheName = "v1000.0.0";
var filesToCache = ["/", "/index.html", "/abc"];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => {
            return name !== cacheName;
          })
          .map(name => {
            return caches.delete(name);
          })
      );
    })
  );
});

self.addEventListener("fetch", function(e) {
    if (e.request.method == 'GET')  {
        let urlObject = new URL(e.request.url);
        let urlHostName = urlObject.hostname;
            caches.open(cacheName).then(function(cache) {
            return cache.match(e.request).then(function(response) {
                var fetchPromise = fetch(e.request).then(function(networkResponse) {
                    if (networkResponse.status == 200) {
                        try {
                            cache.put(e.request, networkResponse.clone());
                        } catch (e) {
                            console.log("error put")
                        }
                    }
                    return networkResponse;

                })
                return response || fetchPromise;
            });
            })
  }
});