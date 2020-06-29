const fs = require('fs')
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
   
    //process.stdout.write(unitData + "\n");
})