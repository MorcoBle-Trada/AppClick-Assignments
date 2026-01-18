/*              Section A: Javascript Conditions

  1. JavaScript conditional statements are used to make decisions in a program based on given conditions. 
    They control the flow of execution by running different code blocks depending on whether a condition is true or false.
    Types of Conditional Statements
    if statement
    else if statement
    else statement
    switch statement
    ternary (conditional) operator
    One Example Below*/

let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


/* 2. The if statement checks a condition written inside parenthese (). If the condition    evaluates to true, the code inside {} is executed; otherwise, it is skipped.
    The else if statement is used to test multiple conditions in sequence. It executes the first block whose condition evaluates to true.Allows checking more than two conditions evaluated from top to bottom until a true condition is found, while else statement runs when none of the conditions are true                */

//  3. Write a JavaScript program that checks if a number is positive, negative, or zero.


let num = 5;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

/* 4.  Switch Statement 
The switch statement evaluates an expression and executes the matching case block based on its value. It provides a clean and readable way to handle multiple conditions for a single variable.
It is preferred over if-else when:
One variable needs to be compared against multiple fixed values.
It also improves readability compared to long if-else chains.*/


// 5. The following Code Output
if (10 > 5) {
    console.log('Yes');
} else {
    console.log('No');
}

//The output from the console would be Yes because the condition (10 > 5) is true, so the if block runs.


/*           Section B: Javascript Functions 

6.Function in Javascript 
Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize and reuse code. It can take inputs, perform actions, and return outputs.
  

7. A simple function that adds two numbers and returns the result.*/

function addNums(a, b) {
    return a + b;
}
console.log(addNums(5, 6));


//8. A Function that checks if a number is odd or Even.

function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even Number";
    } else {
        return "Odd Number";
    }
}
console.log(checkEvenOrOdd(5));


/* 9. What are Parameters in a function?
Parameters in a funtion are variables listed inside the parentheses of a function definition. They receive an argument value  when the function is called.
 
  
10.   No 7 question to arrow funcction                         */

const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 6));

// 8 To Tenary Operators;

const checkEvenOdd = num => num % 2 === 0 ? "Even Number" : "Odd Number";
console.log(checkEvenOdd(9));




//              Section C 
//          Part A – If and Else

// 1. Write a JavaScript program that compares two numbers and prints the greater one.

let num1 = 10;
let num2 = 10;

if (num1 > num2) {
    console.log(`${num1} is grater`);
} else if (num2 > num1) {
    console.log(`${num2} is greater`);
} else {
    console.log("Equal")
}

/*2.	Ask the user for their age and:
    If age is less than 18 → print "You are a minor."
    If age is between 18 and 59 → print "You are an adult."
    Otherwise → print "You are a senior citizen."*/

function checkAge(agE) {
    if (agE < 18) {
        return "You are a minor.";
    } else if (agE <= 59) {
        return "You are an adult.";
    } else {
        return "You are a senior Citizen.";
    }
}

let agE = Number(prompt("What is your age?"));
console.log(checkAge(agE));


//3. Create a program that checks whether a number is even or odd

let number = 20;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

/*         Part B – If...Else If Ladder

4.	Write a program that assigns a grade based on score:
o	90–100 → “A”
o	80–89 → “B”
o	70–79 → “C”
o	60–69 → “D”
    Below 60 → “F”                                                   */

let score = 95;

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}


/*            Part C – Switch Statement
5. Use a switch statement to print the day of the week based on a number (1–7).
Example: 1 → Monday, 7 → Sunday.                         */

let dayNumber = 6;

if (dayNumber < 1 || dayNumber > 7) {
    console.log("Invalid day number. Enter a number between 1 and 7.");
} else {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
    }
}



/* 6.	Create a program that takes a fruit name and prints:
o	"Apple is red"
o	"Banana is yellow"
o	"Orange is orange"
o	"Unknown fruit" if it’s not listed.*/



let fruit = "Apple";

switch (fruit.toLowerCase()) {
    case "apple":
        console.log("Apple is red");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    case "orange":
        console.log("Orange is orange");
        break;
    default:
        console.log("Unknown fruit");
}

/*            Part D  Ternary Operator
  
  7.	Use a ternary operator to check:
        o	If a number is greater than 10 → print "Big number"
        o	Else → print "Small number"                        */

let numb = 18;
const result = (numb > 10) ? "Big number" : "Small number"

console.log(result);


/* 8. Write a ternary that checks if a year is leap year or not.
(Hint: leap year if divisible by 4 and not by 100, unless also divisible by 400)               */


let year = 2025;
const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not a Leap Year";


console.log(leapYear);



//                                         Part E
//Write a small ATM simulation: If balance >= amount, print "Withdrawal successful!" Else → "Insufficient funds!"

let accountBalance = 300;
let withdrawAmount = 500;

if (accountBalance >= withdrawAmount) {
    console.log("Withdrawal successful");
} else {
    console.log("Insufficient funds");
}

/*  10.	Use a switch to simulate traffic light behavior:
•	"red" → "Stop"
•	"yellow" → "Get ready"
•	"green" → "Go"
•	Default → "Invalid color"*/

let light = "red";

switch (light) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("invalid color");
}