function sayMyName() {
  console.log("P");
  console.log("R");
  console.log("E");
  console.log("M");
}



// sayMyName()
// sayMyName()
// sayMyName()

// function addTwoNumbers(num1 ,num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1 ,num2) {
  // let result = num1 + num2
  // return result
  return num1+num2
}
 

const result =  addTwoNumbers(7,6)

// console.log(`Result : ${result}`);

// function loginUserMessage(username) {
//      return `${username} just logged in`
// }

function loginUserMessage(username = sam) {
  if (!username) {
    console.log("Please entered username");
    return
  }
  return `${username} just logged in`
}


// console.log(loginUserMessage("Premveer"));
// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(...num1) {
  return num1
}


// console.log(calculateCartPrice(5 ,2 ,232 ,67));

const user = {
  username:"Prem",
  price:0,
}

function handleObject(anyObject) {
         console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//   username:"Prem",
//   price:0,
// })

const myArray = [3,5,7,9,10]

function returnArrayValue(getArray) {
      return getArray[2]
}


// console.log(returnArrayValue(myArray));
console.log(returnArrayValue([1,8,6,4,7]));
