// Kata Task
// Given a list of random integers, return the Three Amigos.

// These are 3 numbers that live next to each other in the list, and who have the most in common with each other by these rules:

// lowest statistical range
// same parity
// Notes
// The list will contain at least 3 numbers
// If there is more than one answer then return the first one found (reading the list left to right)
// If there is no answer then return an empty list.
// Examples
// ex1
// Input = [1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1]
// Result = [5,3,5]
// ex2
// Input = [2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3]
// Result = [2,2,2]
// ex3
// Input = [2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]
// Result = []

function threeAmigos(numbers) {
	var diff = Math.max(...numbers) - Math.min(...numbers) + 1;

	var output = [];

	for (i = 0; i < numbers.length - 2; i++) {
		temp = numbers.slice(i, i + 3);

		currDiff = Math.max.apply(null, temp) - Math.min.apply(null, temp);

		if (
			(temp.toString() ==
				temp
					.filter(function(a) {
						return a % 2 == 0;
					})
					.toString() ||
				temp.toString() ==
					temp
						.filter(function(a) {
							return a % 2 != 0;
						})
						.toString()) &&
			diff > currDiff
		) {
			output = temp;
			diff = currDiff;
		}
	}
	return output;
}

threeAmigos([13, -14, -10, 16, 13, -10]); //-14,-10,16

// describe("Example Tests", function() {

//   it("ex1", function() {
//     Test.assertSimilar(threeAmigos([1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1]), [5,3,5]);
//   });

//   it("ex2", function() {
//     Test.assertSimilar(threeAmigos([2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3]), [2,2,2]);
//   });

//   it("ex3", function() {
//     Test.assertSimilar(threeAmigos([2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]), []);
//   });

// });
