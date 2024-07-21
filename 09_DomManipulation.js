// Task 1: Change text content
const paragraph = document.querySelector("#paragraph");
paragraph.innerHTML = "Hello World";

// Task 2: Change background color
const redParagraphs = document.querySelectorAll(".redParagraph");
redParagraphs.forEach((element) => {
    element.style.backgroundColor = "red";
});

// Task 3: Create and append new div
const body = document.querySelector("body");
const newDiv = document.createElement("div");
const textNode = document.createTextNode("Hello 🔥");
newDiv.appendChild(textNode);
body.appendChild(newDiv);

// Task 4: Add new li to ul
const list = document.querySelector("ul");
const listElement = document.createElement("li");
listElement.appendChild(document.createTextNode("Dakota"));
list.appendChild(listElement);

// Task 5: Remove element 
const toBeRemoved = document.querySelector("#toBeRemoved");
setTimeout(() => {
    toBeRemoved.remove();
}, 5000);

// Task 6: Remove last child 
const sameList = document.querySelector("ul");
const sameListElement = document.createElement("li");
sameListElement.appendChild(
    document.createTextNode("Elephant to be removed after 3 seconds")
);
sameList.appendChild(sameListElement);
setTimeout(() => {
    sameList.removeChild(sameList.lastChild);
}, 3000);

// Task 7: Change img src
const image = document.querySelector("#image");
image.setAttribute("src", "path/to/new-image");

// Task 8: Add and remove CSS classes
const element = document.querySelector("#changeBackground");
element.classList.add("redParagraph");
element.classList.remove("greenParagraph");
let newParagraph = document.querySelectorAll(".redParagraph");
newParagraph.forEach((element) => {
    element.style.backgroundColor = "red";
});

// Task 9: Click event listener
const button = document.querySelector("#myButton");
const newParagraphAgain = document.getElementById("myParagraph");
button.addEventListener("click", function () {
    newParagraphAgain.textContent = "The button was clicked!";
});

// Task 10: Mouseover event listener
const elementAgain = document.getElementById("myElement");
elementAgain.addEventListener("mouseover", function () {
    elementAgain.style.borderColor = "red";
});