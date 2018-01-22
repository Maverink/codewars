// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format
// [M, D, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd,
// 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into
// account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

function toDayOfYear(arr) {
	var year = arr[2];
	var feb = 28;

	var output = arr[0];

	if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
		feb = 29;
	} else if (year % 4 == 0 && year % 100 != 0) {
		feb = 29;
	} else {
		feb = 28;
	}

	var monthDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	for (i = 0; i < arr[1] - 1; i++) {
		output += monthDays[i];
	}

	return output;
}

// Test.assertEquals(toDayOfYear([25, 12, 2017]), 359,);
// Test.assertEquals(toDayOfYear([31, 10, 1991]), 304);
// Test.assertEquals(toDayOfYear([1, 5, 3000]), 121);
// Test.assertEquals(toDayOfYear([14, 3, 1066]), 73);
// Test.assertEquals(toDayOfYear([5, 11, 1604]), 310);
