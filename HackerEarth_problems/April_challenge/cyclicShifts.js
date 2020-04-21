const fs = require('fs');
// 2 => total no of Test Cases
// 7881 5 L => output:- => 55587
// 7881 3 R => output:- => 9177

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i++) {
        var inp = inputLines[i].trim().split(" ");
        var binaryNo = parseInt(inp[0]);
        var position = parseInt(inp[1]); // position to move
        var course = inp[2]; // either left /right
        var d = [];
        while (binaryNo != 0) {
            d.push(binaryNo % 2);
            binaryNo = Math.floor(binaryNo / 2);
        }
        b = d.reverse().join("").split("");
        while (b.length != 16) {
            b.unshift("0");
        }

        if (course == "L") {
            for (j = 0; j < position; j++) {
                b.push(b.shift(0))
            }
            process.stdout.write(parseInt(b.join(""), 2) + "\n");
        }
        if (course == "R") {
            for (j = 0; j < position; j++) {
                b.unshift(b.pop(0))
            }
            process.stdout.write(parseInt(b.join(""), 2) + "\n");
        }
    }
})