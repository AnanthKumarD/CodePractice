/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var totalStairs = [];
    totalStairs[0]=1;
    totalStairs[1]=1;
    for(i = 2;i<=n;i++){
     totalStairs.push(totalStairs[i-1]+totalStairs[i-2]);   
    }
    return totalStairs[i-1]
    
};

climbStairs(3)