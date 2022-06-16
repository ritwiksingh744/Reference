const new_para = document.createElement("p");
const curent_div = document.getElementById("div")

document.getElementById('btn').addEventListener('click', loadText);

function loadText(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'file/demo.txt', true);

    xhr.onload = function (){
        if(this.status == 200){
            new_para.innerText = this.responseText;
            console.log(new_para.innerText);
            curent_div.appendChild(new_para);
        }else if (this.status == 400){  
            new_para.innerText = "not found!!"
            curent_div.appendChild(new_para);
        }
    };

    xhr.send();
}

//get text from local json

document.getElementById("btn2").addEventListener("click", getJsonText)

function getJsonText(){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'file/user.json', true);

    xhr.onload = function (){
        if(this.status == 200){
            let user = JSON.parse(this.responseText);
            let output = "";
            for(let i in user){
                output += "name: "+user[i].name+" email: "+user[i].email+"<br>";
            }
            document.getElementById('div2').innerHTML = output;
            // document.getElementById('div2').innerText = JSON.parse(this.innerText);
        }
        else if(this.status == 400){
            document.getElementById('div2').innerText = "Not Found";
        }
    };

    xhr.send();
}