const accountId = 24680
let accountEmail ="pravi@googlemail.com"
var accountPassword = "213141";
accountCity="Betul";

// we can not do this because a constant value is unique and it can not be reassign 
//accountid=34566 
// let can be reassign however its a block scope 
accountEmail="jaykishori@googlemail.com"
// var is a globle scope variable so it can be declare anywhere assign any where and access is also  
accountPassword = "312341"

accountCity="jaipur";


console.table([accountId,accountEmail, accountPassword,accountCity]);