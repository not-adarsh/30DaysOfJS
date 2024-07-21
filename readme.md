# 30 days of JS

## Day 1 - 13/07/2024

### Variables and Data Types

- There are three different ways to define variables in JS
  - var : older method of defining the variables in JS, the problem with variables was that it doesn't implemented the scopes
  - let : modern method of implementing the values that will change
  - const : as name says constant values
- Understand the different data types in JavaScript:
  - Number: Numeric values e.g., `18`
  - String: Textual data e.g., `"ady"`
  - Boolean: True or false values e.g., `true`
  - Object: Collection of key-value pairs e.g.,
  ```js
  {
      username: "adyLovesCoding",
      password: "JSis💖",
  }
  ```
  - Array: Ordered list of values e.g.,
  ```js
  ["mon", "sun", "thurs"];
  ```

### Tasks:

#### Variable Declaration

- Task 1: Declare a variable using var, assign it a number, and log the value to the console ✅
- Task 2: Declare a variable using let, assign it a string, and log the value to the console ✅

```js
var num = 12
console.log(num)
let name = "ady
console.log(name)
```

#### Constant Declaration

- Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console ✅

```js
const isLoggedIn = false;
console.log(isLoggedIn);
```

#### Data Types

- Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator ✅

```js
let name = "ady";
let age = 18;
let isAdult = true;
let loginData = {
  username: "adyLovesCoding",
  password: "JSis💖",
};
let lastLoginTime = ["mon", "sun", "thurs"];
console.log(typeof name);
console.log(typeof age);
console.log(typeof isAdult);
console.log(typeof loginData);
console.log(typeof lastLoginTime);
```

#### Reassigning Variables

- Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console ✅

```js
let name = "ady";
console.log(name);
name = "adarsh";
console.log(name);
```

#### Understanding const

Task 6: Try reassigning a variable declared with const and observe the error ✅

```js
const pi = 3.14;
pi = 9.97;
```

```bash
pi = 9.96
   ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (index.js:2:4)
    at Module._compile (node:internal/modules/cjs/loader:1467:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1551:10)
    at Module.load (node:internal/modules/cjs/loader:1282:32)
    at Module._load (node:internal/modules/cjs/loader:1098:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:215:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:5)
    at node:internal/main/run_main_module:30:49

Node.js v22.4.0
```

### Feature Request:

- Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console ✅

```js
let name = "ady";
let age = 18;
let isAdult = true;
let loginData = {
  username: "adyLovesCoding",
  password: "JSis💖",
};
let lastLoginTime = ["mon", "sun", "thurs"];
console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof isAdult, isAdult);
console.log(typeof loginData, loginData);
console.log(typeof lastLoginTime, lastLoginTime);
```

- Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment✅

```js
let name = "ady";
name = "adarsh";
const pi = 3.14;
pi = 9.97;
```

```bash
pi = 9.96
   ^

TypeError: Assignment to constant variable.

Node.js v22.4.0
```

### Achievement:

By the end of these activities, you will:

- Know how to declare variables using var, let, and const.
- Understand the different data types in JavaScript.
- Be able to use the typeof operator to identify the data type of a variable.
- Understand the concept of variable reassignment and the immutability of const variables.

## Day 2 - 14/07/2024

### Operators

#### Arithmetic Operators

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Modulus `%` - Used to get the remainder

#### Assignment Operators

- Addition assignment `+=`
- Subtraction assignment `-=`
- Multiplication assignment `*=`
- Division assignment `/=`
- Modulo assignment `%=`

#### Comparison Operators

- Greater than `>`
- Less than `<`
- Greater than or equal to `>=`
- Less than or equal to `<=`
- Equality `==`
- Unequality `!=`
- Strict equality `===`
- Strict unequality `!==`

#### Logical Operators

- AND `&&`
- OR `||`
- NOT `!`

#### Ternary Operator

- Syntax: `condition ? expr1 : expr2`

### Tasks:

#### Arithmetic Operations

- Task 1: Write a program to add two numbers and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 13;
console.log(numberOne + numberTwo);
```

- Task 2: Write a program to subtract two numbers and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 13;
console.log(numberOne - numberTwo);
```

- Task 3: Write a program to multiply two numbers and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 13;
console.log(numberOne * numberTwo);
```

- Task 4: Write a program to divide two numbers and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 3;
console.log(numberOne / numberTwo);
```

- Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 5;
console.log(numberOne % numberTwo);
```

#### Assignment Operators

- Task 6: Use the += operator to add a number to a variable and log the result to the console ✅

```js
let numberOne = 12;
numberOne += 2;
console.log(numberOne);
```

- Task 7: Use the -= operator to subtract a number from a variable and log the result to the console✅

```js
let numberOne = 12;
numberOne -= 2;
console.log(numberOne);
```

#### Comparison Operators

- Task 8: Write a program to compare two numbers using > and < and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 2;
console.log(numberOne > numberTwo);
console.log(numberOne < numberTwo);
```

