// Binary Tree Ref Link :- https://js-algorithms.tutorialhorizon.com/2015/10/12/create-a-binary-search-tree-in-javascript/
// in-order,pre-order, post-order:- https://js-algorithms.tutorialhorizon.com/2015/10/12/binary-tree-traversal/
class binaryTree {
    constructor(v) {
        this.treeVal = null
    }
    insertTreeVal(val) {
        var node = {
            data: val,
            left: null,
            right: null
        }

        if (!this.treeVal) {
            this.treeVal = node;
        } else {
            var currentNode = this.treeVal;
            while (currentNode) {
                if (val < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (val > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                    break;
                }
            }
        }
    }
}
var Bt = new binaryTree();
Bt.insertTreeVal(8);
Bt.insertTreeVal(5);
Bt.insertTreeVal(6);
Bt.insertTreeVal(8);
console.log(JSON.stringify(Bt));