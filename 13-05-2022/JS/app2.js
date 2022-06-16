

function checkVoter(){
    const message =document.getElementById("p-2");
    message.innerHTML = "";
    let age = document.getElementById("checkV").value;
    try{
        if (age=="")
            throw "empty";
        if(isNaN(age))
            throw "Not a Number.";
        age = Number(age);
        if(age < 18)
            throw "You are not eligible for Voting!!";
        if(age >= 18)
            throw "Greetings!! You are eligible for Voting!";
    }
    catch (err){
        message.innerHTML = err;
    }
    finally{
        document.getElementById("chekV") = "";
    }

}