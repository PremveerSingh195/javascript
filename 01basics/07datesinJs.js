let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.getHours());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());


// let createdDate = new Date(2022 , 11 , 1)
let createdDate = new Date("2001-12-12")
// console.log(createdDate.toLocaleDateString());

const myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday:"short"}));