// your task it to return true if the fractional part
 // (rounded to 1 digit) of the result (a / b) exists, more than 0 
 // and is multiple of n. Otherwise return false.

// All arguments are positive digital numbers.

// Rounding works like toFixed() method.

// Find exapmles below:


// isMultiple(5, 2, 3) -> false // 2.5 -> 5 is not multiple of 3
// isMultiple(5, 3, 4) -> false // 1.7 -> 7 is not multiple of 4
// isMultiple(5, 4, 3) -> true // 1.3 -> 3 is multiple of 3
// isMultiple(666, 665, 2) -> false // 1.0 -> return false

function isMultiple(a, b, n) {

var result = parseInt((a/b).toFixed(1).toString().slice(-1));

return result % n == 0 && result > 0 ? true : false;

}

// Test.describe("Basic tests",() => {
//   Test.assertEquals(isMultiple(5, 2, 3), false);
//   Test.assertEquals(isMultiple(5, 3, 4), false);
//   Test.assertEquals(isMultiple(5, 4, 3), true);
//   Test.assertEquals(isMultiple(666, 665, 2), false);
// })

