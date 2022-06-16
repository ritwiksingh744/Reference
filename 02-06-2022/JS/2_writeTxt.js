document.getElementById('btn3').addEventListener('click', writeText)

function writeText(){
    let content = document.getElementById('text').value;
    console.log(content);
    
    const fs = require('fs');
    fs.writeFile('file/myTxt.txt', content, err => {
        if(err){
            console.log(err);
            return
        }
    })
}