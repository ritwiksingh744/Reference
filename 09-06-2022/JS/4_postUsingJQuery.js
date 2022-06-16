let obj = {id:3,
    email:"emma.wong@reqres.in",
    first_name:"Emma",
    last_name:"Wong",
    avatar:"https://reqres.in/img/faces/3-image.jpg"
}

let key = "17f8066f12a4934503742235bdece94b8c0d40e1cf33e11c18dd9eb515fb5a81";
$.ajaxSetup({
    headers:{
       'Authorization': key
    }
 });

$('#btn').click(function(){
    console.log('button clicked');
    $.post("https://reqres.in/api/users", obj, function(data , status, xhr){
        console.log('in posting api');
        if(status == 'succes'){
            console.log('successfully loaded');
        }else{

        }
        alert("Data: " + data + "\nStatus: " + status);
    })
})