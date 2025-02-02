const accountId = 144553
let accountEmail = "aneezakokab@gmail.com"
var accountPassword = "12345"
accountCity = "Okara"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "2121"
accountCity = "Karachi"
console.log(accountId);

/*
perfer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
