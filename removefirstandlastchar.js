/*It's pretty straightforward. Your goal is to create a function that removes
 the first and last characters of a string. 
 You're given one parameter, except in C, where, 
 to keep the difficulty at the level of the kata, you are given two parameters, 
 the first a buffer with length exactly the same as the second parameter,
  the original string. 
You don't have to worry with strings with less than two characters.*/

function removeChar(str){

var outputStr = str.split("");

outputStr.splice(0,1);
outputStr.splice((outputStr.length-1),1);

outputStr = outputStr.join("");

return outputStr;


};
