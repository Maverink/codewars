/*You are given an array of numbers.
 Check if the array contains of pairs, i.e every number occurs exactly two times.
  If true, return true, otherwise false. 
  Your solution should not modify the input array.

  assertEquals(twins([1,2,3,1,2,3]), true);
  */

   function twins(myArray){

       var map = {};
       var arr =[];

		for(let num of myArray){

			map[num] = map[num] + 1 || 1 ;
		
		}

		for(let num in map){
    
			if(map[num] == 2){
				arr.push("x") ;
			}
      
		}
	
  return Object.keys(map).length == arr.length ? true : false;
	}



