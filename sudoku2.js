// var a = 
// [["7",".",".",".","4",".",".",".","."], 
//  [".",".",".","8","6","5",".",".","."], 
//  [".","1",".","2",".",".",".",".","."], 
//  [".",".",".",".",".","9",".",".","."], 
//  [".",".",".",".","5",".","5",".","."], 
//  [".",".",".",".",".",".",".",".","."], 
//  [".",".",".",".",".",".","2",".","."], 
//  [".",".",".",".",".",".",".",".","."], 
//  [".",".",".",".",".",".",".",".","."]];

var a = 
[[".",".",".","1","4",".",".","2","."], 
 [".",".","6",".",".",".",".",".","."], 
 [".","3",".",".",".",".",".",".","."], 
 [".",".","1",".",".",".",".",".","."], 
 [".","6","7",".",".",".",".",".","9"], 
 [".",".",".",".",".",".","8","1","."], 
 [".",".",".",".",".",".",".",".","6"], 
 [".",".",".",".",".","7",".",".","."], 
 [".",".",".","5",".",".",".","7","."]]


// var a = 
// [[".","4",".",".",".",".",".",".","."], 
//  [".",".","4",".",".",".",".",".","."], 
//  [".",".",".","1",".",".","7",".","."], 
//  [".",".",".",".",".",".",".",".","."], 
//  [".",".",".","3",".",".",".","6","."], 
//  [".",".",".",".",".","6",".","9","."], 
//  [".",".",".",".","1",".",".",".","."], 
//  [".",".",".",".",".",".","2",".","."], 
//  [".",".",".","8",".",".",".",".","."]]

function gridSearch(a){
	var gridReturnValue = true;
	var n = 3;
	var totalblocks = 9 //3*3 subblocks
	var currentBlock = 0;
	var firstVal = 0 ,secondVal = 3 ;
	var rowVal = 0, columnVal = 3;
	counter = 0;

	var b = []
	while(currentBlock<totalblocks){


		for(i=rowVal;i<columnVal;i++){
			b[i] = []
			for(j = firstVal; j < secondVal ; j++){
				b[i][j] = a[i][j]
			}	
			b[i] = b[i].filter(function(x){
		      return (x !== (undefined || null || ''));
		    });
	 	}


	 	b = b.filter(function(x){
	      return (x !== (undefined || null || ''));
	    });
	 	firstVal = secondVal;
	 	secondVal = secondVal+3;
	 	
	 	var getGridValues = findDuplicates([].concat.apply([], b));

		if(getGridValues.length>0){
			gridReturnValue = false;
			break;
		}
		
		if(firstVal == 9 && secondVal == 12){
			rowVal =  columnVal;
			columnVal = columnVal + 3;

			firstVal = 0;
	 		secondVal = 0 + 3;
		}

		currentBlock++;
		counter++;
		b = []; 	
	}
	return gridReturnValue;
}




function sudoku2(a) {
    var rowflagData = true,columnFlagData = true;
	var b = []
	for(j=0;j<a.length;j++){
		var c=0;
		b[j] = [];
		for(i = 0;i< a.length;i++){ 
			b[j][c] = a[c][j]
			if(a[c][j] != '.'){
				//this to check elements in rows
				var d = findDuplicates(a[c]);
				if(d.length) {
					rowflagData = false;
					break
				}
			}
			c++;
		}
		c=0;
	}


	for(j=0;j<a.length;j++){
		var c=0;
		for(i = 0;i< a.length;i++){ 
			if(a[c][j] != '.'){
				//this to check elements in column
				var d = findDuplicates(b[j]);
				if(d.length) {
					columnFlagData = false;
					break
				}
			}
			c++;
		}
		c=0;
	}

	var gridValue = gridSearch(a);
	if(rowflagData == true && columnFlagData == true && gridValue == true){
		return true;
	}else{
		return false;
	}
}


function findDuplicates(data) {
  let result = [];
  data.forEach(function(element, index) {
    if (data.indexOf(element, index + 1) > -1) {      
      if (result.indexOf(element) === -1 && element != '.') {
        result.push(element);
      }
    }
  });
  return result;
}

var finalResult = sudoku2(a)
console.log(finalResult);
