// var a = [12, 11, 13, 5, 6, 7];
var a = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

function MergeSort(a) {
    if (a.length < 2) {
        return a;
    } else {
        var midpoint = parseInt(a.length / 2);

        var leftArr = a.slice(0, midpoint);
        var rightArr = a.slice(midpoint, a.length);
        console.log(leftArr, '>>>', rightArr, ' ...', midpoint);
        Merge(MergeSort(leftArr), MergeSort(rightArr));
    }
}

function Merge(l, h) {
    var valueToBeStored = [];
    console.log(l, ';;;', h)
    while (l.length && h.length) {
        if (l[0] < h[0]) {
            valueToBeStored.push(l[0]);
            l.shift();
        } else {
            valueToBeStored.push(h[0]);
            h.shift();
        }
    }
    while (l.length) {
        valueToBeStored.push(l[0]);
        l.shift();
    }
    while (h.length) {
        valueToBeStored.push(h[0]);
        h.shift();
    }
    console.log(valueToBeStored)
    return valueToBeStored;
}

MergeSort(a);