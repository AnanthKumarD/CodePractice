var J = "aA";
var S = "aAAbbbb";
// var numJewelsInStones = function(J, S) {
var count = 0;
for (i = 0; i < J.length; i++) {
    for (j = 0; j < S.length; j++) {
        console.log(J[i], '...', S[j])
        if (J[i] === S[j]) {
            count++;
        }
    }
}
console.log(count);
// };

// numJewelsInStones(J, S)