/**
 * Link:- https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/practice-problems/algorithm/feel-taller/
 */

const fs = require('fs');
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;
    var inputLines = input.trim().split("\n");
    var noOfBuildings = inputLines[1].trim().split(' ');
    var j = noOfBuildings.length - 1;
    var count = Array(noOfBuildings.length).fill(0);
    while (j >= 0) {
        if (noOfBuildings[j + 1] == undefined) {
            count[j] = 1
        } else {
            var k = j + 1;

            while (parseInt(noOfBuildings[j]) > parseInt(noOfBuildings[k]) && k != noOfBuildings.length) {
                k++;
            }
            while (parseInt(noOfBuildings[j]) < parseInt(noOfBuildings[k])) {
                count[j] = count[k] + 1;
                // k++;
                break;
            }
            while (parseInt(noOfBuildings[k]) != NaN && k == noOfBuildings.length) {
                count[j] = 1;
                break;
            }
        }
        j--;
    }
    // console.log(JSON.stringify(count));
    var i = 3;
    while (i != inputLines.length) {
        var d = inputLines[i].trim().split(' ');
        var a = count[parseInt(d[0])] > count[parseInt(d[1])] ? count[parseInt(d[0])] : count[parseInt(d[1])];
        console.log(count[parseInt(d[0])], '.....', count[parseInt(d[1])], '>>>', noOfBuildings[parseInt(d[0])], '....', noOfBuildings[parseInt(d[1])], '....', noOfBuildings[parseInt(d[0])] > noOfBuildings[parseInt(d[1])])
            // process.stdout.write(a + "\n");
        i++;
    }
})