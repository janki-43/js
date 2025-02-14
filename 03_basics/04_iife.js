// Immediately Invoked function Expressions (IIFE)
//We don't want pollution from globle scope so we make individual scope
// And to immediately execute our function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); 
})();
// first() will be definition of fucntion and second() will be execution
// you have to end IIFE by ; so that it stops there

// ( function aurcode() {
//     console.log(`DB CONNECTED TWO`);   
// })()


// ( () => {
//     console.log(`DB CONNECTED TWO`);   
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   
})('hitesh')