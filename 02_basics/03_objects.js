// singleton
// can create objects in two ways i) literal and ii) constructor
// if we declare it like literals than it won't create singleton 

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
// console.log(JsUser["email"]);// prefer this method
// console.log(JsUser["full name"]);
// //console.log(JsUser.mySym);// prints but data type is not symbol
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)// IMPORTANT
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// `` -> string interpolation
}

//console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());//TypeError: JsUser.greeting is not a function because object was freez
// after removing it will printHello JS user,undefined
console.log(JsUser.greeting);//[Function (anonymous)]
// function is not executed it is just returning its reference

console.log(JsUser.greetingTwo());

