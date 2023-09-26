

function sayMyName (){
    console.log('V');
    console.log('A');
    console.log('I');
    console.log('B');
    console.log('H');
    console.log('A');
    console.log('V');
    
}

// sayMyName()


// input in the function is parameters
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
//     console.log('vaibhav') // after return the function do not runs the code
// }

function addTwoNumbers(num1, num2){
    return num1 + num2
}

// values passed in function is arguments
// values can be stored in variables if the function is returning something 
// const result = addTwoNumbers(3, 5)
// console.log("Result:", result)

// function loginUserMessage(username = "Sam" ){ //default value
//     // if(username === undefined){
//     //     console.log("Please enter a username")
//     //     return
//     // }
//     // if statement code will not work it has a default value
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }


// // if the argument is not passed the function will return undefined
// const result = loginUserMessage()
// console.log(result)



// rest operator  
// multiple parametrs using rest or spread operator
function calculateCarPrice(val1,val2,...num1){
    return num1
}



// console.log(calculateCarPrice(200, 400, 500, 2000))

const User ={
    username : 'Vaibhav',
    price : 299
}

function handleObject(anyObject){
    console.log(`User is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(User)
// handleObject({
//     username: 'Sarthak',
//     price: 499
// })

const myNewArray = [200, 300, 400]

function returnSecondValue(getArr){
    return getArr[1]
}

// console.log(returnSecondValue(myNewArray))

// console.log([100, 200, 300])


