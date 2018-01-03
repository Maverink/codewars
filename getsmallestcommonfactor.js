// Given an array of integers, return the smallest common factors
//  of all integers in the array.

// When i say Smallest Common Factor i mean the smallest number above 1
//  that can divide all numbers in the array without a remainder.

// scf([200, 30, 18, 8, 64, 34]) //=> 2
// scf([21, 45, 51, 27, 33]) //=> 3
// scf([133, 147, 427, 266]) //=> 7
// If ther'e no common factors above 1, return 1 (technically 1 is always a common factor).



function scf(array) {
	var factor = 2;
	var lowest = Math.min.apply(Math, array);

	while (factor <= lowest) {
		if (
			array.every(function(a) {
				return a % factor == 0;
			})
		) {
			return factor;
			break;
		}
		factor++;
	}
}
scf([133, 147, 427, 266]);

// Test.assertEquals(scf([200, 30, 18, 8, 64, 34]), 2);
// Test.assertEquals(scf([21, 45, 51, 27, 33]), 3);
// Test.assertEquals(scf([133, 147, 427, 266]), 7);
