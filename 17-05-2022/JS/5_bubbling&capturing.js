// document.getElementById("myDiv").addEventListener("click", function(){fun1()}, false);
// document.getElementById("myP").addEventListener("click", function(){fun2()}, false);


// function fun1(){
//     document.getElementById("myDiv").innerHTML = "This is div element.";
// }
// function fun2(){
//     document.getElementById("myP").innerHTML = "This is p element.";
// }

// node value
// const myTitle = document.getElementById('title').innerHTML;
// document.getElementById("myP").innerHTML = myTitle;

// const myTitle = document.getElementById('title').firstChild.nodeValue;
// const myTitle = document.getElementById("title").childNodes[0].nodeValue;
// document.getElementById("myP").innerHTML = myTitle;

//navigation
// document.getElementById("p1").innerHTML = document.getElementById("h1").firstChild.nodeValue;
// document.getElementById("p1").innerHTML = document.getElementById("h1").nodeType;
// document.getElementById("p1").innerHTML = document.getElementById("h1").childNodes[0].nodeValue;

// document.getElementById("p1").innerHTML = document.body.innerHTML;

//__________creating new html elments nods_______//
// const para = document.getElementById("para");
// const node = document.createTextNode("This is new")
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para)
// const child = document.getElementById("p1");
// element.insertBefore(para, child)

// //removing element
// const ele  = document.getElementById("p2");
// ele.remove();

//______Collection__________//
// const myCollect = document.getElementsByTagName('p');//array form
// const len = myCollect.length;
// console.log(len);
// myCollect[1].innerHTML = "This is collection fist target.";

// dom node list
// const myNodeList = document.querySelectorAll("p");
// const len  = myNodeList.length;
// for(let i=0;i<len;i+=2){
//     myNodeList[i].style.color = "red";
// }


//______________JS Window______________//
const len = window.innerWidth;
const element = document.getElementsByTagName("p");

window.addEventListener("resize", function(){
    if(this.window.innerWidth< 576){
        for(let x of element){
            x.style.color = "red";
        }
    }else{
        for(let x of element){
            x.style.color = "black";
        }
    }
});



