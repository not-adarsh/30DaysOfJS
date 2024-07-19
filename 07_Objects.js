// Task 1: Create an object representing a book
const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 2005
  };
  console.log("Task 1:", book);
  
  // Task 2: Access and log the title and author properties
  console.log("Task 2:");
  console.log(book.title);
  console.log(book.author);
  
  // Task 3: Add a method to return title and author
  book.getDetails = () => `${book.title}\n~${book.author}`;
  console.log("Task 3:", book.getDetails());
  
  // Task 4: Add a method to update the year
  book.setYear = function(newYear) {
    this.year = newYear;
  };
  book.setYear(2002);
  console.log("Task 4:", book);
  
  // Task 5: Create a nested object representing a library
  const library = {
    name: "Central City Library",
    books: [
      { title: "Harry Potter", author: "J. K. Rowling", year: 2005 },
      { title: "Feel Good Productivity", author: "Ali Abdaal", year: 2023 },
      { title: "2 States", author: "Chetan Bhagat", year: 2012 }
    ]
  };
  console.log("Task 5:", library);
  
  // Task 6: Access and log library name and book titles
  console.log("Task 6:");
  console.log(library.name);
  library.books.forEach(book => console.log(book.title));
  
  // Task 7: Add a method using 'this' keyword
  book.getDetailsWithThis = function() {
    return `${this.title}\n~${this.author}`;
  };
  console.log("Task 7:", book.getDetailsWithThis());
  
  // Task 8: Use for...in loop to iterate over properties
  console.log("Task 8:");
  for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
  }
  
  // Task 9: Use Object.keys and Object.values
  console.log("Task 9:");
  console.log(Object.keys(book));
  console.log(Object.values(book));
  
  // Feature Request: Book Object Script
  const bookFeature = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getDetails: function() {
      return `${this.title} by ${this.author}`;
    },
    setYear: function(newYear) {
      this.year = newYear;
    }
  };
  console.log("Book Feature:");
  console.log(bookFeature.getDetails());
  bookFeature.setYear(1926);
  console.log(bookFeature);
  
  // Feature Request: Library Object Script
  const libraryFeature = {
    name: "Public Library",
    books: [
      { title: "1984", author: "George Orwell", year: 1949 },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
    ]
  };
  console.log("Library Feature:", libraryFeature);
  
  // Feature Request: Object Iteration Script
  console.log("Object Iteration Feature:");
  for (let prop in bookFeature) {
    console.log(`${prop}: ${bookFeature[prop]}`);
  }
  console.log("Keys:", Object.keys(bookFeature));
  console.log("Values:", Object.values(bookFeature));