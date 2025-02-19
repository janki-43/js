//node 05_iterations/five.js
const coding = ["js", "ruby", "java","python", "cpp"]
//callback function does not have name
//as a parameter we can write anything as name

// coding.forEach( function (item)  {
// console.log(item);
// } )

// arrow

// coding.forEach( (val) => {
//     console.log(val);
    
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)// give only reference don't execure lijke 
// //printMe)()

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);

// } ) 

//Used in Database

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )