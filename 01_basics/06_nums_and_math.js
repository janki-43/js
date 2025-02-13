const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); //console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966//123.8966 //23.8966

// console.log(otherNumber.toPrecision(3));//1.12e+3//124//23.9
// priority will be given to decimal
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//4 -ve into +ve
// console.log(Math.round(4.3));// 4 ,4.6->5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));4
// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));//8
console.log(Math.random());// range 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);//1-9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)