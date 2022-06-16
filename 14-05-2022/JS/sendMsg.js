// import {greet, message} from "./message.mjs";
// import "./text.json" assert {type : "json"};

// const gs = greet("Hellan");

// console.log(gs);
// console.log(message);
// let newText = require("./text.json")

// console.log(newText);

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);

document.getElementById("para").innerHTML =
obj.employees[0].firstName + " " + obj.employees[1].lastName;

function myFun(){
    debugger;
    document.getElementById("para").innerHTML = "Welcom to this page."
}

