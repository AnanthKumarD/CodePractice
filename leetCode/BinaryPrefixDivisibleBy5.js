/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
	var data = []

    var a = '';
    for(i =0;i<A.length;i++){

    	a += A[i];
    	console.log(a,'>>>>',a.split("").reverse().join(""))
    	var sumVal = parseInt(a, 2)
    	data.push(Number(sumVal)%5 == 0 ? true : false);

    }
   	return data
}; 
// console.log(prefixesDivBy5([1,1,0,0,0,1,0,0,1]));

// console.log(prefixesDivBy5([0,1,1]));
// console.log(prefixesDivBy5([1,1,1]));
// console.log(prefixesDivBy5([0,1,1,1,1,1]));
// console.log(prefixesDivBy5([1,1,1,0,1]));
console.log(prefixesDivBy5([1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1]))

// [false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
// [false,false,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,false,false,false]