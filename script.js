var myArray = [2,4,6,8,10,12,14,16,18,20];
for (var i = 0; i < myArray.length; ++i) { 
   console.log(myArray[i]);// print myArray values...
    }
    console.log(myArray.length);//myArray length 
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[5]);
console.log(myArray.indexOf(10));
myArray.splice(8, 2);//remove 2 last elements

for (var i = 0; i < myArray.length; ++i) { 
   console.log(myArray[i]);// print the new myArray values...
   };

   var myArray2 =[2,"two",3,"three"];// array with string and numbers
   for (var i = 0; i < myArray2.length; ++i) { 
   console.log(myArray2[i]);// print myArray2 values...
   };
var classweb=["mazen","ali","ggg" ];
var  mazen={
	"name":"mazen",
	"eye":"brown",
	"height":176,
};
console.log(mazen);
var  ali={
	"name":"aali",
	"eye":"brown",
	"height":156,
};
console.log(ali);
classweb.splice(0,1);
console.log(classweb);
classweb.unshift("dotan");
var dotan={
	"eye":"red",
	"height":176,
	
};
console.log(dotan);