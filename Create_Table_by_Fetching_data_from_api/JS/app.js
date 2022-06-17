const createBtn = document.getElementById('btn');
const clearBtn = document.getElementById('clr');
const divTable = document.getElementById('divTbale')

//clear
clearBtn.addEventListener('click', clearFunction);
function clearFunction(){
    document.getElementById("divTable").innerHTML = "";
    localStorage.clear();
}
//click action
createBtn.addEventListener('click', fetchData);

//______onload create table from local storage_______________//
window.addEventListener('load', ()=>{
    if(localStorage.length > 0){
        createTable();
    }
})
//_________________________________________________________//

//fetching data from api
function fetchData(){
    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001', true);

    xhr.onload = function (){
        if(this.status == 200){
            let data = JSON.parse(this.responseText);
            addToLocalStorage(data);
        }else if(this.status == 400){
            alert("not found. please retry!!")
            console.log("not found");
        }
    };
    xhr.send(); 
}


function addToLocalStorage(data){
    localStorage.setItem('data', JSON.stringify(data))
    if(localStorage.length >0){
        if(document.getElementById("divTable").innerHTML == ""){
            createTable();
        }else{
            document.getElementById("divTable").innerHTML = "";
            createTable();
        }
        
    }    
}



//creating Table
function createTable(){
    let localData = JSON.parse(localStorage.getItem('data'));
    let headerNames = Object.keys(localData[0]);
    let rowLen = localData.length;
    let colLen = headerNames.length;
    const table = document.createElement("table");
    table.setAttribute('id','table')
    table.setAttribute("class", "table shadow mt-4 table-sortable");

    //create header of table
    const thead = document.createElement("thead");

    const theadRow = document.createElement("tr");
    for (let i = 0; i < colLen; i++) {
        const theadName = document.createElement("th");
        theadName.innerText = setTitle(headerNames[i]);
        theadName.setAttribute("scope", "col");
        theadRow.appendChild(theadName);
    }
    thead.appendChild(theadRow);
    table.appendChild(thead);

    //create body of table
    const tbody = document.createElement("tbody");
    tbody.setAttribute('id','tbody');

    for (let k = 0; k < rowLen; k++) {
        //row
        const tbrow = document.createElement("tr");
        tbrow.setAttribute("scope", "row");
        tbrow.setAttribute('id', localData[k].id);
        tbody.appendChild(tbrow);
        // column
        for (let j = 0; j < colLen; j++) {
            if(j==1){
                const tbcolumn = document.createElement("td");
                const atag = document.createElement('a');
                atag.setAttribute('target','_blank')
                atag.setAttribute('href',`${localData[k][headerNames[j]]}`)
                atag.innerText = localData[k][headerNames[j]];
                // tbcolumn.innerText = localData[k][headerNames[j]];
                tbcolumn.appendChild(atag);
                tbrow.appendChild(tbcolumn);
            }else if(j==6){
                const tbcolumn = document.createElement("td");
                tbcolumn.innerText = calAge(localData[k].dob);
                tbrow.appendChild(tbcolumn);
            }else{
                const tbcolumn = document.createElement("td");
                tbcolumn.innerText = localData[k][headerNames[j]];
                tbrow.appendChild(tbcolumn);
            }
            
        }

        //for edit and delete column
        //delete button
        const delbtn = document.createElement('button');
        delbtn.setAttribute('type','button');
        delbtn.setAttribute('class', 'delbtn');
        delbtn.setAttribute('onclick', 'deleteRow(this)') 
        delbtn.innerText = "Delete";

        //update button
        const update = document.createElement('button');
        update.setAttribute('type','button');
        update.setAttribute('class', 'updatebtn');
        update.setAttribute('onclick', 'updateRow(this)')
        update.innerText = "Update";

        tbrow.appendChild(delbtn);
        // tbrow.appendChild(brkline);
        tbrow.appendChild(update);
    }

    table.appendChild(tbody);
    const currentDiv = document.getElementById("divTable");
    currentDiv.appendChild(table);

    // document.getElementsByTagName('button').addEventListener('click', deleteRow);

    // Calling sortTableColumn function onclick header-columns
    // document.querySelectorAll("#table th").forEach(headerCell => {
    //     headerCell.addEventListener("click", ()=>{
    //         // debugger
    //         const tableElement = headerCell.parentElement.parentElement.parentElement;
    //         const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    //         const currentIsAscending = headerCell.classList.contains("th-sort-asc");
        
    //         sortTableColumn(tableElement, headerIndex, !currentIsAscending);
    //     });
    // });

    //call data table funtion
    $('#table').DataTable({
        "searching": false,
        "paging": false,
        "ordering": true,
        "columnDefs":[{
            "targets":[1], //column index
            "orderable": false
        }]
    });

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


//Delete row Section
function deleteRow(e){
    $('#modalDelete').modal('show');
    document.getElementById("delRow").addEventListener('click', function(){
        // debugger
        let delId = e.parentElement.id;
        let tempArr = JSON.parse(localStorage.getItem('data'));
        for(let i=0;i<tempArr.length;i++){
            if(delId == tempArr[i].id){
                tempArr.splice(i,1);       
            }
        }
        localStorage.setItem('data', JSON.stringify(tempArr));
        if(document.getElementById("divTable").innerHTML == ""){
            createTable();
        }else{
            document.getElementById("divTable").innerHTML = "";
            createTable();
        }
        $('#modalDelete').modal('hide');
    })
   
}

//for Edit/update Section of table
function updateRow(e){
    $('#modalEdit').modal('show');

    const updateForm = document.createElement('form');
        updateForm.setAttribute('class', 'row g-3');
        let tempid = e.parentElement.id;
        let localData = JSON.parse(localStorage.getItem('data'));
        let headerArr = Object.keys(localData[0]);
        let rowLen = localData.length;
        let colLen = headerArr.length;
        for(let i=0;i<rowLen;i++){
            if(tempid == localData[i].id){
                targetIndex = i;
                for(let j=0;j<colLen;j++){
                    if(j==0){
                        const div = document.createElement('div');
                        div.setAttribute('class', 'col-md-4');
                        const label = document.createElement('label');
                        label.setAttribute('for', `${headerArr[j]}`);
                        label.setAttribute('class','form-label fw-bold');
                        label.innerText = `${setTitle(headerArr[j])}:`;
                        const input = document.createElement('input');
                        input.value = localData[i][headerArr[j]];
                        input.setAttribute('class', 'form-control')
                        input.setAttribute('id', `ip${j}`);
                        input.setAttribute('disabled','');
                        div.appendChild(label);
                        div.appendChild(input);
                        updateForm.appendChild(div)
                    }else if(j==7){
                        const div = document.createElement('div');
                        div.setAttribute('class', 'col-md-4');
                        const label = document.createElement('label');
                        label.setAttribute('for', `${headerArr[j]}`);
                        label.setAttribute('class','form-label fw-bold');
                        label.innerText = `${setTitle(headerArr[j])}:`;
                        const input = document.createElement('input');
                        input.value =getDateInput(localData[i][headerArr[j]]);
                        input.setAttribute('class', 'form-control')
                        input.setAttribute('id', `ip${j}`);
                        input.setAttribute('type','date');
                        div.appendChild(label);
                        div.appendChild(input);
                        updateForm.appendChild(div)
                    }else{
                        const div = document.createElement('div');
                        div.setAttribute('class', 'col-md-4');
                        const label = document.createElement('label');
                        label.setAttribute('for', `${headerArr[j]}`);
                        label.setAttribute('class','form-label fw-bold');
                        label.innerText = `${setTitle(headerArr[j])}:`;
                        const input = document.createElement('input');
                        input.value = localData[i][headerArr[j]];
                        input.setAttribute('class', 'form-control')
                        input.setAttribute('id', `ip${j}`);
                        div.appendChild(label);
                        div.appendChild(input);
                        updateForm.appendChild(div)
                        if(j==4){
                            input.setAttribute('type','email')
                        }else if(j==6){
                            input.setAttribute('disabled', '')
                        }else if(j==8){
                            input.setAttribute('type','number')
                        }else{
                            input.setAttribute('type','text');
                        }
                    }
                }
            }
        }
        let currDiv = document.getElementById('editFieldDiv');
        if(currDiv.innerHTML == ""){
            currDiv.appendChild(updateForm);
        }else{
            currDiv.innerHTML = "";
            currDiv.appendChild(updateForm);
        }

        //on click update
        document.getElementById('editRow').addEventListener('click', function(){
            let newObj = {};
            for(let i=0;i<colLen;i++){
                if(i==6){
                    newObj[headerArr[i]] = calAge(setDatFormate(document.getElementById(`ip${i+1}`).value));
                }else{
                    if(document.getElementById(`ip${i}`).value == ""){
                        alert('field is empty');
                        return;
                        // debugger
                    }else{
                        
                        if(i==7){
                            console.log(setDatFormate(document.getElementById(`ip${i}`).value));
                            newObj[headerArr[i]] = setDatFormate(document.getElementById(`ip${i}`).value);
                            // debugger
                        }else{
                            newObj[headerArr[i]] = document.getElementById(`ip${i}`).value;
                        }
                        
                    }
                }
                
            }
            
            let tempdata = JSON.parse(localStorage.getItem('data'));

            for(let i=0;i<tempdata.length;i++){
                if(tempdata[i].id == newObj.id){
                    tempdata[i] = newObj;
                    localStorage.setItem('data', JSON.stringify(tempdata))
                    if(document.getElementById("divTable").innerHTML == ""){
                        createTable();
                    }else{
                        document.getElementById("divTable").innerHTML = "";
                        createTable();
                    }
                }
            }
            $('#modalEdit').modal('hide');   
        })

}


// On Click appear Modal for input field
document.getElementById('addbtn').addEventListener('click', 
()=>{
        if(document.getElementById('inputDataDiv').innerHTML == ""){
            createInputField();
        }else{
            document.getElementById('inputDataDiv').innerHTML = "";
            createInputField();
        }
    }
);

//create input data field
function createInputField(){
    const currDiv = document.getElementById('inputDataDiv');
    const inputForm = document.createElement('form');
    inputForm.setAttribute('class', 'row g-3');

    let headerArr = Object.keys(JSON.parse(localStorage.getItem('data'))[0])
    
    //create input field
    for(let i=0;i<headerArr.length;i++)
    {
        if(i == 0){
            continue;
        }else{
            
            const div = document.createElement('div');
            div.setAttribute('class', 'col-md-4');
            
            const label = document.createElement('label');
            label.setAttribute('for', `inputField${i}`);
            label.setAttribute('class','form-label fw-bold');
            // console.log(headerArr[i]);
            label.innerText = `${setTitle(headerArr[i])}:`;
            const input = document.createElement('input');
            input.setAttribute('class', 'form-control')
            input.setAttribute('id', `inputField${i}`);
            div.appendChild(label);
            div.appendChild(input);
            inputForm.appendChild(div)
            if(i==4){
                input.setAttribute('type','email')
            }else if(i==6){
                input.setAttribute('disabled','')
            }else if(i==8){
                input.setAttribute('type','number')
            }
            else if(i==7){
                input.setAttribute('type','date');
            }
            else{
                input.setAttribute('type','text');
            }
        }   
    }
    if(currDiv.innerHTML == ""){
        currDiv.appendChild(inputForm);
    }else{
        currDiv.innerHTML = "";
        currDiv.appendChild(inputForm);
    }   
               
}

//take input and add to localstorage section
document.getElementById('addData').addEventListener('click', takeInputFun);

function takeInputFun(){
    let headerArr = Object.keys(JSON.parse(localStorage.getItem('data'))[0]);
    let newObj={}
    
    for(let i=0;i< headerArr.length;i++){
        if(i==0){
            newObj['id']=1+parseInt(maxID());
        }else if(i==6){
            newObj[headerArr[i]] = calAge(document.getElementById(`inputField${i+1}`).value);
        }else{
            if(document.getElementById(`inputField${i}`).value == ""){
                alert('input field is empty');
                return;
            }else{
                //validation
                if(i==4){
                    if(document.getElementById(`inputField${i}`).value.indexOf('@') < 0 && document.getElementById(`inputField${i}`).value.indexOf('.') < 0){
                        alert('email is not valid');
                        return;
                    }else{
                        newObj[headerArr[i]]= document.getElementById(`inputField${i}`).value; 
                    }
                }else if(i==5){
                    let ivalue = document.getElementById(`inputField${i}`).value;
                    if(ivalue.length == 10 && isNaN(ivalue)==false){
                        newObj[headerArr[i]]= document.getElementById(`inputField${i}`).value;
                    }else{
                        alert('Contact Number is not Valid.');
                        return;
                    }
                }else if(i==7){
                    console.log(document.getElementById(`inputField${i}`).value);
                    newObj[headerArr[i]]= setDatFormate(document.getElementById(`inputField${i}`).value);
                    // debugger
                }else{
                    newObj[headerArr[i]]= document.getElementById(`inputField${i}`).value; 
                }   
            }
        }
        
    }
    //add new Object to local storage
    let newArr=JSON.parse(localStorage.getItem('data'));
    newArr.unshift(newObj);
    localStorage.setItem('data',JSON.stringify(newArr));
    
    // Updating table after adding data to local storage
    if(document.getElementById("divTable").innerHTML == ""){
        createTable();
    }else{
        document.getElementById("divTable").innerHTML = "";
        createTable();
    }
       
}

//find max Id from data of localStorage
function maxID(){
    let currData = JSON.parse(localStorage.getItem('data'));
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
    let year ="";
    let count = 0;
    for(let i=str.length-4;i<str.length;i++){
        // if(str[i] == '/'){
        //     count++;
        // }
        // if(count==2){
        //     if(str[i] != '/'){
        //         year += str[i];
        //     }  
        // }
        year += str[i];
    }
    let today =new Date().getFullYear();
    // console.log("dob",year);
    // debugger
    return today - year;
}


//______Serch Funtion_____//
function searchFun(){
    const input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    const table = document.getElementById('tbody');
    const tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                let txtValue = td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

}






//______________ Table sorting Section_______//
/*Sort table 
@params {HTMLTableElements}
@params {number}
@params {boolean}
*/ 
function sortTableColumn(table, column, asc = true){
    console.log("in sortTbale Fun");
    const dirModifier = asc ? 1 : -1; 
    const tBody = table.tBodies[0];
    const rows  =Array.from(tBody.querySelectorAll("tr"));

    //sort each row
    const sortedRows = rows.sort((a,b)=>{
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        return aColText > bColText ? (1* dirModifier) : (-1*dirModifier);
    });


    //Remove all Existing <tr>'s from the table
    while(tBody.firstChild){
        tBody.removeChild(tBody.firstChild);
    }

    //Re-add the newly sorted rows
    tBody.append(...sortedRows);

    //Remember how the column is currently sorted
    table.querySelectorAll("th").forEach (th => th.classList.remove("th-sort-asc","th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);

}

// sortTableColumn(document.querySelector('.table'), 1, false);
// document.querySelectorAll("#table th").forEach(headerCell => {
//     debugger
//     headerCell.addEventListener("click", ()=>{
//         const tableElement = headerCell.parentElement.parentElement.parentElement;
//         const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
//         const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    
//         sortTableColumn(tableElement, headerIndex, !currentIsAscending);
//     });
// });


function getDateInput(str){
    let year = "";
    let month ="";
    let day = "";
    for(let i=0;i<str.length;i++){
        if(i>=0 && i<=1){
            day += str[i];
        }
        if(i>=3 && i<=4){
            month += str[i];
        }
        if(i>=6 && i<=9){
            year += str[i];
        }
    }

    return `${year}-${month}-${day}`;
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