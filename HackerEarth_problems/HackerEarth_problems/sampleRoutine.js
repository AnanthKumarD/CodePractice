var time = new Date();
var timezone = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).split(' ')

if (timezone[1] == "AM") {
    console.log('------------------Read------------------');
    console.log('HTML');
    console.log('CSS');
    console.log('Javascript');
    console.log('Angular.js');
    console.log('Node.js');
    console.log('Database (Mysql/MongoDB)');
    console.log('----------------------------------------');
} else {
    console.log('------Read------');
    console.log("Learning the Data Structure and Algorithms are very important, when you want to get in Big Companies Like Google, Amazon, Microsoft etc. for learning data structures, you first need to learn All basics- \n  • Array, Stack, Queue, Linked List, Binary search, Depth-first search, Breath-First search. \n  • Time / Space Complexity, Infix, Prefix, Post - fix,  \n  • Trees and Graph, Sorting, Searching, Hashing.After learning all the basics, you should Proceed to the ADVANCED Topics - \n  • Algorithm Analysis: Techniques eg.Substitution method, Master Method, etc.. \n  • Greedy Method: General approach, Activity Selection, Knapsack problem, Minimum spanning problem, Huffman code, etc. \n  • Dynamic Programming: \n\t General Approach, \n\t knapsack problem, \n\t Matrix chain multiplication, Binary search, Travelling salesman problem, All pair shortest path, etc. \n . • BACKTRACKING Method: \n\t N - queen problem, \n\tthe sum of subsets, \n\t Generation of all cliques, \n\tknapsack problem, \n\t Generation of all cliques, \n\t Graph colouring etc. \n  •Lower Bound Theory: \n\t Reduction method, \n\t Amortized analysis, \n\t N - P completeness, \n\t Decision Tree,\n\t Reduction Method, etc \n\t There are more Topics which I’ m not including, I found these topics very easy and you can learn these quickly except Dynamic Programming.");
    console.log('----------------');
}