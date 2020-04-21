const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var a = input.trim().split("\n");
    var d = a[1].trim().split(" ");
    var c = "";
    var maintainEven = '';
    for (i = 0; i < d.length; i++) {
        if (parseInt(d[i]) % 2 == 0) {
            maintainEven += " " + d[i];
        }

        if (parseInt(d[i]) % 2 == 1) {
            if (maintainEven) {
                c += " " + maintainEven.trim().split(" ").reverse().join(" ");
            }
            c += " " + d[i];
            maintainEven = '';
        }
        if (maintainEven && i == d.length - 1) {
            c += " " + maintainEven.trim().split(" ").reverse().join(" ");
        }
    }
    process.stdout.write(c + "\n");
})