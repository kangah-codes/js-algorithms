function quickSort(iterable, l, h){
	if (l < h){
		let p = partition(iterable, l, h);
		quickSort(iterable, l, p-1);
		quickSort(iterable, p+1, h);
	}
}

function partition(iterable, l, h){
	let pivot = iterable[h];
	let i = l;

	for (let j=l;j < h+1;j++){
		if (iterable[j] < pivot){
			let temp = iterable[j];
			iterable[j] = iterable[i];
			iterable[i] = temp;
			i ++;
		}
	}
	let temp = iterable[i];
	iterable[i] = iterable[h];
	iterable[h] = temp;
	return i
}

let a = [435,4323,322,5435,5,23,-5,34,0];

quickSort(a, 0, a.length-1);

console.log(a);