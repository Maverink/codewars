// Sum Numbers
function sum (numbers) {


return (numbers.length == 0 ) ?  0 : numbers.reduce(function(a,b){ return a+b;}) ;

}