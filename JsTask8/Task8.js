// TASK 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

let num = Number(prompt("Enter a two-digit number:"));
while (num < 100) {
  num += 7;
}
console.log(num);


// TASK 2. .Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

let n = Number(prompt("Enter a number:"));
for (let i = 0; i < n; i++) {
  console.log("I know how to use cycles");
}



// TASK 3.  Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

let sum = 0;
for (let i = 10; i <= 99; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log(sum);



// TASK 4.Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər olduğunu yoxlayan isLucky(123321) funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.

function isLucky(num) {
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    
    for (let i = 0; i < 6; i++) {
      const digit = num % 10;
      if (i < 3) {
        sumFirstHalf += digit;
      } else {
        sumSecondHalf += digit;
      }
      num = Math.floor(num / 10);
    }
    
    return sumFirstHalf === sumSecondHalf;
  }
  
  console.log(isLucky(123321));
  console.log(isLucky(123456));



// TASK 5.İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın. İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

let input = prompt("Enter a date in YYYY.MM.DD format:");
let date = new Date(input);
if (isNaN(date.getTime())) {
  console.log("Invalid value entered");
} else {
  let options = { month: "long", day: "numeric", year: "numeric" };
  let output = date.toLocaleDateString("en-US", options);
  console.log(output);
}

console.log(date)



// TASK 6.İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.

function numberToText() {
    const number = prompt("Enter a number between 1 and 99");
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const special = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  
    const numberString = number.toString();
  
    if (numberString.length === 1) {
      console.log(units[number]);
    } else if (numberString.length === 2) {
      if (numberString[0] === "1") {
        console.log(special[numberString[1]]);
      } else {
        const text = tens[numberString[0]] + " " + units[numberString[1]];
        console.log(text.trim());
      }
    } else {
      console.log("Invalid input");
    }
  }

  numberToText();



// TASK 7.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

function reverseName() {
    const fullName = prompt("Enter your full name in the format 'FIRSTNAME LASTNAME'");
    const nameArray = fullName.split(" ");
    const reversedName = nameArray[1] + " " + nameArray[0];
    console.log(reversedName);
  }
  
  reverseName();



// TASK 8.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

function isValidNumber(phoneNumber) {
    if (phoneNumber.length !== 12 || phoneNumber.slice(0, 2) !== "+7") {
      return false;
    }
  }
  console.log(isValidNumber("+71234567890"));
  console.log(isValidNumber("12345678901"));