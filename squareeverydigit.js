// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
	var output = "";

	for (let digit of num.toString()) {
		output += Math.pow(parseInt(digit), 2).toString();
	}
	return parseInt(output);
}

