//  Primitive

// called by value it is provided the copy value from the data

// 7 types: String, Number, Boolean, Null, undefined, Symbol, bigint

const score = 33
const scoreValue = 100.33
const isLoggedIn = false
const outsideTemp = null  // null is the empty value (null is an object)
let userEmail; // undefined is a variable that is created the but value to the object is not defined

// Rember that symbol is always unique
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); // false

// const bigNumber = 1223534236275243262572n  //bigint



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

myFunction()


