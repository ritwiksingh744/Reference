let fetchbtn = document.getElementById("btn");

fetchbtn.addEventListener('click', clickCall);

function clickCall(){
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function(){
        console.log('on progress..');
    }

    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        } else {
        console.log('some error occured');
        }
    }

    params = `{'name':'testsdasd','salary':'123','age':'23'}`;
    xhr.send(params);
}

// populate button handler
let populate = document.getElementById('btn2');
populate.addEventListener('click', calFun);

function calFun(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    xhr.onload = function(){
        if(this.status == 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for(let i in obj){
                str += `<li>${obj[key].employee_name}</li>`;
                console.log(obj[i]);
            }
            list.innerHTML = str;
        }else{
            console.log('some error occured!!');
        }
    }

    xhr.send();
}