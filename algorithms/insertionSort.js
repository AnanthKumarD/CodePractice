// insertionSort.js
//arrange this from ascending to descending order

var arr = [ 14 , 33 , 27 , 10 , 35 , 19 , 42 , 44 ];

for(i = 0 ; i < arr.length ; i++){
	if( arr[i] > arr[i+1] ){
		swapping = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = swapping;
	}

	for(j = 0 ; j < i ; j++){
		console.log(arr[j] ,'<<<<<',arr[i],'======',arr[j] < arr[i])
		if(arr[j] < arr[i]){
			console.log('Already in sorted order',arr[j]);
		}else{
			console.log('Swap', arr[j] ,' with ', arr[i])
			swapping = arr[j];
			arr[j] = arr[i];
			arr[i] = swapping;
		}
	}

	console.log(i,'\n---------------------------',arr[i])
}

console.log(arr);