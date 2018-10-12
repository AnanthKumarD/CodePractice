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
var n = 0;
for(i = 0 ; i < 4 ; i++){
	for(j = 0 ; j <= i ; j++){
		a = a + 
		n++;
	}	
	console.log(a);
	a = '';
}
console.log('\n\n');