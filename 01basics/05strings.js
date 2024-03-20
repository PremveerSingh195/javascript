let name = "Prem veer Singh"

let position = "Software developer"


console.log(`My name is ${name} and i am a ${position}`);

const gamename = new String('Prem-veerS')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('e'));

const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-8,4)

console.log(anotherString);

const anotherOneString = "     Premone    "

console.log(anotherOneString);
console.log(anotherOneString.trim());

const url = "www.price404.com/flip%5kart"

console.log(url.replace('%5' , '-'));

console.log(url.includes('dsv'));

console.log(gamename.split('-'));

