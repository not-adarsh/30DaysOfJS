// Task 1: Template Literals
const name = "Alice";
const age = 30;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Task 2: Multi-line string using Template Literals
const poem = `
Twinkle twinkle little star
How I wonder what you are?
Up above the world so high 
Like a diamond in the sky
`;
console.log(poem);

// Task 3: Array Destructuring
const [first, second] = [12, 23];
console.log(`first element : ${first}, second element : ${second}`);

// Task 4: Object Destructuring
const { title, author } = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2005,
};
console.log(`${title}`);
console.log(`~ ${author}`);

// Task 5: Spread Operator with Arrays
const arrayOne = [1, 2, 3, 4, 5, 6];
const arrayTwo = [7, 8, 9, 10, 11, 12];
const mergedArray = [...arrayOne, ...arrayTwo];
console.log(mergedArray);

// Task 6: Rest Operator in Functions
const sum = (...args) => {
  let sumOfElement = args.reduce((sum, element) => sum + element, 0);
  return sumOfElement;
};
console.log(sum(2, 3, 4, 5));

// Task 7: Default Parameters
const product = (numberOne, numberTwo = 1) => numberOne * numberTwo;
console.log(product(45));

// Task 8: Enhanced Object Literals
const person = {
  name: "Ady",
  age: 18,
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

// Task 9: Computed Property Names
const key1 = "name";
const key2 = "age";
const key3 = "occupation";
const value1 = "Alice";
const value2 = 28;
const value3 = "Software Developer";
const dynamicPerson = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
};
console.log(dynamicPerson);
