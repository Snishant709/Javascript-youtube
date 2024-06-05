const accountId=144553
let accountemail="nishant709@gmail.com"
var accountpassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed

accountemail="nishant777@gmail.com"
accountpassword="8888"
accountCity="Mumbai"

/*
Prefer not to use var
because of isssue in block scope and functional scope
*/

console.log(accountId);
console.table([accountemail,accountpassword,accountCity,accountState])