// funtion constructor , Function Declation methods
// const myFunction  = new Function("a", "b", "return a * b")
// console.log(myFunction(4, 3));

// const myFunction = (a,b)=>{return a * b};
// console.log(myFunction(3,4));

// function Mul(a, b){
//     return a * b;
// }
// console.log(Mul(4, 3));

// self invoke function
// (function (){
//     let x = "Hello!!";
// })();

// function myFun(a, b){
//     return a*b;
// }
// let xd = myFun(2,5);

// console.log(typeof(myFun));

// const x = (x,y)=> {return x*y};
// console.log(typeof(x));

// find max of an array
// const arr = [4, 5, 45, 7, 58, 36]

// function findMax(arr){
//     let maxNum =0;
//     for(let x of arr){
//         if(maxNum < x){
//             maxNum = x;
//         }
//     }
//     return maxNum;
// }
// console.log(findMax(arr));


// let x = myFunction();
// function myFunction(){
//     return this;
// }
// console.log(x);

// const myObj = {
//     firstName: "Rohith",
//     lastName: "C.",
//     fullName:function(){return this.firstName+" "+this.lastName;}
// }
// console.log(myObj.fullName());

// const person = {
//     fullName: function(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// const person1 = {
//     firstName: "Danny",
//     lastName: "Daniel"
// }
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person1, "Lara", "Reills"));
// console.log(person.fullName.apply(person1, ["Lara", "Rosev"]));

//simulate max method on Arrays
// console.log(Math.max.apply(null,[1, 8, 3]));

// ------bind()----//
// const person = {
//     firstName: "Larry",
//     lastName: "Page",
//     fullName: function(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// const person1 = {
//     firstName: "Danny",
//     lastName: "Daniel"
// }
// console.log(person.fullName.bind(person1));

// closure
// let counter = 0;

// function add(){
//     counter++;
// }
// add();
// add();
// add();
// console.log(counter);

// function myFun(){
//     debugger;
//     document.getElementById("para").innerHTML = "Hello This Web page.";
// }

// add something to object
// const person = {};
// person.name = "Lara"
// person.age = 40;
// person.height = 5.5;
// console.log(person);

const person = new Object();
person.name = "Lara"
person.age = 40;
person.height = 5.5;

// console.log(person.age);
// console.log(person["age"]);
// let x ="age";
// console.log(person[x]);

//delete objects element
delete person.age;
console.log(person)