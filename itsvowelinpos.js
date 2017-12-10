function checkVowel(string, position) {
 var vowels = ["a","e","i","o","u"];

return (vowels.includes(string.toLowerCase()[position])) ? true : false;


};