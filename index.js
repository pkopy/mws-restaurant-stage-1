

    self.addEventListener('fetch', (event) => {
        console.log(event.request)
        event.respondWith(
            new Response('Hello word')
        )
    })
       
    //     event.respondWith(
    //         fetch(event.request).then(function(response) {
    //             if (response.status === 404) {
    //               // TODO: instead, respond with the gif at
    //               // /imgs/dr-evil.gif
    //               // using a network request
    //               return new Response("Whoops, not found");
    //             }
    //             return response;
    //           }).catch(function() {
    //             return new Response("Uh oh, that totally failed!");
    //           })
            
    //     );
    // })
