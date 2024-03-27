const arr = [1,2,3,4,5]


for (const iterator of arr) {
   // console.log(iterator);
}

const greetings = "Hello world"


for (const iterator of greetings) {
    if (iterator === " ") {
    break
    }
   //      console.log(iterator);   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> forof loop
}

//Maps

const map = new Map()

map.set('IN' , 'India' )
map.set('USA' , 'United states of America') 
map.set('FR' , 'France')
map.set('BR' , 'India')

//   console.log(map);

for (const [key , value] of map) {
  // console.log(key , ':-'  ,value);
}


const myObject = {
      game1 : 'PUBG',
      game2 : 'cod'
}

// for (const [key , value] of myObject) {
//    console.log(key , value);
// }



