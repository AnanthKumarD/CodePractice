/*
	1 2 3 4 5 
	2 1 2 3 4 
	3 2 1 2 3 
	4 3 2 1 2 
	5 4 3 2 1 
*/
var a = '';

for(i = 1 ; i <= 5 ; i++ ){
	for(j = i ; j > 0 ; j--){
		a = a + j + ' ';
	}
	for(j = 1 ; j <= 5 - i ; j++){
		a = a + (j + 1) + ' ' ;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	1
	3 2
	4 5 6
	10 9 8 7
	11 12 13 14 15
*/

var a = '';

for(i = 1 ; i <= 5 ; i++ ){
	for(j = i ; j > 0 ; j--){
		a = a + j + ' ';
	}
	console.log(a);
	a = '';
}
console.log('\n\n');
