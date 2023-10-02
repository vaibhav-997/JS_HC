let myName = "Vaibhav   "

// console.log(myName.length)
// console.log(myName.truelength)


let myHero = ['thor','spiderman']

let heroPower = {
    thor : "hammer",
    spider : "sling",
    getspiderPower : function ( ){
        console.log(`spider power is ${this.spiderman}`)
    }
}

// accessing high level hirarchy . Object is the topmost obove abject is null
Object.prototype.vaibhav = function(){
    console.log("vaibhav is present in all object")
}

Array.prototype.heyVaibhav = function(){
    console.log("hey vaibhav")
}

// heroPower.vaibhav()
// myHero.vaibhav()

// checking if the high level hirarchy of array created function can be used by object level 

//object has no access but the array has the access
// herroPower.heyVaibhav()
// myHero.heyVaibhav()


// inheritance

const user = {
    username : "chai",
    email: "chai@google.com"

}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

// now teacher can access the properties of the user
Teacher.__proto__ = user


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chai aur code      "

String.prototype.truelength = function(){
    // this gives the reference of the the object or function or array or string calling it
    console.log(`${this}`)
    // console.log(`True length is ${this.trim().length}`)
}



anotherUsername.truelength()
"Vaibhav".truelength()
"iceTea".truelength()