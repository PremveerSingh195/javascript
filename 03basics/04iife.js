// function chai() {
//     console.log("DB CONNECTED");
// }
// chai()

(function chai() { // named iife
    console.log("DB CONNECTED");
})(); // ; use to end the iife function 

((name)=>{
    console.log(`My name is ${name}`);
})("prem");