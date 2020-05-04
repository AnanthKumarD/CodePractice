const fs = require('fs');
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;
    var inputLines = input.trim().split("\n");
    var noOfBuildings = inputLines[1].trim().split(' ');
    var max = 0;
    var count = 0;
    var maxCount = []
    for (i = 0; i < noOfBuildings.length; i++) {
        max = noOfBuildings[i];
        count++;
        for (j = i + 1; j < noOfBuildings.length; j++) {
            if (parseInt(noOfBuildings[j]) > max) {
                max = noOfBuildings[j];
                count++;
            }
        }
        maxCount.push(count);
        count = 0;
        max = 0;
        console.log(i);
    }
    console.log(maxCount);
    var k = 3;
    while (k != inputLines.length) {
        var d = inputLines[k].trim().split(' ');
        var totalValue = (maxCount[parseInt(d[0])] - maxCount[parseInt(d[1])]) + 1
        process.stdout.write(totalValue + "\n");
        k++;
    }
})


// var i = 3;
//     var max = 0;
//     var count = 0;
//     while (i != inputLines.length) {
//         var d = inputLines[i].trim().split(' ')

//         for (k = parseInt(d[0]); k <= parseInt(d[1]); k++) {
//             if (!max) {
//                 max = noOfBuildings[k];
//                 count++;
//             }
//             if (parseInt(noOfBuildings[k]) > max) {
//                 max = noOfBuildings[k];
//                 count++;
//             }
//         }
//         i++;
//         process.stdout.write(count + "\n");
//         count = 0;
//         max = 0;
//     }