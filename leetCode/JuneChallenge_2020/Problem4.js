/** 
 * Link:- https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3350/
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var i = 0;
    var j = s.length - 1;

    while (i <= j) {
        var temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
}

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);