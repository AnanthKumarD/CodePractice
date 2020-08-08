/**
 * @param {number[]} arr
 * @return {number}
 */

//  Input: arr = [1,3,5]
// Output: 4
// Explanation: All sub-arrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
// All sub-arrays sum are [1,4,9,3,8,5].
// Odd sums are [1,9,3,5] so the answer is 4.
var numOfSubarrays = function(arr) {
	let  i= 0
	while(i < arr.length){
		j = i;
		while(j<arr.length){
			console.log(arr[j])
			j++
		}

		i++
	}    
};

numOfSubarrays([1,3,5]); //4
// numOfSubarrays([2,4,6]); // 0
// numOfSubarrays([1,2,3,4,5,6,7]); // 16
// numOfSubarrays([100,100,99,99]);  //4
// numOfSubarrays([7]);  //1
