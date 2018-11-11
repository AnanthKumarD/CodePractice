/*
	1 
	2 6 
	3 7 10 
	4 8 11 13 
	5 9 12 14 15
*/

for(i = 1 ; i <=5 ; i++ ){
	k = i;
	for(j = 1 ; j <=i ; j++ ){
		console.log(k);
		k = k + 5-j;
	}
	console.log('\n');
}
console.log('\n\n');


/*
	1
	123
	12345
	1234567
*/
var a = '';
for(i = 1 ; i <=7 ; i = i+2 ){
	for(j = 1 ; j <=i ; j++ ){
		a = a + j;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
	12344321
	123**321
	12****21
	1******1
*/

var a = '';
var b = 0;
for(i = 4 ; i >=1 ; i-- ){
	for(j = 1 ; j <=i ; j++ ){
		a = a + j;
	}
	for(j = 0 ; j < b ; j++ ){
		a = a + '*';
	}
	b = b + 2;
	for(j = i ; j >= 1 ; j-- ){
		a = a + j;
	}
	console.log(a);
	a = '';
}
console.log('\n\n');




/*
		1
	  2 3 4
	5 6 7 8 9
*/
var a = '';
var n = 1;
var  k = 1;
for(i = 3 ; i >=1 ; i-- ){
	for(j = 0 ; j < (i-1) ; j++){
		a = a + ' ';
	}

	for(j = 0 ; j < k  ; j++,n++){
		a = a + n;
	}
	k = k + 2;
	
	console.log(a);
	a = '';
}
console.log('\n\n');





/*
	1   2   3   4   5   6   7   8   9   10
	36  37  38  39  40  41  42  43  44  11
	35  64  65  66  67  68  69  70  45  12
	34  63  84  85  86  87  88  71  46  13
	33  62  83  96  97  98  89  72  47  14
	32  61  82  95  100 99  90  73  48  15
	31  60  81  94  93  92  91  74  49  16
	30  59  80  79  78  77  76  75  50  17
	29  58  57  56  55  54  53  52  51  18
	28  27  26  25  24  23  22  21  20  19
*/

var arr = []
for(i=0;i<=9;i++){
	arr[i] = []
	for(j=0;j<=9;j++){
		arr[i][j] = i+''+j
	}	
}

var low = 0, high = 9 , n = 1;
for( i = 0 ; i <= 5 ; i++ , low++ , high--){
	for( j = low ; j < high ; j++ ,n++ ){
		arr[i][j] = n; 
	}

	for( k = low ; k <= high ; k++ ,n++){
		arr[k][high] = n;
	}
	
	for( k = low + 1  ; k <= high ; k++ ,n++){
		arr[high][high-k+i] = n;
	}

	for( k = high - 1 ; k > low ; k-- ,n++){
		arr[k][low] = n;
	}
}
console.log(arr);


console.log('\n\n');
/*

	5432*
	543*1
	54*21
	5*321
	*4321

*/

var a = '';
var k = 1;
for(i = 0 ; i < 5 ; i++){
	for(j = 5 ; j > 0 ; j--){
		if(j != k) {
			a = a + (j);
		} else{
			a = a + '*';
		}
	}
	k++;
	console.log(a);
	a = '';
}
console.log('\n\n');

/*
	1        1
	12      21
	123    321
	1234  4321
	1234554321
*/

var a = '';
k = 8;
for(i = 1 ; i <= 5 ; i++){
	for(j = 1 ; j <= i ; j++){
		a = a + j
	}
	for(j = k ; j > 0 ; j--){
		a = a + ' '
	}
	for(j = i ; j >= 1 ; j--){
		a = a + j
	}
	k = k - 2;
	console.log(a);
	a = '';
}
console.log('\n\n');


/*
		1
	   21
	  321
	 4321
	54321 
*/

var a = '';
for(i = 1 ; i <= 5 ; i++){
	for(j = 5 ; j > i ; j--){
		a = a + ' '
	}
	for(j = i ; j >= 1 ; j--){
		a = a + j
	}
	console.log(a);
	a = '';
}
console.log('\n\n');



/*

	11111
	2222
	333
	22
	1

*/

var a = '';
var flag = 0;
var n ;
k = 0;
for(i = 0 ; i < 5 ; i++){
	if(i > 2) {
		flag = 1;
		k--;
	}else{
		k++;
	}
	for(j = i ; j < 5 ; j++){
		a = a + (flag == 1 ? (k) : (k));
	}
	console.log(a);
	a = '';
}
console.log('\n\n')




/*
	1
	121
	12321
	1234321
*/
var a = '';
var k = 1;
var l = 1;
for(i = 1 ; i <= 4 ; i++){
	for(j = 1 ; j <= k ; j++){
		if(j < i ){
			a = a + (l++)
		}else{
			a = a + (l--)
		}
	}
	console.log(a);
	k = k + 2;
	a = '';
	l=1;
}
console.log('\n\n');