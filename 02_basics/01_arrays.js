// array
//const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
const myArr = [0, 1, 2, 3, 4, 5]

//console.log(myArr[1]);// start from first indexing 
//https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) // add number in the very start and shifts all the elements(not recommended or can use in todo)
//myArr.shift()
// console.log(myArr.includes(9));//boolean
// console.log(myArr.indexOf(9));//-1
// console.log(myArr.indexOf(3));//3
// const newArr = myArr.join()
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5 //string

//slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// start from 1st include 1st and 3rd excluded

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)// start from 1st include both 
// splice manipulate main original array and cut the given elements
console.log("C ", myArr);
console.log(myn2);
