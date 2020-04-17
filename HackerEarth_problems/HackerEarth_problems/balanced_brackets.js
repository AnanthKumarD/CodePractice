const fs = require('fs')
class stack {
    constructor() {
        this.data = [];
    }
}

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");

    for (i = 1; i < inputLines.length; i++) {
        var s = new stack();
        for (j = 0; j < inputLines[i].length; j++) {
            if (['{', '[', '('].indexOf(inputLines[i][j]) != -1) {
                s.data.push(inputLines[i][j]);
            } else {

                if (inputLines[i][j] == "}" && inputLines[i][s.data.length - 1] == "{") {
                    console.log('....', s.data)
                    s.data.pop();
                }
                if (inputLines[i][j] == "]" && inputLines[i][s.data.length - 1] == "[") {
                    s.data.pop();
                }
                if (inputLines[i][j] == ")" && inputLines[i][s.data.length - 1] == "(") {
                    s.data.pop();
                }
                console.log('INSIDE ELSE', inputLines[i][j], '.....', s.data)
            }

        }
        if (s.data.length > 0) {
            process.stdout.write("NO" + "\n");
        } else {
            process.stdout.write("YES" + "\n");
        }
    }
})