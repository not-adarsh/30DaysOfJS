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

### Tasks

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

### Feature Request

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

## Day 2 - 14/07/2023

### Operators

#### Arithmetic Operators

- Addition (+)
- Subtraction (-)
- Multiplication (\*)
- Division (/)
- Modulus (%) - Used to get the remainder

#### Assignment Operators

- Addition assignment (+=)
- Subtraction assignment (-=)
- Multiplication assignment (\*=)
- Division assignment (/=)
- Modulo assignment (%=)

#### Comparison Operators

- Greater than (>)
- Less than (<)
- Greater than or equal to (>=)
- Less than or equal to (<=)
- Equality (==)
- Strict equality (===)

### 4. Logical Operators

- AND (&&)
- OR (||)
- NOT (!)

### 5. Ternary Operator

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
