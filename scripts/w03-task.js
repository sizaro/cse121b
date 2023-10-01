function add(num1, num2){
    return num1+num2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);


}
addButtonElement = document.querySelector("#addNumbers");
addButtonElement.addEventListener("click", addNumbers);

const subtract = function sub(num1, num2){
    return num1-num2;
}

const subtractNumbers = function subNumbers(){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value =subtract(subtract1, subtract2);

}
subButtonElement = document.querySelector("#subtractNumbers");
subButtonElement.addEventListener("click", subtractNumbers);

const multiply = (num1, num2) => num1*num2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
}

multButtonElement = document.querySelector("#multiplyNumbers");
multButtonElement.addEventListener("click", multiplyNumbers);

const divide = (num1, num2) => num1/num2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

divButtonElement = document.querySelector("#divideNumbers");
divButtonElement.addEventListener("click", divideNumbers);

const currentDate = new Date();

const currentYear = currentDate.getFullYear();

document.querySelector("#year").innerHTML = currentYear;

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById("array").innerHTML = numbersArray;

let odds = numbersArray.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML = odds

let evens = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evens

document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number)

document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number*2);

document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.reduce((sum, number) => sum + number)/ numbersArray.length;
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(num => num * 2).reduce((sum, num) => sum + num, 0);
