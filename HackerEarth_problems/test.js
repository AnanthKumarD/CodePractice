var removeKdigits = function(num, k) {
    if (num.length === k) return "0";
    for (let j = 0; j < k; j++) {
        var i = 0;
        while (i < num.length - 1 && num.charAt(i) <= num.charAt(i + 1)) {
            i++;
        }
        num = num.replace(num[i], "")
    }

    while (num.length > 1 && num.charAt(0) === '0') {
        num = num.replace(0, "");
    }
    if (num.length == 0) {
        return "0";
    }
    return num;
};
var data = "10200";

console.log(removeKdigits(data, 1));











// var s = ["GeeksforGeeeks", "I", "from", "am"];
// var i = 0;
// var j = 1;
// while (i != j) {
//     if (s[i] > s[j]) {
//         var temp = s[i];
//         s[j] = s[i];
//         s[i] = temp;
//     }
// }
// console.log(s);
// for (i = 0; i < s.length; i++) {
//     if (s[i].length > s[i + 1].length) {

//     }
// }
// const fs = require('fs');

// fs.readFile('./inputFile.txt', 'utf-8', (err, input) => {
//     if (err) throw err;

//     let inputLength = input.trim().split("\n");
//     for (i = 1; i < inputLength.length; i++) {
//         var a = inputLength[i].trim().split(" ");
//         let k = parseInt(a[0]);
//         let m = parseInt(a[1]);
//         let n = parseInt(a[2]);
//         let steps = 0;
//         while (k != m) {
//             // console.log(k, '....>', m)
//             if (m > k) {
//                 k = k * n;
//                 steps += 1;

//             }
//             if (k > m) {
//                 k = ((k - m) % 2 === 1) ? k - 1 : k - 2;
//                 steps += 1;
//             }

//         }
//         // console.log(k, '....', m, '....', n)
//         // console.log(i, '......', steps)
//         process.stdout.write(steps + "\n"); // Writing output to STDOUT
//     }
// })