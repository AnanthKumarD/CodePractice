const fs = require('fs')

fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
    if (err) throw err;

    var inputLines = input.trim().split("\n");
    var vaccineStength = inputLines[1].trim().split(" ");
    var patientStrength = inputLines[2].trim().split(" ");
    var flag;
    for (i = 0; i < patientStrength.length; i++) {
        if (parseInt(vaccineStength[i]) >= parseInt(patientStrength[i])) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        process.stdout.write("Yes \n");
    } else {
        process.stdout.write("No \n");
    }

})