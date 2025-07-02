const CACHE_NAME = 'vscode-editor-cache-v1';
const urlsToCache = [
  './',
  '.lib/index.html',
  '.lib/manifest.json',
  '.lib/favicon-1.png',
  '.lib/favicon-2.png',
  '.lib/favicon-5.png',
  '.lib/favicon-7.png',
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
