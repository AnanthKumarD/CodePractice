/**
 * https://www.hackerearth.com/challenges/competitive/may-easy-20/algorithm/bracket-sequence-1-40eab940/
 */
const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("");

    var i = 0;
    var count = 0;
    while (i != inputLines.length) {
        var j = i;
        var flag = 1;
        if (inputLines[i] == '(') {
            while (j != inputLines.length) {
                if (inputLines[j] == ')') {
                    inputLines.splice(i, 2);
                    flag = 0;
                    i = 0;
                    count++;
                    break;
                }
                j++;
            }
        }
        if (inputLines[i] == ')') {
            while (j != inputLines.length) {
                if (inputLines[j] == '(') {
                    inputLines.splice(i, 2);
                    flag = 0;
                    i = 0;
                    count++;
                    break;
                }
                j++;
            }
        }
        if (flag == 1) {
            i++;
        }
    }
    process.stdout.write(count + "\n");

})