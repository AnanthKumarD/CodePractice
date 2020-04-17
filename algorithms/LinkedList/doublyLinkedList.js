class dllNode {
    constructor(data, prevNode = null, nextNode = null) {
        this.prevNode = prevNode;
        this.data = data;
        this.nextNode = nextNode;
    }
}
class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
    }
    insertAtFirst(d) {
        var newNode = new dllNode(d);
        newNode.prevNode = null;
        newNode.nextNode = this.head;
        console.log(newNode)
        if (this.head != null) {
            this.head.prevNode = newNode;
            return this.head;
        }
        this.head = newNode;
        return this.head;

    }
}
DoublyLinkedList.prototype.insertAtEnd = function(d) {
    var newNode = new dllNode(d);
    if (this.head != null) {
        var temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        console.log(temp, '....');
        // newNode.prevNode = null;
        // newNode.nextNode = this.head;
        // this.head = newNode;
        // return this.head;
    } else {
        this.head = newNode;
        return this.head;
    }
}

DoublyLinkedList.prototype.insertAtPosition = function() {

}
var DLL = new DoublyLinkedList();
DLL.insertAtFirst(10);
DLL.insertAtFirst(20);
DLL.insertAtFirst(40);
DLL.insertAtFirst(30);
// DLL.insertAtEnd(50);
console.log(JSON.stringify(DLL));