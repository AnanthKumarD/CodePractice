/**
 * Link:- https://www.hackerearth.com/practice/basic-programming/input-output/basics-of-input-output/practice-problems/algorithm/back-to-school-1/
 * input : 8 6 1 
 * output : 8
 */

const fs = require('fs');

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split(" ");
    var maxVal = inputLines.sort(function(a, b) {
        return a - b
    });
    var max = maxVal[maxVal.length - 1]
    process.stdout.write(max + "\n");
})