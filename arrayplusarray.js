function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce(function(a,b){ return a+b;});
}