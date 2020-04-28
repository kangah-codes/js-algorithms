let steps = 0;

function hanoi(tiles, start=1, end=1){
	if (tiles){
		hanoi(tiles-1, start, 6-start-end);
		console.log(`Move disk ${tiles} from ${start} to ${end}`);
		hanoi(tiles-1, 6-start-end, end);
		steps ++;
	}
}

hanoi(5);
console.log(`Completed in ${steps} moves`)