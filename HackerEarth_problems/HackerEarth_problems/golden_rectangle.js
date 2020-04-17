const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var counter = 0;
    for (i = 1; i <= inputLines[0]; i++) {
        var x = inputLines[i].split(" ")[0];
        var y = inputLines[i].split(" ")[1];
        // console.log((x / y), ' .....', (x / y).toFixed(1), '>>', (x / y).toFixed(1) >= 1.6 && (x / y).toFixed(1) < 1.8);
        // if ((x / y).toFixed(2) >= 1.56 && (x / y).toFixed(2) < 1.79) {
        //     counter++;
        // }
        console.log(x / y, '......', (x / y) * 100, '...........', (x / y) * 100 >= 160 && (x / y) * 100 <= 179);
        if ((x / y) * 100 >= 160 && (x / y) * 100 <= 179) {
            counter++
        }
    }
    process.stdout.write(counter + "\n");
})