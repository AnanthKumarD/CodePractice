/**
 * This is working for Smaller Submatrix need to optimize by using the dynamic algorithm approach
 */

var countSquares = function(matrix) {
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {;
        count += countNumberOfSquareMatrix(matrix, i);
    }
    console.log(count);
};

var countNumberOfSquareMatrix = function(matrix, index) {
    var count = 0;
    if (index == 0) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    count += 1;
                }
            }
        }
    } else {;
        var k = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                var finalArray = [];
                while (k + i != i + index + 1) {
                    if (matrix[k + i]) {
                        finalArray = finalArray.concat(matrix[k + i].slice(j, j + index + 1));
                    }
                    k++;
                }
                if (finalArray.indexOf(0) == -1 && ((index + 1) * (index + 1)) == finalArray.length) {
                    count += 1;
                }
                k = 0;
            }
        }

    }
    return count;
}

countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
])