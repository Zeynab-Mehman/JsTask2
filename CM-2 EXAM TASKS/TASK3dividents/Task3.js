// 3. Show number's dividends from 100 to 1000.
// Input | Output
// 50      | 100, 150, 200, 250, 300 ... 950
// 70      | 140 , 210, 280, 980 ...
// 85      | 170, 255, 340, ... 935
 



const inputNum = +prompt("Enter a number");
for (let i = 100; i < 1000; i++) {
    if(i % inputNum == 0){
        console.log(i)
    }
}

