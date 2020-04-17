// pre parameters , array should be sorted and should not have any duplicates in it
var totalEle = [1, 4, 5, 6, 8, 10, 11, 15, 16, 19, 20, 25, 27, 28, 30, 31, 35, 44];
var eleToFin = 44;
var toJumpEle;
var i = 0;

function jumpSearch(totalEle, eleToFin) {
    toJumpEle = Math.floor(Math.sqrt(totalEle.length));
    // start from 0th Index
    while (totalEle[toJumpEle] < eleToFin) {
        i = toJumpEle;
        toJumpEle += Math.floor(Math.sqrt(totalEle.length));
    }
    if (toJumpEle > totalEle.length) {
        toJumpEle = totalEle.length
    }
    if (totalEle[toJumpEle] == eleToFin) return true;

    for (i = 0; i < toJumpEle; i++) {
        if (totalEle[i] == eleToFin) {
            return true;
        }
    }
    return false
}
console.log(jumpSearch(totalEle, eleToFin));