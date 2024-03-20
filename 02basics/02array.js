const marvel_heroes = ["thor" , "ironman" , "spiderman"]

const dc_heroes = ["superman", "flash" ,"batman"]


// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const newArr = marvel_heroes.concat(dc_heroes)

// console.log(newArr);

// console.log([...marvel_heroes , ...dc_heroes , "shaktiman"]);

const anotherArray = [1,2,3,4,[1,2],8,[12,[9,8,6],9]]


const usable_anotherArray = anotherArray.flat(Infinity)


// console.log(usable_anotherArray);


console.log(Array.isArray("Prem"));
console.log(Array.isArray([1,2,3,4,5]));
console.log(Array.from("Prem"));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));

