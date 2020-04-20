const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var checkpoints = input.trim().split("\n");

    for (var i = 1; i < checkpoints.length; i += 2) {
        var peaks = 0;
        var newCheckPoint = checkpoints[i + 1].trim().split(" ");
        for (j = 0; j < newCheckPoint.length; j++) {
            if (parseInt(newCheckPoint[j - 1]) < parseInt(newCheckPoint[j]) &&
                parseInt(newCheckPoint[j + 1]) < parseInt(newCheckPoint[j])) {
                peaks++;
            }
        }
        process.stdout.write(peaks + "\n");
    }
})