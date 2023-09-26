// const num = [1, 2, 3]
// const initial = 0
// const total = num.reduce((acc, currval) => {  // accumalator and current value
//     console.log(`acc: ${acc},   currval: ${currval}`)
//     return acc + currval
// }, 0)

// arrow function
// const total = num.reduce((acc, curr)=>(acc + curr),0)


// console.log(total)


const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'python course',
        price : 999
    },
    {
        itemName : 'mobile course',
        price : 5999
    },
    {
        itemName : 'data science course',
        price : 12999
    },
  
]


const priceToPay = shoppingCart.reduce((acc, item)=>acc + item.price,0)

console.log(priceToPay)












