// Control Structures

// If-Else Statements

// Task 1: Check if a number is positive, negative, or zero
let number = 24;
if (number == 0) {
  console.log("Zero");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}

// Task 2: Check if a person is eligible to vote (age >= 18)
let age = 21;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// Nested If-Else Statements

// Task 3: Find the largest of three numbers using nested if-else statements
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

// Switch Case

// Task 4: Determine the day of the week based on a number (1-7)
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
    console.log("Invalid Day Number");
}

// Task 5: Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score
let marks = 94;
switch (true) {
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
    console.log("Invalid Marks");
}

// Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd
number = 3;
const answer = number % 2 == 0 ? "Even" : "Odd";
console.log(answer);

// Combining Conditions

// Task 7: Check if a year is a leap year
let year = 2004;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// Feature Request Scripts

// Number Check Script
number = 24;
if (number == 0) {
  console.log("Zero");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Positive");
}

// Voting Eligibility Script
age = 21;
if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}

// Day of the Week Script
dayNumber = 2;
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
    console.log("Invalid Day Number");
}

// Grade Assignment Script
marks = 94;
switch (true) {
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
    console.log("Invalid Marks");
}

// Leap Year Check Script
year = 2004;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
