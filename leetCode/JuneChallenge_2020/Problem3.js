/**
 * Link:- https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3349/
 * 
 * Example 1
 * Input: [[10,20],[30,200],[400,50],[30,20]]
   Output: 110
   Explanation: 
   The first person goes to city A for a cost of 10.
   The second person goes to city A for a cost of 30.
   The third person goes to city B for a cost of 50.
   The fourth person goes to city B for a cost of 20.

   The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
 */

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    var N = Math.floor(costs.length / 2);
    var ans = 0;
    var diffa = [],
        diffb = [];

    for (var k = 0; k < costs.length; k++) {
        console.log(costs[k][0], '....', costs[k][1])
        if (costs[k][0] < costs[k][1]) {
            ans += costs[k][0];
            diffb.push(costs[k][1] - costs[k][0])
        } else {
            ans += costs[k][1]
            diffa.push(costs[k][0] - costs[k][1])
        }
    }
    console.log(diffa, '>>>', diffb, '......', ans)
    if (diffa.length < diffb.length) {
        // diffb.sort()
        diffb = diffb.sort((a, b) => a - b);
        console.log('diffb', diffb)
        for (var j = 0; j < diffb.length - N; j++) {
            ans += diffb[j]
        }
    }

    if (diffa.length > diffb.length) {
        diffa = diffa.sort((a, b) => a - b);
        console.log('diffa', diffa.length, '>>>', N);
        for (var i = 0; i < diffa.length - N; i++) {
            ans += diffa[i]
        }
    }

    return ans
};
// console.log(twoCitySchedCost([
//     [10, 20],
//     [30, 200],
//     [400, 50],
//     [30, 20]
// ]))

console.log(twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
]));
// console.log(twoCitySchedCost([
//     [515, 563],
//     [451, 713],
//     [537, 709],
//     [343, 819],
//     [855, 779],
//     [457, 60],
//     [650, 359],
//     [631, 42]
// ]))