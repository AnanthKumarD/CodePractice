var ransomNote = "fffbfg"
var magazine = "effjfggbffjdgbjjhhdegh";

// var ransomNote = "aa"
// var magazine = "aab";

// var ransomNote = ""
// var magazine = "";
var mainFlag = false;
var k = 0;
if (ransomNote == "" && magazine == "") return true;

while (k != magazine.length) {
    if (ransomNote === magazine.substr(k, ransomNote.length)) {
        mainFlag = true;
        break;
    }
    k++
}

console.log(mainFlag, '....');