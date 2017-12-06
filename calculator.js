// VARIABLES
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let add = document.getElementById("addStuff");
let subtract = document.getElementById("subtractStuff");
let multiply = document.getElementById("multiplyStuff");
let divide = document.getElementById("divideStuff");
// MATH FUNCTIONS
let addition = function(num1,num2){
    return num1 + num2;
}
let subtraction = function(num1,num2){
    return num1 - num2;
}
let multiplication = function(num1,num2){
    return num1 * num2;
}
let division = function(num1,num2){
    return num1 / num2;
}

function calculate (num1, num2, func){
    return func(num1,num2);
};

// FUNCTION TO PRINT RESULT TO DOM
function printToDOM(value){
    document.getElementById("output").innerHTML = value;
}
// FUNCTION FOR ADDITION TO DOM
add.addEventListener("click", function(){
    let result = calculate(+num1.value,+num2.value,addition);
    printToDOM(result);
})
// FUNCTION FOR SUBTRACTION TO DOM
subtract.addEventListener("click", function(){
    let result = calculate(+num1.value,+num2.value,subtraction);
    printToDOM(result);
})
// FUNCTION FOR MULTIPLICATION TO DOM
multiply.addEventListener("click", function(){
    let result = calculate(+num1.value,+num2.value,multiplication);
    printToDOM(result);
})
// FUNCTION FOR DIVISION TO DOM
divide.addEventListener("click", function(){
    let result = calculate(+num1.value,+num2.value,division);
    printToDOM(result);
})