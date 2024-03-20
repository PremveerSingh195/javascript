const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(0,1,2,3,4,5)

// myArr2.push(8)
// myArr2.pop()

// myArr2.unshift(10)
// myArr2.shift()




// console.log(myArr2.includes(7));
// console.log(myArr2.indexOf(2));

// console.log(myArr2.join());
// console.log(typeof myArr2.join());

// slice and splice

console.log("A" , myArr2);

const mny1 = myArr2.slice(1,3)
console.log(mny1);

console.log("B" , myArr2);
const mny2 = myArr.splice(1,3)

console.log(mny2);
console.log("C" , myArr);