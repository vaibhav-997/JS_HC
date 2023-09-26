// Array
// can have multiple data types
// const myArray = [0, 1, 2, 3, 4, 5, true, 'Vaibhav']


// Shallow copy --- same reference 
// Deep copy --- do not share the same reference


const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ['Shaktiman', 'naagraj']

// const myArray2 = new Array(1,2,3,4,5)
// console.log(myArray[1])


// Array methods

// myArray.push(6) // push the element in the array
// myArray.push(7) // push the element in the array
// myArray.pop() // removes the last element in the array

// myArray.unshift(9)  // adds the element at the start of the array
// myArray.shift()  // removes the first element in the array

// console.log(typeof myArray.includes(9));
// console.log(myArray.includes(9));


// console.log(myArray.indexOf(5));

// const newArr = myArray.join() // joins and convert to the string


// Slice and Splice




// console.log(myArray)
// console.log(newArr)

const myn1 = myArray.slice(1,3) // prints the elements of the array
console.log('A ',myArray)
console.log(myn1)
console.log('B ',myArray)

const myn2 = myArray.splice(1,3)  // removes the elements from the array  manipulates the original array
console.log('C ',myArray)
console.log(myn2)













