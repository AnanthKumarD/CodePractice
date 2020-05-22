// var inputLines = input.trim().split(" ");
var X = 5;
var n = 2;
var i = n,
    fact = "1";
while (n / i != n) {
    fact = parseInt(fact) * i;
    i--;
}
console.log(fact)

let log10Y = Math.log(X) * fact / Math.log(10);
let b = Math.floor(log10Y);
let a = log10Y - b;
console.log(a, '..........', b, '......', log10Y)
process.stdout.write(b % 10 + "\n");