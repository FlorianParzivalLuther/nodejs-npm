const myColors = require("colors/safe");
var cool = require('cool-ascii-faces')

 




console.log(myColors.rainbow("hey there"));
console.log(myColors.inverse("hey there"));
console.log(myColors.blue("hey there"));

const cows = require('cows');

console.log(myColors.inverse(cows()));

console.log(myColors.rainbow(cool()))



