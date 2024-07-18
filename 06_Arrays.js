// Array Creation and Access
console.log("Array Creation and Access:");

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task 2: Access the first and last elements of the array and log them to the console
console.log(`first element : ${numbers[0]}, last element : ${numbers[numbers.length - 1]}`);

console.log("\nBasic Array Methods:");

// Task 3: Use the push method to add a new number to the end of the array
numbers.push(6);
console.log("After push:", numbers);

// Task 4: Use the pop method to remove the last element from the array
numbers.pop();
console.log("After pop:", numbers);

// Task 5: Use the shift method to remove the first element from the array
numbers.shift();
console.log("After shift:", numbers);

// Task 6: Use the unshift method to add a new number to the beginning of the array
numbers.unshift(0);
console.log("After unshift:", numbers);

console.log("\nIntermediate Array Methods:");

// Task 7: Use the map method to create a new array where each number is doubled
const doubled = numbers.map((element) => element * 2);
console.log("Doubled array:", doubled);

// Task 8: Use the filter method to create a new array with only even numbers
const evenNumbers = numbers.filter((element) => element % 2 == 0);
console.log("Even numbers:", evenNumbers);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array
const sum = numbers.reduce((sum, element) => sum + element, 0);
console.log("Sum of array:", sum);

console.log("\nArray Iteration:");

// Task 10: Use a for loop to iterate over the array
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array
console.log("Using forEach:");
numbers.forEach((number) => console.log(number));

console.log("\nMulti-dimensional Arrays:");

// Task 12: Create a two-dimensional array (matrix) and log the entire array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2D array:");
matrix.forEach((row) => {
  let rowElement = "";
  row.forEach((element) => (rowElement += element + " "));
  console.log(rowElement);
});

// Task 13: Access and log a specific element from the two-dimensional array
console.log("Specific element from 2D array:", matrix[1][2]);

console.log("\nFeature Requests:");

// Array Manipulation Script
console.log("Array Manipulation:");
const manipulationArray = [1, 2, 3, 4, 5];
manipulationArray.push(6);
console.log("After push:", manipulationArray);
manipulationArray.pop();
console.log("After pop:", manipulationArray);
manipulationArray.shift();
console.log("After shift:", manipulationArray);
manipulationArray.unshift(0);
console.log("After unshift:", manipulationArray);

// Array Transformation Script
console.log("\nArray Transformation:");
const transformArray = [1, 2, 3, 4, 5];
const transformDoubled = transformArray.map((element) => element * 2);
console.log("Doubled:", transformDoubled);
const transformEven = transformArray.filter((element) => element % 2 == 0);
console.log("Even numbers:", transformEven);
const transformSum = transformArray.reduce((sum, element) => sum + element, 0);
console.log("Sum:", transformSum);

// Array Iteration Script
console.log("\nArray Iteration:");
const iterationArray = [1, 2, 3, 4, 5];
console.log("Using for loop:");
for (let i = 0; i < iterationArray.length; i++) {
  console.log(iterationArray[i]);
}
console.log("Using forEach:");
iterationArray.forEach((number) => console.log(number));

// Two-dimensional Array Script
console.log("\nTwo-dimensional Array:");
const matrix2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
matrix2D.forEach((row) => {
  let rowElement = "";
  row.forEach((element) => (rowElement += element + " "));
  console.log(rowElement);
});
console.log("Specific element:", matrix2D[1][2]);