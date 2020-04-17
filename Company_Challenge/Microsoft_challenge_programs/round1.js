var qToMakePPf = [2, 5, 6, 3];
var quantity = [20, 40, 90, 50];
// var qToMakePPf = [3, 6, 10];
// var quantity = [10, 20, 30];

var n = []
for (i = 0; i < quantity.length; i++) {
    if (quantity[i] > 0) {
        n.push(quantity[i] / qToMakePPf[i]);
    }
}
n = n.sort(function(a, b) { return a - b });
console.log(n);
console.log(n[0]);