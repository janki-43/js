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
console.log(stringNumber);//33
console.log( typeof stringNumber);//string