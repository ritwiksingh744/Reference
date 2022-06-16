// const person = {
//     name: "Jonny",
//     age: 30,
//     city: "New York",
//     today: new Date(),
//     age: function(){return 30;}
// };

// let text ="";
// for(let x in person){
//     text += person[x] + " ";
// }
// document.getElementById("para").innerHTML = text;

// Using Object.value()
// const myArray = Object.values(person);
// document.getElementById("para").innerHTML = myArray.join(" ");

//Using JSON.stringify()
// let myStirng = JSON.stringify(person); //to convert json format.
// console.log(myStirng);

// stingify functions
// let myString = JSON.stringify(person);
// document.getElementById("para").innerHTML =myString+" "+person.age();

// Stringify Arrya
// const arr = ["Rohan", "Raju", "Ramesh", "Richa"];
// console.log(JSON.stringify(arr))
// const myArr = JSON.stringify(arr);
// document.getElementById("para").innerHTML = myArr;

// Object Accessors  getter
// const person = {
//     firstName: "John",
//     lastName: "Deff",
//     language: "en",
//        // here get lang is property of object - 
//     get lang() {
//         return this.language
//     } 
// }

// document.getElementById("para").innerHTML = person.lang;

// Js setter (set keyword)
// const person = {
//     firstName: "John",
//     lastName: "Deff",
//     language: "",
//     // lang is poperty of person
//     set lang(lang) {    
//         return this.language = lang.toUpperCase();
//     } 
// }

// person.lang = "en";
// document.getElementById("para").innerHTML = person.language;


// Object define property
// const obj = {counter: 0,
//             name: ""    
//         };

// Object.defineProperty(obj, "reset", {get : function (){this.counter=0;}});

// Object.defineProperty(obj, "increment", {get: function(){this.counter++;}});

// Object.defineProperty(obj, "decrement", {get: function(){this.counter--;}});

// Object.defineProperty(obj, "add", {set : function(value){this.counter += value;}});

// Object.defineProperty(obj, "subtract", {set : function(value){this.counter -= value;}});

// Object.defineProperty(obj, "setName",{
//     set : function(name){this.name = name;}
// })
// obj.reset;
// obj.add = 10;
// obj.subtract = 5;
// obj.increment;
// obj.decrement;
// obj.name = "Ram";
// console.log(obj.counter);
// console.log(obj);

// -------adding a method to a constructor-------------
// function person  (first, last, age, eyecolor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyecolor = eyecolor;
//     this.changeName = function(name){
//         this.firstName = name;
//     };
//     this.name = function() {
//         return  this.firstName + " " +this.lastName;
//     };
    
// }
// person.prototype.name = function() {
//     return  this.firstName + " " +this.lastName;
// };

// let record = new person("Rohit", "Kumar", 80, "brown");
// debugger;
// record.changeName("Shivam");
// debugger;
// console.log(record);
// console.log(record.name());

// add property of funciton
// person.prototype.nationality = "Indian";

// console.log(record.name());

// my iterable
// function myNuber(){
//     let n = 0;
//     return {
//         next: function(){
//             n += 10;
//             return {value: n,done: false};
//         }
//     };
// }

// const n = myNuber();
// n.next();
// n.next();
// n.next();
// console.log(n.next().value)

// myNumber = {};
// myNumber[Symbol.iterator] = function(){
//     let n = 0;
//     done = false;
//     return {
//         next(){
//             n+=10;
//             if(n == 100){done = true}
//             return {value:n , done : done};
//         }
//     };
// }
// for(const num of myNumber){
//     console.log(num);
// }

//----------set--------
// const letters = new Set(["a", "b", "c", "d"]);
// letters.add("e");

// let text = "";
// letters.forEach(function (value){
//     text += value+" ";
// })

// console.log(text);
// console.log(letters.values())

// Entries
// const myIterator  = letters.entries();
// let text = "";
// for(const entry of myIterator){
//     text += entry
// }
// console.log(text);

// console.log(letters instanceof Set)

