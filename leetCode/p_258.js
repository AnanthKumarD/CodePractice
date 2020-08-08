/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    console.log(num.toString().split(''))
    var sum = num.toString().split('')
    var sumLength = sum.length;
    var  i = 0;
    var total;
    while(sum != 1){
    	total += sum[i]
    	sum--;
    }
    
};

addDigits(32) //2