- Task 9: Write a program to compare two numbers using >= and <= and log the result to the console ✅

```js
let numberOne = 12;
let numberTwo = 2;
console.log(numberOne >= numberTwo);
console.log(numberOne <= numberTwo);
```

- Task 10: Write a program to compare two numbers using == and === and log the result to the console ✅

```js
let numberOne = "2";
let numberTwo = 2;
console.log(numberOne == numberTwo);
console.log(numberOne === numberTwo);
```

#### Logical Operators

- Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console ✅

```js
let isLoggedIn = true;
let isAdult = false;
console.log(isLoggedIn && isAdult);
```

- Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console ✅

```js
let isLoggedIn = true;
let isAdult = false;
console.log(isLoggedIn || isAdult);
```

- Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console ✅

```js
let isLoggedIn = true;
console.log(!isLoggedIn);
```

#### Ternary Operator

- Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console ✅

```js
let number = 25;
let answer = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(answer);
```

### Feature Request:

- Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results ✅

```js
let numberOne = 12;
let numberTwo = 13;
console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne % numberTwo);
```

- Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results ✅

```js
let numberOne = 12;
let numberTwo = 13;
console.log(numberOne > numberTwo);
console.log(numberOne < numberTwo);
console.log(numberOne >= numberTwo);
console.log(numberOne <= numberTwo);
console.log(numberOne == numberTwo);
console.log(numberOne === numberTwo);
console.log(numberOne != numberTwo);
console.log(numberOne !== numberTwo);
console.log(numberOne !== numberTwo && numberOne <= numberTwo);
console.log(numberOne !== numberTwo || numberOne <= numberTwo);
console.log(!numberOne !== numberTwo);
```

- Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result

```js
let number = 25;
let answer = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
console.log(answer);
```

### Achievement:

By the end of these activities, students will:

- Understand and use arithmetic operators to perform basic calculations.
- Use assignment operators to modify variable values.
- Compare values using comparison operators.
- Combine conditions using logical operators.
- Use the ternary operator for concise conditional expressions.

## Day 3 - 15/07/2024

### Control Structures

- If-Else Statements

  - Used for **conditional execution**

  ````js
  if (condition) {
  // code if true
  } else {
  // code if false
  }```
  - Can include multiple else if blocks

  ````

- Nested If-Else

  - If-else statements inside other if-else blocks
  - Useful for checking multiple conditions

- Switch Case
  - Alternative to multiple if-else statements
  - Good for checking a variable against specific values
  - Remember to use `break` statements in switch cases to prevent fall-through
  ```js
  switch (variable) {
    case value1:
      // code
      break;
    case value2:
      // code
      break;
    default:
    // code
  }
  ```
- Ternary Operator
  - Shorthand for simple if-else statements
  ```js
  condition ? expressionIfTrue : expressionIfFalse;
  ```
- Combining Conditions
  - Use logical operators: && (AND), || (OR), ! (NOT)
  - Allows for more complex condition checking

### Tasks:

#### If-Else Statements

- Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console ✅

```js
let number = 24;
if (number == 0) {
  console.log("Zero");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}
```

- Task 2: Write a program to check if a person is eligible to vote `age >= 18` and log the result to the console ✅

```js
let age = 21;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
```

#### Nested If-Else Statements

- Task 3: Write a program to find the largest of three numbers using nested if-else statements ✅

```js
let a = 2;
let b = 4;
let c = 6;
if (a > b) {
  if (a > c) {
    console.log(a);
  } else {
    console.log(c);
  }
} else {
  if (b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
```

#### Switch Case

- Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console ✅

```js
let dayNumber = 2;
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
    break;
  default:
    console.log("Invaild Day Number");
}
```

- Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console ✅

```js
let marks = 94;
switch (marks) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 80:
    console.log("B");
    break;
  case marks >= 60:
    console.log("C");
    break;
  case marks >= 40:
    console.log("D");
    break;
  case marks < 40:
    console.log("F");
    break;
  default:
    console.log("Invaid Marks");
}
```

#### Conditional (Ternary) Operator

- Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console ✅

```js
let number = 3;
const answer = number % 2 == 0 ? "Even" : "Odd";
console.log(answer);
```

#### Combining Conditions

- Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console ✅

```js
let year = 2004;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
```

### Feature Request:

- Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result ✅

```js
let number = 24;
if (number == 0) {
  console.log("Zero");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}
