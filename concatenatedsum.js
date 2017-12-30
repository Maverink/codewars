// The number 198 has the property
// that 198 = 11 + 99 + 88, i.e., if each of its digits is concatenated twice and then summed,
//  the result will be the original number. It turns out that 198 is the only number with
//  this property. However, the property can be generalized so that each digit is
//   concatenated n times and then summed.

// eg:-

// original number =2997 , n=3
// 2997 = 222+999+999+777 and here each digit is concatenated three times.

// original number=-2997 , n=3

// -2997 = -222-999-999-777 and here each digit is concatenated three times.
// Write afunction named checkConcatenatedSum that tests if a number has this generalized
//  property.

function checkConcatenatedSum(num, int) {
	var arr = num
		.toString()
		.replace(/-/, "")
		.split("");

	var total = 0;

	for (i = 0; i < arr.length; i++) {
		arr[i] = arr[i].repeat(int) * (Math.abs(num) / num);

		total += arr[i];
	}

	return total == num ? true : false;
}

checkConcatenatedSum(-2997, 3);

// Test.assertDeepEquals(checkConcatenatedSum(2997,3),true)

// Test.assertDeepEquals(checkConcatenatedSum(-2997,3),true)
