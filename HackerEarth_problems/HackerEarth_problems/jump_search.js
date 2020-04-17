//steps
// first find the lenght and its sqare root to find in terms of blocks
// in each block item check whether the higher element is equal to less then the element to be find
// if it is less then do linear search in that block 
// else check in other block
// if element doesnt able to find in block then return -1;

function jump_search(a, x) {
    var toJump = Math.floor(Math.sqrt(a.length));
    var l = 0;
    var eleToFindinBlock;
    while (l < a.length) {
        if (a[toJump] == x) return toJump;
        if (a[toJump] < x) {
            l = toJump
            toJump += Math.floor(Math.sqrt(a.length));
            console.log(l, ',.,.', toJump)
        }
        if (a[toJump] > x) {
            eleToFindinBlock = toJump;
            console.log(l, ',.,.', toJump)
            for (i = l; i < toJump; i++) {
                if (a[i] == x) {

                }
                return i;
            }
        }
    }
}

var a = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
console.log(jump_search(a, 1234));