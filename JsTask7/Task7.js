
// TASK 1 -- SPLIT FUNCTION -- Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).


// function splitsentence (sentence){
//     return sentence.split(" ")
// }
// console.log(splitsentence("This sentence is an example of javascript split function."))


// TASK 2 --- // Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.) 

// first option
// let str= "Alion GreenHeart";
// let point= "."
// let result= str.slice(0,7).concat(point)
// console.log(result);

// second option
// let str ="Alion GreenHeart";
// let point= "."
// const newStr=(str)=> str.slice(0,7).contact(point);
// let result = newStr(str);
// console.log(result);


// TASK 3 -- // Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.) 

// first option
// let str= "Alion GreenHeart";
// let point= "."
// let result= str.slice(0,7).concat(point)
// console.log(result);

// second option
// let str ="Alion GreenHeart";
// let point= "."
// const newStr=(str)=> str.slice(0,7).concat(point);
// let result = newStr(str);
// console.log(result);


// TASK 4 -- // validate gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, 
// ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

// let newGmail= prompt ('daxil edin:')
// const gmail= (validation) => {
//     if (validation.length >=5){
//     return newGmail.concat("@gmail.com")
//     }
//     else{
//         return false
//     }
//  }
// let result = gmail(newGmail);
// console.log(result);


// TASK 5 -- // 1. Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox. 

// const today= new Date()
// const onlydate=today.getDay()

// function dateofLesson (onlydate) {

// if (onlydate===6||onlydate===7) {
//     alert("Bu gun ders gunu deyil.")
// }
// else {
//     alert ("Bu gun ders var.")
// }
// }
// console.log (dateofLesson())


// TASK 6 -- ***

// const today = new Date()
// const currentYear = today.getFullYear()
// const currentMonth=String(today.getMonth()+1).padStart(2,"0")
// const currentDay=String (today.getDay()).padStart(2,"0")
// const currentFullname = `${currentYear}-${currentMonth}-${currentDay}`

// document.write (currentFullname)

// ****

// const dateObject= new Date ();

// let date = dateObject.toUTCString ();
// console.log (date);

// *****

// let date= new Date().toUTCString().slice (5,16)
// document.write (date)

// TASK 7 -- // *ADVANCED* Bu gun heftenin hansi gunudur, onun adini avtomatik document-e yazin. (obyektlerden istifade ede bilersiniz)
// const days= [
//       "Bazar",
//       "Bazar ertesi",
//       "Cershenbe axsami",
//       "Chersenbe",
//       "Cume axsami",
//       "Cume",
//       "Shenbe"
//       ]
//       const today=new Date()
//       const currentDay=  days[today.getDay()]
//       document.write(currentDay);

// TASK 8 -- // *ADVANCED* Bu ay hansi aydir adini document-e yazin. (obyektden istifade ede bilersiniz)

// const months= [
//       "Yanvar",
//       "Fevral",
//       "Mart",
//       "Aprel",
//       "May",
//       "Iyun",
//       "Iyul",
//       "Avqust",
//       "Sentyabr",
//       "Oktyabr",
//       "Noyabr",
//       "Dekabr"
//       ]
//       const month=new Date()
//       const currentMonth= months[month.getMonth()]
//       document.write(currentMonth);

// const months= {
    //      0: "Yanvar",
    //      1: "Fevral",
    //      2: "Mart",
    //      3: "Aprel",
    //      4: "May",
    //      5: "Iyun",
    //      6: "Iyul",
    //      7: "Avqust",
    //      8: "Sentyabr",
    //      9: "Oktyabr",
    //      10: "Noyabr",
    //      11: "Dekabr"
    //       }
    //       const month=new Date()
    //       const currentMonth= months[month.getMonth()]
    //       document.write(currentMonth);


      

// TASK 9 -- // Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin. 
// Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)

// let age = +prompt ("Enter your age")
// let life =77;

// function whenYouWilldie () {
//     if (age===77) {
//         return "You are about to die"
//     }
//     else {
//         let hesabla = (life -= age)
//     return hesabla
//     }

// }
// console.log (whenYouWilldie())


// TASK 10 -- // Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun, saat, deqiqe, saniye kecib. (heresini ayrica) 
// meselen, kecen il sayi: 23,
// kecen ay sayi: 234
// kecen gun sayi: 6974 
// ve s.
