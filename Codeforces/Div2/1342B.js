// Q: https://codeforces.com/contest/1342/problem/B

const readline = require('readline');

let input = [];

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('line', lineInput => {
	input.push(lineInput);
});

rl.on('close', () => {
	const test = parseInt(input[0]);
	for (let i=0; i < test; i++) {
		let t = input[i+1].split('');
		console.log(solution(t));
	}
});

function solution(t) {
	for (let i = 1; i < t.length; i++) {
		if (t[i] !== t[i-1]) {
			return constructString(t.length-1)
		}
	}
	return t.join('');
}
function constructString(l) {
	let str = '01'
	for (let j = 0; j < l; j++) {
		str += '01';
	}
	return str;
}