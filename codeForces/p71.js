// const fs = require('fs')
// fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
//     if (err) throw err;

//     var inputLines = input.trim().split("\n");
//     for (var i = 1; i < inputLines.length; i++) {
//         if (inputLines[i].length <= 9) {
//             process.stdout.write(inputLines[i] + "\n");
//         } else {
//             var d = inputLines[i].length - 2;
//             process.stdout.write(inputLines[i][0] + d + inputLines[i][inputLines[i].length - 1] + "\n");
//         }
//     }
// })

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
    stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function() {
    main(stdin_input);
});

function main(input) {
    var inputLines = input.trim().split("\n");
    for (var i = 1; i < inputLines.length; i++) {
        if (inputLines[i].length <= 9) {
            process.stdout.write(inputLines[i] + "\n");
        } else {
            var d = inputLines[i].length - 2;
            process.stdout.write(inputLines[i][0] + d + inputLines[i][inputLines[i].length - 1] + "\n");
        }
    }
}