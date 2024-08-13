const accountId =46054 //cannot be changed once declared
let accountEmail = "xyz@gmail.com"
var accountPass = "abc123"
accountCity = "Delhi"

accountEmail = "abc@gmail.com"
accountPass = "xzs@456"
accountCity = "Gurgaon"
/* Prefer not to use var because of  issue in 
block scope and functional scope */
console.table([accountEmail,accountPass,accountCity]);