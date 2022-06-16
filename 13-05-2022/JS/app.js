"use strict";
var p = 5;
q = 10;
console.log(p);
console.log(q);


function myFuncion(){
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("takeInput").value;
    try{
        if(x == "")
            throw "empty";
        if(isNaN(x))
            throw "Not a Number.";
        x = Number(x);
        if(x < 5)
            throw "Too low please enter higher number.";
        if(x > 10)
            throw "Too  high please enter lower number.";
    }
    catch (err){
        message.innerHTML = "Input is "+ err;
    }
    finally{
        document.getElementById("takeInput").value = "";
    }
}