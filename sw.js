self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open('item-cache').then(function(cache){
        cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch',function(e){
    var req = e.request;
    e.respondWith(caches.match(req).then(function(response){
        if(response){
            return response;
        }else{
            return fetch(req)
        }
    }));
})
