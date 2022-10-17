$(document).ready(function(){
    $searchTerm = $('#search');
    $searchBtn = $('.btn-secondary');
    $gif = $('#gif-area');

    $searchBtn.on('click', function(e){
        e.preventDefault();
        let searchTerm = $searchTerm.val();

        $.get('http://api.giphy.com/v1/gifs/search', 
            {
                q: searchTerm,
                api_key: '62SJ1WhqTQ7IEi2AEppMN7iY8asMZ64e',
            }
        ).then(function(response){
            let $dataLength = response.data.length; 
            let $randomImg = Math.floor(Math.random() * $dataLength);
            let $imgSpacing = $('<div>', { // class came from bootstrap.
                class: 'col-md-4 col-12 mb-4'
            });
            let $newGif = $('<img>', {
                src: response.data[$randomImg].images.original.url, // all this line come from GIPHY API rules, Schema def, GIF object.
                class: 'w-100' // Bootstrap
            });
            $imgSpacing.append($newGif)
            $gif.append($imgSpacing);
        })
        
    });

    $('#remove').on('click', function(e){
        e.preventDefault();
        $gif.empty();
        $searchTerm.val('');
    })
})



