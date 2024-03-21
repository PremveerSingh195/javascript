//singleton
//object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Premveer",
    [mySym]: "mykey1",
    "full name":"Prem veer Singh",
    age : 18,
    location: 'babayan',
    email:'premdot@.com',
    isloggedin: true,
    lastLogindays: ["monday", 'tuesday' , "friday"]
}

// console.log(jsUser.name);
// console.log(jsUser['age']);
// console.log(jsUser['full name']);
// console.log(typeof jsUser[mySym]);
// console.log(typeof mySym);

jsUser.email = 'www@.com'
// Object.freeze(jsUser)

jsUser.email = 'www.chat@.com'

// console.log(jsUser);

jsUser.greeting = function () {
    console.log('hello JS users');
}

jsUser.greetingtwo = function () {
    console.log(`hello JS users ${this.name}`);
}


// console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());