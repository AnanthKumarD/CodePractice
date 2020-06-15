/**
 * Link:- https://leetcode.com/problems/reverse-words-in-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var d = s.trim(" ").split(" ");
    var b =[];
    for(i =d.length-1;i>=0;i--){
        if(d[i]){
            b.push(d[i])
        }
    }
    console.log(b.join(" "))
    return b.join(" ")
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world!  "))
console.log(reverseWords("a good   example"))