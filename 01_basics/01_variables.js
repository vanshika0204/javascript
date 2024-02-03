const accountId = 144553
let accountEmail = "sehgalvanshika709@gmail.com"
var accountPassword = "12345"
accountCity = "gurugram"
let accountState

// accountId=2 // not allowed

accountEmail = "dsgf@gmail.com"
accountPassword = "21212121"
accountCity="Sonipat"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])