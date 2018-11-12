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
for(i = 5 ; i > 0 ; i-- ){
	for(j = 0 ; j < i - 1 ; j++){
		a = a + ' ';
	}
	

	for(j = i ; j <= 5 ; j++, n++){
		a = a + n + ' '
	}

	console.log(a);
	a = '';
	n = 1;
}
console.log('\n\n');




/*

	 	1
	   123
	  12345
	 1234567
	123456789
	 1234567
	  12345
	   123
	    1
*/


var a = '';
var n = 1;
var b = 1;
var c = 1;
for(i = 1 ; i <= 9 ; i++ ){
	for(j = 4 ; j >= c ; j--){
		a = a + ' ';
	}

	for(j = 1 ; j <= n ; j++,b++){
		a = a + b
	}
	
	if(i > 4){
		n = n - 2;
		c--;
	} else{
		n = n + 2;
		c++;
	} 

	console.log(a);
	a = '';
	b = 1;
}
console.log('\n\n');

/*
	1
	2 4
	3 6 9
	4 8 12 16
	5 10 15 20 25
	6 12 18 24 30 36
	7 14 21 28 35 42 49
	8 16 24 32 40 48 56 64
	9 18 27 36 45 54 63 72 81
	10 20 30 40 50 60 70 80 90 100
*/
var a = ''
for(i = 1 ; i <= 10 ; i++){
	for(j = 1 ; j <= i ;j++){
		a = a + (i*j) + ' '; 
	}
	console.log(a)
	a = ''
}
console.log('\n\n');


/*
	1 
	1 2 
	3 5 8 
	13 21 34 55 
	89 144 233 377 610
*/

var a = ''
var b = 1; 
for(i = 1 ; i <= 5 ; i++){
	for(j = 1 ; j <= i ;j++){
		if( i == 1 || ( i == 2 && j == 1 )){
			first = b;
			second = b;
			d = b
		}else{
			d = first + second;
			first = second;
			second = d;
		}
		a = a + d + ' ';
	}
	console.log(a)
	a = ''
}
console.log('\n\n');

/*

	11111
	10001
	10001
	10001
	11111
*/
var a = '';

for(i = 0 ; i < 5 ; i++ ){
	for(j = 0 ; j < 5 ; j++){
		k = ( i % 4 == 0 ? 1 :  (j % 4 == 0 ? 1 : 0 ) )
		a = a + k ;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
	*000*000*
	0*00*00*0
	00*0*0*00
	000***000
*/
var a = '';
for( i = 0 ; i < 4 ; i++ ){
	for( j = 0 ; j < 4 ; j++ ){
		a = a + (i == j ? '*' : 0)
	}
	a = a + '*';
	for( j = 3 ; j >= 0 ; j-- ){
		a = a + (i == j ? '*' : 0)
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	5 5 5 5 5 5 5 5 5 
	5 4 4 4 4 4 4 4 5 
	5 4 3 3 3 3 3 4 5 
	5 4 3 2 2 2 3 4 5 
	5 4 3 2 1 2 3 4 5 
	5 4 3 2 2 2 3 4 5 
	5 4 3 3 3 3 3 4 5 
	5 4 4 4 4 4 4 4 5 
	5 5 5 5 5 5 5 5 5
*/
var d = [];
for(i=0;i<9;i++){
	d[i] = []
	for(j=0;j<9;j++){
		d[i][j] = 0
	}
}
var low = 0, high = 8 , n = 5;
for(i = 0 ; i < 5 ; i++ , low++, high--){
	for(j = low ; j < high ; j++){
		d[low][j] = n;
	}
	for(j = low ; j <= high ; j++){
		d[j][high] = n;
	}

	for(j = high ; j > low ; j--){
		d[high][j-1] = n;
	}
	for(j = high ; j > low ; j--){
		d[j-1][low] = n;
	}
	n--;
}
console.log(d,)
console.log('\n\n');