// Templates

// let header = "Templates Literals";
// let tags = ["templates literals", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags){
//     html += `<li>${x}</li>`;
// }

// html+=`</ul>`;

// document.write(html);

// Number Method
// let x = 9.564;
// console.log(x.toPrecision(2));

// ---------------Array -------------------------//
// const a1 = ["ram", "mohan", "Suresh", 55, "Ramesh", 1];
// a1.sort();
// console.log(a1);
// console.log(Array.isArray(a1));

// console.log(a1.join(" "));

// a1.pop();
// console.log(a1)
// a1.push("Moon");
// console.log(a1);

// a1.shift(); // shift() removes the first element of array and index is shifted back.
// console.log(a1);

// add element from start
// a1.unshift("Larry");
// console.log(a1);

// splice() method is used to add and remove element to an array.
// a1.splice(3, 0, "Sita", "Raman");
// console.log(a1);

// a1.splice(0, 1); //2nd parameter  removes no. of element fromm start.
// console.log(a1);

//Array slice() method 
// const newa1 = a1.slice(3);
// console.log(newa1);

// const num_arr = [55, 65, 41, 2, 78, 46, 33, 7, 15];

// iteration and print array element
// for(x of num_arr){
//     console.log(x);
// }

//for each loop
// num_arr.forEach(x => {
//     console.log(x);
// });


// num_arr.sort();
// console.log(num_arr); // This sort alphatically not sorts accurate for numericals

//******  to sort the numeric array follow the below method   *****/////
// num_arr.sort(function(a,b){return a - b});
// num_arr.sort((a,b)=> a - b);
// console.log(num_arr);

// Fisher yets method for sorting the array
// for(let i = num_arr.length-1;i>0;i--){
//     let j = Math.floor(Math.random() * i)
//     let k = num_arr[i]
//     num_arr[j] = k
// }
// console.log(num_arr);

// function myArrrayMax(arr){
//     return Math.max.apply(null, arr);
// }

// console.log(myArrrayMax(num_arr));

// function myArrayMin(arr){
//     return Math.min.apply(null, arr);
// }
// console.log("Min value of array is: "+ myArrayMin(num_arr));

// Sorting of object
// const carList = [{type: "Sumo", year: 1990},{type: "Volvo", year: 2016},{type: "BMW", year: 2010},{type: "Saab", year: 2001}];
// console.log(carList);

// sorting object by year
// carList.sort((a,b) => a.year - b.year);
// console.log(carList);


//sorting object by type
// carList.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
//   console.log(carList);

// let number1 = [45, 20, 4, 23, 78, 42, 18];

// map() method
// let number2 = number1.map(myFun);

// forEach loop
// let txt = "";
// number1.forEach(myfun);

// function myfun(value){
//     text += value + "<br>";
// }

// function myFun(value, index, array){
//     return value * 2;
// }
// console.log(number2);

//filter
// let number3 = number1.filter(myFunct);
// function myFunct(value){
//     return value > 50;
// }
// console.log(number3);

//reduce() method  //sum of all num of array
// let number4 = number1.reduce(myfun1);
// function myfun1(total, value, index, array){
//     return total + value;
// }
// console.log(number4);

// every() check the condition if any fails return false else true
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);


//current date
// console.log(new Date());
// const d = new Date("October 13, 2014 11:13:00");
// const d = new Date(10000000000);
// console.log(d);
// const d = new Date("2022-05-13");
// console.log(d);
// const d = new Date("2022-05");
// console.log(d);

// const d = new Date("May 13 2022");
// console.log(d);

// const d = new Date("January 15 2015");
// console.log(d);

// let msec = Date.parse("jan 15 2022");
// console.log(msec); //returns the mili-seconds between this and Jan 1 1970
// const d = new Date(msec);
// console.log(d);

// const d = new Date();

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());
// console.log(d.getDay());
// console.log(Date.now());

// print the month
// const d = new Date();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[d.getMonth()]);

// console.log(d.getUTCDay());

//set Method in date
// d.setFullYear(2020);
// console.log(d);
// d.setFullYear(2020, 10, 3);
// console.log(d);

// let text = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2200, 0, 5);

// if(someday > today){
//     text = "Today is before Jan 5 2200";
// }else {

//     text = "Today is after Jan 5 2200";
// }
// console.log(text);

//--------- Math------------
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.trunc(4.6)); //returns the integer part
// console.log(Math.trunc(Math.random()));\

//generate  random number between range
//Math.floor(math.random()*(max - min)+min) 

// console.log(
//     Math.floor(Math.random()*(15-5)+5)
//     );