```

- Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result ✅

```js
let age = 21;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
```

- Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name ✅

```js
let dayNumber = 2;
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
    break;
  default:
    console.log("Invaild Day Number");
}
```

- Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade ✅

```js
let marks = 94;
switch (marks) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 80:
    console.log("B");
    break;
  case marks >= 60:
    console.log("C");
    break;
  case marks >= 40:
    console.log("D");
    break;
  case marks < 40:
    console.log("F");
    break;
  default:
    console.log("Invaid Marks");
}
```

- Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result ✅

```js
let year = 2004;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
```

### Achievement:

By the end of these activities, students will:

- Implement and understand basic if-else control flow.
- Use nested if-else statements to handle multiple conditions.
- Utilize switch cases for control flow based on specific values.
- Apply the ternary operator for concise condition checking.
- Combine multiple conditions to solve more complex problems.

## Day 4 - 16/07/2024

### Loops

- For Loop

  - Used for iterating a specific number of times

  ```js
  for (initialization; condition; updation) {
    // code
  }
  ```

- While Loop

  - Executes as long as the condition is true

  ```js
  while (condition) {
    // code
  }
  ```

- Do...While Loop

  - Always executes at least once before checking the condition

  ```js
  do {
    // code
  } while (condition);
  ```

- Nested Loops

  - Used for multi-dimensional iterations

  ```js
  loops{
    // code
    loops{
      // code
    }
    // code
  }
  ```

- Loop Control Statements

  - `continue`: Skips the rest of the current iteration
  - `break`: Exits the loop entirely

### Tasks:

#### For Loop

- Task 1: Write a program to print numbers from 1 to 10 using a for loop ✅

```js
for (let number = 1; i <= 10; i++) {
  console.log(number);
}
```

- Task 2: Write a program to print the multiplication table of 5 using a for loop ✅

```js
let number = 5;
for (let multiply = 1; multiply <= 10; multiply++) {
  console.log(`${number} x ${multiply} = ${number * multiply}`);
}
```

#### While Loop

- Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop ✅

```js
let number = 1;
let answer = 0;
while (number <= 10) {
  answer += number++;
}
console.log(answer);
```

- Task 4: Write a program to print numbers from 10 to 1 using a while loop ✅

```js
let number = 10;
while (number >= 1) {
  console.log(number--);
}
```

#### Do...While Loop

- Task 5: Write a program to print numbers from 1 to 5 using a do...while loop ✅

```js
let number = 1;
do {
  console.log(number++);
} while (number <= 5);
```

- Task 6: Write a program to calculate the factorial of a number using a do...while loop ✅

```js
let answer = 1;
let number = 5;
do {
  answer *= number--;
} while (number >= 1);
console.log(answer);
```

#### Nested Loops

- Task 7: Write a program to print a pattern using nested for loops:
  (ignore color) ✅
  ```bash
  *
  * *
  * * *
  * * * *
  * * * * *
  * * * * * *
  ```
  ```js
  for (let i = 1; i <= 6; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += "* ";
    }
    console.log(string);
  }
  ```

#### Loop Control Statements

- Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement ✅

```js
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}
```

- Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement ✅

```js
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
```

### Feature Request:

- Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop ✅

```js
for (let number = 1; i <= 10; i++) {
  console.log(number);
}
let number = 1;
while (number <= 10) {
  console.log(number++);
}
```

- Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop ✅

```js
let number = 5;
for (let multiply = 1; multiply <= 10; multiply++) {
  console.log(`${number} x ${multiply} = ${number * multiply}`);
}
```

- Pattern Printing Script: Write a script that prints a pattern of stars using nested loops ✅

```js
for (let i = 1; i <= 6; i++) {
  let string = "";
  for (let j = 1; j <= i; j++) {
    string += "* ";
  }
  console.log(string);
}
```

- Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop ✅

```js
let number = 1;
let answer = 0;
while (number <= 10) {
  answer += number++;
}
console.log(answer);
```

- Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop ✅

```js
let answer = 1;
let number = 5;
do {
  answer *= number--;
} while (number >= 1);
console.log(answer);
```

### Achievement:

By the end of these activities, students will:

- Understand and use for loops to iterate over a sequence of numbers.
- Utilize while loops for iteration based on a condition.
- Apply do...while loops to ensure the loop body is executed at least once.
- Implement nested loops to solve more complex problems.
- Use loop control statements (break and continue) to control the flow of loops.

## Day 5 - 17/07/2024

### Functions

- **Function declaration**: Define reusable code blocks (e.g., `function isEven(){}`)

- **Function expression**: Assign functions to variables (e.g., `const max = function(){}`)

- **Arrow functions**: Concise syntax for short functions (e.g., `const sum = () => {}`)

- **Parameters**: Input values for functions (e.g., `function square(num){}`)

- **Default parameters**: Fallback values if argument is omitted (e.g., `(name, age = 1) => {}`)

- **Return statement**: Send back function results (e.g., `return num * num;`)

- **Higher-order functions**: Functions that operate on other functions

### Tasks:

#### Function Declaration

- Task 1: Write a function to check if a number is even or odd and log the result to the console ✅

```js
function isEven(num) {
  console.log(num % 2 === 0 ? "Even" : "Odd");
}
```

- Task 2: Write a function to calculate the square of a number and return the result ✅

```js
function square(num) {
  return num * num;
}
```

#### Function Expression

- Task 3: Write a function expression to find the maximum of two numbers and log the result to the console ✅

```js
function max(numberOne, numberTwo) {
  return numberOne > numberTwo
    ? numberOne
    : numberOne != numberTwo
    ? numberTwo
    : "Both are Equal";
}
```

- Task 4: Write a function expression to concatenate two strings and return the result ✅

```js
function concatenate(stringOne, stringTwo) {
  return stringOne + stringTwo;
}
```

#### Arrow Functions

- Task 5: Write an arrow function to calculate the sum of two numbers and return the result ✅

```js
const sum = (numberOne, numberTwo) => numberOne + numberTwo;
```

- Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value ✅

```js
const find = (character, string) => string.indexOf(character) != -1;
```

#### Function Parameters and Default Values

- Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter ✅

```js
const myFunction = (numberOne, numberTwo = 1) => numberOne * numberTwo;
```

- Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age ✅

```js
const greetings = (name, age = 1) => `Hello ${name}, you are ${age} years old`;
```

#### Higher-Order Functions

- Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times ✅

```js
const repeatFunction = (callback, times) => {
  for (let i = 0; i < times; i++) {
    callback();
  }
};
```

- Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result ✅

```js
const composition = (functionOne, functionTwo, initialValue) =>
  functionTwo(functionOne(initialValue));
