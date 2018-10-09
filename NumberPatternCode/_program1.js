/*
	12345
	1234
	123
	12
	1
*/


var a = ''
for(i = 5 ; i > 0 ; i-- ){
	for(j = 0 ; j < i ; j++ ){
		a = a + (j+1);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');
/*
	12345
	2345
	345
	45
	5
*/

var a = ''
for(i = 0 ; i < 5 ; i++ ){
	for(j = i ; j < 5 ; j++ ){
		a = a + (j+1);
	}
	console.log(a)
	a ='';
}
console.log('\n\n');


/*
	54321
	4321
	321
	21
	1
*/

var a = ''
for(i = 5 ; i > 0 ; i-- ){
	for(j = i ; j > 0 ; j-- ){
		a = a + (j);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');

/*
	54321
	5432
	543
	54
	5
*/

var a = ''
for(i = 0 ; i <5 ; i++ ){
	for(j = 5 ; j > i ; j-- ){
		a = a + (j);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');


/*
	1
	12
	123
	1234
	12345
*/

var a = ''
for(i = 0 ; i < 5 ; i++ ){
	for(j = 0 ; j <= i ; j++ ){
		a = a + (j+1);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');

/*
	5
	45
	345
	2345
	12345
*/

var a = ''
for(i = 5 ; i > 0 ; i-- ){
	for(j = i ; j <= 5 ; j++ ){
		a = a + (j);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');


/*
	1
	21
	321
	4321
	54321
*/

var a = ''
for(i = 0 ; i < 5 ; i++ ){
	for(j = i ; j >=0 ; j-- ){
		a = a + (j+1);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');


/*
	5
	54
	543
	5432
	54321
*/

var a = ''
for(i = 5 ; i > 0 ; i-- ){
	for(j = 5 ; j >=i ; j-- ){
		a = a + (j);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');


/*
	1
	22
	333
	4444
	55555
*/

var a = ''
for(i = 0 ; i <= 5 ; i++ ){
	for(j = 0 ; j < i ; j++ ){
		a = a + (i);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');


/*
	5
	44
	333
	2222
	11111
*/

var a = ''
for(i = 5 ; i >0 ; i-- ){
	for(j = 5 ; j >=i ; j-- ){
		a = a + (i);
	}
	console.log(a)
	a ='';
}

console.log('\n\n');