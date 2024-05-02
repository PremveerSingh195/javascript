// class User {
//     constructor(username , email , password){
//      this.username = username
//      this.email = email
//      this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     nameUpper(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai" , "email@gmail.com" , 123)

// console.log(chai.nameUpper());

//behind the scene

function User (username , email , password){
     this.username = username
     this.email = email
     this.password = password
}
// we also like this


//  Object.prototype.encryptPassword = function () {
//     return `${this.password}abc`
// }

User.prototype.encryptPassword = function () {
    return `${this.password}abc`}

const tea  = new User("tea" ,  "tea@gmail.com" , 123)

console.log(tea.encryptPassword());