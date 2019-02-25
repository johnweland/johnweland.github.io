let cacheName = 'v3';

let cacheFile = [
    './css/application.css',
    './index.html',
    './about.html',
    './contact.html',
    './work.html',
    './js/application.js',
    './img/*.png',
]

self.addEventListener('install', (e) => {
    console.log(`[ServiceWorker] Installed`);

    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log(`[ServiceWorker] Caching cacheFiles`);
            return cache.addAll(cacheFile);
        }).catch((error) => {
            console.log(`[ServiceWorker]`, error);
        })
    );

})

self.addEventListener('activate', (e) => {
    console.log(`[ServiceWorker] Activated`);

    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames.map((thisCacheName) => {
                if (thisCacheName !== cacheName) {
                    console.log(`[ServiceWorker] Removing Cached Files from ${thisCacheName}`);
                    return caches.delete(thisCacheName);
                }
            }))            
        }).catch((error) => {
            console.log(`[ServiceWorker]`, error);
        })
    );
})

self.addEventListener('fetch', (e) => {
    console.log("[ServiceWorker] Fetching", e.request.url);

    e.respondWith(
        caches.match(e.request).then((response) => {
            if (response) {
                console.log(`[ServiceWorker] Found in cache ${e.request.url}`);
                return response;
            }

            let requestClone = e.request.clone();
            fetch(requestClone)
                .then((response) => {
                    if (!response) {
                        console.log(`[ServiceWorker] No Response from fetch`);
                        return response;
                    }
                    let responseClone = e.response.clone();
                    caches.open(cacheName).then((cache) => {
                        cache,put(e.request, responseClone);
                        return response;
                    });
                })
        }).catch((error) => {
            console.log(`[ServiceWorker] Error fething and caching new details`, error);
        })
    )
});