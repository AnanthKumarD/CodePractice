var a = "eAvPASAQpMphwebLkYijusOoRnSOHCrnEpcHhCZwRofPsIAfHJQDbEtvuljbqcoUrSBzXAxqqDfJNGquRg";
var k = 0;
var b = [];
var vowelData = ["a", "e", "i", "o", "u"]
counter = 1;
let mySet = new Set();
while (k != a.length) {
    for (i = k; i < a.length; i++) {
        mySet.add(a.substring(k, i + 1));
    }
    k++;
}
mySet.forEach(c => {
    [...c].forEach(d => {
        if (vowelData.indexOf(d.toLowerCase()) != -1) {
            console.log(c);
            counter++;
        }
    });
})
console.log(' >>.', counter);