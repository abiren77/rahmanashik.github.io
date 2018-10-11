var assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/plan.html',
    '/calc.html',
    '/recipe.html',
    '/weight_loss.html',
    '/images/background.jpg',
    '/images/HappyLee.jpg',
    '/images/bgimage.jpg',
    '/images/metloaf.jpg',
    '/images/bag.jpg',
    '/images/dinner.jpeg',
    '/images/deal.png',
    '/images/dietplan.png',
    '/images/goal.png',
    '/images/salmon.jpg',
    '/images/sandwich.jpg',
    '/images/toast.jpg',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
];

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
