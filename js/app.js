if('serviceWorker' in navigator){
    try {
        navigator.serviceWorker.register('sw.js');
        console.log('service worker registered')
    } catch (error) {
        console.log(error);
    }
}
