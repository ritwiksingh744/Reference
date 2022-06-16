
//
// const x = document.forms["frm1"];
// let text = "";
// for(let i = 0;i<x.length-1;i++){
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("para").innerHTML = text;

//dom HTML changing value of attributes
// document.getElementById("myImg").src = "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg";

// setInterval(myFun, 1000);
// function myFun(){
//     let d = new Date();
//     document.getElementById("para").innerHTML = "Date: "+d; 
// }

// document.write(Date())

//________DOM Form___________//
// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value;
//     console.log(x);
//     if(x == ""){
//         alert("name must be filled out!!");
//         return false;
//     }
// }

//__________Animate__________//
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }
