function getRealFloor(n) {
  if( n > 12 ){
    return n-2;
  }else if(n<=12 && n>=1){
    return n-1;
  }else{
    return n;
  }
  }