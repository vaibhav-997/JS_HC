let score = '33abc'  // non-number string can not be converted it gives Nan - not an number

// console.log(typeof(score));
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log( valueInNumber); // converted to number but is NaN 

// '33' => 33
// '33abc' => NaN
// true => 1  / false => 0

let isLoggedIn = 'vaibhav'
let booleanISLoggedIn = Boolean(isLoggedIn)
// console.log(booleanISLoggedIn);

//  1 => true
//  '' => false
// 'vaibhav' => true
// 0 => false


let someNumber = 44
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);