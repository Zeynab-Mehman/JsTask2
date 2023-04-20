let a = +prompt("Enter first value:");
let b = +prompt("Enter second value:");
let c = +prompt("Enter third value:");

if (a>b && a>c) {
    console.log("The largest value is first one - " + a);
}
else if (b>a && b>c){
    console.log("The largest value is second one - " + b);
}
else {
    console.log("The largest value is third one - " + c)
}

let largestvalue = Math.max(a, b, c)
console.log(largestvalue);