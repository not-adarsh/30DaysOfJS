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
    ['mon', 'sun', 'thurs']
    ```
### Tasks
#### Activity 1: Variable Declaration
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
const isLoggedIn = false
console.log(isLoggedIn)
```
#### Data Types
- Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator ✅
```js
let name = "ady"
let age = 18
let isAdult = true
let loginData = {
    username : "adyLovesCoding",
    password : "JSis💖",
}
let lastLoginTime = ['mon', 'sun', 'thurs']
console.log(typeof name)
console.log(typeof age)
console.log(typeof isAdult)
console.log(typeof loginData)
console.log(typeof lastLoginTime)
```
#### Reassigning Variables
- Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console ✅
```js
let name = "ady"
console.log(name)
name = "adarsh"
console.log(name)
```
#### Understanding const
Task 6: Try reassigning a variable declared with const and observe the error ✅
```js
const pi = 3.14
pi = 9.97
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
let name = "ady"
let age = 18
let isAdult = true
let loginData = {
    username : "adyLovesCoding",
    password : "JSis💖",
}
let lastLoginTime = ['mon', 'sun', 'thurs']
console.log(typeof name, name)
console.log(typeof age, age)
console.log(typeof isAdult, isAdult)
console.log(typeof loginData, loginData)
console.log(typeof lastLoginTime, lastLoginTime)

```
- Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment✅
```js
let name = "ady"
name = "adarsh"
const pi = 3.14
pi = 9.97
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
