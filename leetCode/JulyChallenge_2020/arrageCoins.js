/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

	if(n == 1) return 1;
	var k = 1;
	for(i=0;i<=n;i++){
		for(j=0;j<i;j++){
			if(k==n){
				return i-1;
			}
			k++;
		}
		console.log("\n")
	}
  	
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
