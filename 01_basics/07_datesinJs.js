// Dates

let myDate = new Date()
// console.log(myDate);//2025-02-13T14:16:52.521Z
// console.log(myDate.toString()); // Thu Feb 13 2025 14:21:28 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Thu Feb 13 2025
// console.log(myDate.toJSON());  //2025-02-13T14:21:28.503Z
// console.log(myDate.toISOString());//  2025-02-13T14:21:28.503Z
// console.log(myDate.toLocaleDateString());//  2/13/2025
// console.log(myDate.toLocaleString());//  2/13/2025, 2:19:36 PM
// console.log(typeof myDate);//object

//let myCreatedDate = new Date(2023, 0, 23)// month starts with 0
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); 

//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // miliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//`${newDate.getDay()} and time ` 
newDate.toLocaleString('default', {
    weekdat: "long"
})