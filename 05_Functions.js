// Function Declaration
// Task 1: Check if a number is even or odd
function isEven(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
  }
  
  // Task 2: Calculate the square of a number
  function square(num) {
    return num * num;
  }
  
  // Function Expression
  // Task 3: Find the maximum of two numbers
  const max = function(numberOne, numberTwo) {
    return numberOne > numberTwo
      ? numberOne
      : numberOne != numberTwo
      ? numberTwo
      : "Both are Equal";
  };
  
  // Task 4: Concatenate two strings
  const concatenate = function(stringOne, stringTwo) {
    return stringOne + stringTwo;
  };
  
  // Arrow Functions
  // Task 5: Calculate the sum of two numbers
  const sum = (numberOne, numberTwo) => numberOne + numberTwo;
  
  // Task 6: Check if a string contains a specific character
  const find = (character, string) => string.indexOf(character) != -1;
  
  // Function Parameters and Default Values
  // Task 7: Calculate product with default value
  const myFunction = (numberOne, numberTwo = 1) => numberOne * numberTwo;
  
  // Task 8: Greeting with default age
  const greetings = (name, age = 1) => `Hello ${name}, you are ${age} years old`;
  
  // Higher-Order Functions
  // Task 9: Repeat a function multiple times
  const repeatFunction = (callback, times) => {
    for (let i = 0; i < times; i++) {
      callback();
    }
  };
  
  // Task 10: Function composition
  const composition = (functionOne, functionTwo, initialValue) =>
    functionTwo(functionOne(initialValue));
  
  // Example usage and testing
  console.log("Testing functions:");
  
  isEven(4);
  isEven(7);
  
  console.log("Square of 5:", square(5));
  
  console.log("Max of 10 and 15:", max(10, 15));
  
  console.log("Concatenated string:", concatenate("Hello, ", "World!"));
  
  console.log("Sum of 3 and 4:", sum(3, 4));
  
  console.log("'a' in 'cat':", find('a', 'cat'));
  
  console.log("Product with default:", myFunction(5));
  console.log("Product without default:", myFunction(5, 3));
  
  console.log(greetings("Alice"));
  console.log(greetings("Bob", 30));
  
  console.log("Repeating a function:");
  repeatFunction(() => console.log("Hello!"), 3);
  
  console.log("Function composition:");
  const double = x => x * 2;
  const addOne = x => x + 1;
  console.log(composition(double, addOne, 5));