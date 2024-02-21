const accountId = 144553
let accountEmail = "ishika@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId=2 //not allowed 

accountEmail = "hc@ip.com"
accountPassword = "24578"
accountCity = "Bengalure"
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);