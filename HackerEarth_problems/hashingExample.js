var has = [1000 + 1][2];
console.log(has)
    // searching if X is Present in the given array  
    // or not. 
function search(X) {
    if (X >= 0) {
        if (has[X][0] == 1) {
            return true;
        } else {
            return false;
        }
    }

    // if X is negative take the absolute  
    // value of X. 
    X = Math.abs(X);
    if (has[X][1] == 1) {
        return true;
    }
    return false;
}

function insert(a, n) {
    for (i = 0; i < n; i++) {
        if (a[i] >= 0) {
            has[a[i]][0] = 1;
        } else {
            console.log(has);
            has[Math.abs(a[i])][1] = 1;
        }
    }
}

var a = [-1, 9, -5, -8, -5, -2];
// var n = sizeof(a) / sizeof(a[0]);
insert(a, a.length);
var X = -5;
if (search(X) == true) {
    console.log("Present");
} else {
    console.log("Not Present");
}