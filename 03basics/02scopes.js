let a= 10
let b = 20
let c= 30

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const webssite = "youtube"
        console.log(username);
        console.log(webssite);
    }

    // console.log(webssite);

    two()
}

// one()


// if (true) {
//     const username = "hitesh"
//     if (username==="hitesh") {
//         const webssite = " youtube"

//         console.log(username + webssite);
//     }
// }


// +++++++++++++++++++++++++ interesting  +++++++++++++++++++++++++++++++++++++

console.log(addOne(8));

function addOne(num) {
    return num +1
}

const addTwo = function add2 (num) {
    return num + 2
}
console.log(addTwo(3));