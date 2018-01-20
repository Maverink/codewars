// Given two arrays of strings, return the number of times each string
// of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

function solve(a, b) {
	var arr = [];
	var obj = {};
	var counter;

	for (let str of a) {
		!obj[str] ? (obj[str] = 1) : obj[str]++;
	}

	for (i = 0; i < b.length; i++) {
		!obj[b[i]] ? arr.push(0) : arr.push(obj[b[i]]);
	}

	return arr;
}

solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"]);
