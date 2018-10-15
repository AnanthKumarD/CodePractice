/*
	1
	232
	45654
	78910987
*/

var a = '';
n = 1;
for(i = 0 ; i < 4 ; i++){
	for(j = i+1 ; j >= 1 ; j--, n++){
		a = a + n;
	}
	for(j = 1  ; j < i + 1 ; j++){
		a = a + (n - (j+1));
	}
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
	1
	2*2
	3*3*3
	4*4*4*4
	4*4*4*4
	3*3*3
	2*2
	1
*/

var a = '';
var flag = 0 , k = 5;
for(i = 1 ; i <= 8 ; i++){
	if(i > 4){
		flag = 1;
		k--;
	} 	
	l = flag == 1 ? k : i;

	for(j = 0 ; j < l ; j++){
		a = a + (l+'*');
	}
	console.log(a.match(/(.*).$/)[1]);
	a = '';
}
console.log('\n\n');



/*
	11
	12 13
	13 14 15
	14 15 16 17
*/

var a = '';
var n = 0;
for(i = 0 ; i < 4 ; i++){
	for(j = 0 ; j <= i ; j++){
		a = a + ( 1 + "" + ((i + j )+1) + ' ' );	
		n++;
	}	
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
				 1
	           2 3
	         4 5 6
	      7 8 9 10
	11 12 13 14 15
*/

var a = '';
var n = 1
for(i = 1 ; i <= 5 ; i++){
	for(j = 5 ; j > i ; j--){
		a = a + ' '
	}
	for(j = i ; j >= 1 ; j--){
		a = a + n;
		n++;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
		5
	   54
	  543
	 5432
	54321
*/

var a = '';
for(i = 1 ; i <= 5 ; i++){
	for(j = 5 ; j > i ; j--){
		a = a + ' '
	}
	var n = 5;
	for(j = i ; j >= 1 ; j--){
		a = a + n;
		n--;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
	1
	212
	32123
	4321234
*/

var a = '';
n = 1;
for(i = 0 ; i < 4 ; i++){
	for(j = i ; j >= 0 ; j--){
		a = a + (j+1);
	}
	for(j = i ; j >= 1 ; j--){
		a = a + (j+1);
	}
	console.log(a);
	a = '';
}
console.log('\n\n');

/*
	1
	23
	345
	4567
	56789
*/

var a = '';

for(i = 0 ; i < 5 ; i++){
	for(j = 0 ; j <= i ; j++){
		a = a + (i+(j+1));
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	1  2  3  4  5
	6  7  8  9
	10 11 12
	13 14
	15
*/

var a = '';
var n = 1;
for(i = 5 ; i > 0 ; i--){
	for(j = 0 ; j < i ; j++, n++){
		a = a + n;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	1234
	2341
	3421
	4321
*/

var a = '';
for(i = 0 ; i < 4 ; i++){
	for(j = i ; j < 4 ; j++){
		a = a + (j+1);
	}
	for(j = i ; j > 0 ; j--){
		a = a + (j);
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	11111
	0000
	111
	00
	1
*/

var a = '';
for(i = 0 ; i < 5 ; i++){
	for(j = 5 ; j > i ; j--){
		k = (i % 2 == 0 ? 1 : 0 );
		a = a + k;
	}
	
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
					  1  
	              4   9  16 
	         25  36  49  64  81 
	    100 121 144 169 196 225 256 
	289 324 361 400 441 484 529 576 625
*/
var n = 1;
var a = '';
var b = 1;

for(i = 5 ; i > 0 ; i-- ){
	for(j = 0 ; j < i - 1 ; j++){
		a = a + ' ';
	}

	for(j = 0 ; j < n ; j++ , b++){
		a = a + ( b * b ) + ' '
	}
	n = n + 2;
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
	11111
	1   1
	1   1
	1   1
	11111 
*/

var a = '';

for(i = 0 ; i < 5 ; i++ ){
	for(j = 0 ; j < 5 ; j++){
		k = ( i % 4 == 0 ? 1 :  (j % 4 == 0 ? 1 : ' ' ) )
		a = a + k ;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
		1 
	   1 2 
	  1 2 3 
	 1 2 3 4 
	1 2 3 4 5
*/

var a = '';
var n = 1;
for(i = 0 ; i < 5 ; i++){
	for(j = 0 ; j < i - 1 ; j++){
		a = a + ' ';
	}
	for(j = 0 ; j < i ; j++){
		a = a + ( j + 1 ) + ' '
	}
	console.log(a);
	a = '';
	
	console.log(a);
	a = '';
}
console.log('\n\n');
