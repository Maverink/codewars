function mergeArrays(arr1, arr2) {
var newArr =  (arr1.concat(arr2).sort((a,b) => a-b));

return (newArr.filter(function(item,pos){

  return newArr.indexOf(item)===pos;
  }));



}

mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12];