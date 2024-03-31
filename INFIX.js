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

let MR = document.querySelector('.left-bracket');
let M = document.querySelector('.right-bracket');

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
plus.addEventListener('click', () => storeOperator("plus"));
minus.addEventListener('click', () => storeOperator("minus"));
divide.addEventListener('click', () => storeOperator("divide"));
multiply.addEventListener('click', () => storeOperator("multiply"));

//Add event listener for equals and clear
equals.addEventListener('click', calculate);
clear.addEventListener('click', clearCalc);

//Add event for memory
let memory;
MR.addEventListener('click', () => {
    memory = display.innerText;
    display.innerText = "";
})
M.addEventListener('click', () => {
    display.innerText = memory;
})

//Display numbers
function numberDisplay(number){
    display.innerText += number;
}

//Variable to store number and operators for operations
let prevNums = [];
let operators = [];

//Store for final equals
function storeOperator(operator){
    prevNums.push(parseInt(display.innerText));
    operators.push(operator);
    //Clear display
    display.innerText = "";
}

//Calculations
function calculate(){
    //Temp for result
    let result;
    //Do nothing if no numbers inputted
    if(prevNums.length != 0){
        result = prevNums[0];
        prevNums.push(parseInt(display.innerText));
        for(let i=1;i<prevNums.length;i++){
            //Choose operator
            switch(operators[i-1]){
                case "plus":
                    result = result + prevNums[i];
                    break;
                case "minus":
                    result -= prevNums[i];
                    break;
                case "divide":
                    result = result/prevNums[i];
                    break;
                case "multiply":
                    result = result*prevNums[i];
                    break;
            }
        }
        display.innerText= String(result);
    }
}

//Clear display and queues
function clearCalc(){
    display.innerText = "";
    prevNums = [];
    operators = [];
}