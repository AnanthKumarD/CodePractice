function MergeSort(a) {
    if (a.length < 2) {
        return a;
    } else {
        var midpoint = parseInt(a.length / 2);
        var leftArr = a.slice(0, midpoint);
        var rightArr = a.slice(midpoint, a.length);
        return Merge(MergeSort(leftArr), MergeSort(rightArr));
    }
}

function Merge(l, h) {
    var valueToBeStored = [];
    while (l != undefined && h != undefined && l.length && h.length) {
        if (l[0] < h[0]) {
            valueToBeStored.push(l[0]);
            l.shift();
        } else {
            valueToBeStored.push(h[0]);
            h.shift();
        }
    }
    while (l != undefined && l.length) {
        valueToBeStored.push(l[0]);
        l.shift();
    }
    while (h != undefined && h.length) {
        valueToBeStored.push(h[0]);
        h.shift();
    }
    return valueToBeStored;
}
// var a = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
var a = [12, 11, 13, 5, 6, 7];
console.log(MergeSort(a));