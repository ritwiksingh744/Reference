// const fetchBtn = $('#fetchbtn');

// fetchBtn.click(callapi);

$(document).ready(function(){
    if(localStorage.length > 0){
        if($('#divTable').html()==""){
            createTable();
        }else{
            $('#divTable').html("");
            createTable();
        }
    }else{
        callapi()
    }
    

    //call data table funtion
    // $('#table').DataTable();
})

//api:https://gorest.co.in/public/v2/users
//api:https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

//call api and store to local storage
function callapi(){
    $.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', function(responseTxt, statusTxt, xhr){
        if(statusTxt == 'success'){
            let tempData = responseTxt;
            localStorage.setItem('record', JSON.stringify(tempData));
            if($('#divTable').html()==""){
                createTable();
            }else{
                $('#divTable').html("");
                createTable();
            }
            
        }else{
            if(statusTxt == 'error'){
                alert('Error: ' + xhr.status +': '+ xhr.statusTxt);
            }
        }
    })
}

//create table
function createTable(){
    console.log('in create table');
    const currDiv = $('#divTable');
    let tempData = JSON.parse(localStorage.getItem('record'));
    let headerArr = Object.keys(tempData[0]);

    const table = $('<table></table>');
    table.attr('class', 'table table-striped table-ligth table-hover mt-3 mb-3 shadow p-2');
    table.attr('id','table');

    //thead
    const thead = $('<thead></thead>');
    const theadrow = $('<tr></tr>');
    for(let i=0;i<headerArr.length;i++){
        let th = $('<th></th>');
        th.attr('scope','col');
        th.text(setTitle(`${headerArr[i]}`));
        theadrow.append(th);
    }
    thead.append(theadrow);
    table.append(thead);
    //tbody
    const tbody = $('<tbody></tbody>');
    tbody.attr('id', 'tbody');
    for(let i=0;i<tempData.length;i++){
        let tr = $('<tr></tr>');
        tr.attr("id",`${tempData[i].id}`)
        for(let j=0;j<headerArr.length;j++){
            if([headerArr[j]] == 'imageUrl'){
                let td = $('<td></td>');
                let atag = $('<a></a>');
                atag.attr('href',`${tempData[i][headerArr[j]]}`);
                atag.attr('target','_blank')
                atag.text(`${tempData[i][headerArr[j]]}`)
                td.append(atag);
                tr.append(td);
            }else{
                let td = $('<td></td>');
                td.text(`${tempData[i][headerArr[j]]}`);
                tr.append(td);
                }
            
        }
        const delbtn = $('<button></button>');
        delbtn.attr({
            class:"delButton",
            onclick:"delRowFun(this)"

        })
        delbtn.text("Delete");
        const editbtn = $('<button></button>');
        editbtn.attr({
            class:"editButton"
        })
        editbtn.text('Edit');
        tr.append(delbtn);
        tr.append(editbtn);
        tbody.append(tr);
    }
    table.append(tbody);
    console.log(table);
    currDiv.append(table);

    //call data table funtion
    $('#table').DataTable({
        "order": [[0,'desc']],
        "columnDefs":[{
            "targets":[1], //column index
            "orderable": false
        }]
    });
  
    
    
}

//delete section
function delRowFun(e){
    console.log('button clicked');
    console.log($(e).parent().attr('id'));
}



$(function(){
    $('#tbody').sortable();
})


