// const myname = "Premveer           "

// console.log(myname.length);


let myHeroes = ["thor" , "spiderman"]

let heroes = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderpower : function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all object");
}

Array.prototype.prem = function(){
    console.log("hey from prem");
}

// heroes.hitesh()

// myHeroes.hitesh()
// myHeroes.prem()

const User = {
    username : "chai"
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



//modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)


// console.log(TeachingSupport);


String.prototype.truelength = function () {
    return this.trim().length
}

const Name = "Sunny    "

const gender = "female    "

console.log(Name.truelength());

console.log(gender.truelength());
