const fs = require('fs');

// 8 4
// 2 2 1 4 4 2 4 4
// 1 2 3 4
// 6
// 1 2
// 1 5
// 1 3
// 2 8
// 3 3
// 5 8
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var arrEle = inputLines[1].trim().split(" ").map((i) => parseInt(i));
    var a;
    for (i = 4; i < inputLines.length; i++) {
        a = inputLines[i].trim().split(" ");
        var list = arrEle.slice(a[0] - 1, a[1]).sort();
        var k = list.length - 1;
        var counterData = list[list.length - 1];
        var j = list[list.length - 1];
        var flag = 1;
        while (k >= 0) {
            if (list[k] == j && counterData >= 1) {
                counterData--;
                k--;
            } else if (list[k] != j && counterData >= 0) {
                j = list[k];
                counterData = list[k];
            }
            if (list[k] != j && counterData > 1) {
                flag = 0;
                break;
            }
        }
        flag = (flag == 1 && counterData == 0) ? 1 : 0
        process.stdout.write(flag + "\n");
    }

})