/**
 * Link:- https://leetcode.com/problems/evaluate-division/
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

//only one issue if single duplicate is there then find to resolve the solution
var calcEquation = function(equations, values, queries) {
    for (var i = 0; i < equations.length; i++) {
        createTree(equations[i])
    }
};
class tree {
    constructor(val, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.val = val;
    }
}
var createTree = function(eq) {
    var treeVal = new tree(eq[0]);
    console.log(treeVal);
    // if ()
}


calcEquation([
    ["a", "b"],
    ["b", "c"]
], [2.0, 3.0], [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"]
])

calcEquation([
    ["a", "b"],
    ["b", "c"],
    ["bc", "cd"]
], [1.5, 2.5, 5.0], [
    ["a", "c"],
    ["c", "b"],
    ["bc", "cd"],
    ["cd", "bc"]
])

// calcEquation([
//     ["x1", "x2"],
//     ["x2", "x3"],
//     ["x3", "x4"],
//     ["x4", "x5"]
// ], [3.0, 4.0, 5.0, 6.0], [
//     ["x1", "x5"],
//     ["x5", "x2"],
//     ["x2", "x4"],
//     ["x2", "x2"],
//     ["x2", "x9"],
//     ["x9", "x9"]
// ])