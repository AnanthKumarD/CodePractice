const fs = require('fs')

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('./inputFile2.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    var input_stdin_array = data.trim().split("\n");
    console.log(input_stdin_array);
    for (k = 1; k <= input_stdin_array.length; k) {
        if (k == input_stdin_array.length) {
            break;
        }
        a = input_stdin_array[k + 1].trim().split(" ").sort(function(m, n) { return m - n });
        b = input_stdin_array[k + 2].trim().split(" ").sort(function(m, n) { return m - n });
        var counter = 0;
        var i = 0,
            j = 0;

        while (i != a.length) {
            if (parseInt(a[i]) > parseInt(b[j])) {
                counter++;
                i++;
                j++
            }

            if (parseInt(a[i]) <= parseInt(b[j])) {
                i++;
            }
        }
        process.stdout.write(counter + "\n");
        if (input_stdin_array[0] > 1) {
            k = k + 3;
        }
        if (input_stdin_array[0] <= 1) {
            break;
        }
    }
})