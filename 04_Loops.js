// Task 1: Print numbers from 1 to 10 using a for loop
console.log("Task 1: Numbers from 1 to 10 (for loop)");
for (let number = 1; number <= 10; number++) {
  console.log(number);
}

// Task 2: Multiplication table of 5 using a for loop
console.log("\nTask 2: Multiplication table of 5");
let number = 5;
for (let multiply = 1; multiply <= 10; multiply++) {
  console.log(`${number} x ${multiply} = ${number * multiply}`);
}

// Task 3: Sum of numbers from 1 to 10 using a while loop
console.log("\nTask 3: Sum of numbers from 1 to 10");
let sum = 0;
let counter = 1;
while (counter <= 10) {
  sum += counter++;
}
console.log("Sum:", sum);

// Task 4: Print numbers from 10 to 1 using a while loop
console.log("\nTask 4: Numbers from 10 to 1");
let num = 10;
while (num >= 1) {
  console.log(num--);
}

// Task 5: Print numbers from 1 to 5 using a do...while loop
console.log("\nTask 5: Numbers from 1 to 5");
let i = 1;
do {
  console.log(i++);
} while (i <= 5);

// Task 6: Calculate factorial using a do...while loop
console.log("\nTask 6: Factorial calculation");
let factorial = 1;
let n = 5;
do {
  factorial *= n--;
} while (n >= 1);
console.log(`Factorial of 5:`, factorial);

// Task 7: Print pattern using nested for loops
console.log("\nTask 7: Star pattern");
for (let i = 1; i <= 6; i++) {
  let string = "";
  for (let j = 1; j <= i; j++) {
    string += "* ";
  }
  console.log(string);
}

// Task 8: Print numbers from 1 to 10, skip 5 using continue
console.log("\nTask 8: Numbers from 1 to 10, skipping 5");
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// Task 9: Print numbers from 1 to 10, stop at 7 using break
console.log("\nTask 9: Numbers from 1 to 10, stopping at 7");
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}

// Feature Request: Number Printing Script
console.log("\nFeature: Number Printing Script");
console.log("Using for loop:");
for (let number = 1; number <= 10; number++) {
  console.log(number);
}
console.log("Using while loop:");
number = 1;
while (number <= 10) {
  console.log(number++);
}

// Feature Request: Multiplication Table Script
console.log("\nFeature: Multiplication Table Script");
number = 5;
for (let multiply = 1; multiply <= 10; multiply++) {
  console.log(`${number} x ${multiply} = ${number * multiply}`);
}

// Feature Request: Pattern Printing Script
console.log("\nFeature: Pattern Printing Script");
for (let i = 1; i <= 6; i++) {
  let string = "";
  for (let j = 1; j <= i; j++) {
    string += "* ";
  }
  console.log(string);
}

// Feature Request: Sum Calculation Script
console.log("\nFeature: Sum Calculation Script");
number = 1;
let answer = 0;
while (number <= 10) {
  answer += number++;
}
console.log("Sum:", answer);

// Feature Request: Factorial Calculation Script
console.log("\nFeature: Factorial Calculation Script");
answer = 1;
number = 5;
do {
  answer *= number--;
} while (number >= 1);
console.log("Factorial of 5:", answer);