/**
 * https://www.hackerearth.com/challenges/competitive/may-easy-20/algorithm/maximum-sum-8-29f3fc56/
 */
const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    // n <= input
    // m 
    // var k = parseInt(input);
    var k = 5;
    var n = 0;
    var m = 1;
    var a = [];
    while (n <= k) {
        var nSquare = Math.pow(n, 2);
        var nM = n * m;
        var mSquare = Math.pow(m, 2)
        var total = (nSquare - nM - mSquare);
        console.log(total, '.......', m, '.,,,,,,',
            n, '....', Math.pow(total, 2));
        if (Math.pow(total, 2) == 1) {
            a.push(m + n);
        }
        n++;
    }
    process.stdout.write(a[a.length - 1] + "\n");


})