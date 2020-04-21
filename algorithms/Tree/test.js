// inorder => LIR
// preOrder => ILR
// postOrder => LRI 
//INPUT
//   10
// 11   9
// 7    15 8

class BtTree {

    constructor() {
        this.root = null;
    }
    insertNode(val) {
        var node = {
            data: val,
            left: null,
            right: null
        }
        if (!this.root) {
            this.root = node;
        }
        var nextNode = this.root;
        while (!nextNode.left) {
            if (nextNode.left == null) {
                nextNode.left = node;
                break;
            }
            nextNode = nextNode.left;
        }
        while (!nextNode.right) {
            if (!nextNode.right) {
                nextNode.right = node;
                break;
            }
            nextNode = nextNode.right
        }
    }

}
var b = new BtTree();
b.insertNode(10);
b.insertNode(20);
b.insertNode(30);

console.log(JSON.stringify(b.root));
console.log(b.root.left);
console.log(b.root.right);