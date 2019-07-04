self.__precacheManifest = [
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/chunks/commons.dc78a8de141b59b2653b.js",
    "revision": "5c0fd2659cb0f3688872"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/kQe927n7xNTQI4P7eHYjj/pages/_app.js",
    "revision": "482e2e67e4921e6a4bff"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/kQe927n7xNTQI4P7eHYjj/pages/_error.js",
    "revision": "bcdb694d42224d4dcbd3"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/kQe927n7xNTQI4P7eHYjj/pages/doc.js",
    "revision": "5348ddc1dcb2b26efb25"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/kQe927n7xNTQI4P7eHYjj/pages/example.js",
    "revision": "4db664ebd369da0efe1f"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/kQe927n7xNTQI4P7eHYjj/pages/index.js",
    "revision": "70ffbf95febb5f766d3e"
  },
  {
    "url": "//kidjp85.github.io/react-id-swiper//_next/static/kQe927n7xNTQI4P7eHYjj/pages/types.js",
    "revision": "44dac665267aafd3920a"
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
