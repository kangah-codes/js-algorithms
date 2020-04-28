function linearSearch(iterable, element){
	for (let i=0;i<iterable.length;i++){
		if (iterable[i] == element){
			return element
		}
	}
	return -1;
}