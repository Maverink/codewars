/*Given a number n, return the number of odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!

// Basic Tests

Test.assertEquals(oddCount(15), 7, "Oops! Wrong.");
Test.assertEquals(oddCount(15023), 7511, "Oops! Wrong.");

*/

function oddCount(n){
  return Math.ceil((n-1)/2);
}