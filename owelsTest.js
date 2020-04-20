var owelsList = ['a', 'e', 'i', 'o', 'u']

let process = word => {
    let i = 0;
    let j = word.length;
    while (j > i) {
        if (owelsList.indexOf(word[i]) == -1) {
            i++;
        }

        if (owelsList.indexOf(word[j]) == -1) {
            j--
        }

        if (owelsList.indexOf(word[i]) !== -1 && owelsList.indexOf(word[j]) !== -1) {
            var s = word[i];
            word = replaceAt(word, i, word[j])
            word = replaceAt(word, j, s)
            i++;
            j--;
        }
    }

    return word;
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
console.log(process('javascript'));
console.log(process('hello'));