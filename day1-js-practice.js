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
