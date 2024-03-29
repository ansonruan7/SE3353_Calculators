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

let left_bracket = document.querySelector('#left-bracket');
let right_bracket = document.querySelector('#right-bracket');

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

//Add event listeners to operators[bCounter]
plus.addEventListener('click', () => storeOperator("+"));
minus.addEventListener('click', () => storeOperator("-"));
divide.addEventListener('click', () => storeOperator("/"));
multiply.addEventListener('click', () => storeOperator("*"));

//Add event listener for equals and clear
equals.addEventListener('click', calculate);
clear.addEventListener('click', clearCalc);

//Add bracket event listeners
left_bracket.addEventListener('click', () => bracketIncrement('('));
right_bracket.addEventListener('click', () => bracketIncrement(')'));

//Variable to store number and operators[bCounter] for operations
let prevNums = {
    0: [],
};
let operators = {
    0: [],
};
let bCounter = 0;
let bTracker = "";

//Store for final equals
function storeOperator(operator){
    prevNums[bCounter].push(parseInt(display.innerText));
    operators[bCounter].push(operator);
    //Display
    display.innerText = "";
}

//Display numbers
function numberDisplay(number){
    display.innerText += number;
}

//Place brackets in priority
function bracketIncrement(bracket){
    if(bracket == ")"){
        prevNums[bCounter].push(parseInt(display.innerText));
        display.innerText = "";
    }
    //Add to tracker
    bTracker += bracket;
    //Check if we are going up a bracket or down a bracket
    if(bTracker == "()"){
        bTracker = "";
        bCounter -= 1;
    } else {
        //Increment counter
        bCounter++;
    }
    //Create new bracket array
    if(prevNums[bCounter] == null){
        prevNums[bCounter] = [];
        operators[bCounter] = [];
    }
}

//Calculations
function calculate(){
    console.log(JSON.stringify(prevNums) + '\n' + JSON.stringify(operators));
    //Temp for result
    let result;
    //Do nothing if no numbers inputted
    for(let b in prevNums){
        let temp;
        if(prevNums[b].length != 0){
            temp = prevNums[b][0];
            prevNums[b].push(parseInt(display.innerText));
            for(let i=1;i<prevNums[b].length;i++){
                //Choose operator
                switch(operators[b][i-1]){
                    case "+":
                        temp += prevNums[b][i];
                        break;
                    case "-":
                        temp -= prevNums[b][i];
                        break;
                    case "/":
                        temp = temp/prevNums[b][i];
                        break;
                    case "*":
                        temp = temp*prevNums[b][i];
                        break;
                }
            }
        }
    }
    display.innerText= String(result);
}

//Clear display and queues
function clearCalc(){
    display.innerText = "";
    prevNums = {
        0: [],
    };
    operators = {
        0: [],
    };
}