/*This challenge requires you to convert an integer. If the input is 78,
 then your program should output the string '01:18' because 78 minutes converts 
 to 1 hour and 18 minutes. If the input is 0 or negative value, then your program 
 should output the string '00:00'

We will use the modulo operation to solve this challenge. The modulo operation 
simply returns the remainder after a division, so for example, the remainder
 of 5 / 2 is 1, so the modulo of 5 / 2 is 1.

Good luck :D
*/

function timeConvert(num) { 
	var hours = Math.floor(num/60);
	var minutes = num%60;
  
  if(num < 0){
  return "00:00";}

if(hours.toString().length == 1){
	hours = "0" + hours;
};

 if(minutes.toString().length == 1){
	minutes = "0" + minutes;
};

return(hours + ":" + minutes);



}
