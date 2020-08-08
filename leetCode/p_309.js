var maxProfit = function(prices) {
    const array = Array(prices.length).fill(null);
    
    function stockCheck(index, balance) {
        if(index >= prices.length) return 0;
        if(array[index] !== null && balance === -Infinity) return array[index];
        if(balance === -Infinity) return array[index] = Math.max(stockCheck(index+1, prices[index]), stockCheck(index+1, balance));
 return Math.max(stockCheck(index+2, -Infinity) + (prices[index] - balance), stockCheck(index+1, balance));  
    }
    return stockCheck(0, -Infinity);
};

console.log(maxProfit([1,2,3,0,2]))
console.log(maxProfit([]))
console.log(maxProfit([2,1]))
