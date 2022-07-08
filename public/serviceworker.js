'use strict';

const cacheName = "v0:0:1";

self.addEventListener("install", event => {
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    )
});

self.addEventListener("fetch", event => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
        .then(response => {
            const clone = response.clone();
            caches
            .open(cacheName)
            .then(cache => {
                cache.put(event.request, clone);
            })
            .catch(error => console.error(`ServiceWorker: Error: ${error}`));
            return response;
        })
        .catch(() => {
            caches.match(event.request)
            .then(response => response);
        })
    )
});