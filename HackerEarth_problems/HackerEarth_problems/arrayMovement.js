var a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 1, 3],
    [4, 5, 7, 8]
]
var rowCount = 2;
var colCount = 2;

// POP and push  will do operation of removing /adding at end
// shift and unshift  will do operation of removing /adding at start
function shiftingArrayVal(arrayVal, rowIndex) {
    for (i = 0; i < rowIndex.length; i++) {
        var lastEle = arrayVal[rowIndex[i] - 1].pop();
        arrayVal[rowIndex[i] - 1].unshift(lastEle);
    }
    return arrayVal;
}
var transpose = array => array.reduce((r, a) => a.map((v, i) => [...(r[i] || []), v]), []);

var rowShift = shiftingArrayVal(a, [2, 2]);
var colToRow = transpose(rowShift)
var rowToCol = shiftingArrayVal(colToRow, [1, 3]);
var finalResult = transpose(rowToCol);
console.log(finalResult);