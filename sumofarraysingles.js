/*In this Kata, you will be given an array of numbers 
in which two numbers occur once and the rest occur only 
twice. Your task will be to return the sum of the numbers 
at occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the 
numbers 7 and 8 occur once, and their sum is 15.
*/

function repeats(arr) {
	var obj = {};
	var output = [];

	for (let digit of arr) {
		if (!obj[digit]) {
			obj[digit] = 1;
		} else {
			obj[digit]++;
		}
	}

	for (let vals in obj) {
		if (obj[vals] == 1) {
			output.push(parseInt(vals));
		}
	}
	return output.reduce(function(a, b) {
		return a + b;
	});
}
