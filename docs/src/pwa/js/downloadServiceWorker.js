function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice() && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('src/pwa/js/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
})
.catch(error => {
    console.error('Service Worker registration failed:', error);
});
});
}
