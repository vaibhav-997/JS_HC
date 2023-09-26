//  Primitive

// called by value it is provided the copy value from the data

// 7 types: String, Number, Boolean, Null, undefined, Symbol, bigint

const score = 33 // number
const scoreValue = 100.33 //number
const isLoggedIn = false //boolean
const outsideTemp = null  // null is the empty value (null is an object) type of object
let userEmail; // undefined is a variable that is created the but value to the object is not defined  type of undefined

// Rember that symbol is always unique
const id = Symbol('123') // type of symbol
const anotherId = Symbol('123')
console.log(id == anotherId); // false

// const bigNumber = 1223534236275243262572n  //bigint

// console.log(typeof scoreValue);

// Java Script is dynamically typed language




// Reference(non-primitive)

// Array, Objects, Functions
// Type of the non - primitive data type is function i.e object function



const heros = ['shaktiman', 'naagraj', 'doga']  //Array
 
// Object is a key value pair
const myObj = {
    name : 'Vaibhav',
    age : 20
}

const myFunction = function(){
    console.log('hello world');
}

// myFunction()



//  Stack (primitive)    Heap(non-primitive)

// Stack provides the copy of the data -- make changes in the copy data
let myName = 'Vaibhav'
let anotherName = myName
anotherName = 'Sarthak'


// console.log(myName);
// console.log(anotherName);

// Heap provides the actual data  --Changes the actual data
let userOne = {
    name: 'Vaibhav',
    age:20
}

let userTwo = userOne

userTwo.name ='Sarthak'
   


// console.log(userOne.name);
// console.log(userTwo.name);