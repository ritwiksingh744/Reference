class Age{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    findAge(){
        let date = new Date();
        let year = date.getFullYear()
        return year - this.age;
    }
}

let n1 = document.getElementById("name").value;
let age = document.getElementById("ageInt").value;
const message = document.getElementById("para-1");
message.innerHTML = "";

try{
    if (age == "")
        throw "empty please re-enter your dob.";
    if (isNaN(age))
        throw "DOB you entered is not a number. <br /> please re-enter your dob";
}
catch (err){
    message.innerHTML = err;
}
finally{
    let calAge = new Age(n1, Number(age));
    message.innerHTML = "Hi "+n1+"! you are "+calAge.findAge()+" year old.";
}