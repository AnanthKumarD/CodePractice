// var totalArrayLength = input.trim().split("\n")[0];
//     var arrayVal = input.trim().split("\n")[1].trim().split(' ');
//     var counter = 0;
//     var min = 0;
//     var max = 0;
//     while (counter != arrayVal.length) {
//         var sum = 0;
//         for (i = 0; i < arrayVal.length; i++) {
//             if (counter != i) {
//                 sum += parseInt(arrayVal[i]);
//             }
//         };
//         counter++;
//         if (min == 0 && max == 0) {
//             max = sum
//         }
//         if (sum >= max) {
//             max = sum;
//             min = sum;
//         }
//         if (sum < min) {
//             min = sum;
//         }
//     }
//     process.stdout.write(min +' '+ max + "\n")

const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    for (i = 1; i < inputLines.length; i += 2) {
        var N = inputLines[i].trim().split(" ")[0];
        var M = inputLines[i].trim().split(" ")[1];
        var maxMinSum = N - M;
        var arrayElement = inputLines[i + 1].trim().split(" ");
        var val = [];

        arrayElement = arrayElement.sort(function(a, b) { return a - b });
        for (k = 0; k < arrayElement.length; k++) {
            var b = 0;
            if (k + maxMinSum <= arrayElement.length) {
                for (l = k; l < k + maxMinSum; l++) {
                    b += parseInt(arrayElement[l]);
                }
                if (b) {
                    val.push(b)
                }
            }
        }
        var sortedData = val.sort(function(a, b) { return a - b });
        sortedData = sortedData[sortedData.length - 1] - sortedData[0];
        process.stdout.write(sortedData + "\n");
    }
})