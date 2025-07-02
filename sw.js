// sw.js
const CACHE_NAME = 'app-cache-v2'; // ← v2など変更して強制更新
const urlsToCache = [
  '/',
  '/index.html',
  '/lib/app-icon.png',
  '/lib/splash.png',
  '/favicon.ico',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/...', // 必要なライブラリ
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
