// We supply to a function (int_rac) a number n (positive integer) and a parameter guess (positive integer) which will be our initial x. For this kata the parameter 'e' is set to 1.

// Hero's algorithm is not always going to come to an exactly correct result! For instance: if n = 25 we get 5 but for n = 26 we also get 5. Nevertheless 5 is the integer square root of 26.

// The kata is to return the count of the progression of integer approximations that the algorithm makes.

// Reference:

// https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method

// Some examples:

// int_rac(25,1): follows a progression of [1,13,7,5] so our function should return 4.

// int_rac(125348,300): has a progression of [300,358,354] so our function should return 3.

// int_rac(125348981764,356243): has a progression of [356243,354053,354046] so our function should return 3.
// #

// You can use Math.floor (or similar) for each integer approximation.

// #

function intRac(n, guess) {


	
	var squareRt = Math.floor(Math.sqrt(n));

	var nuGuess = guess;

	var dif = n;

	var counter = 0;

while(dif>=1){
		dif = Math.abs(squareRt - nuGuess);
		nuGuess =  (nuGuess + n/nuGuess)/2;
	counter++;

	}
return counter;

	
 	}