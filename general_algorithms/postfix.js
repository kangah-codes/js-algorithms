// evaluate postfix expression

function postfixEval(expression){
	let stack = [];

	for (let i=0;i<expression.length;i++){
		if (Number(expression[i]) != NaN){
			// means it is a digit
			stack.push(Number(expression[i]));
		}else{
			let first;
			let second;
			switch(expression[i]){
				case '+':
					first = stack.pop();
					second = stack.pop();
					stack.push(first+second);
					break;
				case '-':
					first = stack.pop();
					second = stack.pop();
					stack.push(second-first);
					break;
				case '*':
					first = stack.pop();
					second = stack.pop();
					stack.push(first*second);
					break;
				case '/':
					first = stack.pop();
					second = stack.pop();
					stack.push(second/first);
					break;
			}
		}
	}
	return stack[0];
}

console.log(postfixEval('2 3 +'))