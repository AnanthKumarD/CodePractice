const fs = require('fs')
    // 3
    // 2  5  12
    // 22 45 55
    // 1  6  8  

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i++) {
        process.stdout.write(inputLines[i] + "\n")
        a[0].split(" ").filter(Number)
        for (j = 0; j < 10; i++) {
            if (inputLines[i][j] >= 0) {
                process.stdout.write(inputLines[i][j] + "\n");
            }
        }

    }

})