/*Given a string and an array of integers representing indices,
 capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

Be sure to also try:

Alternate capitalization

String array revisal

describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef",[1,2,5]),'aBCdeF');
Test.assertDeepEquals(capitalize("abcdef",[1,2,5,100]),'aBCdeF');
Test.assertDeepEquals(capitalize("codewars",[1,3,5,50]),'cOdEwArs');
Test.assertDeepEquals(capitalize("abracadabra",[2,6,9,10]),'abRacaDabRA');
Test.assertDeepEquals(capitalize("codewarriors",[5]),'codewArriors');
Test.assertDeepEquals(capitalize("indexinglessons",[0]),'Indexinglessons');
});
*/

function capitalize(s, arr2) {
	var arr1 = s.split("");

	for (i = 0; i < arr1.length; i++) {
		for (j = 0; j < arr2.length; j++) {
			if (i == arr2[j]) {
				arr1[i] = arr1[i].toUpperCase();
			}
		}
	}
	return arr1.join("");
}

capitalize("abracadabra", [2, 6, 9, 10]); //abRacaDabRA
