const CACHE_NAME = 'vscode-editor-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './favicon-1.png',
  './favicon-2.png',
  './favicon-5.png',
  './favicon-7.png',
  // 必要なら外部ライブラリやCSSファイルなども記載
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
