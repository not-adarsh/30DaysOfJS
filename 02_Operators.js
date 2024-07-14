// Arithmetic Operations
console.log("Arithmetic Operations:");

// Task 1: Add two numbers
let numberOne = 12;
let numberTwo = 13;
console.log("Addition:", numberOne + numberTwo);

// Task 2: Subtract two numbers
console.log("Subtraction:", numberOne - numberTwo);

// Task 3: Multiply two numbers
console.log("Multiplication:", numberOne * numberTwo);

// Task 4: Divide two numbers
numberTwo = 3; // Changing numberTwo for division
console.log("Division:", numberOne / numberTwo);

// Task 5: Find the remainder
numberTwo = 5; // Changing numberTwo for modulus
console.log("Remainder:", numberOne % numberTwo);

// Assignment Operators
console.log("\nAssignment Operators:");

// Task 6: Use += operator
numberOne = 12;
numberOne += 2;
console.log("After +=:", numberOne);

// Task 7: Use -= operator
numberOne = 12;
numberOne -= 2;
console.log("After -=:", numberOne);

// Comparison Operators
console.log("\nComparison Operators:");

// Task 8: Compare using > and 
numberOne = 12;
numberTwo = 2;
console.log("12 > 2:", numberOne > numberTwo);
console.log("12 < 2:", numberOne < numberTwo);

// Task 9: Compare using >= and <=
console.log("12 >= 2:", numberOne >= numberTwo);
console.log("12 <= 2:", numberOne <= numberTwo);

// Task 10: Compare using == and ===
numberOne = "2";
numberTwo = 2;
console.log("'2' == 2:", numberOne == numberTwo);
console.log("'2' === 2:", numberOne === numberTwo);

// Logical Operators
console.log("\nLogical Operators:");

// Task 11: Use && operator
let isLoggedIn = true;
let isAdult = false;
console.log("true && false:", isLoggedIn && isAdult);

// Task 12: Use || operator
console.log("true || false:", isLoggedIn || isAdult);

// Task 13: Use ! operator
console.log("!true:", !isLoggedIn);

// Ternary Operator
console.log("\nTernary Operator:");

// Task 14: Check if a number is positive or negative
let number = 25;
let answer = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log("25 is:", answer);

// Feature Requests
console.log("\nFeature Requests:");

// 1. Arithmetic Operations Script
console.log("Arithmetic Operations Script:");
numberOne = 12;
numberTwo = 13;
console.log("Addition:", numberOne + numberTwo);
console.log("Subtraction:", numberOne - numberTwo);
console.log("Multiplication:", numberOne * numberTwo);
console.log("Division:", numberOne / numberTwo);
console.log("Remainder:", numberOne % numberTwo);

// 2. Comparison and Logical Operators Script
console.log("\nComparison and Logical Operators Script:");
console.log("12 > 13:", numberOne > numberTwo);
console.log("12 < 13:", numberOne < numberTwo);
console.log("12 >= 13:", numberOne >= numberTwo);
console.log("12 <= 13:", numberOne <= numberTwo);
console.log("12 == 13:", numberOne == numberTwo);
console.log("12 === 13:", numberOne === numberTwo);
console.log("12 != 13:", numberOne != numberTwo);
console.log("12 !== 13:", numberOne !== numberTwo);
console.log("12 !== 13 && 12 <= 13:", numberOne !== numberTwo && numberOne <= numberTwo);
console.log("12 !== 13 || 12 <= 13:", numberOne !== numberTwo || numberOne <= numberTwo);
console.log("!(12 !== 13):", !(numberOne !== numberTwo));

// 3. Ternary Operator Script
console.log("\nTernary Operator Script:");
number = 25;
answer = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log("25 is:", answer);