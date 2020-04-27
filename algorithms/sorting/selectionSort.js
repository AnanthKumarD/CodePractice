/**
 * Algo:- Sorting
 * Type:- Selection sort
 * Author :- Ananth Kumar D
 * Description :- selection sort compare from starting element in array and check for the mininmum element and replace it with the first item, it keeps on repeat that step untill all element in array gets sorted 
 */

// var a = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
var a = [12, 11, 13, 5, 6, 7, -1, 0, 1, -15, -110];
var k;
for (i = 0; i < a.length; i++) {
    var min = a[i];
    for (j = i + 1; j < a.length; j++) {
        if (min > a[j]) {
            min = a[j];
            k = j;
        }
    }
    temp = a[i];
    a[i] = min;
    a[k] = temp;
}
console.log(a);