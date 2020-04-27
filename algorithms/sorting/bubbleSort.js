/**
 * Algo:- Sorting
 * Type:- Bubble Sort
 * Author :- Ananth Kumar D
 * Description :- keep on changing with the minmium element by doing comparing each time
 */
// var a = [12, -100, 50, 11, 13, 5, 6, 7, -1, 0, 1, -15, -110];
var a = [1, 2, 3, 4, 5]
var k;
for (i = 0; i < a.length; i++) {
    var swapped = false;
    for (j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
            swapped = true;
        }
    }
    console.log(swapped, '....', i)
    if (swapped == false) {
        break;
    }
}
console.log(a);