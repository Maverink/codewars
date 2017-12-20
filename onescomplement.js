function onesComplement(n) {
var out = "";
  for(let digit of n){
  if(digit == 0){
  out += "1";
  }else{
    out+= "0";
  }
}
return out;
};