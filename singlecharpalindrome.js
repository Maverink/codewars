// You will be given a string and you task is to check if
//  it is possible to convert that string into a palindrome by
//  removing a single character. If the string is already a palindrome,
//  return "OK". If it is not, and we can convert it to a palindrome by
//  removing one character, then return "remove one", otherwise
//  return "not possible". The order of the characters
//should not be changed.

// For example:

// solve("abba") = "OK". -- This is a palindrome
// solve("abbaa") = "remove one". -- remove the 'a' at the extreme right.
// solve("abbaab") = "not possible".
// More examples in the test cases.

// Good luck!

function solve(s) {
	var arr = s.split("");

	if (
		s ==
		s
			.split("")
			.reverse()
			.join("")
	) {
		return "OK";
	}

	for (i = 0; i < s.length; i++) {
		var cut = arr.splice(i, 1);

		if (arr.join("") == arr.reverse().join("")) {
			return "remove one";
		}
		arr.reverse();

		arr.splice(i, 0, cut.join(""));
	}
	return "not possible";
}
