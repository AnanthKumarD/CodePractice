var a = {};

function isCryptSolution(crypt, solution) {
  for(i=0;i<solution.length;i++){
    if(a[solution[i][0]] == undefined){
          a[solution[i][0]] = parseInt(solution[i][1])
    }
  }
  for(i=0;i<crypt.length;i++){
  	var convertedData = '';
    for(j=0;j<crypt[i].length;j++){
    	convertedData += a[crypt[i][j]];
    }
    crypt[i] = convertedData;
  }
   console.log(crypt[0].length,'>>>>',crypt[1].length,'<><><>',crypt[0].charAt(0),'<<<<<<<<<<',crypt[1].charAt(0))
  if(crypt[0].length >1 && crypt[1].length > 1 && crypt[0].charAt(0) == 0 || crypt[1].charAt(0) == 0){
  	return false;
  }else{
    var summedData = parseInt(crypt[0]) + parseInt(crypt[1]);

  	if(parseInt(summedData) == parseInt(crypt[2])){
	  	return true;
	  }else{
	  	return false;
	  }
  } 
}

crypt = ["AA", 
 "BB", 
 "AA"]
solution =  [["A","1"], 
 ["B","0"]]


var b = isCryptSolution(crypt , solution); 
console.log(b,'finalresult')
