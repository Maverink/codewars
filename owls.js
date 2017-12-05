/*To pass the series of gates guarded by the owls,
 Kenneth needs to present them each with a 
 highly realistic portrait of one. Unfortunately, 
 he is absolutely rubbish at drawing, and needs some code to return 
 a brand new portrait with a moment's notice.

All owl heads look like this:

''0v0''
Such beautiful eyes! However, they differ in their plumage,
 which is always symmetrical, eg.:

   VVHVAV''0v0''VAVHVV
or

YYAYAH8XH''0v0''HX8HAYAYY
So Kenneth needs a method that will take a garble of text generated
 by mashing at his keyboard (numbers and letters, but he knows how to 
 	avoid punctuation etc.) for a bit and give him a symmetrical owl with
 a lovely little face, with a truly symmetrical plumage made of uppercase
  letters and numbers.

(To be clear, the acceptable characters for the plumage are
 8,W,T,Y,U,I,O,A,H,X,V and M.)*/

function owlPic(text){



var acceptedChars = ["8","w","t","y","u","i","o","a","m","h","x","v","W","T","Y","U","I","O","A","M","H","X","V"];

var output = text.split("").filter(s => acceptedChars.includes(s));

return (output.join("").toUpperCase() + "''0v0''" + output.reverse().join("").toUpperCase());


}
owlPic("kuawd6r8q27y87t93r76352475437");