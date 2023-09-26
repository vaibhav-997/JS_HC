const User = {
    username : 'Vaibhav',
    price : 999,
    welcomeMessage : function() {
    console.log(`${this.username}, welcome to website`)
    console.log(this) // this talks about the current context
}

}



// User.welcomeMessage()
// User.username = "Sarthak"
// User.welcomeMessage()


// this gives the global values
// if this is console.logged in the inspect it gives the window objects 
// console.log(this) // empty object -- because it is not inside any of the function


// when this is call inside the function it gives the values
// function chai(){
//       // this used inside the funciton gives the global value it stores
//     console.log(this)
//     const username = 'Vaibhav'
//     // console.log(this.username) // undefined
// }

// chai()



// const chai = function (){
     // this used inside the funciton gives the global value it stores
//     console.log(this)
//     const username = 'Vaibhav'
//     // console.log(this.username) // undefined
// }

// const chai = () =>{
//     // this inside the arrow function gives the emptu object
//     let username = 'Vaibhav'
//     console.log(this)
// }

// chai()

// Arrow function


// basic arrow function
// const addTwo = ( num1 , num2)=>{
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// implict arrow function

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
// if {} is used return is compulsory
// if() is used return is not neccessary

// console.log(addTwo(1, 3))

// if object is returning it should be in the ()
const addTwo = ()=> ({username: "Vaibhav"})
console.log(addTwo(3,4))


const myArr = [2,5,6]

// myArr.forEach(function(){})
// myArr.forEach(()=>{})