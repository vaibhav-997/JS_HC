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
// console.log(stringNumber);
// console.log(typeof stringNumber);


//  ********************** Operations ************************

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); // exponential
// console.log(2 / 2);
// console.log(2 % 2); // remainder

let str1 = 'hello'
let str2 = ' Vaibhav'
let str3 = str1 + str2
// console.log((str3));


// console.log('1' + '2');
// console.log(1 + '2');
// console.log('1' + 2 + 2); // Conversion is done based on the first value 1+2+2 all are string
// console.log(1 + 2 + '2'); // Conversion is done based on the first value 1+2 = 3 + 2--string

// Not prefred but possible
// console.log(true)
// console.log(+true)  // +true = 1


let num1, num2, num3
num1 = num2 = num3 = 2 + 2


let gamecounter = 100
++gamecounter //prefix  increment and then prints
// gamecounter++ //postfix prints and then increment
console.log(gamecounter);