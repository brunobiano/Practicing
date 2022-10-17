$(document).ready(function(){
    let $add = $('button');

    $add.on('click', function(){
        data();
        let $teamName = $('#teamName').val();
        let $rate = $('#rate').val();
        $('table').append('<tr id="newTr">' + '<td>' + $teamName + '</td>' + '<td>' + $rate + '</td>' + '<td>' + '<button class="newBtn"> Delete </button>' + '</td>' )
        $('#teamName').val('');
        $('#rate').val('');
        $('#newTr').css('border-bottom', '1px solid');
        
        $('table').on('click', '.newBtn', function(){
            $(this).closest('tr').remove(); 
        }); // entender o on com 3 parametros e o this.closest
    });

    // Sorting not working...
    let $items = [];

    $('th').on('click', function(){
        data();
    })
    
    function data(){
        let $arrFill = $('#teamName').val();
        $items.push($arrFill);
        $items = $items.sort();
        console.log($items);
    };
})    
    


