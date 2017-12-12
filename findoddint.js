// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {

var obj = {};

var arr = [];

var index;

for(let digit of A){
	if(!obj[digit]){
		obj[digit] =1;
	}else{
		obj[digit]++;
	}

}

for(let x in obj){
	
	arr.push(obj[x]);
}

for (i=0;i<arr.length;i++){
	if(arr[i]%2 != 0){
		index = i;
	}
}
var keys = Object.keys( obj );

	return parseInt(keys[index]);


}


findOdd([5,4,3,2,1,5,4,3,2,10,10]);