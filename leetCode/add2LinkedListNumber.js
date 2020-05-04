function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
class LinkedList {
    constructor(head = null) {
        this.head = null;
    }
    addItemToBeginning(d) {
        let newNode = new ListNode(d);
        if (this.head !== null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        return this.head;
    }
}

function linkedListVale(l) {
    var head = l.head;
    var stringToReverse = [];
    stringToReverse.push(head.val);
    while (head.next != null) {
        head = head.next
        stringToReverse.push(head.val);
    }
    return parseInt(stringToReverse.reverse().join(""));
}

function ConstructLinkedList(l) {
    var lnewList = new LinkedList();
    for (i = 0; i < l.length; i++) {
        // var ListNode(l[i])

        lnewList.addItemToBeginning(l[i]);

    }
    console.log(JSON.stringify(lnewList));
    return lnewList
}
var addTwoNumbers = function(l1, l2) {
    var l1Data = linkedListVale(l1);
    var l2Data = linkedListVale(l2);
    var l3 = l1Data + l2Data;
    console.log(l3)
    console.log(ConstructLinkedList(l3.toString()));
};

var lList = new LinkedList();
lList.addItemToBeginning(3);
lList.addItemToBeginning(4);
lList.addItemToBeginning(2);

var l2List = new LinkedList();
l2List.addItemToBeginning(4);
l2List.addItemToBeginning(6);
l2List.addItemToBeginning(5);

console.log(JSON.stringify(lList));
console.log(JSON.stringify(l2List));
addTwoNumbers(lList, l2List);