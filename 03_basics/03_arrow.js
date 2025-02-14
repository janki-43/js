const user = 
{
    username: "Hitesh",
    price: 999,
// to access current context
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);// empty object because we are in node environment
// in browser global object is Window

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username); //undefined
// //     console.log(this);


// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }



// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "hitesh"
   // console.log(this.username);// undefined
    console.log(this);// {}   
}

//chai()
// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// } if we use {} then its compulsory to use return

// implicit return
//const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// can't return direct object have to wrap them into parenthesis
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function(){})
