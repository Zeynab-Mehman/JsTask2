// //REVERSE NUMBER

// // function reverseNum(num) {
// //     let reversed = 0;
// //     while (num !== 0) {
// //       reversed = reversed * 10 + num % 10;
// //       num = Math.floor(num / 10);
// //     }
// //     return reversed;
// //   }
  
// //   console.log(reverseNum(123)); // Output: 321
// //   console.log(reverseNum(4567)); // Output: 7654
// //   console.log(reverseNum(100)); // Output: 1



// //   function reverseNum(num) {
// //     let reversed = 0;
// //     while (num !== 0) {
// //       let lastDigit = num % 10;
// //       reversed = reversed * 10 + lastDigit;
// //       num = Math.trunc(num / 10);
// //     }
// //     return reversed;
// //   }
  
//   console.log(reverseNum(123)); // Output: 321

function genNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(genNum(1, 100)); // Output: a random integer between 1 and 100 (inclusive)