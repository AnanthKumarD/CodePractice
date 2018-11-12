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
var n = 1;
for(i = 0 ; i < 5 ; i++ ){
	for(j = i ; j >= 0 ; j--,n++){
		a = a + n + ' ';
	}
	a = ((i%2 == 1) ? a.split(" ").reverse().join(" ") : a)
	
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	1
	232
	34543
	4567654
	567898765 
*/

var a = '';
for(i = 1 ; i <= 5 ; i++ ){
	for(j = 0 ; j < i ; j++){
		a = a + (i + j);
	}
	for(j = 1 ; j < i ; j++){
		a = a + ((i-j) + (i-1));
	}
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
	1	  1
	 2   2 
	  3 3  
	   4   
	  3 3  
	 2   2 
	1     1
*/


var a = '';
var b = 1 , c = 7;
var flag = 0;
for(i = b ; i <= c ; i++){
	
	for(j = 1 ; j <= 7 ; j++){
		a += (( b == j || c == j ) ? b : ' ');
	}
	
	if(flag == 1){
		c++;
		b--;
		if(c >= 9 || b <= -1) break;
	}else{
		b++;
		c--;
	}

	if(b > c && flag == 0){
		d = b;
		b = c;
		c = d;
		flag = 1;
	} 
	console.log(a)
	a = '';
}
console.log('\n\n');


/*
	1     
	2 6    
	3 7 10   
	4 8 11 13  
	5 9 12 14 15 
*/

var a = ''
for( i = 1 ; i <= 5 ; i++ ){
	var k = 4; 
	var z = i;
	for( j = 0 ; j < i ; j++ ){		
		if(j >= 1){
			z = z + k
			k--;
		}
		a = a + ( z ) + ' ';
	}

	k = 1;
	console.log(a);
	a = '';
}

console.log('\n\n');



/*
			1       
	      1 2 1     
	    1 2 3 2 1   
	  1 2 3 4 3 2 1 
	1 2 3 4 5 4 3 2 1
*/


var a = '';
for(i = 0 ; i < 5 ; i++ ){
	for(j = 0 ; j < 4 - i ; j++){
		a = a + ' ' ;
	}
	for(j = 0 ; j <= i ; j++){
		a = a + (j + 1);
	}
	for(j = i ; j > 0 ; j--){
		a = a + (j);
	}
	
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	  1
    2   2
  3       3
4           4
  3       3
    2   2
      1
*/

// outer 3 2 1 0 1 2 3
// internally 1 3 5 3 1


var a = '';
var outerSpace = 3 , innerSpace = 0;
for(i = 0 ; i < 7 ; i++){
	
	console.log(a);
	a = '';
}
console.log('\n\n');



/*
1  2  3  4  5  
16          6  
15          7  
14          8  
13 12 11 10 9 
*/
var a = []
for( i = 0 ; i < 5 ; i++){
	a[i] = []
	for( j = 0 ; j < 5 ; j++){
		a[i][j] = 0;
	}	
}
var low = 0,high = 5 , n = 1; 
for( i = 0 ; i < 1 ; i++ ){
	for( j = low ; j < high ; j++ ,n++){
		a[i][j] = n
	}
	for( k = low + 1; k < high ; k++ ,n++){
		a[k][high-1] = n
	}
	for( l = high - 1 ; l > low ; l-- ,n++){
		a[high-1][l-1] = n
	}
	for( l = high - 1 ; l > low + 1; l-- ,n++){
		a[l-1][low] = n
	}

}
console.log(a)


/*
	N=39714

	3 9 1 7 4
	9 1 7 4
	1 7 4
	7 4
	4
*/

var n = "39714";
var a = '';
k = 0;
for( i = n.length ; i > 0 ; i--){
	for( j = k ; j < n.length ; j++){
		a = a + n[j]
	}
	k++;
	console.log(a);
	a = '';
}