// var actualString = "ababa";
//var actualString = "hylobclddzflmzitrxwwsqhozvgexhxjmm";
var actualString = "adfkkbibylrrafsxvlehrrqzblwjopejincgqpzqhombvsxpkys";
var stringLength = actualString.length;
var counter = 0;
var a, b, c, d = 0;
for (i = 0; i < stringLength; i++) {
    a = i + 1;
    b = a + 1;
    c = b + 1;
    d = c + 1;
    console.log(a, '...', b, '....', c, '....', d);
    counter++;
    if (d == stringLength) {
        break;
    }
}
console.log(counter, '....', stringLength);