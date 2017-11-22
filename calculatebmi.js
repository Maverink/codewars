/*Write function bmi that calculates body mass index
 (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {

var bmi = weight / Math.pow(height , 2);


switch(true){
  case bmi <= 18.5:
	return "Underweight";
  break;
  case bmi <= 25.0 :
  return "Normal";
  break;
  case bmi <= 30.0 :
  return "Overweight";
  break;
  default:
  return "Obese";



}


}

bmi(80, 1.80);