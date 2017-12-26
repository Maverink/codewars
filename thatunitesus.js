// You have two arrays of single letters, array1 and array2, 
// where the elements are without duplicates(but the element of the first array can be equal
//  to the element of the second array).

// Return a new array containing the first n elements from the two arrays in alphabetical order.

// For example:

// thatUnitesUs(['a', 'z', 'c'], ['b', 'f', 'z'], 3) => ['a', 'b', 'c']
// thatUnitesUs(['z', 'g', 'f'], ['g', 'f', 'c'], 3) => ['c', 'f', 'g']
// thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2) => ['c', 'f']
// P.S. Array's length >= n

function thatUnitesUs(array1, array2, n) {
	return array1.concat(array2)
        .sort()
        .filter(function(item, pos, arr) {
			    return arr.indexOf(item) == pos;
		    })
		    .splice(0, n);
		}
// Test.describe("Basic tests",() => {
//   Test.assertDeepEquals(thatUnitesUs(['a', 'c', 'z'], ['b', 'f', 'z'], 3), ['a', 'b', 'c']);
//   Test.assertDeepEquals(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 3), ['c', 'f', 'g'])
//   Test.assertDeepEquals(thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2), ['c', 'f'])
// });

