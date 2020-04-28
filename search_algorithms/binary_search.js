function binarySearch(iterable, l, r, x){
	/*
	iterable -> array to search from
	l -> lowest index to start from, usually 0
	r -> last index
	x -> element to search for
	*/

	if (r >= l){
		let mid = parseInt(l + (r - l) / 2);

		if (iterable[mid] == x){
			return mid
		}else if (iterable[mid] > x){
			return binarySearch(iterable, l, mid-1, x);
		}else{
			return binarySearch(iterable, mid+1, r, x);
		}
	}else{
		// element does not exist
		return -1;
	}
}

console.log(binarySearch([234,5,2,54,35,23,4], 0, 4, 4));