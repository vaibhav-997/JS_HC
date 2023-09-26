const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// returns automatically
// const num = myNumbers.map((items)=>{ return  items + 10})
// console.log(num)


// Chanining
const newNums = myNumbers.
    map((num)=>num * 10). // values is passed to the next chaning
    map((num)=>num + 1) .filter((num)=>num >= 40)  // filter is based on true or false 

console.log(newNums)






















