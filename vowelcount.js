function getCount(str) {
  var vowelsCount = 0;
  
 var arr = str.split("");
 var arrVowels = ["a","e","i","o","u"];
 
 for(i=0;i<=arr.length;i++)
 {
  if(arrVowels.includes(arr[i])){
    vowelsCount++;
  
  }
 }
 
  
  return vowelsCount;
}