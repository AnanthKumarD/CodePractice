let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length;

    var count = Array(max + 1).fill(0);

    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    console.log(count, '............');
    for (i = min; i < max; i++) {
        while (count[i]) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};
//var a = [1, 4, 1, 10, 8, 5, 2];
var a = [-1, -40, 0, 1, 2, 7, 5, 2, 120, 100];
var max = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}
console.log(max)
console.log(countingSort(a, 0, max));