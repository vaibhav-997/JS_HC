// let a = 10
// const b = 20
// var c = 30

// scope --- {}

// globla variable or local scope  -- and can be used inside the scope of function or loop or statements
// let a = 300


// if(true){
// // block levle scope  -- can not be used outside the scope
//     let a = 10
//     const b = 20
//     // var c = 30 // var has no effect of the scope iit is problematic
//     console.log('Inner: ', a)
    
// }

// global scope
// console.log(a) 
// console.log(a) // it is inside the if statement
// console.log(b) // it is inside the if statement
// console.log(c)


// function one(){
//     const username = 'Vaibhav'

//     function two(){
//         // can access the outer or parent function
//         const website = "youtube"
//         console.log(username)
//         // console.log(website)
//     }
//     // console.log(website) // con not acces the child function
//     two()
// }


// one()


if(true){
    const username ="vaibhav"
    if(username === "vaibhav"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ********************* Interesting *********************

console.log(addone(5)) // function can be accessable before declaration

function addone(value){
    return value + 1
}


// addTwo(5) // functions stored in the value can not be accessable before declaration
const addTwo = (val) =>{
    return val + 2
}

console.log(addTwo(5))






















