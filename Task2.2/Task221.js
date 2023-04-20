let keyword = prompt("Enter word:");

if (keyword === "user"){
    console.log("xos geldin istifadeci");
}
else if(keyword === "admin"){
    console.log("xos geldin cenab admin");
} else if (keyword === "guest"){
    console.log("xos geldin qonaq")
}else{
    console.log("Please enter correct keyword.");
}