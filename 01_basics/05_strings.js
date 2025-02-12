const name = "janaki "
const repoCount = 50

//console.log(name + repoCount + " Value"); // Not recommended

//back texts- string interpolations
// we will make placeholders

//console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')
// See Doc Of JS

//console.log(gameName[0]);//h
//console.log(gameName.__proto__);//{}

//console.log(gameName.length);//8
//console.log(gameName.toUpperCase());//HITESHHC
//console.log(gameName.charAt(2));//t
//console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)// 4 exclude- 0,1,2,3
//console.log(newString);//can't use negative is we use it will just ignore

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()) // removes extra spaces
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))//true

console.log(url.includes('sundar'))

// converting string into array

console.log(gameName.split('-'));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split