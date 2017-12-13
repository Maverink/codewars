// Does exist an argument digit in an argument number
//  in specific snippet? This snippet is defined by
//   two argements: index1 and index2. Be careful, the index2 is not 
//   necessarily more than the index1.

// Find more details below:


//   checkDigit(12345678912345, 1, 0, 1) -> true, 1 exists in 12

//   checkDigit(12345678912345, 0, 1, 2) -> true, 2 exists in 12

//   checkDigit(67845123654000, 4, 2, 5) -> true, 4 exists in 845

//   checkDigit(66688445364856, 0, 0, 6) -> true, 6 exists in 6

//   checkDigit(87996599994565, 2, 5, 1) -> false, 1 doesn't exist in 9965
//   number.length = 14;

//   0 <= index1 <= 14;

//   0 <= index2 <= 14;

//   index2 is inclusive in search snippet

//   0 <= digit <= 9;

function checkDigit(number, index1, index2, digit) {

  var firstIndex = Math.min(index1,index2);
  var secondIndex = Math.max(index1,index2);
  var snippet = number.toString().slice(firstIndex,secondIndex+1);

return (snippet.includes(digit.toString()));

 };

// Test.describe("Basic tests",() => {
//   Test.assertEquals(checkDigit(1234567, 1, 0, 1), true);
//   Test.assertEquals(checkDigit(1234567, 0, 1, 2), true);
//   Test.assertEquals(checkDigit(67845123654, 4, 2, 4), true);
//   Test.assertEquals(checkDigit(6668844536485, 0, 0, 6), true);
//   Test.assertEquals(checkDigit(9999999999, 2, 5, 1), false);
// })