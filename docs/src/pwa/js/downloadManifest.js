// Mobile device check (can be overridden by spoofing the user agent)
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'src/pwa/json/manifest.json';
    document.head.appendChild(link);
}
