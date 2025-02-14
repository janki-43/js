//let,var,const


//var c = 300
let a = 300
//scope- {}// block scope below and above or outside one is globle scope
if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ",a);//10
    
   // var c = 30// avoid var
}

//console.log(a);//a is not defined//300
// console.log(b);// b is not  defined
// console.log(c);//30

//scope is different in inspect in browser and whenn we use it with node

//+++++++++nested scope
// child function can use parent variables

function one(){
    const username = "Janaki"

    function two(){
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);//error
    
   two()

}
//one()

if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++ interesting ++++++++++++++++++++
addone(5)
console.log(addone(5));
function addone(num){
return num + 1
}

// declaration with hold that is why we cant call it before defining

const addtwo = function(num){
    return num + 2
}
addtwo(5)
console.log(addtwo(5));

