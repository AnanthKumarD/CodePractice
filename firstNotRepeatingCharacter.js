function firstNotRepeatingCharacter(a) {
    var nonRepeatingCharacter;
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
        }else{
        	b[a[i]] = [i]
        }
    }
    for (var key in b) {
	  	if(b[key].length == 1){
	  		nonRepeatingCharacter = key
	  	 	break;
	  	}
	}	

    if(nonRepeatingCharacter) {
    	return nonRepeatingCharacter;
    }else{ 
    	return '_';
    } 
}

var a = "abacabad";
firstNotRepeatingCharacter(a);