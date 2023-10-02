const user = {
    username : "vaibhav",
    loginCount : 8,
    isLoggedIn : true,

    getUserDetails : function () {
        // console.log("Got user details from Database")
        // console.log(`The name of the user is ${this.username}`)
        console.log(this)
    },

    
}


const user2 = {
    username : "vaibhav",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function () {
        // console.log("Got user details from Database")
        // console.log(`The name of the user is ${this.username}`)
        console.log(this)
    },

    
}


// console.log(user.username)
// console.log(user.getUserDetails())

function User (username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}


// When new is use it creates a new object
// Constructor functio is called
// all keywords are injected in it
const userOne = new User("Vaibhav", 5, false)
const userTwo = new User("Sarthak", 6,true)
// console.log(userOne)
// console.log(userTwo)
console.log(userTwo.constructor)
