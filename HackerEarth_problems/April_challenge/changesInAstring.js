const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i += 2) {
        var nInteger = inputLines[i].trim().split("")[0];
        var arrayElement = inputLines[i + 1].trim().split("");
        var countA = 0;
        var countB = 0;
        for (k = 0; k < arrayElement.length; k++) {
            if (arrayElement[k] == 'A') {
                countA += 1
            } else {
                countB += 1;
            }
        }
        console.log(countA, '....', countB, '...', parseInt(nInteger) - countA);
        // var total = parseInt(Integer) - countA;
        // process.stdout.write(total + "\n");
        countA = 0;
        countB = 0;
    }
})