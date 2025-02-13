// through constructor

//const tinderUser = new Object() // singleton object
const tinderUser = {} // non- singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);// empty object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

//const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//imp
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

//+++++++++++++++++++++++++++++++++++++++++
// destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstrucotr: "hitesh"
}

//course.courseInstructor

//const {courseInstructor} = course
// if you think its a big name then you can rename
const {courseInstrucotr: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// react portion {} means destructuring of objects
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

//++++++++++++++++++++++++++++++++++++
// API - menu card of documentation
// API values comes into JASON- JS object notation

// {
//     "name": "hitesh",
//     "coursename": "jas in hindi",
//     "price": "free"
// }

//https://api.github.com/users/hiteshchoudhary

//how i use fetch method in api or JS
//when i will call this url from fetch method then i will get data
// Sometimes you get APIs in array format

// [
//     {},//objects
//     {},
//     {}
// ]

//randome user me api// JSON formatter// format and beautify // code->tree 