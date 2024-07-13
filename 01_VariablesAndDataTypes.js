// Day 1: Variables and Data Types

// There are three different ways to define variables in JS

// 1. var : older method of defining the variables in JS, the problem with var is that it doesn't implement block-level scope
var num = 12; // Declare a variable using var, assign it a number
console.log(num); // Log the value to the console

// 2. let : modern method for declaring variables that will change
let name = "ady"; // Declare a variable using let, assign it a string
console.log(name); // Log the value to the console

// 3. const : used for constant values that cannot be reassigned
const isLoggedIn = false; // Declare a variable using const, assign it a boolean value
console.log(isLoggedIn); // Log the value to the console

// Data Types
let age = 18; // Number
let isAdult = true; // Boolean
let loginData = { // Object
    username: "adyLovesCoding",
    password: "JSis💖"
};
let lastLoginTime = ['mon', 'sun', 'thurs']; // Array

// Log each variable's type using the typeof operator
console.log(typeof name, name); // string ady
console.log(typeof age, age); // number 18
console.log(typeof isAdult, isAdult); // boolean true
console.log(typeof loginData, loginData); // object { username: "adyLovesCoding", password: "JSis💖" }
console.log(typeof lastLoginTime, lastLoginTime); // object ['mon', 'sun', 'thurs']

// Reassigning Variables
let anotherName = "ady";
console.log(anotherName); // Log initial value to the console
anotherName = "adarsh"; // Reassign a new value
console.log(anotherName); // Log the new value to the console

// Understanding const
const pi = 3.14;
// Uncommenting the following line will cause an error because const variables cannot be reassigned
// pi = 9.97; // TypeError: Assignment to constant variable

// Feature Request: Variable Types Console Log
console.log(typeof name, name); // string ady
console.log(typeof age, age); // number 18
console.log(typeof isAdult, isAdult); // boolean true
console.log(typeof loginData, loginData); // object { username: "adyLovesCoding", password: "JSis💖" }
console.log(typeof lastLoginTime, lastLoginTime); // object ['mon', 'sun', 'thurs']

// Reassignment Demo: Demonstrates the difference in behavior between let and const
let demoName = "ady";
demoName = "adarsh"; // Reassignment works with let

const demoPi = 3.14;
// Uncommenting the following line will cause an error because const variables cannot be reassigned
// demoPi = 9.97; // TypeError: Assignment to constant variable

// Achievement:
// By the end of these activities, you will:
// - Know how to declare variables using var, let, and const.
// - Understand the different data types in JavaScript.
// - Be able to use the typeof operator to identify the data type of a variable.
// - Understand the concept of variable reassignment and the immutability of const variables.