```

### Feature Request:

- Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result ✅

```js
function isEven(num) {
  console.log(num % 2 === 0 ? "Even" : "Odd");
}
```

- Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result ✅

```js
function square(num) {
  return num * num;
}
```

- Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result ✅

```js
function concatenate(stringOne, stringTwo) {
  return stringOne + stringTwo;
}
```

- Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result ✅

```js
const sum = (numberOne, numberTwo) => numberOne + numberTwo;
```

- Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times ✅

```js
function concatenate(stringOne, stringTwo) {
  return stringOne + stringTwo;
}
```

### Achievement:

By the end of these activities, students will:

- Understand and define functions using function declarations, expressions, and arrow functions.
- Use function parameters and default values effectively.
- Create and utilize higher-order functions.
- Apply functions to solve common problems and perform calculations.
- Enhance code reusability and organization using functions.

## Day 6 - 18/07/2024

### Arrays

# Arrays in JavaScript - Day 6

- Array Creation and Access

  - Create arrays using square brackets `[]`
  - Access elements using index (starts at `0`)
  - Get last element: `array[array.length - 1]`

- Basic Array Methods

  - `push()`: Add element to end
  - `pop():` Remove last element
  - `shift()`: Remove first element
  - `unshift()`: Add element to beginning

- Intermediate Array Methods

  - `map()`: Create new array by transforming each element
  - `filter()`: Create new array with elements meeting a condition
  - `reduce()`: Aggregate array elements into a single value

- Array Iteration

  - `for` loop: Traditional iteration
  - `forEach()`: Method for iterating over each element

- Multi-dimensional Arrays
  - Create using nested arrays
  - Access elements using multiple indices: `array[row][column]`

### Tasks:

#### Array Creation and Access

- Task 1: Create an array of numbers from 1 to 5 and log the array to the console ✅

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
```

- Task 2: Access the first and last elements of the array and log them to the console ✅

```js
const numbers = [1, 2, 3, 4, 5];
console.log(
  `first element : ${numbers[0]}, last element : ${numbers[numbers.length - 1]}`
);
```

#### Array Methods (Basic)

- Task 3: Use the push method to add a new number to the end of the array and log the updated array ✅

```js
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
```

- Task 4: Use the pop method to remove the last element from the array and log the updated array ✅

```js
const numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
```

- Task 5: Use the shift method to remove the first element from the array and log the updated array ✅

```js
const numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);
```

- Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array ✅

```js
const numbers = [1, 2, 3, 4, 5];
numbers.unshift(0);
console.log(numbers);
```

#### Array Methods (Intermediate)

- Task 7: Use the map method to create a new array where each number is doubled and log the new array ✅

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((element) => element * 2);
console.log(doubled);
```

- Task 8: Use the filter method to create a new array with only even numbers and log the new array ✅

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((element) => element % 2 == 0);
console.log(evenNumbers);
```

- Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result ✅

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((sum, element) => (sum += element), 0);
console.log(sum);
```

#### Array Iteration

- Task 10: Use a for loop to iterate over the array and log each element to the console ✅

```js
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

- Task 11: Use the forEach method to iterate over the array and log each element to the console ✅

```js
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number));
```

#### Multi-dimensional Arrays

- Task 12: Create a two-dimensional array (matrix) and log the entire array to the console ✅

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix.forEach((row) => {
  let rowElement = "";
  row.forEach((element) => (rowElement += element + " "));
  console.log(rowElement);
});
```

- Task 13: Access and log a specific element from the two-dimensional array ✅

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]);
```

### Feature Request:

- Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods ✅

```js
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
```

- Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data ✅

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((element) => element * 2);
console.log(doubled);
const evenNumbers = numbers.filter((element) => element % 2 == 0);
console.log(evenNumbers);
const sum = numbers.reduce((sum, element) => (sum += element), 0);
console.log(sum);
```

- Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element ✅

```js
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
numbers.forEach((number) => console.log(number));
```

- Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array ✅

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix.forEach((row) => {
  let rowElement = "";
  row.forEach((element) => (rowElement += element + " "));
  console.log(rowElement);
});

console.log(matrix[1][2]);
```

### Achievement:

By the end of these activities, students will:

- Create and manipulate arrays using various methods.
- Transform and aggregate array data using map, filter, and reduce.
- Iterate over arrays using loops and iteration methods.
- Understand and work with multi-dimensional arrays.

## Day 7 - 19/07/2024

### Objects

- Creation and Access
  Objects are created using curly braces. Properties can be accessed using dot notation or bracket notation.

```javascript
const object = {
  property1: value1,
  property2: value2,
};
console.log(object.property1); // Dot notation
console.log(object["property2"]);
```

- Methods are functions stored as object properties. They can be defined using regular function syntax or arrow functions.

```javascript
const object = {
  method1: function () {
    /_ function body _/;
  },
  method2: () => {
    /_ arrow function body _/;
  },
};
```

- Nested Objects :
  Objects can contain other objects or arrays of objects, allowing for complex data structures.

```js
const outerObject = {
  property: value,
  innerObject: {
    innerProperty: value,
  },
  arrayOfObjects: [{ prop: value }, { prop: value }],
};
```

- The `this` Keyword : `this` refers to the object the method is called on. It behaves differently in regular functions versus arrow functions.

```js
const object = {
  regularMethod: function () {
    return this.property;
  },
};
```

- Object Iteration : Objects can be iterated over using `for...in` loops or Object methods like keys() and values().

```js
// for...in loop
for (let prop in object) {
  console.log(`${prop}: ${object[prop]}`);
}

// Object.keys() and Object.values()
console.log(Object.keys(object));
console.log(Object.values(object));
```

### Tasks:

#### Object Creation and Access

- Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
};
console.log(book);
```

- Task 2: Access and log the title and author properties of the book object ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
};
console.log(book.title);
console.log(book.author);
```

#### Object Methods

- Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  getDetails: () => `${book.title}\n~${book.author}`,
};
console.log(book.getDetails());
```

- Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  setYear: function (newYear) {
    this.year = newYear;
    console.log(book);
  },
};
book.setYear(2002);
```

#### Nested Objects

- Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console ✅

```js
let library = {
  name: "Central City Library",
  book: [
    {
      title: "Harry Potter",
      author: "J. K. Rowling",
      year: 2005,
    },
    {
      title: "Feel Good Productivity",
      author: "Ali Abdaal",
      year: 2023,
    },
    {
      title: "2 States",
      author: "Chetan Bhagat",
      year: 2012,
    },
  ],
};
console.log(library);
```

- Task 6: Access and log the name of the library and the titles of all the books in the library ✅

```js
let library = {
  name: "Central City Library",
  book: [
    {
      title: "Harry Potter",
      author: "J. K. Rowling",
      year: 2005,
    },
    {
      title: "Feel Good Productivity",
      author: "Ali Abdaal",
      year: 2023,
    },
    {
      title: "2 States",
      author: "Chetan Bhagat",
      year: 2012,
    },
  ],
};
library.book.forEach(function (book) {
  console.log(book.title);
});
```

#### The this Keyword

- Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  getDetails: function () {
    return `${this.title}\n~${this.author}`;
  },
};
console.log(book.getDetails());
```

#### Object Iteration

- Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  getDetails: function () {
    return `${this.title}\n~${this.author}`;
  },
};
for (let properties in book) {
  console.log(`${properties} : ${book[properties]}`);
}
```

- Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  getDetails: function () {
    return `${this.title}\n~${this.author}`;
  },
};
console.log(Object.keys(book));
console.log(Object.values(book));
```

### Feature Request:

- Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  getDetails: () => `${book.title}\n~${book.author}`,
  setYear: function (newYear) {
    this.year = newYear;
    console.log(book);
  },
};
console.log(book.getDetails());
book.setYear(2002);
```

- Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details ✅

```js
let library = {
  name: "Central City Library",
  book: [
    {
      title: "Harry Potter",
      author: "J. K. Rowling",
      year: 2005,
    },
    {
      title: "Feel Good Productivity",
      author: "Ali Abdaal",
      year: 2023,
    },
    {
      title: "2 States",
      author: "Chetan Bhagat",
      year: 2012,
    },
  ],
};
console.log(library);
```

- Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values ✅

```js
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
  getDetails: function () {
    return `${this.title}\n~${this.author}`;
  },
};
for (let properties in book) {
  console.log(`${properties} : ${book[properties]}`);
}
```

### Achievement:

By the end of these activities, students will:

- Create and manipulate objects with properties and methods.
- Understand and use the this keyword in object methods.
- Work with nested objects and arrays of objects.
- Iterate over an object's properties using loops and built-in methods.

## Day 8 - 20/07/2024

### ES6+ Features

- Template Literals

  - String interpolation with variables

  ```js
  `Hello, ${name}`;
  ```

  - Multi-line strings

  ```js
  `
  This is a 
  multi-line string
  `;
  ```

- Destructuring

  - Array destructuring

  ```js
  const [first, second] = [4, 5];
  ```

  - Object destructuring Example:

  ```js
  const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 2005,
  };
  const { title, author } = book;
  ```

- Spread and Rest Operators

  - Spread: Combining arrays

  ```js
  const newArray = [...array1, ...array2];
  ```

  - Rest: Handling multiple function arguments

  ```js
  function sum(...numbers) {}
  ```

- Default Parameters

  - Setting default values for function parameters

  ```js
  function greet(name = "Guest") {}
  ```

- Enhanced Object Literals
  - Shorthand property names
  - Method definitions
  - Computed property names
  ```js
  const obj = {
    prop,
    method() {},
    [expression]: value,
  };
  ```

### Tasks/Activities:

#### Template Literals

- Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console ✅

```js
const name = "Alice";
const age = 30;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
```

- Task 2: Create a multi-line string using template literals and log it to the console ✅

```js
const poem = `
Twinkle twinkle little start
How I wonder what you are?
Up above the world so high 
Like a diamond in the sky
`;

console.log(poem);
```

#### Destructuring

- Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console ✅

```js
const [first, second] = [12, 23];
console.log(`first element : ${first}, second element : ${second}`);
```

- Task 4: Use object destructuring to extract the title and author from a book object and log them to the console ✅

```js
const { title, author } = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
};
console.log(`${title}`);
console.log(`~ ${author}`);
```

#### Spread and Rest Operators

- Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console ✅

```js
const arrayOne = [1, 2, 3, 4, 5, 6];
const arrayTwo = [7, 8, 9, 10, 11, 12];
const mergedArray = [...arrayOne, ...arrayTwo];
console.log(mergedArray);
```

- Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result ✅

```js
const sum = (...args) => {
  let sumOfElement = args.reduce((sum, element) => sum + element, 0);
  return sumOfElement;
};
console.log(sum(2, 3, 4, 5));
```

#### Default Parameters

- Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter ✅

```js
const product = (numberOne, numberTwo = 1) => numberOne * numberTwo;
console.log(product(45));
```

#### Enhanced Object Literals

- Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console ✅

```js
const name = "Ady";
const age = 18;

const person = {
  name,
  age,
  greet() {
    return `Hello, I'm ${this.name}!`;
  },
  birthday() {
    this.age++;
    return `Happy birthday! I'm now ${this.age} years old.`;
  },
};

console.log(person);
console.log(person.greet());
console.log(person.birthday());
```

- Task 9: Create an object with computed property names based on variables and log the object to the console ✅

```js
const key1 = "name";
const key2 = "age";
const key3 = "occupation";

const value1 = "Alice";
const value2 = 28;
const value3 = "Software Developer";

const person = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
};

console.log(person);
```

### Feature Request:

- Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings ✅

```js
const name = "Alice";
const age = 30;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);

const poem = `
Twinkle twinkle little start
How I wonder what you are?
Up above the world so high 
Like a diamond in the sky
`;

console.log(poem);
```

- Destructuring Script: Create a script that uses array and object destructuring to extract values and log them ✅
- Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments ✅

```js
const [first, second] = [12, 23];
console.log(`first element : ${first}, second element : ${second}`);

