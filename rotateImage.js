var d = []
function rotateImage(a) {
	var b = a
	for(j = 0;j<a.length;j++){
		var c=0;
		d[j] = []
		for(i = a.length;i>0;i--){
			d[j][c] = a[i-1][j];
			c++;
		}
		c=0;
	}
	return d;
}

var a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]];
rotateImage(a)