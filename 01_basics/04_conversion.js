// console.log(1 == 2);
// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 >= 2);
// console.log(1 <= 2);
// console.log(1 != 2);

// avoid this type of conversion
// conversion between non similar datatypes is unpredictable
// console.log('2' > 1);
// console.log('02' > 1);


// equality check == and  comparision >= , <= works differently 
// null is converted to 0 and then treated with the conversion
// avoid this type of conversion
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined > 0); //false
console.log(undefined > 0); //false

// === this is the strict check --- it checks strictly for conversion it needs same datatypes

