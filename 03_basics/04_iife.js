// Imediately Invoked Function Expressions ( IIFE )

// Sometimes polluted due to the global scope
// function chai(){
//     console.log('db connected')
// }
// chai()


// iffe is used to remove the global scope pollution of the function to remove it IIFE is used
(function chai(){
    console.log('db connected')
})()









