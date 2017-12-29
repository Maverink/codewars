function sumOfN(n) {
	var counter = 1;
	var arr = [0];

	for (i = 0; i < Math.abs(n); i++) {
		arr.push(arr[i] + counter * (n / Math.abs(n)));
		counter++;
	}

	return arr;
}
