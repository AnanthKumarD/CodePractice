/*
	55555
	4444
	333
	22
	1
*/
var a = '';
for( i = 5 ; i > 0 ; i-- ){
	for( j = 0 ; j < i ; j++){
		a = a + (i)
	}	
	console.log(a);
	a = '';
}
console.log('\n\n');

/*
	11111
	2222
	333
	44
	5
*/
var a = '';
for( i = 0 ; i < 5 ; i++ ){
	for( j = 5 ; j > i ; j--){
		a = a + (i+1)
	}	
	console.log(a);
	a = '';
}
console.log('\n\n');

/*
	12345
	4321
	123
	21
	1
*/

var a = '';
for( i = 5 ; i > 0 ; i-- ){
	for( j = 0 ; j < i ; j++ ){
		a = a + (j+1)
	}	
	a = i%2 == 0 ? (a.split('').reverse().join('')) : (a) ;
	
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	1234567
	12345
	123
	1
*/

var a = '';
for( i = 7 ; i > 0 ; i=i-2 ){
	for( j = 0 ; j < i ; j++ ){
		a = a + (j+1)
	}		
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	1
	01
	101
	0101
*/

var a = '';
for( i = 0 ; i < 4 ; i++ ){
	for( j = i ; j >= 0 ; j-- ){
		a = a+ ((j+1)%2 == 0 ? 0 : 1);
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	13579
	3579
	579
	79
	9
*/

var a = '';
for( i = 0 ; i <= 9 ; i++ ){
	if(i%2==1){
		for( j = i ; j <= 9 ; j++){
			if(j%2==1){
				a = a + (j)
			}
		}
		console.log(a);
		a = '';
	}
}
console.log('\n\n');


/*
	1
	2 4
	1 3 5
	2 4 6 8
	1 3 5 7 9
*/

var a = '';
for( i = 0 ; i < 5 ; i++ ){
	for( j = 0 ; j <= i ; j++ ){
		//a = a + (j+1 * 2)
		a = a + (i%2 == 0 ?  (j+1) : ((j+1)*2));

	}	
	console.log(a);
	a = '';
}
console.log('\n\n');

