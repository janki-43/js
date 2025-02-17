//for
// ctrl + c to stop the infinity loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
       // console.log("5 is best number");
        
    }
    //console.log(element);
       
}

//let index = 0; variable declare
//index < array.length; condition check
//index++ increment
// ctrl + d to change all at once

//Tables
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j );
        
    }
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element); 
}

// break and continue

// for (let index = 1; index <= 20 ; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break // breaks whole loop
        
//     }
//     console.log(`Value of i is ${index}`);
// }

for (let index = 1; index <= 20 ; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue// skips one condition and continue the loop
    }
    console.log(`Value of i is ${index}`);
}