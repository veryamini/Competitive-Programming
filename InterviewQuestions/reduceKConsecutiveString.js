function removeAll(s, n, k) {
	let stack = [];
	for (let i = 0; i < n; i++) {
		let currString = s.charAt(i);
		if (stack.length && stack[stack.length - 1].freq === k) {
			let char = stack[stack.length - 1].char;
			while (stack.length && stack[stack.length - 1].char === char) {
				stack.pop();
			}
		}
		if (stack.length && stack[stack.length - 1].char === currString) {
			let newTop = {
				freq : stack[stack.length - 1].freq + 1,
				char : stack[stack.length - 1].char,
			};
			stack.push(newTop);
		}
		else {
			let newTop = {
				freq : 1,
				char : currString,
			};
			stack.push(newTop);
		}
	}
	if (stack.length && stack[stack.length - 1].freq === k) {
		let char = stack[stack.length - 1].char;
		while (stack.length && stack[stack.length - 1].char === char) {
			stack.pop();
		}
	}

	let newStr = '';

	while (stack.length) {
		newStr += stack.pop().char;
	}

	return newStr.split('').reverse().join('');
}

let s = 'aabbbccca';
let k = 3;
console.log(removeAll(s, s.length, k));