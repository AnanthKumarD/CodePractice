const fs = require('fs')
    // 4 5 3 7 1 5 4
    // output: 1,3,4,4,5,5,7
    // after sorting index should be 4,2,0,6,1,5,3
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var arr = inputLines[1].trim().split(" ");
    var a = {};
    for (i = 0; i < arr.length; i++) {
        a[arr[i]] = (a[arr[i]] != undefined) ? (a[arr[i]] + ' ' + i) : i
    }
    var b = '';
    Object.keys(a).forEach(function(val, i) {
        b += ' ' + a[val];
    })

    process.stdout.write(b + " \n");
})