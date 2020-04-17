var a = 1;
var b = 2;
var N = 5;
var sum = 0;
var min = 0;
var i = 0;
var k = N;
while (i != N + 1) {
    for (j = N; j <= N; j++) {
        sum += (a * Math.pow(i, 2)) + (b * Math.pow(k--, 2));
        if (min == 0) {
            min = sum;
        }
        if (sum < min) {
            min = sum;
        }
        sum = 0;
    }
    i++;
}
console.log(min);