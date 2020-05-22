const fs = require('fs')
fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");

    var units = inputLines[0].trim().split(",");
    var constructedData = "";
    var prevValue = "";
    var minValue = 0;
    for (i = 1; i < inputLines.length; i++) {
        var d = inputLines[i].trim().split(" = ");
        var a = d[1].trim().split(" ");
        console.log(parseInt(a[0]), '.....', a[1]);
        if (!constructedData) {
            minValue = parseInt(a[0]);
            prevValue = a[1];
            constructedData += "1" + d[0] + " = " + a[0] + "" + a[1];
        } else {
            if (prevValue == d[0]) {
                minValue = minValue * parseInt(a[0]);
                prevValue = a[1];
                constructedData += " = " + minValue + "" + a[1];
            } else {
                console.log(a[0], '>>>>>')
            }
        }
    }
    console.log(constructedData, '...', minValue)

    //process.stdout.write(unitData + "\n");
})