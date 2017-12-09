function seven(m) {
 
var currDigit = parseInt(m.toString().split('').pop());

var restOfNum = parseInt(m.toString().split('').slice(0,-1).join(""));

var counter = 0;

var x = 1;



while ( x <=100){

	currDigit = parseInt(m.toString().split('').pop());

 restOfNum = parseInt(m.toString().split('').slice(0,-1).join(""));

	x++;


	if(m <= 99 && m >= 10 && m % 7 != 0){
		return [m,counter];
		break;
	
	}else if(m <= 99 && m >= 10 && m % 7 == 0){
		return [m,counter];
		break;
		
	}else if(m<10){
	return [m,counter];
		break;
		
	}else{
		m = restOfNum - (currDigit * 2);


	}
	
	

		counter++;

}
