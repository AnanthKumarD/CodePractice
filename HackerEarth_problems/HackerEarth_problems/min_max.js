const fs = require('fs')

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('./textInput.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    // Converting Raw Buffer to text 
    // data using tostring function. 
    var counter = 0;
    var min = 0;
    var max = 0;
    // data = 
    var data = [1, 2, 3, 4, 5];

    while (counter != data.length) {
        var sum = 0;
        for (i = 0; i < data.length; i++) {
            if (counter != i) {
                sum += data[i];
            }
        };
        counter++;

        if (min == 0 && max == 0) {
            max = sum
        }
        if (sum >= max) {
            max = sum;
            min = sum;
        }
        if (sum < min) {
            min = sum;
        }
    }
    console.log(min, '...', max);
})