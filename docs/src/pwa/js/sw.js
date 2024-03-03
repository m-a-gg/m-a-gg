const CACHE_NAME = 'PWA-CACHE';

// List of URLs to cache
const urlsToCache = [
    '/',
    // PAGES
    'index.html',
    'pwa/landing.html',
    'contact.html',
    'services.html',
    'pricing.html',
    'services/getting-online.html',
    'services/back-to-basics.html',
    'services/internet-issues.html',
    'services/slow-tech.html',
    'services/tv-problems.html',
    'services/technical-support.html',
    'services/advice.html',
    // JSON MANIFEST
    'src/pwa/json/manifest.json',
    // JS
    'src/js/main.js',
    'src/pwa/js/isMobileDevice.js',
    'src/pwa/js/downloadManifest.js',
    'src/pwa/js/downloadServiceWorker.js',
    // CSS
    '/src/css/stylesheet.css',
    // IMG + ICO
    'res/img/ac501d2d148b73ebc6ed1f75430253f5.jpg',
    'res/icons/about-us.svg',
    'res/icons/back-to-basics.svg',
    'res/icons/chat.svg',
    'res/icons/contact.svg',
    'res/icons/email.svg',
    'res/icons/favicon.svg',
    'res/icons/faviconv2.svg',
    'res/icons/getting-online.svg',
    'res/icons/location.svg',
    'res/icons/multiple-devices.svg',
    'res/icons/person.svg',
    'res/icons/phone.svg',
    'res/icons/sms.svg',
    // START FONTS
    '/res/fonts/fonts.css',
    '/res/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xIIzI.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2',
    '/res/fonts/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fBBc4.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2',
    '/res/fonts/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu4mxK.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu4WxKOzY.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu5mxKOzY.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu72xKOzY.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu7GxKOzY.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu7mxKOzY.woff2',
    '/res/fonts/KFOmCnqEu92Fr1Mu7WxKOzY.woff2',
    '/res/fonts/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_QOW4Ep0.woff2',
    '/res/fonts/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_R-W4Ep0.woff2' , 
    '/res/fonts/ L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_S-W4Ep0.woff2',
    '/res/fonts/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_SeW4Ep0.woff2',
    '/res/fonts/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_SuW4Ep0.woff2',
    // END FONTS
];

self.addEventListener('install', event => {
    // Perform installation steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
return cache.addAll(urlsToCache);
})
    );
});

self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

// Serve success-stories.html page from network
if (requestUrl.pathname === '/success-stories.html') {
    event.respondWith(
        fetch(event.request)
    );
    return;
}

// Serve other requests from cache first, falling back to network
event.respondWith(
    caches.match(event.request)
        .then(response => {
            // Cache hit - return response
            if (response) {
                return response;
}

// Clone the request to avoid consuming it
                const fetchRequest = event.request.clone();

return fetch(fetchRequest)
    .then(response => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
}

// Clone the response to put it in the cache
                        const responseToCache = response.clone();

caches.open(CACHE_NAME)
    .then(cache => {
        cache.put(event.request, responseToCache);
});

return response;
});
})
    );
});

self.addEventListener('activate', event => {
    // Clean up old caches
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
}
})
            );
})
    );
});
