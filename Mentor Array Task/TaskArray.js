// 1)ForEach metodundan istifadə edərək, rəqəmlər massivini giriş kimi qəbul edən və hər elementin kvadratı ilə yeni massiv qaytaran funksiya yazın.

function squareArray(value) {
    const newarray = [];
    value.forEach(num => newarray.push(num ** 2));
    return newarray;
  }
  console.log(squareArray([1, 3, 5, 7]))



// 2) Promt vasitesi ile userden goturduyunuz reqemlerin azi bir-i duz olarsa geriye true qaytarsin (hamisi yox, 1-i)

const numbers = [1, 3, 5, 7, 10, 14, 25, 26, 27, 96, 97, 98, 99]
const numbersEnteredbytheUser = +prompt("Please enter the number:")
const result = numbers.some((user)=> user===numbersEnteredbytheUser)
console.log (result)



// 3) Array-de ededlerimiz var ve ve onlari kvadrata yukseldin, eger kvadrata yuklesdilmis ededler cutdurse, onlari yeni bir arraya yigib log-da gorsedin
//   (bu example-dir. buna baxaraq yazmayin neyi ifade etmek istemisem onu bildirirem)
//   example: [8,7,9,10] => ...(proses bas verdi) [64,49,81,100] (hansilar cut ededdirse onlari *yeni* bir arrayda consolede gorsedin)

const values = [1, 2, 3, 4, 5, 6, 7];

const squaredNumbers = values.map((number) => number ** 2);

const evenNumbers = squaredNumbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

  


