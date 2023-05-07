// function getNumberFromUser(promptMessage) {
//     let number;
//     do {
//       number = parseFloat(prompt(promptMessage));
//     } while (isNaN(number));
//     return number;
//   }
  
//   function calculatePower(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//       result *= base;
//     }
//     return result;
//   }
  
//   function displayResult(base, exponent, result) {
//     console.log(`${base} raised to the power of ${exponent} is ${result}`);
//   }
  
//   const base = getNumberFromUser("Enter the base number:");
//   const exponent = getNumberFromUser("Enter the exponent:");
//   const result = calculatePower(base, exponent);
//   displayResult(base, exponent, result);

//   function getNumberFromUser(promptText) {
//     let userInput = prompt(promptText);
//     while (isNaN(userInput)) {
//       userInput = prompt("Please enter a valid number: " + promptText);
//     }
//     return parseFloat(userInput);
//   }
  
//   // Function to calculate the power of a number
//   function calculatePower(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//       result *= base;
//     }
//     return result;
//   }
  
//   // Function to display the result on the screen
//   function displayResult(result) {
//     alert("The result is: " + result);
//   }
  
//   // Main program
//   let base = getNumberFromUser("Please enter the base number:");
//   let exponent = getNumberFromUser("Please enter the exponent:");
//   let result = calculatePower(base, exponent);
//   displayResult(result);
  
  
  
  
  
  
  