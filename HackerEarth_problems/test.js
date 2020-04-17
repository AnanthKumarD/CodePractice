var s = ["GeeksforGeeeks", "I", "from", "am"];
var i = 0;
var j = 1;
while (i != j) {
    if (s[i] > s[j]) {
        var temp = s[i];
        s[j] = s[i];
        s[i] = temp;
    }
}
console.log(s);
// for (i = 0; i < s.length; i++) {
//     if (s[i].length > s[i + 1].length) {

//     }
// }