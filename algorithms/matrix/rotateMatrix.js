var a = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
var row = 0;
var col = 0;
var colLength = 4;
var rowLength = 4;
prev = a[row][col];

for (i = col; i < colLength; i++) {
    temp = a[col][i];
    a[col][i] = prev;
    prev = temp;
}
row++;
for (i = row; i < rowLength; i++) {
    console.log(i, '...', colLength - 1)
    temp = a[i][colLength - 1];
    a[i][colLength - 1] = prev;
    prev = temp;
}
console.log(a, '....', prev)