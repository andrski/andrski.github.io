
const staticCacheName = 'static-cache-v1';
const dynamicCacheName = 'dynamic-cache-v1';

const staticAssets = [
    './',
    './index.html',
    './images/icons/icon-128x128.png',
    './images/icons/icon-192x192.png',
    './images/ninja_for_PWA.jpg',
    './img/lake-tecapo.jpg',
    './img/milky-blue-lagoon.jpg',
    './img/morakai.jpg',
    './img/paradise.jpg',
    './img/pink-milford-sound.jpg',
    './img/still-lake.jpg',
    './img/tecapo.jpg',
    './img/wanaka-tree.jpg',
    './offline.html',
    './css/main.css',
    './js/app.js',
    './js/main.js',
    './images/no-image.jpg'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(staticAssets);
    console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
    const cachesKeys = await caches.keys();
    const checkKeys = cachesKeys.map(async key => {
        if (![staticCacheName, dynamicCacheName].includes(key)) {
            await caches.delete(key);
        }
    });
    await Promise.all(checkKeys);
    console.log('Service worker has been activated');
});

self.addEventListener('fetch', event => {
    console.log(`Trying to fetch ${event.request.url}`);
    event.respondWith(checkCache(event.request));
});

async function checkCache(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || checkOnline(req);
}

async function checkOnline(req) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const res = await fetch(req);
        await cache.put(req, res.clone());
        return res;
    } catch (error) {
        const cachedRes = await cache.match(req);
        if (cachedRes) {
            return cachedRes;
        } else if (req.url.indexOf('.html') !== -1) {
            return caches.match('./offline.html');
        } else {
            return caches.match('./images/no-image.jpg');
        }
    }
}