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
console.log(loginUserMessage("hitesh"));
