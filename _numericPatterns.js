// 0 
// 909 
// 89098 
// 7890987 
// 678909876 
// 56789098765 
// 4567890987654 
// 345678909876543 
// 23456789098765432 
// 1234567890987654321 

// var c = ''
// for( i = 10 ; i > 0 ; i-- ){
// 	for( k = i ; k <=9 ; k++ ){
// 		c = c + k;
// 	}
// 	for( j = 10 ; j >= i ; j-- ){
// 		j == 10 ? (c = c + 0 ) : (c = c + j);
// 	}
// 	console.log(c);
// 	c = '';
// }



// 1
// 2*2
// 3*3*3
// 4*4*4*4
// 4*4*4*4
// 3*3*3
// 2*2
// 1
var counter=1;
var a = ''
for(i=0;i<8;i++){
	for(j=0;j<i+counter;j++){
		j%2 == 0 ? (a=a+counter) : a=a+'*';
	}
	counter++;
	console.log(a)
	a=''
}



// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321