/**
 * Link:- https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/seven-segment-display-nov-easy-e7f87ce0/
 */
const fs = require('fs')

var matchStickRequired = {
    0: 6,
    1: 2,
    2: 5,
    3: 5,
    4: 4,
    5: 5,
    6: 6,
    7: 3,
    8: 7,
    9: 6
}
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i++) {
        process.stdout.write(inputLines[i] + "\n");
        var totalMatchStick = matchStickRequired[inputLines[i]];
        Object.keys(matchStickRequired).forEach(function(val, i) {
            console.log(totalMatchStick, '.....', matchStickRequired[i], '.....', i);
        })
    }
})