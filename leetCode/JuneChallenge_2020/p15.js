/**
 * https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3361/
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var root = {
    val: 4,
    left:  {
        val: 2,
        left:  { val: 1, left: null, right: null },
        right:  { val: 3, left: null, right: null }
    },
    right:  { val: 7, left: null, right: null }
}
var searchBST = function(root, val) {
    
    if(root == null) {
        return root;
    }else{
        
        while(root && root.val != val){
            if(root && root.val < val ){
                root = root.right
            }
            if(root && root.val > val){
                root = root.left
            }
        }
        console.log(root)
        if(root && root.val == val) {
            return root
        }else{
            return null;
        }
    }
};

console.log(searchBST(root,5))

  