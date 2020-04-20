const fs = require('fs')

// Input:-
// // 3
// // 4 100
// // 20 90 40 90
// // 4 50
// // 30 30 10 10
// // 3 300
// // 999 999 999

// // Output to Print : 
// // Case #1: 2
// // Case #2: 3
// // Case #3: 0


fs.readFile('../inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var allocations = input.trim().split("\n");
    var c = 0;
    for (var i = 1; i < allocations.length; i += 2) {
        var houseCount = 0;
        var MaxAmountLimit = allocations[i].trim().split(" ")[1];
        var newAllocations = allocations[i + 1].trim().split(" ").sort();
        for (j = 0; j < newAllocations.length; j++) {
            if (parseInt(newAllocations[j]) <= parseInt(MaxAmountLimit)) {
                MaxAmountLimit -= newAllocations[j];
                houseCount++;

            }
        }
        c++;
        process.stdout.write("Case #" + c + ":" + houseCount + "\n");
    }

})