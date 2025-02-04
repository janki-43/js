const accountId = 144553
let acccountEmail = "janki@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

acccountEmail = "hc@hc.com"
accountPassword = "32543646"
accountCity = "Ahmedabad"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope and functional scope

*/
console.table([ accountId, acccountEmail, accountPassword, accountCity, accountState])
