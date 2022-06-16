//________JS Asynchronous_____________//

// setTimeout(myFunction("Welcome to this page."), 3000);  //callback

// function myFunction(value){
//     document.getElementById("para").innerHTML = value;
// }

//waiting for interval

// _____live time______//
// setInterval(myFunction, 1000); //this function call myFuction after every 1000 ms = 1sec.
// function myFunction(){
//     let d = new Date();
//     document.getElementById("para").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();   
// }
//___________//

//___Waiting for files______//
// function myDisplayer(some){
//     document.getElementById("para").innerHTML = some;
// }

// function getFile(myCallback){
//     let req = new XMLHttpRequest();
//     req.open('GET', "myCar.html");
//     req.onload = function (){
//         if (req.status == 200){
//             myCallback(this.responseText)
//         }
//         else{
//             myCallback("Error: "+ req.status)
//         }
//     }
//     req.send();
// }
// getFile(myDisplayer);

//_______Promise Example______//

// function myDisplayer(some){
//     document.getElementById("para").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject){
//     let x = 0;

//     if(x == 0){
//         myResolve("OK")
//     }else{
//         myReject("Error")
//     }
// });

// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );
//____________________________//

//___Waiting for timeout using promise
// let myPromise = new Promise(function(myResolve, myReject){
//     setTimeout(function(){myResolve("Successfully executed!!");}, 3000);
// });

// myPromise.then(function(value){
//     document.getElementById("para").innerHTML = value;
// });
//_____________________________//

// Waiting for file
// function myDisplayer(some){
//     document.getElementById("para").innerHTML = some;
// }

// function getFile(myCallback){
//     let req  = new XMLHttpRequest();
//     req.open('GET', 'myCar.html');
//     req.onload = function(){
//         if(req.status == 200){
//             myCallback(req.responseText)
//             console.log(req.status);
//         }else{
//             myCallback("Error: " + req.status)
//             console.log(req.status);
//         }
//     }
//     req.send();
// }
// getFile(myDisplayer);

// another example of promise
// function myDisplayer(some){
//     document.getElementById("para").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

// async and await
// async function myFunction(){
//     return "hello!!"
// }
// myFunction().then(
//     function(value){console.log(value);},
//     // function(error){console.log(error);}
// );

// exaple of asyc and await
// async function myDisplay(){
//     let myPromise = new Promise(function(resolve){
//         setTimeout(function(){resolve("thanks for waiting.")}, 3000);
//     })
//     document.getElementById("para").innerHTML = await myPromise;
// }

// myDisplay();

// function myDisplayer(some){
//     document.getElementById("para").innerHTML = some;
// }

// async function getFile(){
//     let myPromise = new Promise(function(resolve){
//         let req  = new XMLHttpRequest();
//     req.open('GET', 'myCar.html');
//     req.onload = function(){
//         if(req.status == 200){
//             resolve(req.response);
//             console.log(req.status);
//         }else{
//             resolve("File not Found")
//             console.log(req.status);
//         }
//     }
//     req.send();
//     });
//     document.getElementById("para").innerHTML = await myPromise;
// }
// getFile();
//______________________________________//

//____________JS HTML DOM_______________//

//______________________________________//