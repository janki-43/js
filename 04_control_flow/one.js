// if

//if(condition){

// const isUserloggedIn = true
// const temperature = 41
// if( temperature === 40 ){
// console.log("les than 50");

// }else {
// console.log("temperature is greater than 50");
// }
// <, >, <=,  >=, == checks equal, !=, ===  strict equal -also checks tye

//+++++++++++++++++++++++++++++++++++++

// const score = 200
// if( score > 100){
//     let power = "fly"// var is not used as its global so don't use
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

//+++++++++++++++++++++++

// const balance = 1000
// // if( balance > 500 ) console.log("test");//implicit scope
// // if( balance > 500 ) console.log("test"),console.log("test2");

// if ( balance < 500 ){
//     console.log("less than 500");

// } else if( balance < 750 ){
//     console.log("less than 750");

// } else if( balance <900 ){
//     console.log("less than 900");

// } else {
//     console.log("less than 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// && is used when each condition should be true
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
    
}
// || is used when atleast one condition should be true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
