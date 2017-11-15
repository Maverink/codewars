/*#Description

Everybody has probably heard of the animal heads and legs problem from
 the earlier years at school. It goes:

“A farm contains chickens and cows. There are x legs and y heads. How many 
chickens and cows are there?”

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) 
and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of
 your calculation is negative or the calculation is a float return "No solutions" 
 (no valid cases).

In the form:

[Heads, Legs] = [72, 200]

VALID - [72, 200] =>             [44 , 28]   
                             [Chickens, Cows]

INVALID - [72, 201] => "No solutions"
However, if 0 heads and 0 legs are given always return [0, 0] 
since zero heads must give zero animals.

There are many different ways to solve this, but they all give the same answer.

You will only be given integers types - however negative values (edge cases) 
will be given.

Happy coding!

describe("Example test cases", function() {

  it ("Valid number of animals", function() {
    Test.assertSimilar(animals(72, 200), [44, 28])
    Test.assertSimilar(animals(116, 282), [91, 25])
    Test.assertSimilar(animals(12, 24), [12, 0])
    Test.assertSimilar(animals(6, 24), [0, 6])
    Test.assertSimilar(animals(344, 872), [252, 92])
    Test.assertSimilar(animals(158, 616), [8, 150])
  })
*/

function animals(heads, legs){

	
	var cows = legs/2 - heads;
	var chickens = heads - cows;

	if(heads===0 && legs ===0){
		return [0,0];
	}else if(cows < 0 || chickens < 0 ){
		return "No solutions";
	}else if(cows%1 != 0 && chickens%1 != 0){

	return "No solutions";
	}else{
			return [chickens,cows];
		}
}
