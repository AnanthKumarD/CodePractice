var totalAlivePerson = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
//var totalAlivePerson = [1,2,3,4,5,6,7,8,9,10];
var deadPerson = [];
var innerCounter = 1;
while (totalAlivePerson.length > 1){
	for( i = 0; i < totalAlivePerson.length ; i++ ){
		if(innerCounter == 100){ // add based on how many index or counter the number to be removed
			//console.log(i,'innerCounterResetted to 0 again',totalAlivePerson);

			deadPerson.push(totalAlivePerson[i]);
			delete totalAlivePerson[i];

			totalAlivePerson = totalAlivePerson.filter(function(x){
		      return (x !== (undefined || null || ''));
		    });
			innerCounter = 0;
		}
		innerCounter++;
	}
}


console.log('Alive Person',totalAlivePerson);
console.log('Death Person',deadPerson);