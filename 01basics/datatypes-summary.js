// Primitive data types

// 7 types : string , Number , Boolean , null , undefined ,BigiNt , symbol

const score = 100
const scoreValue = 100.30 //both are same data type

const LoggedIn = false //Boolean data type

const outsideTemp = null // null data type

let userEmail;  //undefined data type

const id = Symbol('123')
const anotherID = Symbol('123') // symbol makes every variable unique

// console.log(id === anotherID);


const bigNumber = 87878423112447513012n


// Refrence data type (Non-primitive)


// Array , Objects , Functions

const myArr = ["shaktiman" , "bheem" , "doraemon"]

const myObj = {
    name: 'Prem',
    age : 21,
    position : 'Software Engineer'
}

const myFunc = function () {
    console.log("hello world");
}

// console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap(Non-Primitive)

let myName = "premdotcom"

let anotherName = myName

anotherName = "chaiaurcode"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : 'googledotcom',
    upi: 'user1ybl'
}

let userTwo = userOne

userTwo.email = 'metadotcom'

console.log(userOne.email);
console.log(userTwo.email);