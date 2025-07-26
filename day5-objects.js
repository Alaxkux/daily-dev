// Day 5: JavaScript Objects & Methods

// 1. Basic Object
const user = {
  name: "Al-ameen",
  age: 19,
  isStudent: true,
};

console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Is a student?", user.isStudent);

// 2. Object with method
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return "Car started 🚗💨";
  },
};

console.log("Car brand:", car.brand);
console.log(car.start());

// 3. Add a new property
user.country = "Nigeria";
console.log("Updated User:", user);
