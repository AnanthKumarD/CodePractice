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