//_______________ Map _____________//
// const fruits = new Map([
//     ["apple", 80],
//     ["banana", 40],
//     ["orange", 60]
// ]);

// to add element to map
// fruits.set("kiwi", 90);
// console.log(fruits);

// print values
// console.log(fruits.get("apple"));

//**________Map iteration______**//

// for( let x of fruits){
//     // console.log(Array.isArray(x));  // here x is array type
//     //console.log(x.constructor === Array);
//     //console.log(x instanceof Array);
//     console.log(x[0]); // return key
//     console.log( x[1]); //return value
// };


// fruits.forEach((value, key)=>{
//     console.log(value);
// });

// console.log(Object.keys(fruits));

// has() checks value 

// for keys of map
// for (const x of fruits.keys()) {
//   console.log(x);
// }

// for values of map
// for (const x of fruits.values()) {
//   console.log(x);
// }

//_____________________________//


// to find object of Array type
// let arr = [3, 4, 5];
// console.log(Array.isArray(arr));

//_____________Object Reference_________//
//create object with existing object as prototype
// Object.create()

// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing Properties
// Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)

// Returns enumerable properties as an array
// Object.keys(object)


// Changing a property value
// const person = {
//     name: "John",
//     age: "65",
//     language: "EN"
// };
// Object.defineProperty(person, "language", {value : "NO"});
// console.log(person);

// Object.defineProperty(person, "fullName", {value : "Jonny Deff"})
// console.log(person);

//changing meta value


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   };
  
//   console.log(Object.defineProperty(person, "language", {enumerable:false}));
//   console.log(Object.getOwnPropertyNames(person));  // Returns an array of properties
  
//______________________________________//


//______________JS Class_______________//
// initialization
// class Car {
//     constructor(name, year, color){
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }
//     age(){
//         let d = new Date();
//         return `${this.name} is ${d.getFullYear()-this.year} years old.`;
//     }
// }

// let car1 = new Car("BMW", 2020, "white");
// console.log(car1.age());

// inheritance
// class Car {
//     constructor(brand) {
//         this.brand = brand;
//     }


//     present(){
//         return `I have ${this.brand}`
//     }
// }
// class Model extends Car {
//     constructor(brand, model){
//         super(brand)
//         this.model = model;
//     }

//     show(){
//         return `${this.present()}, It is a ${this.model}.`
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());


// Getter and Setter
// class Car {
//     constructor(brand){
//         this._carName = brand
//     }
//     get cnam() {
//         return this._carName;
//     }

//     set cnam(x){
//         this._carName = x;

//     }
// }

// let myCar = new Car("Ford");
// myCar.cnam = "Rolls-Royes";
// console.log(myCar.cnam);

//static 
// class Car {
//     constructor(name){
//         this.name = name;
//     }
//     static hello(){
//         return `Hello! ${this.name}.`
//     }
//     greet(){
//         return `Hello! ${this.name}.`
//     }
//     static print(){
//         return this.hello();
//     }
// }

// let myCar = new Car("Ferrari");
// console.log(myCar.hello());



// // console.log(myCar.hello()); //this will not execute hello() due to static , return error
// console.log(myCar.greet());
// console.log(Car.hello(myCar))
// console.log(Car.print());


// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
//   let myCar = new Car("Ford");
//   console.log(Car.hello(myCar));

//_____________________________________//


//______________Callbacks_______________//
// const element  = document.getElementById("btn");
// let x = 1;
// document.getElementById("para").innerHTML = x;
// element.addEventListener("click", function(){ //callback
//     x++;
//     document.getElementById("para").innerHTML=x;
// });



// function mydisplay(something){
//     console.log(something);;
// }

// function msg1(){
//     mydisplay("bla bla bla...")
// }
// function msg2(){
//     mydisplay("nhtn tjsklf nldsjhfksdl ...")
// }

// // msg1();
// // msg2();

// msg2();
// msg1();

// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(6, 11, myDisplayer);

//______________________________________//

