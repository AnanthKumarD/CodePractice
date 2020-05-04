/**
 * https://www.hackerearth.com/challenges/competitive/may-easy-20/algorithm/waves-b18625d7/
 */
const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split(" ");
    process.stdout.write("YES" + "\n");
    var twoDimensionalArray = Array.from(Array(2), () => new Array(inputLines[0]))

    console.log(twoDimensionalArray);
    var i, j, n = 5;
    var a = ''
    for (i = n; i >= 1; i--) {
        for (j = n; j >= 1; j--) {
            if (j > i) a += j;
            else a += i;
        }
        for (j = 2; j <= n; j++) {
            if (j > i) a += j;
            else a += i;
        }
        a += "\n";
    }
    for (i = 1; i <= n; i++) {
        for (j = n; j >= 1; j--) {
            if (j > i) a += j;
            else a += i;
        }
        for (j = 2; j <= n; j++) {
            if (j > i) a += j;
            else a += i;
        }
        a += "\n";
    }
    // return 0;
    console.log(a)
})