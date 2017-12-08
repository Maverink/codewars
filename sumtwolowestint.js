function sumTwoSmallestNumbers(numbers) {  
    ordered = numbers.sort(function (a, b) {  return a - b;  });
  
    return ordered[0] + ordered[1];
  };