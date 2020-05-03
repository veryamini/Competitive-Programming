var match = function (string, substring) {
	let output = [];
	let index = 0;
	while (index < (string.length-substring.length+1)) {
		index = string.indexOf(substring, index);
		if (index === -1) {
			break;
		}
		output.push(index);
		index += substring.length;
	}
	return output;
}

console.log(match('aaaaaa', 'aa'));
console.log(match('aabaaa', 'aab'));
console.log(match('aaaaaa', 'aaa'));
console.log(match('bbbabababa', 'bab'));
