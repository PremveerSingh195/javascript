// const user = {
//     username : "Prem",
//     logincount : 8,
//     signedin :true,
//     getUserdetails: function () {
//         // console.log('data received from data base');
//         // console.log(`This is my username : ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user['username']);
// console.log(user['getUserdetails']());
// console.log(user.getUserdetails());

// console.log(this);

function User(username , logincount , isLoggedIn) {
    this.username = username,
    this.logincount = logincount,
    this.isLoggedIn = isLoggedIn
    this.greetings = function () {
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Hitesh" , 9 , true)
const userTwo = new User("Prem" , 2 , false)

console.log(userOne.constructor);
console.log(userTwo);