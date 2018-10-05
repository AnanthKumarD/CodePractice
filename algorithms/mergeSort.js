var a = [ 2 , 8 , 15 , 18 ];
var b= [ 5 , 9 , 12 , 17 ];

//Merge Sort combining 2 array in ascending order or sorted order
var c = []
for(i=0;i<a.length;i++){
	for(j=0;j<b.length;j++){
		if(a[i]<b[j]){
			c.push(a[i]);
			i++;
		}else{
		  	c.push(b[j]);
		  	j++;
		}
	}
}
console.log(c)