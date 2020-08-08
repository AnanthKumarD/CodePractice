
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

class newTree{
	constructor(val){
		this.dataVal = val;

	}

	constructTrees(d){
		var newNode = new TreeNode(d)
		if(this.dataVal == undefined){
			this.dataVal = newNode
		}else{
			console.log(d,'....',this.dataVal);

			while(this.dataVal.val > d){
				this.dataVal = newNode;
				this.dataVal.left = this.dataVal.val
			}
		}
		return
	}
}

var data = {
	"val":1,
	"left":null,
	"right":{
		"val":2,
		"left":null,
		"right":{
			"val":3,
			"left":null,
			"right":{
				"val":4,
				"left":null,
				"right":null
			}
		}
	}
};

var balanceBST = function(root) {
	var a = new newTree();

	while(root.left!=null){
		a.constructTrees(root.val)
		root = root.left
	}

	while(root.right!=null){
		a.constructTrees(root.val)
		root = root.right
	}
	a.constructTrees(root.val)
};

balanceBST(data)