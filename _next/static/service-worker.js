self.__precacheManifest = [
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/chunks/commons.dc78a8de141b59b2653b.js",
    "revision": "5c0fd2659cb0f3688872"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/jhEzRhHQWMwJVG6teiOlZ/pages/_app.js",
    "revision": "f59bff51b6a2b81e02b2"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/jhEzRhHQWMwJVG6teiOlZ/pages/_error.js",
    "revision": "a3fb19c431155b4e25c9"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/jhEzRhHQWMwJVG6teiOlZ/pages/doc.js",
    "revision": "3a874ee2fbe9ee83de98"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/jhEzRhHQWMwJVG6teiOlZ/pages/example.js",
    "revision": "e75eee2839aa6446b08c"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/jhEzRhHQWMwJVG6teiOlZ/pages/index.js",
    "revision": "9ceb5f3b1d1977c3478b"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/jhEzRhHQWMwJVG6teiOlZ/pages/types.js",
    "revision": "a3686895906cff2c0909"
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
