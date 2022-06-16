$('#btn').click(function(){
    $('#div').load("file/test.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == 'success'){
            alert('External content loaded succesfully.')
            console.log(responseTxt);
            console.log(xhr);
        }
        if(statusTxt == 'error'){
            alert('Error: '+ xhr.status +": "+ xhr.statusTxt);
        }
    });
});


$('#apibtn').click(function(){
    console.log('btn clicked');
    $.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', function(responseTxt,  statusTxt, xhr){
        console.log(statusTxt);
        // debugger
        if(statusTxt == 'success'){
            // debugger
            alert('External content loaded succesfully.');
            console.log(responseTxt);
            debugger
            let tempData = responseTxt;
            console.log(tempData[0].id);
            debugger
        }else{
            if(statusTxt == 'error'){
                alert('Error: '+ xhr.status +": "+ xhr.statusTxt);
            }
        }
    })
})

$('#btn1').click(function(){
    console.log($('#name').val());
})