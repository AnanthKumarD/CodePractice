/**
 * Link :- https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3347/
 * 
 * Input
 *        4
         /   \
        2     7
       / \   / \
      1   3 6   9
 * Output
          4
        /   \
       7     2
      / \   / \
     9   6 3   1
 */

var invertTree = function(root) {

    if (root == null) {
        return root;
    } else {

        if (root.left) invertTree(root.left);
        if (root.right) invertTree(root.right);

        var temp = root.left;
        root.left = root.right;
        root.right = temp;
        console.log(root, '>>>>>>>>>>>>>');
    }
};

invertTree(root);