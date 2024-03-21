// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false


// console.log(tinderuser);

const regularUser = {
    email: 'some@gmail.com',
    fullname : {
        userFullname :{
                firstname: "Premveer",
                lastname : "Singh"
        }
    }
}

// console.log(regularUser.fullname.userFullname.lastname);
 

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}


// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1 ,obj2 , obj4) // first element in target and rest are source

// console.log(obj3);

// console.log(obj3 === obj1);

const obj3 = {...obj1 , ...obj2 ,...obj4}

// console.log(obj3);


// console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('name'));