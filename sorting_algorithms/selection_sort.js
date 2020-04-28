function selectionSort(iterable){
	let n = iterable.length;

	for (let i=0;i<n;i++){
		let min_index = i;
		for (let j=i+1;j<n;j++){
			if (iterable[j] < iterable[min_index]){
				min_index = j;
			}
		}
		let temp = iterable[min_index];
		iterable[min_index] = iterable[i];
		iterable[i] = temp;
	}

	return iterable;
}

console.log(selectionSort([234,4325,5432,35,56,3,0,2]))