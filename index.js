  
    self.addEventListener('install', (event) => {
        self.skipWaiting();
        event.waitUntil(
            caches.open('mws-restaurant-v1').then((cache) => {
                return cache.addAll(
                    [
                    '/',
                    'js/main.js',
                    'js/dbhelper.js',
                    'js/restaurant_info.js',
                    'css/styles.css',
                    'css/responsive.css',
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
                    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js ',
                    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
                    'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png ',
                    'data/restaurants.json',
                    ]
                    
                );
            })

        );
    })

    

    self.addEventListener('activate', event => {
        event.waitUntil(
            caches.delete('mws-restaurant-v2')
        );
      });

    self.addEventListener('fetch', (event) => {
            

        event.respondWith(
            caches.match(event.request).then((response) => {
    
                if(response){
                    return  response;
                }else {
                    
                    caches.open('mws-restaurant-v1').then((cache) => {
                        return cache.addAll([event.request.url])
                    })
                    return fetch(event.request)
                }
    
            })
        )   
    })


    