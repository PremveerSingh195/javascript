const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNums =  myNums.map( (item)=> {return item + 10  })

const newNums = myNums.map( (item) => item*10).map((num)=>num +2).filter( (num)=> num > 50 )

console.log(newNums);