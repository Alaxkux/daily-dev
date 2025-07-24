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
