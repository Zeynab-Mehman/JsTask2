// 4. We need to swap the case of all letters in a string. Provide us a function for doing it.
// swapCase(string) : string
// Input             |     Output
// aBcD             |      AbCd
// jAvaScRIPt     |     JaVAsCripT


// OPTION 1
// function swapCase(str) {
//     let swapped = '';
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (char === char.toLowerCase()) {
//         swapped += char.toUpperCase();
//       } else {
//         swapped += char.toLowerCase();
//       }
//     }
//     return swapped;
//   }

//   let a = 'AbcD';
//   let b = swapCase(a);
//   console.log(b);  

// OPTION 2
function swapCase(params){
    let newStr="";
    for (let i = 0; i < params.length; i++) {
        let e = params[i];
        
       if( e == e.toLowerCase()){
        e = e.toUpperCase();
       }else {
        e = e.toLowerCase()
       }
       newStr += e;
    }
    return newStr;
}

console.log(swapCase("jAvaScRIPt"));
