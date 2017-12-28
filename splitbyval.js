function splitByValue(k, elements) {
  var less = [];
  var more = [];

  for (i = 0; i < elements.length; i++) {
    if (elements[i] < k) {
      less.push(elements[i]);
    } else {
      more.push(elements[i]);
    }
  }
  return less.concat(more);
}
