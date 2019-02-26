const cacheName = 'v1';

const cacheAssets = [
    'css/application.css',
    'index.html',
    'about.html',
    'contact.html',
    'work.html',
    'js/application.js',
    'img/icon-128.png',
    'img/icon-192.png',
    'img/icon-256.png',
    'img/icon-512.png',
    'img/background.webp',
    'img/portrait.webp',
    'img/portrait2.webp'
];

self.addEventListener('install', (event) => {
    console.log(`[ServiceWorker] Installed`);

    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log(`[ServiceWorker] Caching Files`);
                cache.addAll(cacheAssets);
            })
            .then( () => self.skipWaiting())
            .catch((error) => {
                console.log(`[ServiceWorker] ${error}`);
            })
    );

})

self.addEventListener('activate', (event) => {
    console.log(`[ServiceWorker] Activated`);

    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== cacheName) {
                            console.log(`[ServiceWorker] Removing Cached Files from cache`);
                            return caches.delete(cache);
                        }
                }))            
            }).catch(error => {
                console.log(`[ServiceWorker] ${error}`);
            })
    );
})

self.addEventListener('fetch', event => {
    console.log(`[ServiceWorker] Fetching ${event.request.url}`);

    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    )
});