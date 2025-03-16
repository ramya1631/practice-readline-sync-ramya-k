const readline = require("readline-sync");

// Prompt user for their name and greet them
let userName = readline.question("What's your name? ");
console.log("Hello, " + userName + " Welcome to the JavaScript Quiz!");

// Question 1: Data Types
let q1 = readline.question("What data type is used to store true/false values? ");
console.log("You answered: " + q1);

// Question 2: Number Input
let q2 = readline.questionInt("What is 5 + 3? ");
console.log("You answered: " + q2);

// Question 3: String Operations
let q3 = readline.question("What method is used to find the length of a string? ");
console.log("You answered: " + q3);

// Question 4: Type Conversion
let q4 = readline.question("Which function converts a string to an integer in JavaScript? ");
console.log("You answered: " + q4);

// Question 5: Logical Operators
let q5 = readline.question("What logical operator represents AND in JavaScript? ");
console.log("You answered: " + q5);

// Thank the user
console.log("Thanks for playing, " + userName);