/**
 * Link:- https://leetcode.com/problems/merge-two-sorted-lists/
 */


/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


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
    getLinkedListVal(list){
        var a =[]
        if(list){
            var tail = list.next;
            a.push(list.val);
            while(tail != null){
                a.push(tail.val);
                tail = tail.next
            }
            // if(tail == null){
            //     a.push(tail.val)
            // }
        }
        return a;
        
    }
}
var mergeTwoLists = function(l1, l2) {
    var ll = new LinkedList();
    var newArray = ll.getLinkedListVal(l1).concat(ll.getLinkedListVal(l2));

    newArray = newArray.sort(function(a,b) {
        return a-b;
    })
    console.log(newArray.reverse())
    for(i=0;i<newArray.length;i++){
        ll.addItemToBeginning(newArray[i])
    }
    console.log(JSON.stringify(ll.head))
};

// var l1 = null;
// var l2 = {
//     val: 0,
//     next: null
// }
var l1 = {
    val: 1,
    next:  { val: 2, next:  { val: 4, next: null } }
  
}
var l2 = {
    val: 1,
    next:  { val: 3, next:  { val: 4, next: null } }
}
mergeTwoLists(l1,l2);