const fs = require('fs')
    // 4
    // 3
    // AAB
    // 5
    // AABAA
    // 1
    // B
    // 4
    // BABA
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i += 2) {
        var nInteger = inputLines[i].trim().split("")[0];
        var arr = inputLines[i + 1].trim().split("");
        var k = 0;
        var l = arr.length - 1;
        var count = 0;
        while (k < l) {
            if (arr[k] != arr[l] && arr[l] == "A") {
                arr[k] = arr[l];
                k++;
                count++;
            } else {
                k++;
            }
        }
        console.log(count);
    }
})