// log
// console.log(Math.log(10).toFixed(2));
// console.log(Math.log10(5));

//------- Comparisons----------------
// let x = 5;
// let y = "5";
// console.log(x===y);

// let n = 4;

//---------------------- Loops-----------------------//

// switch(n)
// {
//     case 1: 
//         console.log("Hello");
//         break;
//     case 2:
//         console.log("GM");
//         break;
//     default:
//         console.log("Wrong input");
//         break;
// }

// todays day
// switch(new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         console.log(day);
//         break;
//     case 1:
//         day = "Monday";
//         console.log(day);
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log(day);
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log(day);
//         break;
//     case 4:
//         day = "Thursday";
//         console.log(day);
//         break;
//     case 5:
//         day = "Friday";
//         console.log(day);
//         break;
//     case 6:
//         day = "Saturday";
//         console.log(day);
//         break;
//     default:
//         break;
// }

// ---For in loop:------//

// const person = ["Ram", "Rishi", "Aman", "Shyam", "Jignesh", "Ganesh"]

// for(let x in person){
//     console.log(person[x]);
// }

//------ ForEach loop: -------//

// person.forEach(x =>{
//     console.log(x)
// });

// person.forEach(myFun);
// function myFun(value, index, array){
//     console.log(value);
// }
//----------------------- ------ -//

//------- For of loop: -----------//
// for(let x of person){
//     console.log(x);
// }

// let lang = "javaScript";

// for (let x of lang){
//     console.log(x);
// }
// let i = 1;
// while(i < 10){    //while loop
//     console.log("This is "+ i);
//     i++;
// }

// do while loop
// do{
//     console.log("This is "+ i);
//     i++;
// }while(i < 10);

//------------- Iteration-----------//
//------set-----
// const letters = new Set(["bool", "lon", "map", "key"])
// for(let x of letters){
//     console.log(x);
// }

//----map-------//
// const fruits = new Map([
//     ["apple", 110],
//     ["banana", 60],
//     ["papaya", 70]
// ]);

// for(const x of fruits){
//     console.log(x);
// }

//--------------- Set ----------------------//

// declaration of Set
// const names = new Set(["Sohan", "Harry", "Charles", "Michel"]);
// console.log(names);
// names.add("Mickey");
// console.log(names);

// for( const name of names){
//     console.log(name);
// }
// names.add("Harry");
// console.log(names);


// names.forEach(value => console.log(value));

// names.forEach(function(value){
//     console.log(value);
// })

// let text = "";
// for(const x of names.values()){
//     text += x+" ";
// }
// console.log(text);

//----------- Map -------------//
// const fruits = new Map([
//     ["apple", 110],
//     ["banana", 60],
//     ["papaya", 70]
// ]);

// fruits.set("banana", 50);
// console.log(fruits);

//get method
// console.log(fruits.get("banana"));

// console.log(fruits.size); //returns the size of Map
// fruits.set("kiwi", 150);
// console.log(fruits)
// fruits.delete("kiwi");
// console.log(fruits);
// console.log(fruits.size);
// console.log(fruits.has("banana"));

// let text = "";
// fruits.forEach(function(value, key){
//     text += key + " " + value +"\n";
// });
// console.log(text);

// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);  

// -----convert decimal to binary---------------//

// function decToBinary(num){
//     return (num >>> 0).toString(2);
// }

// console.log(decToBinary(50));

//-----------------------------------------------//
//------------ convert binary to deimal--------//
// function binToDecimal(bin){
//     return parseInt(bin, 2).toString(10);
// }

// console.log(binToDecimal(1010));

//-----------------------------------------//

// let text = "Hello this is Name from xyz place  Name";
// console.log(text.search(/Name/i));  //return the index of that word
// let res = text.replace(/Name/i, "Rohith");
// console.log(res);

//---------------Js this keyword-----------//
// "use strict";
// const person  ={
//     firstName : "John",
//     lastName: "Daniel",
//     id : 5556,
//     fullName : function() {
//         return this.firstName +" "+ this.lastName;
//     }
//     };
// console.log(person.fullName());



// "use strict";
// const person1 = {
//     fullName : function(){
//         return this.firstName + " " +this.lastName;
//     }
// }
// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// call() method:
// let x = person1.fullName.call(person2);
// console.log(person1.fullName.call(person2));

//bind() method:
// let fullName = person1.fullName.bind(person2);



//------------------Arrow function---------------------- //
// const hello = () => {
//     return "Hello World!";
// }
// console.log(hello());

// const hello = (val) => "hello " + 20;
// console.log(hello());


