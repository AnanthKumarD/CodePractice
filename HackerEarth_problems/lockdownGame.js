const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 0; i < inputLines[1].length; i++) {
        console.log(inputLines[1][i])
    }
    console.log(Array(inputLines[1].length).fill(0, 0, inputLines[1].length));
    // process.stdout.write(+"\n");

})