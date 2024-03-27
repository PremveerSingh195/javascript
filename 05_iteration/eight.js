const myNums = [1,2,3]


const value = myNums.reduce((acc , curr) =>{
    // console.log(`${acc} accumulator value and current value ${curr}`)
return acc +curr 
}, 2)


//console.log(value);


const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'py course',
        price : 999
    },
    {
        itemName : 'mobile dev course',
        price : 5999
    },
    {
        itemName : 'data science course',
        price : 12999
    },
]


const total = shoppingCart.reduce( (acc , curr) => {
    return acc + curr.price
},0 )

console.log(total);