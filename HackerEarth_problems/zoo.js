// You are required to enter a word that consists of  and  that denote the number of Zs and Os respectively. The input word is considered similar to word zoo if .

// Determine if the entered word is similar to word zoo.

// For example, words such as zzoooo and zzzoooooo are similar to word zoo but not the words such as zzooo and zzzooooo.

// Input format

// First line: A word that starts with several Zs and continues by several Os.
// Note: The maximum length of this word must be .
// Output format

// Print Yes if the input word can be considered as the string zoo otherwise, print No.

// SAMPLE INPUT 
// zzzoooooo
// SAMPLE OUTPUT 
// Yes
//var input = "zzoo";
//var input = "zzoooo";
var input = "zzooooo";
// var input = "zzzoooooo";
var i = 0;
var j = 1;
var count = 0;
while (j < input.length) {


    if (input[i] == 'z' && input[j] != 'o') {
        j++;
    } else {
        count++;
        j++;
    }

    if (count == 2) {
        count = 0;
        i++;
        // console.log(i, '...', j)
    }
    if (input[i] == 'z' && j == input.length) {
        console.log(count, '...', i, '...', j);
    };
}