const { title, author } = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
};
console.log(`${title}`);
console.log(`~ ${author}`);
```

- Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments ✅

```js
const product = (numberOne, numberTwo = 1) => numberOne * numberTwo;
console.log(product(45));
```

- Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names ✅

```js
const key1 = "name";
const key2 = "age";
const key3 = "occupation";

const value1 = "Alice";
const value2 = 28;
const value3 = "Software Developer";

const person = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
};

console.log(person);
```

### Achievement:

By the end of these activities, students will:

- Understand and use template literals for string interpolation and multi-line strings.
- Apply destructuring to extract values from arrays and objects.
- Utilize spread and rest operators for array manipulation and function arguments.
- Define functions with default parameters.
- Create objects using enhanced object literals, including methods and computed property names.

## Day 9 - 21/07/2024

### DOM Manipulation

- Selecting Elements

| Method                                     | Description                                             | Return Type         |
| ------------------------------------------ | ------------------------------------------------------- | ------------------- |
| `document.getElementById('id')`            | Selects a single element by its ID                      | Single Element      |
| `document.getElementsByClassName('class')` | Selects all elements with a specific class              | Live HTMLCollection |
| `document.getElementsByTagName('tag')`     | Selects all elements of a specific tag                  | Live HTMLCollection |
| `document.querySelector('selector')`       | Selects the first element that matches the CSS selector | Single Element      |
| `document.querySelectorAll('selector')`    | Selects all elements that match the CSS selector        | Static NodeList     |

```js
const header = document.getElementById("main-header");
const paragraphs = document.getElementsByClassName("content");
const divs = document.getElementsByTagName("div");
const firstButton = document.querySelector("button");
const allLinks = document.querySelectorAll("a");
```

- Modifying Content

| Property              | Description                                     |
| --------------------- | ----------------------------------------------- |
| `element.textContent` | Gets or sets the text content of an element     |
| `element.innerHTML`   | Gets or sets the HTML content inside an element |

```js
document.getElementById("title").textContent = "New Title";
document.querySelector(".container").innerHTML = "<p>New paragraph</p>";
```

- Modifying Attributes

| Method                                  | Description                             |
| --------------------------------------- | --------------------------------------- |
| `element.getAttribute('attr')`          | Gets the value of a specified attribute |
| `element.setAttribute('attr', 'value')` | Sets the value of a specified attribute |
| `element.removeAttribute('attr')`       | Removes a specified attribute           |

```js
const link = document.querySelector("a");
const currentHref = link.getAttribute("href");
link.setAttribute("href", "https://example.com");
link.removeAttribute("target");
```

- Modifying Styles

| Property/Method                     | Description                     |
| ----------------------------------- | ------------------------------- |
| `element.style.property`            | Sets a specific CSS property    |
| `element.classList.add('class')`    | Adds a class to an element      |
| `element.classList.remove('class')` | Removes a class from an element |
| `element.classList.toggle('class')` | Toggles a class on an element   |

```js
const div = document.querySelector("div");
div.style.backgroundColor = "blue";
div.classList.add("highlight");
div.classList.remove("hidden");
div.classList.toggle("active");
```

- Creating and Appending Elements

| Method                                        | Description                            |
| --------------------------------------------- | -------------------------------------- |
| `document.createElement('tag')`               | Creates a new element node             |
| `document.createTextNode('text')`             | Creates a new text node                |
| `parent.appendChild(child)`                   | Appends a child node to a parent       |
| `parent.insertBefore(newNode, referenceNode)` | Inserts a node before a reference node |

```js
const newDiv = document.createElement("div");
const textNode = document.createTextNode("Hello, World!");
newDiv.appendChild(textNode);
document.body.appendChild(newDiv);
const list = document.querySelector("ul");
const newItem = document.createElement("li");
list.insertBefore(newItem, list.firstChild);
```

- Remove Elements

| Method                      | Description                        |
| --------------------------- | ---------------------------------- |
| `element.remove()`          | Removes the element from the DOM   |
| `parent.removeChild(child)` | Removes a child node from a parent |

```js
const oldParagraph = document.querySelector(".old-content");
oldParagraph.remove();

const parent = document.querySelector("#parent");
const childToRemove = document.querySelector("#child");
parent.removeChild(childToRemove);
```

- Event Handling

| Method                                          | Description                              |
| ----------------------------------------------- | ---------------------------------------- |
| `element.addEventListener('event', handler)`    | Attaches an event handler to an element  |
| `element.removeEventListener('event', handler)` | Removes an event handler from an element |

```js
function handleClick(event) {
  console.log("Button clicked!", event);
}

