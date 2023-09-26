const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heroes) // add other array as a array element

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros) // creates new array without creating is an array element in it
// console.log(heros);

const allheros = [...marvel_heros, ...dc_heros] // spread operators
// console.log(allheros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]] ]

const real_anotherArray = anotherArray.flat(Infinity) // depth arrays are converted in a single array 
// console.log(real_anotherArray);


// console.log(Array.isArray('Vaibhav'))
// console.log(Array.from('Vaibhav'))


// Array converts to the empty array if it can not convert it
// console.log(Array.from({name : "Vaibhav"}))  // Interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creates array of different variables










