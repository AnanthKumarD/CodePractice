a = [10,16,8,12,15,6,3,9,5];
def partition(a,l,h):
    pivot = a[l];
    i = l+1;
    j = h;
      
    while(l < h):
        while True:  
            i = i + 1  
            if(a[i] <= pivot):  
                break
        while True:  
            j = j + 1  
            if(a[j] >= pivot):  
                break

def quickSort(l,h):
	if(l < h):
		m = partition(a,l,h);
		quickSort(l,m);
		quickSort(m+1, h);

quickSort(0, len(a));