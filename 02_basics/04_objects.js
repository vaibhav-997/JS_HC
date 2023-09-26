const tinder = new Object()  // singleton object

tinder.name = 'Vaibhav'
tinder.email = 'v@v.com'
tinder.isLoggedIn = false

// console.log(tinder)

const regularUser = {
    email : 'some@gmail.com',
    fullname : {
        userfullname:{
            firstname : 'vaibhav',
            lastname : 'Inamdar'
        }
    }

}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1:'a',
    2:'b',
    
}

const obj2 = {
    3:'a',
    4:'b',
    
}
const obj4 = {
    5:'a',
    6:'b',
    
}

// const obj3 = {obj1, obj2}
// {} => target , obj1, 2, 3 are the source
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // creating a sigle object of two objects


const obj3 = {...obj1, ...obj2, ...obj4} // spread operator
// console.log(obj3)

const users = [
    {
        id : 1,
        email: 'v@v.com'
    },
    
    {
        id : 1,
        email: 'v@v.com'
    },
    
    {
        id : 1,
        email: 'v@v.com'
    },
    
    {
        id : 1,
        email: 'v@v.com'
    },
    
]

users[1].email
console.log(tinder)

console.log(Object.keys(tinder)) // return the array
console.log(Object.values(tinder)) 
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty('isLooged'))  // gives boolean if the property is available









