let firstvalue = +prompt("Enter first value:");
let operator = prompt("Enter operator type:");
let secondvalue = +prompt("Enter second value:");

// if (operator === "+"){
// console.log(firstvalue + secondvalue);
// }
// else if (operator === "-"){
//     console.log(firstvalue - secondvalue);
// }
// else if (operator === "*"){
//     console.log(firstvalue * secondvalue);
// }
// else if (operator === "/"){
//     console.log(firstvalue / secondvalue);
// }
// else if (operator === "%"){
//     console.log(firstvalue % secondvalue);
// }
// else{
//     console.log("Invalid operator or values.");
// }


switch (operator){
    case "+":
        result = firstvalue + secondvalue;
        break;
    case "-":
        result = firstvalue - secondvalue;
        break;
    case "*":
        result = firstvalue * secondvalue;
        break;
    case "/":
        result = firstvalue / secondvalue;
        break;
    case "%":
        result = firstvalue % secondvalue;
        break;
    default:
        console.log("Invalid operator or values.");
}
console.log(result);

            
