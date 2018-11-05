var a = {};

function isCryptSolution(crypt, solution) {
    var newSolutionArray = {};
    for(i=0;i<solution.length;i++){
        newSolutionArray[solution[i][0]] = parseInt(solution[i][1])
    }
    var d = []
    crypt.forEach( function(e1, i1) {
        dValue = '';
        for(i=0;i<e1.length;i++){
            dValue = dValue + newSolutionArray[e1[i]];
        }
        d.push(dValue)
    });
    
    if(d[0].length < 2 && d[1].length < 2 && d[2].length < 2){
        return ((parseInt(d[0]) + parseInt(d[1])) == parseInt(d[2]) ? true : false)
    }
    
    if(d[0].indexOf(0) !=0 && d[1].indexOf(0)!=0 && d[2].indexOf(0)!=0){
        return ((parseInt(d[0]) + parseInt(d[1])) == parseInt(d[2]) ? true : false)
    }else{
        return false;
    }
}

crypt =  ["A", 
 "A", 
 "A"]
solution = [["A","0"]]


var b = isCryptSolution(crypt , solution); 
console.log(b,'finalresult')
