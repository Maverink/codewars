/*In this Kata, we are going to determine
 if the count of each of the characters in a 
 	string can be equal if we remove a single character from that string.

For example:

solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.

*/

function solve(s) {
	var charMap = {};

	var temp = [];

	for (let char of s) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	var arr = Object.values(charMap);

	if (arr.length == 1) {
		return true;
	}

	for (i = 0; i < arr.length; i++) {
		arr[i]--;

		temp = arr.filter(function(elem) {
			return elem != 0;
		});

		if (
			!!temp.reduce(function(a, b) {
				return a === b ? a : NaN;
			}) == true
		) {
			return true;
		}

		arr[i]++;
	}

	return false;
}

solve("abvba");

// describe("Basic tests", function(){
// Test.assertEquals(solve('aaaa'),true);
// Test.assertEquals(solve('abba'),false);
// Test.assertEquals(solve('abbba'),true);
// Test.assertEquals(solve('aabbcc'),false)
// Test.assertEquals(solve('aaaabb'),false)
// Test.assertEquals(solve('aabbccddd'),true);
// Test.assertEquals(solve('aabcde'),true);
// Test.assertEquals(solve('abcde'),true);
// Test.assertEquals(solve('aaabcde'),false)
// Test.assertEquals(solve('abbccc'),false)
// });
