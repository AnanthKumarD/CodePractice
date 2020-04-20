const fs = require('fs')
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var liftA = 0,
        liftB = 7;
    for (i = 1; i < inputLines.length; i++) {
        var a = liftB - inputLines[i];
        var b = inputLines[i] - liftA;
        if (a > b || a == b) {
            process.stdout.write("A" + "\n");
            liftA = inputLines[i];
        }
        if (a < b) {
            process.stdout.write("B" + "\n");
            liftB = inputLines[i];
        }

        // if (inputLines[i])
    }
    // process.stdout.write("YES" + "\n");
})