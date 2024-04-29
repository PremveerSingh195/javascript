const user = {
    username:"Premveer Singh",
    logincount:9,
    signedIn: true,
    getUserDetails: function () {
        // console.log(`${this.username} is my name`);
        console.log(this);
    }
}

// console.log(user["getUserDetails"]()); 
// console.log(this);

function User(username , logincount , isLoggedIn) {
           this.username = username,
           this.logincount = logincount,
           this.isLoggedIn = isLoggedIn

           return this
}

const userOne = new User("varun" , 10 , false)
const userTwo = new User("negi" , 41 , true)

console.log(userOne.constructor);
// console.log(userTwo);