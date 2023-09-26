// singleton


// Object literals
// Object.create

const mySym = Symbol('Vai')
// literal objects
const JsUser = {
    name : 'Vaibhav',
    age : 20,
    "full name": 'Vaibhav', // this type of key can not be iterated by using dot
    location : 'Karad',
    [mySym] : 'vaib', // symbols are used in square bracket
    email : 'v@v.com',
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Saturday']
}


// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])
// console.log(JsUser[mySym]) // syntax for using values of symbol

JsUser.email = 'vaibhav@via.com'
// console.log(JsUser.email)
// Object.freeze(JsUser)  // freeze the object it can not be changed
JsUser.email = 'vaibhav@google.com'
// console.log(JsUser.email)
// console.log(JsUser)


JsUser.greeting = function(){
    console.log('Hello JSUSER')
}

JsUser.greeting2 = function(){
    console.log(`hello JsUSer ${this.name}`)  // this is user to get the elements from the current function
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())




