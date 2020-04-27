// author Joshua Akangah

function bubbleSort(iterable){
	let length = iterable.length;

	for (let i=0;i<length;i++){
		let f = false;
		let swapped = f;

		for (let j=0;j<length;j++){
			if (iterable[j] > iterable[j+1]){
				let temp = iterable[j];
				iterable[j] = iterable[j+1];
				iterable[j+1] = temp;
				swapped = true;
			}
		}
		if (!swapped){
			break;
		}
	}

	return iterable;
}

console.log(bubbleSort([12,342,35,2345,34]));