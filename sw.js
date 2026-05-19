// Service worker for The Crossroads and the Slow Door
// Cache-first strategy for offline-readable practice

const CACHE_NAME = 'crossroads-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/chapter-1.html',
  '/chapter-2.html',
  '/chapter-3.html',
  '/chapter-4.html',
  '/chapter-5.html',
  '/chapter-6.html',
  '/chapter-7.html',
  '/manifest.json',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS).catch(err => {
        console.error('precache failed', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Return cached, refresh in background
        fetch(event.request).then(fresh => {
          if (fresh.ok) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, fresh));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(event.request).then(response => {
        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        }
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
