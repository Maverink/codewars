function scramble(str, arr) {

var outputStr = [];

 for (i=0;i<=str.length;i++){
  outputStr[arr[i]] = str[i];
}
return outputStr.join("");
};