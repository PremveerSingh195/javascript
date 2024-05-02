function multiplyby5(num) {
    return num*5
}

multiplyby5.power = 6

// console.log(multiplyby5(3));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype);

function createUser(username , score) {
    this.username = username
    this.score  = score
}

createUser.prototype.increment = function () {
  return  this.score++
  
}

createUser.prototype.printme= function () {
    console.log(`price of chai is ${this.score}`);
}

const chai = new createUser("chai" , 25)

chai.printme()
console.log(chai.increment());