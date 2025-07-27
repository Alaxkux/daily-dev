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