function evenLast(numbers) {

var nuArr = [];

for(i=0;i<numbers.length;i++){
  if(i % 2==0){
    nuArr.push(numbers[i]);
    }
  }
  
 var total = nuArr.reduce(function(a,b){ return a+b;},0);

return  (numbers.length == 0 ) ? 0 : total * numbers[numbers.length-1];

}
