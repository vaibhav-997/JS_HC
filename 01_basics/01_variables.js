const accountId = 144553   //Constant 
let accountEmail = 'vaibhav@gmail.com' //variables
var accountPassword = '12345' //Variables
accountCity = 'Karad' //variables by default -- don not recommended

let accountState;  // undefined

// accountId = 2  // Not Allowed (const can not be changed) 

accountEmail = 'v@v.com'

accountPassword = '12121212'

accountCity ='Bengaluru'

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and fnctional scope
*/


console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])