// Add data Section
$('#addBtn').click(()=>{
    let tempData =JSON.parse(localStorage.getItem('record'));
    let headerArr = Object.keys(tempData[0]);
    const form = $('<form></form>');
    form.attr('class', 'row g-3');
    form.attr('id','inputForm');
    for(let i=0;i<headerArr.length;i++){
        if(headerArr[i]=='id' || headerArr[i]=='age'){
            continue;
        }else{
            const div = $('<div></div>');
            div.attr('class','col-md-4');
            const label = $('<label></label>');
            label.attr('class','form-label');
            label.text(`${headerArr[i]}`);
            const input = $('<input></input>');
            input.attr({id:`ip${i}`,
                        class:'form-control',
                        name:`${headerArr[i]}`
                    });
            div.append(label);
            div.append(input);
            form.append(div);
            if(headerArr[i]=='dob'){
                input.attr('type','date')
            } 
        }
        
    }
    const divB = $('<div></div>');
    divB.attr('class','row-md-4');
    const saveBtn = $('<input></input>')
    saveBtn.attr({
        type:'button',
        id:'saveBtn',
        class:'btn btn-primary',
        value:'Save'
    })
    divB.append(saveBtn);
    form.append(divB);
    if($('#inputDataDiv').html()==""){
        $('#inputDataDiv').append(form);
    }else{
        $('#inputDataDiv').html("");
        $('#inputDataDiv').append(form);
    }
    

    //add input data to local storage
    $('#saveBtn').click(function(){
        // e.preventDefault();
        let data =JSON.parse(localStorage.getItem('record'));
        let headArr = Object.keys(data[0]);
        let newObj = {};
        newObj['id']=1+parseInt(maxID());
        for(let i=1;i<headArr.length;i++){
            console.log($(`#ip${i}`).val());
            if(i==6){
                if($(`#ip${i+1}`).val() !=""){
                    newObj['age'] = calAge($(`#ip${i+1}`).val());
                }else{
                    return;
                }   
            }else if(headArr[i]=='dob'){
                if($(`#ip${i}`).val() !=""){
                    newObj['dob'] = setDatFormate($(`#ip${i}`).val());
                }else{
                    return;
                }  
            }else{
                if($(`#id${i}`).val()==""){
                    return;
                }else{
                    newObj[headArr[i]] = $(`#ip${i}`).val();
                }   
            }


           
        }
        
        //add new object to local storage
        data.unshift(newObj);
        localStorage.setItem('record', JSON.stringify(data));
        //updating table
        if($('#divTable').html()==""){
            createTable();
        }else{
            $('#divTable').html("");
            createTable();
        }
    })

     // validation form
     $("#inputForm").validate({
        rules:{
            imageUrl:{
                required:true,
                url:true
            },
            firstName:{
                required:true,
                minlength:2
            },
            lastName:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
                email:true
            },
            contactNumber:{
                required:true,
                number:true,
                minlength:10,
                phoneUs:true
            },
            dob:{
                required:true
            },
            salary:{
                required:true,
                number:true
            },
            address:{
                required:true
            }
        },
        messages:{
            imageUrl:{
                required:`please enter image url.`,
                url:`please enter valid url.`
            },
            firstName:{
                required:"please enter your first name.",
                minlength:"length must be of 2"
            },
            lastName:{
                required:"please enter your last name.",
                minlength:"length must be of 2."
            },
            email:{
                required:"please enter your email",
                email:"email is not valid."
            },
            contactNumber:{
                required:"please enter 10 digit phone number",
                minlength:"length must be of 10",
                phoneUs:"Please enter a valid phone number: (e.g. 19999999999 or 9999999999)."
            },
            dob:{
                required:"please enter your Date of Birth."
            },
            salary:{
                required:'please enter your salary',
                number:"salary must be in number."
            },
            address:{
                required:"please enter your address."
            }
        }
    });
    
})

//find maxId form local Storage
function maxID(){
    let currData = JSON.parse(localStorage.getItem('record'));
    let maxid = 0;
    for(let i=0;i<currData.length;i++){
        if(maxid < currData[i].id){
            maxid = currData[i].id;
        }
    }

    return maxid;
}

// Calculate age
function calAge(str){
    
    let year =new Date(str).getFullYear();

    // let count = 0;
    // for(let i=str.length-4;i<str.length;i++){
    //     year += str[i];
    // }
    let today =new Date().getFullYear();
    return today - year;
}

//_______set date formate_____//
function setDatFormate(str){
    let date = new Date(str);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day =date.getDate();

    if(day.toString().length == 1){
        day = `0${day}`;
    }
    if(month.toString().length == 1){
        month = `0${month}`;
    }
    
    console.log(`${day}/${month}/${year}`);
    return `${day}/${month}/${year}`;
}

//Set title of header: converts camel-case string to Title string 
function setTitle(str){
    let newStr = "";
    for(let i=0;i<str.length;i++){
        if(i==0){
            newStr += str[i].toUpperCase();
        }else{
            if(str[i] == str[i].toUpperCase()){
                newStr += " "+str[i];
            }else{
                newStr += str[i];
            }
        }
    }
    return newStr;
}