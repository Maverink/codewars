function multipleOfIndex(array) {
var nuArr = [];
 for(i=0;i<array.length;i++){
  if(array[i] % i == 0 ){
  nuArr.push(array[i]);
}
}
return nuArr;
}