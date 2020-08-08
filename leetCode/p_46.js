//https://leetcode.com/problems/permutations/ 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {
	var newData = []

	var d = function(nums, initialIndex){
	    for(let i=initialIndex;i<nums.length;i++){
	   		let newArray = JSON.parse(JSON.stringify(nums));
	   		[newArray[initialIndex], newArray[i]] = [ newArray[i],newArray[initialIndex]];
	   		// console.log(newArray,'...',newArray.filter( Number ))
	   		if(newData.indexOf(newArray.join(" ")) == -1){
	   			newData.push(newArray.join(" ")) 
	   		}

	   		if(initialIndex < nums.length){
		   		d(newArray, initialIndex+1);
		   	}
	   	}
	}
    d(nums,0);
    var b = newData.map(function(v,i){
        return newData[i].split(' ').map(Number)
    })
    return b
};
console.log(permute([1,2,3]))
console.log(permute([0,1]))