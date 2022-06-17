const num = document.querySelectorAll(".number");
const operater = document.querySelectorAll(".operator");
const dotEvent = document.querySelector(".dot");
const final = document.querySelector(".final");
const inDisplay = document.getElementById("input");
const outDisplay = document.getElementById("output")
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");

let num1 = "";
let num2 = "";
let result = null;
let op = "";
let nums = "";
let lastOperator = "";
let isDecimal = false;



//---- Clear All ----
clear.addEventListener("click", ()=>{
    num2 = "";
    num1 = "";
    result = "";
    inDisplay.innerText = "";
    outDisplay.innerText = "0";

})

// <<----backspace---
backspace.addEventListener("click", () =>{
    num2 = num2.slice(0, -1);
    inDisplay.innerText = num2;
})


// dot event
dotEvent.addEventListener('click',()=>{
    if(!isDecimal){
        num2+=".";
        isDecimal=true;
    }
        
})


// ----take num input-----
num.forEach(element => {
    element.addEventListener("click", (e) =>{
        num2 += e.target.innerText;
        inDisplay.innerText = num2;
        // console.log(num1);
    })
});

//--operator press
operater.forEach(op =>{
    op.addEventListener("click", (o)=>{
        if(!num2)
            return;
        let opName = o.target.innerText;
        // console.log(opName);
        if(num1 && num2 && lastOperator){
            calculation();
        }else{
            result = num2;
        }
        separateVar(opName);
        lastOperator = opName;
        inDisplay.innerText = " ";  //to do
        isDecimal=false;
    })
})

function separateVar(e=""){
    num1 += `${num2} ${e}`;
    console.log(num1);
    outDisplay.innerText = num1;
    num2="";
    // console.log(result);
}



//---calculation
function calculation(){
   if(lastOperator === "+"){
       result = parseFloat(result) + parseFloat(num2);
        
    }
   if(lastOperator === "-"){
       result = parseFloat(result) - parseFloat(num2);
        
        
    }
   if(lastOperator === "*"){
       result = parseFloat(result) * parseFloat(num2);
       
    }
   if(lastOperator === "/"){
       result = parseFloat(result) / parseFloat(num2);
       
    }

}


// OK press
final.addEventListener("click", okPress)
function okPress(){
    calculation();
    separateVar();
    num2=result;
    num1="";
    inDisplay.innerText = result;
    
}




window.addEventListener("keydown", function(event) {

    console.log(event);
    if(event.key == "Enter"){okPress()}

    //for num
    if(event.key >=0 && event.key <=9){
        num2 += event.key;
        inDisplay.innerText = num2;
    }

    //operator press 
    if(event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/"){
        if(!num2)
            return;
        let opName = event.key;
        // console.log(opName);
        if(num1 && num2 && lastOperator){
            calculation();
        }else{
            result = num2;
        }
        separateVar(opName);
        lastOperator = opName;
        inDisplay.innerText = "0";
        isDecimal=false;
    }

    // backspace
    if(event.key == "Backspace"){
        num2 = num2.slice(0, -1);
        inDisplay.innerText = num2;
    }

    // clear
    if(event.key == "c"){
        num2 = "";
        num1 = "";
        result = "";
        inDisplay.innerText = "";
        outDisplay.innerText = "0";
    }

    //dot event
    if(event.key == "."){
        if(!isDecimal){
            num2+=".";
            isDecimal=true;
        }
    }
    
})

