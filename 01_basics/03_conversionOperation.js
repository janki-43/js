let score = true
// 33-number, "33"-string and can be converted into number
// "33abc"- number(NaN), null - 0, undefined -NaN, true -1/false -0
// "hitesh" - NaN
//const {score} = req.body

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

let isLoggedIn = "" // conversion 1 true/ 0 false
// "" - false, "janaki" - true

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);//33
// console.log( typeof stringNumber);//string

//************************Operations ************************

let value = 3
let negValue = -value

//console.log(negValue); 
// console.log(2+2); 
// console.log(2-2); 
// console.log(2*2); 
// console.log(2**3);  //power
// console.log(3/2);   // divide
// console.log(2%3);   //remainder

let str1 = "helllo"
let str2 = " Janaki"
let str3 = str1 + str2
//console.log(str3); //hello Janaki

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
//console.log(((3 + 4) * 5)% 3);

// console.log(true);//true
// console.log(+true);//1
// console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;//++gameCounter
console.log(gameCounter);

// link to study conversion topic
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment