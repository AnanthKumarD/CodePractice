const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (j = 1; j < inputLines.length; j++) {
        var a = inputLines[j].split("").sort();
        var b;
        var k = 0;
        while (parseInt(a[k]) <= parseInt(a[a.length - 1])) {
            if ((parseInt(a[0]) + k) == a[k]) {
                b = true;
            } else {
                b = false;
                break;
            }
            k++;
        }

        var c = b == true ? "YES" : "NO";
        process.stdout.write(c + "\n");
    }

})