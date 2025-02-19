//node 05_iterations/three.js
// for of
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for( const num of arr){
//     //console.log(num);
    
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);

// }

//Maps

const map = new Map()
//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);
// for of
// for (const [key, value] of map) {
//     // console.log(key, ':-' , value);
    
// }

// const myObject = {
//     // 'game1' : 'NFS',
//     // 'game2' : 'Spiderman'
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// //TypeError: myObject is not iterable
// for (const [key, vbalue] of myObject) {
//     console.log(key, ':-', value);
// }
// maps are iterable but objects are not