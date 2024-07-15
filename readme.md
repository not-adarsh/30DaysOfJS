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
