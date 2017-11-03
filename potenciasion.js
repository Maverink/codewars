/*The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Test.describe("Tests", function(){

Test.assertEquals(power(1,701270), 1);
Test.assertEquals(power(2,2), 4);
Test.assertEquals(power(3,2), 9);
Test.assertEquals(power(-1,40), 1);
  
});
*/

function power(x,y){

	var num = 1;

  for(i=1;i<=y;i++){

  		num *= x;
  		



  }

  	return num;

}



