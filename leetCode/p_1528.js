
// https://leetcode.com/contest/weekly-contest-199/problems/shuffle-string/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var newArray= [];
    for(i=0;i<indices.length;i++){
        newArray[indices[i]] = s[i]
    }
    return newArray.join("");
};