$(document).ready(()=>{
    $('#para2').hide()
    $('#para3').hide()
    $('#para4').hide()
    $('#para5').hide()
})

$('#para1').click(()=>{
    $('#para2').show();
})
$('#para2').click(()=>{
    $('#para3').show();
})
$('#para3').click(()=>{
    $('#para4').show();
})
$('#para4').click(()=>{
    $('#para5').show();
})


//remove element
$(document).ready(function(){
    $('p').remove('#para10')
})

$('#bt1').click(function(){
    console.log('clicked');
    let text1 = $('#p1').text();
    text1 += $('#p2').text();
    
    console.log(text1);
    $('#p1').text(text1);

    $('#p2').hide();
})
