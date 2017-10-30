function order(words){
  
  var arr = words.split(" ");
  var newArr = new Array(arr.length);
  var outputString = "";



  for(var i=0 ; i< arr.length ; i++){
  	for(var j = 0; j < arr[i].length  ; j++){
  		if(!isNaN(arr[i].charAt(j)) === true){
  			var n = (arr[i].charAt(j)) - 1;
  			//alert(n);
  			
  			newArr.splice(n, 1, arr[i]);
 
  		}
  	}
  }

  	outputString = newArr.join(" ").toString();
  	alert(outputString);
  	return outputString;
}











