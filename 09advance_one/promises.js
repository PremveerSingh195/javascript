// const promiseOne = new Promise(function (resolve , reject) {
//     //Do an async task
//     //DB calls , crypto graphy ,network call
//     setTimeout(function () {
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {
//     console.log('Promise consumed');
// })



// new Promise(function (resolve , reject) {
//    setTimeout(function () {
//     console.log('async 2 done');
//     resolve()
//    } ,1000)
// }).then(function () {
//     console.log('Promise 2 consumed');
// })


// const promiseThree =  new Promise(function (resolve , reject) {
//    setTimeout(function () {
//     console.log('user data below');
//       resolve({name:"prem" , age : 25})
//    } ,1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// const promiseFour =  new Promise(function (resolve , reject) {
//     setTimeout( function () {
//         let error = false
//         if (!error) {
//             resolve({username:"prem" , age : 25})
//         } else{
//             reject("Something went wrong")
//         }
//     },1000)
// })


// promiseFour.then(function (user) {  
//     return user.username
// }).then(function (username) {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log('the work has been done');
// })

// const promiseFive = new Promise(function (resolve ,reject) {
//     setTimeout( function () {
//         let error = true
//         if (!error) {
//             resolve({language:"javascript" , password:"123"})
//         } else {
//             reject('something went wrong')
//         }
//     },1000)
// })

// async function promiseConsumed() {
//    try {
//     const response =  await promiseFive
//     console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }

// promiseConsumed()



// async function getAllusers() {
//    const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
   return response.json()
}).then((data)=>{
   console.log(data);
}).catch((error) =>{
   console.log(error);
})