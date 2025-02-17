// const userEmail = "h@gmail.com"//Got user email
// const userEmail = ""//Don't have user email
// const userEmail = [] //Got user email
// if( userEmail){
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// assumed true values are truthy values

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){} 

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyobj = {}
// if (Object.keys(emptyobj).length === 0){
//     console.log("Object is empty");
// }


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10

// console.log(val1);//5
// val1 = null ?? 10
// console.log(val1);//10 we can put complex function
// // val1 = undefined ?? 15
// console.log(val1);//15
val1 = null ?? 10 ?? 20
console.log(val1);//10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less thean 80 ") : console.log("more than 80");
;
