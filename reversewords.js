/*
Write a reverseWords function that accepts a string a parameter, 
and reverses each word in the string. Any spaces in the string should 
be retained.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords("double  spaces"); // returns  "elbuod  secaps"
*/

function reverseWords(str) {
  var arr = str.split(" ");
  var outArr = [];


  for(i=0;i<arr.length;i++){
   outArr.push(arr[i].split("").reverse().join(""));


  }

  alert(outArr.join(" "));
}



reverseWords("This is an example!");