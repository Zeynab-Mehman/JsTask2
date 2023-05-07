
// Exercise 1

// function reverseNumber(num) {
//   let reversedNum = 0;
//   while (num > 0) {
//     let digit = num % 10; // get the last digit of num
//     reversedNum = (reversedNum * 10) + digit; // add the digit to reversedNum
//     num = Math.floor(num / 10); // remove the last digit from num
//   }
//   return reversedNum;
// }

// console.log(reverseNumber(32243)); // Output: 34223



// Exercise-3: Convert Celsius to Fahrenheit

// function calFahrenheit(cel) {
//   return (cel * 9/5) + 32;
// }

// console.log(calFahrenheit(0)); // Output: 32
// console.log(calFahrenheit(20)); // Output: 68
// console.log(calFahrenheit(40)); // Output: 104


// Exercise-4: Find the area of a given Rectangle

// function rectangleArea(width, height) {
//   let area = width * height;
//   return `The area of the rectangle is ${area}`;
// }

// console.log(rectangleArea(10, 20)); // Output: The area of the rectangle is 200
// console.log(rectangleArea(30, 30)); // Output: The area of the rectangle is 900



// Exercise-7: Generate a random number

// function genRandom(start, end) {
//   return Math.floor(Math.random() * (end - start + 1)) + start;
// }

// console.log(genRandom(1, 10)); // Output: Random integer between 1 to 10
// console.log(genRandom(80, 90)); // Output: Random integer between 80 to 90



// Exercise-8: Find factorial of a number

// function getFactorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * getFactorial(num - 1);
//   }
// }

// console.log(getFactorial(5)); // Output: 120
// console.log(getFactorial(12)); // Output: 479001600