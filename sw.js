let cacheName = 'v1';

let cacheFile = [
    './css/application.css',
    './index.html',
    './about.html',
    './contact.html',
    './work.html',
    './js/application.js',
    './img/icon-128.png',
    './img/icon-192.png',
    './img/icon-256.png',
    './img/icon-512.png',
    './img/background.webp',
    './img/portrait.webp',
    './img/portrait2.webp'
]

self.addEventListener('install', (event) => {
    console.log(`[ServiceWorker] Installed`);

    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log(`[ServiceWorker] Caching cacheFiles`);
            return cache.addAll(cacheFile);
        }).catch((error) => {
            console.log(`[ServiceWorker]`, error);
        })
    );

})

self.addEventListener('activate', (event) => {
    console.log(`[ServiceWorker] Activated`);

    event.waitUntil(
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

self.addEventListener('fetch', (event) => {
    console.log("[ServiceWorker] Fetching", event.request.url);

    event.respondWith(
        caches.match(e.request).then((response) => {
            if (response) {
                console.log(`[ServiceWorker] Found in cache ${event.request.url}`);
                return response;
            }

            let requestClone = e.request.clone();
            fetch(requestClone)
                .then((response) => {
                    if (!response) {
                        console.log(`[ServiceWorker] No Response from fetch`);
                        return response;
                    }
                    let responseClone = event.response.clone();
                    caches.open(cacheName).then((cache) => {
                        cache.put(event.request, responseClone);
                        return response;
                    });
                })
        }).catch((error) => {
            console.log(`[ServiceWorker] ${error}`);
        })
    )
});