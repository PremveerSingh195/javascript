const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(descriptor);

const myObj = {
    username : "Chai",
    price:250,
    orderchai : function (){
           console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(myObj , "username"));

Object.defineProperty(myObj , 'username' , {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(myObj , "username"));

for (let [key , value] of Object.entries(myObj)) {
  if (typeof value !== 'function') {
    console.log(`${key}:${value}`);
  }
}