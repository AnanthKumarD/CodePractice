/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var targetFound;
    for(i=0;i<matrix.length;i++){
        targetFound = false;
        if(matrix[i].indexOf(target)!=-1){
            targetFound = true;
            break;
        }
    }
    return targetFound
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],13));