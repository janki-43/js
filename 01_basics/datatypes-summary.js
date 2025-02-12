// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id == anotherid)// false

const bigNumber = 321546541321654654656n  
// Reference Type(Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof bigNumber)

//https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "janakidotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@oogle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
