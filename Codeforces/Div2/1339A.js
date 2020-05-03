// Q: https://codeforces.com/contest/1339/problem/A

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
	for (let t=0; t < test; t++) {
		let n = parseInt(input[t+1]);
		console.log(n);
	}
});