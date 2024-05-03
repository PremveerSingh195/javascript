const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(descriptor);

const myObj = {
    username : "Chai"
}

console.log(Object.getOwnPropertyDescriptor(myObj , "username"));

Object.defineProperty(myObj , 'chai' , {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myObj , "username"));