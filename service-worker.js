const CACHE_NAME = 'ichtysys-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/IchtySys.png',
  '/insopesca.png',
  '/minpesca.png'
  // Agrega aquí otros archivos estáticos como CSS, JS si tienes
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Limpieza de cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => cacheName !== 'ichtysys-cache-v2')
                  .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});