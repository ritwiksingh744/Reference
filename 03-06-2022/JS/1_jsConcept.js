// function Bike(model,color){
//     this.model = model,
//     this.color = color
//   }
//   Bike.prototype.getDetails = function(){
//    return this.model+" bike is "+this.color;
//   }
//   var bikeObj1 = new Bike('BMW','Black');
//   var bikeObj2 = new Bike('BMW','white');
//   console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
//   console.log(bikeObj2.getDetails()); //output: BMW bike is WHITE
//   console.log(bikeObj1,bikeObj2) // attacheced below image as output

//   console.log(bikeObj1.__proto__ === Bike.prototype);

// function Bike(model, color){
//     this.model = model;
//     this.color = color;
// }

//defining function inside a function outside
// Bike.prototype.getInfo = function (){
//     return this.color+' '+this.model+' bike.';
// };

// let bike1 =new Bike("Honda", "Black");
// console.log(bike1.getInfo());

//----------IIFE - Immediate invoke function Expression________//
// (function (){
//     let foo = "Hello";
//     console.log(foo);
// })();

// console.log(foo);

//js closure
// function User(name){
//     var displayName =  function(greeting){
//         console.log(greeting+ ' '+name);
//     }
//     return displayName;
// }

// var myFun = User('Rohith');

// myFun('Welcome');

// var myModule = (function() {
//     'use strict';
 
//     var _privateProperty = 'Hello World';
     
//     function _privateMethod() {
//         console.log(_privateProperty);
//     }
     
//     return {
//         publicMethod: function() {
//             _privateMethod();
//         }
//     };
// }());
  
// myModule.publicMethod();                    // outputs 'Hello World'   
// console.log(myModule._privateProperty);     // is undefined      
//                                             //protected by the module closure
// myModule._privateMethod();                  // is TypeError protected by the module closure
//                                             //by the module closure
// export default myModule;

//_____________Currying________//
// var add = function (a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(add(2)(5)(5)); //output:14

// memoization
// const memoizedAdd = () =>{
//     let cache = {};
//     return (value) =>{
//         if(value in cache){
//             console.log('Fetching from cache');
//             return cache[value];
//         }else{
//             console.log('Calculating result');
//             let result = value + 10;
//             cache[value] = result;
//             return result;
//         }
//     }
// }

// const newAdd = memoizedAdd();

// console.log(newAdd(9));
// console.log(newAdd(9));

//_____Call APPLY BIND_____//
// let obj = {
//     num : 2
// }
// let add = function(num1, num2, num3){
//     return this.num + num1 + num2 + num3;
// }

// let arr = [3, 4, 5];

// //call method
// console.log(add.call(obj,3,4,5));

// //apply method
// console.log(add.apply(obj,arr));

// //bind method
// var bound = add.bind(obj);
// console.log(bound(3,4,5));

//______Polymorphism in JS__________//
// let emp = new Employee('raja');

//override function
// Employee.prototype.getDetails = function(){
//     return this.name.toUpperCase();
// }

// console.log(emp.getDetails());

// //object and prototype function
// function Employee(name) {
//     this.name = name;
// }

// Employee.prototype.getDetails = function (){
//     return this.name;
// }

//___________Callback Function_____________//
// function greeting (name){
//     console.log('Hello '+name);
// }

// function processUserInput(callback){
//     let name =prompt('please enter your name.')
//     // name = 'raja'
//     callback(name);
// }

// processUserInput(greeting);

//___________promise_________//
// var promise1 = new Promise(function(resolve, reject) {
//     isDbOperationCompleted = false;
//     if (isDbOperationCompleted) {
//         resolve('Completed');
//     } else {
//         reject('Not completed');
//     }
// });

// promise1.then(function (result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
    
// })

//________async and await________//
// async function getUserDetail(){
//     try{
//         let users = await getUsers();
//         return users[0].name;
//     } catch(err){
//         return {
//             name: 'defualt user'
//         };
//     }
// }

// getUserDetail();

// local storage 
const inputText  = document.getElementById('textInput');
let count = 1;
let names = [];

document.getElementById('btn').addEventListener('click', callFun);

function callFun(){
    console.log(count);
    let name = inputText.value;
    localStorage.setItem(`user${count}`, name);
    count++;
}
if(count > 10){
    document.getElementById("btn").style.display="none";
}

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', getNames);

function getNames(){
    
    for(let i=0;i<10;i++){
        names[i] = localStorage.getItem(`user${i+1}`);
    }
    console.log(names);
    createList()
}

let Content = "";
const currdiv = document.getElementById('list');
const ulist = document.createElement('ul');
function createList(){
    for(let i=0;i<10;i++){
        const li = document.createElement('li');
        li.innerText = names[i];
        ulist.appendChild(li);
    }
    currdiv.appendChild(ulist);
}

