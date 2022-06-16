var pagecounter = 1;
const animalContainer = document.getElementById('animal-info');
const btn = document.getElementById('btn');
btn.addEventListener('click', callFun);

function callFun(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pagecounter+'.json', true);

    xhr.onload = function(){
        let data = JSON.parse(this.responseText);
        console.log(data[0].name);
        renderHTML(data);
    };
    xhr.send();
    pagecounter++;
    if(pagecounter > 3){
        btn.style.display = "none";
    }
}

function renderHTML(obj){
    let str = "";
    for(let i in obj){
        str += '<p> '+obj[i].name+' is a '+obj[i].species+' that likes to eat ';

        for(let j in obj[i].foods.likes){
            if(j == 0){
                str += obj[i].foods.likes[j];
            }else{
                str += ', '+obj[i].foods.likes[j];
            }   
        }
        str += ' and dislikes '

        for(let j in obj[i].foods.dislikes){
            if(j == 0){
                str += obj[i].foods.dislikes[j];
            }else{
                str += ', '+obj[i].foods.dislikes[j];
            }   
        }

        str += '.</p>'
    }
    animalContainer.insertAdjacentHTML('beforeend', str);
}



