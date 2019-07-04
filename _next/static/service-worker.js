self.__precacheManifest = [
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/ISiot6dpk7w8Xy8YigxP3/pages/_app.js",
    "revision": "c138d1297fad76b17cde"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/ISiot6dpk7w8Xy8YigxP3/pages/_error.js",
    "revision": "211f96b6b418f12d7df4"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/ISiot6dpk7w8Xy8YigxP3/pages/doc.js",
    "revision": "601f15a3ed5ff51fe6f5"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/ISiot6dpk7w8Xy8YigxP3/pages/example.js",
    "revision": "1d059f7d437e58eaf624"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/ISiot6dpk7w8Xy8YigxP3/pages/index.js",
    "revision": "19b79218f8ad9034f12a"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/ISiot6dpk7w8Xy8YigxP3/pages/types.js",
    "revision": "a5c89cd2fa2f862252b9"
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
