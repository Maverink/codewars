// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

function longest(s1, s2) {

var sortedArr = s1.split("").concat(s2.split("")).sort();

return outPut = sortedArr.filter(function(item,pos){
	return sortedArr.indexOf(item) == pos;}).join("");

}