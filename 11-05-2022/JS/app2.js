console.log("hello");

//Arrya in JS
const arr_name = ["hello", "Shalu", "Larry", "Ritesh"]
// for(let i=0;i<arr_name.length;i++){
//     console.log(arr_name[i]);
// }

//for-each loop
// arr_name.forEach(element => {
//     console.log(element);
// });

// ----take user input by terminal in node -------//
// const readLine = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });

// readLine.question('name: ',name=>{
//     console.log(name);
//     readLine.close();
// });
// --------------------------------------------//

// function myfun(a, b){
//     return a*b;
// }

// let x3 = myfun(5,3);
// console.log(x3);

// String
let text = "We are so call \"Vikings\" from north."
console.log(text);

let text2 = 'It\'s all right';
console.log(text2);

let text3 = "The character \\ is called backslash."
console.log(text3);

let n1 = new String("John");
let n2  = new String("John");
console.log(n1==n2);

let n3 = "Hello";
let n4 = "Hello";
console.log(n3==n4);

// slice()
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);
console.log(str.slice(5));
console.log(str.slice(-4));
//substring
console.log(str.substring(5, 10));

//replace
let newStr = str.replace("Banana", "Grapes");
console.log(newStr);

console.log("    Hello world!!   ".trim());

//padding -> padStart() , padEnd()
let newtext = "5";
let padded = newtext.padStart(4, "x");
console.log(padded);
//String search methods:
let st = "This is new statement of first and new line."
console.log(st.indexOf("new"));
console.log(st.lastIndexOf("new")) //returns the last word of index
console.log(st.search("new"));

console.log(st.match(/ment/));

console.log(st.includes("new")); //return true if it contains that string.

// Templates in js
let fName = "Alisa";
let lName = "Daniel";

let template1 = `Welcome ${fName} ${lName}!`;  // Template
console.log(template1);

let price = 10;
const VAT = 0.25;

let total = `Total: ${(price*(1 + VAT)).toFixed(2)}`; //Template
console.log(total);

