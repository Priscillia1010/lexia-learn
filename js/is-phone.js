function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

if (isMobileDevice()) {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.warning').style.display = 'block';
}