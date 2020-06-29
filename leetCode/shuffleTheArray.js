/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var mid = nums.length/2;
    xLimit = mid-1;
    var x = 0;
    var newData = [];
    var yStart = mid
    while(x <=xLimit){
    	newData.push(nums[x])
    	newData.push(nums[x+yStart])
    	x++
    }
    console.log(newData)

};

console.log(shuffle([2,5,1,3,4,7], 3))
console.log(shuffle([1,1,2,2], 2))
console.log(shuffle([1,2,3,4,4,3,2,1], 4))