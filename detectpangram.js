// A pangram is a sentence that contains every single letter of
 // the alphabet
// t least once. For example, the sentence
//  "The quick brown fox jumps over the lazy dog" is a pangram,
//   because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True
//  if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
 var counter = 0;

 var alphabet = "abcdefghijklmnopqrstuvwxyz";

 var nuStr = string.toLowerCase().replace(/\W/g,"");

for(let letter of alphabet){
	
	if(nuStr.includes(letter)){
		counter++;
		}
		}

return counter == alphabet.length ? true : false ;
}


isPangram("The quick brown fox jumps over the lazy dog.");