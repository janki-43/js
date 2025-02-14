

function sayMyName() {
    
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// above whole is function definition, function is keyword, sayMyName is funciton name
// sayMyName is reference and () is execution
//sayMyName()
// while passing number1 and number2 is called parameters
// when you call this function and pass 3,4 its arguments

// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);
    
// }


//addTwoNumbers() // NaN
//addTwoNumbers(3, 4)//7
//addTwoNumbers(3, "4")//34
//addTwoNumbers(3, "a")//3a
//addTwoNumbers(3, null)//3
function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);
// default value will be sam
function loginUserMessage(username = "sam"){
    //if(!username)
    if(username === undefined){
        console.log("Please enter a username"); 
        return 
    }
    return `${username} just  logged in`
}

// console.log(loginUserMessage("Janaki"))
//console.log(loginUserMessage())//undefined just  logged in

//++++++++Shoppping cart when you don't know how man parameters are going to come
//... rest operator- gives all elements packed in one pack
// num only returns one value first one
//val1 andval2 will occupy first two values and others will be in one array 
function calculateCartPrice(val1, val2,...num1)
{
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 1000));
//object
const user = {
    username: "Janaki",
    price: 199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSeconValue(getArray){
    return getArray[1]
}
//console.log(returnSeconValue(myNewArray));
console.log(returnSeconValue([200, 400, 100, 600]));
