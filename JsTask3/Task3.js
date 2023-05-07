// let password = 1234;
// let balance = 500;
// let attempts = 0;

// while (attempts < 3) {
//   let inputPassword = +prompt('Enter password:');

//   if (inputPassword === password) {
//     let amount = parseInt(prompt('Enter amount to withdraw:'));

//     if (amount <= balance) {
//       balance -= amount;
//       alert(`Withdrawal successful. Balance is now ${balance}.`);
//       break;
//     } else {
//       alert('Insufficient balance.');
//     }
//   } else {
//     attempts++;
//     alert(`Incorrect password. ${3 - attempts} attempts remaining.`);
//   }
// }

// if (attempts >= 3) {
//   alert('Account blocked.');
// }

// let rows = 7;
// let pattern = '';

// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= rows - i; j++) {
//     pattern += ' ';
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     pattern += '*';
//   }

//   pattern += '\n';
// }

// console.log(pattern);