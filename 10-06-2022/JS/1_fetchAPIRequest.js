let auth_token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhYmNkZWZnQG1haWxpbmF0b3IuY29tIiwiYXBpX3Rva2VuIjoiVWlYMnhYOUxLQkRTX0hBZjFoWWpFRWJBelhPNEU0NE4zTEV5YnlvSkV0ZldxQWJwai15aGVUM0VkSUVGcFgtbjdmUSJ9LCJleHAiOjE2NTQ5MjI1ODB9.1aI0tXmc2Wv8-GtWnHVVyI9WjLPyIjg7xS68O-lJKZI";
let newAuth_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyaXR3aWtzLmFzcGlyZWZveEBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJJWGM5TVh1ZzY2dUxwemN2dHdQaTVnU3ZrQ3pva21PQ0xRcFQ5VDVscXBGbklFcERLWV91REpyR1VUWU1MQmlrZncifSwiZXhwIjoxNjU0OTQ5NzI3fQ.6gMP1bNjclrcOh-GkUgPaHERvsf8PR--x_ImBRX06kY";
$(document).ready(function(){
    $('#myForm').validate({
        // for checkbox and radio buttons.
        errorPlacement: function(error, element) 
        {
          console.log(error);
          if (element.is(":radio")) 
          {
              error.appendTo(element.parents('.gender'));
          }
          else if(element.is(":checkbox")){
              error.appendTo(element.parents('.hobbies'));
          }
          else 
          { 
              error.insertAfter( element );
          }
          
         }
    });
    
    $.ajax({
        url: "https://www.universal-tutorial.com/api/getaccesstoken",
        type: 'GET',
        dataType: 'json',
        headers: {
            'Accept':'application/json',
            'api-token': 'IXc9MXug66uLpzcvtwPi5gSvkCzokmOCLQpT9T5lqpFnIEpDKY_uDJrGUTYMLBikfw',
            'user-email': 'ritwiks.aspirefox@gmail.com'
        },
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            console.log('success');
           getCountry();
        },
        error: function (error) {
            console.log("error: "+error.statusText);
        }
    });
    
    $('#country').change(function(){
        getState();
    })
    $('#state').change(function(){
        getCity();
    })

})

function getCountry(){
    $.ajax({
        type: 'GET',
        url:'https://www.universal-tutorial.com/api/countries',
        
        headers:{
            'Authorization': `Bearer ${auth_token}`},
            'Accept': 'application/json'
        ,
        success: function(data){
            data.forEach(element => {
                $('#country').append(`<option value=${element.country_name}>${element.country_name}</option>`);
            });
        },
        error: function(e){
            console.log(e);
        }
    });
}


function getState(){
    let country_name = $('#country').val();
    
    $.ajax({
        type: 'GET',
        url:'https://www.universal-tutorial.com/api/states/'+country_name,
        
        headers:{
            'Authorization': `Bearer ${auth_token}`},
            'Accept': 'application/json'
        ,
        success: function(data){
            $('#state').empty();
            data.forEach(element => {
                $('#state').append(`<option value=${element.state_name}>${element.state_name}</option>`);
            });
        },
        error: function(e){
            console.log(e);
        }
    });

}

function getCity(){
    let state_name = $('#state').val();
    $.ajax({
        type: 'GET',
        url:'https://www.universal-tutorial.com/api/cities/'+state_name,
        
        headers:{
            'Authorization': `Bearer ${auth_token}`},
            'Accept': 'application/json'
        ,
        success: function(data){
            // console.log(data);
            $('#city').empty();
            data.forEach(element => {
                $('#city').append(`<option value=${element.city_name}>${element.city_name}</option>`);
            });
        },
        error: function(e){
            console.log(e);
        }
    });

}
//random number generator 
$('#btn').click(function(){
    let guessNum = $('#inputNum').val();
    let genrateNum = (Math.random()*(10-1)+1).toFixed(0);
    // console.log(genrateNum);
    if(guessNum == genrateNum){
        let text = `Hurrah! You won🎉.`;
        if($('#para').html=="")
            $('#para').text(text);
        else{
            $('#para').html("");
            $('#para').text(text);
        }

    }else{
        $('#para').text(`You loose 😑  Number was ${genrateNum} Better luck Next time.`);
    }
});
