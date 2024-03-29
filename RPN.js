//Get all buttons
let zero = document.querySelector('#num0');
let one = document.querySelector('#num1');
let two = document.querySelector('#num2');
let three = document.querySelector('#num3');
let four = document.querySelector('#num4');
let five = document.querySelector('#num5');
let six = document.querySelector('#num6');
let seven = document.querySelector('#num7');
let eight = document.querySelector('#num8');
let nine = document.querySelector('#num9');

let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');

let equals = document.querySelector('#equals');

let clear = document.querySelector('#clear');

//Get display
let display = document.querySelector('.display')

//Add event listeners to numbers
zero.addEventListener('click', () => numberDisplay(0));
one.addEventListener('click', () => numberDisplay(1));
two.addEventListener('click', () => numberDisplay(2));
three.addEventListener('click', () => numberDisplay(3));
four.addEventListener('click', () => numberDisplay(4));
five.addEventListener('click', () => numberDisplay(5));
six.addEventListener('click', () => numberDisplay(6));
seven.addEventListener('click', () => numberDisplay(7));
eight.addEventListener('click', () => numberDisplay(8));
nine.addEventListener('click', () => numberDisplay(9));

//Add event listeners to operators
plus.addEventListener('click', () => calculate("plus"));
minus.addEventListener('click', () => calculate("minus"));
divide.addEventListener('click', () => calculate("divide"));
multiply.addEventListener('click', () => calculate("multiply"));

//Add event listener for equals and clear
equals.addEventListener('click', store);
clear.addEventListener('click', clearCalc);

//Clear flag
let finished = false;

//Display numbers
function numberDisplay(number){
    if(finished){
        prevNums.push(parseInt(display.innerText));
        display.innerText = "";
        finished = false;
    }
    display.innerText += number;
}

//Variable to store number and operators for operations
let prevNums = [];

//Store for final equals
function store(){
    prevNums.push(parseInt(display.innerText));
    //Clear display
    display.innerText = "";
}

//Calculations
function calculate(operator){
    //Temp for result
    let result = parseInt(display.innerText);
    //Do nothing if no numbers inputted
    if(prevNums.length != 0){
        // prevNums.push(parseInt(display.innerText));
        //Choose operator
        switch(operator){
            case "plus":
                result = result + prevNums[prevNums.length-1];
                break;
            case "minus":
                result -= prevNums[prevNums.length-1];
                break;
            case "divide":
                result = result/prevNums[prevNums.length-1];
                break;
            case "multiply":
                result = result*prevNums[prevNums.length-1];
                break;
        }
        //Pop from the stack
        prevNums.splice(prevNums.length-1, 1);
        display.innerText= String(result);
        finished = true;
    }
}

//Clear display and queues
function clearCalc(){
    display.innerText = "";
    prevNums = [];
}