const button = document.querySelector("button");
button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```

- Traversing the DOM

| Property                  | Description                       |
| ------------------------- | --------------------------------- |
| `element.parentNode`      | Returns the parent node           |
| `element.childNodes`      | Returns a NodeList of child nodes |
| `element.firstChild`      | Returns the first child node      |
| `element.lastChild`       | Returns the last child node       |
| `element.nextSibling`     | Returns the next sibling node     |
| `element.previousSibling` | Returns the previous sibling node |

```js
const parent = element.parentNode;
const children = element.childNodes;
const firstChild = element.firstChild;
const lastChild = element.lastChild;
const nextSibling = element.nextSibling;
const prevSibling = element.previousSibling;
```

#### Tasks:

#### Selecting and Manipulating Elements

- Task 1: Select an HTML element by its ID and change its text content ✅

```js
const paragraph = document.querySelector("#paragraph");
pragraph.innerHTML = "Hello World";
```

- Task 2: Select an HTML element by its class and change its background color ✅

```js
const redParagraph = document.querySelectorAll(".redParagraph");
redParagraph.forEach((element) => {
  element.style.backgroundColor = "red";
});
```

#### Creating and Appending Elements

- Task 3: Create a new div element with some text content and append it to the body ✅

```js
const body = document.querySelector("body");
const newDiv = document.createElement("div");
const textNode = document.createTextNode("Hello 🔥");
newDiv.appendChild(textNode);
body.appendChild(newDiv);
```

- Task 4: Create a new li element and add it to an existing ul list ✅

```js
const list = document.querySelector("ul");
const listElement = document.createElement("li");
listElement.appendChild(document.createTextNode("Dakota"));
list.appendChild(listElement);
```

#### Removing Elements

- Task 5: Select an HTML element and remove it from the DOM ✅

```js
const toBeRemoved = document.querySelector("#toBeRemoved");
setTimeout(() => {
  toBeRemoved.remove();
}, 5000);
```

- Task 6: Remove the last child of a specific HTML element ✅

```js
const sameList = document.querySelector("ul");
const sameListElement = document.createElement("li");
sameListElement.appendChild(
  document.createTextNode("Elephant to be removed after 3 seconds")
);
sameList.appendChild(sameListElement);
setTimeout(() => {
  sameList.removeChild(sameList.lastChild);
}, 3000);
```

#### Modifying Attributes and Classes

- Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag) ✅

```js
const image = document.querySelector("#image");
image.setAttribute("src", "path/to/new-image");
```

- Task 8: Add and remove a CSS class to/from an HTML element.

```js
const element = document.querySelector("#changeBackground");
element.classList.add("redParagraph");
element.classList.remove("greenParagraph");
let newParagraph = document.querySelectorAll(".redParagraph");
newParagraph.forEach((element) => {
  element.style.backgroundColor = "red";
});
```

#### Event Handling

- Task 9: Add a click event listener to a button that changes the text content of a paragraph ✅

```js
const button = document.querySelector("#myButton");
const newParagraphAgain = document.getElementById("myParagraph");
button.addEventListener("click", function () {
  newParagraphAgain.textContent = "The button was clicked!";
});
```

- Task 10: Add a mouseover event listener to an element that changes its border color ✅

```js
const elementAgain = document.getElementById("myElement");
elementAgain.addEventListener("mouseover", function () {
  elementAgain.style.borderColor = "red";
});
```

### Feature Request:

- Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content ✅

```js
const paragraph = document.querySelector("#paragraph");
pragraph.innerHTML = "Hello World";
```

- Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body ✅

```js
const body = document.querySelector("body");
const newDiv = document.createElement("div");
const textNode = document.createTextNode("Hello 🔥");
newDiv.appendChild(textNode);
body.appendChild(newDiv);
```

- Element Removal Script: Write a script that selects an HTML element and removes it from the DOM ✅

```js
const toBeRemoved = document.querySelector("#toBeRemoved");
setTimeout(() => {
  toBeRemoved.remove();
}, 5000);
```

- Attribute Modification Script: Create a script that changes the attributes of an HTML element ✅

```js
const image = document.querySelector("#image");
image.setAttribute("src", "path/to/new-image");
```

- Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions ✅

```js
const button = document.querySelector("#myButton");
const newParagraphAgain = document.getElementById("myParagraph");
button.addEventListener("click", function () {
  newParagraphAgain.textContent = "The button was clicked!";
});
const elementAgain = document.getElementById("myElement");
elementAgain.addEventListener("mouseover", function () {
  elementAgain.style.borderColor = "red";
});
```

### Achievement:

By the end of these activities, students will:

- Select and manipulate DOM elements using JavaScript.
- Create and append new elements to the DOM.
- Remove elements from the DOM.
- Modify attributes and classes of HTML elements.
- Add and handle events to make web pages interactive.
