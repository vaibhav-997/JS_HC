// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, crytography , network
//     setTimeout(()=>{
//         console.log('Async task is compelete')
//         resolve()
//     },1000)
// })

// then has a connection with resolve
// promiseOne.then(()=>{
//     console.log('promise consumed')
// })

// Second promise
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('Async task two')
//         resolve()
//     }, 1000);
// }).then(()=>{ console.log('async 2 resolved')})

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({
//             username : 'Chai',
//             email : 'Chai@code.com'
//         })
//     }, 1000);
// })

// promiseThree.then((user)=>{
// console.log(user)
// })


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let err = true
//         if(!err){
//             resolve({username:'Vaibhav',password:'123'})
//         }else{
//             reject('Something went wrong')
//         }
//     }, 1000);
// })

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((usrname)=>{
// console.log(usrname)
// })
// .catch((err)=>{
// console.log(err)
// }).finally(()=>{
//     console.log('The promise is either resolved or rejected')
// })


// const promiseFive = new Promise((reject, resolve)=>{
//     setTimeout(() => {
//         let err = false
//         if(!err){
//             resolve({username:'javascript',password:'123'})
//         }else{
//             reject('Js went wrong')
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//    try{
//     const response = await promiseFive
//     console.log(response)
//    }catch(error){
//     console.log(error)
// }
// }
// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await res.json()
//         console.log(data)  
        
//     } catch (error) {
//         console.log(error)
//     }
// } 

// getAllUsers()



// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
// return res.json()
// })
// .then((data)=>{
// console.log(typeof data)
// const res = data

// data.map(element => {
//     console.log(element.email)
    
// });



// })
// .catch((e)=>{
//     console.log(e)
// })












