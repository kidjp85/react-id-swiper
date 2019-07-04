self.__precacheManifest = [
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/A36QQ2IzZC5zj7wcO4AZ7/pages/_app.js",
    "revision": "cb66d9f1304146a92a45"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/A36QQ2IzZC5zj7wcO4AZ7/pages/_error.js",
    "revision": "9b2a184337b1aee2a2f4"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/A36QQ2IzZC5zj7wcO4AZ7/pages/doc.js",
    "revision": "322f9bb047be09749798"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/A36QQ2IzZC5zj7wcO4AZ7/pages/example.js",
    "revision": "395e8a6a4a20299e8d71"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/A36QQ2IzZC5zj7wcO4AZ7/pages/index.js",
    "revision": "ea0315bfbb39cb5c73fc"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/A36QQ2IzZC5zj7wcO4AZ7/pages/types.js",
    "revision": "0f5a031a90e38e7112a6"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/chunks/commons.dc78a8de141b59b2653b.js",
    "revision": "5c0fd2659cb0f3688872"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/runtime/main-e982b5c97b3c8ddbfa75.js",
    "revision": "318953be8fefa2376cb9"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
