let cacheName = 'v1';

let cacheFile = [
    './css/application.css',
    './index.html',
    './about.html',
    './contact.html',
    './work.html',
    './js/application.js'
]

self.addEventListener('install', function(e) {
    console.log(`[ServiceWorker] Installed`);

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log(`[ServiceWorker] Caching cacheFiles`);
            return cache.addAll(cacheFile);
        })
    );

})

self.addEventListener('activate', function(e) {
    console.log(`[ServiceWorker] Activated`);

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {
                if (thisCacheName !== cacheName) {
                    console.log(`[ServiceWorker] Removing Cached Files from ${thisCacheName}`);
                    return caches.delete(thisCacheName);
                }
            }))            
        })
    );
})

self.addEventListener('fetch', function(e) {
    console.log("[ServiceWorker] Fetching", e.request.url);

    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) {
                console.log(`[ServiceWorker] Found in cache ${e.request.url}`);
                return response;
            }

            let requestClone = e.request.clone();
            fetch(requestClone)
                .then(function(response) {
                    if (!response) {
                        console.log(`[ServiceWorker] No Response from fetch`);
                        return response;
                    }
                    let responseClone = e.response.clone();
                    caches.open(cacheName).then(function(cache) {
                        cache,put(e.request, responseClone);
                        return response;
                    });
                }.catch(function(error) {
                    console.log(`[ServiceWorker] Error fethign and caching new details`);
                }));
        })
    )
})