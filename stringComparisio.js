// SKYLINE
// XYLENE

//Problem setup code{
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//    solution(input_stdin);    
// });
// }
console.log(solution());
var data;

function solution() {
    // var i=0;
    // var inputs = inputData.split("\n");
    // [n1, n2] = inputs[i++].split(" ").map(function(x){return parseInt(x)});
    // var str1 = inputs[i++];
    // var str2 = inputs[i++];
    var str1 = "XYLENE";
    var str2 = "SKYLINE";

    // var str1 = "ABCDUUULKABCDEFGH";
    // var str2 = "LKZCCABCDLLEFG";

    var position = 0;

    data = calculateSolution(str1, str2);
    var a = {};

    for(i=0;i<str1.length;i++){
        for(j=0;j<str2.length;j++){
            if(data[i][j] == 1){
                checkforMatchedString(position++,i,j,str1,str2,a)
            }
        }
    }
    var max = 0;
    var maxdata = []
    Object.keys(a).forEach(function(key) {
        if(max <= a[key].length){
            max = a[key];
            maxdata.push(a[key])
        }
    });

    return maxdata;
}

function calculateSolution(str1, str2){
    // Write your code here
    // return the answer
    var _emptyArray = []
    for(i=0;i<str1.length;i++){
        _emptyArray[i] = [];
        for(j=0;j<str2.length;j++){
            _emptyArray[i][j] = (str1[i] == str2[j]) ? 1 : 0
        }
    }
    return _emptyArray;
}

function checkforMatchedString(pos,i,j,str1,str2,a){
    if(i < str1.length && j < str2.length){
        if(data[i][j] == 1){
            if(a[pos]){
                a[pos] += str1[i];
            }else{
                a[pos] = str1[i];
            }
            checkforMatchedString(pos,i+1,j+1,str1,str2,a);
        }
    }
    
}

