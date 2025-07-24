// // 1. Double the Numbers
// const numbers = [1, 2, 3];

// function double(numbers) {
//     return numbers.map(x => x * 2);
// }

// console.log(double(numbers));


// // 2. Filter Even Numbers
// const numbers2 = [1, 2, 3, 4, 5, 6];
// function Even(numbers) {
//     return numbers.filter(x => x % 2 === 0);
// }
// console.log(Even(numbers2));


// // 3. Find the Maximum
// const numbers3 = [1, 2, 3, 4, 5];
// function findMax(numbers) {
//     return Math.max(...numbers);
// }
// console.log(findMax(numbers3));

// // 4. Reverse a String
// const str = "Hello, World!";
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString(str));

// // 5. Check if a Number is Prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false
// // 6. Calculate Factorial



// // Assignement.
// /* 1.⁠ ⁠Double the Numbers
// Write a function that takes an array of numbers and returns a new array where each number is doubled using .map().
// */

// function doubleNumb(arr) {
//   const result = arr.map(function (value) {
//     return value * 2;
//   });

//   return result;
// }

// const values = [1, 2, 3, 4, 5];
// const values2 = [2, 4, 6, 8, 10];

// const doubleRes = doubleNumb(values);
// const doubleRes2 = doubleNumb(values2);
// console.log(doubleRes);
// console.log(doubleRes2);

// /*  2.⁠ ⁠Filter Out Even Numbers
// Given an array of numbers, return a new array that only contains the even numbers using .filter().

// .*/

// function filterEven(arr) {
//   const result = arr.filter(function (el) {
//     return el % 2 === 0;
//   });

//   return result;
// }

// const values3 = [1, 2, 3, 4, 5];
// const values4 = [2, 4, 6, 8, 10];

// const evenResult = filterEven(values3);
// const evenResult2 = filterEven(values4);

// console.log(evenResult);
// console.log(evenResult2);

// /* 3.⁠ ⁠Sum All Elements
// Use a loop to calculate and return the sum of all numbers in a given array.
// */

// function calculateSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < values5.length; i++) {
//     sum = sum + arr[i];
//   }

//   return sum;
// }
// const values5 = [2, 4, 6, 8, 10];

// const sumArr = calculateSum(values5);
// console.log(sumArr);

/*   4.⁠ ⁠Count Positives and Negatives
Write a function that takes an array of numbers and returns an object with two properties: the number of positive and negative values.
*/

function getPosAndNeg(arr) {
  let pos = (neg = 0);
  let posArr = [];
  let negArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
      posArr.push(arr[i]);
    } else if (arr[i] < 0) {
      neg++;
      negArr.push(arr[i]);
    }
  }

  return {
    poitiveNumbers: pos,
    posElements: posArr,
    negativeNumbers: neg,
    negElements: negArr,
  };
}

const numbers = [-1, -2, -3, 1, 2, 3];
const posAndNegResult = getPosAndNeg(numbers);
console.log(posAndNegResult);