/*Your task is to write a function that takes an date in format Y-m-d(String) 
and return it in an encrypted format, to do this you will break the string of date,
 each 2 characteres of date(except '-') being an ASCII numeric code add 50 to it and 
 return the result translated according to ASCII table with the '-' between it.

Example: "2017-01-21" -> You will get 20 17 - 01 - 21 (for each of then +50)
-> 70 67 - 51 - 71 ->(ASCII Translation)-> "FC-3-G"

"1966-12-07" -> "Et->-9"

translateDate('2017-01-21'),'FC-3-G', 'The first basic example'
translateDate('1966-12-07'),'Et->-9', 'The second basic example');
translateDate('2010-07-29'),'F<-9-O', 'here you go!');

*/

function translateDate(dateStr){
 var stringsArr = [dateStr[0]+dateStr[1] , dateStr[2]+dateStr[3] ].concat(dateStr.split("-"));
 stringsArr.splice(2,1);

for(i=0;i<stringsArr.length;i++){
 	var int = parseInt(stringsArr[i]) + 50;
 	stringsArr[i] = String.fromCharCode(int);
 }
return stringsArr.join("-").replace("-","");
 }






