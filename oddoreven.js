function oddOrEven(array) {
  return array.reduce(function(a,b) { return a + b; } , 0) % 2 == 0 ? "even" : "odd";
}