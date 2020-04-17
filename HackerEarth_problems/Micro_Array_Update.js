const fs = require('fs')
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var totalEle = input.trim().split("\n");
    console.log(totalEle.length)
    for (i = 1; i <= totalEle.length; i = +2) {
        console.log(totalEle[i]);
        var a = totalEle[i].trim().split(" ");
        var N = a[0];
        var K = a[1];
        var arrayEle = totalEle[i + 1].trim().split(" ");
        console.log(N, '...', K, '.......', arrayEle)
            // while (ele >= 4) {
            //     for (j = 0; j < arrayEle.length; j++) {

        //     }
        // }

    }
})