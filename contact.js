
/*function clickFunction() {
    // Select element and set attribute
    document.getElementById("").setAttribute("action", "action-name");
}*/
/*
alert('Hey, welc');
console.log(alert('Congratulations!!!'));*/
function clickFunction() {
    // Select element and get attribute       
    let button = document.getElementsByTagName("h2")[0].getAttribute("class");
    document.getElementById("text").innerHTML = button;
}
var globalVar = "Congrats"; //global variable           
function globalFunc() {
    console.log(globalVar); //global variable , result  is "Congrats"
}
globalFunc();
