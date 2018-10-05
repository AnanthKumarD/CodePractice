// example :- 
var a = [2, 1, 3, 5, 3, 2];
function firstDuplicate(a) {
    var b = {};
    var data;
    var highestIndex=0;
    for(i=0;i<a.length;i++){
        if(b[a[i]] != undefined){
            
            data = a[i];
            b[a[i]].push(i);
            if(i > highestIndex){
               highestIndex = i
            }
            break;
        }else{
            b[a[i]] = [i]
        }
    }

    if(highestIndex == 0) {
    	return -1
    }else{ 
    	return data
    } 
}

firstDuplicate(a)