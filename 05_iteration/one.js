//for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element === 5) {
//         console.log(`5 is best number`);
//     }
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  //console.log(`Table of  ${i}`);
    for (let j = 1; j <= 10; j++) {
    //   console.log(`inner loop ${j}`); 
    //console.log(`${i} * ${j} = ${i*j}`);
    }
}



const myArray = ["shaktiman" , "spiderman" , "batman" , "krish" , "Ironman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

for (let index = 1; index < 20; index++) {
    if (index === 5) {
        //console.log("Five detected");
        break
    }
        //console.log(`value of index is ${index}`);
}



for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("Five detected");
        continue
    }
        console.log(`value of index is ${index}`);
}