const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var searchGreater = []

    for (i = 1; i < inputLines.length; i++) {
        var j = i;
        while (j != inputLines.length) {
            if (inputLines[j] > inputLines[i]) {
                console.log(inputLines[i], '.....', inputLines[j]);
                searchGreater.push(inputLines[j]);
                j++;
                break;
            } else {
                if (j == parseInt(inputLines[0])) {
                    searchGreater.push(-1)
                }
                j++;
            }
        }
        j = 0;
    }
    process.stdout.write(searchGreater + "\n");

})