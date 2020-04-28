// merge sort in JS
// author Joshua Akangah

function merge(iterable, l, m, r){
	let n1 = m - l + 1;
	let n2 = r - m;

	// create temporary iterableays
	let L = Array(n1);
	let R = Array(n2);

	for (let i=0;i<n1;i++){
		L[i] = iterable[l + i];
	}
	for (let j=0;j<n2;j++){
		R[j] = iterable[m + 1 + j];
	}

	let i = 0;
	let j = 0;
	let k = l;

	while (i < n1 && j < n2){
		if (L[i] <= R[j]){
			iterable[k] = L[i];
			i ++;
		}else{
			iterable[k] = R[j];
			j ++;
		}
		k ++
	}

	while (i < n1){
		iterable[k] = L[i];
		i ++;
		k ++;
	}

	while (j < n2){
		iterable[k] = R[j];
		j ++;
		k ++;
	}
}

function mergeSort(iterable, l, r){
	if (l < r){
		let m = (l + (r-1))/2;

		mergeSort(iterable, l, m);
        mergeSort(iterable, m+1, r); 
        merge(iterable, l, m, r);
	}
}

let arr = [12,432,435342,42];
let n = arr.length;

mergeSort(arr, 0, n-1);
console.log(arr)