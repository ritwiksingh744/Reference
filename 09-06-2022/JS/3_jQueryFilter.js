// $(document).ready(function(){
    
// });

$(document).ready(function(){
    $('#input').on('keyup', function(){
        let value= $(this).val().toLowerCase();
        $('#mytable tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});