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

let A = document.querySelector('#A');
let B = document.querySelector('#B');
let C = document.querySelector('#C');
let D = document.querySelector('#D');
let E = document.querySelector('#E');

let MR = document.querySelector('#MR');
let M = document.querySelector('#M');

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
plus.addEventListener('click', () => numberDisplay("+"));
minus.addEventListener('click', () => numberDisplay("-"));
divide.addEventListener('click', () => numberDisplay("/"));
multiply.addEventListener('click', () => numberDisplay("*"));

//Add event listener for equals and clear
equals.addEventListener('click', calculate);
clear.addEventListener('click', clearCalc);

//Add bracket event listeners
left_bracket.addEventListener('click', () => numberDisplay('('));
right_bracket.addEventListener('click', () => numberDisplay(')'));

//Mem listeners
A.addEventListener('click', () => {numberDisplay('A')});
B.addEventListener('click', () => {numberDisplay('B')});
C.addEventListener('click', () => {numberDisplay('C')});
D.addEventListener('click', () => {numberDisplay('D')});
E.addEventListener('click', () => {numberDisplay('E')});

M.addEventListener('click', storeMem);


//The mems
let memory = {

}
let toBeStored = 0;

//Store memory in appropriate dictionary
function storeMem(){
    //On first press
    if(toBeStored == 0){
        toBeStored = parseInt(display.innerText);
    } else { //On second press
        memory[display.innerText] = toBeStored;
    }
    display.innerText = "";
}

//Variable to store number and operators[bCounter] for operations
// let prevNums = {
//     0: [],
// };
// let operators = {
//     0: [],
// };
// let bCounter = 0;
// let bTracker = "";

let input = "";

//Store for final equals
// function storeOperator(operator){
//     prevNums[bCounter].push(parseInt(display.innerText));
//     operators[bCounter].push(operator);
//     //Display
//     display.innerText = "";
// }

//Display numbers
function numberDisplay(number){
    display.innerText += number + " ";
}

//Place brackets in priority
// function bracketIncrement(bracket){
//     if(bracket == ")"){
//         prevNums[bCounter].push(parseInt(display.innerText));
//         display.innerText = "";
//     }
//     //Add to tracker
//     bTracker += bracket;
//     //Check if we are going up a bracket or down a bracket
//     if(bTracker == "()"){
//         bTracker = "";
//         bCounter -= 1;
//     } else {
//         //Increment counter
//         bCounter++;
//     }
//     //Create new bracket array
//     if(prevNums[bCounter] == null){
//         prevNums[bCounter] = [];
//         operators[bCounter] = [];
//     }
// }

//Calculations
function calculate(){
    input = display.innerText;
    //Input cleaning for eval function
    let regex = /[A-Z]+\d+/g;
    let mems = input.match(regex);
    if(mems.length > 0){
        for(let i=0;i<mems.length;i++){
            input = input.replace(mems[i], String(memory[mems[i]]));
        }
    }
    display.innerText = eval(input);
    // //Temp for result
    // let result;
    // let bHashLength = Object.keys(prevNums).length;
    // prevNums[bCounter].push(parseInt(display.innerText));
    // //Do nothing if no numbers inputted
    // for(let b=bHashLength-1;b>=0;b--){
    //     let temp;
    //     if(prevNums[b].length != 0){
    //         temp = prevNums[b][0];
    //         for(let i=1;i<prevNums[b].length;i++){
    //             //Choose operator
    //             switch(operators[b][i-1]){
    //                 case "+":
    //                     temp += prevNums[b][i];
    //                     break;
    //                 case "-":
    //                     temp -= prevNums[b][i];
    //                     break;
    //                 case "/":
    //                     temp = temp/prevNums[b][i];
    //                     break;
    //                 case "*":
    //                     temp = temp*prevNums[b][i];
    //                     break;
    //             }
    //         }
    //         console.log(temp);
    //     }
    // }
    // display.innerText= String(result);
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