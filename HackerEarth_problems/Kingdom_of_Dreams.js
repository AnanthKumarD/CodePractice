const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i += 2) {
        console.log(inputLines[i], ' ....', inputLines[i + 1].trim().split(" "));
        var diffInputValues = inputLines[i + 1].trim().split(" ");
        for (j = 0; j < diffInputValues.length; j++) {
            console.log(diffInputValues[j]);
        }
        // process.stdout.write(inputLines[i] + "\n");
    }

})