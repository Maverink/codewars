// You must to return pyramids. Given a number n you print a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\


function pyramid(n) {
	var str = "";
	var spaces = n - 1;
	for (i = 0; i < n; i++) {
		if (i != n - 1) {
			str += " ".repeat(spaces) + "/" + " ".repeat(i * 2) + "\\" + "\n";
			spaces--;
		} else {
			str += " ".repeat(spaces) + "/" + "_".repeat(i * 2) + "\\" + "\n";
		}
	}

	return str;
}