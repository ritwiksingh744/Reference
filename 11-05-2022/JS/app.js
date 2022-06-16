document.getElementById('demo').style.display="block";
// document.getElementsByClassName("list").style.display="inline";

function myFunciton(){
    document.getElementById('para').innerHTML = "paragraph is changed.";
    
}

function calFun(){
    document.getElementById('para2').innerHTML = "5 + 6 = "+(5+6);
}
document.write("<br/> hello <br/>"+(5+6));

function alertCall(){
    window.alert("You must sign up first.");
}

console.log(40+20);

// variable declaration and use
let a, b, c;
a = 4;
b = 5;
c = a + b;
console.log("a+b="+c);

// one statement and may variables
let x = 4, name = "John", jobSatus = "false";

// contant variable
const PI = 3.14;

let radius = 5;
let area;
area = PI * radius * radius;
console.log("area of cirle = "+area);

// Array 
let cars = ["Alto", "Mercedes", "RollsRoyes", "Verna"];
console.log(cars[2]);

//add items in existing array
cars.push("Tata Safari");
console.log(cars);
for(let i=0;i<4;i++){
    console.log(cars[i]);
}

// Constand object in js
let CAR = {type:"Fiat", model:500, color:"while"};
CAR.color = "red";
console.log(CAR);
CAR.owner="Johnson";
console.log(CAR);

//Arithmetic operator
let a1 = 5, b1 = 6;
console.log((a1+b1)*100); 
//division
let x1 = 10;
let y1 =5;
console.log(x1/y1);

// power
console.log(3**3);

//Expression
let res = (x1 + y1)*100 - 55;
document.write("<br/> x1 = 5, y1 = 3 <br/> then (x1 + y1)*100 - 55 = "+ res);
document.write("<br/>"+x1*y1/5);
document.write("<br/>"+x1/y1*3);
// console.log(typeof(x1)); //return data-type of x1

console.log("This:"+x1??x2); // returns the first number.

console.log(4|7); //this add the number

// object data type
let record = {name:"Alis" , age: 55, gender: "female"}
document.write("<br/>"+record.age);
console.log(15+5+"Hello");
console.log("Hello"+15+5);

//same variable can hold different data types:
let x2,y2;
x2 = 55;
x2 = "hello world!!";

//large and small numbers
x2 = 123e5;
console.log(x2); // for large numbers -> return value as 12300000
y2 = 123e-5;
console.log(y2); //for small number -> return value as 0.00123

// Array in javaScript 
// const names = ["Rohan", "Raj", "Rohit", "Reshma", "Rashmika", 5];
// console.log(typeof(names[names.length-2]));


//take user input by promt in dom
// let newx = prompt()
// console.log(newx);
let s1 = "100";
let s2 = "10";
let res1 = s1/s2;
console.log(res1);

const a12 = ["ram", "mohan", "Suresh", 55, "Ramesh", 1];
// document.getElementById("para2").innerHTML = a12.toString();

// let number1 = [45, 20, 4, 23, 78, 42, 18]
// let txt = "";
// number1.forEach(myfun);

// function myfun(value){
//     txt += value + "<br>";
// }
// document.getElementById("para2").innerHTML = txt;

// entries()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries(); 

// for (let x of f) {
//   document.getElementById("para2").innerHTML += x;  //add alemet of array with index to content of html block
// }

// try{
//     alert("Welcome Guest!!");
// }
// catch(err){
//     document.getElementById("para2").innerHTML = err.message;
// }

