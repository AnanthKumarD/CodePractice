class stackData {
    constructor(data = []) {
        this.data = data
    }

    add(d) {
        console.log(d, '.....');
        if (this.data == null) {
            this.data.push(d)
        }
        return this.data.push(d)
    }

    remove(k) {
        console.log('0........k', k, '............', this.data);
        return this.data.splice(0, k);
    }
}

function balancedStringSplit(s) {
    var k = 0;
    var newStack = new stackData();
    var count = 0;
    while (k != s.length) {
        if (newStack.data.length && newStack.data.indexOf(s[k]) == -1) {
            newStack.remove(k);
            count++;
        } else {
            newStack.add(s[k])
        }
        k++;
    }
    return count;
};

balancedStringSplit("LLLLRRRR")