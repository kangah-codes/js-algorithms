function powerDigit(exp){
	let ans = 2 ** exp;
	let sum = 0;
	while (ans > 0){
		sum += ans%10;
		ans = parseInt(ans/10);
	}
	return parseInt(sum);
}

console.log(powerDigit(10));