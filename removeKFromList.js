var l = [3, 1, 2, 3, 4, 5] , k = 3;
var expected = [1, 2, 4, 5]

// ListNode {
//   value: 3,
//   next: 
//    ListNode {
//      value: 1,
//      next: ListNode { value: 2, next: [Object], toJSON: [Function] },
//      toJSON: [Function] },
//   toJSON: [Function] } '>>>>' 3
function removeKFromList(l, k) {
	var c = []
	for(i=0;i<l.length;i++){
		if(l[i] != k){
			c.push(l[i])
		}
	}
	return c;
}
removeKFromList(l,k)


