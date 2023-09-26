// If statement

// = is a assignment operator i.e true is assigned to the variable
// const isUserLoggedIn = true
// const temp = 40

// if (temp === 49){
//     console.log('less than 50')
// }else{
//     console.log('temp is greater than 50')
// }


// <, >, >=, <=, ==,, !=, ===(strict checking it wants only data type not check between different types of data type)
 

// const score = 200

// if (score > 100){
//     const power = 'fly'
//     console.log(`User power: ${power}`)
// }

// Short hand notation

// const balance = 1000
// if (balance > 500) console.log('test');



// not recommended
// if (balance > 500) console.log('test'), console.log('test2');;



const userLoggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitcard && 2 == 3){
    console.log('allowed to buy courses')
}

if (loggedInfromEmail || loggedInfromGoogle){
    console.log('User logged in')
}















