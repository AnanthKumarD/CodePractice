const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");

    for (i = 1; i < inputLines.length; i += 2) {
        // console.log(inputLines[i], ',,,,,,', inputLines[i + 1].split('').sort().join(''))
        var sorted = inputLines[i + 1].split('').sort().join('');
        var reversed = inputLines[i + 1].split('').reverse().join('');
        // console.log(sorted, '>>>>', reversed)
        var k = 0;
        var counter = 0
        while (sorted.length != k) {
            // console.log(sorted[k], '......', reversed[k])
            if (sorted[k] != reversed[k]) {
                counter++
            }
            k++;
        }
        process.stdout.write(counter + "\n");
    }

})