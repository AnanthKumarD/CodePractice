class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
};
class LinkedList {
    constructor(head = null) {
        this.head = null;
    }
    addItemToBeginning(d) {
        let newNode = new Node(d);
        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;
    }
    addItemToEnd(d) {
        let newNode = new Node(d);
        if (this.head == null) return newNode;
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return tail;
    }

    addAtSpecificEle(d, pos) {
        let newNode = new Node(d);
        if (this.head == null) {
            return newNode;
        }
        let tail = this.head;
        let counter = 0;
        while (tail.next != null) {
            if (counter == pos) {
                newNode.next = tail.next;
                tail.next = newNode;
                break;
            }
            counter++;
        }
    }
}

LinkedList.prototype.deleteAtFirst = function() {
    if (this.head == null) {
        return 'Data Doesnt Exist in LinkedList';
    }
    var tail = this.head;
    this.head = tail.next;
    return;
}

LinkedList.prototype.deleteAtEnd = function() {
    if (this.head == null) {
        return 'Data Doesnt Exist in LinkedList';
    }
    var prev;
    var tail = this.head;
    while (tail.next != null) {
        prev = tail;
        tail = tail.next;
    }
    prev.next = null;
    return this.head;
}

LinkedList.prototype.deleteAtPosition = function(pos) {
    if (this.head == null) {
        return 'Nothing';
    }

    var tail = this.head;
    var prev;
    var counter = 0;
    while (tail.next != null) {
        if (counter == pos) {
            tail.data = tail.next.data;
            tail.next = tail.next.next;
            break
        }
        tail = tail.next;
        prev = tail;
        counter++;
    }
}

var lList = new LinkedList();
lList.addItemToBeginning(1);
lList.addItemToBeginning(5);
lList.addItemToBeginning(10);
lList.addItemToBeginning(15);

lList.addItemToEnd(100);
lList.addItemToEnd(120);

lList.addAtSpecificEle(44, 1);
lList.deleteAtFirst();
lList.deleteAtEnd();
lList.deleteAtEnd();


lList.deleteAtPosition(3);
lList.deleteAtPosition(1);
console.log(JSON.stringify(lList));




function add(str1, str2) {

    let sum = ""; // our result will be stored in a string.

    // we'll need these in the program many times.
    let str1Length = str1.length;
    let str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if (str2Length > str1Length) {
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }

    let carry = 0; // number that is carried to next decimal place, initially zero.
    let a;
    let b;
    let temp;
    let digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i)); // get ith digit of str1 from right, we store it in a
        b = parseInt(str2.charAt(str2.length - 1 - i)); // get ith digit of str2 from right, we store it in b
        b = (b) ? b : 0; // make sure b is a number, (this is useful in case, str2 is shorter than str1
        temp = (carry + a + b).toString(); // add a and b along with carry, store it in a temp string.
        digitSum = temp.charAt(temp.length - 1); //
        carry = parseInt(temp.substr(0, temp.length - 1)); // split the string into carry and digitSum ( least significant digit of abSum.
        carry = (carry) ? carry : 0; // if carry is not number, make it zero.

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum; // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum; // return sum

}