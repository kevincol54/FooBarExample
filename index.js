// find sum of all numbers that are divisable by 3 or 5 that are below 1000
// to run this, CD into the directory and type the command 'node index.js'

//start of by setting the sum variable to 0
var sum = 0
//loop through numbers less than 1000
for(var i = 0; i < 1000; i++) {
  //check if the remainder is 0 when divided by 3 or 5
  if ((i % 3 === 0) || (i % 5 ===0)) sum += i
}
console.log("sum:", sum)