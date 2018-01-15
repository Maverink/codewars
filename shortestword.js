// x Simple, given a string of words,
// return the length of the shortest word(s).

// String will never be empty and you do
// not need to account for different data types.

function findShort(s) {
	var arr = s.split(" ");
	var currLength = s.length;

	for (i = 0; i < arr.length; i++) {
		if (arr[i].length < currLength) {
			currLength = arr[i].length;
		}
	}

	return currLength;
}

findShort("turns out random test cases are easier than writing out basic ones");
