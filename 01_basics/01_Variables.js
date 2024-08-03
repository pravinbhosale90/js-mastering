const accountId = 456489765
let accountEmail = "pravin@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hsgdfgfd@sghsfhg.com"
accountPassword = "131231654"
accountCity = "Pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])