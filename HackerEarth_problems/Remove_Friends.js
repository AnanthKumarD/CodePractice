const fs = require('fs')
class stack {
    constructor() {
        this.data = [];
    }
}

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var noOfFriendsTODelete = 0;
    for (i = 1; i < inputLines.length; i += 2) {
        noOfFriendsTODelete = parseInt(inputLines[i].trim().split(" ")[1]);
        var arrayElement = inputLines[i + 1].trim().split(" ");

        for (k = 0; k < arrayElement.length; k++) {
            console.log(parseInt(arrayElement[k]) < parseInt(arrayElement[k + 1]), '&&', noOfFriendsTODelete > 0, '.........', arrayElement[k], '<', arrayElement[k + 1], '...........', noOfFriendsTODelete);
            if (parseInt(arrayElement[k]) < parseInt(arrayElement[k + 1]) && noOfFriendsTODelete > 0) {
                arrayElement = arrayElement.splice(k, 1);
                // arrayElement.splice(k, 1);
                noOfFriendsTODelete -= 1;
            }
            // console.log(arrayElement);
        }
        process.stdout.write(arrayElement + "\n");
    }
})