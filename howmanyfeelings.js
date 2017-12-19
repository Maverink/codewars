// You have two arguments: string - a string of 
// random letters(only lowercase) and array - an array of strings(feelings).
// your task is to return how many specific feelings are in the array.

// For example:

// string -> 'yliausoenvjw'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '3 feelings.' // 'awe', 'joy', 'love'


// string -> 'griefgriefgrief'
// array -> ['anger', 'awe', 'joy', 'love', 'grief']
// output -> '1 feeling.' // 'grief'


// string -> 'abcdkasdfvkadf'
// array -> ['desire', 'joy', 'shame', 'longing', 'fear']
// output -> '0 feelings.'
// If the feeling can be formed once - plus one to the answer.

// If the feeling can be formed several times from
//  different letters - plus one to the answer.

// Each letter in string participates in the formation of all feelings. 
// 'angerw' -> 2 feelings: 'anger' and 'awe'.

function countFeelings(string, array) {

	var counter =0;

	var finalCounter = 0;

	for(i=0;i<array.length;i++){
		counter = 0;
		
		for(j=0;j<array[i].length;j++){
			if(string.includes(array[i][j])){
				counter++;
				
				if(counter == array[i].length){
					finalCounter++;
				}

			}
			
		}
	}
return finalCounter == 1 ?  finalCounter + " feeling." : finalCounter + " feelings.";

}

countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']);


// Test.describe("Basic tests",() => {
//   Test.assertEquals(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']), '3 feelings.');
//   Test.assertEquals(countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief']), '2 feelings.');
//   Test.assertEquals(countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief']), '1 feeling.');
//   Test.assertEquals(countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear']), '0 feelings.');
// });