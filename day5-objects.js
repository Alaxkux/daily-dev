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


const student = {
  name: "Zayn",
  level: 100,
  gpa: 4.2,
  getStatus: function () {
    if (this.gpa >= 4.5) {
      return "First Class 💎";
    } else if (this.gpa >= 3.5) {
      return "Second Class Upper 👍";
    } else {
      return "Keep pushing 🔁";
    }
  },
};

console.log(`${student.name}'s Status:`, student.getStatus());


const account = {
  name: "Al-ameen",
  balance: 10000,
  deposit(amount) {
    this.balance += amount;
    return `Deposited ₦${amount}. New balance: ₦${this.balance}`;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds 💀";
    }
    this.balance -= amount;
    return `Withdrew ₦${amount}. New balance: ₦${this.balance}`;
  },
};

console.log(account.deposit(3000));   // +₦3000
console.log(account.withdraw(5000));  // -₦5000
console.log(account.withdraw(10000)); // Not enough

