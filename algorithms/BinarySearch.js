//Algo for BinarySearch

var a = [ 3,6,8,12,14,17 ,25,29,31,36,42,47,53,55,62];
var low = 0 , high = a.length;
var keyToFound = 30;

for(i=0;i<high;i++){
  console.log('Low>>>',low,'---- HIgh :-',high)

	if(low > high){
		console.log('Element Not Found');
		break
	}
	
  mid = Math.floor((low+high)/2);
  console.log(mid,'MID values')
  if( a[mid] == keyToFound ){
    console.log('Element Found:-',a[mid])
    break;
  }
  else if( a[mid] < keyToFound ){
    console.log('Lesser:-',a[mid])
    low = mid + 1;
  }else{
    high = mid - 1;
    console.log(high ,'Greater:-',a[mid])
  }
}
