const name = 'Vaibhav'
const repoCount = 50

// console.log(name + repoCount + ' value');

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Vaibhav-Vikas-Inamdar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);  // object

console.log(gameName.length);  // length of the string
console.log(gameName.toUpperCase());  
console.log(gameName.charAt(2));  
console.log(gameName.indexOf('i'));  

const newString = gameName.substring(0, 3)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString)


const newStr1 = '   Vaibhav Inamdar     '
console.log(newStr1)
console.log(newStr1.trim()) // removes the starting and the ending spaces

const url = "https://Vaibhav.com/vaibhav%20Inamdar"
console.log(url.replace('%20', '-'))

console.log(url.includes('vai'))
console.log(url.includes('sarthak'))

console.log(gameName.split('-'))  // splits the string gives array on the basis of seperator
