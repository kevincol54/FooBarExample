// find sum of all numbers that are divisable by 3 or 5 that are below 1000
// to run this, CD into the directory and type the command 'node index.js'

//start of by setting the sum variable to 0
var sum = 0
//loop through numbers less than 1000
for(var i = 0; i < 1000; i++) {
  //check if the remainder is 0 when divided by 3
  if (i % 3 === 0) {
    //if the remainder is zero when divided by 3, check if the remainder is 0 when divided by 5
    if (i % 5 === 0) {
      //if the number passes both the above checks, then reassign the variable sum to equal sum plus the number that passed the checks
      sum = sum + i
    }
  }
}
console.log("sum:", sum)
