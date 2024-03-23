const userEmail = [1,2,3]



// if (userEmail) {
//     console.log("we found user email");
// }else{
//     console.log("we did not find user email");
// }

//falsy values

// false , 0 , -0 , Bigint 0n , "" , null , undefined , Nan

//truthy values

//true , "0" , "false" , " " , [] , {} , function () {}

// if (userEmail.length !== 0) {
//     console.log("Array is not empty");
// }else{
//     console.log("array is empty");
// }

const myObj = {username:"Prem",}

// if (Object.keys(myObj).length !== 0) {
//     console.log("Object is not empty");
// } else{
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??) : null , undefined

let val1

// val1 = 5 ?? 10
// val1 = null ?? 3
// val1 = undefined ?? 21
val1 = null ?? undefined ?? 67 ?? 89


// console.log(val1);


// Terniary operator
// condition ? true : false

const courseprice = 0

courseprice >= 80 ? console.log("Course price greater than 80") : console.log(" course price lower than 80 ");
