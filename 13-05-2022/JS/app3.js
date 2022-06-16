// hello = function() {
//     document.getElementById("para").innerHTML += this;
//   }
  
hello = () =>{document.getElementById("para").innerHTML +=this;}
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);