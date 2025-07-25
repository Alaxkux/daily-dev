// Day 1: Practicing variables
let yourName = "Al-ameen";
console.log("Hello, " + yourName);

// Day 2: Functions in JavaScript

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Al-ameen"));
console.log(greet("Kuz"));

function add(a, b) {
  return a + b;
}

console.log("2 + 3 =", add(2, 3));




function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log("Reverse of 'kuz' =>", reverseWord("kuz"));


// Day 3: Arrays & Loops

const fruits = ["mango", "orange", "banana", "apple"];

// 1. Loop through with a normal for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit (for loop):", fruits[i]);
}

// 2. Loop using forEach
fruits.forEach(function(fruit) {
  console.log("Fruit (forEach):", fruit);
});

// 3. Function to find a fruit
function findFruit(arr, target) {
  return arr.includes(target);
}

console.log("Is 'banana' in the list?", findFruit(fruits, "banana"));
console.log("Is 'grape' in the list?", findFruit(fruits, "grape"));


const animals = ["goat", "dog", "cow", "sheep"];

function reverseArray(arr) {
  return arr.slice().reverse();
}

console.log("Original:", animals);
console.log("Reversed:", reverseArray(animals));

// Day 4: Conditionals

// 1. Basic if-else
let age = 17;

if (age >= 18) {
  console.log("You're an adult");
} else {
  console.log("You're still a minor");
}

// 2. else if ladder
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 3. switch-case
let day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(day + " is a weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log(day + " is a weekend");
    break;
  default:
    console.log("Invalid day");
}
// 🔹 1. Function to Check Voting Eligibility
function canVote(age) {
  if (age >= 18) {
    return "You're eligible to vote.";
  } else {
    return `You need ${18 - age} more year(s) to vote.`;
  }
}

console.log(canVote(17));  // You need 1 more year(s) to vote.
console.log(canVote(20));  // You're eligible to vote.




function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(5));   // Positive
console.log(checkNumber(-3));  // Negative
console.log(checkNumber(0));   // Zero



function login(username, password) {
  if (username === "alaxkuz" && password === "1234") {
    return "Login successful!";
  } else {
    return "Invalid credentials!";
  }
}

console.log(login("alaxkuz", "1234"));   // Login successful!
console.log(login("kuz", "0000"));       // Invalid credentials!
