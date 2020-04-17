const fs = require('fs')

// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('./textInput.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    // var a = [1, 2, 2, 4, 3, 4];
    //var a = [2, 2, 1, 3, 1];
    // var a = [1, 1, 2, 2, 2, 2, 3, 3, 4, 4];
    //var counterTobeMatched = 2;
    // var counterTobeMatched = 4;

    // console.log(data.trim().split("\n")[0]);
    var inputData = data.trim().split("\n");
    var a = inputData[0];
    var inputVal = inputData[1].trim().split(" ");
    var counterTobeMatched = inputData[2];
    var b = {};
    var minEle = 0;

    for (i = 0; i < inputVal.length; i++) {
        if (b[inputVal[i]] != undefined) {
            b[inputVal[i]] = b[inputVal[i]] + 1;
            if (minEle == 0 && b[inputVal[i]] == counterTobeMatched) {
                minEle = inputVal[i];
            }
            if (minEle > inputVal[i]) {
                minEle = inputVal[i];
            }
        } else {
            b[inputVal[i]] = 1;
            if (minEle == 0 && b[inputVal[i]] == counterTobeMatched) {
                minEle = inputVal[i];
            }
        }
    }
    console.log(b)
    process.stdout.write(minEle + "\n");
})