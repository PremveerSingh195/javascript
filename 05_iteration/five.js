const coding = ['js','ruby','python','cpp' ,'java']

// coding.forEach( function (item) {
//   console.log(item);
// })


// coding.forEach((val)=>{
//     console.log(val);
// })

// function printme(params) {
//     console.log(params);
// }

// coding.forEach(printme)


// coding.forEach((item , index , array)=>{
//        console.log(item , index ,array);
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]


myCoding.forEach((item)=>{
      console.log(item.languageFileName);
})